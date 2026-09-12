import { motion } from 'framer-motion'

const assets = import.meta.glob(
  '../assets/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  {
    eager: true,
    query: '?url',
    import: 'default',
  }
)

function getFileName(path) {
  return path.split('/').pop() || ''
}

function getTitle(path) {
  return getFileName(path)
    .replace(/\.[^/.]+$/, '')
    .replace(/[-_]/g, ' ')
}

function getCategory(path) {
  const name = getFileName(path).toLowerCase()

  if (
    name.includes('robot') ||
    name.includes('project') ||
    name.includes('innovativ') ||
    name.includes('mathslab') ||
    name.includes('maths lab')
  ) {
    return 'Robotics & Innovation'
  }

  if (
    name.includes('karate') ||
    name.includes('physical') ||
    name.includes('tennis') ||
    name.includes('track') ||
    name.includes('outplay') ||
    name.includes('indoorplay') ||
    name.includes('playground')
  ) {
    return 'Sports'
  }

  if (
    name.includes('dance') ||
    name.includes('fancy dress')
  ) {
    return 'Activities'
  }

  if (
    name.includes('teacher') ||
    name.includes('teachers') ||
    name.includes('christmas') ||
    name.includes('diwali') ||
    name.includes('ceremony') ||
    name.includes('earth day') ||
    name.includes('earthday')
  ) {
    return 'Celebrations'
  }

  if (
    name.includes('student') ||
    name.includes('particip') ||
    name.includes('pledge') ||
    name.includes('prayer')
  ) {
    return 'Student Life'
  }

  return 'Campus'
}

const CATEGORY_CONTENT = {
  Campus: {
    number: '02',
    title: 'Spaces where school life begins.',
    text: 'A glimpse of the campus and the everyday spaces that form part of the school experience.',
  },

  'Robotics & Innovation': {
    number: '03',
    title: 'Ideas turn into possibilities.',
    text: 'Technology, projects and hands-on exploration create opportunities to discover, experiment and build.',
  },

  Sports: {
    number: '04',
    title: 'Learn. Move. Play.',
    text: 'Sports and physical activities bring movement, participation and energy into school life.',
  },

  Activities: {
    number: '05',
    title: 'Learning beyond the classroom.',
    text: 'Creative activities give students space to express themselves, participate and enjoy new experiences.',
  },

  Celebrations: {
    number: '06',
    title: 'Moments worth remembering.',
    text: 'Special occasions and celebrations bring colour, togetherness and memorable moments to school life.',
  },

  'Student Life': {
    number: '07',
    title: 'Everyday moments matter.',
    text: 'From participation to everyday interactions, these moments become an important part of student life.',
  },
}

const CATEGORY_ORDER = [
  'Campus',
  'Robotics & Innovation',
  'Sports',
  'Activities',
  'Celebrations',
  'Student Life',
]

const allPhotos = Object.entries(assets)
  .filter(([path]) => !getFileName(path).toLowerCase().startsWith('logo'))
  .map(([path, src]) => ({
    path,
    src,
    title: getTitle(path),
    category: getCategory(path),
  }))

/*
  Homepage par sirf selected photos rakhenge.
  Baaki saare photos Gallery page par available rahenge.
*/
const HOMEPAGE_LIMITS = {
  Campus: 3,
  'Robotics & Innovation': 3,
  Sports: 3,
  Activities: 2,
  Celebrations: 3,
  'Student Life': 3,
}

function CategorySection({ category, photos }) {
  const content = CATEGORY_CONTENT[category]

  if (!photos.length) return null

  return (
    <section className="mb-20 last:mb-0 md:mb-28">
      {/* Text block */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.65 }}
        className="mb-8 grid gap-6 md:grid-cols-12 md:items-end md:gap-10"
      >
        <div className="md:col-span-5">
          <div className="mb-4 flex items-center gap-3">
            <span className="section-number">
              {content.number}
            </span>

            <span className="gold-line" />
          </div>

          <h3 className="font-display text-2xl leading-tight text-charcoal sm:text-3xl md:text-4xl">
            {content.title}
          </h3>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <p className="max-w-xl text-sm leading-relaxed text-charcoal/65 sm:text-base md:text-lg">
            {content.text}
          </p>
        </div>
      </motion.div>

      {/* Photos */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 md:gap-5">
        {photos.map((photo, index) => (
          <motion.figure
            key={photo.path}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
              duration: 0.55,
              delay: index * 0.06,
            }}
            className="photo-card group relative aspect-[4/3] overflow-hidden"
          >
            <img
              src={photo.src}
              alt={photo.title}
              loading="lazy"
              className="school-image h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#090908]/75 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <figcaption className="absolute bottom-0 left-0 right-0 translate-y-2 p-4 text-sm text-bone opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              {photo.title}
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  )
}

export default function SchoolGallery() {
  return (
    <section className="overflow-hidden bg-bone px-5 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-4xl md:mb-24"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="section-number">
              LIFE AT LINGA
            </span>

            <span className="gold-line" />
          </div>

          <h2 className="font-display text-3xl leading-tight text-charcoal sm:text-4xl md:text-5xl lg:text-6xl">
            Moments that make
            <span className="school-gold"> Linga.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-charcoal/65 md:text-lg">
            From learning and innovation to activities, celebrations and
            everyday student life, every moment adds to the experience.
          </p>
        </motion.div>

        {/* Category sections */}
        {CATEGORY_ORDER.map((category) => {
          const categoryPhotos = allPhotos
            .filter((photo) => photo.category === category)
            .slice(0, HOMEPAGE_LIMITS[category])

          return (
            <CategorySection
              key={category}
              category={category}
              photos={categoryPhotos}
            />
          )
        })}

        {/* Gallery redirect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 border-t border-charcoal/10 pt-8 text-center md:mt-24"
        >
          <a
            href="/gallery"
            className="gold-hover inline-flex items-center gap-2 text-sm font-medium text-charcoal"
          >
            Explore the complete gallery
            <span aria-hidden="true">→</span>
          </a>
        </motion.div>

      </div>
    </section>
  )
}