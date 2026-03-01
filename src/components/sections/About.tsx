import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { aboutParagraphs, aboutStats, siteConfig } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-24 px-6" aria-label="About section">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            label="About"
            title="Who I am"
            description="A systems focused engineer who builds things that need to work in production."
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <div className="space-y-5">
            {aboutParagraphs.map((para, i) => (
              <AnimatedSection key={i} delay={0.1 * i}>
                <p className="text-neutral-400 leading-relaxed text-base">
                  {para}
                </p>
              </AnimatedSection>
            ))}

            <AnimatedSection delay={0.35}>
              <div className="mt-6 p-4 rounded-lg border border-neutral-800 bg-neutral-900/40">
                <p className="text-neutral-500 text-xs font-mono uppercase tracking-wider mb-2">
                  Education
                </p>
                <p className="text-neutral-200 font-medium">
                  {siteConfig.college}
                </p>
                <p className="text-neutral-400 text-sm">
                  {siteConfig.degree} &nbsp;·&nbsp; CGPA:{" "}
                  <span className="text-violet-400 font-mono font-semibold">
                    {siteConfig.cgpa}
                  </span>
                </p>
                <p className="text-neutral-500 text-xs font-mono mt-1">
                  Aug 2023 – July 2027 (tentative)
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {aboutStats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={0.1 + i * 0.08} direction="right">
                <div className="bg-[#111111] border border-neutral-800 rounded-xl p-5 hover:border-violet-500/30 transition-colors duration-300 group">
                  <p className="text-3xl font-bold font-mono text-violet-400 group-hover:text-violet-300 transition-colors mb-2">
                    {stat.value}
                  </p>
                  <p className="text-neutral-500 text-xs leading-snug">
                    {stat.label}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
