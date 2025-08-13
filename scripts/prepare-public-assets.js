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
  // Ensure robots.txt (if missing)
  const robotsPath = path.join(PUBLIC_DIR, 'robots.txt');
  if (!fs.existsSync(robotsPath)) {
    const robots = `User-agent: *\nAllow: /\n\nSitemap: https://chessmeet.fr/sitemap.xml\n`;
    fs.writeFileSync(robotsPath, robots, 'utf-8');
    console.log('✓ Created robots.txt');
  }

  // Ensure manifest.json (if missing)
  const manifestPath = path.join(PUBLIC_DIR, 'manifest.json');
  if (!fs.existsSync(manifestPath)) {
    const manifest = {
      name: 'ChessMeet',
      short_name: 'ChessMeet',
      start_url: '/',
      display: 'standalone',
      background_color: '#FFFFFF',
      theme_color: '#D4A574',
      icons: [
        { src: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
        { src: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { src: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' }
      ]
    };
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf-8');
    console.log('✓ Created manifest.json');
  }

  // Seed a minimal sitemap.xml (will be regenerated later by build-blog)
  const sitemapPath = path.join(PUBLIC_DIR, 'sitemap.xml');
  if (!fs.existsSync(sitemapPath)) {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>https://chessmeet.fr/</loc>\n    <changefreq>weekly</changefreq>\n    <priority>1.0</priority>\n  </url>\n</urlset>\n`;
    fs.writeFileSync(sitemapPath, sitemap, 'utf-8');
    console.log('✓ Seeded sitemap.xml');
  }
  // Logo used in Organization schema, general usage
  copyIfExists('chess-knight-logo.png', 'logo.png');

  // Try to provide an OG image; prefer a landing screenshot if present
  if (fs.existsSync(path.join(SRC_DIR, 'capture-accueil.jpg'))) {
    copyIfExists('capture-accueil.jpg', 'og-image.jpg');
  } else if (fs.existsSync(path.join(SRC_DIR, 'chess_knight_transparent.png'))) {
    copyIfExists('chess_knight_transparent.png', 'og-image.jpg');
  }
}

run();


