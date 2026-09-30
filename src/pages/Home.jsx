import Hero from '../components/Hero'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'
import HomeExperienceSection from '../components/HomeExperienceSection'
import useSEO from '../utils/useSEO'
import { getAllHotels } from '../utils/hotelHelpers'

const branchPhotos = [
  {
    name: 'JMB Hotel Soni',
    city: 'Indore',
    image: '/media/hotels/soni-exterior-tall.jpg',
    imageClass: 'object-top',
  },
  {
    name: 'Hotel Relax Inn',
    city: 'Dewas',
    image: '/media/hotels/relaxinn-exterior.jpg',
    imageClass: 'object-center',
  },
]

export default function Home() {
  const shouldReduceMotion = useReducedMotion()
  const heroBackgrounds = [
    '/media/demo/jmb-heritage-hero.png',
    ...getAllHotels().map((hotel) => hotel.branchImage).filter(Boolean),
  ].filter((image, index, array) => image && array.indexOf(image) === index)

  useSEO({
    title: 'JMB Hotels — Jay Maa Bayan Group of Hotels',
    description: 'Find JMB Hotels branches across Indore and Dewas, with addresses, maps and official hotel websites.',
    path: '/',
  })

  return (
    <div>
      <Hero
        poster="/media/demo/jmb-heritage-hero.png"
        backgroundImages={heroBackgrounds}
        video=""
        eyebrow="Jay Maa Bayan Group of Hotels"
        title={<>Find your<br />JMB branch.</>}
        subtitle="Explore our hotel branches in Indore and Dewas, and visit each property's official website."
      >
        <Link to="/locations" className="btn-primary">View Our Branches</Link>
        <Link to="/about" className="btn-outline">About JMB</Link>
      </Hero>

      <section className="container-edit py-24 md:py-32">
        <ScrollReveal className="mb-10 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="eyebrow mb-3">A Closer Look</p>
            <h2 className="font-display text-4xl text-charcoal md:text-5xl">A glimpse of our branches</h2>
          </div>
          <Link to="/locations" className="text-sm font-semibold text-champagne-dark transition-colors hover:text-champagne">
            Explore all branches
          </Link>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {branchPhotos.map((photo, index) => (
            <ScrollReveal key={photo.name} delay={index * 0.12}>
              <Link to="/locations" className="group relative block overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden bg-charcoal/10">
                  <motion.img
                    src={photo.image}
                    alt={`${photo.name} in ${photo.city}`}
                    loading="lazy"
                    className={`h-full w-full object-cover transition-transform duration-700 ease-editorial ${
                      photo.imageClass
                    }`}
                    whileHover={shouldReduceMotion ? undefined : { scale: 1.04 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 md:p-8">
                    <p className="text-xs uppercase tracking-widest2 text-champagne-light">{photo.city}</p>
                    <h3 className="mt-2 font-display text-2xl text-ivory md:text-3xl">{photo.name}</h3>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <HomeExperienceSection />

      <section className="container-edit py-24 md:py-32">
        <div className="max-w-2xl">
          <p className="eyebrow mb-3">Our Locations</p>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal">
            JMB branches in Indore and Dewas
          </h2>
          <p className="mt-5 leading-relaxed text-charcoal/65">
            Find a branch, check its address and open the official website where available.
            We keep the information here focused on locations, so you can get to the right
            property without sorting through room or booking details.
          </p>
          <Link to="/locations" className="btn-dark mt-8">See All Branches</Link>
        </div>
      </section>
    </div>
  )
}
