import Link from "next/link";
import Image from "next/image";
import logoSnabbit from "@/assets/logos/1.svg";
import logoPronto from "@/assets/logos/2.svg";
import logoOla from "@/assets/logos/3.svg";
import logoGradely from "@/assets/logos/4.svg";
import { ArrowRight } from "lucide-react";

const PROJECTS = [
  {
    slug: "gradely",
    name: "Gradely",
    logo: logoGradely,
    category: "Student Marketplace",
    role: "Co-Founder & Product Owner",
    desc: "Built a two-sided student service marketplace from manual WhatsApp concierge to an automated platform processing ₹26K+ in bootstrapped revenue.",
    outcome: "₹26K+ Revenue • 15% Take Rate • <2% Refunds",
  },
  {
    slug: "pronto",
    name: "Pronto",
    logo: logoPronto,
    category: "Activation Strategy",
    role: "Product Teardown",
    desc: "Analyzed supply-side friction to propose a redesigned onboarding flow that accelerates how fast new applicants complete their first booking.",
    outcome: "Friction mapping • Supply activation loops",
  },
  {
    slug: "snabbit",
    name: "Snabbit",
    logo: logoSnabbit,
    category: "Retention Engine",
    role: "Product Teardown",
    desc: "Explored mechanisms to shift one-off transactional bookings into predictable 90-day retention habits through subscription models and trust loops.",
    outcome: "Retention loops • Habit formation strategies",
  },
  {
    slug: "ola",
    name: "Ola",
    logo: logoOla,
    category: "Enterprise Scale",
    role: "Strategic Teardown",
    desc: "Evaluated enterprise product strategy to capture high-frequency urban commuters through subscription passes and priority dispatch mechanics.",
    outcome: "Enterprise strategy • LTV maximization",
  },
];

export function Projects() {
  return (
    <section id="projects">
      <div className="mb-12">
        <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-400 block mb-2">
          Featured Work
        </span>
        <h2 className="heading-display text-3xl sm:text-4xl">
          Projects &amp; Case Studies
        </h2>
      </div>

      <div className="space-y-12">
        {PROJECTS.map((proj, idx) => (
          <div 
            key={proj.slug} 
            className="premium-card overflow-hidden group"
          >
            <div className={`grid grid-cols-1 md:grid-cols-2 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Image / Logo Side */}
              <div className={`flex items-center justify-center bg-white/5 p-12 border-b md:border-b-0 ${idx % 2 !== 0 ? 'md:order-last md:border-l' : 'md:border-r'} border-white/10`}>
                <Image
                  src={proj.logo}
                  alt={proj.name}
                  className="h-16 md:h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content Side */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 border border-emerald-400/20 bg-emerald-400/10 px-2 py-0.5 rounded">
                    {proj.category}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                    {proj.role}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  {proj.name}
                </h3>
                
                <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                  {proj.desc}
                </p>
                
                <div className="mb-8 p-3 rounded-lg bg-white/5 border border-white/5 text-xs text-neutral-300 font-medium">
                  <strong className="text-white">Outcome:</strong> {proj.outcome}
                </div>
                
                <Link
                  href={`/case-studies/${proj.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-white transition-colors hover:text-emerald-400 mt-auto"
                >
                  View Case Study
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
