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

    const savedTheme = localStorage.getItem('linga-theme')

    if (savedTheme === 'dark') return true
    if (savedTheme === 'light') return false

    return false
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
    const root = document.documentElement

    if (darkMode) {
      root.classList.add('dark')
      localStorage.setItem('linga-theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('linga-theme', 'light')
    }
  }, [darkMode])

  const toggleTheme = () => {
    setDarkMode((current) => !current)
  }

  return (
    <header
      className={`
        sticky top-0 z-50
        transition-all duration-300
        ${
          scrolled
            ? 'border-b border-black/5 bg-[#FAF7F3]/92 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-[#332C2D]/92'
            : 'bg-transparent'
        }
      `}
    >
      <div
        className="
          mx-auto flex h-16 w-full max-w-7xl
          items-center justify-between
          px-4
          sm:px-5
          md:h-20
          md:px-8
        "
      >

        {/* LOGO */}
        <Link
          to="/"
          className="flex shrink-0 items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <img
            src={logo}
            alt="Linga Global School"
            className="
              h-9 w-auto
              object-contain
              md:h-10
            "
          />
        </Link>


        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
          {LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="
                whitespace-nowrap
                text-[13px]
                font-medium
                text-[#292629]/80
                transition-all duration-300
                hover:text-[#C98F9A]
                dark:text-[#FAF7F3]/85
                dark:hover:text-[#D49AA4]
              "
            >
              {link.label}
            </Link>
          ))}
        </nav>


        {/* RIGHT CONTROLS */}
        <div className="flex items-center gap-2">

          {/* THEME TOGGLE */}
          <button
            type="button"
            onClick={toggleTheme}
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
            className="
              flex h-10 w-10
              items-center justify-center
              rounded-full
              border
              border-[#A89591]/30
              bg-[#F1E9E3]/70
              text-[#292629]
              shadow-sm
              transition-all duration-300
              hover:-translate-y-0.5
              hover:border-[#C98F9A]/60
              hover:bg-[#E8CDD1]
              dark:border-white/15
              dark:bg-white/5
              dark:text-[#FAF7F3]
              dark:hover:border-[#D49AA4]/60
              dark:hover:bg-[#C98F9A]/15
            "
          >
            {darkMode ? (
              /* SUN */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-4.5 w-4.5"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="m4.93 4.93 1.42 1.42" />
                <path d="m17.65 17.65 1.42 1.42" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="m6.35 17.65-1.42 1.42" />
                <path d="m19.07 4.93-1.42 1.42" />
              </svg>
            ) : (
              /* MOON */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-4.5 w-4.5"
              >
                <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.7 6.7 0 0 0 9.8 9.8Z" />
              </svg>
            )}
          </button>


          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            className="
              flex h-10 w-10
              items-center justify-center
              rounded-full
              border
              border-[#A89591]/30
              bg-[#F1E9E3]/70
              text-[#292629]
              transition-all duration-300
              hover:border-[#C98F9A]/60
              hover:bg-[#E8CDD1]
              lg:hidden
              dark:border-white/15
              dark:bg-white/5
              dark:text-[#FAF7F3]
              dark:hover:border-[#D49AA4]/60
              dark:hover:bg-[#C98F9A]/15
            "
            onClick={() => setOpen((current) => !current)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className="relative block h-5 w-6">
              <span
                className={`
                  absolute left-0 top-1
                  block h-[2px] w-6
                  rounded-full
                  bg-current
                  transition-all duration-300
                  ${open ? 'top-2.5 rotate-45' : ''}
                `}
              />

              <span
                className={`
                  absolute left-0 top-2.5
                  block h-[2px] w-6
                  rounded-full
                  bg-current
                  transition-all duration-300
                  ${open ? 'opacity-0' : 'opacity-100'}
                `}
              />

              <span
                className={`
                  absolute left-0 top-4
                  block h-[2px]
                  rounded-full
                  bg-current
                  transition-all duration-300
                  ${
                    open
                      ? 'top-2.5 w-6 -rotate-45'
                      : 'w-4'
                  }
                `}
              />
            </span>
          </button>

        </div>
      </div>


      {/* MOBILE NAVIGATION */}
      <div
        className={`
          overflow-hidden
          transition-all duration-300
          lg:hidden
          ${
            open
              ? 'max-h-[80vh] opacity-100'
              : 'pointer-events-none max-h-0 opacity-0'
          }
        `}
      >
        <nav
          className="
            border-t
            border-black/5
            bg-[#FAF7F3]/97
            px-4
            pb-5
            pt-2
            shadow-lg
            backdrop-blur-xl
            dark:border-white/10
            dark:bg-[#332C2D]/97
          "
        >
          {LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="
                flex min-h-11
                items-center
                justify-between
                border-b
                border-[#A89591]/15
                py-2.5
                text-sm
                font-medium
                text-[#292629]/85
                transition-colors duration-300
                hover:text-[#C98F9A]
                dark:border-white/10
                dark:text-[#FAF7F3]/85
                dark:hover:text-[#D49AA4]
              "
            >
              <span>{link.label}</span>

              <span
                className="
                  text-[#A89591]
                  transition-transform duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}