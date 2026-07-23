const CAPABILITIES = [
  {
    title: "Frontend Development",
    skills: ["React & Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Responsive Architecture", "Performance Optimization"],
  },
  {
    title: "UI/UX Design",
    skills: ["Interface Systems", "Figma Prototyping", "Interaction Design", "Wireframing", "Design Tokens", "Accessibility (a11y)"],
  },
  {
    title: "Product Strategy",
    skills: ["JTBD Framework", "RICE Prioritization", "User Research", "MVP Scoping", "Unit Economics", "Market Teardowns"],
  },
];

export function Capabilities() {
  return (
    <section id="capabilities">
      <div className="mb-12">
        <span className="text-[11px] font-bold uppercase tracking-widest text-indigo-400 block mb-2">
          What I Bring
        </span>
        <h2 className="heading-display text-3xl sm:text-4xl">
          Capabilities
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {CAPABILITIES.map((cap, idx) => (
          <div key={idx} className="premium-card p-8">
            <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">
              {cap.title}
            </h3>
            <ul className="space-y-4">
              {cap.skills.map((skill, i) => (
                <li key={i} className="flex items-center text-sm text-neutral-400">
                  <span className="mr-3 h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
