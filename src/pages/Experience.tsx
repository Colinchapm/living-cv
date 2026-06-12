import { Link } from 'react-router-dom';
import { Meta } from '../components/Meta';
import { PageHeader } from '../components/PageHeader';
import { Section } from '../components/Section';
import { experienceEntries } from '../data/experience';
import { profile } from '../data/profile';
import { diySosVolunteering } from '../data/volunteering';

export function Experience() {
  return (
    <>
      <Meta
        title="Experience"
        description="Experience for Colin Chapman, including platform support engineer work, independent cloud development, technical support and construction workflow knowledge."
        canonicalPath="/experience"
      />
      <PageHeader title="Experience" eyebrow="Verified record">
        <p>
          Commercial employment, independent development, prototype work and earlier trade
          experience are separated clearly.
        </p>
      </PageHeader>
      <Section title="Experience history">
        <div className="relative space-y-5 border-l border-cyan-300/20 pl-5">
          {experienceEntries.map((entry) => (
            <article key={entry.title} className="timeline-card">
              <p className="section-kicker">{entry.period}</p>
              <h2 className="mt-2 text-xl font-semibold text-white">{entry.title}</h2>
              <p className="mt-1 text-slate-300">{entry.organisation}</p>
              <p className="mt-4 leading-7 text-slate-300">{entry.description}</p>
              <ul className="mt-5 grid gap-2">
                {entry.evidence.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-cyan-300/20 bg-slate-950/80 px-3 py-2 text-sm text-slate-200"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>
      <Section title="Volunteering and community contribution">
        <article className="surface-card p-6">
          <p className="section-kicker">{diySosVolunteering.period}</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">{diySosVolunteering.title}</h2>
          <p className="mt-1 text-cyan-100">{diySosVolunteering.role}</p>
          <p className="mt-3 body-copy">{diySosVolunteering.project}</p>
          <ul className="mt-5 grid gap-2">
            {profile.volunteering.notes.map((note) => (
              <li
                key={note}
                className="rounded-md border border-cyan-300/20 bg-slate-950/80 px-3 py-2 text-sm text-slate-200"
              >
                {note}
              </li>
            ))}
          </ul>
          <Link to="/volunteering" className="mt-5 inline-flex accent-link">
            View volunteering gallery
          </Link>
        </article>
      </Section>
    </>
  );
}
