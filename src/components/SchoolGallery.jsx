import { motion } from 'framer-motion'

/*
  Loads ALL image assets automatically.

  Future mein assets folder mein new photo add karoge,
  toh woh bhi automatically gallery mein aa jayegi.
*/

const allAssets = import.meta.glob(
  '../assets/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  {
    eager: true,
    query: '?url',
    import: 'default',
  }
)

/* -----------------------------------------
   CATEGORY LOGIC
----------------------------------------- */

function getCategory(fileName) {
  const name = fileName.toLowerCase()

  // ROBOTICS & INNOVATION
  if (
    name.includes('robot') ||
    name.includes('project') ||
    name.includes('innovativ') ||
    name.includes('mathslab') ||
    name.includes('maths lab')
  ) {
    return 'Robotics & Innovation'
  }

  // SPORTS
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

  // ACTIVITIES
  if (
    name.includes('dance') ||
    name.includes('fancy dress')
  ) {
    return 'Activities'
  }

  // CELEBRATIONS
  if (
    name.includes('teacher') ||
    name.includes('christmas') ||
    name.includes('diwali') ||
    name.includes('ceremony')
  ) {
    return 'Celebrations'
  }

  // STUDENT LIFE
  if (
    name.includes('student') ||
    name.includes('particip') ||
    name.includes('pledge') ||
    name.includes('prayer')
  ) {
    return 'Student Life'
  }

  // CAMPUS
  return 'Campus'
}

/* -----------------------------------------
   PREPARE ALL PHOTOS
----------------------------------------- */

const photos = Object.entries(allAssets)
  .filter(([path]) => {
    const fileName = path.split('/').pop()?.toLowerCase() || ''

    // Logo files are excluded because they are branding,
    // not school activity/campus photos.
    return !fileName.startsWith('logo')
  })
  .map(([path, image]) => {
    const fileName = path.split('/').pop() || ''

    const title = fileName
      .replace(/\.(jpg|jpeg|png|webp)$/i, '')
      .replace(/[-_]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()

    return {
      image,
      fileName,
      title,
      category: getCategory(fileName),
    }
  })

/* -----------------------------------------
   EXACT SIX CATEGORIES
----------------------------------------- */

const categories = [
  'Campus',
  'Robotics & Innovation',
  'Sports',
  'Activities',
  'Celebrations',
  'Student Life',
]

export default function SchoolGallery() {
  return (
    <section className="relative bg-[#090908] px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">

        {/* =================================
            HEADER
        ================================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#b8872f]">
            Life at Linga
          </p>

          <h2
            className="font-display max-w-4xl text-4xl leading-tight text-bone md:text-6xl"
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontWeight: 600,
            }}
          >
            Moments that make
            <span className="text-[#b8872f]"> Linga Global School.</span>
          </h2>

          <div className="mt-6 h-[2px] w-12 bg-[#b8872f]" />

          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-bone/55 md:text-base">
            Explore learning, innovation, sports, activities,
            celebrations and everyday student life across the campus.
          </p>
        </motion.div>

        {/* =================================
            SIX CATEGORIES
        ================================= */}

        <div className="space-y-28">
          {categories.map((category, categoryIndex) => {
            const categoryPhotos = photos.filter(
              (photo) => photo.category === category
            )

            // Don't show empty categories
            if (categoryPhotos.length === 0) {
              return null
            }

            return (
              <div key={category}>

                {/* CATEGORY HEADER */}

                <motion.div
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7 }}
                  className="mb-8 flex items-end justify-between gap-6"
                >
                  <div>
                    <p className="mb-2 text-xs uppercase tracking-[0.22em] text-[#b8872f]">
                      0{categoryIndex + 1}
                    </p>

                    <h3 className="font-display text-3xl text-bone md:text-4xl">
                      {category}
                    </h3>

                    <div className="mt-4 h-[2px] w-10 bg-[#b8872f]" />
                  </div>

                  <span className="hidden text-xs tracking-wide text-bone/35 sm:block">
                    {categoryPhotos.length}{' '}
                    {categoryPhotos.length === 1 ? 'photo' : 'photos'}
                  </span>
                </motion.div>

                {/* PHOTOS */}

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {categoryPhotos.map((photo, index) => (
                    <motion.div
                      key={photo.fileName}
                      initial={{
                        opacity: 0,
                        y: 30,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.1,
                      }}
                      transition={{
                        duration: 0.65,
                        delay: Math.min(index * 0.05, 0.3),
                      }}
                      className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#151412]"
                    >

                      {/* IMAGE */}

                      <img
                        src={photo.image}
                        alt={`${category} - ${photo.title}`}
                        loading="lazy"
                        className="h-[280px] w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                      />

                      {/* OVERLAY */}

                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />

                      {/* GOLD TOP LINE */}

                      <div className="absolute left-0 right-0 top-0 h-[2px] origin-left scale-x-0 bg-[#b8872f] transition-transform duration-500 group-hover:scale-x-100" />

                      {/* PHOTO TITLE */}

                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <p className="mb-1 text-[10px] uppercase tracking-[0.2em] text-[#c99a3a]">
                          {category}
                        </p>

                        <h4 className="font-display text-xl capitalize text-white">
                          {photo.title}
                        </h4>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* =================================
            TOTAL PHOTO COUNT
        ================================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 border-t border-white/10 pt-8 text-center"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-bone/35">
            {photos.length} moments from the Linga campus
          </p>
        </motion.div>

      </div>
    </section>
  )
}