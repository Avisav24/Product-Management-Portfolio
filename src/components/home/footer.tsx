import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[var(--surface-dark)] !text-[#a09d96] w-full py-16 px-6 lg:px-12 mt-24">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        
        {/* Brand Column */}
        <div className="flex flex-col gap-6 w-full md:w-1/4">
          <div className="flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#faf9f5" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10L12 0Z" />
            </svg>
            <span className="font-semibold !text-[#faf9f5] text-lg tracking-wide">
              Abhinav Vats
            </span>
          </div>
          <p className="type-body-sm !text-[#a09d96] max-w-xs">
            Aspiring Product Manager bridging frontend development, user experience, and business strategy.
          </p>
        </div>

        {/* Links Grid */}
        <div className="flex gap-16 w-full md:w-3/4 justify-end">
          
          <div className="flex flex-col gap-4">
            <h4 className="type-title-sm !text-[#faf9f5]">Product</h4>
            <Link href="#work" className="type-body-sm hover:!text-[#faf9f5] transition-colors">Case Studies</Link>
            <Link href="#process" className="type-body-sm hover:!text-[#faf9f5] transition-colors">Process</Link>
            <Link href="#tools" className="type-body-sm hover:!text-[#faf9f5] transition-colors">Stack</Link>
          </div>
          
          <div className="flex flex-col gap-4">
            <h4 className="type-title-sm !text-[#faf9f5]">Company</h4>
            <Link href="#experience" className="type-body-sm hover:!text-[#faf9f5] transition-colors">Experience</Link>
            <Link href="#contact" className="type-body-sm hover:!text-[#faf9f5] transition-colors">Contact</Link>
          </div>
          
        </div>
      </div>
      
      {/* Bottom Legal Row */}
      <div className="max-w-[1200px] mx-auto mt-16 pt-8 border-t border-[var(--surface-dark-soft)] flex justify-center">
        <p className="type-body-sm">
          &copy; {new Date().getFullYear()} Abhinav Vats. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
