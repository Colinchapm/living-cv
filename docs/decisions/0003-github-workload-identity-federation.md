# 0003 GitHub Workload Identity Federation

## Status

Accepted

## Context

The Living CV needs automated deployment from GitHub Actions to Google Cloud without storing long-lived Google Cloud credentials in GitHub.

## Decision

Use Google Workload Identity Federation for GitHub Actions authentication. GitHub receives an OIDC token for the workflow run and exchanges it for short-lived Google Cloud credentials through a Workload Identity Provider restricted to `Colinchapm/living-cv` on `refs/heads/main`.

## Consequences

- No downloadable service-account JSON keys are required.
- Deployment access can be limited to the main branch.
- Google Cloud IAM grants can be scoped to Artifact Registry writing, Cloud Run deployment and runtime service-account usage.
- GitHub repository secrets still need to store the provider resource name and deployment service-account email.
