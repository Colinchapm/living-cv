import { Meta } from '../components/Meta';
import { PageHeader } from '../components/PageHeader';
import { Section } from '../components/Section';
import { educationEntries } from '../data/education';

export function Education() {
  return (
    <>
      <Meta
        title="Education"
        description="Education and certification section for Colin Chapman's Living CV, reserved for verified details."
      />
      <PageHeader title="Education" eyebrow="Verified details">
        <p>Education, certification and refresher training details supplied for this Living CV.</p>
      </PageHeader>
      <Section title="Qualifications and training">
        <div className="grid gap-5 md:grid-cols-2">
          {educationEntries.map((entry) => (
            <article key={entry.title} className="rounded-lg border border-slate-200 bg-white p-6">
              <p className="text-sm font-medium text-clay">{entry.period}</p>
              <h2 className="mt-2 text-xl font-semibold text-ink">{entry.title}</h2>
              <p className="mt-1 text-slate-600">{entry.provider}</p>
              <p className="mt-4 leading-7 text-slate-700">{entry.description}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
