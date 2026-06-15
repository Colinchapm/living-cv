import type { PropsWithChildren } from 'react';

type CaseStudySectionProps = PropsWithChildren<{
  id: string;
  heading: string;
  intro?: string;
}>;

export function CaseStudySection({ id, heading, intro, children }: CaseStudySectionProps) {
  return (
    <section id={id} className="surface-card scroll-mt-28 p-6">
      <h2 className="text-2xl font-semibold text-white">{heading}</h2>
      {intro ? <p className="mt-4 body-copy">{intro}</p> : null}
      <div className="mt-5">{children}</div>
    </section>
  );
}
