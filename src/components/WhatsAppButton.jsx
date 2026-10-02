import { MessageCircle } from 'lucide-react'
import { ownerWhatsApp } from '../data/contact'

// Falls back to the group's primary WhatsApp number when no hotel-specific
// number is supplied (e.g. on pages not scoped to one property).
export default function WhatsAppButton({ number = ownerWhatsApp, message = 'Hi, I would like to enquire about a stay at JMB Hotels.' }) {
  const href = `https://wa.me/${number}?text=${encodeURIComponent(message)}`
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-24 md:bottom-8 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft transition-transform duration-300 ease-editorial hover:scale-105"
    >
      <MessageCircle size={26} fill="white" className="text-[#25D366]" />
    </a>
  )
}
