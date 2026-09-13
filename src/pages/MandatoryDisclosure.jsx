import { motion } from 'framer-motion'

const PDF = (filename) => `/${encodeURIComponent(filename)}`

/* =========================================================
   DOCUMENTS
========================================================= */

const DOCUMENTS = [
  {
    no: '1',
    title:
      'COPIES OF AFFILIATION/UPGRADATION LETTER AND RECENT EXTENSION OF AFFILIATION, IF ANY',
    file: 'LETTER DETAILS ,OASIS 6.0 CBSE.pdf',
  },
  {
    no: '2',
    title:
      'COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE, AS APPLICABLE*',
    file: '2. TRUST_DEED.pdf',
  },
  {
    no: '3',
    title:
      'COPY OF NO OBJECTION CERTIFICATE (NOC) ISSUED, IF APPLICABLE, BY THE STATE GOVT./UT*',
    file: 'COPY OF NO OBJECTION CERTIFICATE (NOC) ISSUE.pdf',
  },
  {
    no: '4',
    title:
      'COPIES OF RECOGNITION CERTIFICATE UNDER RTE ACT, 2009, AND IT’S RENEWAL IF APPLICABLE*',
    file: 'Recognition.pdf',
  },
  {
    no: '5',
    title:
      'COPY OF VALID BUILDING SAFETY CERTIFICATE AS PER THE NATIONAL BUILDING CODE*',
    file: '5 BUILDING SAFETY CERTIFICATE.pdf',
  },
  {
    no: '6',
    title:
      'COPY OF VALID FIRE SAFETY CERTIFICATE ISSUED BY THE COMPETENT AUTHORITY*',
    file: '6 Fire safety.pdf',
  },
  {
    no: '7',
    title:
      'COPY OF THE SELF CERTIFICATION SUBMITTED BY THE SCHOOL FOR AFFILIATION/UPGRADATION/EXTENSION OF AFFILIATION*',
    file: 'deocertificate.pdf',
  },
  {
    no: '8',
    title:
      'COPIES OF VALID WATER, HEALTH AND SANITATION CERTIFICATES',
    file: '7 sanitary.pdf',
  },
]

/* =========================================================
   ACADEMIC DOCUMENTS
========================================================= */

const ACADEMIC_DOCUMENTS = [
  {
    no: '1',
    title: 'FEE STRUCTURE OF THE SCHOOL*',
    link: '/admissions',
    external: false,
    buttonLabel: 'Go to Admissions',
  },
  {
    no: '2',
    title: 'ANNUAL ACADEMIC CALENDER*',
    file: 'calendar2026.pdf',
  },
  {
    no: '3',
    title: 'LIST OF SCHOOL MANAGEMENT COMMITTEE (SMC)*',
    file: 'SMC.pdf',
  },
  {
    no: '4',
    title: 'LIST OF PARENTS TEACHERS ASSOCIATION (PTA) MEMBERS*',
    file: 'ptamemberdetails.pdf',
  },
]

/* =========================================================
   GENERAL INFORMATION
========================================================= */

const GENERAL_INFORMATION = [
  ['NAME OF THE SCHOOL', 'LINGA GLOBAL SCHOOL'],
  ['AFFILIATION NO. (IF APPLICABLE)', '1930701'],
  ['SCHOOL CODE (IF APPLICABLE)', '55610'],
  [
    'COMPLETE ADDRESS WITH PIN CODE',
    'LINGA GLOBAL SCHOOL, ANANDNAGAR, RENGAPPANAICKERPATTI PANCHAYAT, KUNNUR VILLAGE, SRIVILLIPUTTUR TALUK, VIRUDHUNAGAR - 626126',
  ],
  ['PRINCIPAL NAME', 'Ms. Alka Sharma'],
  ['PRINCIPAL QUALIFICATION', 'M.A., B.Ed., Ph.D.'],
  ['SCHOOL EMAIL ID', 'info@lingaschool.org'],
  ['CONTACT', '+91 73 73 72 72 90'],
]

/* =========================================================
   STAFF DETAILS
========================================================= */

const STAFF_DETAILS = [
  ['PRINCIPAL', 'Ms. ALKA SHARMA'],
  ['TOTAL NO. OF TEACHERS', '52'],
  ['PGT', '14'],
  ['TGT', '12'],
  ['PRT', '18'],
  ['TEACHERS SECTION RATIO', '1:30'],
  ['SPECIAL EDUCATOR', '1'],
  ['COUNSELLOR AND WELLNESS TEACHER', '1'],
]

/* =========================================================
   INFRASTRUCTURE DETAILS
========================================================= */

const INFRASTRUCTURE_DETAILS = [
  ['TOTAL CAMPUS AREA', '11300 sq mtr'],
  ['NO. AND SIZE OF CLASSROOMS', '32 & 1254'],
  [
    'NO. AND SIZE OF LABORATORIES INCLUDING COMPUTER LABS',
    '7 & 1980',
  ],
  ['INTERNET FACILITY', 'YES'],
  ['NO. OF GIRLS TOILETS', '30'],
  ['NO. OF BOYS TOILETS', '30'],
]

/* =========================================================
   PDF BUTTON
========================================================= */

function DocumentButton({
  file,
  label = 'View PDF',
}) {
  return (
    <a
      href={PDF(file)}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#C6A66B] px-5 py-2.5 text-sm font-semibold text-[#292629] transition-all duration-300 hover:bg-[#D9BC85] hover:shadow-[0_8px_25px_rgba(184,135,47,0.25)]"
    >
      {label}
    </a>
  )
}

/* =========================================================
   SECTION TITLE
========================================================= */

function SectionTitle({
  number,
  children,
}) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <span className="font-display text-sm font-semibold text-[#C6A66B]">
        {number}
      </span>

      <div className="h-px w-10 shrink-0 bg-[#C6A66B]" />

      <h2 className="font-display text-2xl font-semibold tracking-tight text-[#292629] md:text-3xl">
        {children}
      </h2>
    </div>
  )
}

/* =========================================================
   INFORMATION TABLE
========================================================= */

function InfoTable({
  rows,
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#292629]/10 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
      {rows.map(
        ([label, value], index) => (
          <div
            key={label}
            className={`grid grid-cols-1 md:grid-cols-[36%_64%] ${
              index !== rows.length - 1
                ? 'border-b border-[#292629]/10'
                : ''
            }`}
          >
            <div className="bg-[#F1E9E3] px-5 py-4 text-xs font-bold uppercase tracking-[0.08em] text-[#716A6C] md:px-6">
              {label}
            </div>

            <div className="break-words px-5 py-4 text-sm leading-6 text-[#292629] md:px-6">
              {value}
            </div>
          </div>
        ),
      )}
    </div>
  )
}

/* =========================================================
   DOCUMENT LIST
========================================================= */

function DocumentList({
  documents,
}) {
  return (
    <div className="space-y-4">
      {documents.map((doc) => (
        <div
          key={doc.no}
          className="group flex flex-col gap-5 rounded-2xl border border-[#292629]/10 bg-white p-5 shadow-[0_10px_35px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C6A66B]/35 hover:shadow-[0_16px_45px_rgba(0,0,0,0.08)] sm:flex-row sm:items-center sm:justify-between md:p-6"
        >
          <div className="flex min-w-0 gap-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#C6A66B]/10 text-sm font-bold text-[#A87A2E]">
              {doc.no}
            </div>

            <p className="text-sm font-medium leading-6 text-[#292629] md:text-[15px]">
              {doc.title}
            </p>
          </div>

          {doc.external === false ? (
            <a
              href={doc.link}
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#C6A66B] px-5 py-2.5 text-sm font-semibold text-[#292629] transition-all duration-300 hover:bg-[#D9BC85] hover:shadow-[0_8px_25px_rgba(184,135,47,0.25)]"
            >
              {doc.buttonLabel || 'View'}
            </a>
          ) : (
            <DocumentButton
              file={doc.file}
            />
          )}
        </div>
      ))}
    </div>
  )
}

/* =========================================================
   MAIN PAGE
========================================================= */

export default function MandatoryDisclosure() {
  return (
    <main className="min-h-screen bg-[#F1E9E3] text-[#292629]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#FAF7F3] px-5 pb-20 pt-32 md:px-8 md:pb-28 md:pt-40">

        {/* Background glow */}
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#C6A66B]/10 blur-3xl" />

        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#C6A66B]/5 blur-3xl" />

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="relative mx-auto max-w-6xl"
        >

          {/* Small heading */}
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[#C6A66B]" />

            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#A87A2E]">
              CBSE • SARAS 6.0
            </span>
          </div>

          {/* Main heading */}
          <h1 className="font-display max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-[#292629] sm:text-5xl md:text-6xl">
            Mandatory
            <span className="text-[#C6A66B]">
              {' '}Disclosure
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-sm leading-7 text-[#716A6C] md:text-base">
            Public disclosure information and supporting
            documents of Linga Global School.
          </p>

          {/* Only SARAS button */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={PDF(
                'MandatoryDisclosureDetailsSARAS6.0.pdf',
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-[#C6A66B] px-6 py-3 text-sm font-semibold text-[#292629] transition-all duration-300 hover:bg-[#D9BC85] hover:shadow-[0_8px_25px_rgba(184,135,47,0.25)]"
            >
              Open SARAS 6.0 PDF
            </a>
          </div>

        </motion.div>
      </section>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">

        {/* ===================================================
            01 GENERAL INFORMATION
        =================================================== */}

        <motion.section
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.5,
          }}
          className="mb-20"
        >
          <SectionTitle number="01">
            General Information
          </SectionTitle>

          <InfoTable
            rows={GENERAL_INFORMATION}
          />
        </motion.section>

        {/* ===================================================
            02 DOCUMENTS
        =================================================== */}

        <motion.section
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.5,
          }}
          className="mb-20"
        >
          <SectionTitle number="02">
            Documents and Certificates
          </SectionTitle>

          <DocumentList
            documents={DOCUMENTS}
          />
        </motion.section>

        {/* ===================================================
            03 ACADEMICS
        =================================================== */}

        <motion.section
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.5,
          }}
          className="mb-20"
        >
          <SectionTitle number="03">
            Academics and School Information
          </SectionTitle>

          <DocumentList
            documents={ACADEMIC_DOCUMENTS}
          />

          {/* =================================================
              RESULT
              ONLY 100%
          ================================================= */}

          <div className="mt-4 overflow-hidden rounded-2xl border border-[#292629]/10 bg-white shadow-[0_10px_35px_rgba(0,0,0,0.05)]">

            <div className="grid grid-cols-1 md:grid-cols-[36%_64%]">

              <div className="bg-[#F1E9E3] px-5 py-5 text-xs font-bold uppercase leading-5 tracking-[0.08em] text-[#716A6C] md:px-6">
                LAST THREE-YEAR RESULT OF THE BOARD EXAMINATION AS PER APPLICABILITY
              </div>

              <div className="flex items-center px-5 py-5 md:px-6">
                <span className="font-display text-2xl font-semibold text-[#C6A66B]">
                  100%
                </span>
              </div>

            </div>

          </div>
        </motion.section>

        {/* ===================================================
            04 STAFF DETAILS
        =================================================== */}

        <motion.section
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.5,
          }}
          className="mb-20"
        >
          <SectionTitle number="04">
            Staff Details
          </SectionTitle>

          <InfoTable
            rows={STAFF_DETAILS}
          />

          <div className="mt-4">
            <DocumentButton
              file="8 staff details.pdf"
              label="View Staff Details PDF"
            />
          </div>
        </motion.section>

        {/* ===================================================
            05 INFRASTRUCTURE
        =================================================== */}

        <motion.section
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.5,
          }}
          className="mb-20"
        >
          <SectionTitle number="05">
            Infrastructure Details
          </SectionTitle>

          <InfoTable
            rows={INFRASTRUCTURE_DETAILS}
          />
        </motion.section>

        {/* ===================================================
            06 INSPECTION
        =================================================== */}

        <motion.section
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          <SectionTitle number="06">
            Inspection
          </SectionTitle>

          <div className="rounded-2xl border border-[#292629]/10 bg-white p-6 shadow-[0_10px_35px_rgba(0,0,0,0.05)] md:p-8">

            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

              <div>
                <h3 className="font-display text-xl font-semibold">
                  School Inspection Video
                </h3>

                <p className="mt-2 text-sm leading-6 text-black/55">
                  Official inspection video published for
                  the school.
                </p>
              </div>

              <a
                href="https://youtu.be/lDKLSbddOR0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#C6A66B] px-6 py-3 text-sm font-semibold text-[#292629] transition-all duration-300 hover:bg-[#D9BC85]"
              >
                Watch Video
              </a>

            </div>

          </div>
        </motion.section>

      </section>
    </main>
  )
}