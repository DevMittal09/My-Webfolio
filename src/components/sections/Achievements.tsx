import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { achievements, positionsOfResponsibility, siteConfig } from "@/lib/data";

function TrophyIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 9H4.5a2.5 2.5 0 010-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 000-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0012 0V2z" />
    </svg>
  );
}

function RankIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

const iconMap = {
  trophy: TrophyIcon,
  rank: RankIcon,
  code: CodeIcon,
};

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="py-24 px-6"
      aria-label="Achievements section"
    >
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            label="Achievements"
            title="Highlights"
            description="Competition results, competitive programming milestones, and leadership roles."
          />
        </AnimatedSection>

        {/* Achievement cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {achievements.map((achievement, i) => {
            const Icon = iconMap[achievement.icon as keyof typeof iconMap];
            return (
              <AnimatedSection key={achievement.title} delay={0.1 + i * 0.1} className="h-full">
                <div className="beam-border h-full group">
                  <div className="beam-border-inner p-6 flex flex-col">
                    <div className="w-10 h-10 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mb-4 group-hover:bg-violet-500/20 transition-colors">
                      <Icon />
                    </div>
                    <h3 className="text-sm font-semibold text-neutral-100 mb-2 leading-snug">
                      {achievement.title}
                    </h3>
                    <p className="text-neutral-500 text-sm leading-relaxed flex-1">
                      {achievement.description}
                    </p>
                    {achievement.icon === "code" && (
                      <div className="mt-4 flex gap-2">
                        <a
                          href={siteConfig.leetcode}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-violet-400 font-mono hover:underline"
                        >
                          LeetCode ↗
                        </a>
                        <span className="text-neutral-700 text-xs">·</span>
                        <a
                          href={siteConfig.codeforces}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-violet-400 font-mono hover:underline"
                        >
                          Codeforces ↗
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Positions of Responsibility */}
        <AnimatedSection delay={0.4}>
          <p className="text-neutral-500 text-sm font-mono uppercase tracking-widest mb-6">
            Positions of Responsibility
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-5">
          {positionsOfResponsibility.map((pos, i) => (
            <AnimatedSection key={pos.title} delay={0.45 + i * 0.1}>
              <div className="bg-[#111111] border border-neutral-800 rounded-xl p-6 hover:border-violet-500/25 transition-all duration-300 h-full">
                <div className="flex items-start justify-between gap-4 mb-1">
                  <h3 className="text-sm font-semibold text-neutral-100 leading-snug">
                    {pos.title}
                  </h3>
                  <span className="text-neutral-600 text-xs font-mono flex-shrink-0 bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800">
                    {pos.period}
                  </span>
                </div>
                <p className="text-neutral-500 text-xs mb-3 italic">
                  {pos.description}
                </p>
                <ul className="space-y-2">
                  {pos.bullets.map((b, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-xs text-neutral-400 leading-relaxed"
                    >
                      <span className="text-violet-500 flex-shrink-0 mt-0.5">▸</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
