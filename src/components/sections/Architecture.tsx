import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { autoJudgeFlow, rbacRoles } from "@/lib/data";

function ArrowRight() {
  return (
    <div className="flex items-center justify-center text-neutral-600 flex-shrink-0" aria-hidden="true">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </div>
  );
}

export default function Architecture() {
  return (
    <section
      id="architecture"
      className="py-24 px-6 bg-[#0d0d0d]"
      aria-label="Systems and Architecture section"
    >
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            label="Systems & Architecture"
            title="How I think in systems"
            description="Visual breakdowns of the architectural decisions behind my key projects."
          />
        </AnimatedSection>

        {/* AutoJudge Architecture */}
        <AnimatedSection delay={0.1}>
          <div className="bg-[#111111] border border-neutral-800 rounded-xl p-6 md:p-8 mb-8">
            <div className="flex items-start justify-between gap-4 mb-2">
              <div>
                <h3 className="text-lg font-semibold text-neutral-100">
                  AutoJudge — Execution Pipeline
                </h3>
                <p className="text-neutral-500 text-sm mt-0.5">
                  From code submission to graded result
                </p>
              </div>
              <span className="px-2.5 py-1 rounded bg-violet-500/10 text-violet-400 text-xs font-mono border border-violet-500/20 flex-shrink-0">
                Cloud-Native
              </span>
            </div>

            {/* Flow diagram */}
            <div className="mt-6 overflow-x-auto">
              <div className="flex items-center gap-2 min-w-max mx-auto justify-center py-4">
                {autoJudgeFlow.map((step, i) => (
                  <div key={step.label} className="flex items-center gap-2">
                    <div
                      className="flex flex-col items-center text-center p-4 rounded-xl border bg-[#0a0a0a] min-w-[120px]"
                      style={{ borderColor: `${step.color}30` }}
                    >
                      <div
                        className="w-2.5 h-2.5 rounded-full mb-2"
                        style={{ backgroundColor: step.color }}
                        aria-hidden="true"
                      />
                      <span
                        className="text-xs font-mono font-semibold leading-tight"
                        style={{ color: step.color }}
                      >
                        {step.label}
                      </span>
                      {step.sublabel && (
                        <span className="text-neutral-600 text-[10px] mt-1 leading-tight">
                          {step.sublabel}
                        </span>
                      )}
                    </div>
                    {i < autoJudgeFlow.length - 1 && <ArrowRight />}
                  </div>
                ))}
              </div>
            </div>

            {/* Key design decisions */}
            <div className="mt-6 grid sm:grid-cols-3 gap-4 border-t border-neutral-800 pt-6">
              {[
                {
                  label: "Isolation",
                  desc: "Each submission runs in its own Docker container — no shared state, no escape vectors.",
                },
                {
                  label: "Scalability",
                  desc: "Kubernetes Jobs enable concurrent submission handling without bottlenecks.",
                },
                {
                  label: "Persistence",
                  desc: "Supabase (PostgreSQL + Auth) handles session state, submission history, and grading records.",
                },
              ].map((d) => (
                <div key={d.label} className="p-4 rounded-lg bg-neutral-900/50">
                  <p className="text-violet-400 text-xs font-mono font-semibold uppercase tracking-wider mb-1.5">
                    {d.label}
                  </p>
                  <p className="text-neutral-500 text-xs leading-relaxed">
                    {d.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Campus Security RBAC */}
        <AnimatedSection delay={0.2}>
          <div className="bg-[#111111] border border-neutral-800 rounded-xl p-6 md:p-8">
            <div className="flex items-start justify-between gap-4 mb-2">
              <div>
                <h3 className="text-lg font-semibold text-neutral-100">
                  Campus Security — RBAC Model
                </h3>
                <p className="text-neutral-500 text-sm mt-0.5">
                  6-role access control with Row-Level Security
                </p>
              </div>
              <span className="px-2.5 py-1 rounded bg-green-500/10 text-green-400 text-xs font-mono border border-green-500/20 flex-shrink-0">
                Production
              </span>
            </div>

            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {rbacRoles.map((role) => (
                <div
                  key={role.role}
                  className="p-4 rounded-xl border bg-[#0a0a0a]"
                  style={{ borderColor: `${role.color}25` }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: role.color }}
                      aria-hidden="true"
                    />
                    <span
                      className="text-xs font-mono font-semibold"
                      style={{ color: role.color }}
                    >
                      {role.role}
                    </span>
                  </div>
                  <ul className="space-y-1.5">
                    {role.permissions.map((p) => (
                      <li
                        key={p}
                        className="text-neutral-500 text-xs flex items-start gap-1.5"
                      >
                        <span className="text-neutral-700 mt-0.5 flex-shrink-0">
                          ·
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t border-neutral-800 pt-5">
              <p className="text-neutral-600 text-xs font-mono">
                Security Model:{" "}
                <span className="text-neutral-400">
                  Supabase Row-Level Security · Server-side auth · PostgreSQL
                  triggers for auto role assignment · Domain-restricted Google
                  OAuth
                </span>
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
