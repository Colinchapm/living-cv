output "artifact_registry_repository" {
  description = "Artifact Registry repository resource name."
  value       = google_artifact_registry_repository.living_cv.name
}

output "cloud_run_service_url" {
  description = "Public Cloud Run service URL."
  value       = google_cloud_run_v2_service.living_cv.uri
}

output "deployment_service_account" {
  description = "Service account email for GitHub Actions deployment."
  value       = google_service_account.github_deployer.email
}

output "workload_identity_provider" {
  description = "Workload Identity Provider resource name for GitHub Actions."
  value       = google_iam_workload_identity_pool_provider.github.name
}
