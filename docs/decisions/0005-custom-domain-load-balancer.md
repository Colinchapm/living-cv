# 0005 Custom Domain Load Balancer

## Status

Accepted

## Context

The Living CV needs a professional custom domain with HTTPS, canonical host redirects and a reviewable infrastructure path. Cloud Run can be reached directly through its generated service URL, but a long-term portfolio site benefits from stable domain ownership and search metadata.

## Decision

Use an optional Google Cloud global external HTTPS load balancer in front of the Cloud Run service for custom-domain launch.

Terraform keeps this disabled by default through `enable_custom_domain=false`. When enabled, it provisions a static global IP address, serverless network endpoint group, backend service, managed SSL certificate, HTTP-to-HTTPS redirect and canonical apex or `www` redirect.

## Consequences

- The site can use a stable public domain while Cloud Run continues to scale to zero.
- DNS points to a Terraform-managed static global IP address.
- Google-managed certificates remove manual certificate handling.
- Terraform plans can be reviewed before any public domain resources are created.
- The load balancer adds more infrastructure than direct Cloud Run access, so it should be enabled only after the domain choice is confirmed.
