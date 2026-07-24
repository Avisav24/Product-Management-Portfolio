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
    <div className="w-full bg-[#0a0f18] rounded-[32px] p-8 lg:p-16 border border-white/5 shadow-2xl">
      
      {/* Section Header */}
      <div className="mb-16">
        <span className="text-[#a09d96] text-sm tracking-[0.1em] uppercase font-semibold block mb-3">
          Background
        </span>
        <h2 className="type-display-xl !text-[#faf9f5] mb-4">
          Experience
        </h2>
      </div>

      {/* Experience Timeline */}
      <div className="space-y-6">
        {EXPERIENCES.map((exp, idx) => (
          <div 
            key={idx} 
            className="p-8 lg:p-10 flex flex-col lg:flex-row lg:items-start justify-between gap-6 bg-white/5 rounded-[24px] border border-white/10 hover:bg-white/10 transition-colors"
          >
            <div className="flex-1">
              <h3 className="type-title-md !text-[#faf9f5] mb-2 font-sans">
                {exp.role}
              </h3>
              <p className="text-[var(--primary)] font-semibold text-sm mb-6 font-sans">
                {exp.company}
              </p>
              <ul className="space-y-3">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#a09d96] leading-relaxed font-sans">
                    <span className="mt-2 w-1.5 h-1.5 bg-[var(--primary)] shrink-0 rounded-full"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="shrink-0 lg:pt-1">
              <span className="inline-flex bg-white/5 border border-white/10 px-4 py-2 text-xs font-semibold text-[#a09d96] rounded-md font-sans">
                {exp.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
