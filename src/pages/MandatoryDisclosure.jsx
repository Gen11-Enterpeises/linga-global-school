import React from 'react'

const GENERAL_INFORMATION = [
  {
    label: 'NAME OF THE SCHOOL',
    value: 'LINGA GLOBAL SCHOOL',
  },
  {
    label: 'AFFILIATION NO. (IF APPLICABLE)',
    value: '1930701',
  },
  {
    label: 'SCHOOL CODE (IF APPLICABLE)',
    value: '55610',
  },
  {
    label: 'COMPLETE ADDRESS WITH PIN CODE',
    value:
      'LINGA GLOBAL SCHOOL, ANANDNAGAR, RENGAPPANAICKERPATTI PANCHAYAT, KUNNUR VILLAGE, SRIVILLIPUTHUR TALUK, VIRUDHUNAGAR - 626126',
  },
  {
    label: 'PRINCIPAL NAME',
    value: 'Ms. Alka Sharma',
  },
  {
    label: 'PRINCIPAL QUALIFICATION',
    value: 'M.A., B.Ed., Ph.D.',
  },
  {
    label: 'SCHOOL EMAIL ID',
    value: 'info@lingaschool.org',
  },
  {
    label: 'CONTACT DETAILS (LANDLINE/MOBILE)',
    value: '+91 73 73 72 72 90',
  },
]

const DOCUMENTS = [
  {
    number: '01',
    label:
      'COPIES OF AFFILIATION/UPGRADATION LETTER AND RECENT EXTENSION OF AFFILIATION, IF ANY',
    file: null,
  },
  {
    number: '02',
    label:
      'COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE, AS APPLICABLE',
    file: '/2. TRUST_DEED.pdf',
  },
  {
    number: '03',
    label:
      'COPY OF NO OBJECTION CERTIFICATE (NOC) ISSUED, IF APPLICABLE, BY THE STATE GOVT./UT',
    file: '/COPY OF NO OBJECTION CERTIFICATE (NOC) ISSUE.pdf',
  },
  {
    number: '04',
    label:
      'COPIES OF RECOGNITION CERTIFICATE UNDER RTE ACT, 2009, AND ITS RENEWAL IF APPLICABLE',
    file: '/Recognition.pdf',
  },
  {
    number: '05',
    label:
      'COPY OF VALID BUILDING SAFETY CERTIFICATE AS PER THE NATIONAL BUILDING CODE',
    file: '/5 BUILDING SAFETY CERTIFICATE.pdf',
  },
  {
    number: '06',
    label:
      'COPY OF VALID FIRE SAFETY CERTIFICATE ISSUED BY THE COMPETENT AUTHORITY',
    file: '/6 Fire safety.pdf',
  },
  {
    number: '07',
    label:
      'COPY OF THE SELF CERTIFICATION SUBMITTED BY THE SCHOOL FOR AFFILIATION/UPGRADATION/EXTENSION OF AFFILIATION',
    file: null,
  },
  {
    number: '08',
    label:
      'COPIES OF VALID WATER, HEALTH AND SANITATION CERTIFICATES',
    file: '/7 sanitary.pdf',
  },
  {
    number: '09',
    label: 'COPY OF DEO CERTIFICATE',
    file: '/deocertificate.pdf',
  },
]

const ACADEMIC_DOCUMENTS = [
  {
    number: '01',
    label: 'FEE STRUCTURE OF THE SCHOOL',
    file: null,
  },
  {
    number: '02',
    label: 'ANNUAL ACADEMIC CALENDER',
    file: '/calendar2026.pdf',
  },
  {
    number: '03',
    label: 'LIST OF SCHOOL MANAGEMENT COMMITTEE (SMC)',
    file: '/SMC.pdf',
  },
  {
    number: '04',
    label: 'LIST OF PARENTS TEACHERS ASSOCIATION (PTA) MEMBERS',
    file: '/ptamemberdetails.pdf',
  },
  {
    number: '05',
    label:
      'LAST THREE-YEAR RESULT OF THE BOARD EXAMINATION AS PER APPLICABILITY',
    file: null,
    result: '100%',
  },
]

const CLASS_X_RESULTS = [
  ['2018', '29', '29', '100%'],
  ['2019', '33', '33', '100%'],
  ['2020', '39', '39', '100%'],
  ['2021', '37', '37', '100%'],
  ['2022', '52', '52', '100%'],
  ['2023', '59', '59', '100%'],
  ['2024', '46', '46', '100%'],
]

const CLASS_XII_RESULTS = [
  ['2020', '6', '6', '100%'],
  ['2021', '18', '18', '100%'],
  ['2022', '27', '27', '100%'],
  ['2023', '25', '25', '100%'],
  ['2024', '35', '35', '100%'],
]

const STAFF_DOCUMENT = {
  number: '01',
  label: 'STAFF DETAILS',
  file: '/8 staff details.pdf',
}

/* =========================================
   DOCUMENT CARD
========================================= */

function DocumentCard({ item }) {
  return (
    <div
      className="
        group flex flex-col gap-5
        rounded-2xl border border-black/10
        bg-white p-5
        transition-all duration-300
        hover:-translate-y-1
        hover:border-black/20
        hover:shadow-xl
        md:flex-row md:items-center
        md:justify-between md:p-6
      "
    >
      <div className="flex min-w-0 gap-4">
        <div
          className="
            flex h-10 w-10 shrink-0
            items-center justify-center
            rounded-full bg-[#1c1b1a]
            text-xs font-medium text-white
          "
        >
          {item.number}
        </div>

        <div className="min-w-0">
          <p
            className="
              text-sm font-medium leading-6
              text-[#1c1b1a]
              md:text-[15px]
            "
          >
            {item.label}
          </p>

          {/* Only show this when there is no file AND no result */}
          {!item.file && !item.result && (
            <p className="mt-1 text-xs text-black/40">
              Document link not available
            </p>
          )}
        </div>
      </div>

      {/* 100% FOR LAST THREE-YEAR RESULT */}
      {item.result && (
        <span
          className="
            shrink-0
            text-sm font-semibold
            text-[#b8872f]
            md:text-base
          "
        >
          {item.result}
        </span>
      )}

      {/* PDF BUTTON */}
      {item.file && (
        <a
          href={item.file}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex w-fit shrink-0
            items-center gap-2
            rounded-full
            border border-black/15
            px-4 py-2.5
            text-sm font-medium
            text-[#1c1b1a]
            transition-all duration-300
            hover:bg-[#1c1b1a]
            hover:text-white
          "
        >
          <span>View PDF</span>

          <span
            className="
              transition-transform duration-300
              group-hover:translate-x-1
            "
          >
            →
          </span>
        </a>
      )}
    </div>
  )
}

/* =========================================
   RESULT TABLE
========================================= */

function ResultTable({ title, results }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">

      <div className="border-b border-black/10 px-5 py-5 md:px-6">
        <h3 className="font-display text-xl text-[#1c1b1a]">
          {title}
        </h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse">

          <thead>
            <tr className="bg-[#f4f1ea] text-left">

              <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-black/60">
                Year
              </th>

              <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-black/60">
                No. of Students Appeared
              </th>

              <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-black/60">
                No. of Students Passed
              </th>

              <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-black/60">
                Pass Percentage
              </th>

            </tr>
          </thead>

          <tbody>
            {results.map((row, index) => (
              <tr
                key={row[0]}
                className={`
                  border-b border-black/5
                  last:border-0
                  ${
                    index % 2 === 0
                      ? 'bg-white'
                      : 'bg-black/[0.015]'
                  }
                `}
              >

                <td className="px-5 py-4 text-sm font-medium text-[#1c1b1a]">
                  {row[0]}
                </td>

                <td className="px-5 py-4 text-sm text-black/65">
                  {row[1]}
                </td>

                <td className="px-5 py-4 text-sm text-black/65">
                  {row[2]}
                </td>

                <td className="px-5 py-4 text-sm font-semibold text-[#1c1b1a]">
                  {row[3]}
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  )
}

/* =========================================
   MAIN PAGE
========================================= */

export default function MandatoryDisclosure() {
  return (
    <main className="min-h-screen bg-[#f4f1ea] text-[#1c1b1a]">

      {/* =================================
          HERO
      ================================= */}

      <section
        className="
          relative overflow-hidden
          bg-[#1c1b1a]
          px-5 pb-20 pt-32
          text-white
          md:px-8 md:pb-28 md:pt-40
        "
      >

        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#d9a566]/10 blur-3xl" />

        <div className="absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">

          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#d9a566]">
            CBSE Mandatory Disclosure
          </p>

          <h1 className="max-w-4xl font-display text-4xl leading-tight md:text-6xl lg:text-7xl">
            Mandatory Disclosure
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/65 md:text-lg">
            Official school information, statutory documents, academic
            information and board examination results of Linga Global School.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">

            <span className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/70">
              Affiliation No. 1930701
            </span>

            <span className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/70">
              School Code 55610
            </span>

          </div>
        </div>
      </section>

      {/* =================================
          MAIN CONTENT
      ================================= */}

      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">

        {/* =================================
            GENERAL INFORMATION
        ================================= */}

        <section className="mb-20">

          <div className="mb-8">

            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-black/40">
              A
            </p>

            <h2 className="font-display text-3xl md:text-4xl">
              General Information
            </h2>

          </div>

          <div className="overflow-hidden rounded-2xl border border-black/10 bg-white">

            {GENERAL_INFORMATION.map((item, index) => (

              <div
                key={item.label}
                className={`
                  grid gap-2 px-5 py-5
                  md:grid-cols-[38%_62%]
                  md:px-7
                  ${
                    index !== GENERAL_INFORMATION.length - 1
                      ? 'border-b border-black/8'
                      : ''
                  }
                `}
              >

                <p className="text-xs font-semibold uppercase tracking-wider text-black/45">
                  {item.label}
                </p>

                <p className="text-sm leading-6 text-[#1c1b1a] md:text-[15px]">
                  {item.value}
                </p>

              </div>

            ))}

          </div>
        </section>

        {/* =================================
            DOCUMENTS
        ================================= */}

        <section className="mb-20">

          <div className="mb-8">

            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-black/40">
              B
            </p>

            <h2 className="font-display text-3xl md:text-4xl">
              Documents and Information
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-black/55">
              Statutory and compliance documents made available by the school.
            </p>

          </div>

          <div className="space-y-3">
            {DOCUMENTS.map((item) => (
              <DocumentCard
                key={item.number}
                item={item}
              />
            ))}
          </div>

        </section>

        {/* =================================
            RESULTS & ACADEMICS
        ================================= */}

        <section className="mb-20">

          <div className="mb-8">

            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-black/40">
              C
            </p>

            <h2 className="font-display text-3xl md:text-4xl">
              Results and Academics
            </h2>

          </div>

          <div className="space-y-3">

            {ACADEMIC_DOCUMENTS.map((item) => (
              <DocumentCard
                key={item.number}
                item={item}
              />
            ))}

          </div>

        </section>

        {/* =================================
            STAFF
        ================================= */}

        <section className="mb-20">

          <div className="mb-8">

            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-black/40">
              D
            </p>

            <h2 className="font-display text-3xl md:text-4xl">
              Staff
            </h2>

          </div>

          <DocumentCard item={STAFF_DOCUMENT} />

        </section>

        {/* =================================
            BOARD RESULTS
        ================================= */}

        <section className="mb-20">

          <div className="mb-8">

            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-black/40">
              Board Examination Results
            </p>

            <h2 className="font-display text-3xl md:text-4xl">
              Academic Performance
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-black/55">
              Board examination results as provided in the school's mandatory
              disclosure information.
            </p>

          </div>

          <div className="grid gap-6 lg:grid-cols-2">

            <ResultTable
              title="Class X — Board Results"
              results={CLASS_X_RESULTS}
            />

            <ResultTable
              title="Class XII — Board Results"
              results={CLASS_XII_RESULTS}
            />

          </div>

        </section>

        {/* =================================
            SARAS 6.0 PDF
        ================================= */}

        <section>

          <div
            className="
              relative overflow-hidden
              rounded-3xl
              bg-[#1c1b1a]
              p-5 text-white
              md:p-8
            "
          >

            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#d9a566]/10 blur-3xl" />

            <div className="relative">

              {/* PDF HEADER */}

              <div className="mb-6">

                <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#d9a566]">
                  Official Document
                </p>

                <h2 className="font-display text-2xl md:text-3xl">
                  Mandatory Disclosure Details SARAS 6.0
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-6 text-white/55">
                  View the complete mandatory disclosure document provided by
                  Linga Global School.
                </p>

              </div>

              {/* =================================
                  PDF VIEWER
              ================================= */}

              <div
                className="
                  overflow-hidden
                  rounded-2xl
                  border border-white/10
                  bg-white
                "
              >

                <iframe
                  src="/MandatoryDisclosureDetailsSARAS6.0.pdf"
                  title="Mandatory Disclosure Details SARAS 6.0"
                  className="
                    block
                    h-[550px]
                    w-full
                    border-0
                    md:h-[800px]
                  "
                />

              </div>

              {/* =================================
                  OPEN PDF BUTTON
              ================================= */}

              <div className="mt-5 flex justify-end">

                <a
                  href="/MandatoryDisclosureDetailsSARAS6.0.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    bg-white
                    px-5 py-3
                    text-sm font-semibold
                    text-[#1c1b1a]
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:shadow-xl
                  "
                >
                  <span>Open PDF in New Tab</span>
                  <span>↗</span>
                </a>

              </div>

            </div>
          </div>

        </section>

      </div>
    </main>
  )
}