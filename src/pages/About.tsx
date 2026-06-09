import { Meta } from '../components/Meta';
import { PageHeader } from '../components/PageHeader';
import { Section } from '../components/Section';
import { profile } from '../data/profile';

export function About() {
  return (
    <>
      <Meta
        title="About"
        description="About Colin Chapman's Living CV and evidence-led approach to cloud and platform engineering portfolio work."
      />
      <PageHeader title="About" eyebrow="Professional profile">
        <p>{profile.summary}</p>
      </PageHeader>
      <Section title="How this CV is maintained">
        <div className="max-w-3xl space-y-4 leading-7 text-slate-700">
          <p>
            This site is structured as a Living CV. It is intended to be updated as projects mature,
            deployments are made, and evidence becomes available through commits, documentation, tests,
            and operational notes.
          </p>
          <p>
            Employment history, education, certifications, results, and claims should only be added
            when Colin has verified the details and can present them accurately.
          </p>
        </div>
      </Section>
    </>
  );
}
