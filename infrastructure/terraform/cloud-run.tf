resource "google_service_account" "cloud_run_runtime" {
  project      = var.project_id
  account_id   = "${var.cloud_run_service}-runtime"
  display_name = "Living CV Cloud Run runtime"
  description  = "Runtime identity for the Living CV Cloud Run service."

  depends_on = [google_project_service.required]
}
