# 0002 Structured Content Data

## Status

Accepted

## Context

The Living CV needs to present professional experience, skills, education and portfolio projects truthfully. The same content appears across summary cards, case-study pages, tests and documentation, so embedding copy directly throughout page components would make it easier for pages to drift apart or overstate project maturity.

## Decision

Store editable CV and project content in structured TypeScript data files under `src/data`, and keep React pages/components responsible for rendering that data.

## Consequences

- Content can be reviewed independently from layout code.
- Tests can assert that important structured content is rendered.
- Project maturity labels such as prototype, concept and demonstration stay consistent across cards and case-study pages.
- Future updates to contact links, project evidence and CV details can be made in one predictable place.
