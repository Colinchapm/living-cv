# Google Cloud Run Deployment

This project uses a two-stage deployment design so infrastructure can be bootstrapped before the first application container image exists.

Deployments must use Google Workload Identity Federation. Do not create, download or store a service-account JSON key.

## Initial Values

These values are used in examples and can be changed through Terraform variables and GitHub repository settings:

- GitHub repository: `Colinchapm/living-cv`
- Google Cloud region: `europe-west2`
- Artifact Registry repository: `living-cv`
- Cloud Run service: `living-cv`

## Stage A: Infrastructure Bootstrap

Terraform provisions the deployment foundation only:

- required Google Cloud APIs
- Artifact Registry
- deployment service account
- Cloud Run runtime service account
- Workload Identity Pool
- GitHub Workload Identity Provider
- least-practical IAM bindings
- repository and branch-restricted GitHub identity permissions

Terraform does not create the initial Cloud Run service. That removes the dependency on a pre-existing application image.

### Steps

1. Create or select the Google Cloud project.
2. Enable billing.
3. Authenticate gcloud:

   ```bash
   gcloud auth login
   ```

4. Set the active project:

   ```bash
   gcloud config set project YOUR_GCP_PROJECT_ID
   ```

5. Initialise Terraform:

   ```bash
   terraform -chdir=infrastructure/terraform init
   ```

6. Run Terraform plan:

   ```bash
   terraform -chdir=infrastructure/terraform plan \
     -var="project_id=YOUR_GCP_PROJECT_ID" \
     -var="region=europe-west2" \
     -var="artifact_registry_repository=living-cv" \
     -var="cloud_run_service=living-cv" \
     -var="github_repository=Colinchapm/living-cv"
   ```

7. Run Terraform apply after reviewing the plan:

   ```bash
   terraform -chdir=infrastructure/terraform apply \
     -var="project_id=YOUR_GCP_PROJECT_ID" \
     -var="region=europe-west2" \
     -var="artifact_registry_repository=living-cv" \
     -var="cloud_run_service=living-cv" \
     -var="github_repository=Colinchapm/living-cv"
   ```

8. Retrieve Terraform outputs:

   ```bash
   terraform -chdir=infrastructure/terraform output
   ```

9. Add GitHub repository variables and secrets.

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

Optional variable:

- `GCP_CLOUD_RUN_RUNTIME_SERVICE_ACCOUNT`

If omitted, the deployment workflow uses:

```text
${GCP_CLOUD_RUN_SERVICE}-runtime@${GCP_PROJECT_ID}.iam.gserviceaccount.com
```

## Required GitHub Repository Secrets

Configure these as repository or production-environment secrets:

- `GCP_WORKLOAD_IDENTITY_PROVIDER`
- `GCP_SERVICE_ACCOUNT`

Use Terraform outputs for these values:

- `workload_identity_provider`
- `deployment_service_account`

## Stage B: First Application Deployment

After Terraform bootstrap and GitHub configuration, the GitHub Actions deployment workflow creates the first Cloud Run service.

### Steps

1. Trigger the first deployment by merging to `main` or using `workflow_dispatch`.
2. GitHub Actions builds the application container.
3. The workflow tags the image with the immutable Git commit SHA.
4. The workflow pushes the image to Artifact Registry.
5. The workflow checks whether the Cloud Run service exists.
6. If the service does not exist, the workflow creates it.
7. If the service exists, the workflow updates it with a new revision.
8. The workflow configures public access with `--allow-unauthenticated`.
9. The workflow uses the configured runtime service account.
10. The workflow sets the region, service port, max instances and scale-to-zero behaviour.
11. The workflow retrieves the public service URL.
12. The workflow tests `/health`.
13. The workflow confirms the deployed revision in the GitHub Actions summary.
14. Review Cloud Run logs in Google Cloud Console or with:

    ```bash
    gcloud run services logs read living-cv --region europe-west2
    ```

## GitHub Actions

`validate.yml` runs on pull requests and pushes to `main`. Pull requests validate but never deploy.

`deploy-gcp.yml` runs on pushes to `main` and through explicit `workflow_dispatch`. It:

1. Validates the app before deployment.
2. Authenticates to Google Cloud using Workload Identity Federation.
3. Builds the Docker image.
4. Tags the image as `${GITHUB_SHA}`.
5. Pushes the image to Artifact Registry.
6. Creates or updates Cloud Run.
7. Verifies `/health`.
8. Writes the deployed revision and service URL to the job summary.

## Troubleshooting

### Missing GitHub Variables

The `Validate deployment configuration` step fails when required variables are empty. Confirm:

- `GCP_PROJECT_ID`
- `GCP_REGION`
- `GCP_ARTIFACT_REGISTRY`
- `GCP_CLOUD_RUN_SERVICE`

### Invalid Workload Identity Provider

Authentication fails if `GCP_WORKLOAD_IDENTITY_PROVIDER` is missing or does not match the Terraform output. Confirm the provider allows repository `Colinchapm/living-cv` and branch `refs/heads/main`.

### Insufficient IAM Permissions

Cloud Run deployment requires the deployment service account to write Artifact Registry images, administer Cloud Run services and act as the runtime service account. Re-check Terraform IAM outputs and apply state.

### Artifact Registry Authentication Failure

Check that:

- Artifact Registry API is enabled.
- The repository exists in `GCP_REGION`.
- Docker auth was configured for `${GCP_REGION}-docker.pkg.dev`.
- The deployment service account has `roles/artifactregistry.writer` on the repository.

### Cloud Run Service Not Found During First Deployment

This is expected on the first deployment. The workflow detects the missing service and uses `gcloud run deploy` to create it.

### Failed Health Check

Check:

- `/health` is served by nginx.
- The service URL in the workflow summary is correct.
- The container started successfully.
- Cloud Run logs for nginx or container startup errors.

### Application Not Listening on PORT

The nginx entrypoint sets `PORT=${PORT:-8080}` and nginx listens on that value. If startup fails, inspect:

- `nginx/default.conf.template`
- `nginx/docker-entrypoint.d/30-render-cloud-run-port.sh`
- Cloud Run container port configuration

## Optional Custom Domain

Custom-domain infrastructure is disabled by default. Enable it only after Cloud Run deployment has been tested and Colin has chosen a confirmed public domain.

Example plan:

```bash
terraform -chdir=infrastructure/terraform plan \
  -var="project_id=YOUR_GCP_PROJECT_ID" \
  -var="custom_domain=colinchapman.dev" \
  -var="enable_custom_domain=true" \
  -var="redirect_www_to_apex=true"
```

When applied, Terraform creates:

- a global static IP address
- a global external HTTPS load balancer
- a regional serverless network endpoint group pointing at Cloud Run
- a Google-managed SSL certificate for the apex and `www` hosts
- HTTP-to-HTTPS redirect
- canonical redirect between apex and `www`

### Domain Launch Steps

1. Purchase or confirm control of the domain.
2. Choose the canonical host, for example `colinchapman.dev`.
3. Apply Terraform with `enable_custom_domain=true`.
4. Retrieve `custom_domain_global_ip_address` from Terraform output.
5. Add DNS `A` records for the apex domain pointing to the global IP address.
6. Add a DNS record for `www`. For the load balancer approach, use an `A` record pointing to the same global IP address unless the DNS provider requires a different pattern.
7. Wait for DNS propagation and for the Google-managed certificate to become active.
8. Verify `https://colinchapman.dev/health`.
9. Verify SPA fallback routes such as `https://colinchapman.dev/projects/serviceflow-construction`.
10. Set `VITE_SITE_URL=https://colinchapman.dev` for production builds if the chosen domain differs from the repository default.
11. Run `npm run generate:seo` or `npm run build` so sitemap and canonical URLs use the chosen domain.
12. Add the property in Google Search Console.
13. Submit `https://colinchapman.dev/sitemap.xml`.
14. Request indexing for the home page and the key project case-study pages.

Do not use a downloadable service-account JSON key for any deployment step.

## Manual Google Cloud Setup Checklist

- Create or select a Google Cloud project with billing enabled.
- Install and authenticate Terraform locally or in a controlled CI environment.
- Configure Terraform state storage before team use.
- Run `terraform plan` and review all IAM bindings.
- Apply Terraform only after review.
- Add the required GitHub variables and secrets.
- Protect `main` and require validation checks before merge.
- Merge through pull request review.
- Confirm the production domain and canonical host before enabling custom-domain Terraform.
