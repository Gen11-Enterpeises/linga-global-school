import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#090908] border-t border-white/10 text-[#f4f1ea]">

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14">

        <div className="grid md:grid-cols-4 gap-10">

          <div className="md:col-span-2">
            <h2
              className="text-2xl font-semibold"
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
              }}
            >
              Linga Global School
            </h2>

            <p className="text-white/50 mt-4 max-w-xl leading-7">
              Empowering Minds, Enriching Lives.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Explore</h3>

            <div className="space-y-3 text-white/55">
              <Link className="block hover:text-[#b8872f] transition" to="/about">
                About
              </Link>

              <Link className="block hover:text-[#b8872f] transition" to="/academics">
                Academics
              </Link>

              <Link className="block hover:text-[#b8872f] transition" to="/infrastructure">
                Infrastructure
              </Link>

              <Link className="block hover:text-[#b8872f] transition" to="/gallery">
                Gallery
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Admissions</h3>

            <div className="space-y-3 text-white/55">
              <Link className="block hover:text-[#b8872f] transition" to="/admissions">
                Admission Details
              </Link>

              <Link className="block hover:text-[#b8872f] transition" to="/enquiry">
                Admission Enquiry
              </Link>

              <Link className="block hover:text-[#b8872f] transition" to="/transport">
                Transport
              </Link>

              <Link className="block hover:text-[#b8872f] transition" to="/contact">
                Contact
              </Link>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 mt-12 pt-7 text-center">

          <p className="text-sm text-white/35">
            © {new Date().getFullYear()} Linga Global School. All rights reserved.
          </p>

          <p className="text-sm text-white/50 mt-4">
            Built with <span className="text-[#b8872f] text-lg">♥</span> by Bhumi
          </p>

        </div>

      </div>

    </footer>
  )
}