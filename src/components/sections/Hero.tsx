"use client";

import { motion } from "framer-motion";
import { siteConfig, heroStack } from "@/lib/data";
import ParticleField from "@/components/ui/ParticleField";
import Magnetic from "@/components/ui/Magnetic";
import Typewriter from "@/components/ui/Typewriter";

function GitHubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function LeetCodeIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.483 0a1.374 1.374 0 00-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 00-1.209 2.104 5.35 5.35 0 00-.125.513 5.527 5.527 0 00.062 2.362 5.83 5.83 0 00.349 1.017 5.938 5.938 0 001.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 00-1.951-.003l-2.396 2.392a3.021 3.021 0 01-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 01.066-.523 2.545 2.545 0 01.619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 00-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0013.483 0zm-2.866 12.815a1.38 1.38 0 00-1.38 1.382 1.38 1.38 0 001.38 1.382H20.79a1.38 1.38 0 001.38-1.382 1.38 1.38 0 00-1.38-1.382z" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const EASE = [0.25, 0.1, 0.25, 1] as [number, number, number, number];

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

const roles = [
  "Backend & Full-Stack Engineer",
  "Cloud-Native Systems Builder",
  "IAM & Security Enthusiast",
  "Competitive Programmer",
];

const socialLinks = [
  { href: siteConfig.github,    icon: GitHubIcon,   label: "GitHub" },
  { href: siteConfig.linkedin,  icon: LinkedInIcon, label: "LinkedIn" },
  { href: siteConfig.leetcode,  icon: LeetCodeIcon, label: "LeetCode" },
];

export default function Hero() {
  const scrollToNext = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139,92,246,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139,92,246,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      {/* Floating gradient orbs */}
      <div
        className="orb w-[420px] h-[420px] bg-violet-600 top-[-80px] left-[-120px]"
        aria-hidden="true"
      />
      <div
        className="orb w-[360px] h-[360px] bg-fuchsia-600 bottom-[-60px] right-[-100px]"
        style={{ animationDelay: "-8s" }}
        aria-hidden="true"
      />

      {/* Radial glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.12) 0%, rgba(109,40,217,0.05) 45%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Interactive particle constellation */}
      <ParticleField />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        {/* Status chip */}
        <motion.div variants={item} className="flex justify-center mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/20 bg-violet-500/5 text-neutral-400 text-xs font-mono backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Available for internships &amp; opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-4"
        >
          <span className="gradient-text">{siteConfig.name}</span>
        </motion.h1>

        {/* Typewriter roles */}
        <motion.div
          variants={item}
          className="flex items-center justify-center gap-2 text-lg md:text-2xl font-mono text-violet-300 mb-6 h-8 md:h-9"
        >
          <span className="text-fuchsia-400" aria-hidden="true">
            ›
          </span>
          <Typewriter words={roles} />
        </motion.div>

        {/* One-liner */}
        <motion.p
          variants={item}
          className="text-neutral-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10"
        >
          {siteConfig.oneLiner}
        </motion.p>

        {/* Tech stack marquee */}
        <motion.div
          variants={item}
          className="marquee max-w-2xl mx-auto mb-12"
          aria-label="Tech stack"
        >
          <div className="marquee-track">
            {[...heroStack, ...heroStack].map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="mr-3 px-3.5 py-1.5 rounded-md bg-neutral-900/80 border border-neutral-800 text-neutral-300 text-xs font-mono whitespace-nowrap hover:border-violet-500/40 hover:text-violet-300 transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap"
        >
          {/* Magnetic social buttons */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <Magnetic key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-violet-400 hover:border-violet-500/60 hover:shadow-[0_0_18px_rgba(139,92,246,0.35)] transition-colors duration-200"
                >
                  <Icon size={18} />
                </a>
              </Magnetic>
            ))}
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-8 bg-neutral-800" aria-hidden="true" />

          {/* Download CV */}
          <Magnetic strength={0.2}>
            <a
              href="/resume.pdf"
              download="Dev_Mittal_Resume.pdf"
              className="btn-shine inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-sm font-semibold hover:shadow-[0_0_26px_rgba(139,92,246,0.55)] hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <DownloadIcon />
              Download CV
            </a>
          </Magnetic>

          {/* View My Work */}
          <Magnetic strength={0.2}>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-neutral-700 text-neutral-300 text-sm font-medium hover:border-violet-500/60 hover:text-violet-400 hover:shadow-[0_0_16px_rgba(139,92,246,0.2)] hover:scale-105 active:scale-95 transition-all duration-200"
            >
              View My Work
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </Magnetic>
        </motion.div>

        {/* Scroll arrow */}
        <motion.div
          variants={item}
          className="flex justify-center"
          style={{ marginTop: "5rem" }}
        >
          <button
            onClick={scrollToNext}
            aria-label="Scroll to next section"
            className="flex flex-col items-center gap-1 text-neutral-600 hover:text-violet-400 transition-colors duration-200 group cursor-pointer"
          >
            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
              className="group-hover:drop-shadow-[0_0_6px_rgba(139,92,246,0.7)] transition-all duration-200"
            >
              <ChevronDown />
            </motion.div>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
