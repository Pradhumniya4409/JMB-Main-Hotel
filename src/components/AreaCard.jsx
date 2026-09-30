import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function AreaCard({ area }) {
  return (
    <Link
      to={`/locations/${area.citySlug}/${area.slug}`}
      className="group flex items-center justify-between border-t border-charcoal/10 py-7 transition-colors duration-300 hover:border-champagne"
    >
      <div>
        <h3 className="font-display text-2xl md:text-3xl text-charcoal group-hover:text-brown transition-colors">
          {area.name}
        </h3>
        <p className="text-sm text-charcoal/50 mt-1">
          {area.hotelCount} Hotel{area.hotelCount > 1 ? 's' : ''} available
        </p>
      </div>
      <ArrowRight
        size={22}
        className="text-charcoal/30 transition-all duration-300 group-hover:text-champagne-dark group-hover:translate-x-1"
      />
    </Link>
  )
}
