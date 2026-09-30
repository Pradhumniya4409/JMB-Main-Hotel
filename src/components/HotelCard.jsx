import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, ArrowUpRight } from 'lucide-react'

export default function HotelCard({ hotel, featured = false }) {
  return (
    <Link
      to={`/hotels/${hotel.slug}`}
      className={`group block ${featured ? 'md:col-span-2' : ''}`}
    >
      <div className={`relative overflow-hidden ${featured ? 'aspect-[16/10]' : 'aspect-[4/5]'}`}>
        <motion.img
          src={hotel.heroImage}
          alt={hotel.name}
          className="h-full w-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/0 to-transparent" />
        <span className="absolute top-5 left-5 flex items-center gap-1.5 text-[11px] tracking-widest2 uppercase text-ivory/90 bg-charcoal/40 backdrop-blur-sm px-3 py-1.5">
          <MapPin size={12} />
          {hotel.city}
        </span>
      </div>
      <div className="pt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-xl md:text-2xl text-charcoal group-hover:text-brown transition-colors">
            {hotel.name}
          </h3>
          <p className="text-sm text-charcoal/55 mt-1">{hotel.area}, {hotel.city}</p>
        </div>
        <ArrowUpRight
          size={20}
          className="mt-1 shrink-0 text-charcoal/30 transition-all duration-300 group-hover:text-champagne-dark group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </div>
    </Link>
  )
}
