import building from '../assets/building.jpg'

const busRoutes = [
  {
    bus: 'Bus 1',
    route: 'Pudupatti, Kansapuram, Koomapatti',
  },
  {
    bus: 'Bus 2',
    route:
      'Rengapayanarkar Patti, Ramachandrapuram, Sundarapandiyam, Kottaiyoor, Ilanthaikulam',
  },
  {
    bus: 'Bus 3',
    route: 'Ramachandrapuram, Meenachipuram, Pudupatti',
  },
  {
    bus: 'Bus 4',
    route: 'Pattakulam, Malli, Saminatham, Thiruthangal',
  },
  {
    bus: 'Bus 5',
    route: 'Krishnankoil, Kunnur, Karisalkulam',
  },
  {
    bus: 'Bus 6',
    route: 'Watrap, Maharajapuram, Thambipatti',
  },
  {
    bus: 'Bus 7',
    route:
      'Krishnankoil, Srivilliputtur, Madavarvazhagam, Vanniyampatti, Chathirapatti',
  },
  {
    bus: 'Bus 8',
    route:
      'Krishnankoil, Srivilliputtur, Madavarvazhagam, Rajapalayam',
  },
  {
    bus: 'Bus 9',
    route:
      'Krishnankoil, Srivilliputtur, Kottaipatti, Mamsapuram',
  },
  {
    bus: 'Bus 10',
    route:
      'Krishnankoil, Valayapatti, Sallipatti, Mangalam, Erichanatham',
  },
  {
    bus: 'Bus 11',
    route: 'Krishnankoil, Peraiyur',
  },
  {
    bus: 'Bus 12',
    route: 'Krishnankoil, Transport Nagar, Ovani',
  },
  {
    bus: 'Bus 17',
    route: 'Peraiyur, Sali Santhai',
  },
  {
    bus: 'Bus 18',
    route:
      'Transport Nagar, Vellaipottal, Kadaineri, Moovaraivenran',
  },
]

const guidelines = [
  'School transport operates on designated routes. Parents should confirm route availability before opting for transport.',
  'A change of residence does not guarantee continuation of school transport if the new location is not covered.',
  'Students are expected to maintain proper discipline while travelling on the school bus.',
  'Students violating bus discipline rules may be removed from the transport service.',
  'Parents should ensure that their child reaches the assigned bus stop on time.',
  'Transport fees vary according to the route and distance. Detailed fee information can be obtained from the school office.',
]

export default function Transport() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[46vh] min-h-[320px] -mt-16 md:-mt-20 overflow-hidden">
        <img
          src={building}
          alt="Linga Global School"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-charcoal/65" />

        <div className="relative h-full flex items-end pb-12 px-5 md:px-8">
          <div className="mx-auto max-w-7xl w-full">
            <p className="text-[#C6A66B] text-sm tracking-[0.18em] uppercase mb-3">
              School Transportation
            </p>

            <h1 className="font-display text-bone text-4xl md:text-6xl">
              Transport
            </h1>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-5 md:px-8 py-20 md:py-24 bg-bone">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-[#C6A66B] text-sm tracking-[0.18em] uppercase mb-4">
              Safe & Convenient Travel
            </p>

            <h2 className="font-display text-3xl md:text-5xl text-charcoal leading-tight mb-6">
              Connecting students with the school through designated bus
              routes.
            </h2>

            <p className="text-charcoal/70 text-[15px] md:text-base leading-relaxed">
              Linga Global School provides school transportation across
              Krishnankoil and nearby areas through designated routes. Parents
              are requested to confirm route availability with the school
              office before opting for transport.
            </p>
          </div>
        </div>
      </section>

      {/* BUS ROUTES */}
      <section className="px-5 md:px-8 py-20 md:py-28 bg-[#FAF7F3]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="text-[#C6A66B] text-sm tracking-[0.18em] uppercase mb-3">
              Route Network
            </p>

            <h2 className="font-display text-bone text-3xl md:text-5xl">
              Bus Routes
            </h2>

            <div className="mt-5 h-[2px] w-12 bg-[#C6A66B]" />
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {busRoutes.map((item) => (
              <div
                key={item.bus}
                className="group rounded-2xl border border-[#292629]/10 bg-[#F1E9E3] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#C6A66B]/60 hover:bg-[#F1E9E3]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#C6A66B]/50 bg-[#C6A66B]/10 text-[#A87A2E] text-sm font-semibold">
                    {item.bus.replace('Bus ', '')}
                  </div>

                  <div>
                    <h3 className="text-bone text-lg font-semibold mb-2">
                      {item.bus}
                    </h3>

                    <p className="text-bone/65 text-sm leading-relaxed">
                      {item.route}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GUIDELINES */}
      <section className="px-5 md:px-8 py-20 md:py-28 bg-[#FAF7F3]">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl mb-12">
            <p className="text-[#C6A66B] text-sm tracking-[0.18em] uppercase mb-3">
              Important Information
            </p>

            <h2 className="font-display text-bone text-3xl md:text-5xl">
              Transport Guidelines
            </h2>

            <div className="mt-5 h-[2px] w-12 bg-[#C6A66B]" />
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {guidelines.map((guideline, index) => (
              <div
                key={index}
                className="group flex gap-5 rounded-2xl border border-[#292629]/10 bg-[#F1E9E3] p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#C6A66B]/50 hover:bg-[#F1E9E3]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C6A66B] text-[#292629] text-sm font-bold">
                  {index + 1}
                </span>

                <p className="text-bone/75 text-sm md:text-[15px] leading-relaxed">
                  {guideline}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="px-5 md:px-8 py-16 bg-[#F1E9E3] border-t border-[#292629]/10">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p className="text-[#C6A66B] text-sm tracking-[0.18em] uppercase mb-3">
              Need More Information?
            </p>

            <h2 className="font-display text-bone text-2xl md:text-3xl">
              Contact the school office for route details.
            </h2>
          </div>

          <a
            href="tel:+917373727290"
            className="inline-flex w-fit items-center justify-center rounded-full border border-[#C6A66B]/60 px-6 py-3 text-sm text-bone transition-all duration-300 hover:bg-[#D9BC85] hover:text-[#292629]"
          >
            +91 73737 27290
          </a>
        </div>
      </section>
    </>
  )
}