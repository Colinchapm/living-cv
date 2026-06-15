import { ProjectStatus, TechnologyBadges } from '../ProjectCard';
import type { MarketplaceCaseStudyProject } from '../../types/marketplaceCaseStudy';

type CaseStudyHeroProps = Pick<
  MarketplaceCaseStudyProject,
  'title' | 'eyebrow' | 'summary' | 'role' | 'status' | 'stack'
>;

export function CaseStudyHero({
  title,
  eyebrow,
  summary,
  role,
  status,
  stack,
}: CaseStudyHeroProps) {
  return (
    <header className="border-b border-cyan-300/10 bg-slate-950/60">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_0.42fr] lg:px-8 lg:py-16">
        <div>
          <p className="section-kicker">{eyebrow}</p>
          <h1 className="mt-4 text-4xl font-bold tracking-normal text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-xl leading-9 text-slate-100">{summary}</p>
          <p className="mt-5 text-cyan-100">{role}</p>
        </div>
        <aside className="surface-card h-fit p-5" aria-label="Case study status and stack">
          <ProjectStatus status={status} />
          <h2 className="mt-5 text-lg font-semibold text-white">Suggested stack</h2>
          <TechnologyBadges items={stack} label={`${title} suggested stack`} />
        </aside>
      </div>
    </header>
  );
}
