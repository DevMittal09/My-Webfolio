import TechTag from "@/components/ui/TechTag";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  );
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="beam-border group h-full">
      <div className="beam-border-inner flex flex-col p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <h3 className="text-lg font-semibold text-neutral-100 group-hover:text-violet-400 transition-colors duration-200">
              {project.title}
            </h3>
            <p className="text-neutral-500 text-sm font-mono mt-0.5">
              {project.subtitle}
            </p>
          </div>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-1.5 text-neutral-500 hover:text-violet-400 hover:scale-110 active:scale-95 transition-all duration-200 text-xs font-mono"
            aria-label={`View ${project.title} on GitHub`}
          >
            <GitHubIcon />
            <ArrowIcon />
          </a>
        </div>

        <p className="text-neutral-400 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        <ul className="space-y-2 mb-5 flex-1">
          {project.bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-neutral-400">
              <span className="text-violet-500 mt-1 flex-shrink-0 text-xs">▸</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-neutral-800">
          {project.tech.map((t) => (
            <TechTag key={t} label={t} />
          ))}
        </div>
      </div>
    </div>
  );
}
