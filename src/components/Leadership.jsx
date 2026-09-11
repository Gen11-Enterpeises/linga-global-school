import chairman from '../assets/chairman.jpg'
import secretary from '../assets/secretary.jpg'
import directorShasi from '../assets/director-shasi.jpg'
import directorArjun from '../assets/director-arjun.jpg'
import principal from '../assets/principal.jpg'

const PEOPLE = [
  { img: chairman, name: 'Dr. Arivalagi, M.B.B.S.', role: 'Chairman' },
  { img: secretary, name: 'Shri K. Sridharan', role: 'Secretary' },
  { img: directorShasi, name: 'Dr. Shasi Anand, Ph.D.', role: 'Director' },
  { img: directorArjun, name: 'Mr. Arjun Kalasalingam, MS (USA)', role: 'Director' },
  { img: principal, name: 'Mrs. Alka Sharma', role: 'Principal' },
]

export default function Leadership() {
  return (
    <section className="px-5 md:px-8 py-20 md:py-28 bg-charcoal">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-display text-3xl md:text-5xl text-bone max-w-md leading-tight mb-12 md:mb-16">
          Guided by people, not committees.
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
          {PEOPLE.map((p) => (
            <div key={p.name} className="flex flex-col items-center text-center">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-4 ring-1 ring-amber/30">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
              </div>
              <p className="text-bone text-sm md:text-base font-medium leading-snug">{p.name}</p>
              <p className="text-amber-soft text-xs md:text-sm mt-1">{p.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
