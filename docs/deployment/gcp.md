# Google Cloud Run Deployment

This project is prepared for secure automated deployment to Google Cloud Run from GitHub Actions.

Deployments must use Google Workload Identity Federation. Do not create, download or store a service-account JSON key.

## Initial Values

These values are used in examples and can be changed through Terraform variables and GitHub repository settings:

- GitHub repository: `Colinchapm/living-cv`
- Google Cloud region: `europe-west2`
- Artifact Registry repository: `living-cv`
- Cloud Run service: `living-cv`

## Deployment Behaviour

- Pull requests run validation only and do not deploy.
- Pushes to `main` build, push and deploy.
- Images are tagged with the immutable Git commit SHA.
- Cloud Run is configured for public access.
- Cloud Run can scale to zero with `min_instance_count = 0`.
- The container exposes `/health`, supports the Cloud Run `PORT`, and falls back to `index.html` for SPA routes.
- GitHub Actions uses concurrency group `cloud-run-production` to prevent overlapping deployments.
- The deployment workflow writes the deployed revision and service URL to the GitHub Actions summary.

## Required GitHub Repository Variables

Configure these under repository or production-environment variables:

- `GCP_PROJECT_ID`
- `GCP_REGION`
- `GCP_ARTIFACT_REGISTRY`
- `GCP_CLOUD_RUN_SERVICE`

Example values:

```text
GCP_REGION=europe-west2
GCP_ARTIFACT_REGISTRY=living-cv
GCP_CLOUD_RUN_SERVICE=living-cv
```

## Required GitHub Repository Secrets

Configure these as repository or production-environment secrets:

- `GCP_WORKLOAD_IDENTITY_PROVIDER`
- `GCP_SERVICE_ACCOUNT`

Use Terraform outputs for these values:

- `workload_identity_provider`
- `deployment_service_account`

## Terraform

Terraform lives in `infrastructure/terraform`.

Create a local variables file from your real project values:

```bash
terraform -chdir=infrastructure/terraform init
terraform -chdir=infrastructure/terraform plan \
  -var="project_id=YOUR_GCP_PROJECT_ID" \
  -var="region=europe-west2" \
  -var="artifact_registry_repository=living-cv" \
  -var="cloud_run_service=living-cv" \
  -var="github_repository=Colinchapm/living-cv" \
  -var="initial_image=europe-west2-docker.pkg.dev/YOUR_GCP_PROJECT_ID/living-cv/living-cv:bootstrap"
```

The first Cloud Run service creation needs an image that exists. Bootstrap options:

1. Create Artifact Registry with Terraform targeted to the repository.
2. Build and push a temporary bootstrap image.
3. Run the full Terraform plan/apply.
4. Let the GitHub Actions deployment workflow replace the service image with a commit-SHA image.

Do not run `terraform apply` from this feature branch without reviewing the plan.

## GitHub Actions

`validate.yml` runs on pull requests and pushes to `main`.

`deploy-gcp.yml` runs on pushes to `main` and through manual `workflow_dispatch`. It:

1. Authenticates to Google Cloud using Workload Identity Federation.
2. Builds the Docker image.
3. Tags the image as `${GITHUB_SHA}`.
4. Pushes the image to Artifact Registry.
5. Deploys the image to Cloud Run. Public invocation is managed by Terraform, not by the deploy command.
6. Writes the deployed revision and service URL to the job summary.

## Manual Google Cloud Setup Checklist

- Create or select a Google Cloud project with billing enabled.
- Install and authenticate Terraform locally or in a controlled CI environment.
- Configure Terraform state storage before team use.
- Run `terraform plan` and review all IAM bindings.
- Apply Terraform only after review.
- Add the required GitHub variables and secrets.
- Protect `main` and require validation checks before merge.
- Merge through pull request review.
