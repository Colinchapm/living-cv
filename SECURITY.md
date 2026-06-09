# Security

## Reporting

Report security concerns privately to Colin Chapman through the contact channel published on the site or repository.

## Secrets

This project must not use downloadable Google Cloud service-account JSON keys. GitHub Actions deployment is designed to use Google Workload Identity Federation with short-lived credentials.

Do not commit:

- `.env` files
- service-account keys
- Terraform state files
- access tokens
- private certificates

## Dependency Maintenance

Run validation before merging changes:

```bash
npm run lint
npm run type-check
npm test
npm run build
```

Review dependency updates before merging and prefer small, auditable changes.
