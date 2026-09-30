import { Link, useParams } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import HotelCard from '../components/HotelCard'
import ScrollReveal from '../components/ScrollReveal'
import useSEO from '../utils/useSEO'
import { getCityBySlug, getAreaBySlug, getHotelsByArea } from '../utils/hotelHelpers'
import NotFound from './NotFound'

export default function AreaPage() {
  const { citySlug, areaSlug } = useParams()
  const city = getCityBySlug(citySlug)
  const area = city ? getAreaBySlug(citySlug, areaSlug) : null

  useSEO({
    title: area ? `Hotels in ${area.name}, ${city.name}` : 'Area',
    description: area ? `JMB Hotels properties in ${area.name}, ${city.name}.` : '',
    path: `/locations/${citySlug}/${areaSlug}`,
  })

  if (!city || !area) return <NotFound />

  const hotels = getHotelsByArea(citySlug, areaSlug)

  return (
    <div className="pt-32 pb-24">
      <div className="container-edit">
        <nav className="flex items-center gap-2 text-xs text-charcoal/45 mb-8 flex-wrap">
          <Link to="/locations" className="hover:text-champagne-dark">Locations</Link>
          <ChevronRight size={13} />
          <Link to={`/locations/${citySlug}`} className="hover:text-champagne-dark">{city.name}</Link>
          <ChevronRight size={13} />
          <span className="text-charcoal/70">{area.name}</span>
        </nav>

        <ScrollReveal className="max-w-xl mb-14">
          <p className="eyebrow mb-3">{city.name}</p>
          <h1 className="font-display text-5xl text-charcoal">{area.name}</h1>
          <p className="text-charcoal/60 mt-4 leading-relaxed">
            {hotels.length} JMB propert{hotels.length > 1 ? 'ies' : 'y'} in {area.name}.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((hotel, i) => (
            <ScrollReveal key={hotel.slug} delay={i * 0.1}>
              <HotelCard hotel={hotel} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  )
}
