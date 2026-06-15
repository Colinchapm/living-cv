type CaseStudyTocProps = {
  sections: readonly { id: string; heading: string }[];
};

export function CaseStudyToc({ sections }: CaseStudyTocProps) {
  return (
    <nav className="surface-card p-5 lg:sticky lg:top-24" aria-label="Case study contents">
      <h2 className="text-lg font-semibold text-white">Contents</h2>
      <ol className="mt-4 grid gap-2 text-sm">
        {sections.map((section) => (
          <li key={section.id}>
            <a className="accent-link" href={`#${section.id}`}>
              {section.heading}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
