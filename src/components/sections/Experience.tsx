"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import TechTag from "@/components/ui/TechTag";
import TiltCard from "@/components/ui/TiltCard";
import { experiences } from "@/lib/data";

function GitHubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

export default function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 85%", "end 40%"],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 90, damping: 22 });

  return (
    <section
      id="experience"
      className="py-24 px-6 bg-[#0d0d0d]"
      aria-label="Experience section"
    >
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            label="Experience"
            title="Where I've worked"
          />
        </AnimatedSection>

        <div className="relative" ref={timelineRef}>
          {/* Timeline track */}
          <div
            className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-neutral-800"
            aria-hidden="true"
          />
          {/* Scroll-drawn gradient line */}
          <motion.div
            className="absolute left-0 md:left-8 top-0 bottom-0 w-px origin-top bg-gradient-to-b from-violet-500 via-fuchsia-400 to-violet-500/0"
            style={{ scaleY: lineScale }}
            aria-hidden="true"
          />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <AnimatedSection key={i} delay={0.1}>
                <div className="relative pl-8 md:pl-20">
                  {/* Dot + pulse ring */}
                  <span
                    className="absolute left-[-4px] md:left-[28px] top-6 w-2.5 h-2.5 rounded-full bg-violet-500 ring-2 ring-violet-500/30 z-10"
                    aria-hidden="true"
                  />
                  <motion.span
                    className="absolute left-[-4px] md:left-[28px] top-6 w-2.5 h-2.5 rounded-full bg-violet-500/60"
                    animate={{ scale: [1, 2.4], opacity: [0.6, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
                    aria-hidden="true"
                  />

                  <TiltCard tiltMax={3}>
                    <article className="p-6 md:p-8">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                        <div>
                          <h3 className="text-lg font-semibold text-neutral-100">
                            {exp.role}
                          </h3>
                          <p className="text-violet-400 font-mono text-sm mt-0.5">
                            {exp.company}
                          </p>
                          {exp.location && (
                            <p className="text-neutral-600 text-xs font-mono mt-1">
                              {exp.location}
                            </p>
                          )}
                        </div>
                        <div className="flex items-center gap-3 flex-shrink-0 flex-wrap">
                          {exp.link && (
                            <a
                              href={exp.link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-neutral-500 hover:text-violet-400 transition-colors text-xs font-mono"
                            >
                              {exp.link.label} ↗
                            </a>
                          )}
                          <span className="text-neutral-500 text-sm font-mono bg-neutral-900 px-3 py-1 rounded-md border border-neutral-800">
                            {exp.period}
                          </span>
                          {exp.github && (
                            <a
                              href={exp.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5 text-neutral-500 hover:text-violet-400 transition-colors text-xs font-mono"
                              aria-label="View on GitHub"
                            >
                              <GitHubIcon />
                              Code
                            </a>
                          )}
                        </div>
                      </div>

                      <ul className="space-y-3 mb-6">
                        {exp.bullets.map((bullet, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-3 text-sm text-neutral-400 leading-relaxed"
                          >
                            <span className="text-violet-500 flex-shrink-0 mt-1 text-xs">▸</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((t) => (
                          <TechTag key={t} label={t} variant="accent" />
                        ))}
                      </div>
                    </article>
                  </TiltCard>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
