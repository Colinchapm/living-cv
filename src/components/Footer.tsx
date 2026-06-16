import { profile } from '../data/profile';

export function Footer() {
  return (
    <footer className="border-t border-cyan-300/20 bg-slate-950/95">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 text-sm text-slate-300 sm:px-6 md:grid-cols-[1fr_auto] md:items-end lg:px-8">
        <div>
          <p className="font-semibold text-white">{profile.name}</p>
          <p className="mt-1">{profile.displayRole}</p>
          <p className="mt-2 max-w-2xl">
            Built as a living evidence portfolio with React, TypeScript, Docker, Terraform, GitHub
            Actions and Google Cloud deployment documentation.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 md:justify-end">
          <a className="accent-link" href="/journey">
            Journey
          </a>
          <a className="accent-link" href="/volunteering">
            Volunteering
          </a>
          <a className="accent-link" href={`mailto:${profile.email}`}>
            Email
          </a>
          <a className="accent-link" href={profile.githubUrl}>
            GitHub
          </a>
          <span>&copy; {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
