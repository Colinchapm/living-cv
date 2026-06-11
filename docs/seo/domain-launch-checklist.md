# Domain Launch Checklist

Use this checklist before pointing a public domain at the Living CV.

## Domain

- Confirm the chosen domain is owned by Colin.
- Choose the canonical host, usually the apex domain.
- Keep the Cloud Run service URL available for operational testing.

## Terraform

- Confirm `enable_custom_domain=false` for ordinary infrastructure bootstrap.
- Review a Terraform plan with `enable_custom_domain=true`.
- Confirm the plan creates only the expected load balancer, certificate, static IP and DNS-facing resources.
- Apply only after the plan is reviewed.
- Record `custom_domain_global_ip_address`.

## DNS

- Add apex `A` records pointing to the Terraform global IP address.
- Add `www` records according to the DNS provider's supported record types.
- Wait for DNS propagation.
- Confirm the Google-managed certificate becomes active.

## Application

- Set `VITE_SITE_URL` to the canonical HTTPS domain.
- Run `npm run build` to regenerate metadata and assets.
- Confirm `sitemap.xml` contains the canonical domain.
- Confirm `robots.txt` references the canonical sitemap.
- Verify `/health`, the home page and all project case-study routes.

## Search

- Add the domain to Google Search Console.
- Submit the sitemap.
- Request indexing for the home page and project pages.
- Re-check page titles and descriptions after the first crawl.
