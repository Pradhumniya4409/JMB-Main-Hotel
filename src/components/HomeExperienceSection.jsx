import {
  BatteryCharging,
  Car,
  Clock3,
  Instagram,
  MessageCircle,
  Sparkles,
  Utensils,
  Wifi,
} from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import { getAllHotels } from '../utils/hotelHelpers'
import { ownerWhatsApp } from '../data/contact'

const amenityIcons = {
  '24-Hour Front Desk': Clock3,
  'Room Service': Utensils,
  'Free Wi-Fi': Wifi,
  'Power Backup': BatteryCharging,
  Parking: Car,
  'Banquet Space': Sparkles,
}

export default function HomeExperienceSection() {
  const amenityHotels = new Map()

  getAllHotels().forEach((hotel) => {
    hotel.amenities.forEach((amenity) => {
      const properties = amenityHotels.get(amenity) || []
      properties.push(hotel.name)
      amenityHotels.set(amenity, properties)
    })
  })

  const socialLinks = [
    {
      label: 'Instagram · Hotel Soni',
      href: 'https://www.instagram.com/hotelsoniindore',
      icon: Instagram,
    },
    {
      label: 'Instagram · Hotel Height',
      href: 'https://www.instagram.com/jmb_hotel_height_indore?stkn=MXJ1NjNyMXAwZjNyaQ==',
      icon: Instagram,
    },
    {
      label: 'Instagram · Rana Palace',
      href: 'https://www.instagram.com/jmbhotelranapalace?stkn=MWJha3B3eHk2aWhlaw==',
      icon: Instagram,
    },
    {
      label: 'WhatsApp enquiries',
      href: `https://wa.me/${ownerWhatsApp}`,
      icon: MessageCircle,
    },
  ]

  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="container-edit">
        <ScrollReveal className="mx-auto mb-12 max-w-2xl text-center">
          <p className="eyebrow mb-3">The JMB Experience</p>
          <h2 className="font-display text-4xl text-charcoal md:text-5xl">Comforts across our branches</h2>
          <p className="mt-4 leading-relaxed text-charcoal/65">
            Explore amenities offered at JMB properties. Availability varies by branch.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[...amenityHotels.entries()].map(([amenity, properties], index) => {
            const Icon = amenityIcons[amenity] || Sparkles

            return (
              <ScrollReveal key={amenity} delay={index * 0.06}>
                <article className="flex h-full gap-5 border border-charcoal/10 bg-cream p-5 transition-colors duration-300 hover:border-champagne/70 md:p-6">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-champagne/40 bg-ivory text-champagne-dark">
                    <Icon size={21} strokeWidth={1.7} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-charcoal">{amenity}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-charcoal/60">
                      Available at {properties.join(', ')}.
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            )
          })}
        </div>

        <div className="mt-16 border-t border-charcoal/10 pt-12 text-center md:mt-20 md:pt-16">
          <ScrollReveal>
            <p className="eyebrow mb-3">Stay Connected</p>
            <h2 className="font-display text-3xl text-charcoal md:text-4xl">Reach JMB online</h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-charcoal/65">
              Follow our verified social page or message us with your enquiry.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 border border-charcoal/15 px-5 py-3 text-sm font-medium text-charcoal transition-colors hover:border-champagne-dark hover:text-champagne-dark"
                >
                  <Icon size={18} aria-hidden="true" />
                  {label}
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
