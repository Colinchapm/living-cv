output "cloud_run_service_url" {
  description = "Cloud Run service URL."
  value       = google_cloud_run_v2_service.app.uri
}

output "artifact_registry_repository" {
  description = "Artifact Registry repository resource."
  value       = google_artifact_registry_repository.app.name
}

output "deployer_service_account" {
  description = "Service account email for GitHub Actions deployment."
  value       = google_service_account.deployer.email
}

output "workload_identity_provider" {
  description = "Workload Identity Provider resource name for GitHub Actions."
  value       = google_iam_workload_identity_pool_provider.github.name
}
