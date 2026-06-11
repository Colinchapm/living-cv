# Google Search Console Setup

Use this after the production domain is owned, deployed and serving HTTPS.

## Steps

1. Sign in to Google Search Console with the account that should manage the site.
2. Add a Domain property for the confirmed domain, for example `colinchapman.dev`.
3. Complete DNS verification with the TXT record provided by Search Console.
4. Wait for verification to pass.
5. Open the Sitemaps section.
6. Submit:

   ```text
   https://colinchapman.dev/sitemap.xml
   ```

7. Inspect `https://colinchapman.dev/`.
8. Request indexing for the home page after the final content review.
9. Inspect and request indexing for the main project routes:

   ```text
   https://colinchapman.dev/projects/serviceflow-construction
   https://colinchapman.dev/projects/inkmatch-studio
   https://colinchapman.dev/projects/pegasus-engineering-platform
   ```

10. Review coverage, mobile usability and enhancement reports after Google has crawled the site.

## Notes

Search Console should be configured only for a confirmed domain. Temporary Cloud Run service URLs are useful for deployment testing but should not become the long-term canonical property.
