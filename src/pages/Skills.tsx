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
          Skills are grouped by practical platform, delivery, development, operations and professional
          strengths. No unsupported ratings or percentage bars are used.
        </p>
      </PageHeader>
      <section className="mx-auto grid max-w-6xl gap-5 px-4 py-10 sm:px-6 md:grid-cols-2 lg:px-8">
        {skillGroups.map((group) => (
          <article key={group.title} className="surface-card p-6">
            <h2 className="text-xl font-semibold text-white">{group.title}</h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li key={skill} className="rounded border border-sky-300/20 bg-slate-950 px-3 py-2 text-sm text-slate-200">
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
