import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const routes = JSON.parse(await readFile(path.join(root, 'src/data/routes.json'), 'utf8'));
const siteSource = await readFile(path.join(root, 'src/data/site.ts'), 'utf8');
const productionUrlMatch = siteSource.match(
  /productionUrl:\s*import\.meta\.env\.VITE_SITE_URL \?\? '([^']+)'/,
);
const productionUrl = (process.env.VITE_SITE_URL ?? productionUrlMatch?.[1] ?? '').replace(
  /\/$/,
  '',
);

if (!productionUrl || productionUrl.includes('example')) {
  throw new Error('A non-placeholder production URL is required to generate SEO assets.');
}

const publicDir = path.join(root, 'public');
await mkdir(path.join(publicDir, 'og'), { recursive: true });
await mkdir(path.join(publicDir, 'icons'), { recursive: true });

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${productionUrl}${route.path}</loc>
    <changefreq>monthly</changefreq>
    <priority>${route.path === '/' ? '1.0' : '0.7'}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${productionUrl}/sitemap.xml
`;

const ogImage = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img" aria-labelledby="title desc">
  <title id="title">Colin Chapman Cloud and Platform Engineer</title>
  <desc id="desc">Open Graph preview for Colin Chapman's Living CV.</desc>
  <rect width="1200" height="630" fill="#0f172a"/>
  <path d="M80 140h1040M80 490h1040" stroke="#1e293b" stroke-width="2"/>
  <path d="M140 210h240M140 260h420M140 310h320" stroke="#38bdf8" stroke-width="14" stroke-linecap="round" opacity=".95"/>
  <path d="M720 200h300v180H720z" fill="none" stroke="#38bdf8" stroke-width="6"/>
  <path d="M760 250h220M760 300h140M760 350h180" stroke="#e2e8f0" stroke-width="8" stroke-linecap="round"/>
  <text x="140" y="405" fill="#f8fafc" font-family="Inter, Arial, sans-serif" font-size="58" font-weight="700">Colin Chapman</text>
  <text x="140" y="462" fill="#bae6fd" font-family="Inter, Arial, sans-serif" font-size="34">Cloud &amp; Platform Engineer</text>
  <text x="140" y="525" fill="#cbd5e1" font-family="Inter, Arial, sans-serif" font-size="25">AWS | Azure | Google Cloud | Terraform | GitHub Actions</text>
</svg>
`;

const icon = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" role="img" aria-label="Colin Chapman Living CV icon">
  <rect width="512" height="512" rx="96" fill="#0f172a"/>
  <path d="M132 184c34-58 103-86 168-66 47 15 83 52 98 99 43 11 74 49 74 95 0 54-44 98-98 98H148c-61 0-110-49-110-110 0-55 40-101 94-116Z" fill="#38bdf8"/>
  <path d="M155 276h202M155 326h145" stroke="#0f172a" stroke-width="28" stroke-linecap="round"/>
</svg>
`;

const manifest = {
  name: 'Colin Chapman Living CV',
  short_name: 'Colin Chapman',
  description: 'Cloud and Platform Engineer Living CV and DevOps portfolio.',
  start_url: '/',
  scope: '/',
  display: 'standalone',
  background_color: '#0f172a',
  theme_color: '#0f172a',
  icons: [
    {
      src: '/icons/icon.svg',
      sizes: 'any',
      type: 'image/svg+xml',
      purpose: 'any maskable',
    },
  ],
};

await writeFile(path.join(publicDir, 'sitemap.xml'), sitemap);
await writeFile(path.join(publicDir, 'robots.txt'), robots);
await writeFile(path.join(publicDir, 'og/colin-chapman-cloud-platform-engineer.svg'), ogImage);
await writeFile(path.join(publicDir, 'icons/icon.svg'), icon);
await writeFile(path.join(publicDir, 'site.webmanifest'), `${JSON.stringify(manifest, null, 2)}\n`);
