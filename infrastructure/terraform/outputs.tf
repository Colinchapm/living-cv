output "project_id" {
  description = "Google Cloud project ID."
  value       = var.project_id
}

output "region" {
  description = "Google Cloud region."
  value       = var.region
}

output "artifact_registry_repository" {
  description = "Artifact Registry repository resource name."
  value       = google_artifact_registry_repository.living_cv.name
}

output "artifact_registry_repository_id" {
  description = "Artifact Registry repository ID for GitHub variable GCP_ARTIFACT_REGISTRY."
  value       = google_artifact_registry_repository.living_cv.repository_id
}

output "cloud_run_service_name" {
  description = "Cloud Run service name for GitHub variable GCP_CLOUD_RUN_SERVICE."
  value       = var.cloud_run_service
}

output "deployment_service_account" {
  description = "Service account email for GitHub Actions deployment."
  value       = google_service_account.github_deployer.email
}

output "runtime_service_account" {
  description = "Runtime service account email used by Cloud Run deployments."
  value       = google_service_account.cloud_run_runtime.email
}

output "workload_identity_provider" {
  description = "Workload Identity Provider resource name for GitHub Actions."
  value       = google_iam_workload_identity_pool_provider.github.name
}

output "github_repository_variables" {
  description = "GitHub repository variable values to configure."
  value = {
    GCP_PROJECT_ID        = var.project_id
    GCP_REGION            = var.region
    GCP_ARTIFACT_REGISTRY = google_artifact_registry_repository.living_cv.repository_id
    GCP_CLOUD_RUN_SERVICE = var.cloud_run_service
  }
}

output "github_repository_secret_identifiers" {
  description = "GitHub repository secret identifiers and the Terraform outputs that provide their values. These are identifiers only, not credentials."
  value = {
    GCP_WORKLOAD_IDENTITY_PROVIDER = "workload_identity_provider"
    GCP_SERVICE_ACCOUNT            = "deployment_service_account"
  }
}
