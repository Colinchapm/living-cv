export type MarketplaceCaseStudyDomain = 'construction-services' | 'tattoo-work';

export type MarketplaceCaseStudyStatus =
  | 'Concept portfolio case study'
  | 'Prototype design example';

export type UserStory = {
  id: string;
  asA: string;
  iWant: string;
  soThat: string;
};

export type KpiMetric = {
  label: string;
  kind: 'Indicative KPI' | 'Target KPI';
  value: string;
  note: string;
};

export type ScreenshotAsset = {
  src: string;
  alt: string;
  caption: string;
};

export type MarketplaceCaseStudyProject = {
  slug: string;
  title: string;
  domain: MarketplaceCaseStudyDomain;
  eyebrow: string;
  summary: string;
  role: string;
  status: MarketplaceCaseStudyStatus;
  targetAudience: readonly string[];
  businessValue: readonly string[];
  challenge: string;
  customerFlow: readonly string[];
  userStories: readonly UserStory[];
  architectureSummary: readonly string[];
  architectureMermaid: string;
  userFlowMermaid: string;
  mvpFeatures: readonly string[];
  securityPrivacyAccessibility: readonly string[];
  metrics: readonly KpiMetric[];
  screenshots: readonly ScreenshotAsset[];
  integrations: readonly string[];
  stack: readonly string[];
  trustSignals: readonly string[];
  nextSteps: readonly string[];
};
