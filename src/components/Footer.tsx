import { profile } from '../data/profile';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-sm text-slate-600 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <p>&copy; {new Date().getFullYear()} {profile.name}. Living CV foundation.</p>
        <p>Built with React, TypeScript, Docker, Terraform, and GitHub Actions.</p>
      </div>
    </footer>
  );
}
