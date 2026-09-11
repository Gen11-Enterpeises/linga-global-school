import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import robotics from '../assets/robotics.jpg'
import mathslab from '../assets/mathslab.jpg'
import track from '../assets/track.jpg'
import outplay from '../assets/outplay.jpg'
import indoorplay from '../assets/indoorplay2.jpg'
import dance from '../assets/dance.jpg'

const ITEMS = [
  { img: robotics, label: 'Robotics Lab', span: 'md:col-span-2', offset: -18 },
  { img: track, label: 'Athletics Track', span: '', offset: 26 },
  { img: outplay, label: 'Outdoor Play', span: '', offset: -10 },
  { img: mathslab, label: 'Maths Lab', span: 'md:col-span-2', offset: 20 },
  { img: indoorplay, label: 'Linga Wonder Land', span: '', offset: -22 },
  { img: dance, label: 'Dance Studio', span: '', offset: 14 },
]

function Tile({ item }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [item.offset, -item.offset])

  return (
    <motion.figure
      ref={ref}
      style={{ y }}
      className={`group relative overflow-hidden rounded-sm aspect-[4/3] ${item.span}`}
    >
      <motion.img
        src={item.img}
        alt={item.label}
        className="w-full h-full object-cover"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <figcaption className="absolute bottom-3 left-4 text-bone text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-1 group-hover:translate-y-0">
        {item.label}
      </figcaption>
    </motion.figure>
  )
}

export default function FacilitiesGallery() {
  return (
    <section className="px-5 md:px-8 py-24 md:py-36 bg-bone overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between mb-10 md:mb-16">
          <h2 className="font-display text-3xl md:text-5xl text-charcoal max-w-md leading-tight">
            Spaces made for curiosity.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {ITEMS.map((item) => (
            <Tile key={item.label} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
