import { Meta } from '../components/Meta';
import { PageHeader } from '../components/PageHeader';
import { Section } from '../components/Section';
import { experienceEntries } from '../data/experience';

export function Experience() {
  return (
    <>
      <Meta
        title="Experience"
        description="Experience entries for Colin Chapman's Living CV, limited to verified and portfolio-supported information."
      />
      <PageHeader title="Experience" eyebrow="Verified record">
        <p>Experience is intentionally limited to details that can be represented truthfully.</p>
      </PageHeader>
      <Section title="Current evidence">
        <div className="space-y-5">
          {experienceEntries.map((entry) => (
            <article key={entry.title} className="rounded-lg border border-slate-200 bg-white p-6">
              <p className="text-sm font-medium text-clay">{entry.period}</p>
              <h2 className="mt-2 text-xl font-semibold text-ink">{entry.title}</h2>
              <p className="mt-1 text-slate-600">{entry.organisation}</p>
              <p className="mt-4 leading-7 text-slate-700">{entry.description}</p>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {entry.evidence.map((item) => (
                  <li key={item} className="rounded border border-slate-200 bg-slate-50 px-3 py-2 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
