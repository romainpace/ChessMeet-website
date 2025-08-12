import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SRC_PUBLIC = path.join(__dirname, '../client/public');
const DIST_PUBLIC = path.join(__dirname, '../dist/public');

const FILES = [
  'robots.txt',
  'sitemap.xml',
  'manifest.json',
  'favicon-16x16.png',
  'favicon-32x32.png',
  'apple-touch-icon.png',
  'og-image.jpg',
  'logo.png'
];

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function copyFile(filename) {
  const src = path.join(SRC_PUBLIC, filename);
  const dest = path.join(DIST_PUBLIC, filename);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`✓ Ensured ${filename} at dist/public/`);
  } else {
    console.warn(`! Skipped ${filename} (not found in client/public)`);
  }
}

function run() {
  ensureDir(DIST_PUBLIC);
  FILES.forEach(copyFile);
}

run();


