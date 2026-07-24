const PRINCIPLES = [
  {
    title: "Clarity before velocity",
    description: "Understanding the problem deeply before rushing to solutions. Research and framing create better outcomes than speed alone.",
  },
  {
    title: "Research before assumptions",
    description: "User evidence beats opinions. Every hypothesis needs validation before it becomes a roadmap commitment.",
  },
  {
    title: "Metrics over opinions",
    description: "Product decisions should be anchored in measurable outcomes, not subjective preferences or loudest voices.",
  },
  {
    title: "Trade-offs over feature lists",
    description: "Great PMs say no strategically. Every yes is a no to something else. Prioritization defines success.",
  },
  {
    title: "Validate before scaling",
    description: "Ship thin, learn fast, iterate aggressively. MVPs exist to test assumptions, not to impress.",
  },
  {
    title: "Focus on pain before polish",
    description: "Solve the core user problem first. Polish comes after product-market fit, not before.",
  },
];

export function HowIThink() {
  return (
    <div>
      
      {/* Section Header */}
      <div className="mb-16">
        <span className="section-label block mb-3">
          Product Philosophy
        </span>
        <h2 className="headline-primary text-4xl sm:text-5xl mb-4">
          How I Think
        </h2>
        <p className="body-text-muted max-w-2xl">
          Principles that guide my approach to product decisions, prioritization, and execution.
        </p>
      </div>

      {/* Principles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PRINCIPLES.map((principle, idx) => (
          <div key={idx} className="flex flex-col">
            
            {/* Number Badge */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-none bg-[var(--accent-soft)] border border-[var(--accent)]/20">
                <span className="text-sm font-bold text-[var(--accent)]">
                  {idx + 1}
                </span>
              </div>
              <h3 className="headline-secondary text-lg">
                {principle.title}
              </h3>
            </div>
            
            {/* Description */}
            <p className="body-text-muted text-sm leading-relaxed">
              {principle.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
