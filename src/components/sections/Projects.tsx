import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/lib/data";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 px-6" aria-label="Projects section">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            label="Projects"
            title="What I've built"
            description="Production systems, cloud-native platforms, and real-world engineering projects."
          />
        </AnimatedSection>

        {/* Featured projects grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {featured.map((project, i) => (
            <AnimatedSection key={project.title} delay={0.1 + i * 0.1}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>

        {/* Other projects */}
        {others.length > 0 && (
          <>
            <AnimatedSection delay={0.3}>
              <p className="text-neutral-500 text-sm font-mono uppercase tracking-widest mb-5 mt-4">
                Other Projects
              </p>
            </AnimatedSection>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {others.map((project, i) => (
                <AnimatedSection key={project.title} delay={0.35 + i * 0.08}>
                  <ProjectCard project={project} />
                </AnimatedSection>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
