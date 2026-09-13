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

function findPhoto(fileName) {
  const target = fileName.toLowerCase()

  const entry = Object.entries(assets).find(([path]) => {
    return getFileName(path).toLowerCase() === target
  })

  return entry ? entry[1] : null
}

/*
  Only a few strong photos are shown on the homepage.
  All other photos remain available on the Gallery page.
*/

const PHOTOS = [
  {
    file: 'building.jpg',
    title: 'Our Campus',
  },
  {
    file: 'robotics.jpg',
    title: 'Robotics & Innovation',
  },
  {
    file: 'track.jpg',
    title: 'Sports & Activities',
  },
  {
    file: 'dance.jpg',
    title: 'Creative Activities',
  },
  {
    file: 'ceremony.jpg',
    title: 'School Moments',
  },
]

export default function SchoolGallery() {
  return (
    <section className="overflow-hidden bg-bone px-5 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="mb-12 max-w-4xl md:mb-16"
        >

          <div className="mb-5 flex items-center gap-3">

            <span className="section-number">
              02
            </span>

            <span className="gold-line" />

            <span className="text-xs uppercase tracking-[0.18em] text-charcoal/50">
              Life at Linga
            </span>

          </div>

          <h2 className="font-display max-w-4xl text-3xl leading-tight text-charcoal sm:text-4xl md:text-5xl lg:text-6xl">
            Learning happens
            <span className="school-gold"> everywhere.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-charcoal/65 md:text-lg">
            A glimpse of the campus, activities, innovation and moments
            that make everyday school life meaningful.
          </p>

        </motion.div>

        {/* Five selected photos */}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-6 md:gap-5">

          {PHOTOS.map((photo, index) => {

            const src = findPhoto(photo.file)

            if (!src) return null

            const featured = index === 0

            return (
              <motion.figure
                key={photo.file}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.06,
                }}
                className={`photo-card group relative overflow-hidden ${
                  featured
                    ? 'sm:col-span-2 md:col-span-3 md:row-span-2 aspect-[4/3]'
                    : 'sm:col-span-1 md:col-span-1 aspect-[4/3]'
                }`}
              >

                <img
                  src={src}
                  alt={photo.title}
                  loading="lazy"
                  className="school-image h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#090908]/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* PHOTO TITLE - DUSTY ROSE */}

                <figcaption className="absolute bottom-0 left-0 right-0 translate-y-2 p-4 text-sm font-medium !text-[#C98F9A] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {photo.title}
                </figcaption>

              </motion.figure>
            )
          })}

        </div>

        {/* Gallery link */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 text-center md:mt-14"
        >
          <a
            href="/gallery"
            className="gold-hover inline-flex items-center gap-2 text-sm font-medium text-charcoal"
          >
            View the complete gallery
            <span>→</span>
          </a>
        </motion.div>

      </div>
    </section>
  )
}