import { Award, ArrowUpRight } from "lucide-react";

const CERTS = [
  {
    title: "Advanced React Patterns",
    issuer: "Frontend Masters",
    date: "2025",
  },
  {
    title: "Product Strategy Fundamentals",
    issuer: "Reforge",
    date: "2024",
  },
  {
    title: "UI/UX Design Certificate",
    issuer: "Google / Coursera",
    date: "2023",
  },
];

export function Certifications() {
  return (
    <div>
      
      {/* Section Header */}
      <div className="mb-16">
        <span className="section-label block mb-3">
          Continuous Learning
        </span>
        <h2 className="headline-primary text-4xl sm:text-5xl mb-4">
          Certifications
        </h2>
      </div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {CERTS.map((cert, idx) => (
          <div key={idx} className="editorial-card p-8 group cursor-pointer hover:shadow-md transition-all">
            <div className="flex items-center justify-between mb-6">
              <div className="h-12 w-12 bg-[var(--accent-soft)] border border-[var(--accent)]/20 rounded-lg flex items-center justify-center text-[var(--accent)]">
                <Award size={22} />
              </div>
              <ArrowUpRight size={16} className="text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors" />
            </div>
            <h3 className="headline-secondary text-base mb-2">
              {cert.title}
            </h3>
            <p className="text-xs text-[var(--muted)] mb-4">{cert.issuer}</p>
            <span className="text-[10px] uppercase tracking-wider text-[var(--muted)] font-semibold border border-[var(--line)] px-3 py-1 rounded bg-[var(--soft)]">
              {cert.date}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
