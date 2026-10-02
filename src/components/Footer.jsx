import { Link } from 'react-router-dom'
import { Instagram, MapPin, Phone, Mail } from 'lucide-react'
import { ownerPhone } from '../data/contact'
import { formatPhone, phoneHref } from '../utils/phone'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory/80 pt-20 pb-10">
      <div className="container-edit grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 border-b border-ivory/10 pb-14">
        <div>
          <img
            src="/media/hotels/jmb-hotels-logo.png"
            alt="JMB Hotels — Jay Maa Bayan Group of Hotels"
            className="mb-5 h-24 w-24 object-contain"
          />
          <p className="text-sm leading-relaxed max-w-xs">
            Jay Maa Bayan Group of Hotels — comfortable stays, convenient locations and warm
            hospitality across Indore and Dewas.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <a href="https://www.instagram.com/hotelsoniindore" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-ivory/70 hover:text-champagne-light transition-colors">
              <Instagram size={19} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg text-ivory mb-5">Explore</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-champagne-light transition-colors">Home</Link></li>
            <li><Link to="/locations" className="hover:text-champagne-light transition-colors">Branches</Link></li>
            <li><Link to="/about" className="hover:text-champagne-light transition-colors">About JMB</Link></li>
            <li><Link to="/contact" className="hover:text-champagne-light transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-ivory mb-5">Reach Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <Phone size={16} className="mt-0.5 text-champagne-light shrink-0" />
              <a href={phoneHref(ownerPhone)} className="hover:text-champagne-light transition-colors">{formatPhone(ownerPhone)}</a>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={16} className="mt-0.5 text-champagne-light shrink-0" />
              <a href="mailto:jmbhotel01@gmail.com" className="hover:text-champagne-light transition-colors">jmbhotel01@gmail.com</a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 text-champagne-light shrink-0" />
              <span>Indore &amp; Dewas, Madhya Pradesh</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-edit pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-ivory/45">
        <p>&copy; {new Date().getFullYear()} JMB Hotels — Jay Maa Bayan Group. All rights reserved.</p>
      </div>
    </footer>
  )
}
