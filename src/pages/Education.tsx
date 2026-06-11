import { Meta } from '../components/Meta';
import { PageHeader } from '../components/PageHeader';
import { Section } from '../components/Section';
import { educationEntries } from '../data/education';

export function Education() {
  return (
    <>
      <Meta
        title="Education and Certifications"
        description="Education and certifications for Colin Chapman, including Northumbria University computing study, AWS Certified Cloud Practitioner and technical refresher training."
        canonicalPath="/education"
      />
      <PageHeader title="Education" eyebrow="Verified details">
        <p>Education, certification and refresher training details supplied for this Living CV.</p>
      </PageHeader>
      <Section title="Qualifications and training">
        <div className="grid gap-5 md:grid-cols-2">
          {educationEntries.map((entry) => (
            <article key={entry.title} className="surface-card p-6">
              <p className="text-sm font-medium text-clay">{entry.period}</p>
              <h2 className="mt-2 text-xl font-semibold text-white">{entry.title}</h2>
              <p className="mt-1 text-slate-300">{entry.provider}</p>
              <p className="mt-4 leading-7 text-slate-300">{entry.description}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
