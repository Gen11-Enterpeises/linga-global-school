import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

import founder from '../assets/founder.jpg'
import ceremony from '../assets/ceremony.jpg'

export default function Legacy() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'start 0.35'],
  })

  const clip = useTransform(
    scrollYProgress,
    [0, 1],
    ['inset(0 0 100% 0)', 'inset(0 0 0% 0)']
  )

  return (
    <section
      ref={ref}
      className="
        relative overflow-hidden
        bg-[#F1E9E3]
        px-5 py-20
        sm:px-6
        md:px-8 md:py-32
      "
    >
      {/* Decorative gold glow */}
      <div
        className="
          pointer-events-none
          absolute -left-48 bottom-0
          h-[420px] w-[420px]
          rounded-full blur-[140px]
        "
        style={{
          background: '#C6A66B',
          opacity: 0.055,
        }}
      />

      <div className="
        relative mx-auto
        grid max-w-7xl
        items-center
        gap-12
        md:grid-cols-2
        md:gap-16
      ">

        {/* Text */}
        <div className="order-2 md:order-1">

          <div className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-9 bg-[#C6A66B]" />

            <p className="
              text-[10px]
              uppercase tracking-[0.24em]
              text-[#A87A2E]
              sm:text-xs
            ">
              Founding philosophy
            </p>
          </div>

          <motion.div style={{ clipPath: clip }}>
            <h2
              className="
                text-3xl leading-[1.12]
                text-[#151412]
                sm:text-4xl
                md:text-[2.65rem]
              "
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontWeight: 600,
              }}
            >
              Started by Kalvivallal Thiru T. Kalasalingam, for the children
              of Krishnankoil.
            </h2>
          </motion.div>

          <div className="my-6 h-[2px] w-12 bg-[#C6A66B]" />

          <p className="
            max-w-lg
            text-[15px]
            leading-7
            text-[#151412]/65
            md:text-base
          ">
            Founded by the Kalasalingam and Anandam Ammal charities, to bring
            modern technology and creativity to rural education.
          </p>
        </div>

        {/* Images */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="
            order-1
            grid grid-cols-3
            items-center
            gap-3
            sm:gap-4
            md:order-2
          "
        >
          <div className="
            relative overflow-hidden
            rounded-full
            border border-[#C6A66B]/30
            p-1
          ">
            <img
              src={founder}
              alt="Founder, Kalvivallal Thiru T. Kalasalingam"
              className="
                aspect-square
                w-full
                rounded-full
                object-cover
              "
            />
          </div>

          <div className="
            relative col-span-2
            overflow-hidden
            rounded-2xl
            border border-[#292629]/10
            shadow-[0_18px_55px_rgba(0,0,0,0.12)]
          ">
            <img
              src={ceremony}
              alt="Campus inauguration ceremony"
              className="
                aspect-[4/3]
                w-full
                object-cover
                transition-transform
                duration-700
                hover:scale-[1.04]
              "
            />

            <div className="
              absolute inset-x-0 bottom-0
              h-1/3
              bg-gradient-to-t
              from-black/40 to-transparent
            " />

            <div className="
              absolute bottom-4 left-4
              h-[2px] w-10
              bg-[#C6A66B]
            " />
          </div>
        </motion.div>

      </div>
    </section>
  )
}