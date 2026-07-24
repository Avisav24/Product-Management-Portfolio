import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote: "Abhinav has a rare ability to bridge the gap between business strategy and pixel-perfect execution. He doesn't just build what you ask for; he builds what the product actually needs.",
    author: "Product Lead Placeholder",
    role: "Senior PM @ TechCorp",
    initial: "P",
  },
  {
    quote: "Working with Abhinav on frontend architecture was seamless. His understanding of design systems makes translating Figma to React incredibly efficient.",
    author: "Engineering Peer Placeholder",
    role: "Frontend Engineer @ StartupX",
    initial: "E",
  },
];

export function Testimonials() {
  return (
    <section>
      <div className="mb-12 text-center">
        <span className="text-[11px] font-bold uppercase tracking-widest text-blue-400 block mb-2">
          Social Proof
        </span>
        <h2 className="heading-display text-3xl sm:text-4xl">
          What People Say
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {TESTIMONIALS.map((t, idx) => (
          <div key={idx} className="premium-card p-8 relative">
            <Quote className="absolute top-6 right-6 text-white/5" size={48} />
            <p className="text-sm md:text-base text-neutral-300 leading-relaxed italic mb-8 relative z-10">
              &quot;{t.quote}&quot;
            </p>
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-none bg-white/10 flex items-center justify-center text-sm font-bold text-white border border-white/10">
                {t.initial}
              </div>
              <div>
                <p className="text-sm font-bold text-white">{t.author}</p>
                <p className="text-[10px] uppercase tracking-wider text-neutral-500">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
