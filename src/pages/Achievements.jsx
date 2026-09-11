import cutting from '../assets/ceremony.jpg'
import building from '../assets/building.jpg'

export default function Achievements() {
  return (
    <>
      <section className="relative h-[46vh] min-h-[320px] -mt-16 md:-mt-20 overflow-hidden">
        <img src={building} alt="Linga Global School" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/60" />
        <div className="relative h-full flex items-end pb-12 px-5 md:px-8">
          <h1 className="font-display text-bone text-4xl md:text-6xl mx-auto max-w-7xl w-full">Achievements</h1>
        </div>
      </section>

      <section className="px-5 md:px-8 py-20 md:py-28 bg-bone">
        <div className="mx-auto max-w-5xl">
          <img src={cutting} alt="Campus inauguration" className="w-full aspect-[16/7] object-cover rounded-sm mb-10" />
          <p className="text-charcoal/70 text-[15px] md:text-base leading-relaxed max-w-xl">
            Student and school achievements — academic, sport, and cultural — will be
            added here as the school shares results and event photos. This page is
            built and ready to receive that content.
          </p>
        </div>
      </section>
    </>
  )
}
