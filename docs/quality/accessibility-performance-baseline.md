# Accessibility and Performance Baseline

This PR does not add Lighthouse CI or axe because neither tool is currently installed in the project.

Recommended next step: add a focused quality-gates PR that runs Lighthouse CI and axe checks against:

- `/`
- `/journey`
- `/portfolio/construction-services-marketplace`
- `/portfolio/tattoo-work-marketplace`

Suggested baseline targets:

- Lighthouse performance: 90 or above
- Lighthouse accessibility: 100
- Lighthouse SEO: 100
- Lighthouse best practices: 95 or above
- Core Web Vitals guidance: LCP at or below 2.5s, INP at or below 200ms, CLS at or below 0.1

Accessibility checks should cover keyboard navigation, focus visibility, semantic headings, touch target size, image alt text and absence of hover-only essential content.
