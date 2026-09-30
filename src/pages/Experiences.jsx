import ScrollReveal from '../components/ScrollReveal'
import useSEO from '../utils/useSEO'
import { experiences } from '../data/hotels'
import { getCities } from '../utils/hotelHelpers'
import { Compass } from 'lucide-react'

export default function Experiences() {
  useSEO({
    title: 'Experiences',
    description: 'Verified local attractions near JMB Hotels in Indore and Dewas.',
    path: '/experiences',
  })
  const cities = getCities()

  return (
    <div className="pt-32 pb-24">
      <div className="container-edit">
        <ScrollReveal className="max-w-xl mb-16">
          <p className="eyebrow mb-3">Beyond the Room</p>
          <h1 className="font-display text-5xl text-charcoal">Experiences</h1>
          <p className="text-charcoal/60 mt-4 leading-relaxed">
            A guide to the places worth visiting near our hotels — every attraction listed here is
            verified, not invented.
          </p>
        </ScrollReveal>

        {cities.map((city) => {
          const list = experiences[city.slug] || []
          return (
            <div key={city.slug} className="mb-16">
              <ScrollReveal>
                <h2 className="font-display text-3xl text-charcoal mb-8 pb-4 border-b border-charcoal/10">
                  {city.name}
                </h2>
              </ScrollReveal>
              {list.length === 0 ? (
                <ScrollReveal className="flex items-center gap-3 text-charcoal/50">
                  <Compass size={20} className="text-champagne-dark" />
                  <p>Featured experiences for {city.name} coming soon.</p>
                </ScrollReveal>
              ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {list.map((e, i) => (
                    <ScrollReveal key={e.name} delay={(i % 3) * 0.08} className="border border-charcoal/10 p-6">
                      <h3 className="font-display text-xl text-charcoal mb-2">{e.name}</h3>
                      <p className="text-sm text-charcoal/60 leading-relaxed">{e.description}</p>
                    </ScrollReveal>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
