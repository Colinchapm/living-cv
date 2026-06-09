import { NavLink } from 'react-router-dom';
import { navigationItems } from '../data/navigation';
import { profile } from '../data/profile';

export function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
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
