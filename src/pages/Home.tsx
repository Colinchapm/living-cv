import { Link } from 'react-router-dom';
import { Meta } from '../components/Meta';
import { Section } from '../components/Section';
import { portfolioProjects } from '../data/portfolio';
import { profile } from '../data/profile';

export function Home() {
  return (
    <>
      <Meta
        title="Living CV"
        description="Colin Chapman's professional Living CV for cloud engineering, platform delivery, DevOps, and verifiable portfolio evidence."
      />
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-clay">{profile.role}</p>
            <h1 className="mt-4 text-4xl font-bold tracking-normal text-ink sm:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">{profile.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/portfolio"
                className="rounded bg-forest px-5 py-3 text-sm font-semibold text-white hover:bg-teal-800"
              >
                View portfolio
              </Link>
              <Link
                to="/contact"
                className="rounded border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-ink hover:bg-slate-50"
              >
                Contact
              </Link>
            </div>
          </div>
          <aside className="rounded-lg border border-slate-200 bg-mist p-6" aria-labelledby="evidence-title">
            <h2 id="evidence-title" className="text-xl font-semibold text-ink">
              Evidence-led profile
            </h2>
            <ul className="mt-4 space-y-4 text-slate-700">
              {profile.principles.map((principle) => (
                <li key={principle} className="border-l-4 border-brass pl-4 leading-7">
                  {principle}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
      <Section title="Portfolio foundations">
        <div className="grid gap-4 md:grid-cols-3">
          {portfolioProjects.map((project) => (
            <article key={project.title} className="rounded-lg border border-slate-200 bg-white p-5">
              <h3 className="font-semibold text-ink">{project.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">{project.summary}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
