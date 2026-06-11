# Bing Webmaster Tools Setup

Use this after the production domain is owned, deployed and serving HTTPS.

## Confirmed Domain

- Apex domain: `colinchapman.co.uk`
- Canonical URL: `https://colinchapman.co.uk`
- WWW hostname: `www.colinchapman.co.uk`
- Sitemap: `https://colinchapman.co.uk/sitemap.xml`

## Steps

1. Sign in to Bing Webmaster Tools.
2. Add `https://colinchapman.co.uk` as the site.
3. Verify ownership using the DNS TXT record or another approved verification method.
4. Submit:

   ```text
   https://colinchapman.co.uk/sitemap.xml
   ```

5. Use URL Inspection for:

   ```text
   https://colinchapman.co.uk/
   https://colinchapman.co.uk/projects/serviceflow-construction
   https://colinchapman.co.uk/projects/inkmatch-studio
   https://colinchapman.co.uk/projects/pegasus-engineering-platform
   ```

6. Confirm Bing sees the canonical URL as `https://colinchapman.co.uk`.
7. Re-check crawl and indexing reports after DNS, HTTPS and sitemap discovery have settled.

## Redirect Expectations

`https://www.colinchapman.co.uk` should permanently redirect to `https://colinchapman.co.uk`. All HTTP requests should permanently redirect to HTTPS.
