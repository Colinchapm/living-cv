import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navigationItems } from '../data/navigation';
import { profile } from '../data/profile';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-cyan-300/20 bg-slate-950/90 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-16 items-center justify-between gap-4">
          <NavLink
            to="/"
            className="min-w-0 text-base font-semibold tracking-normal text-white"
            onClick={() => setIsOpen(false)}
          >
            <span className="block">{profile.name}</span>
            <span className="block text-xs font-medium text-cyan-200">{profile.displayRole}</span>
          </NavLink>
          <button
            className="inline-flex rounded-md border border-cyan-300/30 px-3 py-2 text-sm font-semibold text-slate-100 md:hidden"
            type="button"
            aria-controls="primary-navigation"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
          >
            Menu
          </button>
          <nav
            id="primary-navigation"
            className={`${isOpen ? 'block' : 'hidden'} absolute inset-x-4 top-20 rounded-lg border border-cyan-300/20 bg-slate-950 p-3 shadow-soft md:static md:block md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
            aria-label="Primary navigation"
          >
            <ul className="grid gap-1 md:flex md:flex-wrap md:justify-end">
              {navigationItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      [
                        'block rounded-md px-3 py-2 text-sm font-medium transition-colors',
                        isActive
                          ? 'bg-cyan-300 text-slate-950'
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
      </div>
    </header>
  );
}
