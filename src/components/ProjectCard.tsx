import { Link } from 'react-router-dom';
import type { PortfolioProject } from '../data/portfolio';

type ProjectCardProps = {
  project: PortfolioProject;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <h3 className="text-xl font-semibold text-ink">{project.title}</h3>
        <ProjectStatus status={project.status} />
      </div>
      <p className="mt-4 leading-7 text-slate-700">{project.summary}</p>
      <p className="mt-4 text-sm font-semibold text-slate-700">
        Primary reference architecture: {project.referenceArchitecture}
      </p>
      <TechnologyBadges items={project.capabilities} label={`${project.title} capabilities`} />
      <Link
        to={`/projects/${project.slug}`}
        className="mt-6 inline-flex rounded bg-forest px-4 py-2 text-sm font-semibold text-white hover:bg-teal-800"
      >
        View case study
      </Link>
    </article>
  );
}

export function ProjectStatus({ status }: { status: string }) {
  return (
    <span className="w-fit rounded bg-teal-50 px-3 py-1 text-sm font-medium text-forest">
      {status}
    </span>
  );
}

export function TechnologyBadges({ items, label }: { items: readonly string[]; label: string }) {
  return (
    <ul className="mt-5 flex flex-wrap gap-2" aria-label={label}>
      {items.map((item) => (
        <li key={item} className="rounded border border-slate-200 bg-slate-50 px-3 py-1 text-sm">
          {item}
        </li>
      ))}
    </ul>
  );
}
