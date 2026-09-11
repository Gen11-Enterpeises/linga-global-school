import building from '../assets/building.jpg'

export default function Contact() {
  return (
    <>
      <section className="relative h-[46vh] min-h-[320px] -mt-16 md:-mt-20 overflow-hidden">
        <img src={building} alt="Linga Global School" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/60" />
        <div className="relative h-full flex items-end pb-12 px-5 md:px-8">
          <h1 className="font-display text-bone text-4xl md:text-6xl mx-auto max-w-7xl w-full">Contact</h1>
        </div>
      </section>

      <section className="px-5 md:px-8 py-16 md:py-24 bg-bone">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <div className="space-y-8">
              <div>
                <p className="text-clay text-sm mb-1.5">Address</p>
                <p className="text-charcoal text-[15px] md:text-base leading-relaxed">
                  Anand Nagar, Krishnankoil-626 126<br />
                  Srivilliputhur (T.K), Virudhunagar (Dt)<br />
                  Tamil Nadu, India
                </p>
              </div>
              <div>
                <p className="text-clay text-sm mb-1.5">Phone</p>
                <a href="tel:+917373727290" className="text-charcoal text-[15px] md:text-base hover:text-amber transition-colors">
                  +91 73737 27290
                </a>
              </div>
              <div>
                <p className="text-clay text-sm mb-1.5">Email</p>
                <a href="mailto:info@lingaschool.org" className="text-charcoal text-[15px] md:text-base hover:text-amber transition-colors">
                  info@lingaschool.org
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-sm overflow-hidden aspect-[4/3] md:aspect-auto md:h-full min-h-[280px]">
            <iframe
              title="Linga Global School location"
              src="https://www.google.com/maps?q=Linga+Global+School+Krishnankoil&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  )
}
