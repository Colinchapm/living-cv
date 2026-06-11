import { Meta } from '../components/Meta';
import { PageHeader } from '../components/PageHeader';
import { Section } from '../components/Section';
import { profile } from '../data/profile';
import { personJsonLd, profilePageJsonLd } from '../data/structuredData';

export function About() {
  return (
    <>
      <Meta
        title="About Colin Chapman"
        description="Professional profile for Colin Chapman, a Platform Engineer and North Tyneside technology professional with AWS, Azure, Google Cloud, Python, Linux, SQL and platform support experience."
        canonicalPath="/about"
        jsonLd={[profilePageJsonLd('/about'), personJsonLd()]}
      />
      <PageHeader title="About" eyebrow="Professional profile">
        <p>{profile.introduction}</p>
      </PageHeader>
      <Section title="Biography">
        <div className="surface-card max-w-3xl space-y-4 p-6 leading-7 text-slate-300">
          {profile.biography.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Section>
    </>
  );
}
