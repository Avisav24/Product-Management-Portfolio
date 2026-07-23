import { Target, LayoutTemplate, Code2, Zap } from "lucide-react";

const CARDS = [
  {
    icon: <Target className="text-teal-400" size={24} />,
    title: "Product Thinking",
    desc: "Starting with the problem, defining clear hypotheses, and designing solutions grounded in user evidence and business logic.",
  },
  {
    icon: <LayoutTemplate className="text-blue-400" size={24} />,
    title: "UI/UX Systems",
    desc: "Crafting beautiful, accessible, and scalable design systems that feel intuitive and elevate the brand experience.",
  },
  {
    icon: <Code2 className="text-indigo-400" size={24} />,
    title: "Frontend Craftsmanship",
    desc: "Writing clean, performant React and Next.js code with a strong attention to micro-interactions and pixel perfection.",
  },
  {
    icon: <Zap className="text-amber-400" size={24} />,
    title: "Fast Iteration",
    desc: "Shipping thin MVPs quickly, gathering real-world data, and iterating aggressively to find product-market fit.",
  },
];

export function HowIWork() {
  return (
    <section>
      <div className="mb-12">
        <span className="text-[11px] font-bold uppercase tracking-widest text-teal-400 block mb-2">
          Methodology
        </span>
        <h2 className="heading-display text-3xl sm:text-4xl">
          How I Work
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {CARDS.map((card, idx) => (
          <div key={idx} className="premium-card p-8 flex flex-col items-start text-left">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10">
              {card.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
            <p className="text-neutral-400 leading-relaxed text-sm">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
