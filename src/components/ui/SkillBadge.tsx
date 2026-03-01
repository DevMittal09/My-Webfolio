interface SkillBadgeProps {
  label: string;
}

export default function SkillBadge({ label }: SkillBadgeProps) {
  return (
    <span className="inline-flex items-center px-3 py-1.5 rounded-md text-sm font-medium bg-neutral-800/80 text-neutral-200 border border-neutral-700 hover:border-violet-500/40 hover:bg-violet-500/5 transition-colors duration-200">
      {label}
    </span>
  );
}
