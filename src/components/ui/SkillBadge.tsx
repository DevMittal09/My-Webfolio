interface SkillBadgeProps {
  label: string;
}

export default function SkillBadge({ label }: SkillBadgeProps) {
  return (
    <span className="inline-flex items-center px-3 py-1.5 rounded-md text-sm font-medium bg-neutral-800/80 text-neutral-200 border border-neutral-700 cursor-default transition-all duration-200 hover:border-violet-500/50 hover:bg-violet-500/10 hover:text-violet-200 hover:scale-105 hover:shadow-[0_0_14px_rgba(139,92,246,0.25)]">
      {label}
    </span>
  );
}
