import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SOURCE_LOGO = path.join(__dirname, '../attached_assets/chess-knight-logo.png');
const OUTPUT_DIR = path.join(__dirname, '../client/public');

async function generateIcons() {
  try {
    // Generate 192x192 icon
    await sharp(SOURCE_LOGO)
      .resize(192, 192, {
        fit: 'contain',
        background: { r: 245, g: 230, b: 211, alpha: 1 } // ChessMeet beige background
      })
      .png()
      .toFile(path.join(OUTPUT_DIR, 'icon-192.png'));
    
    console.log('✓ Generated icon-192.png');
    
    // Generate 512x512 icon
    await sharp(SOURCE_LOGO)
      .resize(512, 512, {
        fit: 'contain',
        background: { r: 245, g: 230, b: 211, alpha: 1 }
      })
      .png()
      .toFile(path.join(OUTPUT_DIR, 'icon-512.png'));
    
    console.log('✓ Generated icon-512.png');
    
    // Generate favicon-32x32
    await sharp(SOURCE_LOGO)
      .resize(32, 32, {
        fit: 'contain',
        background: { r: 245, g: 230, b: 211, alpha: 1 }
      })
      .png()
      .toFile(path.join(OUTPUT_DIR, 'favicon-32x32.png'));
    
    console.log('✓ Generated favicon-32x32.png');
    
    // Generate favicon-16x16
    await sharp(SOURCE_LOGO)
      .resize(16, 16, {
        fit: 'contain',
        background: { r: 245, g: 230, b: 211, alpha: 1 }
      })
      .png()
      .toFile(path.join(OUTPUT_DIR, 'favicon-16x16.png'));
    
    console.log('✓ Generated favicon-16x16.png');
    
    // Generate apple-touch-icon
    await sharp(SOURCE_LOGO)
      .resize(180, 180, {
        fit: 'contain',
        background: { r: 245, g: 230, b: 211, alpha: 1 }
      })
      .png()
      .toFile(path.join(OUTPUT_DIR, 'apple-touch-icon.png'));
    
    console.log('✓ Generated apple-touch-icon.png');
    
  } catch (error) {
    console.error('Error generating icons:', error);
  }
}

generateIcons();