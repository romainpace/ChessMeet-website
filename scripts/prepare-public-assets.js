import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SRC_DIR = path.join(__dirname, '../attached_assets');
const PUBLIC_DIR = path.join(__dirname, '../client/public');

function copyIfExists(srcName, destName) {
  const src = path.join(SRC_DIR, srcName);
  const dest = path.join(PUBLIC_DIR, destName);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`✓ Copied ${srcName} -> ${destName}`);
  }
}

function ensurePublicDir() {
  if (!fs.existsSync(PUBLIC_DIR)) fs.mkdirSync(PUBLIC_DIR, { recursive: true });
}

function run() {
  ensurePublicDir();
  // Logo used in Organization schema and general usage
  copyIfExists('chess-knight-logo.png', 'logo.png');

  // Try to provide an OG image; prefer a landing screenshot if present
  if (fs.existsSync(path.join(SRC_DIR, 'capture-accueil.jpg'))) {
    copyIfExists('capture-accueil.jpg', 'og-image.jpg');
  } else if (fs.existsSync(path.join(SRC_DIR, 'chess_knight_transparent.png'))) {
    copyIfExists('chess_knight_transparent.png', 'og-image.jpg');
  }
}

run();


