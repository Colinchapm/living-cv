# Google Search Console Setup

Use this after the production domain is owned, deployed and serving HTTPS.

## Steps

1. Sign in to Google Search Console with the account that should manage the site.
2. Add a Domain property for the confirmed domain, `colinchapman.co.uk`.
3. Complete DNS verification with the TXT record provided by Search Console.
4. Wait for verification to pass.
5. Open the Sitemaps section.
6. Submit:

   ```text
   https://colinchapman.co.uk/sitemap.xml
   ```

7. Inspect `https://colinchapman.co.uk/`.
8. Request indexing for the home page after the final content review.
9. Inspect and request indexing for the main project routes:

   ```text
   https://colinchapman.co.uk/projects/serviceflow-construction
   https://colinchapman.co.uk/projects/inkmatch-studio
   https://colinchapman.co.uk/projects/pegasus-engineering-platform
   ```

10. Review coverage, mobile usability and enhancement reports after Google has crawled the site.

## Notes

Search Console should be configured only for a confirmed domain. Temporary Cloud Run service URLs are useful for deployment testing but should not become the long-term canonical property.

`https://colinchapman.co.uk` is the canonical URL. `https://www.colinchapman.co.uk` should permanently redirect to the apex host, and all HTTP requests should permanently redirect to HTTPS.
