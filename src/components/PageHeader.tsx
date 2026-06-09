type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
};

export function PageHeader({ eyebrow, title, children }: PageHeaderProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {eyebrow ? (
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-clay">{eyebrow}</p>
        ) : null}
        <h1 className="max-w-4xl text-4xl font-bold tracking-normal text-ink sm:text-5xl">{title}</h1>
        <div className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">{children}</div>
      </div>
    </section>
  );
}
