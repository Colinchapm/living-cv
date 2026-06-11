# 0004 Cloud Run Production Deployment

## Status

Accepted

## Context

The Living CV is a static React application served by nginx. It needs a low-operations Google Cloud hosting target that demonstrates container delivery, health checks, deployment automation and rollback-friendly revisions.

## Decision

Deploy the application to Google Cloud Run from immutable commit-SHA container images stored in Artifact Registry.

Cloud Run service creation is handled by GitHub Actions rather than Terraform. Terraform bootstraps Artifact Registry, service accounts, IAM and Workload Identity Federation first; the deployment workflow then builds the first application image and creates the Cloud Run service.

## Consequences

- Cloud Run can scale to zero for low idle cost.
- Public access is configured during deployment with `--allow-unauthenticated`.
- Each deployment creates an auditable Cloud Run revision tied to a Git commit SHA image tag.
- The container must support the Cloud Run `PORT`, expose `/health` and serve SPA fallback routes.
- Pull requests validate only; production deployment happens from `main`.
- The initial Terraform apply succeeds without a placeholder container image.
