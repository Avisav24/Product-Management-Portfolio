const STRENGTHS = [
  {
    title: "Product Strategy & Prioritization",
    description: "Frameworks like JTBD, RICE, and ICE to make evidence-based decisions about what to build next.",
  },
  {
    title: "User Research & Evidence-Based Decisions",
    description: "Conducting interviews, analyzing behavioral data, and validating assumptions before committing to roadmaps.",
  },
  {
    title: "Frontend Execution & UX Intuition",
    description: "Technical background in React and TypeScript informs realistic product scoping and execution understanding.",
  },
  {
    title: "Marketplace Dynamics & Unit Economics",
    description: "Hands-on experience building two-sided marketplace with pricing strategy and take-rate optimization.",
  },
  {
    title: "Early-Stage Product Building",
    description: "Comfortable with ambiguity, 0→1 execution, and manual concierge validation before building at scale.",
  },
  {
    title: "Cross-Functional Collaboration",
    description: "Experience working with design, engineering, and business stakeholders to ship cohesive products.",
  },
];

export function CrossFunctional() {
  return (
    <div>
      
      {/* Section Header */}
      <div className="mb-16">
        <span className="section-label block mb-3">
          Core Strengths
        </span>
        <h2 className="headline-primary text-4xl sm:text-5xl mb-4">
          Cross-Functional Capabilities
        </h2>
        <p className="body-text-muted max-w-2xl">
          A product manager at the intersection of strategy, research, design, and technical execution.
        </p>
      </div>

      {/* Strengths Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {STRENGTHS.map((strength, idx) => (
          <div 
            key={idx} 
            className="editorial-card p-8 flex flex-col"
          >
            <h3 className="headline-secondary text-lg mb-3">
              {strength.title}
            </h3>
            <p className="body-text-muted text-sm leading-relaxed">
              {strength.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
