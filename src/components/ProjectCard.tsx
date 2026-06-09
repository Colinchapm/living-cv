import type { portfolioProjects } from '../data/portfolio';

type Project = (typeof portfolioProjects)[number];

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <h3 className="text-xl font-semibold text-ink">{project.title}</h3>
        <span className="w-fit rounded bg-teal-50 px-3 py-1 text-sm font-medium text-forest">
          {project.status}
        </span>
      </div>
      <p className="mt-4 leading-7 text-slate-700">{project.summary}</p>
      <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} focus areas`}>
        {project.focus.map((item) => (
          <li key={item} className="rounded border border-slate-200 bg-slate-50 px-3 py-1 text-sm">
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
