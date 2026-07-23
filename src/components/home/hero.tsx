import Link from "next/link";

export function Hero() {
  return (
    <section className="flex flex-col items-start max-w-4xl pt-4 sm:pt-8">
      

      {/* Main Headline */}
      <h1 className="headline-primary text-5xl sm:text-6xl lg:text-7xl max-w-4xl mb-8">
        Building products through user <span className="text-[var(--accent)]">behavior</span> and business priorities.
      </h1>

      {/* Supporting Text */}
      <div className="body-text max-w-2xl mb-4">
        I&apos;m <strong className="font-semibold text-[var(--ink)]">Abhinav Vats</strong>, an aspiring Product Manager with a foundation in frontend development and UI/UX design. I approach product work through structured research, clear prioritization, and a builder&apos;s instinct for what actually ships.
      </div>

      <div className="body-text-muted max-w-2xl mb-10">
        Currently building <strong className="font-medium text-[var(--ink-secondary)]">Gradely</strong>, a student marketplace that&apos;s processed ₹26K+ in revenue. I study how products activate users, retain them, and scale through case studies of real platforms.
      </div>

      {/* Proof Points */}
      <div className="flex flex-wrap gap-6 mb-12 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"></div>
          <span className="text-[var(--muted)]">B.Tech CSE, SRM Institute</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"></div>
          <span className="text-[var(--muted)]">Frontend / UX Background</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"></div>
          <span className="text-[var(--muted)]">Co-Founder @ Gradely</span>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-wrap items-center gap-4">
        <Link
          href="#work"
          className="btn-primary"
        >
          View Selected Work
        </Link>
        <Link
          href="#contact"
          className="btn-secondary"
        >
          Contact Me
        </Link>
      </div>

    </section>
  );
}
