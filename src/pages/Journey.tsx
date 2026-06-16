import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Meta } from '../components/Meta';
import { Section } from '../components/Section';
import {
  journeyCloudApplications,
  journeyEngineeringSkills,
  journeyImages,
  journeyPrinciples,
  journeyTimeline,
  skillsFromCaring,
  type JourneyImage,
} from '../data/journey';
import { breadcrumbJsonLd } from '../data/structuredData';

function JourneyImageCard({ image }: { image: JourneyImage }) {
  const [hasError, setHasError] = useState(false);

  return (
    <figure className="surface-muted overflow-hidden">
      {hasError ? (
        <div
          className="flex aspect-[4/3] items-center justify-center border-b border-cyan-300/10 bg-slate-950 p-6 text-center"
          role="img"
          aria-label={image.alt}
        >
          <span className="text-sm font-semibold text-cyan-100">{image.fallbackLabel}</span>
        </div>
      ) : (
        <img
          src={image.src}
          alt={image.alt}
          className="aspect-[4/3] w-full object-cover"
          loading="lazy"
          onError={() => setHasError(true)}
        />
      )}
      <figcaption className="p-4 text-sm leading-6 text-slate-300">{image.caption}</figcaption>
    </figure>
  );
}

export function Journey() {
  return (
    <>
      <Meta
        title="My Journey | Colin Chapman"
        description="The personal journey behind Colin Chapman's Living CV: fatherhood, autism, caring responsibilities, resilience, systems thinking and a return to cloud and platform engineering."
        canonicalPath="/journey"
        jsonLd={[
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'My Journey', path: '/journey' },
          ]),
        ]}
      />
      <section className="relative overflow-hidden border-b border-cyan-300/10 bg-slate-950/60">
        <div
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent"
          aria-hidden="true"
        />
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_0.48fr] lg:px-8 lg:py-20">
          <div>
            <p className="section-kicker">My Journey | Colin Chapman</p>
            <h1 className="mt-4 text-4xl font-bold tracking-normal text-white sm:text-6xl">
              The Person Behind The Platform
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-100">
              A personal account of how fatherhood, autism, caring responsibilities and resilience
              shaped the way I solve problems, build systems and approach technology.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/portfolio" className="primary-action">
                View technical evidence
              </Link>
              <Link to="/contact" className="secondary-action">
                Contact Colin
              </Link>
            </div>
          </div>
          <JourneyImageCard image={journeyImages[0]} />
        </div>
      </section>

      <Section title="My Journey">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr]">
          <article className="surface-card p-6">
            <div className="space-y-5 body-copy">
              <p>
                I graduated with a Foundation Degree in Computing in 2010 and expected to follow a
                fairly traditional path into technology.
              </p>
              <p>Life had other plans.</p>
              <p>
                As my family grew, I found myself navigating a world of education systems, health
                services, assessments, support plans and advocacy.
              </p>
              <p>
                Charlie was diagnosed autistic in 2013. During the assessment process many of the
                observations sounded familiar. Comments such as &quot;You weren&apos;t potty trained
                until late either&quot; and &quot;He&apos;s a copy of you&quot; started appearing
                regularly.
              </p>
              <p>
                What began as a process of understanding my son gradually became a process of
                understanding myself. In 2015 I received my own autism diagnosis. Over time, further
                diagnoses followed within the family.
              </p>
            </div>
          </article>
          <aside className="surface-card p-6" aria-labelledby="journey-boundary-title">
            <h2 id="journey-boundary-title" className="text-xl font-semibold text-white">
              Professional context
            </h2>
            <p className="mt-4 body-copy">
              This page gives high-level context only. It does not share private medical detail,
              full address information or unnecessary family information. The focus is how lived
              responsibility shaped professional strengths.
            </p>
          </aside>
        </div>
      </Section>

      <Section title="Timeline">
        <ol className="grid gap-4" aria-label="Journey timeline">
          {journeyTimeline.map((item) => (
            <li key={`${item.year}-${item.title}`} className="timeline-card">
              <article>
                <p className="section-kicker">{item.year}</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">{item.title}</h2>
                <p className="mt-3 body-copy">{item.description}</p>
              </article>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="Becoming a Parent Carer">
        <div className="surface-card p-6">
          <div className="space-y-5 body-copy">
            <p>Over time I became more than a parent.</p>
            <p>I became a teacher, advocate, organiser, researcher, planner and problem solver.</p>
            <p>
              I learned how to navigate systems, gather evidence, explain complex topics, support
              development and adapt approaches when something was not working.
            </p>
            <p>The role demanded patience, persistence and consistency.</p>
          </div>
        </div>
      </Section>

      <Section title="What Caring Taught Me">
        <div className="grid gap-5 md:grid-cols-2">
          {skillsFromCaring.map((skill) => (
            <article key={skill.title} className="surface-card p-6">
              <h2 className="text-2xl font-semibold text-white">{skill.title}</h2>
              <ul className="mt-4 grid gap-3">
                {skill.examples.map((example) => (
                  <li key={example} className="border-l-4 border-cyan-300/60 pl-4 body-copy">
                    {example}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-6 surface-muted p-6">
          <p className="body-copy">
            The biggest effect of change happens through the amount of effort put into it.
            Meaningful progress rarely happens overnight. Practice matters. Consistency matters.
            When a problem cannot be solved today, I learn, adapt and continue tomorrow.
          </p>
        </div>
      </Section>

      <Section title="Responsibility">
        <div className="surface-card p-6">
          <p className="section-kicker">Responsibility</p>
          <h2 className="mt-2 text-3xl font-semibold text-white">A Man of Duties</h2>
          <div className="mt-5 space-y-5 body-copy">
            <p>Over the years I have become a man of duties.</p>
            <p>If something needs doing, I do it.</p>
            <p>If there is a problem, I work towards a solution.</p>
            <p>If somebody depends on me, I step forward.</p>
            <p>The line often stops with me.</p>
            <p>That responsibility has shaped how I approach both life and work.</p>
            <p>I do not expect obstacles to disappear. I expect to work through them.</p>
          </div>
        </div>
      </Section>

      <Section title="Technology and Systems Thinking">
        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <article className="surface-card p-6">
            <h2 className="text-2xl font-semibold text-white">Skills strengthened by experience</h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {journeyEngineeringSkills.map((skill) => (
                <li key={skill} className="tech-badge">
                  {skill}
                </li>
              ))}
            </ul>
          </article>
          <article className="surface-card p-6">
            <h2 className="text-2xl font-semibold text-white">Applied to engineering work</h2>
            <p className="mt-4 body-copy">
              These are the same skills I now apply to cloud infrastructure, platform support,
              automation and software delivery.
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {journeyCloudApplications.map((item) => (
                <li key={item} className="surface-muted p-4 text-sm font-semibold text-slate-100">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </Section>

      <Section title="Returning to Technology">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr]">
          <article className="surface-card p-6">
            <div className="space-y-5 body-copy">
              <p>I never stopped learning.</p>
              <p>
                Although my career path was not completely linear, I continued developing technical
                knowledge, learning cloud technologies and building projects.
              </p>
              <p>The Living CV itself is evidence of that commitment.</p>
              <p>
                It exists to show what I can do rather than simply describe it, using source code,
                CI/CD, Cloud Run, Terraform, DNS, SSL, testing, documentation and portfolio case
                studies as practical evidence.
              </p>
            </div>
          </article>
          <JourneyImageCard image={journeyImages[2]} />
        </div>
      </Section>

      <Section title="Personal image gallery">
        <div className="grid gap-4 md:grid-cols-2">
          {journeyImages.slice(1).map((image) => (
            <JourneyImageCard key={image.src} image={image} />
          ))}
        </div>
      </Section>

      <Section title="Looking Forward">
        <div className="surface-card p-6">
          <div className="space-y-5 body-copy">
            <p>Today I bring something that I did not have when I graduated.</p>
            <p>Perspective.</p>
            <p>I understand responsibility.</p>
            <p>I understand resilience.</p>
            <p>I understand that meaningful results are built through consistent effort.</p>
            <p>When I commit to something, I intend to see it through.</p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {journeyPrinciples.map((principle) => (
              <article key={principle.title} className="surface-muted p-5">
                <h2 className="text-lg font-semibold text-white">{principle.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-300">{principle.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
