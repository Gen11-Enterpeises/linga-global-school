import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import logo from '../assets/logo.jpeg'
import CampusTourModal from './CampusTourModal'

const HERO_VIDEO_SRC = '/hero-campus.mp4'
const HERO_POSTER_SRC = '/hero-poster.jpg'

export default function Hero() {
  const ref = useRef(null)
  const [tourOpen, setTourOpen] = useState(false)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const bgY = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', '18%']
  )

  const markY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 140]
  )

  const markOpacity = useTransform(
    scrollYProgress,
    [0, 0.7],
    [1, 0]
  )

  const markScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 0.85]
  )

  return (
    <section
      ref={ref}
      className="
        hero-section
        relative -mt-16
        h-[88vh] min-h-[560px]
        w-full overflow-hidden
        bg-[#090908]
        md:-mt-20
        md:h-[92vh]
      "
    >

      {/* HERO VIDEO */}
      <motion.video
        poster={HERO_POSTER_SRC}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        style={{ y: bgY }}
        className="
          absolute inset-0
          h-full w-full
          object-cover
          object-[center_center]
          md:h-[120%]
          md:object-[center_center]
        "
      >
        <source
          src="/hero-campus.webm"
          type="video/webm"
        />

        <source
          src={HERO_VIDEO_SRC}
          type="video/mp4"
        />
      </motion.video>

      {/* MAIN CINEMATIC OVERLAY */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-t
          from-black
          via-black/45
          to-black/55
        "
      />

      {/* MOBILE EXTRA CONTRAST */}
      <div
        className="
          absolute inset-0
          bg-black/10
          md:bg-transparent
        "
      />

      {/* GOLD ATMOSPHERIC GLOW */}
      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-[10%]
          h-[350px]
          w-[350px]
          rounded-full
          blur-[120px]
          md:h-[450px]
          md:w-[450px]
          md:blur-[130px]
        "
        style={{
          background: '#b8872f',
          opacity: 0.07,
        }}
      />

      {/* HERO LOGO */}
      <motion.img
        src={logo}
        alt="Linga Global School"
        style={{
          y: markY,
          opacity: markOpacity,
          scale: markScale,
        }}
        className="
          absolute
          right-5
          top-24
          w-20
          drop-shadow-[0_8px_25px_rgba(0,0,0,0.45)]
          sm:right-7
          sm:w-24
          md:right-10
          md:top-28
          md:w-32
        "
      />

      {/* HERO CONTENT */}
      <div
        className="
          relative
          flex h-full
          flex-col justify-end
          px-5
          pb-12
          sm:px-6
          sm:pb-14
          md:px-8
          md:pb-24
        "
      >
        <div className="mx-auto w-full max-w-7xl">

          {/* LOCATION / AFFILIATION */}
          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
            className="
              mb-3
              max-w-[90%]
              text-[11px]
              leading-5
              tracking-wide
              text-[#b8872f]
              sm:text-sm
              md:text-base
            "
          >
            Krishnankoil, Tamil Nadu · CBSE Affiliation No. 1930701
          </motion.p>

          {/* MAIN HEADING */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.25,
            }}
            className="
              max-w-[950px]
              text-[2.35rem]
              leading-[1.04]
              tracking-[-0.025em]
              text-bone
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
            style={{
              fontFamily:
                'Georgia, "Times New Roman", serif',
              fontWeight: 600,
            }}
          >
            A campus{' '}
            <span className="highlight-word">
              built to
            </span>{' '}
            help children actually{' '}
            <span className="highlight-word">
              learn.
            </span>
          </motion.h1>

          {/* SUBTITLE */}
          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.4,
            }}
            className="
              mt-4
              max-w-xl
              text-sm
              leading-6
              text-bone/75
              sm:mt-5
              sm:text-base
              md:text-lg
            "
          >
            Academic support from Maharishi Vidya Mandir, Chetpet.
          </motion.p>

          {/* CAMPUS TOUR BUTTON */}
          <motion.button
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.55,
            }}
            onClick={() => setTourOpen(true)}
            className="
              group
              mt-6
              inline-flex
              min-h-11
              w-fit
              items-center
              gap-2.5
              text-sm
              text-bone/90
              transition-colors
              hover:text-[#b8872f]
              md:mt-7
              md:text-base
            "
          >
            <span
              className="
                flex
                h-10 w-10
                items-center justify-center
                rounded-full
                border border-bone/40
                text-xs
                transition-all duration-300
                group-hover:border-[#b8872f]
                group-hover:bg-[#b8872f]/10
                md:h-9 md:w-9
              "
            >
              ▶
            </span>

            <span>
              Watch campus tour
            </span>
          </motion.button>

        </div>
      </div>

      <CampusTourModal
        open={tourOpen}
        onClose={() => setTourOpen(false)}
      />
    </section>
  )
}