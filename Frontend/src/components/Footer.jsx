import { Github, Linkedin, Instagram, Code2 } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="about" className="border-t border-line bg-paper">
      <div className="container-x flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2 font-semibold text-ink">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-ink text-white">
              <Code2 size={14} strokeWidth={2.2} />
            </span>
            CodeReview<span className="text-accent">AI</span>
          </div>

          <p className="mt-2 max-w-xs text-sm text-subtle">
            AI-powered code reviews for better development.
          </p>
        </div>

        <div className="flex items-center gap-4">
          {/* GitHub */}
          <a
            href="https://github.com/preetrajput2020"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="focus-ring flex h-9 w-9 items-center justify-center rounded-lg border border-line text-subtle transition-colors hover:border-ink hover:text-ink"
          >
            <Github size={17} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/preet--rajput"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="focus-ring flex h-9 w-9 items-center justify-center rounded-lg border border-line text-subtle transition-colors hover:border-ink hover:text-ink"
          >
            <Linkedin size={17} />
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/preet_rajputtt/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="focus-ring flex h-9 w-9 items-center justify-center rounded-lg border border-line text-subtle transition-colors hover:border-ink hover:text-ink"
          >
            <Instagram size={17} />
          </a>
        </div>
      </div>

      <div className="border-t border-line py-4">
        <p className="container-x text-xs text-subtle">
          © {new Date().getFullYear()} CodeReview AI. Built as a personal project.
        </p>
      </div>
    </footer>
  )
}