# Deployment Failure Runbook

Use this runbook when the `Deploy to Google Cloud Run` GitHub Actions workflow fails.

## Immediate Checks

1. Open the failed workflow run.
2. Confirm whether the failure happened during authentication, Docker build, image push or Cloud Run deploy.
3. Check the GitHub Actions summary and logs.
4. Confirm the workflow ran from `main` or an intentional manual dispatch.

## Authentication Failures

Check:

- `GCP_WORKLOAD_IDENTITY_PROVIDER` secret exists.
- `GCP_SERVICE_ACCOUNT` secret exists.
- Terraform output values were copied exactly.
- Workload Identity Provider condition allows `Colinchapm/living-cv` on `refs/heads/main`.
- GitHub workflow permissions include `id-token: write`.

Do not fix authentication by creating a service-account JSON key.

## Image Build Failures

Run locally:

```bash
npm.cmd run build
docker build -t living-cv:local .
```

Check recent changes to:

- `Dockerfile`
- `package-lock.json`
- Vite build configuration
- nginx configuration

## Artifact Registry Push Failures

Check:

- `GCP_PROJECT_ID`
- `GCP_REGION`
- `GCP_ARTIFACT_REGISTRY`
- Artifact Registry repository exists in the configured region.
- Deployment service account has `roles/artifactregistry.writer` on the repository.

## Cloud Run Deploy Failures

Check:

- `GCP_CLOUD_RUN_SERVICE`
- Cloud Run API is enabled.
- Deployment service account has `roles/run.developer` on the service.
- Deployment service account can act as the runtime service account.
- The container listens on the Cloud Run `PORT`.
- `/health` returns a successful response.

## Recovery

If a deployment failed before creating a new ready revision, the previous ready Cloud Run revision should continue serving traffic. If a bad revision is receiving traffic, use the rollback runbook.
