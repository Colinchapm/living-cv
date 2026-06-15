import type { MarketplaceCaseStudyProject } from '../types/marketplaceCaseStudy';

export const marketplaceCaseStudies = [
  {
    slug: 'construction-services-marketplace',
    title: 'Construction Services Marketplace',
    domain: 'construction-services',
    eyebrow: 'Marketplace design example',
    summary:
      'A trust-led local trade marketplace concept showing how I would structure job requests, postcode and trade matching, provider profiles, quote comparison and moderation workflows.',
    role: 'Product architecture, UX workflow design and cloud solution design',
    status: 'Concept portfolio case study',
    targetAudience: [
      'Homeowners requesting local trade services',
      'Landlords and small property managers',
      'Local builders, plumbers, electricians and specialist trades',
      'Marketplace administrators responsible for moderation and trust checks',
    ],
    businessValue: [
      'Turn vague phone or email enquiries into structured job requests.',
      'Help customers compare quotes using consistent information rather than guesswork.',
      'Give providers better qualified leads by matching trade type, postcode and service area.',
      'Support admin review of profiles, trust signals and flagged enquiries before public claims are displayed.',
    ],
    challenge:
      'Local trade discovery can break down before quoting starts: customers describe work inconsistently, providers spend time qualifying unsuitable leads, and generic trust badges can be unclear. I designed this concept to demonstrate a practical marketplace flow without claiming live users, customers or commercial results.',
    customerFlow: [
      'Customer selects a trade category and enters a postcode.',
      'Guided job request captures urgency, property type, photos, access notes and preferred contact method.',
      'Matching logic checks postcode coverage, trade category and provider capacity settings.',
      'Providers respond with structured quotes or request clarifying information.',
      'Customer compares quotes, provider profiles and clearly described trust signals.',
      'Admin tools support moderation, profile review and stale verification reminders.',
    ],
    userStories: [
      {
        id: 'construction-customer-request',
        asA: 'customer',
        iWant: 'to describe my job once with photos, postcode and urgency',
        soThat: 'relevant local providers can respond without asking the same basic questions',
      },
      {
        id: 'construction-provider-matching',
        asA: 'trade provider',
        iWant: 'to receive leads only for my trade and service area',
        soThat: 'I can spend quoting time on realistic opportunities',
      },
      {
        id: 'construction-admin-moderation',
        asA: 'marketplace admin',
        iWant: 'to review provider profiles and trust evidence',
        soThat: 'public trust signals stay clear, current and supportable',
      },
    ],
    architectureSummary: [
      'React and TypeScript front end for customer, provider and admin journeys.',
      'Cloud Run API serving marketplace workflows behind the existing HTTPS edge pattern.',
      'Cloud SQL PostgreSQL for jobs, providers, coverage areas, quotes, profile metadata and moderation events.',
      'Cloud Storage for job photos, supporting documents and provider media.',
      'Terraform and GitHub Actions for repeatable environment changes and validation.',
    ],
    architectureMermaid: `flowchart LR
  Customer["Customer web app"] --> Frontend["React + TypeScript"]
  Provider["Provider portal"] --> Frontend
  Frontend --> CloudRun["Cloud Run API"]
  CloudRun --> CloudSQL["Cloud SQL PostgreSQL"]
  CloudRun --> Storage["Cloud Storage"]
  CloudRun --> Moderation["Admin moderation workflow"]
  Actions["GitHub Actions"] --> Artifact["Container image"]
  Artifact --> CloudRun
  Terraform["Terraform"] --> CloudRun
  Terraform --> CloudSQL
  Terraform --> Storage`,
    userFlowMermaid: `flowchart LR
  Start["Job request"] --> Match["Postcode and trade matching"]
  Match --> Profiles["Provider profiles"]
  Profiles --> Quotes["Structured quote comparison"]
  Quotes --> Shortlist["Customer shortlist"]
  Profiles --> Admin["Admin moderation"]`,
    mvpFeatures: [
      'Customer job request wizard with photo upload and postcode capture.',
      'Trade and postcode matching with explicit service-area rules.',
      'Provider profiles showing services, coverage and trust-signal status.',
      'Structured quote comparison rather than free-text-only replies.',
      'Admin moderation for profiles, flagged content and verification reminders.',
      'Audit trail for material changes to jobs, quotes and profile trust fields.',
    ],
    securityPrivacyAccessibility: [
      'Collect only the personal and property information needed to match and quote the job.',
      'Avoid publishing customer addresses or raw uploaded documents on public profiles.',
      'Model trust signals as evidence type, checked date and expiry status rather than vague verified claims.',
      'Use role-based access for customer, provider and admin surfaces.',
      'Design forms, comparison tables and moderation views with labelled fields and keyboard-friendly controls.',
    ],
    metrics: [
      {
        label: 'Qualified request completion',
        kind: 'Target KPI',
        value: 'Increase completed structured requests',
        note: 'Target metric for an MVP trial, not a reported business result.',
      },
      {
        label: 'Provider response time',
        kind: 'Indicative KPI',
        value: 'Track first response by trade and postcode',
        note: 'Used to understand marketplace liquidity if the concept becomes live.',
      },
      {
        label: 'Current trust evidence',
        kind: 'Target KPI',
        value: 'Reduce stale profile verification data',
        note: 'Trust evidence would need clear source, review date and expiry handling.',
      },
    ],
    screenshots: [
      {
        src: '/images/portfolio/marketplace/construction-job-request.svg',
        alt: 'Wireframe of a construction marketplace job request flow',
        caption: 'Guided job request flow with postcode, trade, urgency and photo evidence.',
      },
      {
        src: '/images/portfolio/marketplace/construction-provider-profile.svg',
        alt: 'Wireframe of a construction provider profile with trust signals',
        caption:
          'Provider profile concept showing service area, quote actions and reviewable trust signals.',
      },
    ],
    integrations: [
      'Postcode or geocoding service, provider to be selected during discovery.',
      'Email or SMS notifications, provider to be selected during delivery planning.',
      'Payment or billing provider only if commercial lead products are validated.',
    ],
    stack: [
      'React',
      'TypeScript',
      'Cloud Run',
      'Cloud SQL',
      'Cloud Storage',
      'Terraform',
      'GitHub Actions',
    ],
    trustSignals: [
      'Trade category and service area reviewed before profile publication.',
      'Insurance or registration fields designed as checked evidence, not blanket endorsement.',
      'Trust badge wording keeps the source and review date visible.',
      'Admin moderation flags expired or unsupported claims for follow-up.',
    ],
    nextSteps: [
      'Prototype the request wizard and provider matching rules with synthetic data.',
      'Create a Cloud SQL schema for providers, coverage areas, jobs, quotes and audit events.',
      'Add admin moderation views for profile trust evidence and flagged job requests.',
      'Run usability checks on quote comparison wording before building any commercial workflow.',
    ],
  },
  {
    slug: 'tattoo-work-marketplace',
    title: 'Tattoo Work Marketplace',
    domain: 'tattoo-work',
    eyebrow: 'Marketplace design example',
    summary:
      'A style-led tattoo marketplace concept for adult customers, artists and studios, focused on portfolio discovery, flash listings, deposit-based booking and privacy-aware handling of booking information.',
    role: 'Product architecture, UX workflow design and privacy-aware marketplace design',
    status: 'Concept portfolio case study',
    targetAudience: [
      'Adult customers looking for tattoo artists by style and location',
      'Independent tattoo artists managing portfolios, flash and availability',
      'Studios coordinating enquiries, deposits and appointments',
      'Marketplace administrators reviewing profiles and sensitive booking workflows',
    ],
    businessValue: [
      'Improve discovery by making style, location and availability easier to compare.',
      'Reduce fragmented booking conversations spread across social messages.',
      'Use deposits and confirmations to reduce avoidable booking friction.',
      'Handle booking details, reference images and consent-related information with privacy awareness.',
    ],
    challenge:
      'Tattoo discovery is highly visual, but booking often moves through informal messages, inconsistent deposit handling and unclear trust signals. I designed this concept to show how a marketplace could support adult customers and artists without claiming a live studio network, customers or production results.',
    customerFlow: [
      'Adult customer filters by style, location, artist availability and flash listings.',
      'Customer reviews artist portfolios, studio notes and clearly worded trust signals.',
      'Booking flow captures appointment preference, placement notes and reference images.',
      'Deposit step reserves the consultation or appointment through a future payment provider.',
      'Studio or artist reviews sensitive details before confirming the booking.',
      'Admin moderation reviews profiles, flagged images and trust-signal wording.',
    ],
    userStories: [
      {
        id: 'tattoo-style-discovery',
        asA: 'adult customer',
        iWant: 'to discover artists by style, location and portfolio evidence',
        soThat: 'I can shortlist artists whose work fits the tattoo I want',
      },
      {
        id: 'tattoo-artist-flash',
        asA: 'tattoo artist',
        iWant: 'to publish portfolio work, flash pieces and availability',
        soThat: 'customers can send better matched booking requests',
      },
      {
        id: 'tattoo-admin-trust',
        asA: 'studio or marketplace admin',
        iWant: 'to review registration-style and insurance-style profile fields carefully',
        soThat: 'the product does not overstate checks that have not been completed',
      },
    ],
    architectureSummary: [
      'React and TypeScript front end for discovery, booking and studio administration.',
      'Cloud Run API for marketplace and booking workflows.',
      'Firestore for flexible artist, portfolio, flash and slot documents.',
      'Cloud Storage for portfolio imagery, flash artwork and customer reference uploads.',
      'Terraform and GitHub Actions for repeatable validation and deployment preparation.',
    ],
    architectureMermaid: `flowchart LR
  Customer["Adult customer"] --> Web["React + TypeScript"]
  Artist["Artist portal"] --> Web
  Web --> API["Cloud Run API"]
  API --> Firestore["Firestore"]
  API --> Storage["Cloud Storage"]
  API --> Privacy["Privacy-aware booking workflow"]
  Actions["GitHub Actions"] --> API
  Terraform["Terraform"] --> API
  Terraform --> Firestore
  Terraform --> Storage`,
    userFlowMermaid: `flowchart LR
  Discover["Style-led discovery"] --> Portfolio["Artist portfolios"]
  Portfolio --> Flash["Flash listings"]
  Flash --> Booking["Adult customer booking flow"]
  Booking --> Deposit["Deposit placeholder"]
  Booking --> Review["Artist or studio review"]`,
    mvpFeatures: [
      'Style, location and availability filters for artist discovery.',
      'Artist profiles with portfolios, flash listings and studio information.',
      'Adult customer booking request flow with reference-image handling.',
      'Deposit-based booking placeholder with payment provider kept unspecified.',
      'Profile trust fields for registration-style and insurance-style information without overclaiming.',
      'Admin moderation for images, profiles and sensitive booking information.',
    ],
    securityPrivacyAccessibility: [
      'Treat health, consent or placement notes as sensitive and minimise collection until necessary.',
      'Keep reference images and booking information private to the relevant customer, artist and studio roles.',
      'Make trust signals precise, such as information supplied, pending review or reviewed date, rather than broad endorsements.',
      'Require explicit age-aware journey wording because the intended customer flow is adult-only.',
      'Use accessible image galleries, labelled booking fields and descriptive error messages.',
    ],
    metrics: [
      {
        label: 'Matched enquiry quality',
        kind: 'Indicative KPI',
        value: 'Track artist acceptance of booking requests',
        note: 'Conceptual signal only; no live marketplace data exists.',
      },
      {
        label: 'Deposit completion',
        kind: 'Target KPI',
        value: 'Measure completed deposits after provider integration',
        note: 'Target measurement for a future prototype, not a reported outcome.',
      },
      {
        label: 'Privacy-safe booking records',
        kind: 'Target KPI',
        value: 'Review retention and access controls before launch',
        note: 'Focuses on governance readiness rather than commercial performance.',
      },
    ],
    screenshots: [
      {
        src: '/images/portfolio/marketplace/tattoo-style-discovery.svg',
        alt: 'Wireframe of tattoo marketplace style-led artist discovery',
        caption: 'Discovery concept with style filters, portfolio previews and availability cues.',
      },
      {
        src: '/images/portfolio/marketplace/tattoo-booking-flow.svg',
        alt: 'Wireframe of a tattoo booking flow with deposit and privacy notes',
        caption:
          'Adult booking flow concept with deposit placeholder and sensitive-information reminders.',
      },
    ],
    integrations: [
      'Deposit payment provider, deliberately unspecified until requirements are validated.',
      'Calendar integration for artist or studio availability, provider to be selected later.',
      'Email or SMS notifications for booking updates.',
    ],
    stack: [
      'React',
      'TypeScript',
      'Cloud Run',
      'Firestore',
      'Cloud Storage',
      'Terraform',
      'GitHub Actions',
    ],
    trustSignals: [
      'Registration-style and insurance-style fields are presented as profile evidence, not broad certification.',
      'Reviewed, supplied and pending states avoid implying checks that have not happened.',
      'Profile moderation can flag unsupported claims or unsuitable imagery.',
      'Adult-only booking language is visible before personal booking details are collected.',
    ],
    nextSteps: [
      'Prototype style-led search and portfolio pages using synthetic artist data.',
      'Model booking requests, deposits, flash listings and moderation states in Firestore.',
      'Define privacy and retention rules for reference images and sensitive booking notes.',
      'Test wording for trust signals with artists and customers before public launch.',
    ],
  },
] as const satisfies readonly MarketplaceCaseStudyProject[];

export function getMarketplaceCaseStudyBySlug(slug: string) {
  return marketplaceCaseStudies.find((project) => project.slug === slug);
}
