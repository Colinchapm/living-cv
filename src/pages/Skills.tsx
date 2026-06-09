import { Meta } from '../components/Meta';
import { PageHeader } from '../components/PageHeader';
import { skillGroups } from '../data/skills';

export function Skills() {
  return (
    <>
      <Meta
        title="Skills"
        description="Cloud, DevOps, platform engineering, software engineering, and quality skills represented in Colin Chapman's portfolio foundation."
      />
      <PageHeader title="Skills" eyebrow="Capabilities">
        <p>
          Skills are grouped by practical platform, delivery, development, operations and professional
          strengths. No unsupported ratings or percentage bars are used.
        </p>
      </PageHeader>
      <section className="mx-auto grid max-w-6xl gap-5 px-4 py-10 sm:px-6 md:grid-cols-2 lg:px-8">
        {skillGroups.map((group) => (
          <article key={group.title} className="rounded-lg border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-ink">{group.title}</h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li key={skill} className="rounded bg-slate-100 px-3 py-2 text-sm text-slate-800">
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
