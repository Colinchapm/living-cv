import type { EvidenceLink } from '../data/portfolio';

export function ArchitectureSummary({
  architecture,
  services,
}: {
  architecture: string;
  services: readonly string[];
}) {
  return (
    <section className="surface-card p-6">
      <h2 className="text-2xl font-semibold text-white">Proposed architecture</h2>
      <p className="mt-3 text-slate-300">Primary reference architecture: {architecture}</p>
      <TechnologyList items={services} label={`${architecture} services`} />
    </section>
  );
}

export function Requirements({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <section className="surface-card p-6">
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      <ul className="mt-4 space-y-3 text-slate-300">
        {items.map((item) => (
          <li key={item} className="border-l-4 border-brass pl-4 leading-7">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function SecurityControls({ items }: { items: readonly string[] }) {
  return <Requirements title="Security considerations" items={items} />;
}

export function ImplementationRoadmap({ items }: { items: readonly string[] }) {
  return (
    <section className="surface-card p-6">
      <h2 className="text-2xl font-semibold text-white">Implementation roadmap</h2>
      <ol className="mt-4 space-y-3 text-slate-300">
        {items.map((item, index) => (
          <li key={item} className="flex gap-3 leading-7">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-sky-300 text-sm font-semibold text-slate-950">
              {index + 1}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function EvidenceLinks({ links }: { links: readonly EvidenceLink[] }) {
  return (
    <section className="surface-card p-6">
      <h2 className="text-2xl font-semibold text-white">Evidence links</h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="block rounded border border-sky-300/20 bg-slate-950 px-4 py-3 text-sm font-semibold text-slate-100 hover:bg-slate-800"
            >
              {link.label}
              <span className="ml-2 font-normal text-slate-400">
                {link.status === 'placeholder' ? '(placeholder)' : '(available)'}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function TechnologyList({ items, label }: { items: readonly string[]; label: string }) {
  return (
    <ul className="mt-4 flex flex-wrap gap-2" aria-label={label}>
      {items.map((item) => (
        <li
          key={item}
          className="rounded border border-sky-300/20 bg-slate-950 px-3 py-2 text-sm text-slate-200"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
