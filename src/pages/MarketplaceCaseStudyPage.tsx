import { Link } from 'react-router-dom';
import { ArchitectureDiagram } from '../components/case-study/ArchitectureDiagram';
import { CaseStudyHero } from '../components/case-study/CaseStudyHero';
import { CaseStudyMeta } from '../components/case-study/CaseStudyMeta';
import { CaseStudySection } from '../components/case-study/CaseStudySection';
import { CaseStudyToc } from '../components/case-study/CaseStudyToc';
import { FeatureChecklist } from '../components/case-study/FeatureChecklist';
import { KpiGrid } from '../components/case-study/KpiGrid';
import { NextStepsPanel } from '../components/case-study/NextStepsPanel';
import { ScreenshotGallery } from '../components/case-study/ScreenshotGallery';
import { TrustPanel } from '../components/case-study/TrustPanel';
import { UserStoryList } from '../components/case-study/UserStoryList';
import { Meta } from '../components/Meta';
import { TechnologyList } from '../components/CaseStudySections';
import { breadcrumbJsonLd } from '../data/structuredData';
import type { MarketplaceCaseStudyProject } from '../types/marketplaceCaseStudy';

type MarketplaceCaseStudyPageProps = {
  project: MarketplaceCaseStudyProject;
};

const sections = [
  { id: 'problem', heading: 'Problem and users' },
  { id: 'flow', heading: 'Marketplace flow' },
  { id: 'architecture', heading: 'Architecture' },
  { id: 'trust', heading: 'Trust and safety' },
  { id: 'features', heading: 'MVP features' },
  { id: 'kpis', heading: 'KPIs' },
  { id: 'gallery', heading: 'Gallery' },
  { id: 'next', heading: 'Next steps' },
] as const;

export function MarketplaceCaseStudyPage({ project }: MarketplaceCaseStudyPageProps) {
  const canonicalPath = `/portfolio/${project.slug}`;

  return (
    <>
      <Meta
        title={`${project.title} Case Study`}
        description={project.summary}
        canonicalPath={canonicalPath}
        jsonLd={[
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Portfolio', path: '/portfolio' },
            { name: project.title, path: canonicalPath },
          ]),
        ]}
      />
      <CaseStudyHero
        title={project.title}
        eyebrow={project.eyebrow}
        summary={project.summary}
        role={project.role}
        status={project.status}
        stack={project.stack}
      />
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:px-6 lg:grid-cols-[0.32fr_1fr] lg:px-8">
        <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
          <CaseStudyToc sections={sections} />
          <div className="surface-card p-5">
            <h2 className="text-lg font-semibold text-white">Evidence boundary</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              This is a portfolio case study showing how Colin would design and build the
              marketplace. It does not claim live customers, revenue, production usage or commercial
              results.
            </p>
            <Link to="/portfolio" className="mt-4 inline-flex accent-link">
              Return to portfolio
            </Link>
          </div>
        </aside>
        <article className="grid gap-6">
          <CaseStudyMeta
            targetAudience={project.targetAudience}
            businessValue={project.businessValue}
            integrations={project.integrations}
          />

          <CaseStudySection id="problem" heading="Problem and users" intro={project.challenge}>
            <UserStoryList stories={project.userStories} />
          </CaseStudySection>

          <CaseStudySection id="flow" heading="Marketplace flow">
            <FeatureChecklist features={project.customerFlow} />
            <div className="mt-5">
              <ArchitectureDiagram title="User flow diagram" mermaid={project.userFlowMermaid} />
            </div>
          </CaseStudySection>

          <CaseStudySection id="architecture" heading="Proposed architecture">
            <p className="body-copy">
              The architecture uses managed Google Cloud services to keep the concept deployable,
              observable and simple to reason about during prototype development.
            </p>
            <div className="mt-5 grid gap-5">
              <FeatureChecklist features={project.architectureSummary} />
              <ArchitectureDiagram
                title="Reference architecture diagram"
                mermaid={project.architectureMermaid}
              />
              <TechnologyList items={project.stack} label={`${project.title} technology stack`} />
            </div>
          </CaseStudySection>

          <CaseStudySection id="trust" heading="Trust, privacy and safety">
            <div className="grid gap-5 lg:grid-cols-2">
              <TrustPanel title="Trust model" items={project.trustSignals} />
              <TrustPanel
                title="Security, privacy and accessibility"
                items={project.securityPrivacyAccessibility}
              />
            </div>
          </CaseStudySection>

          <CaseStudySection id="features" heading="MVP features">
            <FeatureChecklist features={project.mvpFeatures} />
          </CaseStudySection>

          <CaseStudySection
            id="kpis"
            heading="KPIs"
            intro="These metrics are deliberately labelled as indicative or target KPIs because this portfolio page does not claim live business performance."
          >
            <KpiGrid metrics={project.metrics} />
          </CaseStudySection>

          <CaseStudySection id="gallery" heading="Screenshot gallery">
            <ScreenshotGallery screenshots={project.screenshots} />
          </CaseStudySection>

          <CaseStudySection id="next" heading="Planned next steps">
            <NextStepsPanel items={project.nextSteps} />
          </CaseStudySection>
        </article>
      </div>
    </>
  );
}
