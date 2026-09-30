import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import useSEO from '../utils/useSEO'
import { getCities, getAreasByCity, getHotelsByCity, getHotelsByArea, getHotelBySlug } from '../utils/hotelHelpers'

const emptyForm = {
  city: '', area: '', hotel: '', checkIn: '', checkOut: '', guests: 1, rooms: 1,
  name: '', phone: '', email: '', message: '',
}

export default function Booking() {
  useSEO({
    title: 'Booking Enquiry',
    description: 'Send a booking enquiry to any JMB Hotels property in Indore or Dewas.',
    path: '/booking',
  })

  const [params] = useSearchParams()
  const cities = useMemo(() => getCities(), [])
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const hotelSlug = params.get('hotel')
    const citySlug = params.get('city')
    const areaSlug = params.get('area')
    if (hotelSlug) {
      const h = getHotelBySlug(hotelSlug)
      if (h) {
        setForm((f) => ({ ...f, city: h.citySlug, area: h.areaSlug, hotel: h.slug }))
        return
      }
    }
    if (citySlug) setForm((f) => ({ ...f, city: citySlug, area: areaSlug || '' }))
  }, [params])

  const areas = form.city ? getAreasByCity(form.city) : []
  const hotelOptions = form.city
    ? form.area
      ? getHotelsByArea(form.city, form.area)
      : getHotelsByCity(form.city)
    : []

  const update = (field, value) => {
    setForm((f) => {
      const next = { ...f, [field]: value }
      if (field === 'city') { next.area = ''; next.hotel = '' }
      if (field === 'area') { next.hotel = '' }
      return next
    })
  }

  const validate = () => {
    const e = {}
    if (!form.city) e.city = 'Select a city'
    if (!form.hotel) e.hotel = 'Select a hotel'
    if (!form.checkIn) e.checkIn = 'Select a check-in date'
    if (!form.checkOut) e.checkOut = 'Select a check-out date'
    if (form.checkIn && form.checkOut && form.checkOut <= form.checkIn) e.checkOut = 'Must be after check-in'
    if (!form.name.trim()) e.name = 'Enter your name'
    if (!form.phone.trim() || !/^[+\d][\d\s-]{7,}$/.test(form.phone.trim())) e.phone = 'Enter a valid phone number'
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Enter a valid email'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) setSubmitted(true)
  }

  const inputClass = (field) =>
    `w-full border bg-transparent px-4 py-3 text-sm outline-none transition-colors ${
      errors[field] ? 'border-red-400' : 'border-charcoal/15 focus:border-champagne-dark'
    }`

  if (submitted) {
    const hotel = getHotelBySlug(form.hotel)
    return (
      <div className="pt-40 pb-28 container-edit">
        <ScrollReveal className="max-w-lg mx-auto text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <CheckCircle2 className="mx-auto text-champagne-dark mb-6" size={52} strokeWidth={1.3} />
          </motion.div>
          <h1 className="font-display text-3xl md:text-4xl text-charcoal mb-4">Enquiry Sent</h1>
          <p className="text-charcoal/60 leading-relaxed">
            Thank you, {form.name.split(' ')[0]}. Your booking enquiry for{' '}
            {hotel ? hotel.name : 'JMB Hotels'} has been received. The property will contact you
            directly at {form.phone} to confirm availability and rates.
          </p>
          <button
            onClick={() => { setForm(emptyForm); setSubmitted(false) }}
            className="btn-dark mt-9"
          >
            Send Another Enquiry
          </button>
        </ScrollReveal>
      </div>
    )
  }

  return (
    <div className="pt-32 pb-24">
      <div className="container-edit max-w-3xl">
        <ScrollReveal className="mb-12">
          <p className="eyebrow mb-3">City → Area → Hotel</p>
          <h1 className="font-display text-5xl text-charcoal">Booking Enquiry</h1>
          <p className="text-charcoal/60 mt-4 leading-relaxed">
            This is a booking enquiry, not an instant reservation. The hotel confirms your dates
            and rate directly.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <form onSubmit={handleSubmit} noValidate className="space-y-10">
            <div>
              <h3 className="font-display text-xl text-charcoal mb-5">Choose Your Stay</h3>
              <div className="grid sm:grid-cols-3 gap-5">
                <div>
                  <label className="text-xs tracking-wide text-charcoal/50 mb-1.5 block">City *</label>
                  <select className={inputClass('city')} value={form.city} onChange={(e) => update('city', e.target.value)}>
                    <option value="">Select city</option>
                    {cities.map((c) => <option key={c.slug} value={c.slug}>{c.name}</option>)}
                  </select>
                  {errors.city && <p className="text-xs text-red-500 mt-1">{errors.city}</p>}
                </div>
                <div>
                  <label className="text-xs tracking-wide text-charcoal/50 mb-1.5 block">Area</label>
                  <select className={inputClass('area')} value={form.area} onChange={(e) => update('area', e.target.value)} disabled={!form.city}>
                    <option value="">Any area</option>
                    {areas.map((a) => <option key={a.slug} value={a.slug}>{a.name}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs tracking-wide text-charcoal/50 mb-1.5 block">Hotel *</label>
                  <select className={inputClass('hotel')} value={form.hotel} onChange={(e) => update('hotel', e.target.value)} disabled={!form.city}>
                    <option value="">Select hotel</option>
                    {hotelOptions.map((h) => <option key={h.slug} value={h.slug}>{h.name}</option>)}
                  </select>
                  {errors.hotel && <p className="text-xs text-red-500 mt-1">{errors.hotel}</p>}
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-display text-xl text-charcoal mb-5">Dates &amp; Guests</h3>
              <div className="grid sm:grid-cols-4 gap-5">
                <div>
                  <label className="text-xs tracking-wide text-charcoal/50 mb-1.5 block">Check-in *</label>
                  <input type="date" className={inputClass('checkIn')} value={form.checkIn} onChange={(e) => update('checkIn', e.target.value)} />
                  {errors.checkIn && <p className="text-xs text-red-500 mt-1">{errors.checkIn}</p>}
                </div>
                <div>
                  <label className="text-xs tracking-wide text-charcoal/50 mb-1.5 block">Check-out *</label>
                  <input type="date" className={inputClass('checkOut')} value={form.checkOut} onChange={(e) => update('checkOut', e.target.value)} />
                  {errors.checkOut && <p className="text-xs text-red-500 mt-1">{errors.checkOut}</p>}
                </div>
                <div>
                  <label className="text-xs tracking-wide text-charcoal/50 mb-1.5 block">Guests</label>
                  <input type="number" min="1" className={inputClass('guests')} value={form.guests} onChange={(e) => update('guests', e.target.value)} />
                </div>
                <div>
                  <label className="text-xs tracking-wide text-charcoal/50 mb-1.5 block">Rooms</label>
                  <input type="number" min="1" className={inputClass('rooms')} value={form.rooms} onChange={(e) => update('rooms', e.target.value)} />
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-display text-xl text-charcoal mb-5">Your Details</h3>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs tracking-wide text-charcoal/50 mb-1.5 block">Full Name *</label>
                  <input type="text" className={inputClass('name')} value={form.name} onChange={(e) => update('name', e.target.value)} />
                  {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="text-xs tracking-wide text-charcoal/50 mb-1.5 block">Phone *</label>
                  <input type="tel" className={inputClass('phone')} value={form.phone} onChange={(e) => update('phone', e.target.value)} />
                  {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs tracking-wide text-charcoal/50 mb-1.5 block">Email</label>
                  <input type="email" className={inputClass('email')} value={form.email} onChange={(e) => update('email', e.target.value)} />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs tracking-wide text-charcoal/50 mb-1.5 block">Message</label>
                  <textarea rows={4} className={inputClass('message')} value={form.message} onChange={(e) => update('message', e.target.value)} placeholder="Any special requests?" />
                </div>
              </div>
            </div>

            <button type="submit" className="btn-primary w-full sm:w-auto">Send Booking Enquiry</button>
          </form>
        </ScrollReveal>
      </div>
    </div>
  )
}
