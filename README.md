# Colin Chapman Living CV

A professional Living CV and cloud-engineering portfolio foundation for Colin Chapman.

The project is intentionally evidence-led. It avoids invented employment, qualifications, testimonials, customer claims, and statistics. CV and portfolio content lives in structured TypeScript data files under `src/data`.

## Stack

- React, TypeScript, Vite, React Router, Tailwind CSS
- Vitest, React Testing Library, Playwright
- ESLint and Prettier
- Docker multi-stage build with nginx
- Terraform for Google Cloud Artifact Registry, Cloud Run, IAM, APIs, and Workload Identity Federation
- GitHub Actions for validation and prepared Cloud Run deployment

## Local Development

```bash
npm install
npm run dev
```

## Validation

```bash
npm run lint
npm run type-check
npm test
npm run build
npm run playwright
```

## Docker

```bash
docker build -t living-cv .
docker run --rm -p 8080:8080 -e PORT=8080 living-cv
```

The container serves the Vite `dist` directory through nginx, includes SPA fallback to `index.html`, and exposes `/health`.

## Deployment

Deployment is prepared but should not be run until Google Cloud project values, GitHub repository variables, and Terraform state are configured. See `docs/deployment/gcp.md`.

## Documentation

- `docs/architecture/overview.md`
- `docs/deployment/gcp.md`
- `docs/decisions/0001-use-cloud-run.md`
- `SECURITY.md`
