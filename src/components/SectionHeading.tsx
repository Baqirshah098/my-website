type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-semibold text-slate-900 dark:text-slate-50 sm:text-4xl">{title}</h2>
      <p className="mt-4 text-lg text-slate-700 dark:text-slate-300">{description}</p>
    </div>
  );
}
