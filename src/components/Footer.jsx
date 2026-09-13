import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-[#292629]/10 bg-[#FAF7F3] text-[#292629]">
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
              text-[#716A6C]
              md:text-base
            ">
              Empowering Minds, Enriching Lives.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">
              Explore
            </h3>

            <div className="space-y-3 text-sm text-[#716A6C]">
              <Link
                to="/about"
                className="block transition-colors hover:text-[#A87A2E]"
              >
                About
              </Link>

              <Link
                to="/academics"
                className="block transition-colors hover:text-[#A87A2E]"
              >
                Academics
              </Link>

              <Link
                to="/infrastructure"
                className="block transition-colors hover:text-[#A87A2E]"
              >
                Infrastructure
              </Link>

              <Link
                to="/gallery"
                className="block transition-colors hover:text-[#A87A2E]"
              >
                Gallery
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">
              Admissions
            </h3>

            <div className="space-y-3 text-sm text-[#716A6C]">
              <Link
                to="/admissions"
                className="block transition-colors hover:text-[#A87A2E]"
              >
                Admission Details
              </Link>

              <Link
                to="/enquiry"
                className="block transition-colors hover:text-[#A87A2E]"
              >
                Admission Enquiry
              </Link>

              <Link
                to="/transport"
                className="block transition-colors hover:text-[#A87A2E]"
              >
                Transport
              </Link>

              <Link
                to="/contact"
                className="block transition-colors hover:text-[#A87A2E]"
              >
                Contact
              </Link>
              <Link
  to="/privacy-policy"
  className="transition-colors hover:text-[#C6A66B]"
>
  Privacy Policy
</Link>
            </div>
          </div>

        </div>

        <div className="
          mt-10
          border-t border-[#292629]/10
          pt-6
          text-center
          md:mt-12
          md:pt-7
        ">
          <p className="text-xs text-[#716A6C] sm:text-sm">
            © {new Date().getFullYear()} Linga Global School. All rights reserved.
          </p>

          <p className="
            mt-3
            text-xs
            tracking-wide
            text-[#716A6C]
            sm:text-sm
          ">
            Powered by{' '}
            <span className="font-medium text-[#A87A2E]">
              Gen11
            </span>
          </p>
        </div>

      </div>
    </footer>
  )
}