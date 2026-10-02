import { Link, useParams } from 'react-router-dom'
import { ChevronRight, Phone, MessageCircle, ExternalLink, Check, Clock } from 'lucide-react'
import Hero from '../components/Hero'
import HotelGallery from '../components/HotelGallery'
import RoomCard, { RoomsComingSoon } from '../components/RoomCard'
import ReviewSection from '../components/ReviewSection'
import SocialSection from '../components/SocialSection'
import MapSection from '../components/MapSection'
import MobileBottomBar from '../components/MobileBottomBar'
import CTASection from '../components/CTASection'
import ScrollReveal from '../components/ScrollReveal'
import useSEO from '../utils/useSEO'
import { getHotelBySlug } from '../utils/hotelHelpers'
import { formatPhone, phoneHref } from '../utils/phone'
import NotFound from './NotFound'

export default function HotelDetails() {
  const { hotelSlug } = useParams()
  const hotel = getHotelBySlug(hotelSlug)

  useSEO({
    title: hotel?.name,
    description: hotel?.description,
    path: `/hotels/${hotelSlug}`,
  })

  if (!hotel) return <NotFound />

  const waHref = `https://wa.me/${hotel.whatsappNumber}?text=${encodeURIComponent(
    `Hi, I would like to enquire about a stay at ${hotel.name}.`
  )}`

  return (
    <div className="pb-16 md:pb-0">
      <Hero
        poster={hotel.heroImage}
        video={hotel.heroVideo}
        eyebrow={`${hotel.area}, ${hotel.city}`}
        title={hotel.name}
        subtitle={hotel.tagline}
        height="h-[72vh]"
      >
        <a href={phoneHref(hotel.phone)} className="btn-primary">
          <Phone size={16} /> Call Hotel
        </a>
        <a href={waHref} target="_blank" rel="noreferrer" className="btn-outline">
          <MessageCircle size={16} /> WhatsApp
        </a>
        {hotel.officialWebsite && (
          <a href={hotel.officialWebsite} target="_blank" rel="noreferrer" className="btn-outline">
            <ExternalLink size={16} /> Official Website
          </a>
        )}
      </Hero>

      <div className="container-edit pt-8">
        <nav className="flex items-center gap-2 text-xs text-charcoal/45 flex-wrap">
          <Link to="/hotels" className="hover:text-champagne-dark">Hotels</Link>
          <ChevronRight size={13} />
          <Link to={`/locations/${hotel.citySlug}`} className="hover:text-champagne-dark">{hotel.city}</Link>
          <ChevronRight size={13} />
          <span className="text-charcoal/70">{hotel.name}</span>
        </nav>
      </div>

      {/* About */}
      <section className="container-edit py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <ScrollReveal>
            <p className="eyebrow mb-3">About the Hotel</p>
            <h2 className="font-display text-3xl md:text-4xl text-charcoal mb-6">{hotel.name}</h2>
            <p className="text-charcoal/65 leading-relaxed max-w-prose">{hotel.description}</p>
          </ScrollReveal>
        </div>
        <ScrollReveal delay={0.1} className="border border-charcoal/10 p-7 h-fit">
          <h4 className="font-display text-lg text-charcoal mb-5">Hotel Information</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex justify-between gap-4">
              <span className="text-charcoal/50">Address</span>
              <span className="text-charcoal/80 text-right">{hotel.address}</span>
            </li>
            <li className="flex justify-between gap-4">
              <span className="text-charcoal/50">Phone</span>
              <a href={phoneHref(hotel.phone)} className="text-champagne-dark hover:text-champagne">{formatPhone(hotel.phone)}</a>
            </li>
            {hotel.email && (
              <li className="flex justify-between gap-4">
                <span className="text-charcoal/50">Email</span>
                <a href={`mailto:${hotel.email}`} className="text-champagne-dark hover:text-champagne break-all text-right">{hotel.email}</a>
              </li>
            )}
            <li className="flex justify-between gap-4 items-start">
              <span className="text-charcoal/50 flex items-center gap-1.5"><Clock size={14} /> Check-in</span>
              <span className="text-charcoal/80">{hotel.checkIn}</span>
            </li>
            <li className="flex justify-between gap-4 items-start">
              <span className="text-charcoal/50 flex items-center gap-1.5"><Clock size={14} /> Check-out</span>
              <span className="text-charcoal/80">{hotel.checkOut}</span>
            </li>
          </ul>
        </ScrollReveal>
      </section>

      {/* Gallery */}
      {hotel.images?.length > 0 && (
        <section className="container-edit pb-16">
          <ScrollReveal>
            <p className="eyebrow mb-3">Gallery</p>
            <h2 className="font-display text-3xl md:text-4xl text-charcoal mb-8">A Closer Look</h2>
            <HotelGallery images={hotel.images} hotelName={hotel.name} />
          </ScrollReveal>
        </section>
      )}

      {/* Rooms */}
      <section className="bg-ivory-warm py-16">
        <div className="container-edit">
          <ScrollReveal>
            <p className="eyebrow mb-3">Stay</p>
            <h2 className="font-display text-3xl md:text-4xl text-charcoal mb-8">Rooms</h2>
            {hotel.rooms?.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {hotel.rooms.map((r) => <RoomCard key={r.name} room={r} />)}
              </div>
            ) : (
              <RoomsComingSoon />
            )}
          </ScrollReveal>
        </div>
      </section>

      {/* Amenities */}
      {hotel.amenities?.length > 0 && (
        <section className="container-edit py-16">
          <ScrollReveal>
            <p className="eyebrow mb-3">Comfort &amp; Convenience</p>
            <h2 className="font-display text-3xl md:text-4xl text-charcoal mb-8">Amenities</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {hotel.amenities.map((a) => (
                <div key={a} className="flex items-center gap-2.5 border border-charcoal/10 px-4 py-3.5 text-sm text-charcoal/75">
                  <Check size={16} className="text-champagne-dark shrink-0" />
                  {a}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>
      )}

      {/* Map */}
      <section className="container-edit pb-16">
        <ScrollReveal>
          <MapSection address={hotel.address} mapUrl={hotel.mapUrl} />
        </ScrollReveal>
      </section>

      {/* Nearby */}
      {hotel.nearbyPlaces?.length > 0 && (
        <section className="container-edit pb-16">
          <ScrollReveal>
            <p className="eyebrow mb-3">Around the Hotel</p>
            <h2 className="font-display text-3xl md:text-4xl text-charcoal mb-6">Nearby Places</h2>
            <div className="flex flex-wrap gap-3">
              {hotel.nearbyPlaces.map((p) => (
                <span key={p} className="text-sm px-4 py-2 border border-charcoal/10 text-charcoal/70">{p}</span>
              ))}
            </div>
          </ScrollReveal>
        </section>
      )}

      {/* Reviews */}
      <section className="bg-ivory-warm py-16">
        <div className="container-edit">
          <ScrollReveal>
            <ReviewSection
              reviews={hotel.reviews}
              rating={hotel.rating}
              reviewCount={hotel.reviewCount}
              googleUrl={hotel.socialLinks?.google}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Social */}
      <section className="container-edit py-16">
        <ScrollReveal>
          <SocialSection socialLinks={hotel.socialLinks} whatsappNumber={hotel.whatsappNumber} />
        </ScrollReveal>
      </section>

      <CTASection
        eyebrow={hotel.name}
        title={`Ready to stay at ${hotel.name}?`}
        subtitle="Send a booking enquiry and the property will confirm your dates directly."
        primary={{ label: 'Send Booking Enquiry', to: `/booking?hotel=${hotel.slug}` }}
        secondary={{ label: 'Back to All Hotels', to: '/hotels' }}
      />

      <MobileBottomBar phone={hotel.phone} whatsappNumber={hotel.whatsappNumber} hotelSlug={hotel.slug} />
    </div>
  )
}
