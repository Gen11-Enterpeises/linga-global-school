import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const LINKS = [
  { label: 'About', to: '/about' },
  { label: 'Admissions', to: '/admissions' },
  { label: 'Academics', to: '/academics' },
  { label: 'Infrastructure', to: '/infrastructure' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Transport', to: '/transport' },
  { label: 'Achievements', to: '/achievements' },
  { label: 'Mandatory Disclosure', to: '/mandatory-disclosure' },
  { label: 'Enquiry', to: '/enquiry' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'bg-charcoal/95 backdrop-blur-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8 flex items-center justify-between h-16 md:h-20">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <img
            src={logo}
            alt="Linga Global School"
            className="h-9 md:h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-[13.5px] text-bone/85 hover:text-amber transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-bone p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="block w-6 h-[2px] bg-current mb-1.5" />
          <span className="block w-6 h-[2px] bg-current mb-1.5" />
          <span className="block w-4 h-[2px] bg-current" />
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <nav className="lg:hidden bg-charcoal px-5 pb-5 flex flex-col gap-1">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="text-bone/85 hover:text-amber transition-colors py-2.5 border-b border-bone/10 text-sm"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}