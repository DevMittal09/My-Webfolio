interface TechTagProps {
  label: string;
  variant?: "default" | "accent";
}

export default function TechTag({ label, variant = "default" }: TechTagProps) {
  if (variant === "accent") {
    return (
      <span className="inline-flex items-center px-2.5 py-1 rounded text-xs font-mono font-medium bg-violet-500/10 text-violet-400 border border-violet-500/20">
        {label}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded text-xs font-mono font-medium bg-neutral-800 text-neutral-300 border border-neutral-700">
      {label}
    </span>
  );
}
