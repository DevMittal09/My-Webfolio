import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillBadge from "@/components/ui/SkillBadge";
import { skillGroups } from "@/lib/data";

const categoryColors: Record<string, string> = {
  Languages: "#a78bfa",
  Databases: "#3b82f6",
  Frameworks: "#8b5cf6",
  "Security & Identity": "#ef4444",
  Infrastructure: "#10b981",
  Concepts: "#f59e0b",
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 bg-[#0d0d0d]"
      aria-label="Skills section"
    >
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            label="Skills"
            title="My toolkit"
            description="Technologies and concepts I work with regularly."
          />
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => {
            const color = categoryColors[group.category] ?? "#a78bfa";
            return (
              <AnimatedSection key={group.category} delay={0.1 + i * 0.08}>
                <div className="bg-[#111111] border border-neutral-800 rounded-xl p-5 h-full hover:border-neutral-700 transition-colors duration-300">
                  <div className="flex items-center gap-2 mb-4">
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: color }}
                      aria-hidden="true"
                    />
                    <p
                      className="text-xs font-mono font-semibold uppercase tracking-widest"
                      style={{ color }}
                    >
                      {group.category}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <SkillBadge key={skill} label={skill} />
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
