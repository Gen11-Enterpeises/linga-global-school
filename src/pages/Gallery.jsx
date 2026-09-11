import robotics from '../assets/robotics.jpg'
import mathslab from '../assets/mathslab.jpg'
import track from '../assets/track.jpg'
import outplay from '../assets/outplay.jpg'
import indoorplay1 from '../assets/indoorplay1.jpg'
import indoorplay2 from '../assets/indoorplay2.jpg'
import dance from '../assets/dance.jpg'
import building from '../assets/building.jpg'
import ceremony from '../assets/ceremony.jpg'

const IMAGES = [
  building, robotics, mathslab, track, outplay,
  indoorplay1, indoorplay2, dance, ceremony,
]

export default function Gallery() {
  return (
    <>
      <section className="px-5 md:px-8 pt-28 md:pt-36 pb-8 bg-bone">
        <h1 className="font-display text-4xl md:text-6xl text-charcoal mx-auto max-w-7xl">Gallery</h1>
      </section>
      <section className="px-5 md:px-8 pb-24 bg-bone">
        <div className="mx-auto max-w-7xl columns-2 md:columns-3 gap-3 md:gap-4 [&>*]:mb-3 md:[&>*]:mb-4">
          {IMAGES.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              className="w-full rounded-sm break-inside-avoid hover:opacity-90 transition-opacity"
            />
          ))}
        </div>
      </section>
    </>
  )
}
