import { Mail, Linkedin, Github, FileText } from "lucide-react";

export function Contact() {
  return (
    <div className="text-center max-w-3xl mx-auto">
      
      {/* Section Header */}
      <span className="section-label block mb-4">
        Let&apos;s Connect
      </span>
      
      {/* Headline */}
      <h2 className="headline-primary text-4xl sm:text-5xl lg:text-6xl mb-6">
        Let&apos;s build something people want.
      </h2>
      
      {/* Supporting Text */}
      <p className="body-text-muted text-lg max-w-2xl mx-auto mb-12">
        Open to product roles where research, clarity, and execution matter. Always happy to discuss product strategy, marketplace dynamics, or early-stage building.
      </p>

      {/* Primary Contact Button */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
        <a
          href="mailto:abhinavvats.dev@gmail.com"
          className="btn-primary flex items-center gap-3 h-14 px-8 text-base"
        >
          <Mail size={20} />
          abhinavvats.dev@gmail.com
        </a>
      </div>

      {/* Social Links */}
      <div className="flex items-center justify-center gap-4">
        <a 
          href="https://www.linkedin.com/in/abhinav-vats25/" 
          target="_blank"
          rel="noopener noreferrer"
          className="h-12 w-12 flex items-center justify-center rounded-none border border-[var(--line)] text-[var(--ink-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--accent-soft)] transition-all"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
        <a 
          href="https://github.com/abhinavvats" 
          target="_blank"
          rel="noopener noreferrer"
          className="h-12 w-12 flex items-center justify-center rounded-none border border-[var(--line)] text-[var(--ink-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--accent-soft)] transition-all"
          aria-label="GitHub"
        >
          <Github size={20} />
        </a>
        <a 
          href="https://drive.google.com/file/d/16LGhgyC4AS7sTafk1rpn-euvIyQE-J74/view?usp=sharing" 
          target="_blank"
          rel="noopener noreferrer"
          className="h-12 w-12 flex items-center justify-center rounded-none border border-[var(--line)] text-[var(--ink-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--accent-soft)] transition-all"
          aria-label="Resume"
        >
          <FileText size={20} />
        </a>
      </div>
    </div>
  );
}
