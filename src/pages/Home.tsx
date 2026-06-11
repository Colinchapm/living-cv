import { Link } from 'react-router-dom';
import { Meta } from '../components/Meta';
import { Section } from '../components/Section';
import { educationEntries } from '../data/education';
import { experienceEntries } from '../data/experience';
import { portfolioProjects } from '../data/portfolio';
import { profile } from '../data/profile';
import { personJsonLd, profilePageJsonLd, websiteJsonLd } from '../data/structuredData';
import { siteConfig } from '../data/site';

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
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-x-0 top-0 h-px bg-sky-300/50" aria-hidden="true" />
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-forest">
              AWS | Azure | Google Cloud | DevOps | Platform Support
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-normal text-white sm:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-4 text-2xl font-semibold text-sky-200">{profile.displayRole}</p>
            <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-200">
              {profile.heroStatement}
            </p>
            <p className="mt-5 max-w-3xl body-copy">{profile.summary}</p>
            <div className="no-print mt-8 flex flex-wrap gap-3">
              <Link to="/portfolio" className="primary-action">
                View Projects
              </Link>
              <Link to="/experience" className="secondary-action">
                View Experience
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
          <aside className="surface-card p-6" aria-labelledby="terminal-title">
            <h2 id="terminal-title" className="text-xl font-semibold text-white">
              Deployment signal
            </h2>
            <pre className="mt-5 overflow-x-auto rounded bg-slate-950 p-4 text-sm leading-7 text-sky-200">
              <code>{`$ npm run build
$ docker build .
$ terraform plan
$ gh workflow run deploy-gcp.yml`}</code>
            </pre>
            <p className="mt-4 body-copy">
              This portfolio is built as a working cloud-delivery artefact, not a static claims
              page.
            </p>
          </aside>
        </div>
      </section>

      <Section title="Professional introduction">
        <div className="surface-card max-w-4xl p-6">
          <p className="body-copy">{profile.introduction}</p>
        </div>
      </Section>

      <Section title="Evidence, not just claims">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {profile.principles.map((principle) => (
            <li key={principle} className="surface-card p-4">
              {principle}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Technical capabilities">
        <ul className="flex flex-wrap gap-2">
          {profile.compactStack.map((item) => (
            <li
              key={item}
              className="rounded border border-sky-300/25 bg-slate-950 px-3 py-2 text-sm text-slate-100"
            >
              {item}
            </li>
          ))}
        </ul>
        <Link to="/skills" className="mt-5 inline-flex accent-link">
          View full skills profile
        </Link>
      </Section>

      <Section title="Featured projects">
        <div className="grid gap-4 md:grid-cols-3">
          {portfolioProjects.map((project) => (
            <article key={project.title} className="surface-card p-5">
              <p className="w-fit rounded bg-sky-300 px-3 py-1 text-sm font-semibold text-slate-950">
                {project.status}
              </p>
              <h3 className="mt-4 font-semibold text-white">{project.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{project.summary}</p>
              <Link
                to={`/projects/${project.slug}`}
                className="mt-4 inline-flex text-sm accent-link"
              >
                Read {project.title} case study
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Current experience">
        <div className="grid gap-4 md:grid-cols-2">
          {featuredExperience.map((entry) => (
            <article key={entry.title} className="surface-card p-5">
              <p className="text-sm font-semibold text-sky-300">{entry.period}</p>
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

      <Section title="Education and certifications">
        <div className="grid gap-4 md:grid-cols-3">
          {featuredEducation.map((entry) => (
            <article key={entry.title} className="surface-muted p-5">
              <p className="text-sm font-semibold text-sky-300">{entry.period}</p>
              <h3 className="mt-2 font-semibold text-white">{entry.title}</h3>
              <p className="mt-1 text-sm text-slate-300">{entry.provider}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="How Colin works">
        <ul className="grid gap-3 md:grid-cols-2">
          {profile.howColinWorks.map((item) => (
            <li key={item} className="surface-card border-l-4 border-l-sky-300 p-4">
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Contact call to action">
        <div className="surface-card flex flex-col gap-5 p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white">Discuss a cloud or platform role</h2>
            <p className="mt-3 body-copy">
              Colin is seeking stable long-term work in cloud engineering, platform support, DevOps,
              technical support or infrastructure operations.
            </p>
          </div>
          <Link to="/contact" className="primary-action">
            Contact Colin
          </Link>
        </div>
      </Section>
    </>
  );
}
