import { Meta } from '../components/Meta';
import { PageHeader } from '../components/PageHeader';
import { Section } from '../components/Section';
import { profile } from '../data/profile';

export function Contact() {
  return (
    <>
      <Meta
        title="Contact"
        description="Contact details for Colin Chapman's Living CV and cloud-engineering portfolio."
      />
      <PageHeader title="Contact" eyebrow="Get in touch">
        <p>Contact details can be updated as Colin chooses which professional channels to publish.</p>
      </PageHeader>
      <Section title="Contact information">
        <address className="not-italic">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex rounded bg-forest px-5 py-3 text-sm font-semibold text-white hover:bg-teal-800"
          >
            {profile.email}
          </a>
        </address>
      </Section>
    </>
  );
}
