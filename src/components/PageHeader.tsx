type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
};

export function PageHeader({ eyebrow, title, children }: PageHeaderProps) {
  return (
    <section className="border-b border-cyan-300/10 bg-slate-950/65">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
        {eyebrow ? <p className="section-kicker mb-3">{eyebrow}</p> : null}
        <h1 className="max-w-4xl text-4xl font-bold tracking-normal text-white sm:text-5xl">
          {title}
        </h1>
        <div className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{children}</div>
      </div>
    </section>
  );
}
