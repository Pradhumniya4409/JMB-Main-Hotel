import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search } from 'lucide-react'
import { getCities, getAreasByCity, getHotelsByArea, getHotelsByCity } from '../utils/hotelHelpers'

export default function BookingSearch({ className = '' }) {
  const navigate = useNavigate()
  const cities = useMemo(() => getCities(), [])
  const [citySlug, setCitySlug] = useState('')
  const [areaSlug, setAreaSlug] = useState('')
  const [hotelSlug, setHotelSlug] = useState('')

  const areas = citySlug ? getAreasByCity(citySlug) : []
  const hotelOptions = citySlug
    ? areaSlug
      ? getHotelsByArea(citySlug, areaSlug)
      : getHotelsByCity(citySlug)
    : []

  const handleSubmit = (e) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (citySlug) params.set('city', citySlug)
    if (areaSlug) params.set('area', areaSlug)
    if (hotelSlug) params.set('hotel', hotelSlug)
    navigate(`/booking?${params.toString()}`)
  }

  const selectClass =
    'w-full bg-transparent text-sm text-charcoal py-1 outline-none appearance-none cursor-pointer'

  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-cream shadow-soft grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_auto] gap-5 md:gap-0 md:divide-x divide-charcoal/10 p-6 md:p-3 md:pl-8 ${className}`}
    >
      <label className="flex flex-col md:px-5">
        <span className="text-[11px] tracking-widest2 uppercase text-charcoal/50 mb-1">City</span>
        <select
          className={selectClass}
          value={citySlug}
          onChange={(e) => {
            setCitySlug(e.target.value)
            setAreaSlug('')
            setHotelSlug('')
          }}
        >
          <option value="">Any city</option>
          {cities.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.name} — {c.hotelCount} Hotel{c.hotelCount > 1 ? 's' : ''}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col md:px-5">
        <span className="text-[11px] tracking-widest2 uppercase text-charcoal/50 mb-1">Area</span>
        <select
          className={selectClass}
          value={areaSlug}
          onChange={(e) => {
            setAreaSlug(e.target.value)
            setHotelSlug('')
          }}
          disabled={!citySlug}
        >
          <option value="">Any area</option>
          {areas.map((a) => (
            <option key={a.slug} value={a.slug}>
              {a.name}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col md:px-5">
        <span className="text-[11px] tracking-widest2 uppercase text-charcoal/50 mb-1">Hotel</span>
        <select
          className={selectClass}
          value={hotelSlug}
          onChange={(e) => setHotelSlug(e.target.value)}
          disabled={!citySlug}
        >
          <option value="">Any hotel</option>
          {hotelOptions.map((h) => (
            <option key={h.slug} value={h.slug}>
              {h.name}
            </option>
          ))}
        </select>
      </label>

      <button type="submit" className="btn-dark md:ml-4 rounded-none">
        <Search size={16} />
        <span>Check Availability</span>
      </button>
    </form>
  )
}
