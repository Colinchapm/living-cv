variable "project_id" {
  description = "Google Cloud project ID."
  type        = string
}

variable "region" {
  description = "Google Cloud region for Artifact Registry and Cloud Run."
  type        = string
  default     = "europe-west2"
}

variable "artifact_repository_id" {
  description = "Artifact Registry repository ID."
  type        = string
  default     = "living-cv"
}

variable "service_name" {
  description = "Cloud Run service name."
  type        = string
  default     = "living-cv"
}

variable "github_repository" {
  description = "GitHub repository allowed to deploy, in owner/repo format."
  type        = string
}

variable "initial_image" {
  description = "Initial container image for Cloud Run. Replace after the first image is pushed."
  type        = string
}
