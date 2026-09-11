import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import robotics from '../assets/robotics.jpg'
import mathslab from '../assets/mathslab.jpg'
import track from '../assets/track.jpg'
import outplay from '../assets/outplay.jpg'
import indoorplay1 from '../assets/indoorplay1.jpg'
import indoorplay2 from '../assets/indoorplay2.jpg'
import dance from '../assets/dance.jpg'
import building from '../assets/building.jpg'

const SECTIONS = [
  { img: robotics, title: 'Robotics Lab', text: 'A dedicated STEM space where students design, build, and program — hands-on from an early age.' },
  { img: mathslab, title: 'Maths Lab', text: 'Manipulatives and models that make abstract concepts tangible.' },
  { img: track, title: 'Athletics Track', text: 'A full-size running track for daily sport and inter-school meets.' },
  { img: outplay, title: 'Outdoor Play', text: 'Play structures built for the younger years.' },
  { img: indoorplay1, title: 'Linga Wonder Land', text: 'An indoor play zone for pre-primary students, open through the year.' },
  { img: dance, title: 'Dance Studio', text: 'A mirrored studio for dance and movement classes.' },
]

function Row({ item, index }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [40, -40])
  const reverse = index % 2 === 1

  return (
    <div ref={ref} className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center py-14 md:py-20 ${reverse ? 'md:[&>*:first-child]:order-2' : ''}`}>
      <motion.div style={{ y }} className="overflow-hidden rounded-sm aspect-[4/3]">
        <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
      </motion.div>
      <div>
        <h3 className="font-display text-2xl md:text-3xl text-charcoal mb-3">{item.title}</h3>
        <p className="text-charcoal/70 text-[15px] md:text-base leading-relaxed max-w-md">{item.text}</p>
      </div>
    </div>
  )
}

export default function Infrastructure() {
  return (
    <>
      <section className="relative h-[46vh] min-h-[320px] -mt-16 md:-mt-20 overflow-hidden">
        <img src={building} alt="Linga Global School" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/60" />
        <div className="relative h-full flex items-end pb-12 px-5 md:px-8">
          <h1 className="font-display text-bone text-4xl md:text-6xl mx-auto max-w-7xl w-full">Infrastructure</h1>
        </div>
      </section>
      <section className="px-5 md:px-8 bg-bone">
        <div className="mx-auto max-w-6xl divide-y divide-charcoal/10">
          {SECTIONS.map((item, i) => (
            <Row key={item.title} item={item} index={i} />
          ))}
        </div>
      </section>
    </>
  )
}
