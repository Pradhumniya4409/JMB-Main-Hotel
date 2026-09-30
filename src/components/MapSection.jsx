import { MapPin, Navigation } from 'lucide-react'

export default function MapSection({ address, mapUrl }) {
  return (
    <div className="bg-ivory-warm p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
      <div className="flex items-start gap-4">
        <MapPin className="text-champagne-dark shrink-0 mt-1" size={24} />
        <div>
          <h4 className="font-display text-xl text-charcoal mb-1">Location</h4>
          <p className="text-sm text-charcoal/65 max-w-md leading-relaxed">{address}</p>
        </div>
      </div>
      {mapUrl && (
        <a href={mapUrl} target="_blank" rel="noreferrer" className="btn-dark shrink-0">
          <Navigation size={16} />
          Get Directions
        </a>
      )}
    </div>
  )
}
