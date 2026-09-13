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

function Tile({ item, index }) {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [item.offset, -item.offset]
  )

  return (
    <motion.figure
      ref={ref}
      style={{ y }}
      className={`
        group relative overflow-hidden rounded-2xl
        aspect-[4/3]
        border border-[#292629]/10
        bg-[#F1E9E3]
        shadow-[0_15px_45px_rgba(0,0,0,0.12)]
        ${item.span}
      `}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.7,
        delay: Math.min(index * 0.06, 0.3),
      }}
    >
      <motion.img
        src={item.img}
        alt={item.label}
        className="
          h-full w-full object-cover
          transition-transform duration-[900ms]
          ease-out
          group-hover:scale-[1.06]
        "
      />

      {/* Cinematic overlay */}
      <div className="
        absolute inset-0
        bg-gradient-to-t
        from-black/80 via-black/10 to-transparent
        opacity-70
        transition-opacity duration-500
        group-hover:opacity-100
      " />

      {/* Gold accent */}
      <div className="
        absolute left-0 right-0 top-0
        h-[3px]
        origin-left scale-x-0
        bg-[#C6A66B]
        transition-transform duration-500
        group-hover:scale-x-100
      " />

      {/* Label */}
      <figcaption className="
        absolute bottom-0 left-0 right-0
        flex items-end justify-between
        gap-3 p-4 sm:p-5
      ">
        <div>
          <p className="
            mb-1 text-[9px]
            uppercase tracking-[0.22em]
            text-[#A87A2E]
          ">
            Linga Global School
          </p>

          <h3
            className="text-lg text-[#292629] sm:text-xl"
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontWeight: 600,
            }}
          >
            {item.label}
          </h3>
        </div>

        <span className="
          hidden h-8 w-8
          items-center justify-center
          rounded-full
          border border-[#292629]/10
          text-[#716A6C]
          transition-all duration-300
          group-hover:border-[#A87A2E]
          group-hover:text-[#A87A2E]
          sm:flex
        ">
          ↗
        </span>
      </figcaption>
    </motion.figure>
  )
}

export default function FacilitiesGallery() {
  return (
    <section className="
      relative overflow-hidden
      bg-[#F1E9E3]
      px-5 py-20
      sm:px-6
      md:px-8 md:py-32
    ">
      {/* Background accent */}
      <div
        className="
          pointer-events-none
          absolute -right-40 top-10
          h-[400px] w-[400px]
          rounded-full blur-[130px]
        "
        style={{
          background: '#C6A66B',
          opacity: 0.07,
        }}
      />

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-10 flex flex-col gap-5 md:mb-16 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#C6A66B]" />

              <p className="
                text-[10px] uppercase
                tracking-[0.25em]
                text-[#A87A2E]
                sm:text-xs
              ">
                Campus & Facilities
              </p>
            </div>

            <h2
              className="
                max-w-xl
                text-3xl leading-[1.08]
                text-[#151412]
                sm:text-4xl
                md:text-5xl
              "
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontWeight: 600,
              }}
            >
              Spaces made for curiosity.
            </h2>

            <div className="mt-5 h-[2px] w-12 bg-[#C6A66B]" />
          </div>

          <p className="
            max-w-sm
            text-sm leading-6
            text-[#151412]/55
            md:text-right
          ">
            From robotics and mathematics to sports and creative activities,
            every space encourages children to explore and learn.
          </p>
        </motion.div>

        {/* Gallery */}
        <div className="
          grid
          grid-cols-2
          gap-3
          sm:gap-4
          md:grid-cols-4
          md:gap-5
        ">
          {ITEMS.map((item, index) => (
            <Tile
              key={item.label}
              item={item}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  )
}