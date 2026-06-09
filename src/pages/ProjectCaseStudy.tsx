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

export function ProjectCaseStudy() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug ?? '');

  if (!project) {
    return (
      <>
        <Meta title="Project not found" description="Project case study not found." />
        <PageHeader title="Project not found" eyebrow="Portfolio">
          <p>The requested project case study could not be found.</p>
          <Link className="mt-5 inline-flex text-forest underline" to="/portfolio">
            Return to portfolio
          </Link>
        </PageHeader>
      </>
    );
  }

  return (
    <>
      <Meta title={project.title} description={project.summary} />
      <PageHeader title={project.title} eyebrow="Technical case study">
        <div className="space-y-4">
          <ProjectStatus status={project.status} />
          <p>{project.summary}</p>
        </div>
      </PageHeader>
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:px-6 lg:px-8">
        <Requirements title="Problem statement" items={[project.problemStatement]} />
        <Requirements title="Intended users" items={project.intendedUsers} />
        <Requirements title="Functional requirements" items={project.functionalRequirements} />
        <Requirements title="Non-functional requirements" items={project.nonFunctionalRequirements} />
        <ArchitectureSummary
          architecture={project.referenceArchitecture}
          services={project.proposedArchitecture}
        />
        <section className="rounded-lg border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-semibold text-ink">Technology badges</h2>
          <TechnologyList items={project.technologies} label={`${project.title} technologies`} />
        </section>
        <SecurityControls items={project.securityConsiderations} />
        <Requirements title="Data model overview" items={project.dataModelOverview} />
        <Requirements title="CI/CD approach" items={project.cicdApproach} />
        <Requirements
          title="Monitoring and observability"
          items={project.monitoringAndObservability}
        />
        <Requirements title="Testing strategy" items={project.testingStrategy} />
        <Requirements title="Cost considerations" items={project.costConsiderations} />
        <Requirements title="Current implementation status" items={project.currentImplementationStatus} />
        <Requirements title="Known limitations" items={project.knownLimitations} />
        <Requirements title="Planned next steps" items={project.plannedNextSteps} />
        <ImplementationRoadmap items={project.roadmap} />
        <EvidenceLinks links={project.evidenceLinks} />
      </div>
    </>
  );
}
