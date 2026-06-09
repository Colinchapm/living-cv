resource "google_service_account" "cloud_run_runtime" {
  project      = var.project_id
  account_id   = "${var.cloud_run_service}-runtime"
  display_name = "Living CV Cloud Run runtime"
  description  = "Runtime identity for the Living CV Cloud Run service."

  depends_on = [google_project_service.required]
}

resource "google_cloud_run_v2_service" "living_cv" {
  project  = var.project_id
  name     = var.cloud_run_service
  location = var.region

  labels = local.labels

  ingress = "INGRESS_TRAFFIC_ALL"

  template {
    service_account = google_service_account.cloud_run_runtime.email
    timeout         = "30s"

    scaling {
      min_instance_count = 0
      max_instance_count = var.max_instance_count
    }

    containers {
      image = var.initial_image

      ports {
        name           = "http1"
        container_port = 8080
      }

      startup_probe {
        http_get {
          path = "/health"
        }
        initial_delay_seconds = 0
        timeout_seconds       = 5
        period_seconds        = 10
        failure_threshold     = 3
      }

      liveness_probe {
        http_get {
          path = "/health"
        }
        timeout_seconds   = 5
        period_seconds    = 30
        failure_threshold = 3
      }
    }
  }

  lifecycle {
    ignore_changes = [
      template[0].containers[0].image,
    ]
  }

  depends_on = [
    google_artifact_registry_repository.living_cv,
    google_project_service.required,
  ]
}

resource "google_cloud_run_v2_service_iam_member" "public_invoker" {
  project  = google_cloud_run_v2_service.living_cv.project
  location = google_cloud_run_v2_service.living_cv.location
  name     = google_cloud_run_v2_service.living_cv.name
  role     = "roles/run.invoker"
  member   = "allUsers"
}
