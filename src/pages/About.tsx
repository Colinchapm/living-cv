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
        <p>{profile.introduction}</p>
      </PageHeader>
      <Section title="Biography">
        <div className="max-w-3xl space-y-4 leading-7 text-slate-700">
          {profile.biography.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Section>
    </>
  );
}
