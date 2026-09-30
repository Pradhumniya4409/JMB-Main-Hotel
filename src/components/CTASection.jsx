import { Link } from 'react-router-dom'
import ScrollReveal from './ScrollReveal'

export default function CTASection({
  eyebrow = 'Book Direct',
  title = 'Your stay in Indore or Dewas starts here.',
  subtitle = 'Send a booking enquiry and the property will confirm your dates directly.',
  primary = { label: 'Book Your Stay', to: '/booking' },
  secondary = { label: 'Explore Hotels', to: '/hotels' },
}) {
  return (
    <section className="bg-charcoal py-24">
      <div className="container-edit text-center max-w-2xl mx-auto">
        <ScrollReveal>
          <p className="eyebrow mb-4">{eyebrow}</p>
          <h2 className="font-display text-4xl md:text-5xl text-ivory leading-tight">{title}</h2>
          <p className="text-ivory/70 mt-5 leading-relaxed">{subtitle}</p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link to={primary.to} className="btn-primary">
              {primary.label}
            </Link>
            {secondary && (
              <Link to={secondary.to} className="btn-outline">
                {secondary.label}
              </Link>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
