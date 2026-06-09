resource "google_service_account" "github_deployer" {
  project      = var.project_id
  account_id   = "${var.cloud_run_service}-deployer"
  display_name = "Living CV GitHub Actions deployer"
  description  = "Deployment identity used by GitHub Actions through Workload Identity Federation."

  depends_on = [google_project_service.required]
}

resource "google_service_account_iam_member" "github_workload_identity_user" {
  service_account_id = google_service_account.github_deployer.name
  role               = "roles/iam.workloadIdentityUser"
  member             = "principalSet://iam.googleapis.com/${google_iam_workload_identity_pool.github.name}/attribute.repository/${var.github_repository}"
}

resource "google_artifact_registry_repository_iam_member" "deployer_artifact_writer" {
  project    = google_artifact_registry_repository.living_cv.project
  location   = google_artifact_registry_repository.living_cv.location
  repository = google_artifact_registry_repository.living_cv.repository_id
  role       = "roles/artifactregistry.writer"
  member     = "serviceAccount:${google_service_account.github_deployer.email}"
}

resource "google_project_iam_member" "deployer_run_developer" {
  project = var.project_id
  role    = "roles/run.developer"
  member  = "serviceAccount:${google_service_account.github_deployer.email}"
}

resource "google_service_account_iam_member" "deployer_runtime_user" {
  service_account_id = google_service_account.cloud_run_runtime.name
  role               = "roles/iam.serviceAccountUser"
  member             = "serviceAccount:${google_service_account.github_deployer.email}"
}
