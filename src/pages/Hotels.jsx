import { useState } from 'react'
import HotelCard from '../components/HotelCard'
import ScrollReveal from '../components/ScrollReveal'
import useSEO from '../utils/useSEO'
import { getAllHotels, getCities } from '../utils/hotelHelpers'

export default function Hotels() {
  useSEO({
    title: 'All Hotels',
    description: 'Browse every JMB Hotels property across Indore and Dewas.',
    path: '/hotels',
  })

  const [filter, setFilter] = useState('all')
  const cities = getCities()
  const hotels = getAllHotels().filter((h) => filter === 'all' || h.citySlug === filter)

  return (
    <div className="pt-32 pb-24">
      <div className="container-edit">
        <ScrollReveal className="max-w-xl mb-10">
          <p className="eyebrow mb-3">Every Property</p>
          <h1 className="font-display text-5xl text-charcoal">All Hotels</h1>
        </ScrollReveal>

        <div className="flex flex-wrap items-center gap-3 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-5 py-2 text-sm tracking-wide border transition-colors duration-300 ${
              filter === 'all' ? 'bg-charcoal text-ivory border-charcoal' : 'border-charcoal/20 text-charcoal/70 hover:border-champagne-dark'
            }`}
          >
            All Cities
          </button>
          {cities.map((c) => (
            <button
              key={c.slug}
              onClick={() => setFilter(c.slug)}
              className={`px-5 py-2 text-sm tracking-wide border transition-colors duration-300 ${
                filter === c.slug ? 'bg-charcoal text-ivory border-charcoal' : 'border-charcoal/20 text-charcoal/70 hover:border-champagne-dark'
              }`}
            >
              {c.name} ({c.hotelCount})
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((hotel, i) => (
            <ScrollReveal key={hotel.slug} delay={(i % 3) * 0.1}>
              <HotelCard hotel={hotel} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  )
}
