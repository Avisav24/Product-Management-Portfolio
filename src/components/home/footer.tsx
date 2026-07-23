export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--surface)] px-6 py-12 relative z-10">
      <div className="mx-auto max-w-[1280px] flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        
        <div>
          <p className="text-sm font-bold text-[var(--ink)] tracking-wide mb-1">
            Abhinav Vats
          </p>
          <p className="text-xs text-[var(--muted)]">
            Product Manager
          </p>
        </div>

        <p className="text-xs text-[var(--muted)]">
          © {new Date().getFullYear()} Abhinav Vats. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
