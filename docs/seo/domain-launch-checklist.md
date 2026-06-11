# Domain Launch Checklist

Use this checklist before pointing a public domain at the Living CV.

## Domain

- Confirm the chosen domain is owned by Colin.
- Use `https://colinchapman.co.uk` as the canonical production URL.
- Redirect `https://www.colinchapman.co.uk` permanently to `https://colinchapman.co.uk`.
- Keep the Cloud Run service URL available for operational testing.

## Terraform

- Confirm `enable_custom_domain=false` for ordinary infrastructure bootstrap.
- Review a Terraform plan with `enable_custom_domain=true`.
- Confirm Terraform variables use:

  ```hcl
  enable_custom_domain = false
  custom_domain        = "colinchapman.co.uk"
  www_domain           = "www.colinchapman.co.uk"
  redirect_www_to_apex = true
  ```

- Confirm the plan creates only the expected load balancer, certificate, static IP and DNS-facing resources.
- Apply only after the plan is reviewed.
- Record `custom_domain_global_ip_address`.

## DNS

- Add an `A` record for `@` pointing to the Terraform global IP address.
- Add an `A` record for `www` pointing to the same Terraform global IP address.
- Wait for DNS propagation.
- Confirm the Google-managed certificate becomes active.

## Application

- Set `VITE_SITE_URL=https://colinchapman.co.uk` for production builds if an override is needed.
- Run `npm run build` to regenerate metadata and assets.
- Confirm `sitemap.xml` contains the canonical domain.
- Confirm `robots.txt` references the canonical sitemap.
- Confirm canonical metadata, Open Graph URLs, Twitter/X metadata and JSON-LD do not use the Cloud Run hostname.
- Verify `/health`, the home page and all project case-study routes.

## Search

- Add the domain to Google Search Console.
- Add the domain to Bing Webmaster Tools.
- Submit the sitemap.
- Request indexing for the home page and project pages.
- Re-check page titles and descriptions after the first crawl.
