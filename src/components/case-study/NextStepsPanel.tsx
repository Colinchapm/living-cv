export function NextStepsPanel({ items }: { items: readonly string[] }) {
  return (
    <ol className="grid gap-3">
      {items.map((item, index) => (
        <li key={item} className="flex gap-3 rounded-md bg-slate-950/70 p-4 text-slate-300">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-cyan-300 text-sm font-semibold text-slate-950">
            {index + 1}
          </span>
          <span className="leading-7">{item}</span>
        </li>
      ))}
    </ol>
  );
}
