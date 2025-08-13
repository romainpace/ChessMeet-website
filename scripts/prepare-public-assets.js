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

  // Seed sitemap.xml with all static routes so production always has a complete sitemap
  const sitemapPath = path.join(PUBLIC_DIR, 'sitemap.xml');
  if (!fs.existsSync(sitemapPath)) {
    const now = new Date().toISOString();
    const staticUrls = [
      { loc: '/', changefreq: 'weekly', priority: '1.0' },
      { loc: '/confidentialite', changefreq: 'monthly', priority: '0.6' },
      { loc: '/cgu', changefreq: 'monthly', priority: '0.6' },
      { loc: '/support', changefreq: 'monthly', priority: '0.5' },
      { loc: '/a-propos', changefreq: 'yearly', priority: '0.4' },
      { loc: '/mentions-legales', changefreq: 'yearly', priority: '0.4' },
      // include /blog index if present later; it is harmless to list it early
      { loc: '/blog', changefreq: 'weekly', priority: '0.6' },
    ];
    const entries = staticUrls
      .map(
        (u) =>
          `  <url>\n    <loc>https://chessmeet.fr${u.loc}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`
      )
      .join('\n');
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`;
    fs.writeFileSync(sitemapPath, sitemap, 'utf-8');
    console.log('✓ Seeded sitemap.xml (static routes)');
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


