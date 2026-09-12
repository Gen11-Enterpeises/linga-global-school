import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#090908] text-[#f4f1ea]">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 md:px-10 md:py-14">

        <div className="grid gap-9 md:grid-cols-4 md:gap-10">

          <div className="md:col-span-2">
            <h2
              className="text-2xl font-semibold"
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
              }}
            >
              Linga Global School
            </h2>

            <p className="
              mt-4
              max-w-xl
              text-sm leading-7
              text-white/50
              md:text-base
            ">
              Empowering Minds, Enriching Lives.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">
              Explore
            </h3>

            <div className="space-y-3 text-sm text-white/55">
              <Link
                to="/about"
                className="block transition-colors hover:text-[#d6a447]"
              >
                About
              </Link>

              <Link
                to="/academics"
                className="block transition-colors hover:text-[#d6a447]"
              >
                Academics
              </Link>

              <Link
                to="/infrastructure"
                className="block transition-colors hover:text-[#d6a447]"
              >
                Infrastructure
              </Link>

              <Link
                to="/gallery"
                className="block transition-colors hover:text-[#d6a447]"
              >
                Gallery
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">
              Admissions
            </h3>

            <div className="space-y-3 text-sm text-white/55">
              <Link
                to="/admissions"
                className="block transition-colors hover:text-[#d6a447]"
              >
                Admission Details
              </Link>

              <Link
                to="/enquiry"
                className="block transition-colors hover:text-[#d6a447]"
              >
                Admission Enquiry
              </Link>

              <Link
                to="/transport"
                className="block transition-colors hover:text-[#d6a447]"
              >
                Transport
              </Link>

              <Link
                to="/contact"
                className="block transition-colors hover:text-[#d6a447]"
              >
                Contact
              </Link>
            </div>
          </div>

        </div>

        <div className="
          mt-10
          border-t border-white/10
          pt-6
          text-center
          md:mt-12
          md:pt-7
        ">
          <p className="text-xs text-white/35 sm:text-sm">
            © {new Date().getFullYear()} Linga Global School. All rights reserved.
          </p>

          <p className="
            mt-3
            text-xs
            tracking-wide
            text-white/50
            sm:text-sm
          ">
            Powered by{' '}
            <span className="font-medium text-[#d6a447]">
              Gen11
            </span>
          </p>
        </div>

      </div>
    </footer>
  )
}