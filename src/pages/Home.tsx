import { Link } from 'react-router-dom';
import { FeaturedProjectCard } from '../components/ProjectCard';
import { Meta } from '../components/Meta';
import { Section } from '../components/Section';
import { educationEntries } from '../data/education';
import { experienceEntries } from '../data/experience';
import { portfolioCards } from '../data/portfolio';
import { profile } from '../data/profile';
import { siteConfig } from '../data/site';
import { personJsonLd, profilePageJsonLd, websiteJsonLd } from '../data/structuredData';

export function Home() {
  const featuredExperience = experienceEntries.slice(0, 2);
  const featuredEducation = educationEntries.slice(0, 3);

  return (
    <>
      <Meta
        title="Colin Chapman Cloud Engineer"
        description="Colin Chapman is a Cloud & Platform Engineer in North Tyneside and Newcastle upon Tyne, showing a DevOps portfolio with Cloud Run, Terraform, GitHub Actions, AWS, Azure and Google Cloud evidence."
        canonicalPath="/"
        jsonLd={[websiteJsonLd(), profilePageJsonLd('/'), personJsonLd()]}
      />
      <section className="relative overflow-hidden border-b border-cyan-300/10 bg-slate-950/60">
        <div
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent"
          aria-hidden="true"
        />
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1.12fr_0.88fr] lg:px-8 lg:py-20">
          <div className="flex flex-col justify-center">
            <p className="section-kicker">{profile.supportingLine}</p>
            <h1 className="mt-4 text-4xl font-bold tracking-normal text-white sm:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-4 text-2xl font-semibold text-cyan-100">{profile.displayRole}</p>
            <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-100">
              {profile.heroStatement}
            </p>
            <dl className="mt-7 grid gap-3 text-sm sm:grid-cols-2">
              <div className="surface-muted p-4">
                <dt className="font-semibold text-cyan-200">Location</dt>
                <dd className="mt-1 text-slate-200">{profile.location}</dd>
              </div>
              <div className="surface-muted p-4">
                <dt className="font-semibold text-cyan-200">Availability</dt>
                <dd className="mt-1 text-slate-200">{profile.availability}</dd>
              </div>
            </dl>
            <div className="no-print mt-8 flex flex-wrap gap-3">
              <Link to="/portfolio" className="primary-action">
                View Projects
              </Link>
              <a href={profile.cvDownloadPath} download className="secondary-action">
                Download CV
              </a>
              <Link to="/contact" className="secondary-action">
                Contact Colin
              </Link>
              <a href={siteConfig.githubUrl} className="secondary-action">
                View GitHub
              </a>
            </div>
          </div>
          <aside className="surface-card p-6" aria-labelledby="proof-panel-title">
            <p className="section-kicker">Proof panel</p>
            <h2 id="proof-panel-title" className="mt-3 text-2xl font-semibold text-white">
              Evidence, not just claims
            </h2>
            <p className="mt-3 body-copy">
              This site is built as a working delivery artefact with source, tests, documentation
              and deployment preparation.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {profile.principles.map((principle) => (
                <li
                  key={principle}
                  className="rounded-md border border-cyan-300/20 bg-slate-950/80 p-3"
                >
                  <span className="block text-sm font-semibold text-slate-100">{principle}</span>
                </li>
              ))}
            </ul>
            <pre className="mt-6 overflow-x-auto rounded-md border border-cyan-300/20 bg-slate-950 p-4 text-sm leading-7 text-cyan-100">
              <code>{`validate -> build -> container -> Cloud Run
identity: GitHub OIDC / Workload Identity Federation`}</code>
            </pre>
          </aside>
        </div>
      </section>

      <Section title="Professional introduction">
        <div className="surface-card max-w-4xl p-6">
          <p className="body-copy">{profile.introduction}</p>
        </div>
      </Section>

      <Section title="Featured projects">
        <div className="grid gap-4 lg:grid-cols-4">
          {portfolioCards.map((project) => (
            <FeaturedProjectCard key={project.title} project={project} />
          ))}
        </div>
      </Section>

      <Section title="Technical capability map">
        <div className="grid gap-4 md:grid-cols-[0.9fr_1.1fr]">
          <div className="surface-card p-6">
            <p className="section-kicker">Cloud and delivery</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">
              A practical stack for platform work
            </h2>
            <p className="mt-3 body-copy">
              Colin focuses on cloud fundamentals, reliable delivery, supportable documentation and
              repeatable validation rather than unsupported proficiency ratings.
            </p>
            <Link to="/skills" className="mt-5 inline-flex accent-link">
              View full skills profile
            </Link>
          </div>
          <ul className="grid gap-2 sm:grid-cols-2">
            {profile.compactStack.map((item) => (
              <li key={item} className="surface-muted p-4 text-sm font-medium text-slate-100">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section title="Current experience">
        <div className="grid gap-4 md:grid-cols-2">
          {featuredExperience.map((entry) => (
            <article key={entry.title} className="surface-card p-5">
              <p className="section-kicker">{entry.period}</p>
              <h3 className="mt-2 font-semibold text-white">{entry.title}</h3>
              <p className="mt-1 text-slate-300">{entry.organisation}</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">{entry.description}</p>
            </article>
          ))}
        </div>
        <Link to="/experience" className="mt-5 inline-flex accent-link">
          View experience history
        </Link>
      </Section>

      <Section title="Community contribution">
        <article className="surface-card max-w-4xl p-6">
          <p className="section-kicker">{profile.volunteering.role}</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">{profile.volunteering.title}</h2>
          <p className="mt-3 body-copy">{profile.volunteering.summary}</p>
          <ul className="mt-5 grid gap-2">
            {profile.volunteering.notes.map((note) => (
              <li
                key={note}
                className="border-l-4 border-cyan-300/60 pl-4 text-sm leading-6 text-slate-300"
              >
                {note}
              </li>
            ))}
          </ul>
        </article>
      </Section>

      <Section title="Education and certifications">
        <div className="grid gap-4 md:grid-cols-3">
          {featuredEducation.map((entry) => (
            <article key={entry.title} className="surface-muted p-5">
              <p className="section-kicker">{entry.period}</p>
              <h3 className="mt-2 font-semibold text-white">{entry.title}</h3>
              <p className="mt-1 text-sm text-slate-300">{entry.provider}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="How Colin works">
        <ul className="grid gap-3 md:grid-cols-2">
          {profile.howColinWorks.map((item) => (
            <li key={item} className="surface-card border-l-4 border-l-cyan-300 p-4">
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Contact call to action">
        <div className="surface-card flex flex-col gap-5 p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white">Discuss a cloud or platform role</h2>
            <p className="mt-3 body-copy">{profile.availability}</p>
          </div>
          <Link to="/contact" className="primary-action">
            Contact Colin
          </Link>
        </div>
      </Section>
    </>
  );
}
