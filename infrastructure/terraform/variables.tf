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

variable "enable_custom_domain" {
  description = "Whether to provision global external HTTPS load balancer resources for a custom domain."
  type        = bool
  default     = false
}

variable "custom_domain" {
  description = "Apex custom domain for the Living CV."
  type        = string
  default     = "colinchapman.co.uk"

  validation {
    condition     = var.custom_domain == "" || can(regex("^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?(\\.[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)+$", var.custom_domain))
    error_message = "custom_domain must be empty or an apex host such as colinchapman.co.uk."
  }
}

variable "www_domain" {
  description = "WWW hostname for the Living CV custom domain."
  type        = string
  default     = "www.colinchapman.co.uk"

  validation {
    condition     = var.www_domain == "" || can(regex("^www\\.[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?(\\.[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)+$", var.www_domain))
    error_message = "www_domain must be empty or a www host such as www.colinchapman.co.uk."
  }
}

variable "redirect_www_to_apex" {
  description = "When true, redirect www.custom_domain to the apex domain. When false, redirect apex to www.custom_domain."
  type        = bool
  default     = true
}

