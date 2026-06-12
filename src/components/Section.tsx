type SectionProps = {
  title: string;
  children: React.ReactNode;
};

export function Section({ title, children }: SectionProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
      <div className="flex items-center gap-3">
        <span className="h-px w-8 bg-cyan-300/60" aria-hidden="true" />
        <h2 className="text-2xl font-semibold tracking-normal text-white">{title}</h2>
      </div>
      <div className="mt-6">{children}</div>
    </section>
  );
}
