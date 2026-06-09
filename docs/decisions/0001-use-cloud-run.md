# 0001 Use Cloud Run

## Status

Accepted

## Context

The Living CV needs a simple, reviewable production target on Google Cloud that demonstrates cloud deployment, containerization, health checks, IAM, and CI/CD practices without requiring a large platform footprint.

## Decision

Use Google Cloud Run to host the containerized React application served by nginx.

## Consequences

- The app can be deployed as an immutable container image.
- Runtime operations remain small and suitable for a portfolio project.
- Cloud Run integrates with Artifact Registry, IAM, and Workload Identity Federation.
- The application must listen on the `PORT` provided by Cloud Run and expose a health endpoint.
