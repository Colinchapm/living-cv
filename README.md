# Colin Chapman Living CV

A professional Living CV and cloud-engineering portfolio for Colin Chapman, a Cloud and Platform Engineer based in North Tyneside / Newcastle upon Tyne, United Kingdom.

The project is evidence-led. It presents experience, education, skills and portfolio projects truthfully, distinguishes employment from independent development and prototypes, and avoids invented customers, production usage, metrics, testimonials or qualifications.

## Technology Stack

- React, TypeScript, Vite and React Router
- Tailwind CSS
- Vitest, React Testing Library and Playwright
- ESLint and Prettier
- Docker multi-stage build with nginx
- Terraform for Google Cloud infrastructure
- GitHub Actions checks and a prepared Workload Identity Federation deployment workflow

## Project Purpose

The site is a living technical CV containing:

- Professional CV content
- Technical project case studies
- Architecture documentation
- Automated tests
- CI/CD configuration
- Docker and Cloud Run runtime preparation
- Terraform deployment documentation

## Local Development

```bash
npm install
npm run dev
```

## Testing

```bash
npm run lint
npm run type-check
npm test
npm run build
npm run playwright
```

## Docker Execution

```bash
docker build -t living-cv .
docker run --rm -p 8080:8080 -e PORT=8080 living-cv
```

The container serves the Vite `dist` directory through nginx, includes SPA fallback to `index.html`, listens on the Cloud Run `PORT` value with a default of `8080`, and exposes `/health`.

## Deployment Overview

Deployment is prepared but should not be run until Google Cloud project values, GitHub repository variables, Terraform state and Workload Identity Federation outputs are configured.

The deployment design is two-stage: Terraform bootstraps APIs, Artifact Registry, service accounts, IAM and Workload Identity Federation; GitHub Actions then builds the first application image and creates or updates Cloud Run from `main`. Do not create or download a service-account JSON key.

Custom-domain support is available through optional Terraform for a global HTTPS load balancer, managed certificate, static IP address and canonical host redirect. It is disabled by default until the production domain is confirmed.

See `docs/deployment/gcp.md`.

## Search And Social Metadata

SEO routes and descriptions are maintained in `src/data/routes.json`. The build runs `npm run generate:seo`, which generates `robots.txt`, `sitemap.xml`, a web manifest, icon and Open Graph artwork under `public`.

Set `VITE_SITE_URL` before production builds if the final domain differs from the default configured in `src/data/site.ts`.

See:

- `docs/seo/technical-seo.md`
- `docs/seo/search-console.md`
- `docs/seo/domain-launch-checklist.md`

## Repository Structure

- `src/data`: editable CV, skills, experience, education and project content
- `src/pages`: route-level React pages
- `src/components`: reusable layout, project and case-study components
- `tests/e2e`: Playwright smoke tests
- `docs/projects`: project architecture documentation with Mermaid diagrams
- `docs/seo`: technical SEO and domain launch documentation
- `docs/decisions`: architecture decision records
- `infrastructure/terraform`: Google Cloud infrastructure definitions
- `.github/workflows`: validation and prepared deployment workflows
- `nginx`: Cloud Run-compatible nginx configuration
- `public`: static downloadable CV placeholder

## Content Editing

Most editable content should be updated in structured TypeScript data files:

- `src/data/profile.ts`
- `src/data/skills.ts`
- `src/data/experience.ts`
- `src/data/education.ts`
- `src/data/portfolio.ts`
- `src/data/routes.json`
- `src/data/site.ts`

Keep project maturity labels accurate. Use terms such as prototype, concept, demonstration or planned system unless production use has been verified.

Update `public/colin-chapman-cv.txt` when Colin has a final reviewed public CV file.

## Current Implementation Status

- Living CV pages are implemented.
- Three portfolio project cards are implemented.
- Three technical case-study routes are implemented.
- Project architecture docs are implemented.
- Contact form validates locally but is not connected to a backend.
- GitHub URL is configured and LinkedIn remains an optional placeholder.
- Cloud Run deployment is prepared with a two-stage bootstrap flow but not yet deployed.
- Custom-domain infrastructure is documented and optional.
- Search metadata, sitemap, robots file, JSON-LD and Open Graph artwork are generated from reviewed data.
