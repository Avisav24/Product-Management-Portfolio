import Link from "next/link";
import { Hero } from "@/components/home/hero";
import { HowIThink } from "@/components/home/how-i-think";
import { Process } from "@/components/home/process";
import { Experience } from "@/components/home/experience";
import { CrossFunctional } from "@/components/home/cross-functional";
import { Tools } from "@/components/home/tools";
import { CaseStudies } from "@/components/home/case-studies";
import { Contact } from "@/components/home/contact";
import { Footer } from "@/components/home/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      
      {/* Top Nav */}
      <nav className="h-[64px] bg-[var(--canvas)] flex items-center px-6 lg:px-12 sticky top-0 z-50">
        <div className="flex-1 flex items-center gap-2">
          {/* Anthropic/Claude style brand mark */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--ink)" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10L12 0Z" />
          </svg>
          <Link href="/" className="font-bold text-[var(--ink)] text-lg tracking-wide">
            ABHINAV VATS
          </Link>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-[14px] font-medium text-[var(--ink)]">
          <Link href="#work" className="hover:text-[var(--primary)] transition-colors">Work</Link>
          <Link href="#process" className="hover:text-[var(--primary)] transition-colors">Process</Link>
          <Link href="#experience" className="hover:text-[var(--primary)] transition-colors">Experience</Link>
        </div>
        
        <div className="flex-1 flex justify-end items-center gap-4">
          <Link href="#contact" className="btn-primary">
            Contact Me
          </Link>
        </div>
      </nav>

      {/* Main Container */}
      <div className="page-container pb-24">
        
        <section id="hero" className="section-spacing pt-12 md:pt-24">
          <Hero />
        </section>

        <section id="work" className="section-spacing border-t border-[var(--hairline)]">
          <CaseStudies />
        </section>

        <section id="process" className="section-spacing border-t border-[var(--hairline)]">
          <Process />
        </section>
        
        <section id="how-i-think" className="section-spacing border-t border-[var(--hairline)]">
          <HowIThink />
        </section>

        <section id="experience" className="section-spacing border-t border-[var(--hairline)]">
          <Experience />
        </section>

        <section id="cross-functional" className="section-spacing border-t border-[var(--hairline)]">
          <CrossFunctional />
        </section>

        <section id="tools" className="section-spacing border-t border-[var(--hairline)]">
          <Tools />
        </section>

        <section id="contact" className="section-spacing border-t border-[var(--hairline)]">
          <Contact />
        </section>

      </div>
      
      <Footer />
    </main>
  );
}
