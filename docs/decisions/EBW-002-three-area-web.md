# EBW-002 — Three-area web navigation

## Founder direction
Integrate Colin's existing Living CV (`https://colinchapman.co.uk`), EBW and Cheer Up Goth in a visible three-tab switcher at the top of each site's public interface. Each area should have its own URL now and support a separate public domain when ready. This updates, rather than replaces, the open EBW-002 commission in `Colinchapm/ebw-platform` issue #8.

## Implementation and URL contract

| Brand | Current public origin | Initial route | Future origin |
| --- | --- | --- | --- |
| Living CV | `https://colinchapman.co.uk` | `/` | Retain |
| EBW | Same origin, pending deployment of this branch | `/ebw` | Undecided; configure `VITE_EBW_PUBLIC_URL` after deployment |
| Cheer Up Goth | Same origin, pending deployment of this branch | `/cheer-up-goth` | Undecided; configure `VITE_CHEER_UP_GOTH_PUBLIC_URL` after deployment |

The Vite variables are **public non-secret** HTTPS destinations; invalid/non-HTTPS values fall back to the local preview route. Do not invent live domains or redirect visitors to untested checkout. Changes to the production domain or DNS require separate founder approval.

## Architecture and ownership

- **Living CV repository:** independently deployed React/Vite portfolio. Supplies the shared top area switcher and temporary, informative, non-transactional EBW/Cheer Up Goth landing pages. Keep CV data and employment content independent.
- **EBW platform repository:** planned separately operated Next.js/PostgreSQL/GCP application for ticketing, merchandise via Shopify, talent and event operations. Do not copy commerce secrets, private application data or backend components into the Living CV repository.
- **Cheer Up Goth:** distinct public brand funnel, content and performer pathway. Future standalone frontend may share the approved underlying business platform but must preserve brand separation, legal seller attribution, consent and access policies.
- Site switcher is **navigation**, not a login, shared private session or assumption that these are one legal entity. External links use HTTPS and independently established domains only.

## Acceptance evidence required before publishing

1. `npm run lint`, `npm run type-check`, `npm test`, `npm run build` and Playwright smoke tests pass on the changed branch.
2. Site area tab order is Living CV, EBW, Cheer Up Goth; keyboard/accessible label, active-state and mobile wrap are verified.
3. Visiting `/`, `/ebw`, `/cheer-up-goth` resolves; Living CV existing navigation and all portfolio pages remain intact.
4. No false ticket-sales, performer registrations or undeployed domains appear on the live site.
5. When dedicated domains are commissioned, verify target availability, canonical URLs, sitemap and redirect policy **before** switching public links. Each brand keeps its own analytics consent/seller disclosures.

## Release boundary

Changes occur on an isolated review branch and draft PR only. No production deployment, DNS or cloud-billing changes have been authorised by this brief. PM records test failures and verifies site use before any production rollout.
