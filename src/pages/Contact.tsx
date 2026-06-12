import { FormEvent, useState } from 'react';
import { Meta } from '../components/Meta';
import { PageHeader } from '../components/PageHeader';
import { Section } from '../components/Section';
import { profile } from '../data/profile';

const maxMessageLength = 1200;

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
  website?: string;
};

export function Contact() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const message = String(formData.get('message') ?? '').trim();
    const website = String(formData.get('website') ?? '').trim();
    const nextErrors: FormErrors = {};

    if (!name) {
      nextErrors.name = 'Enter your name.';
    }

    if (!email) {
      nextErrors.email = 'Enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = 'Enter a valid email address.';
    }

    if (!message) {
      nextErrors.message = 'Enter a message.';
    } else if (message.length > maxMessageLength) {
      nextErrors.message = `Keep the message under ${maxMessageLength} characters.`;
    }

    if (website) {
      nextErrors.website = 'Submission blocked.';
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setStatus(
        'Development mode: this form is validated locally but is not connected to a backend yet. Please use the email link for now.',
      );
      event.currentTarget.reset();
    } else {
      setStatus('');
    }
  }

  return (
    <>
      <Meta
        title="Contact Colin Chapman"
        description="Contact Colin Chapman for cloud engineering, platform support, DevOps, technical support and infrastructure operations opportunities in North East England."
        canonicalPath="/contact"
      />
      <PageHeader title="Contact" eyebrow="Get in touch">
        <p>
          Professional contact channels for cloud engineering, platform support, DevOps, technical
          support and infrastructure operations opportunities.
        </p>
      </PageHeader>
      <Section title="Contact information">
        <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <address className="surface-card space-y-5 p-6 not-italic text-slate-300">
            <div>
              <p className="section-kicker">Location</p>
              <p className="mt-2 text-slate-100">{profile.location}</p>
            </div>
            <div>
              <p className="section-kicker">Availability</p>
              <p className="mt-2 text-slate-100">{profile.availability}</p>
            </div>
            <div className="grid gap-3">
              <a className="evidence-link" href={`mailto:${profile.email}`}>
                Email Colin Chapman
              </a>
              <a className="evidence-link" href={profile.githubUrl}>
                GitHub profile
              </a>
              <a className="evidence-link" href={profile.linkedinUrl}>
                LinkedIn profile placeholder
              </a>
            </div>
          </address>
          <form className="surface-card p-6" onSubmit={handleSubmit} noValidate>
            <div className="grid gap-5">
              <div>
                <label className="block text-sm font-semibold text-white" htmlFor="name">
                  Name
                </label>
                <input
                  className="mt-2 w-full rounded-md border border-cyan-300/30 bg-slate-950 px-3 py-2 text-white"
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name ? (
                  <p className="mt-2 text-sm text-clay" id="name-error">
                    {errors.name}
                  </p>
                ) : null}
              </div>
              <div>
                <label className="block text-sm font-semibold text-white" htmlFor="email">
                  Email
                </label>
                <input
                  className="mt-2 w-full rounded-md border border-cyan-300/30 bg-slate-950 px-3 py-2 text-white"
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email ? (
                  <p className="mt-2 text-sm text-clay" id="email-error">
                    {errors.email}
                  </p>
                ) : null}
              </div>
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                {errors.website ? <p>{errors.website}</p> : null}
              </div>
              <div>
                <label className="block text-sm font-semibold text-white" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="mt-2 min-h-40 w-full rounded-md border border-cyan-300/30 bg-slate-950 px-3 py-2 text-white"
                  id="message"
                  name="message"
                  maxLength={maxMessageLength}
                  aria-describedby={errors.message ? 'message-error message-help' : 'message-help'}
                />
                <p className="mt-2 text-sm text-slate-400" id="message-help">
                  Maximum {maxMessageLength} characters.
                </p>
                {errors.message ? (
                  <p className="mt-2 text-sm text-clay" id="message-error">
                    {errors.message}
                  </p>
                ) : null}
              </div>
              <button className="w-fit primary-action" type="submit">
                Validate message
              </button>
              {status ? (
                <p
                  className="rounded-md border border-cyan-300/30 bg-slate-950 p-4 text-sm text-cyan-100"
                  role="status"
                >
                  {status}
                </p>
              ) : null}
            </div>
          </form>
        </div>
      </Section>
    </>
  );
}
