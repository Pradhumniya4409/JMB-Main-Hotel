import { Link, useParams } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import AreaCard from '../components/AreaCard'
import ScrollReveal from '../components/ScrollReveal'
import useSEO from '../utils/useSEO'
import { getCityBySlug, getAreasByCity } from '../utils/hotelHelpers'
import NotFound from './NotFound'

export default function CityPage() {
  const { citySlug } = useParams()
  const city = getCityBySlug(citySlug)

  useSEO({
    title: city ? `Hotels in ${city.name}` : 'City',
    description: city ? `Explore JMB Hotels areas and properties in ${city.name}.` : '',
    path: `/locations/${citySlug}`,
  })

  if (!city) return <NotFound />

  const areas = getAreasByCity(citySlug)

  return (
    <div className="pt-32 pb-24">
      <div className="container-edit">
        <nav className="flex items-center gap-2 text-xs text-charcoal/45 mb-8">
          <Link to="/locations" className="hover:text-champagne-dark">Locations</Link>
          <ChevronRight size={13} />
          <span className="text-charcoal/70">{city.name}</span>
        </nav>

        <ScrollReveal className="max-w-xl mb-6">
          <p className="eyebrow mb-3">{city.hotelCount} Hotel{city.hotelCount > 1 ? 's' : ''}</p>
          <h1 className="font-display text-5xl text-charcoal">{city.name}</h1>
          <p className="text-charcoal/60 mt-4 leading-relaxed">
            Choose an area of {city.name} to see the JMB properties there.
          </p>
        </ScrollReveal>

        <div className="mt-10 max-w-2xl">
          {areas.map((area, i) => (
            <ScrollReveal key={area.slug} delay={i * 0.08}>
              <AreaCard area={area} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  )
}
