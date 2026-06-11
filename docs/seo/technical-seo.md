# Technical SEO

The Living CV uses structured content and generated static assets so search metadata stays reviewable.

## Canonical URL

The default production URL is configured in `src/data/site.ts` and can be overridden at build time with:

```bash
VITE_SITE_URL=https://colinchapman.dev npm run build
```

Use the confirmed production domain before launch. Do not leave localhost, example domains or temporary Cloud Run URLs in production metadata.

## Generated Assets

`npm run generate:seo` creates:

- `public/sitemap.xml`
- `public/robots.txt`
- `public/site.webmanifest`
- `public/icons/icon.svg`
- `public/og/colin-chapman-cloud-platform-engineer.svg`

The production build runs this script automatically before TypeScript and Vite build steps.

Routes are sourced from `src/data/routes.json`. Add new public pages there so the sitemap, tests and page metadata stay aligned.

## Page Metadata

Page components use `src/components/Meta.tsx` for:

- title
- meta description
- canonical URL
- Open Graph title, description, image and URL
- Twitter summary card metadata
- optional `noindex`
- JSON-LD structured data

Structured data helpers live in `src/data/structuredData.ts`.

## Robots And Sitemap

`robots.txt` allows public crawling and points crawlers to the sitemap. `sitemap.xml` includes all public Living CV and project case-study routes.

## Content Safety Checks

Tests check for placeholder contact values, placeholder production domains, route metadata uniqueness and sitemap coverage. They also parse JSON-LD output to catch malformed structured data before deployment.
