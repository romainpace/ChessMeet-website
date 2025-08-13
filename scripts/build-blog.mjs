import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';
import { marked } from 'marked';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT = path.join(__dirname, '..');
const CONTENT_DIR = path.join(ROOT, 'content', 'posts');
const DIST_PUBLIC = path.join(ROOT, 'dist', 'public');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function htmlShell({ title, description, body, canonical, ogImage }) {
  // Load built index.html as base shell
  const base = fs.readFileSync(path.join(DIST_PUBLIC, 'index.html'), 'utf-8');
  const withTitle = base.replace(/<title>.*?<\/title>/s, `<title>${title}</title>`);
  const metaDescTag = `<meta name="description" content="${description}" />`;
  const addDesc = withTitle.replace('</head>', `${metaDescTag}\n</head>`);
  const ogTags = `\n<meta property="og:title" content="${title}" />\n<meta property="og:description" content="${description}" />\n${ogImage ? `<meta property=\"og:image\" content=\"${ogImage}\" />` : ''}\n<link rel="canonical" href="${canonical}" />\n`;
  const withOg = addDesc.replace('</head>', `${ogTags}</head>`);
  return withOg.replace('<div id="root"></div>', `<div id="root">${body}</div>`);
}

async function build() {
  ensureDir(DIST_PUBLIC);

  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.mdx'));
  const posts = [];

  for (const file of files) {
    const full = path.join(CONTENT_DIR, file);
    const raw = fs.readFileSync(full, 'utf-8');
    const { content, data } = matter(raw);
    if (data.draft) continue;
    const slug = data.slug || file.replace(/\.mdx$/, '');

    const body = marked.parse(content);
    const canonical = `https://chessmeet.fr/blog/${slug}`;
    const html = htmlShell({
      title: `${data.title} | ChessMeet`,
      description: data.description || '',
      body,
      canonical,
      ogImage: data.cover || '/og-image.jpg'
    });

    const outDir = path.join(DIST_PUBLIC, 'blog', slug);
    ensureDir(outDir);
    fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf-8');
    fs.writeFileSync(path.join(outDir, 'post.json'), JSON.stringify({
      title: data.title,
      description: data.description || '',
      slug,
      date: data.date || new Date().toISOString(),
      cover: data.cover,
      html: body
    }), 'utf-8');

    posts.push({
      title: data.title,
      description: data.description || '',
      slug,
      date: data.date || new Date().toISOString(),
      tags: data.tags || [],
      cover: data.cover
    });
  }

  // Sort by date desc
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  // Blog index prerender (shell + simple list from manifest on client)
  const indexShell = fs.readFileSync(path.join(DIST_PUBLIC, 'index.html'), 'utf-8');
  const indexHtml = indexShell.replace('<div id="root"></div>', '<div id="root"></div>');
  ensureDir(path.join(DIST_PUBLIC, 'blog'));
  fs.writeFileSync(path.join(DIST_PUBLIC, 'blog', 'index.html'), indexHtml, 'utf-8');

  // Posts manifest for client list
  fs.writeFileSync(path.join(DIST_PUBLIC, 'posts.manifest.json'), JSON.stringify({ posts }, null, 2));

  // Re-generate sitemap.xml with lastmod and blog index
  const sitemapPath = path.join(DIST_PUBLIC, 'sitemap.xml');
  const staticPages = [
    { loc: '/', file: 'index.html', changefreq: 'weekly', priority: '1.0' },
    { loc: '/confidentialite', file: path.join('confidentialite', 'index.html'), changefreq: 'monthly', priority: '0.6' },
    { loc: '/cgu', file: path.join('cgu', 'index.html'), changefreq: 'monthly', priority: '0.6' },
    { loc: '/support', file: path.join('support', 'index.html'), changefreq: 'monthly', priority: '0.5' },
    { loc: '/a-propos', file: path.join('a-propos', 'index.html'), changefreq: 'yearly', priority: '0.4' },
    { loc: '/mentions-legales', file: path.join('mentions-legales', 'index.html'), changefreq: 'yearly', priority: '0.4' },
    { loc: '/blog', file: path.join('blog', 'index.html'), changefreq: 'weekly', priority: '0.6' },
  ];

  function getLastmodFor(fileRel) {
    try {
      const stat = fs.statSync(path.join(DIST_PUBLIC, fileRel));
      return new Date(stat.mtime).toISOString();
    } catch {
      return new Date().toISOString();
    }
  }

  const staticEntries = staticPages.map(p => `  <url>\n    <loc>https://chessmeet.fr${p.loc}</loc>\n    <lastmod>${getLastmodFor(p.file)}</lastmod>\n    <changefreq>${p.changefreq}</changefreq>\n    <priority>${p.priority}</priority>\n  </url>`).join('\n');

  const postEntries = posts.map(p => {
    const fileRel = path.join('blog', p.slug, 'index.html');
    const lastmod = p.date ? new Date(p.date).toISOString() : getLastmodFor(fileRel);
    return `  <url>\n    <loc>https://chessmeet.fr/blog/${p.slug}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.6</priority>\n  </url>`;
  }).join('\n');

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${staticEntries}\n${postEntries}\n</urlset>\n`;
  fs.writeFileSync(sitemapPath, sitemapXml, 'utf-8');
}

build().catch((e) => {
  console.error(e);
  process.exit(1);
});


