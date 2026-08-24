interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-14">
      <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/25 bg-violet-500/10 text-violet-300 text-xs font-mono font-medium tracking-widest uppercase mb-4">
        <span
          className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-400 animate-pulse"
          aria-hidden="true"
        />
        {label}
      </p>
      <h2 className="heading-gradient w-fit text-3xl md:text-4xl font-bold tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-neutral-400 text-base max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
      <div
        className="mt-5 h-0.5 w-16 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-400 to-transparent"
        aria-hidden="true"
      />
    </div>
  );
}
