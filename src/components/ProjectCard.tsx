import { Link } from 'react-router-dom';
import type { PortfolioProject } from '../data/portfolio';

type ProjectCardProps = {
  project: PortfolioProject;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="surface-card p-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        <ProjectStatus status={project.status} />
      </div>
      <p className="mt-4 leading-7 text-slate-300">{project.summary}</p>
      <p className="mt-4 text-sm font-semibold text-slate-300">
        Primary reference architecture: {project.referenceArchitecture}
      </p>
      <TechnologyBadges items={project.capabilities} label={`${project.title} capabilities`} />
      <Link
        to={`/projects/${project.slug}`}
        className="mt-6 inline-flex primary-action"
      >
        View case study
      </Link>
    </article>
  );
}

export function ProjectStatus({ status }: { status: string }) {
  return (
    <span className="w-fit rounded bg-sky-300 px-3 py-1 text-sm font-semibold text-slate-950">
      {status}
    </span>
  );
}

export function TechnologyBadges({ items, label }: { items: readonly string[]; label: string }) {
  return (
    <ul className="mt-5 flex flex-wrap gap-2" aria-label={label}>
      {items.map((item) => (
        <li key={item} className="rounded border border-sky-300/20 bg-slate-950 px-3 py-1 text-sm text-slate-200">
          {item}
        </li>
      ))}
    </ul>
  );
}
