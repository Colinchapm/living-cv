import { Link } from 'react-router-dom';
import { Meta } from '../components/Meta';

export function EBWOverview() {
  return (
    <>
      <Meta
        title="EBW — Wrestling and Live Entertainment"
        description="Explore the EBW wrestling promotion in development, including events, talent development and a planned merchandise and ticketing platform."
      />
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-clay">
          EBW / Professional wrestling
        </p>
        <h1 className="mt-4 text-4xl font-bold text-ink sm:text-6xl">
          A new platform for British wrestling.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
          EBW is developing live events, original wrestling talent and a digital
          platform for news, future ticket sales and merchandise. Superstars in
          Their Eyes will give newcomers a development route alongside a separate
          application process for experienced wrestlers.
        </p>
        <div className="mt-8 rounded-lg border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-semibold text-ink">In development</h2>
          <p className="mt-3 text-slate-700">
            No EBW event tickets or merchandise are offered for sale on this
            page. Performer applications are not open through the Living CV.
            The operational platform is being built and verified separately.
          </p>
        </div>
        <p className="mt-8">
          <Link to="/" className="font-semibold text-forest underline">
            Return to the Living CV
          </Link>
        </p>
      </section>
    </>
  );
}

export function CheerUpGothOverview() {
  return (
    <>
      <Meta
        title="Cheer Up Goth — Comedy and Performer Development"
        description="Cheer Up Goth is developing live comedy, emerging-comedian coaching and a separate pathway for experienced acts."
      />
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-clay">
          Cheer Up Goth / Live comedy
        </p>
        <h1 className="mt-4 text-4xl font-bold text-ink sm:text-6xl">
          Because weekends are for the living.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
          Cheer Up Goth is developing comedy nights that showcase established
          performers while building opportunities for new comedians to learn,
          develop material and reach the stage. Experienced acts will have a
          separate screening and booking pathway.
        </p>
        <div className="mt-8 rounded-lg border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-semibold text-ink">In development</h2>
          <p className="mt-3 text-slate-700">
            No live show dates or tickets are announced here. Performer
            registration, training reviews and booking workflows are still
            being developed and must pass privacy and operational checks.
          </p>
        </div>
        <p className="mt-8">
          <Link to="/" className="font-semibold text-forest underline">
            Return to the Living CV
          </Link>
        </p>
      </section>
    </>
  );
}
