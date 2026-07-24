"use client";
import Link from "next/link";
import { useEffect, useState, useMemo } from "react";
import { CaseStudy, Card } from "@/types/case-study";

import Image from "next/image";
import logoSnabbit from "@/assets/logos/1.svg";
import logoPronto from "@/assets/logos/2.svg";
import logoOla from "@/assets/logos/3.svg";
import logoGradely from "@/assets/logos/4.svg";

const logos: Record<string, typeof logoGradely> = {
  gradely: logoGradely,
  pronto: logoPronto,
  snabbit: logoSnabbit,
  ola: logoOla
};

/* ============================================
   REUSABLE COMPONENTS
   ============================================ */

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mt-16 sm:mt-20 mb-10 scroll-mt-20">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-neutral-900 border-b border-neutral-200 pb-3">{title}</h2>
      <div className="space-y-6 text-neutral-700 leading-relaxed text-base sm:text-[17px]">
        {children}
      </div>
    </section>
  );
}

function DetailedList({ items }: { items: Card[] }) {
  return (
    <div className="space-y-5">
      {items.map((x, i) => (
        <div key={x.title + i} className="pl-4 border-l-2 border-neutral-200">
          <h4 className="text-base sm:text-lg font-semibold text-neutral-900 mb-1">{x.title}</h4>
          <p className="text-neutral-600 leading-relaxed">{x.text}</p>
          {x.tag && <span className="mt-2 inline-block rounded bg-neutral-100 px-2 py-0.5 text-xs text-neutral-500">{x.tag}</span>}
        </div>
      ))}
    </div>
  );
}

function Header() {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-100">
      <div className="mx-auto max-w-[860px] px-4 sm:px-6 flex h-14 items-center justify-between text-sm">
        <Link href="/" className="font-medium text-neutral-600 hover:text-neutral-900 transition-colors">AV / Product</Link>
        <Link href="/#work" className="text-neutral-500 hover:text-neutral-900 transition-colors">Case studies</Link>
      </div>
    </nav>
  );
}

/* ============================================
   MAIN LAYOUT
   ============================================ */

export function CaseStudyLayout({ study }: { study: CaseStudy }) {
  const ids = useMemo(() => {
    const baseIds = [
      study.summary ? "overview" : null, study.origin ? "origin" : null, study.problem ? "problem" : null, study.research ? "research" : null, 
      study.validation ? "validation" : null, study.interviews ? "interviews" : null, 
      study.journey ? "journey" : null, study.rootCause ? "rootCause" : null, study.opportunities ? "opportunities" : null, 
      study.rice ? "prioritization" : null, study.mvp ? "mvp" : null, study.prd ? "prd" : null, study.analytics ? "analytics" : null, study.experiments ? "experiments" : null, 
      study.gtm ? "gtm" : null, study.roadmap ? "roadmap" : null, study.decisions ? "decisions" : null, 
      study.pricing ? "pricing" : null, study.failures ? "failures" : null, 
      study.founderReflection ? "leadership" : null, study.reflection ? "reflection" : null, study.impact ? "impact" : null
    ].filter(Boolean) as string[];

    const articleIds = (study.articleSections || []).map(s => s.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'));
    
    return [...baseIds, ...articleIds];
  }, [study]);

  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const o = new IntersectionObserver(
      es => es.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-25% 0px -65%" }
    );
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) o.observe(el);
    });
    return () => o.disconnect();
  }, [ids]);

  const logoSrc = logos[study.slug];
  const isResearchHypothesis = study.research?.some(r => r.tag === "Hypothesis" || r.text.includes("Hypothesis")) || false;

  return (
    <div className="bg-[var(--canvas)] min-h-screen type-body selection:bg-neutral-200">
      <Header />
      {/* Reading progress bar */}
      <div className="fixed left-0 top-14 z-50 h-0.5 bg-[var(--primary)] transition-all duration-300" style={{ width: `${(ids.indexOf(active) + 1) / ids.length * 100}%` }} />
      
      {/* Wide Blog Container */}
      <div className="mx-auto max-w-[1024px] px-6 sm:px-12 md:px-24 py-16 md:py-24">
        <div className="bg-[var(--canvas)] text-[var(--ink)]">
        
          {/* HEADER — Logo as inline header, not boxed */}
          <header className="mb-12 sm:mb-16">
            {logoSrc && (
              <div className="mb-6 sm:mb-8">
                <Image src={logoSrc} alt={study.company} className="h-10 sm:h-14 w-auto object-contain" />
              </div>
            )}
            
            <h1 className="type-display-xl mb-4 sm:mb-6">
              {study.title}
            </h1>
            
            <p className="text-lg sm:text-xl text-neutral-600 mb-8 sm:mb-10 leading-relaxed">
              {study.subtitle}
            </p>

            {/* Metadata row */}
            <div className="flex flex-wrap gap-y-3 gap-x-6 sm:gap-x-8 text-sm text-neutral-600 border-t border-b border-neutral-100 py-4">
              <div>
                <span className="font-semibold text-neutral-900 block mb-0.5">Role</span>
                {study.role}
              </div>
              <div>
                <span className="font-semibold text-neutral-900 block mb-0.5">Company</span>
                {study.company}
              </div>
              <div>
                <span className="font-semibold text-neutral-900 block mb-0.5">Reading Time</span>
                {study.readingTime}
              </div>
              <div>
                <span className="font-semibold text-neutral-900 block mb-0.5">Tags</span>
                {study.tags.join(", ")}
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8">
              {study.metrics.map(m => (
                <div key={m.label} className="p-3 sm:p-4 bg-neutral-50 rounded-lg border border-neutral-100">
                  <p className="text-[10px] sm:text-xs text-neutral-500 uppercase tracking-wider font-semibold mb-1">{m.label}</p>
                  <p className="text-lg sm:text-xl font-bold text-neutral-900">{m.value}</p>
                  {m.note && <p className="text-[10px] sm:text-xs text-neutral-500 mt-1">{m.note}</p>}
                </div>
              ))}
            </div>
          </header>

          {/* INLINE TABLE OF CONTENTS */}
          <div className="bg-neutral-50 p-5 sm:p-6 rounded-lg mb-12 sm:mb-16 border border-neutral-100">
            <p className="font-semibold text-neutral-900 mb-4 text-sm sm:text-base">Table of Contents</p>
            <nav className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 text-sm">
              {ids.map(id => (
                <a key={id} href={`#${id}`} className={`text-neutral-500 hover:text-neutral-900 hover:underline capitalize transition-colors ${active === id ? 'text-neutral-900 font-medium' : ''}`}>
                  {id.replace(/([A-Z])/g, ' $1').trim()}
                </a>
              ))}
            </nav>
          </div>

          {/* ARTICLE BODY */}
          <article className="font-serif text-[17px] md:text-[19px] leading-[1.7] text-neutral-800 tracking-[-0.01em] [&_h2]:font-sans [&_h3]:font-sans [&_h4]:font-sans">
            
            {study.summary && (
              <Section id="overview" title="Executive Summary">
                <p className="text-base sm:text-lg text-neutral-700 leading-relaxed mb-6">
                  This section provides a high-level overview of the problem, the discovery process, the solution approach, and the measurable impact of the product decisions made throughout this project.
                </p>
                <DetailedList items={study.summary} />
                {study.model && (
                  <div className="mt-8 sm:mt-10">
                    <h3 className="text-lg sm:text-xl font-semibold mb-4 text-neutral-900">Business Model</h3>
                    <p className="text-neutral-600 mb-4">The revenue engine and value chain for this product follows a clear sequence of steps, each representing a critical handoff point in the marketplace:</p>
                    <ol className="list-decimal pl-5 space-y-2 text-neutral-700">
                      {study.model.map(m => <li key={m}>{m}</li>)}
                    </ol>
                  </div>
                )}
              </Section>
            )}

            {study.origin && (
              <Section id="origin" title="Origin Story">
                <p className="text-neutral-600 mb-6">Every product begins with a personal frustration or an observed pattern. This section traces the journey from initial observation to the decision to build a solution.</p>
                <DetailedList items={study.origin.map(o => ({ title: o.stage, text: o.insight, tag: "" }))} />
              </Section>
            )}

            {study.problem && (
              <Section id="problem" title="The Problem">
                <p className="text-base sm:text-lg mb-6 text-neutral-800 font-medium leading-relaxed">{study.problem}</p>
                
                {study.pains && (
                  <>
                    <h3 className="text-lg sm:text-xl font-semibold mb-4 mt-10 text-neutral-900">Pain Points</h3>
                    <p className="text-neutral-600 mb-4">Through research and direct observation, the following core pain points emerged as the primary blockers to user satisfaction and product-market fit:</p>
                    <DetailedList items={study.pains} />
                  </>
                )}
                
                {study.personas && (
                  <>
                    <h3 className="text-lg sm:text-xl font-semibold mb-4 mt-10 text-neutral-900">User Segments</h3>
                    <p className="text-neutral-600 mb-4">Understanding who the users are and what drives their behavior is essential for prioritizing features and designing the right experience:</p>
                    <DetailedList items={study.personas} />
                  </>
                )}
                
                {study.jtbd && (
                  <>
                    <h3 className="text-lg sm:text-xl font-semibold mb-4 mt-10 text-neutral-900">Jobs to be Done</h3>
                    <p className="text-neutral-600 mb-4">The JTBD framework helps articulate the underlying motivations that drive user behavior beyond surface-level feature requests:</p>
                    <DetailedList items={study.jtbd} />
                  </>
                )}
                
                {study.coreJtbd && (
                  <blockquote className="border-l-4 border-neutral-300 pl-4 sm:pl-6 my-8 italic text-neutral-700 bg-neutral-50 py-4 pr-4 rounded-r-lg text-base sm:text-lg">
                    &ldquo;{study.coreJtbd}&rdquo;
                  </blockquote>
                )}
              </Section>
            )}

            {study.research && (
              <Section id="research" title={isResearchHypothesis ? "Research Plan & Hypotheses" : "Research & Evidence"}>
                <p className="text-neutral-600 mb-6">
                  {isResearchHypothesis 
                    ? "Before building anything, I formulated a set of hypotheses based on qualitative signals and industry patterns. Each hypothesis is designed to be testable and falsifiable:" 
                    : "The research phase focused on gathering direct evidence from users and the market to validate assumptions and uncover latent needs:"}
                </p>
                <DetailedList items={study.research} />
              </Section>
            )}

            {study.validation && (
              <Section id="validation" title="Market Validation">
                <p className="text-neutral-600 mb-6">Validation followed a structured sequence of experiments, each designed to derisk a specific assumption before committing further resources:</p>
                <div className="space-y-4">
                  {study.validation.map(v => (
                    <div key={v.phase} className="pl-4 border-l-2 border-blue-200 bg-blue-50/30 py-3 pr-4 rounded-r-lg">
                      <h4 className="font-semibold text-neutral-900 mb-1">{v.phase}</h4>
                      <p className="text-neutral-700 mb-1">{v.outcome}</p>
                      <span className="inline-block rounded bg-blue-50 px-2 py-0.5 text-xs text-blue-700 border border-blue-100">{v.evidence}</span>
                    </div>
                  ))}
                </div>
              </Section>
            )}

            {study.interviews && (
              <Section id="interviews" title="Customer Interviews">
                <p className="text-neutral-600 mb-6">Direct conversations with users and stakeholders revealed critical insights that shaped the product direction. These are synthesized hypotheses based on expected user sentiments:</p>
                <div className="space-y-6">
                  {study.interviews.map((interview, idx) => (
                    <blockquote key={idx} className="border-l-4 border-neutral-200 pl-4 sm:pl-6 py-2">
                      <p className="italic text-neutral-800 mb-2 leading-relaxed">&ldquo;{interview.quote}&rdquo;</p>
                      <footer className="text-sm text-neutral-500">
                        <strong>{interview.role}</strong> — {interview.insight}
                      </footer>
                    </blockquote>
                  ))}
                </div>
              </Section>
            )}

            {study.journey && (
              <Section id="journey" title="Customer Journey">
                <p className="text-neutral-600 mb-6">Mapping the end-to-end customer journey reveals the friction points where users drop off and the opportunities where the product can deliver the most value:</p>
                <div className="space-y-4">
                  {study.journey.map((j, idx) => (
                    <div key={j.title} className="pl-4 border-l-2 border-neutral-200">
                      <h4 className="font-semibold text-neutral-900 mb-2">
                        <span className="text-neutral-400 mr-2">{String(idx + 1).padStart(2, '0')}.</span>
                        {j.title}
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-2 text-sm">
                        <div className="bg-red-50/50 rounded px-3 py-2 border border-red-100">
                          <span className="font-medium text-red-700">Friction:</span> <span className="text-neutral-700">{j.friction}</span>
                        </div>
                        <div className="bg-green-50/50 rounded px-3 py-2 border border-green-100">
                          <span className="font-medium text-green-700">Opportunity:</span> <span className="text-neutral-700">{j.opportunity}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Section>
            )}

            {study.rootCause && (
              <Section id="rootCause" title="Root Cause Analysis (5 Whys)">
                <p className="text-neutral-600 mb-4">Using the 5 Whys technique to drill past surface-level symptoms and identify the structural root cause:</p>
                <p className="font-semibold mb-4 text-neutral-800 bg-neutral-50 p-4 rounded-lg border border-neutral-100">Symptom: {study.rootCause.problem}</p>
                <div className="space-y-3 pl-4">
                  {study.rootCause.whys.map((why, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <span className="shrink-0 h-6 w-6 rounded-full bg-neutral-100 flex items-center justify-center text-xs font-bold text-neutral-500">{i + 1}</span>
                      <p className="text-neutral-700 pt-0.5">{why}</p>
                    </div>
                  ))}
                </div>
              </Section>
            )}

            {study.opportunities && (
              <Section id="opportunities" title="Opportunity Tree">
                <p className="text-neutral-600 mb-6">From the research and journey mapping, the following opportunities emerged as the highest-leverage areas for product intervention:</p>
                <DetailedList items={study.opportunities} />
                
                {study.competitors && (
                  <>
                    <h3 className="text-lg sm:text-xl font-semibold mb-4 mt-10 text-neutral-900">Competitive Landscape</h3>
                    <p className="text-neutral-600 mb-4">Understanding where competitors fall short helps define the strategic positioning and differentiation for this product:</p>
                    <DetailedList items={study.competitors} />
                  </>
                )}
              </Section>
            )}

            {study.rice && (
              <Section id="prioritization" title="RICE Prioritization">
                <p className="text-neutral-600 mb-6">Features were scored using the RICE framework (Reach × Impact × Confidence ÷ Effort) to ensure resources are allocated to the highest-impact initiatives first:</p>
                <div className="overflow-x-auto -mx-2 px-2">
                  <table className="min-w-full text-left text-sm border-collapse border border-neutral-200 rounded-lg overflow-hidden">
                    <thead>
                      <tr className="border-b border-neutral-200 bg-neutral-50">
                        <th className="p-3 font-semibold text-neutral-900">Initiative</th>
                        <th className="p-3 font-semibold text-neutral-900 text-right">Reach</th>
                        <th className="p-3 font-semibold text-neutral-900 text-right">Impact</th>
                        <th className="p-3 font-semibold text-neutral-900 text-right hidden sm:table-cell">Conf.</th>
                        <th className="p-3 font-semibold text-neutral-900 text-right hidden sm:table-cell">Effort</th>
                        <th className="p-3 font-semibold text-neutral-900 text-right">Score</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-100">
                      {[...study.rice].sort((a, b) => b.score - a.score).map(r => (
                        <tr key={r.title} className={r.selected ? "bg-blue-50/50" : ""}>
                          <td className="p-3 font-medium text-neutral-900">
                            <div className="flex items-center gap-2">
                              {r.selected && <span className="h-2 w-2 rounded-full bg-blue-500 shrink-0" />}
                              {r.title}
                            </div>
                          </td>
                          <td className="p-3 text-neutral-600 text-right">{r.reach}</td>
                          <td className="p-3 text-neutral-600 text-right">{r.impact}</td>
                          <td className="p-3 text-neutral-600 text-right hidden sm:table-cell">{r.confidence}%</td>
                          <td className="p-3 text-neutral-600 text-right hidden sm:table-cell">{r.effort}</td>
                          <td className="p-3 font-bold text-neutral-900 text-right">{r.score}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                {study.features && (
                  <>
                    <h3 className="text-lg sm:text-xl font-semibold mb-4 mt-10 text-neutral-900">Feature Landscape</h3>
                    <p className="text-neutral-600 mb-4">The full list of features considered, tagged by whether they made it into the MVP or were deferred:</p>
                    <DetailedList items={study.features} />
                  </>
                )}
              </Section>
            )}

            {study.mvp && (
              <Section id="mvp" title={`Final MVP: ${study.mvp.title}`}>
                <p className="mb-6 text-neutral-600 leading-relaxed">{study.mvp.subtitle}</p>
                <p className="text-neutral-600 mb-4">The MVP was scoped to validate the core hypothesis with the minimum set of features needed to deliver real value:</p>
                <DetailedList items={study.mvp.features} />
                
                {study.flow && (
                  <>
                    <h3 className="text-lg sm:text-xl font-semibold mb-4 mt-10 text-neutral-900">User Flow</h3>
                    <p className="text-neutral-600 mb-4">The critical path from user entry to value delivery:</p>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-neutral-700 bg-neutral-50 p-4 rounded-lg border border-neutral-100">
                      {study.flow.map((f, i) => (
                        <span key={f} className="flex items-center gap-2">
                          <span className="font-medium bg-white px-3 py-1.5 rounded border border-neutral-200 text-xs sm:text-sm">{f}</span>
                          {i < study.flow!.length - 1 && <span className="text-neutral-400">→</span>}
                        </span>
                      ))}
                    </div>
                  </>
                )}
              </Section>
            )}

            {study.prd && (
              <Section id="prd" title="PRD (Product Requirements)">
                <p className="text-neutral-600 mb-6">The product requirements document defines the scope, constraints, and success criteria for the build phase:</p>
                <div className="space-y-6">
                  {study.prd.map(p => (
                    <div key={p.title}>
                      <h3 className="font-semibold text-neutral-900 mb-2">{p.title}</h3>
                      <ul className="list-disc pl-5 space-y-2 text-neutral-700">
                        {p.content.map(x => <li key={x}>{x}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </Section>
            )}

            {study.decisions && (
              <Section id="decisions" title="Decision Log">
                <p className="text-neutral-600 mb-6">Key product decisions and the reasoning behind each trade-off. Every decision was made with explicit awareness of the alternative paths not taken:</p>
                <div className="space-y-6">
                  {study.decisions.map(d => (
                    <div key={d.decision} className="bg-neutral-50 p-5 sm:p-6 rounded-lg border border-neutral-100">
                      <h3 className="font-semibold text-neutral-900 mb-4 text-base sm:text-lg">{d.decision}</h3>
                      <div className="space-y-3 text-sm sm:text-base">
                        <p><span className="font-medium text-neutral-500">Alternative considered:</span> <span className="text-neutral-700">{d.alternative}</span></p>
                        <p><span className="font-medium text-neutral-500">Trade-off:</span> <span className="text-neutral-700">{d.tradeoff}</span></p>
                        <p><span className="font-semibold text-neutral-900">Outcome:</span> <span className="text-neutral-700">{d.outcome}</span></p>
                      </div>
                    </div>
                  ))}
                </div>
              </Section>
            )}

            {study.pricing && (
              <Section id="pricing" title="Pricing Strategy">
                <p className="text-neutral-600 mb-6">Pricing decisions in a marketplace have an outsized impact on both sides of the market. Each pricing choice was designed to solve a specific structural problem:</p>
                <div className="space-y-6">
                  {study.pricing.map(p => (
                    <div key={p.problem} className="pl-4 border-l-2 border-neutral-200">
                      <p className="text-xs sm:text-sm font-medium text-neutral-500 uppercase tracking-wider mb-1">{p.problem}</p>
                      <h4 className="font-bold text-neutral-900 text-base sm:text-lg">{p.strategy}</h4>
                      <p className="text-neutral-600 mt-1">{p.rationale}</p>
                    </div>
                  ))}
                </div>
              </Section>
            )}

            {study.analytics && (
              <Section id="analytics" title="Analytics & Telemetry">
                <p className="text-neutral-600 mb-6">The metrics framework defines what success looks like and ensures the team is measuring the right leading and lagging indicators:</p>
                <div className="overflow-x-auto -mx-2 px-2">
                  <table className="min-w-full text-left text-sm border-collapse border border-neutral-200 rounded-lg overflow-hidden">
                    <thead>
                      <tr className="border-b border-neutral-200 bg-neutral-50">
                        <th className="p-3 font-semibold text-neutral-900">Metric</th>
                        <th className="p-3 font-semibold text-neutral-900">Target / Status</th>
                        <th className="p-3 font-semibold text-neutral-900 hidden sm:table-cell">Notes</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-100">
                      {study.analytics.map((m, i) => (
                        <tr key={i}>
                          <td className="p-3 font-medium text-neutral-900">{m.label}</td>
                          <td className="p-3 font-bold text-neutral-900">{m.value}</td>
                          <td className="p-3 text-neutral-600 hidden sm:table-cell">{m.note || "-"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Section>
            )}

            {study.experiments && (
              <Section id="experiments" title="Experiments & Validations">
                <p className="text-neutral-600 mb-6">Each experiment was designed to test a specific hypothesis with clear success criteria before committing to a full build:</p>
                <DetailedList items={study.experiments} />
              </Section>
            )}

            {study.gtm && (
              <Section id="gtm" title="Go-To-Market Strategy">
                <p className="text-neutral-600 mb-6">The GTM strategy was phased to match the maturity of the product and the confidence level in the value proposition:</p>
                <div className="space-y-8">
                  {study.gtm.map(phase => (
                    <div key={phase.phase}>
                      <h3 className="font-semibold text-neutral-900 mb-3 text-base sm:text-lg">{phase.phase}</h3>
                      <ul className="list-disc pl-5 space-y-2 text-neutral-700">
                        {phase.actions.map((act, j) => <li key={j}>{act}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </Section>
            )}

            {study.roadmap && (
              <Section id="roadmap" title="Roadmap & Next Steps">
                <p className="text-neutral-600 mb-6">The roadmap is organized in a Now / Next / Later / Future framework to communicate both near-term commitments and long-term vision:</p>
                <DetailedList items={study.roadmap} />
                
                {study.risks && (
                  <>
                    <h3 className="text-lg sm:text-xl font-semibold mb-4 mt-10 text-neutral-900">Risks & Mitigations</h3>
                    <p className="text-neutral-600 mb-4">Every product strategy carries risks. Acknowledging them explicitly and planning mitigations is a sign of product maturity:</p>
                    <DetailedList items={study.risks} />
                  </>
                )}
              </Section>
            )}

            {study.failures && (
              <Section id="failures" title="Failures & Course Corrections">
                <p className="text-neutral-600 mb-6">Not everything worked the first time. These are the key failures, what caused them, and how the product was adjusted in response:</p>
                <div className="space-y-6">
                  {study.failures.map(f => (
                    <div key={f.title} className="border border-red-100 bg-red-50/30 p-5 sm:p-6 rounded-lg">
                      <h3 className="font-bold text-neutral-900 mb-3 text-base sm:text-lg">{f.title}</h3>
                      <div className="space-y-2 text-sm sm:text-base">
                        <p><span className="font-medium text-neutral-500">Root cause:</span> <span className="text-neutral-700">{f.cause}</span></p>
                        <p><span className="font-medium text-neutral-500">Key learning:</span> <span className="text-neutral-700">{f.learning}</span></p>
                        <p><span className="font-semibold text-neutral-900">Fix applied:</span> <span className="text-neutral-700">{f.fix}</span></p>
                      </div>
                    </div>
                  ))}
                </div>
              </Section>
            )}

            {study.founderReflection && (
              <Section id="leadership" title="Leadership & Reflections">
                <p className="text-neutral-600 mb-6">Building a product from scratch requires both product thinking and leadership discipline. These are the key lessons from operating as both builder and decision-maker:</p>
                <div className="space-y-8">
                  {study.founderReflection.map(f => (
                    <div key={f.category}>
                      <h3 className="font-semibold text-neutral-900 mb-3 text-base sm:text-lg">{f.category}</h3>
                      <ul className="list-disc pl-5 space-y-2 text-neutral-700">
                        {f.insights.map((insight, i) => <li key={i} className="leading-relaxed">{insight}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </Section>
            )}

            {study.reflection && (
              <Section id="reflection" title="Final Reflections">
                <p className="text-neutral-600 mb-6">Looking back at the entire project, these are the most important takeaways that will inform how I approach the next product challenge:</p>
                <DetailedList items={study.reflection} />
              </Section>
            )}
            
            {study.articleSections && study.articleSections.map(s => (
              <Section key={s.title} id={s.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')} title={s.title}>
                {s.content.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="text-base sm:text-lg text-neutral-700 leading-relaxed mb-4 font-normal whitespace-pre-wrap">{paragraph}</p>
                ))}
              </Section>
            ))}

            {study.impact && (
              <Section id="impact" title="Business Impact">
                <p className="text-neutral-600 mb-6">The measurable outcomes that demonstrate the value created by this product work:</p>
                <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 bg-neutral-900 text-white p-6 sm:p-8 rounded-xl">
                  {study.impact.map(m => (
                    <div key={m.label}>
                      <p className="text-neutral-400 text-xs uppercase tracking-widest font-semibold mb-2">{m.label}</p>
                      <p className="text-2xl sm:text-3xl font-bold">{m.value}</p>
                      {m.note && <p className="text-sm text-neutral-400 mt-2">{m.note}</p>}
                    </div>
                  ))}
                </div>
              </Section>
            )}

            {/* NEXT STUDY LINK */}
            <div className="mt-16 pt-8 border-t border-neutral-200">
              <Link 
                href={study.next.href || "/case-studies"} 
                className="group block p-5 sm:p-6 rounded-lg bg-neutral-50 hover:bg-neutral-100 transition-colors border border-neutral-100"
              >
                <span className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">Up Next</span>
                <div className="mt-1 flex items-center justify-between">
                  <strong className="text-lg sm:text-xl text-neutral-900 group-hover:text-blue-600 transition-colors">{study.next.label}</strong>
                  <span className="text-neutral-400 group-hover:text-blue-600 transition-colors text-lg">→</span>
                </div>
              </Link>
            </div>

          </article>
        </div>
      </div>
    </div>
  );
}
