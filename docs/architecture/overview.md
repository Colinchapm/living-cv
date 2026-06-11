# Architecture Overview

This repository provides a static React Living CV deployed as a containerized nginx service on Google Cloud Run.

```mermaid
flowchart LR
  Developer["Developer workstation"] --> GitHub["GitHub repository"]
  GitHub --> Checks["GitHub Actions checks"]
  GitHub --> Deploy["Main branch deployment workflow"]
  Deploy --> WIF["Google Workload Identity Federation"]
  WIF --> DeployerSA["Deployment service account"]
  DeployerSA --> ArtifactRegistry["Artifact Registry"]
  DeployerSA --> CloudRun["Cloud Run service created or updated by Actions"]
  CloudRun --> RuntimeSA["Runtime service account"]
  Visitor["Employer or reviewer"] --> CloudRun
  CloudRun --> Health["/health endpoint"]
```

## Application

The frontend is a React, TypeScript, and Vite single-page app. Pages are routed with React Router, styled with Tailwind CSS, and backed by structured TypeScript data files in `src/data`.

## Runtime

The production container uses a multi-stage Docker build:

1. Node builds the Vite app.
2. nginx serves the generated `dist` files.
3. nginx listens on the Cloud Run `PORT` environment variable, defaulting to `8080`.
4. SPA routes fall back to `index.html`.
5. `/health` returns a successful plaintext response.

## Infrastructure

Terraform declares required Google Cloud APIs, Artifact Registry, runtime and deployment service accounts, IAM bindings, and GitHub Workload Identity Federation. Cloud Run service creation is intentionally performed by GitHub Actions after the first application image is pushed.

## Delivery

Pull requests run install, lint, type-check, unit tests, Playwright smoke tests, and production build. Pushes to `main` can deploy immutable commit-SHA images to Cloud Run through GitHub Actions and Workload Identity Federation without service-account JSON keys. The deployment workflow creates the Cloud Run service on the first deployment and updates it on later deployments.
