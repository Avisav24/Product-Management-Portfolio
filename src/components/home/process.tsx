const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discovery",
    description: "Understand user pain, market context, and business goals. Define what problem we're actually solving.",
  },
  {
    number: "02",
    title: "Research",
    description: "Conduct user interviews, analyze behavioral data, map journeys. Build evidence for decision-making.",
  },
  {
    number: "03",
    title: "Prioritization",
    description: "Use frameworks like RICE and ICE to rank opportunities by impact vs. effort. Focus on leverage.",
  },
  {
    number: "04",
    title: "Framing",
    description: "Write clear PRDs, define success metrics, align stakeholders. Create shared understanding.",
  },
  {
    number: "05",
    title: "Experimentation",
    description: "Ship MVPs, run A/B tests, gather feedback loops. Learn quickly with minimal investment.",
  },
  {
    number: "06",
    title: "Launch & Iteration",
    description: "Monitor metrics, listen to users, iterate based on evidence. Double down on what works.",
  },
];

export function Process() {
  return (
    <div>
      
      {/* Section Header */}
      <div className="mb-16">
        <span className="section-label block mb-3">
          My Approach
        </span>
        <h2 className="headline-primary text-4xl sm:text-5xl mb-4">
          Product Playbook
        </h2>
        <p className="body-text-muted max-w-2xl">
          A structured workflow for moving from problem discovery to shipped product with measurable impact.
        </p>
      </div>

      {/* Process Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROCESS_STEPS.map((step, idx) => (
          <div key={idx} className="flex flex-col">
            
            {/* Step Number */}
            <div className="text-6xl font-bold text-[var(--accent)]/10 mb-4">
              {step.number}
            </div>
            
            {/* Step Title */}
            <h3 className="headline-secondary text-xl mb-3">
              {step.title}
            </h3>
            
            {/* Step Description */}
            <p className="body-text-muted text-sm leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
