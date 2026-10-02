import { Phone, MessageCircle, CalendarCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { phoneHref } from '../utils/phone'

export default function MobileBottomBar({ phone, whatsappNumber, hotelSlug }) {
  const waHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    'Hi, I would like to enquire about a room.'
  )}`

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 grid grid-cols-3 bg-charcoal border-t border-ivory/10">
      <a href={phoneHref(phone)} className="flex flex-col items-center justify-center gap-1 py-3 text-ivory/85 border-r border-ivory/10">
        <Phone size={18} />
        <span className="text-[11px] tracking-wide">Call</span>
      </a>
      <a href={waHref} target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center gap-1 py-3 text-ivory/85 border-r border-ivory/10">
        <MessageCircle size={18} />
        <span className="text-[11px] tracking-wide">WhatsApp</span>
      </a>
      <Link to={`/booking?hotel=${hotelSlug}`} className="flex flex-col items-center justify-center gap-1 py-3 bg-champagne text-charcoal">
        <CalendarCheck size={18} />
        <span className="text-[11px] tracking-wide font-semibold">Book</span>
      </Link>
    </div>
  )
}
