import { NavLink } from 'react-router-dom';
import { navigationItems } from '../data/navigation';
import { profile } from '../data/profile';

export function Header() {
  return (
    <header className="border-b border-sky-400/20 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <NavLink to="/" className="w-fit text-lg font-semibold tracking-normal text-white">
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
                        ? 'bg-forest text-slate-950'
                        : 'text-slate-200 hover:bg-slate-800 hover:text-white',
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
