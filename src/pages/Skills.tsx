import { Meta } from '../components/Meta';
import { PageHeader } from '../components/PageHeader';
import { skillGroups } from '../data/skills';

export function Skills() {
  return (
    <>
      <Meta
        title="Cloud and DevOps Skills"
        description="Cloud, DevOps, platform support and systems skills across AWS, Microsoft Azure, Google Cloud, CI/CD, Terraform, Docker, Python, Linux and SQL."
        canonicalPath="/skills"
      />
      <PageHeader title="Skills" eyebrow="Capabilities">
        <p>
          Skills are grouped by practical platform, delivery, development, operations and
          professional strengths. No unsupported ratings or percentage bars are used.
        </p>
      </PageHeader>
      <section className="mx-auto grid max-w-6xl gap-5 px-4 py-10 sm:px-6 md:grid-cols-2 lg:px-8">
        {skillGroups.map((group) => (
          <article key={group.title} className="surface-card grid gap-5 p-6">
            <div>
              <p className="section-kicker">Capability area</p>
              <h2 className="mt-2 text-xl font-semibold text-white">{group.title}</h2>
            </div>
            <ul className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li key={skill} className="tech-badge">
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </>
  );
}
