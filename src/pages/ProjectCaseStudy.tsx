import { Link, useParams } from 'react-router-dom';
import {
  ArchitectureSummary,
  EvidenceLinks,
  ImplementationRoadmap,
  Requirements,
  SecurityControls,
  TechnologyList,
} from '../components/CaseStudySections';
import { Meta } from '../components/Meta';
import { PageHeader } from '../components/PageHeader';
import { ProjectStatus } from '../components/ProjectCard';
import { getProjectBySlug } from '../data/portfolio';
import { breadcrumbJsonLd, projectJsonLd } from '../data/structuredData';

export function ProjectCaseStudy() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug ?? '');

  if (!project) {
    return (
      <>
        <Meta title="Project not found" description="Project case study not found." />
        <PageHeader title="Project not found" eyebrow="Portfolio">
          <p>The requested project case study could not be found.</p>
          <Link className="mt-5 inline-flex accent-link" to="/portfolio">
            Return to portfolio
          </Link>
        </PageHeader>
      </>
    );
  }

  return (
    <>
      <Meta
        title={`${project.title} Case Study`}
        description={project.summary}
        canonicalPath={`/projects/${project.slug}`}
        jsonLd={[
          projectJsonLd(project),
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Portfolio', path: '/portfolio' },
            { name: project.title, path: `/projects/${project.slug}` },
          ]),
        ]}
      />
      <PageHeader title={project.title} eyebrow="Technical case study">
        <div className="space-y-4">
          <ProjectStatus status={project.status} />
          <p>{project.summary}</p>
          <nav aria-label="Breadcrumb" className="text-sm text-slate-400">
            <Link to="/" className="accent-link">
              Home
            </Link>
            <span aria-hidden="true"> / </span>
            <Link to="/portfolio" className="accent-link">
              Portfolio
            </Link>
            <span aria-hidden="true"> / </span>
            <span>{project.title}</span>
          </nav>
        </div>
      </PageHeader>
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:px-8">
        <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
          <section className="surface-card p-6">
            <p className="section-kicker">At a glance</p>
            <dl className="mt-4 grid gap-4 text-sm">
              <div>
                <dt className="font-semibold text-cyan-200">Status</dt>
                <dd className="mt-1 text-slate-200">{project.status}</dd>
              </div>
              <div>
                <dt className="font-semibold text-cyan-200">Primary platform</dt>
                <dd className="mt-1 text-slate-200">{project.referenceArchitecture}</dd>
              </div>
              <div>
                <dt className="font-semibold text-cyan-200">Evidence</dt>
                <dd className="mt-2">
                  <EvidenceLinks links={project.evidenceLinks} compact />
                </dd>
              </div>
            </dl>
          </section>
          <section className="surface-card p-6">
            <h2 className="text-xl font-semibold text-white">Technology stack</h2>
            <TechnologyList items={project.technologies} label={`${project.title} technologies`} />
          </section>
        </aside>
        <div className="grid gap-6">
          <Requirements title="Problem statement" items={[project.problemStatement]} />
          <Requirements title="Intended users" items={project.intendedUsers} />
          <Requirements title="Functional requirements" items={project.functionalRequirements} />
          <Requirements
            title="Non-functional requirements"
            items={project.nonFunctionalRequirements}
          />
          <ArchitectureSummary
            architecture={project.referenceArchitecture}
            services={project.proposedArchitecture}
          />
          <SecurityControls items={project.securityConsiderations} />
          <Requirements title="Data model overview" items={project.dataModelOverview} />
          <Requirements title="CI/CD approach" items={project.cicdApproach} />
          <Requirements
            title="Monitoring and observability"
            items={project.monitoringAndObservability}
          />
          <Requirements title="Testing strategy" items={project.testingStrategy} />
          <Requirements title="Cost considerations" items={project.costConsiderations} />
          <Requirements
            title="Current implementation status"
            items={project.currentImplementationStatus}
          />
          <Requirements title="Known limitations" items={project.knownLimitations} />
          <Requirements title="Planned next steps" items={project.plannedNextSteps} />
          <ImplementationRoadmap items={project.roadmap} />
        </div>
      </div>
    </>
  );
}
