import { Link } from 'react-router-dom';
import { Meta } from '../components/Meta';

export function NotFound() {
  return (
    <>
      <Meta
        title="Page not found"
        description="The requested Living CV page could not be found."
        robots="noindex,follow"
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="surface-card max-w-3xl p-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-forest">404</p>
          <h1 className="mt-4 text-4xl font-bold text-white">Page not found</h1>
          <p className="mt-5 body-copy">
            This route is not part of Colin Chapman&apos;s Living CV. The links below point to the
            public sections of the portfolio.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/" className="primary-action">
              Home
            </Link>
            <Link to="/portfolio" className="secondary-action">
              Projects
            </Link>
            <Link to="/contact" className="secondary-action">
              Contact Colin
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
