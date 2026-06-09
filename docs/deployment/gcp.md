# Google Cloud Deployment

Deployment is prepared but not enabled by default. Complete these steps before running the manual deployment workflow.

## Prerequisites

- Google Cloud project with billing enabled
- Terraform 1.6 or later
- GitHub repository for this project
- Permissions to create IAM, Artifact Registry, Cloud Run, and Workload Identity Federation resources

## Terraform

Create a Terraform variables file from the example:

```bash
cp terraform/terraform.tfvars.example terraform/terraform.tfvars
```

Set:

- `project_id`
- `region`
- `artifact_repository_id`
- `service_name`
- `github_repository`
- `initial_image`

The `initial_image` must reference an image that exists before Cloud Run can create the service. A common bootstrap path is to build and push an initial image manually after Artifact Registry exists, then run Terraform for Cloud Run.

Run:

```bash
terraform -chdir=terraform init
terraform -chdir=terraform plan
terraform -chdir=terraform apply
```

## GitHub Repository Variables

Configure these repository or environment variables:

- `GCP_PROJECT_ID`
- `GCP_REGION`
- `GCP_ARTIFACT_REPOSITORY`
- `GCP_CLOUD_RUN_SERVICE`
- `GCP_WORKLOAD_IDENTITY_PROVIDER`
- `GCP_DEPLOYER_SERVICE_ACCOUNT`

Use Terraform outputs for:

- `workload_identity_provider`
- `deployer_service_account`

## Deployment Workflow

The deployment workflow is manual through `workflow_dispatch`. It authenticates with Google Workload Identity Federation and does not require a downloadable service-account JSON key.

Do not run deployment from this initial pull request. Merge the foundation, configure Google Cloud and GitHub variables, then trigger the workflow with a chosen image tag.
