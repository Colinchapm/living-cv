# Cloud Run Rollback Runbook

Use this runbook to roll back the Living CV Cloud Run service to a previous revision.

## Identify Revisions

```bash
gcloud run revisions list \
  --service living-cv \
  --region europe-west2
```

Find the last known good revision.

## Route Traffic Back

```bash
gcloud run services update-traffic living-cv \
  --region europe-west2 \
  --to-revisions REVISION_NAME=100
```

Replace `REVISION_NAME` with the known good revision.

## Verify

```bash
gcloud run services describe living-cv \
  --region europe-west2 \
  --format "value(status.url)"
```

Open:

- service URL
- `/health`
- key SPA routes such as `/`, `/portfolio` and `/projects/serviceflow-construction`

## After Rollback

- Record the failed commit SHA and revision.
- Open a fix branch.
- Do not re-run deployment until validation passes.
- Keep the immutable image tag for audit history.
- If the service was newly created by the failed deployment, verify public access, runtime service account and `/health` again before routing traffic.
