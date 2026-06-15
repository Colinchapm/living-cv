export function TrustPanel({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <aside className="surface-muted border-cyan-300/30 p-5">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <ul className="mt-4 grid gap-3">
        {items.map((item) => (
          <li key={item} className="border-l-4 border-brass pl-4 text-sm leading-6 text-slate-300">
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
}
