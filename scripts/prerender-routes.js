// Simple prerender script to snapshot SPA routes into static HTML after build
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import http from 'http';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_PUBLIC = path.join(__dirname, '../dist/public');

const routes = ['/', '/confidentialite', '/cgu', '/support'];

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

async function fetchLocal(urlPath) {
  const indexPath = path.join(DIST_PUBLIC, 'index.html');
  // For a pure static SPA, we can just reuse built index.html for all routes
  // If later you add SSR, replace this by an actual HTTP fetch to the running server.
  return fs.promises.readFile(indexPath, 'utf-8');
}

async function prerender() {
  if (!fs.existsSync(DIST_PUBLIC)) {
    throw new Error('dist/public not found. Build the client first.');
  }

  for (const route of routes) {
    const html = await fetchLocal(route);
    const outDir = path.join(DIST_PUBLIC, route);
    const fileDir = route === '/' ? DIST_PUBLIC : outDir;
    ensureDir(fileDir);
    await fs.promises.writeFile(path.join(fileDir, 'index.html'), html, 'utf-8');
    console.log(`✓ Prerendered ${route}`);
  }
}

prerender().catch((err) => {
  console.error(err);
  process.exit(1);
});


