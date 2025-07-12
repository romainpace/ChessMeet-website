import sharp from "sharp";
import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ASSETS_DIR = path.join(__dirname, "../attached_assets");
const OUTPUT_DIR = path.join(__dirname, "../client/public/images");

const IMAGE_QUALITY = {
  webp: 85,
  jpg: 90,
};

async function ensureDir(dir) {
  try {
    await fs.mkdir(dir, { recursive: true });
  } catch (error) {
    console.error(`Error creating directory ${dir}:`, error);
  }
}

async function optimizeImage(inputPath, filename) {
  const basename = path.basename(filename, path.extname(filename));

  try {
    // Convert to WebP
    await sharp(inputPath)
      .webp({ quality: IMAGE_QUALITY.webp })
      .toFile(path.join(OUTPUT_DIR, `${basename}.webp`));

    // Also create optimized JPEG as fallback
    await sharp(inputPath)
      .jpeg({ quality: IMAGE_QUALITY.jpg, progressive: true })
      .resize(1200, null, {
        withoutEnlargement: true,
        fit: "inside",
      })
      .toFile(path.join(OUTPUT_DIR, `${basename}-optimized.jpg`));

    console.log(`✓ Optimized ${filename}`);
  } catch (error) {
    console.error(`✗ Error optimizing ${filename}:`, error);
  }
}

async function main() {
  await ensureDir(OUTPUT_DIR);

  const files = await fs.readdir(ASSETS_DIR);
  const imageFiles = files.filter((file) => /\.(jpg|jpeg|png)$/i.test(file));

  console.log(`Found ${imageFiles.length} images to optimize`);

  for (const file of imageFiles) {
    await optimizeImage(path.join(ASSETS_DIR, file), file);
  }

  console.log("\nOptimization complete!");
}

main().catch(console.error);
