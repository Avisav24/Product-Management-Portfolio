const TOOLS = [
  {
    category: "Product",
    items: ["Notion", "Jira", "Linear", "Miro", "FigJam"],
  },
  {
    category: "Design",
    items: ["Figma", "Adobe XD", "Framer"],
  },
  {
    category: "Analytics",
    items: ["Google Analytics", "Mixpanel", "Amplitude"],
  },
  {
    category: "Research",
    items: ["Dovetail", "Typeform", "Google Sheets"],
  },
  {
    category: "Development",
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "GitHub"],
  },
  {
    category: "Deployment",
    items: ["Vercel", "Firebase", "MongoDB"],
  },
];

export function Tools() {
  return (
    <div>
      
      {/* Section Header */}
      <div className="mb-16">
        <span className="section-label block mb-3">
          Technology
        </span>
        <h2 className="headline-primary text-4xl sm:text-5xl mb-4">
          Working Stack
        </h2>
        <p className="body-text-muted max-w-2xl">
          Tools I use to think, collaborate, and ship products across research, design, analytics, and execution.
        </p>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {TOOLS.map((group) => (
          <div key={group.category}>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--muted)] mb-4">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((tool) => (
                <span 
                  key={tool}
                  className="inline-flex items-center px-3 py-1.5 rounded-md bg-[var(--surface)] border border-[var(--line)] text-xs font-medium text-[var(--ink-secondary)] hover:border-[var(--accent)] hover:bg-[var(--accent-soft)] transition-all"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
