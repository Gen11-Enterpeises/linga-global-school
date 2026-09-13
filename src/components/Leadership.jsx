import { motion } from 'framer-motion'

import chairman from '../assets/chairman.jpg'
import secretary from '../assets/secretary.jpg'
import directorShasi from '../assets/director-shasi.jpg'
import directorArjun from '../assets/director-arjun.jpg'
import principal from '../assets/principal.jpg'

const PEOPLE = [
  {
    img: chairman,
    name: 'Dr. Arivalagi, M.B.B.S.',
    role: 'Chairman',
  },
  {
    img: secretary,
    name: 'Shri K. Sridharan',
    role: 'Secretary',
  },
  {
    img: directorShasi,
    name: 'Dr. Shasi Anand, Ph.D.',
    role: 'Director',
  },
  {
    img: directorArjun,
    name: 'Mr. Arjun Kalasalingam, MS (USA)',
    role: 'Director',
  },
  {
    img: principal,
    name: 'Mrs. Alka Sharma',
    role: 'Principal',
  },
]

export default function Leadership() {
  return (
    <section className="
      relative overflow-hidden
      bg-[#F1E9E3]
      px-5 py-20
      sm:px-6
      md:px-8 md:py-32
    ">

      {/* Gold glow */}
      <div
        className="
          pointer-events-none
          absolute -right-40 top-0
          h-[450px] w-[450px]
          rounded-full blur-[150px]
        "
        style={{
          background: '#C6A66B',
          opacity: 0.055,
        }}
      />

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-12 md:mb-16"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-[2px] w-9 bg-[#C6A66B]" />

            <p className="
              text-[10px]
              uppercase tracking-[0.24em]
              text-[#C6A66B]
              sm:text-xs
            ">
              Leadership
            </p>
          </div>

          <h2
            className="
              max-w-2xl
              text-3xl leading-[1.1]
              text-[#292629]
              sm:text-4xl
              md:text-5xl
            "
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontWeight: 600,
            }}
          >
            Guided by people, not committees.
          </h2>

          <div className="mt-5 h-[2px] w-12 bg-[#C6A66B]" />
        </motion.div>

        {/* People */}
        <div className="
          grid
          grid-cols-2
          gap-x-4 gap-y-10
          sm:grid-cols-3
          md:grid-cols-5
          md:gap-8
        ">
          {PEOPLE.map((p, index) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: Math.min(index * 0.08, 0.3),
              }}
              className="
                group
                flex flex-col
                items-center
                text-center
              "
            >

              {/* Image */}
              <div className="
                relative mb-5
                h-24 w-24
                sm:h-28 sm:w-28
                md:h-32 md:w-32
              ">
                <div className="
                  absolute -inset-1
                  rounded-full
                  border border-[#C6A66B]/20
                  transition-all duration-500
                  group-hover:border-[#C6A66B]/70
                  group-hover:scale-105
                " />

                <div className="
                  h-full w-full
                  overflow-hidden
                  rounded-full
                  bg-[#FAF7F3]
                ">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="
                      h-full w-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-110
                    "
                  />
                </div>
              </div>

              <p className="
                max-w-[180px]
                text-sm
                font-medium
                leading-snug
                text-[#292629]
                sm:text-base
              ">
                {p.name}
              </p>

              <div className="mt-2 flex items-center gap-2">
                <span className="h-px w-4 bg-[#C6A66B]/60" />

                <p className="
                  text-[10px]
                  uppercase tracking-[0.16em]
                  text-[#A87A2E]
                  sm:text-xs
                ">
                  {p.role}
                </p>

                <span className="h-px w-4 bg-[#C6A66B]/60" />
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}