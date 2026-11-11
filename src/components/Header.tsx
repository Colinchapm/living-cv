import { NavLink } from 'react-router-dom';
import { navigationItems } from '../data/navigation';
import { siteAreas } from '../data/siteAreas';
import { profile } from '../data/profile';

export function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <nav
        aria-label="Site areas"
        className="border-b border-slate-200 bg-slate-50"
      >
        <ul className="mx-auto flex max-w-6xl flex-wrap gap-2 px-4 py-3 sm:px-6 lg:px-8">
          {siteAreas.map((item) => (
            <li key={item.id}>
              {item.externalUrl ? (
                <a
                  className="block rounded border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 transition-colors hover:border-forest hover:text-forest"
                  href={item.externalUrl}
                >
                  {item.label}
                </a>
              ) : (
                <NavLink
                  to={item.path}
                  end
                  className={({ isActive }) =>
                    [
                      'block rounded border px-4 py-2 text-sm font-semibold transition-colors',
                      isActive
                        ? 'border-forest bg-forest text-white'
                        : 'border-slate-300 bg-white text-slate-800 hover:border-forest hover:text-forest',
                    ].join(' ')
                  }
                >
                  {item.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <NavLink to="/" className="w-fit text-lg font-semibold tracking-normal text-ink">
          {profile.name}
        </NavLink>
        <nav aria-label="Primary navigation">
          <ul className="flex flex-wrap gap-1">
            {navigationItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    [
                      'block rounded px-3 py-2 text-sm font-medium transition-colors',
                      isActive
                        ? 'bg-forest text-white'
                        : 'text-slate-700 hover:bg-slate-100 hover:text-ink',
                    ].join(' ')
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
