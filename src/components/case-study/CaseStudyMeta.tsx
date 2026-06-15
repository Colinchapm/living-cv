import type { MarketplaceCaseStudyProject } from '../../types/marketplaceCaseStudy';

type CaseStudyMetaProps = Pick<
  MarketplaceCaseStudyProject,
  'targetAudience' | 'businessValue' | 'integrations'
>;

export function CaseStudyMeta({ targetAudience, businessValue, integrations }: CaseStudyMetaProps) {
  const groups = [
    { title: 'Intended users', items: targetAudience },
    { title: 'Business value', items: businessValue },
    { title: 'Integration assumptions', items: integrations },
  ];

  return (
    <section className="grid gap-4 md:grid-cols-3" aria-label="Case study overview">
      {groups.map((group) => (
        <article key={group.title} className="surface-muted p-5">
          <h2 className="text-lg font-semibold text-white">{group.title}</h2>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
            {group.items.map((item) => (
              <li key={item} className="border-l-4 border-cyan-300/50 pl-3">
                {item}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}
