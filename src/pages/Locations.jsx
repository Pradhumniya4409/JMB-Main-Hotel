import ScrollReveal from '../components/ScrollReveal'
import useSEO from '../utils/useSEO'
import { getAllHotels } from '../utils/hotelHelpers'
import { formatPhone, phoneHref } from '../utils/phone'
import { Building2, ExternalLink, MapPin, Phone } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'

export default function Locations() {
  useSEO({
    title: 'Our Branches',
    description: 'Find JMB Hotels branches in Indore and Dewas, with addresses, maps and official websites.',
    path: '/locations',
  })
  const branchOrder = [
    'jmb-hotel-soni',
    'jmb-hotel-rana-palace',
    'hotel-gopala',
    'jmb-hotel-height',
    'hotel-relax-inn',
  ]
  const hotels = [...getAllHotels()].sort(
    (a, b) => branchOrder.indexOf(a.slug) - branchOrder.indexOf(b.slug),
  )
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="pt-32 pb-24">
      <div className="container-edit">
        <ScrollReveal className="max-w-xl mb-14">
          <p className="eyebrow mb-3">Indore &amp; Dewas</p>
          <h1 className="font-display text-5xl text-charcoal">Our Branches</h1>
          <p className="text-charcoal/60 mt-4 leading-relaxed">
            Choose a branch to see its location or visit its official website.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hotels.map((hotel, i) => (
            <ScrollReveal key={hotel.slug} delay={(i % 2) * 0.08}>
              <article className="flex h-full flex-col border border-charcoal/10 p-7 md:p-8">
                <div className="mb-6 aspect-[4/5] overflow-hidden bg-ivory-warm">
                  {hotel.branchImage ? (
                    <motion.img
                      src={hotel.branchImage}
                      alt={`${hotel.name} exterior`}
                      loading="lazy"
                      className="h-full w-full object-cover object-center"
                      whileHover={shouldReduceMotion ? undefined : { scale: 1.04 }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    />
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center bg-gradient-to-br from-ivory-warm to-champagne/15 text-charcoal/45">
                      <Building2 size={32} strokeWidth={1.3} />
                      <span className="mt-3 text-xs tracking-wide">Branch photo coming soon</span>
                    </div>
                  )}
                </div>
                <p className="text-xs tracking-widest2 uppercase text-champagne-dark mb-2">
                  {hotel.city}
                </p>
                <h2 className="font-display text-2xl text-charcoal">{hotel.name}</h2>
                <p className="mt-3 flex items-start gap-2 text-sm leading-relaxed text-charcoal/65">
                  <MapPin size={17} className="mt-0.5 shrink-0 text-champagne-dark" />
                  <span>{hotel.address}</span>
                </p>
                {hotel.phone && (
                  <p className="mt-3 flex items-center gap-2 text-sm">
                    <Phone size={16} className="shrink-0 text-champagne-dark" />
                    <a
                      href={phoneHref(hotel.phone)}
                      className="text-charcoal/70 transition-colors hover:text-champagne-dark"
                      aria-label={`Call ${hotel.name} at ${hotel.phone}`}
                    >
                      {formatPhone(hotel.phone)}
                    </a>
                  </p>
                )}
                <div className="mt-auto flex flex-wrap gap-3 pt-7">
                  {hotel.mapUrl && (
                    <a
                      href={hotel.mapUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-dark !px-5 !py-3 text-sm"
                    >
                      View Map <ExternalLink size={15} />
                    </a>
                  )}
                  {hotel.officialWebsite && (
                    <a
                      href={hotel.officialWebsite}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-outline !border-charcoal/20 !text-charcoal hover:!border-champagne-dark hover:!text-champagne-dark !px-5 !py-3 text-sm"
                    >
                      Official Website <ExternalLink size={15} />
                    </a>
                  )}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  )
}
