resource "google_artifact_registry_repository" "living_cv" {
  project       = var.project_id
  location      = var.region
  repository_id = var.artifact_registry_repository
  description   = "Container images for Colin Chapman's Living CV."
  format        = "DOCKER"
  labels        = local.labels

  depends_on = [google_project_service.required]
}
