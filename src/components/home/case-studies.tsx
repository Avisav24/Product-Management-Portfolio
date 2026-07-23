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
      <div className="space-y-12">
        {CASE_STUDIES.map((study) => (
          <article 
            key={study.slug} 
            className="editorial-card overflow-hidden group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
              
              {/* Logo Side */}
              <div className="lg:col-span-2 flex items-center justify-center bg-[var(--soft)] p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-[var(--line)]">
                <Image
                  src={study.logo}
                  alt={study.name}
                  className="h-20 lg:h-28 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content Side */}
              <div className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center">
                
                {/* Meta */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--accent)] border border-[var(--accent)]/20 bg-[var(--accent-soft)] px-3 py-1 rounded">
                    {study.category}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--muted)]">
                    {study.role}
                  </span>
                </div>
                
                {/* Title */}
                <h3 className="headline-secondary text-2xl lg:text-3xl mb-6">
                  {study.name}
                </h3>
                
                {/* Problem */}
                <div className="mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--muted)] mb-1 block">
                    Problem
                  </span>
                  <p className="text-sm text-[var(--ink-secondary)] leading-relaxed">
                    {study.problem}
                  </p>
                </div>
                
                {/* Approach */}
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--muted)] mb-1 block">
                    Approach
                  </span>
                  <p className="text-sm text-[var(--ink-secondary)] leading-relaxed">
                    {study.approach}
                  </p>
                </div>
                
                {/* Result Badge */}
                <div className="mb-6 p-4 rounded-lg bg-[var(--accent-soft)] border border-[var(--accent)]/10">
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent)] mb-1 block">
                    Outcome
                  </span>
                  <p className="text-sm font-medium text-[var(--ink)]">
                    {study.result}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {study.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="text-[10px] font-medium px-2 py-1 rounded bg-[var(--soft)] text-[var(--muted)] border border-[var(--line)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* CTA Link */}
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] transition-all hover:gap-3 mt-auto"
                >
                  Read case study
                  <ArrowUpRight size={16} className="transition-transform" />
                </Link>
              </div>

            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
