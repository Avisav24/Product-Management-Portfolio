import Link from "next/link";
import Image from "next/image";
import logoSnabbit from "@/assets/logos/1.svg";
import logoPronto from "@/assets/logos/2.svg";
import logoOla from "@/assets/logos/3.svg";
import logoGradely from "@/assets/logos/4.svg";

const CASE_STUDIES = [
  {
    slug: "gradely",
    name: "Gradely",
    title: "Student Marketplace MVP",
    logo: logoGradely,
    desc: "Built a two-sided student service marketplace from manual WhatsApp concierge to an automated platform processing ₹26K+ in bootstrapped revenue.",
    isDark: false,
  },
  {
    slug: "pronto",
    name: "Pronto",
    title: "Activation Strategy",
    logo: logoPronto,
    desc: "Analyzed supply-side friction to propose a redesigned onboarding flow that accelerates how fast new applicants complete their first booking.",
    isDark: true, // alternates to dark mockup style
  },
  {
    slug: "snabbit",
    name: "Snabbit",
    title: "Retention Engine",
    logo: logoSnabbit,
    desc: "Explored mechanisms to shift one-off transactional bookings into predictable 90-day retention habits through subscription models and trust loops.",
    isDark: false,
  },
  {
    slug: "ola",
    name: "Ola",
    title: "Enterprise Scale",
    logo: logoOla,
    desc: "Evaluated enterprise product strategy to capture high-frequency urban commuters through subscription passes and priority dispatch mechanics.",
    isDark: true, // alternates to dark mockup style
  },
];

export function CaseStudies() {
  return (
    <div className="w-full">
      
      {/* Section Header */}
      <div className="mb-12">
        <h2 className="type-display-lg mb-4">
          Product Case Studies
        </h2>
        <p className="type-body-md max-w-2xl text-[var(--muted)]">
          A selection of product work focused on activation, retention, marketplace dynamics, and strategic decision-making.
        </p>
      </div>

      {/* Alternating Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {CASE_STUDIES.map((study) => (
          <div 
            key={study.slug} 
            className={`flex flex-col min-h-[320px] ${study.isDark ? 'mockup-card-dark' : 'feature-card'}`}
          >
            
            {/* Header / Logo */}
            <div className="mb-8 h-12">
              <Image
                src={study.logo}
                alt={study.name}
                className="h-10 w-auto object-contain"
              />
            </div>
            
            <div className="flex-1">
              <h3 className={`type-title-md mb-2 ${study.isDark ? '!text-[#faf9f5]' : ''}`}>
                {study.title}
              </h3>
              <p className={`type-body-md ${study.isDark ? '!text-[#a09d96]' : 'text-[var(--muted)]'} mb-8`}>
                {study.desc}
              </p>
            </div>
            
            <Link
              href={`/case-studies/${study.slug}`}
              className={study.isDark ? 'btn-secondary-dark self-start' : 'btn-secondary self-start'}
            >
              Read full teardown
            </Link>
            
          </div>
        ))}
      </div>
    </div>
  );
}
