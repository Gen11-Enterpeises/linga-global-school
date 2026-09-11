import { motion } from 'framer-motion'
import chairman from '../assets/chairman.jpg'
import building from '../assets/building.jpg'

const RULES = [
  'Prescribed uniform every day, including school functions',
  'No ornaments or valuables to be brought to school',
  'Parents may meet teachers only with Principal\u2019s permission',
  'All communication routed through the Principal',
  'Minimum 80% attendance required to sit for examinations',
]

export default function About() {
  return (
    <>
      <section className="relative h-[46vh] min-h-[320px] -mt-16 md:-mt-20 overflow-hidden">
        <img src={building} alt="Linga Global School" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/60" />
        <div className="relative h-full flex items-end pb-12 px-5 md:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-display text-bone text-4xl md:text-6xl mx-auto max-w-7xl w-full"
          >
            About the school
          </motion.h1>
        </div>
      </section>

      <section className="px-5 md:px-8 py-20 md:py-28 bg-bone">
        <div className="mx-auto max-w-7xl grid md:grid-cols-3 gap-12 md:gap-16">
          <div className="md:col-span-1">
            <img src={chairman} alt="Dr. Arivalagi, M.B.B.S., Chairman" className="w-32 h-32 rounded-full object-cover mb-4" />
            <p className="text-charcoal font-medium">Dr. Arivalagi, M.B.B.S.</p>
            <p className="text-clay text-sm">Chairman</p>
          </div>
          <div className="md:col-span-2">
            <p className="text-charcoal/70 text-[15px] md:text-lg leading-relaxed">
              Linga Global School was founded for the desire of Kalvivallal Thiru T.
              Kalasalingam (late), as the founder-chairman — started to bring good
              education and creativity to rural Krishnankoil, through the Kalasalingam
              and Anandam Ammal charities.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 md:px-8 py-20 md:py-28 bg-charcoal">
        <div className="mx-auto max-w-7xl">
          <p className="text-amber-soft text-sm mb-3">Academic partnership</p>
          <h2 className="font-display text-3xl md:text-4xl text-bone leading-tight max-w-2xl mb-6">
            In association with Maharishi Vidya Mandir, Chetpet, Chennai.
          </h2>
          <p className="text-bone/70 text-[15px] md:text-base leading-relaxed max-w-2xl">
            MVM Chetpet has been rated AAAAA among CBSE schools nationally. Senior
            Principal Shri S. Namasivayamji, a national CBSE award winner, guides this
            academic collaboration.
          </p>
        </div>
      </section>

      <section className="px-5 md:px-8 py-20 md:py-28 bg-bone">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl text-charcoal leading-tight mb-8">
            A few things every family should know.
          </h2>
          <ul className="space-y-4">
            {RULES.map((rule) => (
              <li key={rule} className="text-charcoal/75 text-[15px] md:text-base leading-relaxed pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-amber">
                {rule}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
