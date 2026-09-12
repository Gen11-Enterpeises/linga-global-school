import { motion } from 'framer-motion'

const PDF_PATH = '/MandatoryDisclosureDetailsSARAS6.0.pdf'

const GENERAL_INFO = [
  ['NAME OF THE SCHOOL', 'LINGA GLOBAL SCHOOL'],
  ['AFFILIATION NO.', '1930701'],
  ['SCHOOL CODE', '55610'],
  ['COMPLETE ADDRESS', 'Kalasalingam University Campus, Anand Nagar, Krishnankoil, Virudhunagar District, Tamil Nadu'],
  ['PRINCIPAL', 'Ms. Alka Sharma'],
  ['PRINCIPAL PHONE NO.', '+91 73 73 72 72 90'],
  ['PRINCIPAL EMAIL', 'info@lingaschool.org'],
]

const DOCUMENTS = [
  {
    title: 'AFFILIATION CERTIFICATE',
    description: 'CBSE affiliation certificate',
  },
  {
    title: 'SOCIETY / TRUST / COMPANY REGISTRATION',
    description: 'Registration details of the school management',
  },
  {
    title: 'NO OBJECTION CERTIFICATE',
    description: 'No Objection Certificate',
  },
  {
    title: 'RECOGNITION CERTIFICATE',
    description: 'School recognition certificate',
  },
]

const ACADEMIC_DOCUMENTS = [
  {
    title: 'BUILDING SAFETY CERTIFICATE',
    description: 'Building safety certification',
  },
  {
    title: 'FIRE SAFETY CERTIFICATE',
    description: 'Fire safety certification',
  },
  {
    title: 'WATER, HEALTH & SANITATION CERTIFICATE',
    description: 'Water, health and sanitation certification',
  },
]

const RESULT_DATA = [
  {
    year: '2021–22',
    result: '100%',
  },
  {
    year: '2022–23',
    result: '100%',
  },
  {
    year: '2023–24',
    result: '100%',
  },
]

function DocumentCard({ title, description }) {
  return (
    <div
      className="
        group
        flex
        min-h-[150px]
        flex-col
        justify-between
        rounded-2xl
        border
        border-black/10
        bg-white
        p-5
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#a87928]/40
        hover:shadow-xl
        sm:p-6
      "
    >
      <div>
        <div
          className="
            mb-4
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-[#a87928]/10
            text-[#a87928]
          "
        >
          ↗
        </div>

        <h3
          className="
            text-sm
            font-semibold
            leading-5
            text-[#151412]
            sm:text-base
          "
        >
          {title}
        </h3>

        <p className="
          mt-2
          text-sm
          leading-6
          text-[#151412]/55
        ">
          {description}
        </p>
      </div>
    </div>
  )
}

function InfoTable({ data }) {
  return (
    <div className="
      overflow-hidden
      rounded-2xl
      border
      border-black/10
      bg-white
      shadow-sm
    ">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[620px] border-collapse">
          <tbody>
            {data.map(([label, value], index) => (
              <tr
                key={label}
                className={
                  index !== data.length - 1
                    ? 'border-b border-black/10'
                    : ''
                }
              >
                <td className="
                  w-[42%]
                  px-4
                  py-4
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wide
                  text-[#151412]/60
                  sm:px-6
                ">
                  {label}
                </td>

                <td className="
                  px-4
                  py-4
                  text-sm
                  leading-6
                  text-[#151412]
                  sm:px-6
                ">
                  {value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function ResultTable() {
  return (
    <div className="
      overflow-hidden
      rounded-2xl
      border
      border-black/10
      bg-white
      shadow-sm
    ">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse">
          <thead>
            <tr className="border-b border-black/10 bg-[#151412] text-white">
              <th className="
                px-5
                py-4
                text-left
                text-xs
                font-semibold
                uppercase
                tracking-wider
              ">
                Academic Year
              </th>

              <th className="
                px-5
                py-4
                text-left
                text-xs
                font-semibold
                uppercase
                tracking-wider
              ">
                Result
              </th>
            </tr>
          </thead>

          <tbody>
            {RESULT_DATA.map((item, index) => (
              <tr
                key={item.year}
                className={
                  index !== RESULT_DATA.length - 1
                    ? 'border-b border-black/10'
                    : ''
                }
              >
                <td className="
                  px-5
                  py-4
                  text-sm
                  text-[#151412]/75
                ">
                  {item.year}
                </td>

                <td className="
                  px-5
                  py-4
                  text-sm
                  font-semibold
                  text-[#a87928]
                ">
                  {item.result}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default function MandatoryDisclosure() {
  return (
    <main className="bg-[#f4f1ea] text-[#151412]">

      {/* HERO */}
      <section className="
        relative
        overflow-hidden
        bg-[#090908]
        px-5
        pb-16
        pt-28
        text-white
        sm:px-6
        md:px-8
        md:pb-24
        md:pt-36
      ">
        <div
          className="
            pointer-events-none
            absolute
            -right-32
            top-10
            h-[300px]
            w-[300px]
            rounded-full
            blur-[110px]
            md:h-[450px]
            md:w-[450px]
          "
          style={{
            background: '#b8872f',
            opacity: 0.08,
          }}
        />

        <div className="relative mx-auto max-w-7xl">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              mb-4
              text-xs
              font-medium
              uppercase
              tracking-[0.2em]
              text-[#b8872f]
              sm:text-sm
            "
          >
            CBSE Mandatory Disclosure
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="
              max-w-4xl
              text-4xl
              leading-[1.05]
              sm:text-5xl
              md:text-6xl
            "
            style={{
              fontFamily:
                'Georgia, "Times New Roman", serif',
              fontWeight: 600,
            }}
          >
            Mandatory Disclosure
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="
              mt-5
              max-w-2xl
              text-sm
              leading-6
              text-white/60
              sm:text-base
            "
          >
            Official school information and disclosure documents.
          </motion.p>
        </div>
      </section>

      {/* GENERAL INFORMATION */}
      <section className="
        px-5
        py-16
        sm:px-6
        md:px-8
        md:py-24
      ">
        <div className="mx-auto max-w-7xl">

          <div className="mb-8 md:mb-10">
            <p className="
              mb-3
              text-xs
              font-semibold
              uppercase
              tracking-[0.18em]
              text-[#a87928]
            ">
              01
            </p>

            <h2
              className="
                text-3xl
                sm:text-4xl
                md:text-5xl
              "
              style={{
                fontFamily:
                  'Georgia, "Times New Roman", serif',
                fontWeight: 600,
              }}
            >
              General Information
            </h2>
          </div>

          <InfoTable data={GENERAL_INFO} />

        </div>
      </section>

      {/* DOCUMENTS */}
      <section className="
        bg-white
        px-5
        py-16
        sm:px-6
        md:px-8
        md:py-24
      ">
        <div className="mx-auto max-w-7xl">

          <div className="mb-10">
            <p className="
              mb-3
              text-xs
              font-semibold
              uppercase
              tracking-[0.18em]
              text-[#a87928]
            ">
              02
            </p>

            <h2
              className="
                text-3xl
                sm:text-4xl
                md:text-5xl
              "
              style={{
                fontFamily:
                  'Georgia, "Times New Roman", serif',
                fontWeight: 600,
              }}
            >
              Documents
            </h2>
          </div>

          <div className="
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:grid-cols-4
          ">
            {DOCUMENTS.map((document) => (
              <DocumentCard
                key={document.title}
                title={document.title}
                description={document.description}
              />
            ))}
          </div>

        </div>
      </section>

      {/* ACADEMIC DOCUMENTS */}
      <section className="
        px-5
        py-16
        sm:px-6
        md:px-8
        md:py-24
      ">
        <div className="mx-auto max-w-7xl">

          <div className="mb-10">
            <p className="
              mb-3
              text-xs
              font-semibold
              uppercase
              tracking-[0.18em]
              text-[#a87928]
            ">
              03
            </p>

            <h2
              className="
                max-w-3xl
                text-3xl
                leading-tight
                sm:text-4xl
                md:text-5xl
              "
              style={{
                fontFamily:
                  'Georgia, "Times New Roman", serif',
                fontWeight: 600,
              }}
            >
              Academic & Safety Documents
            </h2>
          </div>

          <div className="
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:grid-cols-3
          ">
            {ACADEMIC_DOCUMENTS.map((document) => (
              <DocumentCard
                key={document.title}
                title={document.title}
                description={document.description}
              />
            ))}
          </div>

        </div>
      </section>

      {/* RESULT */}
      <section className="
        bg-[#151412]
        px-5
        py-16
        text-white
        sm:px-6
        md:px-8
        md:py-24
      ">
        <div className="mx-auto max-w-7xl">

          <div className="mb-10">
            <p className="
              mb-3
              text-xs
              font-semibold
              uppercase
              tracking-[0.18em]
              text-[#d6a447]
            ">
              04
            </p>

            <h2
              className="
                max-w-4xl
                text-3xl
                leading-tight
                sm:text-4xl
                md:text-5xl
              "
              style={{
                fontFamily:
                  'Georgia, "Times New Roman", serif',
                fontWeight: 600,
              }}
            >
              LAST THREE-YEAR RESULT OF THE BOARD EXAMINATION AS PER APPLICABILITY
            </h2>
          </div>

          {/* ONLY 100% AS REQUESTED */}
          <div className="
            rounded-2xl
            border
            border-white/10
            bg-white/[0.04]
            p-8
            text-center
            shadow-2xl
            sm:p-12
          ">
            <p className="
              text-xs
              uppercase
              tracking-[0.2em]
              text-white/45
            ">
              Board Examination Result
            </p>

            <p
              className="
                mt-4
                text-6xl
                font-semibold
                text-[#d6a447]
                sm:text-7xl
                md:text-8xl
              "
            >
              100%
            </p>
          </div>

        </div>
      </section>

      {/* SARAS PDF */}
      <section className="
        bg-[#f4f1ea]
        px-5
        py-16
        sm:px-6
        md:px-8
        md:py-24
      ">
        <div className="mx-auto max-w-7xl">

          <div className="mb-8 md:mb-10">
            <p className="
              mb-3
              text-xs
              font-semibold
              uppercase
              tracking-[0.18em]
              text-[#a87928]
            ">
              05
            </p>

            <h2
              className="
                text-3xl
                sm:text-4xl
                md:text-5xl
              "
              style={{
                fontFamily:
                  'Georgia, "Times New Roman", serif',
                fontWeight: 600,
              }}
            >
              SARAS Disclosure Document
            </h2>

            <p className="
              mt-4
              max-w-2xl
              text-sm
              leading-6
              text-[#151412]/60
              sm:text-base
            ">
              Mandatory Disclosure Details SARAS 6.0
            </p>
          </div>

          {/* PDF VIEWER */}
          <div className="
            overflow-hidden
            rounded-2xl
            border
            border-black/10
            bg-white
            shadow-2xl
          ">
            <iframe
              src={`${PDF_PATH}#toolbar=1&navpanes=0&scrollbar=1`}
              title="Mandatory Disclosure Details SARAS 6.0"
              className="
                block
                h-[650px]
                w-full
                md:h-[850px]
              "
            />
          </div>

          {/* DIRECT OPEN BUTTON */}
          <div className="mt-6 flex justify-center">
            <a
              href={PDF_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                min-h-11
                items-center
                justify-center
                rounded-full
                bg-[#a87928]
                px-6
                py-3
                text-sm
                font-medium
                text-white
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#d6a447]
                hover:shadow-xl
              "
            >
              Open Mandatory Disclosure PDF
            </a>
          </div>

        </div>
      </section>

    </main>
  )
}