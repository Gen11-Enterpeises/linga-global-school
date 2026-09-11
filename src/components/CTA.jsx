import { motion } from 'framer-motion'
import MagneticButton from './MagneticButton'

export default function CTA() {
  return (
    <section className="px-5 md:px-8 py-28 md:py-40 bg-charcoal text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-2xl"
      >
        <h2 className="font-display text-bone text-3xl md:text-5xl leading-tight mb-8">
          Admissions are open for 2026–27.
        </h2>
        <a href="tel:+917373727290">
          <MagneticButton className="inline-flex items-center justify-center px-9 py-4 rounded-full bg-amber text-charcoal text-sm md:text-base font-medium hover:bg-amber-soft transition-colors">
            Call +91 73737 27290
          </MagneticButton>
        </a>
      </motion.div>
    </section>
  )
}
