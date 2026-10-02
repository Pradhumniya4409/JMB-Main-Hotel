import { Phone } from 'lucide-react'
import { ownerPhone } from '../data/contact'
import { formatPhone, phoneHref } from '../utils/phone'

export default function CallButton() {
  return (
    <a
      href={phoneHref(ownerPhone)}
      aria-label={`Call JMB Hotels at ${formatPhone(ownerPhone)}`}
      className="fixed bottom-40 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-champagne text-charcoal shadow-soft transition-transform duration-300 ease-editorial hover:scale-105 md:bottom-24"
    >
      <Phone size={24} />
    </a>
  )
}
