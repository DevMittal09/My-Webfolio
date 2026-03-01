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
      <p className="text-violet-400 text-sm font-mono font-medium tracking-widest uppercase mb-3">
        {label}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-neutral-100 tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-neutral-400 text-base max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
      <div className="mt-5 w-12 h-0.5 bg-gradient-to-r from-violet-500 to-purple-400 rounded-full" />
    </div>
  );
}
