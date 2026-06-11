locals {
  custom_domain_enabled = var.enable_custom_domain && var.custom_domain != ""
  apex_domain           = var.custom_domain
  www_domain            = var.custom_domain == "" ? "" : "www.${var.custom_domain}"
  canonical_domain      = var.redirect_www_to_apex ? local.apex_domain : local.www_domain
  redirect_domain       = var.redirect_www_to_apex ? local.www_domain : local.apex_domain
  certificate_domains   = local.custom_domain_enabled ? [local.apex_domain, local.www_domain] : []
}

resource "google_compute_global_address" "custom_domain" {
  count = local.custom_domain_enabled ? 1 : 0

  project    = var.project_id
  name       = "${var.cloud_run_service}-lb-ip"
  ip_version = "IPV4"

  depends_on = [google_project_service.required]
}

resource "google_compute_region_network_endpoint_group" "cloud_run" {
  count = local.custom_domain_enabled ? 1 : 0

  project               = var.project_id
  name                  = "${var.cloud_run_service}-serverless-neg"
  network_endpoint_type = "SERVERLESS"
  region                = var.region

  cloud_run {
    service = var.cloud_run_service
  }

  depends_on = [google_project_service.required]
}

resource "google_compute_backend_service" "cloud_run" {
  count = local.custom_domain_enabled ? 1 : 0

  project               = var.project_id
  name                  = "${var.cloud_run_service}-backend"
  protocol              = "HTTP"
  load_balancing_scheme = "EXTERNAL_MANAGED"

  backend {
    group = google_compute_region_network_endpoint_group.cloud_run[0].id
  }
}

resource "google_compute_managed_ssl_certificate" "custom_domain" {
  count = local.custom_domain_enabled ? 1 : 0

  project = var.project_id
  name    = "${var.cloud_run_service}-managed-cert"

  managed {
    domains = local.certificate_domains
  }
}

resource "google_compute_url_map" "https" {
  count = local.custom_domain_enabled ? 1 : 0

  project = var.project_id
  name    = "${var.cloud_run_service}-https-url-map"

  default_service = google_compute_backend_service.cloud_run[0].id

  host_rule {
    hosts        = [local.canonical_domain]
    path_matcher = "app"
  }

  host_rule {
    hosts        = [local.redirect_domain]
    path_matcher = "canonical-redirect"
  }

  path_matcher {
    name            = "app"
    default_service = google_compute_backend_service.cloud_run[0].id
  }

  path_matcher {
    name = "canonical-redirect"

    default_url_redirect {
      host_redirect          = local.canonical_domain
      https_redirect         = true
      redirect_response_code = "MOVED_PERMANENTLY_DEFAULT"
      strip_query            = false
    }
  }
}

resource "google_compute_url_map" "http_redirect" {
  count = local.custom_domain_enabled ? 1 : 0

  project = var.project_id
  name    = "${var.cloud_run_service}-http-redirect"

  default_url_redirect {
    https_redirect         = true
    redirect_response_code = "MOVED_PERMANENTLY_DEFAULT"
    strip_query            = false
  }
}

resource "google_compute_target_https_proxy" "custom_domain" {
  count = local.custom_domain_enabled ? 1 : 0

  project          = var.project_id
  name             = "${var.cloud_run_service}-https-proxy"
  url_map          = google_compute_url_map.https[0].id
  ssl_certificates = [google_compute_managed_ssl_certificate.custom_domain[0].id]
}

resource "google_compute_target_http_proxy" "redirect" {
  count = local.custom_domain_enabled ? 1 : 0

  project = var.project_id
  name    = "${var.cloud_run_service}-http-proxy"
  url_map = google_compute_url_map.http_redirect[0].id
}

resource "google_compute_global_forwarding_rule" "https" {
  count = local.custom_domain_enabled ? 1 : 0

  project               = var.project_id
  name                  = "${var.cloud_run_service}-https-forwarding-rule"
  load_balancing_scheme = "EXTERNAL_MANAGED"
  ip_address            = google_compute_global_address.custom_domain[0].address
  ip_protocol           = "TCP"
  port_range            = "443"
  target                = google_compute_target_https_proxy.custom_domain[0].id
}

resource "google_compute_global_forwarding_rule" "http" {
  count = local.custom_domain_enabled ? 1 : 0

  project               = var.project_id
  name                  = "${var.cloud_run_service}-http-forwarding-rule"
  load_balancing_scheme = "EXTERNAL_MANAGED"
  ip_address            = google_compute_global_address.custom_domain[0].address
  ip_protocol           = "TCP"
  port_range            = "80"
  target                = google_compute_target_http_proxy.redirect[0].id
}
