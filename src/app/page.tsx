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
    <main className="min-h-screen relative overflow-hidden">
      
      {/* Light Premium Navigation */}
      <nav className="fixed left-0 right-0 top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[var(--line)]">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 lg:px-20 py-4">
          <Link href="/" className="text-sm font-bold tracking-tight text-[var(--ink)] hover:text-[var(--accent)] transition-colors">
            ABHINAV VATS
          </Link>
          <div className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
            <Link href="#work" className="transition hover:text-[var(--accent)]">Work</Link>
            <Link href="#experience" className="transition hover:text-[var(--accent)]">Experience</Link>
            <Link href="#process" className="transition hover:text-[var(--accent)]">Process</Link>
            <Link href="#contact" className="transition hover:text-[var(--accent)]">Contact</Link>
          </div>
          <Link 
            href="#contact" 
            className="hidden sm:inline-flex items-center justify-center h-10 px-6 rounded-lg bg-[var(--accent)] text-white text-xs font-semibold hover:bg-[var(--accent-hover)] transition-all"
          >
            Get in Touch
          </Link>
        </div>
      </nav>

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-20 pt-32 pb-20">
        
        {/* Hero Section */}
        <section className="section">
          <Hero />
        </section>

        {/* Selected Work / Case Studies */}
        <section id="work" className="section">
          <CaseStudies />
        </section>

        <div className="divider" />

        {/* How I Think - PM Principles */}
        <section className="section">
          <HowIThink />
        </section>

        {/* Product Playbook - Process */}
        <section id="process" className="section">
          <Process />
        </section>

        <div className="divider" />

        {/* Experience Timeline */}
        <section id="experience" className="section">
          <Experience />
        </section>

        {/* Cross-Functional Strengths */}
        <section className="section">
          <CrossFunctional />
        </section>

        <div className="divider" />

        {/* Working Stack - Tools */}
        <section className="section">
          <Tools />
        </section>

        <div className="divider" />

        {/* Contact CTA */}
        <section id="contact" className="section">
          <Contact />
        </section>
      </div>
      
      <Footer />
    </main>
  );
}
