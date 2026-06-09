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
          These portfolio entries are framed as project foundations and concepts until source code,
          deployment history, and documentation are added for each project.
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
