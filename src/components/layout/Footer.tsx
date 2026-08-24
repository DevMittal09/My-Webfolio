import { siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative py-8 px-6">
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"
        aria-hidden="true"
      />
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-neutral-500 text-sm font-mono">
          &copy; {new Date().getFullYear()} {siteConfig.name}. Built with
          Next.js & Tailwind CSS.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="/resume.pdf"
            download="Dev_Mittal_Resume.pdf"
            className="text-neutral-500 hover:text-violet-400 text-sm font-mono transition-colors"
          >
            Resume
          </a>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-violet-400 text-sm font-mono transition-colors"
          >
            GitHub
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-violet-400 text-sm font-mono transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-neutral-500 hover:text-violet-400 text-sm font-mono transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
