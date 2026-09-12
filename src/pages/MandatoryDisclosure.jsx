import { motion } from 'framer-motion'

const DISCLOSURE_DATA = [
  ['NAME OF THE SCHOOL', 'LINGA GLOBAL SCHOOL'],
  ['AFFILIATION NO.', '1930701'],
  ['SCHOOL CODE', '55610'],
  ['COMPLETE ADDRESS', 'Krishnankoil, Virudhunagar District, Tamil Nadu'],
  ['PRINCIPAL', 'Ms. Alka Sharma'],
  ['PRINCIPAL CONTACT', '+91 73 73 72 72 90'],
  ['SCHOOL EMAIL', 'info@lingaschool.org'],
  ['BOARD', 'CBSE'],
  ['YEAR OF ESTABLISHMENT', '2015'],
  ['LAST THREE-YEAR RESULT OF THE BOARD EXAMINATION AS PER APPLICABILITY', '100%'],
]

export default function MandatoryDisclosure() {
  return (
    <main className="min-h-screen bg-[#f4f1ea] text-[#151412]">

      {/* Hero / Heading */}
      <section className="relative overflow-hidden bg-[#090908] px-5 pb-16 pt-28 text-[#f4f1ea] md:px-8 md:pb-24 md:pt-36">
        <div className="mx-auto max-w-7xl">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="text-xs uppercase tracking-[0.2em] text-[#d6a447]/70">
                Official Information
              </span>

              <span className="h-[2px] w-10 rounded-full bg-[#d6a447]" />
            </div>

            <h1 className="max-w-4xl font-display text-4xl leading-tight sm:text-5xl md:text-6xl">
              Mandatory
              <span className="text-[#d6a447]"> Disclosure</span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-[#f4f1ea]/65 md:text-base">
              Mandatory disclosure details of Linga Global School.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Disclosure Table */}
      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-2xl border border-[#151412]/10 bg-white shadow-[0_20px_60px_rgba(9,9,8,0.06)]"
          >

            {/* Table Header */}
            <div className="grid grid-cols-1 border-b border-[#151412]/10 bg-[#151412] text-[#f4f1ea] md:grid-cols-[42%_58%]">
              <div className="px-5 py-4 text-xs font-medium uppercase tracking-[0.14em] md:px-7">
                Particulars
              </div>

              <div className="hidden px-5 py-4 text-xs font-medium uppercase tracking-[0.14em] md:block md:px-7">
                Details
              </div>
            </div>

            {/* Rows */}
            {DISCLOSURE_DATA.map(([label, value], index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.03,
                }}
                className={`grid grid-cols-1 md:grid-cols-[42%_58%] ${
                  index !== DISCLOSURE_DATA.length - 1
                    ? 'border-b border-[#151412]/10'
                    : ''
                }`}
              >

                {/* Label */}
                <div className="bg-[#f8f6f0] px-5 py-5 md:px-7 md:py-6">
                  <span className="text-[11px] font-medium uppercase leading-relaxed tracking-[0.08em] text-[#151412]/55 md:text-xs">
                    {label}
                  </span>
                </div>

                {/* Value */}
                <div className="px-5 py-5 md:px-7 md:py-6">
                  {label.includes('LAST THREE-YEAR RESULT') ? (
                    <span className="text-xl font-semibold text-[#a87928] md:text-2xl">
                      100%
                    </span>
                  ) : (
                    <span className="text-sm leading-relaxed text-[#151412]/80 md:text-base">
                      {value}
                    </span>
                  )}
                </div>

              </motion.div>
            ))}

          </motion.div>

          {/* Bottom note */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-8 border-l-2 border-[#a87928] pl-5"
          >
            <p className="text-sm leading-relaxed text-[#151412]/60">
              The information above is provided as part of the school's
              mandatory disclosure requirements.
            </p>
          </motion.div>

        </div>
      </section>

    </main>
  )
}