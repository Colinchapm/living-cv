import type { KpiMetric } from '../../types/marketplaceCaseStudy';

export function KpiGrid({ metrics }: { metrics: readonly KpiMetric[] }) {
  return (
    <ul className="grid gap-4 md:grid-cols-3">
      {metrics.map((metric) => (
        <li key={metric.label} className="surface-muted p-5">
          <p className="section-kicker">{metric.kind}</p>
          <h3 className="mt-2 text-lg font-semibold text-white">{metric.label}</h3>
          <p className="mt-3 text-cyan-100">{metric.value}</p>
          <p className="mt-3 text-sm leading-6 text-slate-300">{metric.note}</p>
        </li>
      ))}
    </ul>
  );
}
