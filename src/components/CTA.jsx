import { motion } from 'framer-motion'
import MagneticButton from './MagneticButton'

export default function CTA() {
  return (
    <section className="
      relative overflow-hidden
      bg-[#FAF7F3]
      px-5 py-24
      text-center
      sm:px-6
      md:px-8 md:py-36
    ">

      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute left-1/2 top-1/2
          h-[420px] w-[420px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full blur-[150px]
        "
        style={{
          background: '#C6A66B',
          opacity: 0.07,
        }}
      />

      {/* Gold lines */}
      <div className="
        absolute left-0 right-0 top-0
        h-px bg-gradient-to-r
        from-transparent
        via-[#C6A66B]/50
        to-transparent
      " />

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-2xl"
      >

        <div className="mb-6 flex items-center justify-center gap-3">
          <span className="h-[2px] w-8 bg-[#C6A66B]" />

          <span className="
            text-[10px]
            uppercase tracking-[0.25em]
            text-[#C6A66B]
          ">
            Connect with us
          </span>

          <span className="h-[2px] w-8 bg-[#C6A66B]" />
        </div>

        <h2
          className="
            text-3xl leading-tight
            text-[#292629]
            sm:text-4xl
            md:text-5xl
          "
          style={{
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontWeight: 600,
          }}
        >
          Let’s connect.
        </h2>

        <p className="
          mx-auto mt-5
          max-w-lg
          text-sm leading-6
          text-[#292629]/55
          md:text-base
        ">
          Get in touch with Linga Global School for more information.
        </p>

        <a
          href="tel:+917373727290"
          className="mt-8 inline-block"
        >
          <MagneticButton
            className="
              inline-flex
              items-center
              justify-center
              rounded-full
              bg-[#C6A66B]
              px-7 py-4
              text-sm font-medium
              text-[#292629]
              shadow-[0_10px_35px_rgba(184,135,47,0.15)]
              transition-all duration-300
              hover:bg-[#D9BC85]
              hover:shadow-[0_15px_45px_rgba(184,135,47,0.22)]
              md:px-9 md:text-base
            "
          >
            Call +91 73737 27290
          </MagneticButton>
        </a>

      </motion.div>
    </section>
  )
}