import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const fees = [
  ['PRE KG', '27,000'],
  ['LKG', '27,000'],
  ['UKG', '27,000'],
  ['I', '28,000'],
  ['II', '29,000'],
  ['III', '30,000'],
  ['IV', '32,000'],
  ['V', '34,000'],
  ['VI', '35,000'],
  ['VII', '35,000'],
  ['VIII', '35,000'],
  ['IX', '37,000'],
  ['X', '38,000'],
  ['XI', '50,000'],
  ['XII', '50,000'],
]

const ageEligibility = [
  'Pre-KG: 2 years and above as of 31st March of the academic year',
  'LKG: 3 years and above as of 31st March of the academic year',
  'UKG: 4 years and above as of 31st March of the academic year',
  'Class I: 5 years and 6 months and above as of 31st March of the academic year',
  'For other classes, age will be calculated accordingly. No age relaxation is permitted as per CBSE guidelines.',
]

const documents = [
  'Birth Certificate (Original & Copy)',
  'Medical Certificate from a Registered Medical Practitioner',
  'Previous Academic Reports (for LKG and above)',
  'Transfer Certificate (TC) for students from another school',
  'Aadhaar Card (Father, Mother and student)',
]

function Section({ number, title, children }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <div className="flex items-center gap-4 mb-7">
        <span className="section-number">
          {String(number).padStart(2, '0')}
        </span>

        <div className="gold-line" />

        <h2 className="text-2xl md:text-3xl font-semibold text-[#f4f1ea]">
          {title}
        </h2>
      </div>

      {children}
    </motion.section>
  )
}

export default function Admissions() {
  return (
    <div className="bg-[#090908] text-[#f4f1ea] min-h-screen">

      {/* Header */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,135,47,0.16),transparent_35%)]" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-24 pb-20">
          <p className="school-gold text-sm uppercase tracking-[0.25em] mb-5">
            Linga Global School
          </p>

          <h1
            className="text-5xl md:text-7xl font-semibold leading-tight"
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
            }}
          >
            Admissions
          </h1>

          <p className="max-w-2xl mt-6 text-white/65 text-lg leading-8">
            Explore admission criteria, eligibility, fee structure,
            documentation requirements and the complete admission process.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 md:px-10 py-20">

        {/* MOTTO */}
        <Section number={1} title="Motto">
          <div className="school-glass rounded-3xl p-8 md:p-12">
            <h3
              className="text-3xl md:text-5xl text-[#b8872f] mb-6"
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontWeight: 600,
              }}
            >
              Empowering Minds, Enriching Lives
            </h3>

            <p className="text-white/70 text-lg leading-8 max-w-4xl">
              Education is the key to unlocking potential and driving progress.
              At Linga Global School, we believe that knowledge empowers
              individuals, and with the right guidance, every student can
              achieve excellence. Our commitment is to cultivate wisdom,
              nurture talent, and prepare students for a bright future.
            </p>
          </div>
        </Section>

        {/* FEE STRUCTURE */}
        <Section number={2} title="Fee Structure">
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full min-w-[500px] border-collapse">
              <thead>
                <tr className="bg-[#b8872f] text-[#090908]">
                  <th className="text-left px-6 py-4 font-semibold">S.No</th>
                  <th className="text-left px-6 py-4 font-semibold">Class</th>
                  <th className="text-left px-6 py-4 font-semibold">
                    Tuition Fees (₹)
                  </th>
                </tr>
              </thead>

              <tbody>
                {fees.map(([className, amount], index) => (
                  <tr
                    key={className}
                    className="border-b border-white/10 bg-[#151412] hover:bg-[#1c1a17] transition"
                  >
                    <td className="px-6 py-4 text-white/50">
                      {index + 1}
                    </td>

                    <td className="px-6 py-4 font-medium">
                      {className}
                    </td>

                    <td className="px-6 py-4 text-[#d6a447] font-semibold">
                      ₹ {amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* ADMISSION PROCEDURE */}
        <Section number={3} title="Admission Procedure">

          <div className="grid md:grid-cols-3 gap-5 mb-10">
            <div className="school-glass rounded-2xl p-6">
              <p className="school-gold text-sm mb-2">Eligibility</p>
              <h3 className="text-xl font-semibold mb-3">
                Pre-KG to Class X & XI
              </h3>
              <p className="text-white/60">
                Admissions are available from Pre-KG to Class X and XI.
              </p>
            </div>

            <div className="school-glass rounded-2xl p-6">
              <p className="school-gold text-sm mb-2">Entrance Exam</p>
              <h3 className="text-xl font-semibold mb-3">
                LKG to X & XI
              </h3>
              <p className="text-white/60">
                Mandatory for LKG to Class X & XI. Not required for Pre-KG.
              </p>
            </div>

            <div className="school-glass rounded-2xl p-6">
              <p className="school-gold text-sm mb-2">Curriculum</p>
              <h3 className="text-xl font-semibold mb-3">CBSE</h3>
              <p className="text-white/60">
                Central Board of Secondary Education curriculum.
              </p>
            </div>
          </div>

          <div className="school-glass rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-semibold mb-5">
              Age Eligibility
            </h3>

            <ul className="space-y-4">
              {ageEligibility.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-white/70 leading-7"
                >
                  <span className="text-[#b8872f]">◆</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="school-glass rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-semibold mb-5">
              Entrance Examination
            </h3>

            <ul className="space-y-4 text-white/70 leading-7">
              <li>
                <span className="text-[#b8872f] mr-3">01</span>
                LKG to Class X & XI admission is based on performance in the
                Entrance Examination conducted by the school.
              </li>

              <li>
                <span className="text-[#b8872f] mr-3">02</span>
                The examination evaluates the student's proficiency in core
                subjects.
              </li>
            </ul>
          </div>

          <div className="school-glass rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-semibold mb-5">
              Mandatory Documents
            </h3>

            <ul className="grid md:grid-cols-2 gap-4">
              {documents.map((item) => (
                <li
                  key={item}
                  className="bg-white/[0.03] border border-white/10 rounded-xl p-4 text-white/70"
                >
                  <span className="text-[#b8872f] mr-3">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="school-glass rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-5">
              Students from Other Schools
            </h3>

            <ul className="space-y-4 text-white/70 leading-7">
              <li>
                • We accept students from all recognized Central/State Schools
                upon submission of a valid Transfer Certificate.
              </li>

              <li>
                • For Classes IX & X, only students from CBSE-affiliated
                schools are eligible for admission, subject to an Entrance
                Exam & Aptitude Test.
              </li>
            </ul>
          </div>
        </Section>

        {/* CLASS XI */}
        <Section number={4} title="Admission to Class XI">
          <div className="grid md:grid-cols-2 gap-6">

            <div className="school-glass rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-5 text-[#d6a447]">
                CBSE Students
              </h3>

              <ul className="space-y-4 text-white/70 leading-7">
                <li>
                  • Must have secured a minimum Grade D in five subjects under
                  Scholastic Area ‘A’ as per CBSE assessment guidelines.
                </li>

                <li>
                  • Must have a qualifying certificate from CBSE for Class X
                  Examination.
                </li>

                <li>
                  • Must qualify in the Entrance Examination conducted by the
                  school.
                </li>
              </ul>
            </div>

            <div className="school-glass rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-5 text-[#d6a447]">
                Students from Other Boards
              </h3>

              <p className="text-white/70 leading-7">
                Must have passed Class X from a recognized Board of Secondary
                Education. The certificate must be recognized by CBSE as
                equivalent to the CBSE Secondary School Examination.
              </p>
            </div>

          </div>
        </Section>

        {/* WITHDRAWAL */}
        <Section number={5} title="Withdrawal Procedure">
          <div className="school-glass rounded-2xl p-8 md:p-10">

            <p className="text-white/70 leading-7 mb-8">
              If a student wishes to withdraw from the school, the following
              procedures must be followed.
            </p>

            <h3 className="text-2xl font-semibold mb-6">
              Steps for Withdrawal
            </h3>

            <div className="space-y-7">

              <div>
                <h4 className="text-[#d6a447] font-semibold mb-2">
                  01. Transfer Certificate (TC) Application
                </h4>

                <ul className="text-white/65 space-y-2 ml-5 list-disc">
                  <li>
                    A written application must be submitted to the Principal
                    requesting the Transfer Certificate (TC).
                  </li>
                  <li>
                    The application should be signed by both parents of the
                    student.
                  </li>
                  <li>
                    A minimum of seven working days is required for processing
                    the TC.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-[#d6a447] font-semibold mb-2">
                  02. Fee Clearance
                </h4>

                <p className="text-white/65">
                  All pending school fees and dues must be cleared before the
                  Transfer Certificate is issued.
                </p>
              </div>

              <div>
                <h4 className="text-[#d6a447] font-semibold mb-2">
                  03. Re-Admission Policy
                </h4>

                <ul className="text-white/65 space-y-2 ml-5 list-disc">
                  <li>
                    If a student has been removed from the school roll,
                    re-admission is possible based on seat availability.
                  </li>

                  <li>
                    A re-admission fee of ₹250/- (Rupees Two Hundred and Fifty
                    only) will be applicable.
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </Section>

        {/* CTA */}
        <div className="relative overflow-hidden rounded-3xl border border-[#b8872f]/30 bg-[#151412] p-8 md:p-12 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(184,135,47,0.12),transparent_60%)]" />

          <div className="relative">
            <h2
              className="text-3xl md:text-4xl font-semibold"
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
              }}
            >
              Have an admission enquiry?
            </h2>

            <p className="text-white/60 mt-4 mb-8">
              Connect with the school for admission-related information.
            </p>

            <Link
              to="/enquiry"
              className="inline-flex items-center rounded-full bg-[#b8872f] px-7 py-3 text-[#090908] font-semibold hover:bg-[#d6a447] transition"
            >
              Make an Enquiry →
            </Link>
          </div>
        </div>

      </main>
    </div>
  )
}