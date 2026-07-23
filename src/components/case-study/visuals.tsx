import React from "react";
import type { Journey, RiceItem, Card, Metric } from "@/types/case-study";
import { ChevronRight, AlertCircle, BarChart3, GitBranch, Zap, Search } from "lucide-react";

// ==========================================
// 1. JOURNEY TIMELINE
// ==========================================
export function JourneyTimeline({ items }: { items: Journey[] }) {
  return (
    <div className="relative ml-4 space-y-12 border-l-2 border-[var(--line)] py-4 pl-8">
      {items.map((j, i) => (
        <div key={j.title} className="group relative">
          <div className="absolute -left-[43px] top-1 flex h-7 w-7 items-center justify-center rounded-full border-4 border-[var(--bg)] bg-[var(--brand)] text-[10px] font-bold text-white shadow-sm transition-transform group-hover:scale-125">
            0{i + 1}
          </div>
          
          <div className="card p-6 transition-shadow hover:shadow-xl hover:shadow-[var(--brand)]/5">
            <h3 className="text-xl font-semibold">{j.title}</h3>
            
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-[var(--soft)] p-4">
                <div className="mb-2 flex items-center gap-2">
                  <AlertCircle size={14} className="text-red-500" />
                  <span className="text-xs font-bold uppercase tracking-wider text-red-500">Friction</span>
                </div>
                <p className="text-sm leading-relaxed text-[var(--muted)]">{j.friction}</p>
              </div>
              
              <div className="rounded-2xl bg-[var(--brand-soft)] p-4">
                <div className="mb-2 flex items-center gap-2">
                  <Zap size={14} className="text-[var(--brand)]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--brand)]">Opportunity</span>
                </div>
                <p className="text-sm leading-relaxed text-[var(--ink)]">{j.opportunity}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ==========================================
// 2. ROOT CAUSE TREE (5 Whys / OST)
// ==========================================
export function RootCauseTree({ data }: { data: { problem: string; whys: string[]; ost: Card[] } }) {
  return (
    <div className="space-y-16">
      {/* 5 Whys Fishbone/Tree */}
      <div className="rounded-[32px] bg-[var(--ink)] p-8 text-[var(--surface)] shadow-2xl lg:p-12">
        <div className="mb-8 flex items-center gap-3">
          <GitBranch className="text-[var(--brand)]" />
          <h3 className="text-xl font-semibold">5 Whys Diagnostic</h3>
        </div>
        
        <div className="mb-8 rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-neutral-500">Symptom</p>
          <p className="text-2xl font-semibold">{data.problem}</p>
        </div>

        <div className="space-y-4 border-l-2 border-neutral-800 pl-6">
          {data.whys.map((why, i) => (
            <div key={i} className="group relative flex items-start gap-6">
              <div className="absolute -left-[33px] top-2 flex h-4 w-4 items-center justify-center rounded-full border-2 border-[var(--ink)] bg-[var(--brand)] transition-transform group-hover:scale-150" />
              <div className="flex-1 rounded-xl border border-neutral-800 bg-neutral-900 p-4 transition-colors group-hover:border-[var(--brand)]/50">
                <span className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-[var(--brand)]">Why {i + 1}?</span>
                <p className="text-sm leading-relaxed text-neutral-300">{why}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 3. ANALYTICS DASHBOARD
// ==========================================
export function AnalyticsDashboard({ metrics }: { metrics: Metric[] }) {
  const trend = [30, 45, 40, 60, 55, 75, 70, 90, 85, 100];
  
  return (
    <div className="overflow-hidden rounded-[32px] border border-[var(--line)] bg-[var(--surface)] shadow-sm">
      <div className="flex items-center justify-between border-b border-[var(--line)] bg-[var(--soft)] px-6 py-4">
        <div className="flex items-center gap-2">
          <BarChart3 size={16} className="text-[var(--brand)]" />
          <span className="text-sm font-semibold">Performance Metrics</span>
        </div>
        <div className="flex gap-1">
          <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
        </div>
      </div>
      
      <div className="grid gap-8 p-8 lg:grid-cols-2">
        <div className="space-y-4">
          {metrics.map((m, i) => (
            <div key={i} className="group rounded-2xl border border-[var(--line)] p-5 transition-colors hover:border-[var(--brand)]">
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--muted)]">{m.label}</p>
              <div className="mt-2 flex items-end justify-between">
                <p className="text-3xl font-semibold tracking-tight">{m.value}</p>
                {m.note && <p className="rounded-full bg-[var(--brand-soft)] px-2 py-1 text-xs font-medium text-[var(--brand)]">{m.note}</p>}
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex min-h-[240px] h-full flex-col justify-end rounded-2xl bg-[var(--soft)] p-6">
          <div className="flex h-32 w-full items-end justify-between gap-2">
            {trend.map((h, i) => (
              <div 
                key={i} 
                className="w-full rounded-t-sm bg-[var(--brand)] transition-all duration-700 hover:opacity-80"
                style={{ height: `${h}%`, opacity: 0.3 + (i * 0.07) }}
              />
            ))}
          </div>
          <div className="mt-4 flex justify-between border-t border-[var(--line)] pt-4 text-[10px] font-bold uppercase text-[var(--muted)]">
            <span>Launch</span>
            <span>Target Reached</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 4. RICE BUBBLE CHART
// ==========================================
export function RiceBubbleChart({ items }: { items: RiceItem[] }) {
  const sorted = [...items].sort((a, b) => b.score - a.score);
  
  return (
    <div className="relative h-[480px] w-full overflow-hidden rounded-[32px] border border-[var(--line)] bg-[var(--surface)] shadow-sm">
      <div className="absolute inset-x-8 top-1/2 border-t border-dashed border-[var(--line)]" />
      <div className="absolute inset-y-8 left-1/2 border-l border-dashed border-[var(--line)]" />
      
      <span className="absolute left-1/2 top-4 -translate-x-1/2 bg-[var(--surface)] px-2 text-[10px] font-bold uppercase tracking-widest text-[var(--muted)]">High Impact</span>
      <span className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[var(--surface)] px-2 text-[10px] font-bold uppercase tracking-widest text-[var(--muted)]">Low Impact</span>
      <span className="absolute left-4 top-1/2 -translate-y-1/2 -rotate-90 bg-[var(--surface)] px-2 text-[10px] font-bold uppercase tracking-widest text-[var(--muted)]">Low Effort</span>
      <span className="absolute right-4 top-1/2 -translate-y-1/2 -rotate-90 bg-[var(--surface)] px-2 text-[10px] font-bold uppercase tracking-widest text-[var(--muted)]">High Effort</span>

      {sorted.map((r, i) => {
        const left = 15 + ((i * 27) % 70);
        const top = 15 + ((i * 33) % 70);
        const size = Math.max(80, Math.min(140, r.score / 1.5 + 40));
        
        return (
          <div 
            key={r.title}
            className={`absolute flex cursor-pointer flex-col items-center justify-center rounded-full border-2 text-center shadow-lg transition-all duration-300 hover:z-10 hover:scale-110 ${
              r.selected 
                ? "border-[var(--brand)] bg-[var(--brand)] text-white" 
                : "border-[var(--line)] bg-[var(--surface)] text-[var(--ink)] hover:border-[var(--brand)]"
            }`}
            style={{ 
              width: size, 
              height: size, 
              left: `${left}%`, 
              top: `${top}%`,
              transform: 'translate(-50%, -50%)'
            }}
            title={`Reach: ${r.reach} | Impact: ${r.impact} | Confidence: ${r.confidence}% | Effort: ${r.effort}`}
          >
            <span className="line-clamp-2 px-2 text-[11px] font-semibold leading-tight">{r.title}</span>
            <span className={`mt-1 text-[10px] font-bold ${r.selected ? "text-white/80" : "text-[var(--brand)]"}`}>
              {r.score}
            </span>
          </div>
        );
      })}
    </div>
  );
}

// ==========================================
// 5. ROADMAP TIMELINE
// ==========================================
export function RoadmapTimeline({ items }: { items: Card[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((r, i) => (
        <div key={r.title} className="group relative rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 transition-all hover:border-[var(--brand)] hover:shadow-lg">
          <div className="mb-4 flex items-center justify-between">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--brand-soft)] text-[10px] font-bold text-[var(--brand)]">
              Q{i + 1}
            </span>
            <ChevronRight size={14} className="text-[var(--line)] transition-colors group-hover:text-[var(--brand)]" />
          </div>
          <h3 className="text-lg font-semibold tracking-tight">{r.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{r.text}</p>
        </div>
      ))}
    </div>
  );
}

// ==========================================
// 6. FIGMA-QUALITY WIREFRAME UI
// ==========================================
export function WireframeGallery({ items, slug }: { items: Card[]; slug: string }) {
  return (
    <div className="flex snap-x gap-6 overflow-x-auto pb-8 hide-scrollbar">
      {items.map((w, i) => (
        <div key={w.title} className="group relative min-w-[320px] shrink-0 snap-center">
          
          {/* Hardware Frame */}
          <div className="relative overflow-hidden rounded-[48px] border-[12px] border-[#111] bg-white shadow-2xl ring-1 ring-black/5 transition-transform duration-500 hover:-translate-y-2">
            
            {/* Dynamic Island / Notch */}
            <div className="absolute left-1/2 top-0 z-20 h-6 w-1/3 -translate-x-1/2 rounded-b-3xl bg-[#111]" />

            {/* iOS Status Bar */}
            <div className="absolute inset-x-0 top-0 z-10 flex h-12 items-center justify-between px-6 pt-2 text-[10px] font-semibold text-black">
              <span>9:41</span>
              <div className="flex items-center gap-1.5">
                <div className="h-2 w-3 rounded-sm border border-black" />
                <div className="h-2 w-3 rounded-sm border border-black bg-black" />
              </div>
            </div>

            {/* Screen Content (Scrollable Area) */}
            <div className="hide-scrollbar h-[600px] w-full overflow-y-auto bg-neutral-50 pb-20 pt-14">
              
              {/* Top Navigation */}
              <div className="flex items-center justify-between px-5 pb-4">
                <h3 className="text-xl font-bold tracking-tight text-neutral-900">{w.title}</h3>
                <div className="h-8 w-8 overflow-hidden rounded-full bg-neutral-200">
                  <div className="h-full w-full bg-[var(--brand)] opacity-20" />
                </div>
              </div>

              {/* Dynamic Screen Content based on Case Study */}
              <div className="space-y-4 px-5">
                {/* 1. Header/Banner Area */}
                <div className="flex h-32 w-full flex-col justify-end rounded-2xl bg-[var(--brand-soft)] p-4">
                  <p className="text-sm font-bold text-[var(--brand)]">{slug === 'ola' ? 'Searching for rides...' : 'Active Dashboard'}</p>
                </div>

                {/* 2. Interactive Inputs / Filters */}
                <div className="flex items-center gap-2 rounded-xl border border-neutral-100 bg-white p-3 shadow-sm">
                  <Search size={16} className="text-neutral-400" />
                  <div className="h-4 w-1/2 rounded bg-neutral-100" />
                </div>

                {/* 3. Cards / Map / Analytics */}
                <div className="space-y-3">
                  {slug === 'ola' && (
                    <div className="relative h-48 w-full overflow-hidden rounded-2xl bg-neutral-200">
                      {/* Fake Map */}
                      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxwYXRoIGQ9Ik0wIDBoMjB2MjBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgMGwyMCAyME0yMCAwbC0yMCAyMCIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9Ii41Ii8+Cjwvc3ZnPg==')] opacity-20" />
                      <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-black shadow-lg" />
                    </div>
                  )}

                  <div className="rounded-2xl border border-neutral-100 bg-white p-4 shadow-sm">
                    <div className="mb-3 flex items-start justify-between">
                      <div className="h-3 w-1/3 rounded bg-neutral-200" />
                      <div className="h-4 w-12 rounded-full bg-green-100" />
                    </div>
                    <div className="mb-2 h-2 w-full rounded bg-neutral-100" />
                    <div className="h-2 w-2/3 rounded bg-neutral-100" />
                  </div>
                  
                  <div className="rounded-2xl border border-neutral-100 bg-white p-4 shadow-sm">
                    <div className="mb-3 flex items-start justify-between">
                      <div className="h-3 w-1/2 rounded bg-neutral-200" />
                      <div className="h-4 w-12 rounded-full bg-orange-100" />
                    </div>
                    <div className="mb-2 h-2 w-full rounded bg-neutral-100" />
                    <div className="h-2 w-3/4 rounded bg-neutral-100" />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Navigation */}
            <div className="absolute bottom-0 inset-x-0 flex h-20 items-center justify-around border-t border-neutral-100 bg-white/90 px-6 pb-4 backdrop-blur">
              <div className="h-5 w-5 rounded-sm bg-[var(--brand)]" />
              <div className="h-5 w-5 rounded-sm bg-neutral-300" />
              <div className="h-5 w-5 rounded-sm bg-neutral-300" />
              <div className="h-5 w-5 rounded-sm bg-neutral-300" />
            </div>

            {/* iOS Home Indicator */}
            <div className="absolute bottom-2 left-1/2 h-1 w-1/3 -translate-x-1/2 rounded-full bg-neutral-300" />
          </div>

          {/* Description outside the phone */}
          <div className="mt-8 px-4 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--brand)]">0{i + 1}</span>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{w.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
