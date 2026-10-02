import { Phone, Mail, MapPin } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import useSEO from '../utils/useSEO'
import { ownerPhone } from '../data/contact'
import { formatPhone, phoneHref } from '../utils/phone'

export default function Contact() {
  useSEO({
    title: 'Contact Us',
    description: 'Contact the JMB Hotels group by phone or email.',
    path: '/contact',
  })

  return (
    <div className="pt-32 pb-24">
      <div className="container-edit">
        <ScrollReveal className="max-w-xl mb-14">
          <p className="eyebrow mb-3">Get in Touch</p>
          <h1 className="font-display text-5xl text-charcoal">Contact Us</h1>
          <p className="text-charcoal/60 mt-4 leading-relaxed">
            For general enquiries, reach the JMB Hotels group by phone or email.
            For branch-specific information, visit the{' '}
            <a href="/locations" className="text-champagne-dark hover:text-champagne">branches page</a>.
            {' '}You can also email{' '}
            <a href="mailto:jmbhotel01@gmail.com" className="text-champagne-dark hover:text-champagne">jmbhotel01@gmail.com</a>.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl">
          <ScrollReveal className="border border-charcoal/10 p-7">
            <Phone className="mb-5 text-champagne-dark" size={22} />
            <h2 className="font-display text-xl text-charcoal mb-2">Call Us</h2>
            <a href={phoneHref(ownerPhone)} className="text-sm text-charcoal/65 hover:text-champagne-dark">
              {formatPhone(ownerPhone)}
            </a>
          </ScrollReveal>
          <ScrollReveal delay={0.08} className="border border-charcoal/10 p-7">
            <Mail className="mb-5 text-champagne-dark" size={22} />
            <h2 className="font-display text-xl text-charcoal mb-2">Email Us</h2>
            <a href="mailto:jmbhotel01@gmail.com" className="text-sm text-charcoal/65 hover:text-champagne-dark">
              jmbhotel01@gmail.com
            </a>
          </ScrollReveal>
          <ScrollReveal className="sm:col-span-2 border border-charcoal/10 p-7">
            <MapPin className="mb-5 text-champagne-dark" size={22} />
            <h2 className="font-display text-xl text-charcoal mb-2">Our Locations</h2>
            <p className="text-sm text-charcoal/65">Indore &amp; Dewas, Madhya Pradesh</p>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}
