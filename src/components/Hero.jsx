import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import building from '../assets/building.jpg'
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
      className="relative -mt-16 md:-mt-20 h-[92vh] min-h-[560px] w-full overflow-hidden bg-[#090908]"
    >

      {/* =====================================
          HERO VIDEO
      ===================================== */}

      <motion.video
        poster={HERO_POSTER_SRC}
        autoPlay
        muted
        loop
        playsInline
        style={{ y: bgY }}
        className="absolute inset-0 h-[120%] w-full object-cover"
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


      {/* =====================================
          CINEMATIC DARK OVERLAY
      ===================================== */}

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/55" />

      <div className="absolute inset-0 bg-black/10" />


      {/* =====================================
          SUBTLE GOLD ATMOSPHERE
      ===================================== */}

      <div
        className="pointer-events-none absolute -right-40 top-[15%] h-[450px] w-[450px] rounded-full blur-[130px]"
        style={{
          background: '#b8872f',
          opacity: 0.08,
        }}
      />


      {/* =====================================
          SCHOOL LOGO
          Using logo.jpeg for right-side hero logo
      ===================================== */}

      <motion.img
        src={logo}
        alt="Linga Global School"
        style={{
          y: markY,
          opacity: markOpacity,
          scale: markScale,
        }}
        className="absolute right-6 top-24 w-24 drop-shadow-xl md:right-10 md:top-28 md:w-32"
      />


      {/* =====================================
          HERO CONTENT
      ===================================== */}

      <div className="relative flex h-full flex-col justify-end px-5 pb-16 md:px-8 md:pb-24">

        <div className="mx-auto w-full max-w-7xl">

          {/* LOCATION */}

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
            }}
            className="mb-3 text-sm tracking-wide text-[#b8872f] md:text-base"
          >
            Krishnankoil, Tamil Nadu · CBSE Affiliation No. 1930701
          </motion.p>


          {/* =================================
              MAIN HEADLINE
          ================================= */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 35,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="max-w-4xl text-4xl leading-[1.05] text-bone sm:text-5xl md:text-6xl lg:text-7xl"
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
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


          {/* =================================
              SUBTITLE
          ================================= */}

          <motion.p
            initial={{
              opacity: 0,
              y: 18,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.8,
            }}
            className="mt-5 max-w-xl text-base text-bone/75 md:text-lg"
          >
            Academic support from Maharishi Vidya Mandir, Chetpet.
          </motion.p>


          {/* =================================
              CAMPUS TOUR BUTTON
          ================================= */}

          <motion.button
            initial={{
              opacity: 0,
              y: 18,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 1,
            }}
            onClick={() => setTourOpen(true)}
            className="group mt-7 inline-flex w-fit items-center gap-2.5 text-sm text-bone/90 transition-colors hover:text-[#b8872f] md:text-base"
          >
            <span
              className="flex h-9 w-9 items-center justify-center rounded-full border border-bone/40 transition-colors group-hover:border-[#b8872f]"
            >
              ▶
            </span>

            Watch campus tour
          </motion.button>

        </div>
      </div>


      {/* =====================================
          CAMPUS TOUR MODAL
      ===================================== */}

      <CampusTourModal
        open={tourOpen}
        onClose={() => setTourOpen(false)}
      />

    </section>
  )
}