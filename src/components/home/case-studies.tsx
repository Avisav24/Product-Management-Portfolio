import Link from "next/link";
import Image from "next/image";
import logoSnabbit from "@/assets/logos/1.svg";
import logoPronto from "@/assets/logos/2.svg";
import logoOla from "@/assets/logos/3.svg";
import logoGradely from "@/assets/logos/4.svg";
import { ArrowUpRight } from "lucide-react";

const CASE_STUDIES = [
  {
    slug: "gradely",
    name: "Gradely",
    logo: logoGradely,
    category: "Marketplace Building",
    role: "Co-Founder & Product Owner",
    problem: "Students need reliable services, providers need discovery and trust",
    approach: "Built manual concierge MVP, validated pricing, automated platform with quality controls",
    result: "₹26K+ revenue • 15% take rate • <2% refund rate • 100+ active users",
    tags: ["0→1 Product", "Unit Economics", "Two-Sided Marketplace"],
  },
  {
    slug: "pronto",
    name: "Pronto",
    logo: logoPronto,
    category: "Activation Strategy",
    role: "Product Teardown",
    problem: "New supply-side applicants experience friction completing their first booking",
    approach: "Mapped onboarding journey, identified drop-off points, proposed activation loops",
    result: "Supply activation framework • Onboarding redesign proposal",
    tags: ["Supply Activation", "Friction Mapping", "Onboarding"],
  },
  {
    slug: "snabbit",
    name: "Snabbit",
    logo: logoSnabbit,
    category: "Retention Engine",
    role: "Product Teardown",
    problem: "One-off transactional bookings lead to high churn and unpredictable revenue",
    approach: "Designed 90-day retention mechanics through subscriptions and trust-building loops",
    result: "Retention strategy framework • Habit formation mechanics",
    tags: ["Retention", "Subscription Models", "Habit Loops"],
  },
  {
    slug: "ola",
    name: "Ola",
    logo: logoOla,
    category: "Enterprise Strategy",
    role: "Strategic Teardown",
    problem: "Capturing high-frequency urban commuters to maximize customer lifetime value",
    approach: "Analyzed subscription pass economics, priority dispatch, and LTV optimization",
    result: "Enterprise strategy analysis • LTV maximization framework",
    tags: ["Enterprise Product", "LTV Strategy", "Subscription"],
  },
];

export function CaseStudies() {
  return (
    <div>
      
      {/* Section Header */}
      <div className="mb-16">
        <span className="section-label block mb-3">
          Selected Work
        </span>
        <h2 className="headline-primary text-4xl sm:text-5xl mb-4">
          Case Studies
        </h2>
        <p className="body-text-muted max-w-2xl">
          A selection of product work focused on activation, retention, marketplace dynamics, and strategic decision-making.
        </p>
      </div>

      {/* Case Study List */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {CASE_STUDIES.map((study) => (
          <article 
            key={study.slug} 
            className="editorial-card overflow-hidden group flex flex-col"
          >
            {/* Logo */}
            <div className="flex items-center justify-center bg-[var(--soft)] p-8 border-b border-[var(--line)]">
              <Image
                src={study.logo}
                alt={study.name}
                className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
              
              {/* Category Badge */}
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--accent)] border border-[var(--accent)]/20 bg-[var(--accent-soft)] px-3 py-1 rounded mb-4 inline-block self-start">
                {study.category}
              </span>
              
              {/* Company Name */}
              <h3 className="headline-secondary text-xl mb-2">
                {study.name}
              </h3>
              
              {/* Role */}
              <p className="text-xs text-[var(--muted)] mb-6">
                {study.role}
              </p>
              
              {/* CTA Link */}
              <Link
                href={`/case-studies/${study.slug}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] transition-all hover:gap-3 mt-auto"
              >
                View case study
                <ArrowUpRight size={16} className="transition-transform" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
