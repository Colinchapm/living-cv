import { Link } from 'react-router-dom';
import { Meta } from '../components/Meta';
import { PageHeader } from '../components/PageHeader';
import { Section } from '../components/Section';
import { diySosVolunteering } from '../data/volunteering';

export function Volunteering() {
  return (
    <>
      <Meta
        title="DIY SOS Volunteer Experience"
        description="Colin Chapman's volunteer construction experience with DIY SOS: The Big Build, supporting the renovation of a local boys' club into a performing arts and community facility."
        canonicalPath="/volunteering"
      />
      <PageHeader title="Community & Volunteer Experience" eyebrow="Volunteering">
        <p>
          Practical community contribution, presented carefully without overstating Colin&apos;s
          role or identifying other people in the photographs.
        </p>
      </PageHeader>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="surface-card overflow-hidden">
          <img
            src={diySosVolunteering.heroImage.src}
            width={diySosVolunteering.heroImage.width}
            height={diySosVolunteering.heroImage.height}
            alt={diySosVolunteering.heroImage.alt}
            className="aspect-[4/3] w-full object-cover"
            fetchPriority="high"
          />
          <p className="border-t border-cyan-300/20 px-5 py-4 text-sm text-slate-300">
            {diySosVolunteering.heroImage.caption}
          </p>
        </div>

        <article className="surface-card p-6">
          <p className="section-kicker">{diySosVolunteering.period}</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">{diySosVolunteering.title}</h2>
          <p className="mt-2 text-lg font-semibold text-cyan-100">{diySosVolunteering.role}</p>
          <p className="mt-2 text-slate-300">{diySosVolunteering.project}</p>
          <p className="mt-5 body-copy">{diySosVolunteering.description}</p>
          <div className="mt-6 rounded-md border border-cyan-300/20 bg-slate-950/80 p-4">
            <p className="text-sm font-semibold text-cyan-100">Connection to technology</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              {diySosVolunteering.technologyConnection}
            </p>
          </div>
        </article>
      </section>

      <Section title="Contribution">
        <ul className="grid gap-3 md:grid-cols-2">
          {diySosVolunteering.contributions.map((item) => (
            <li key={item} className="surface-muted border-l-4 border-l-cyan-300 p-4">
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Skills demonstrated">
        <ul className="flex flex-wrap gap-2">
          {diySosVolunteering.skills.map((skill) => (
            <li key={skill} className="tech-badge">
              {skill}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Photo gallery">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {diySosVolunteering.gallery.map((image) => (
            <figure key={image.src} className="surface-card overflow-hidden">
              <img
                src={image.src}
                width={image.width}
                height={image.height}
                alt={image.alt}
                loading="lazy"
                className="aspect-[3/4] w-full object-cover"
              />
              <figcaption className="border-t border-cyan-300/20 px-4 py-3 text-sm leading-6 text-slate-300">
                {image.caption}
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-5 max-w-4xl text-sm leading-6 text-slate-400">
          {diySosVolunteering.privacyNote}
        </p>
      </Section>

      <Section title="Back to technical evidence">
        <div className="surface-card flex flex-col gap-5 p-6 md:flex-row md:items-center md:justify-between">
          <p className="body-copy">
            The same practical delivery habits shown here feed into Colin&apos;s cloud and platform
            engineering approach.
          </p>
          <Link to="/portfolio" className="primary-action">
            View Projects
          </Link>
        </div>
      </Section>
    </>
  );
}
