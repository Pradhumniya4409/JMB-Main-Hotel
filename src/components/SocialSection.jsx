import { Instagram, Facebook, MessageCircle, Star } from 'lucide-react'

const items = (links, whatsappNumber) => [
  {
    key: 'instagram',
    label: 'Instagram',
    icon: Instagram,
    href: links.instagram,
  },
  {
    key: 'facebook',
    label: 'Facebook',
    icon: Facebook,
    href: links.facebook,
  },
  {
    key: 'google',
    label: 'Google Reviews',
    icon: Star,
    href: links.google,
  },
  {
    key: 'whatsapp',
    label: 'WhatsApp',
    icon: MessageCircle,
    href: whatsappNumber ? `https://wa.me/${whatsappNumber}` : '',
  },
]

export default function SocialSection({ socialLinks = {}, whatsappNumber, dark = false }) {
  const list = items(socialLinks, whatsappNumber)

  return (
    <div className={dark ? 'text-ivory' : 'text-charcoal'}>
      <p className="eyebrow mb-3">Stay Connected</p>
      <h3 className="font-display text-3xl md:text-4xl mb-8">Connect with JMB</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {list.map(({ key, label, icon: Icon, href }) => {
          const active = Boolean(href)
          const base =
            'flex flex-col items-center justify-center gap-3 py-8 border transition-colors duration-300'
          const style = dark
            ? active
              ? 'border-ivory/20 hover:border-champagne text-ivory'
              : 'border-ivory/10 text-ivory/30 cursor-default'
            : active
            ? 'border-charcoal/10 hover:border-champagne-dark text-charcoal'
            : 'border-charcoal/10 text-charcoal/30 cursor-default'

          const content = (
            <>
              <Icon size={24} />
              <span className="text-xs tracking-wide">{active ? label : `${label} — Coming Soon`}</span>
            </>
          )

          return active ? (
            <a key={key} href={href} target="_blank" rel="noreferrer" className={`${base} ${style}`}>
              {content}
            </a>
          ) : (
            <div key={key} className={`${base} ${style}`}>
              {content}
            </div>
          )
        })}
      </div>
    </div>
  )
}
