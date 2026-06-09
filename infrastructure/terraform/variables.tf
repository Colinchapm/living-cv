variable "project_id" {
  description = "Google Cloud project ID."
  type        = string
}

variable "region" {
  description = "Google Cloud region for Artifact Registry and Cloud Run."
  type        = string
  default     = "europe-west2"
}

variable "artifact_registry_repository" {
  description = "Artifact Registry Docker repository name."
  type        = string
  default     = "living-cv"
}

variable "cloud_run_service" {
  description = "Cloud Run service name."
  type        = string
  default     = "living-cv"
}

variable "github_repository" {
  description = "GitHub repository allowed to deploy, in owner/repo format."
  type        = string
  default     = "Colinchapm/living-cv"
}

variable "initial_image" {
  description = "Initial image used to create the Cloud Run service. Replace with a pushed Artifact Registry image before first apply."
  type        = string
}

variable "max_instance_count" {
  description = "Maximum Cloud Run instances for the portfolio service."
  type        = number
  default     = 3
}
