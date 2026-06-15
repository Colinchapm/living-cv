type ArchitectureDiagramProps = {
  title: string;
  mermaid: string;
};

export function ArchitectureDiagram({ title, mermaid }: ArchitectureDiagramProps) {
  return (
    <figure className="surface-muted overflow-hidden p-4">
      <figcaption className="text-sm font-semibold text-cyan-200">{title}</figcaption>
      <pre className="mt-4 overflow-x-auto rounded-md border border-cyan-300/20 bg-slate-950 p-4 text-sm leading-7 text-slate-200">
        <code>{mermaid}</code>
      </pre>
    </figure>
  );
}
