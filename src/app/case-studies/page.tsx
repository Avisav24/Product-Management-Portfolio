"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Search, SlidersHorizontal } from "lucide-react";
import { gradely, pronto, snabbit, ola } from "@/data/case-studies";
import type { CaseStudy } from "@/types/case-study";

const ALL_STUDIES = [gradely, pronto, snabbit, ola];
const FILTERS = ["All", "Marketplace", "Growth", "Retention", "Co-Founder", "Consumer", "B2B", "Product Strategy", "AI"];

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = ALL_STUDIES.filter((s) => {
    if (activeFilter === "All") return true;
    return s.tags.includes(activeFilter) || (activeFilter === "Co-Founder" && s.role.includes("Co-Founder"));
  });

  return (
    <main className="min-h-screen bg-[var(--bg)] pb-32">
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-6 lg:px-16">
        <Link href="/" className="font-semibold tracking-tight">AV / Product</Link>
        <Link href="/" className="text-sm text-[var(--muted)] hover:text-[var(--ink)]">Return Home</Link>
      </nav>

      <header className="mx-auto max-w-[1440px] px-6 pt-20 lg:px-16 lg:pt-32">
        <h1 className="display text-6xl font-semibold tracking-tight sm:text-7xl lg:text-8xl">Case Studies</h1>
        <p className="mt-8 max-w-2xl text-xl leading-relaxed text-[var(--muted)]">
          A collection of product strategy, marketplace, growth, and co-founder-led product case studies.
        </p>

        {/* Filter Bar */}
        <div className="mt-16 flex flex-wrap items-center gap-4 border-y border-[var(--line)] py-4">
          <div className="flex flex-1 items-center gap-3 overflow-x-auto pb-2 sm:pb-0 hide-scrollbar">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  activeFilter === f
                    ? "bg-[var(--ink)] text-[var(--surface)]"
                    : "bg-[var(--surface)] text-[var(--muted)] border border-[var(--line)] hover:border-[var(--ink)] hover:text-[var(--ink)]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3 border-l border-[var(--line)] pl-4">
            <button className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface)] hover:bg-[var(--soft)]">
              <Search size={16} className="text-[var(--muted)]" />
            </button>
            <button className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface)] hover:bg-[var(--soft)]">
              <SlidersHorizontal size={16} className="text-[var(--muted)]" />
            </button>
          </div>
        </div>
      </header>

      <section className="mx-auto mt-12 grid max-w-[1440px] gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3 lg:px-16">
        {filtered.map((study) => (
          <CaseStudyCard key={study.slug} study={study} />
        ))}
      </section>
    </main>
  );
}

function CaseStudyCard({ study }: { study: CaseStudy }) {
  const isFlagship = study.slug === "gradely";

  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className={`theme-${study.slug} group relative flex flex-col overflow-hidden rounded-[32px] border border-[var(--line)] bg-[var(--surface)] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[var(--brand)]/10 ${
        isFlagship ? "sm:col-span-2 lg:col-span-2" : "col-span-1"
      }`}
    >
      {/* Top Logo Area */}
      <div className="relative flex h-48 w-full items-center justify-center bg-[var(--brand-soft)] transition-colors duration-500 group-hover:bg-[var(--brand)]/10">
        <img
          src={`/assets/logo/${study.slug}.svg`}
          alt={`${study.company} logo`}
          className="h-12 w-auto object-contain drop-shadow-sm transition-transform duration-500 group-hover:scale-110"
        />
        {/* Badges */}
        <div className="absolute left-6 top-6 flex gap-2">
          {isFlagship && (
            <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[var(--brand)] shadow-sm backdrop-blur">
              Flagship
            </span>
          )}
        </div>
        <div className="absolute right-6 top-6">
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-[var(--ink)] shadow-sm backdrop-blur">
            {study.readingTime} read
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-1 flex-col p-8">
        {/* Chips */}
        <div className="mb-6 flex flex-wrap gap-2">
          <span className="rounded-md bg-[var(--soft)] px-2.5 py-1 text-xs font-semibold text-[var(--ink)]">
            {study.company}
          </span>
          {study.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="rounded-md border border-[var(--line)] px-2.5 py-1 text-xs text-[var(--muted)]">
              {tag}
            </span>
          ))}
        </div>

        {/* Text */}
        <h2 className="display text-3xl font-semibold leading-tight tracking-tight text-[var(--ink)] sm:text-4xl">
          {study.title}
        </h2>
        <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
          {study.subtitle}
        </p>

        <div className="mt-auto pt-10">
          <div className="flex items-center justify-between border-t border-[var(--line)] pt-6">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--brand)]">
                {study.metrics[0].label}
              </p>
              <p className="mt-1 text-lg font-semibold tracking-tight text-[var(--ink)]">
                {study.metrics[0].value}
              </p>
            </div>
            
            {/* Animated CTA */}
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--ink)] transition-all duration-300 group-hover:border-[var(--brand)] group-hover:bg-[var(--brand)] group-hover:text-white">
              <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
