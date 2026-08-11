import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Code2 } from 'lucide-react'
import Button from './Button.jsx'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
  ]

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
      <nav className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-semibold text-ink">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-ink text-white">
            <Code2 size={16} strokeWidth={2.2} />
          </span>
          <span>
            CodeReview<span className="text-accent">AI</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-subtle transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <Button to="/review" variant="primary">
            Get Started
          </Button>
        </div>

        <button
          className="focus-ring rounded-md p-2 text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-paper md:hidden">
          <div className="container-x flex flex-col gap-1 py-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 text-sm text-subtle hover:bg-mist hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <Button to="/review" variant="primary" className="w-full">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
