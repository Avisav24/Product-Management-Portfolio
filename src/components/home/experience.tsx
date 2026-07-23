const EXPERIENCES = [
  {
    role: "Co-Founder & Product Owner",
    company: "Gradely",
    date: "2025 – Present",
    description: [
      "Built two-sided student marketplace from manual concierge to automated platform",
      "Defined pricing strategy, unit economics, and growth mechanics",
      "Achieved ₹26K+ revenue, 15% take rate, 100+ active users",
      "Managed end-to-end product lifecycle: research → PRD → launch → iteration",
    ],
  },
  {
    role: "Product Strategy & Case Study Practice",
    company: "Independent",
    date: "2025 – Present",
    description: [
      "Authored PM case studies analyzing activation, retention, and enterprise strategy",
      "Frameworks: JTBD, RICE prioritization, user journey mapping, unit economics",
      "Products studied: Pronto (activation), Snabbit (retention), Ola (LTV)",
    ],
  },
  {
    role: "Frontend / UI-UX Developer",
    company: "Looping Loons",
    date: "Previous",
    description: [
      "Designed and built responsive web applications with React, TypeScript, Tailwind",
      "Collaborated with cross-functional teams on user experience and design systems",
      "Developed frontend thinking that informs product execution today",
    ],
  },
  {
    role: "B.Tech in Computer Science & Engineering",
    company: "SRM Institute of Science and Technology",
    date: "Expected 2027",
    description: [
      "Bridging technical engineering with product design and user-centered thinking",
      "Coursework in algorithms, systems, and full-stack development",
    ],
  },
];

export function Experience() {
  return (
    <div>
      
      {/* Section Header */}
      <div className="mb-16">
        <span className="section-label block mb-3">
          Background
        </span>
        <h2 className="headline-primary text-4xl sm:text-5xl mb-4">
          Experience
        </h2>
      </div>

      {/* Experience Timeline */}
      <div className="space-y-8">
        {EXPERIENCES.map((exp, idx) => (
          <div 
            key={idx} 
            className="editorial-card p-8 lg:p-10 flex flex-col lg:flex-row lg:items-start justify-between gap-6"
          >
            <div className="flex-1">
              <h3 className="headline-secondary text-xl lg:text-2xl mb-2">
                {exp.role}
              </h3>
              <p className="text-[var(--accent)] font-semibold text-sm mb-6">
                {exp.company}
              </p>
              <ul className="space-y-3">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[var(--ink-secondary)] leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="shrink-0 lg:pt-1">
              <span className="inline-flex rounded-lg bg-[var(--soft)] border border-[var(--line)] px-4 py-2 text-xs font-semibold text-[var(--muted)]">
                {exp.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
