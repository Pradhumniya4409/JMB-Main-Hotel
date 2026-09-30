import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function CityCard({ city, image }) {
  return (
    <Link to={`/locations/${city.slug}`} className="group block relative">
      <div className="relative overflow-hidden aspect-[4/5]">
        <motion.img
          src={image}
          alt={city.name}
          className="h-full w-full object-cover"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/10 to-transparent" />
        <div className="absolute inset-0 p-7 flex flex-col justify-end">
          <div className="flex items-end justify-between">
            <div>
              <h3 className="font-display text-3xl text-ivory">{city.name}</h3>
              <p className="text-champagne-light text-sm mt-1 tracking-wide">
                {city.hotelCount} Hotel{city.hotelCount > 1 ? 's' : ''}
              </p>
            </div>
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/30 text-ivory transition-colors duration-300 group-hover:border-champagne group-hover:text-champagne-light">
              <ArrowUpRight size={18} />
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
