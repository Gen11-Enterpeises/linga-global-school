import { motion } from 'framer-motion'

const POINTS = [
  {
    number: '01',
    title: 'Learn with purpose',
    text: 'Learning is more than completing lessons. It is about building curiosity, understanding and confidence.'
  },
  {
    number: '02',
    title: 'Explore & create',
    text: 'Students get opportunities to discover ideas through technology, creativity, activities and practical experiences.'
  },
  {
    number: '03',
    title: 'Grow with confidence',
    text: 'Every learning experience can help students develop academically, creatively and personally.'
  },
]

export default function SchoolIntro() {
  return (
    <section className="relative overflow-hidden bg-bone px-5 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="section-number">01</span>
            <span className="gold-line" />
            <span className="text-xs uppercase tracking-[0.18em] text-charcoal/50">
              Our Approach
            </span>
          </div>

          <h2 className="max-w-4xl font-display text-3xl leading-tight text-charcoal sm:text-4xl md:text-5xl lg:text-6xl">
            Where learning becomes
            <span className="school-gold"> a way of life.</span>
          </h2>
        </motion.div>

        {/* Main text */}
        <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-12 md:gap-12">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-7"
          >
            <p className="text-lg leading-relaxed text-charcoal/75 md:text-xl">
              At Linga Global School, education goes beyond textbooks and
              classrooms. Learning is encouraged through curiosity,
              exploration, expression and meaningful experiences.
            </p>

            <p className="mt-6 text-base leading-relaxed text-charcoal/65 md:text-lg">
              Academics, technology, creativity and activities come together
              to create an environment where students can learn, explore and
              grow with confidence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="md:col-span-5"
          >
            <div className="border-l-2 border-school-gold pl-6 md:pl-8">
              <p className="font-display text-xl leading-relaxed text-charcoal md:text-2xl">
                “Every child deserves an environment that inspires them to
                learn, discover and believe in their possibilities.”
              </p>
            </div>
          </motion.div>

        </div>

        {/* Three points */}
        <div className="mt-16 grid gap-4 md:mt-20 md:grid-cols-3">
          {POINTS.map((point, index) => (
            <motion.article
              key={point.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group rounded-2xl border border-charcoal/10 bg-white/55 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-school-gold/40 hover:shadow-lg md:p-7"
            >
              <span className="text-xs tracking-[0.2em] text-school-gold">
                {point.number}
              </span>

              <h3 className="mt-5 font-display text-xl text-charcoal md:text-2xl">
                {point.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-charcoal/65 md:text-base">
                {point.text}
              </p>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  )
}