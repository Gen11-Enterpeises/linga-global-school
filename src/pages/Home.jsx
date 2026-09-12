import Hero from '../components/Hero'
import SchoolIntro from '../components/SchoolIntro'
import SchoolGallery from '../components/SchoolGallery'
import FacilitiesGallery from '../components/FacilitiesGallery'
import Legacy from '../components/Legacy'
import Leadership from '../components/Leadership'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <>
      <Hero />

      <SchoolIntro />

      <SchoolGallery />

      <FacilitiesGallery />

      <Legacy />

      <Leadership />

      <CTA />
    </>
  )
}