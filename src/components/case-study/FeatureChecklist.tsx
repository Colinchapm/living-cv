export function FeatureChecklist({ features }: { features: readonly string[] }) {
  return (
    <ul className="grid gap-3 md:grid-cols-2">
      {features.map((feature) => (
        <li key={feature} className="surface-muted p-4 text-sm leading-6 text-slate-200">
          <span className="mr-2 font-semibold text-cyan-200" aria-hidden="true">
            ✓
          </span>
          {feature}
        </li>
      ))}
    </ul>
  );
}
