import { Link } from 'react-router-dom';
import type { PortfolioCard } from '../data/portfolio';

type ProjectCardProps = {
  project: PortfolioCard;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group surface-card grid gap-5 p-6 transition-transform hover:-translate-y-0.5 hover:border-cyan-300/50">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
          <ProjectStatus status={project.status} />
        </div>
        <p className="text-sm font-semibold uppercase tracking-wide text-cyan-200">
          {project.primaryPlatform}
        </p>
      </div>
      <div>
        <p className="text-sm font-semibold text-slate-100">Problem solved</p>
        <p className="mt-2 leading-7 text-slate-300">{project.problemSolved}</p>
      </div>
      <div>
        <p className="text-sm font-semibold text-slate-100">Key technologies</p>
        <TechnologyBadges items={project.keyTechnologies} label={`${project.title} technologies`} />
      </div>
      <div>
        <p className="text-sm font-semibold text-slate-100">Evidence</p>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {project.evidenceLinks.slice(0, 4).map((link) => (
            <li key={link.label}>
              <a className="evidence-link" href={link.href}>
                {link.label}
                <span className="sr-only">
                  {link.status === 'placeholder' ? ' placeholder' : ' available'}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <Link to={project.caseStudyPath} className="mt-auto inline-flex w-fit primary-action">
        {project.title === 'Living CV' ? 'View project evidence' : 'View case study'}
      </Link>
    </article>
  );
}

export function FeaturedProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="surface-card p-5">
      <div className="flex flex-col gap-3">
        <ProjectStatus status={project.status} />
        <h3 className="font-semibold text-white">{project.title}</h3>
        <p className="text-sm font-semibold uppercase tracking-wide text-cyan-200">
          {project.primaryPlatform}
        </p>
        <p className="text-sm leading-6 text-slate-300">{project.problemSolved}</p>
        <TechnologyBadges
          items={project.keyTechnologies.slice(0, 4)}
          label={`${project.title} technologies`}
        />
        <Link to={project.caseStudyPath} className="inline-flex text-sm accent-link">
          {project.title === 'Living CV' ? 'View evidence' : `Read ${project.title} case study`}
        </Link>
      </div>
    </article>
  );
}

export function ProjectStatus({ status }: { status: string }) {
  return (
    <span className="w-fit rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-100">
      {status}
    </span>
  );
}

export function TechnologyBadges({ items, label }: { items: readonly string[]; label: string }) {
  return (
    <ul className="mt-3 flex flex-wrap gap-2" aria-label={label}>
      {items.map((item) => (
        <li key={item} className="tech-badge">
          {item}
        </li>
      ))}
    </ul>
  );
}
