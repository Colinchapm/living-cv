import { Meta } from '../components/Meta';
import { PageHeader } from '../components/PageHeader';
import { ProjectCard } from '../components/ProjectCard';
import { portfolioProjects } from '../data/portfolio';

export function Portfolio() {
  return (
    <>
      <Meta
        title="Portfolio"
        description="Portfolio projects for Colin Chapman, including ServiceFlow Construction, InkMatch Studio, and Pegasus ALSSC Engineering Platform."
      />
      <PageHeader title="Portfolio" eyebrow="Project evidence">
        <p>
          These entries distinguish prototypes, demonstrations and concepts from production systems.
          They are designed to show requirements, architecture, delivery thinking and safe technical
          evidence without invented customer or usage claims.
        </p>
      </PageHeader>
      <section className="mx-auto max-w-6xl space-y-5 px-4 py-10 sm:px-6 lg:px-8">
        {portfolioProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </section>
    </>
  );
}
