import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import founder from '../assets/founder.jpg'
import ceremony from '../assets/ceremony.jpg'

export default function Legacy() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'start 0.35'] })
  const clip = useTransform(scrollYProgress, [0, 1], ['inset(0 0 100% 0)', 'inset(0 0 0% 0)'])

  return (
    <section ref={ref} className="px-5 md:px-8 py-20 md:py-28 bg-bone">
      <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="order-2 md:order-1">
          <p className="text-clay text-sm mb-3">Founding philosophy</p>
          <motion.div
            style={{ clipPath: clip }}
          >
            <h2 className="font-display text-3xl md:text-4xl text-charcoal leading-tight mb-5">
              Started by Kalvivallal Thiru T. Kalasalingam, for the children of Krishnankoil.
            </h2>
          </motion.div>
          <p className="text-charcoal/70 text-[15px] md:text-base leading-relaxed max-w-md">
            Founded by the Kalasalingam and Anandam Ammal charities, to bring modern
            technology and creativity to rural education.
          </p>
        </div>
        <div className="order-1 md:order-2 grid grid-cols-3 gap-3 items-center">
          <img
            src={founder}
            alt="Founder, Kalvivallal Thiru T. Kalasalingam"
            className="col-span-1 w-full aspect-square object-cover rounded-full"
          />
          <img
            src={ceremony}
            alt="Campus inauguration ceremony"
            className="col-span-2 w-full aspect-[4/3] object-cover rounded-sm"
          />
        </div>
      </div>
    </section>
  )
}
