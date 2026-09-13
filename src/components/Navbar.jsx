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

  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === 'undefined') return false

    const saved = localStorage.getItem('linga-theme')

    if (saved === 'dark') return true
    if (saved === 'light') return false

    return window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches
  })

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12)
    }

    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle(
      'dark',
      darkMode
    )

    localStorage.setItem(
      'linga-theme',
      darkMode ? 'dark' : 'light'
    )
  }, [darkMode])

  return (
    <header
      className={`
        sticky top-0 z-50
        border-b
        transition-all duration-300
        ${
          darkMode
            ? scrolled
              ? 'bg-[#292526]/95 border-white/10 backdrop-blur-md'
              : 'bg-transparent border-transparent'
            : scrolled
              ? 'bg-[#FAF7F3]/95 border-[#292629]/10 backdrop-blur-md'
              : 'bg-[#FAF7F3]/95 border-transparent'
        }
      `}
    >
      <div
        className="
          mx-auto
          max-w-7xl
          px-5
          md:px-8
          flex
          items-center
          justify-between
          h-16
          md:h-20
        "
      >
        <Link
          to="/"
          className="flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <img
            src={logo}
            alt="Linga Global School"
            className="
              h-9
              md:h-10
              w-auto
              object-contain
            "
          />
        </Link>

        <nav
          className="
            hidden
            lg:flex
            items-center
            gap-6
            xl:gap-7
          "
        >
          {LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`
                text-[13px]
                xl:text-[13.5px]
                transition-colors
                duration-300
                ${
                  darkMode
                    ? 'text-[#FAF7F3]/85 hover:text-[#C6A66B]'
                    : 'text-[#292629]/85 hover:text-[#C98F9A]'
                }
              `}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">

          {/* THEME BUTTON */}

          <button
            type="button"
            onClick={() => setDarkMode((value) => !value)}
            aria-label={
              darkMode
                ? 'Switch to light mode'
                : 'Switch to dark mode'
            }
            title={
              darkMode
                ? 'Light mode'
                : 'Dark mode'
            }
            className={`
              h-10
              w-10
              rounded-full
              flex
              items-center
              justify-center
              border
              transition-all
              duration-300
              ${
                darkMode
                  ? `
                    border-white/10
                    bg-white/5
                    text-[#FAF7F3]
                    hover:bg-white/10
                  `
                  : `
                    border-[#292629]/10
                    bg-white/60
                    text-[#292629]
                    hover:bg-white
                  `
              }
            `}
          >
            {darkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="w-5 h-5"
              >
                <circle cx="12" cy="12" r="4" />

                <path d="M12 2v2" />
                <path d="M12 20v2" />

                <path d="m4.93 4.93 1.41 1.41" />
                <path d="m17.66 17.66 1.41 1.41" />

                <path d="M2 12h2" />
                <path d="M20 12h2" />

                <path d="m6.34 17.66-1.41 1.41" />
                <path d="m19.07 4.93-1.41-1.41" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="w-5 h-5"
              >
                <path d="M21 12.79 A9 9 0 1 1 11.21 3 A7 7 0 0 0 21 12.79Z" />
              </svg>
            )}
          </button>


          {/* MOBILE MENU */}

          <button
            type="button"
            className={`
              lg:hidden
              p-2
              rounded-lg
              transition-colors
              ${
                darkMode
                  ? 'text-[#FAF7F3] hover:bg-white/5'
                  : 'text-[#292629] hover:bg-black/5'
              }
            `}
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className="block w-6 h-[2px] bg-current mb-1.5" />
            <span className="block w-6 h-[2px] bg-current mb-1.5" />
            <span className="block w-4 h-[2px] bg-current" />
          </button>

        </div>
      </div>


      {/* MOBILE NAV */}

      {open && (
        <nav
          className={`
            lg:hidden
            px-5
            pb-5
            pt-2
            flex
            flex-col
            gap-1
            border-t
            ${
              darkMode
                ? 'bg-[#292526] border-white/10'
                : 'bg-[#F1E9E3] border-[#292629]/10'
            }
          `}
        >
          {LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`
                py-3
                text-sm
                border-b
                transition-colors
                ${
                  darkMode
                    ? `
                      text-[#FAF7F3]/85
                      border-white/10
                      hover:text-[#C6A66B]
                    `
                    : `
                      text-[#292629]/85
                      border-[#292629]/10
                      hover:text-[#C98F9A]
                    `
                }
              `}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}