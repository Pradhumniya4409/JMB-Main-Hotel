import Hero from '../components/Hero'
import ScrollReveal from '../components/ScrollReveal'
import CTASection from '../components/CTASection'
import useSEO from '../utils/useSEO'
import { getCities } from '../utils/hotelHelpers'
import { ShieldCheck, MapPinned, HeartHandshake } from 'lucide-react'

export default function About() {
  useSEO({
    title: 'About JMB Hotels',
    description: "Discover founder Dhanraj Rebari's journey from hands-on hospitality work to building JMB Hotels across Indore and Dewas.",
    path: '/about',
  })
  const cities = getCities()
  const milestones = [
    { year: '2009', label: 'Began his hospitality journey with hands-on work' },
    { year: '2019', label: 'Took over his first hotel, Relax Inn, in Dewas' },
    { year: 'Today', label: 'Five properties across Dewas and Indore' },
  ]
  const properties = [
    { city: 'Dewas', names: ['Relax Inn', 'Hotel Rana Palace'] },
    { city: 'Indore', names: ['Hotel Soni', 'Hotel Gopala', 'Hotel Height'] },
  ]

  return (
    <div>
      <Hero
        poster="/media/demo/about-hero.jpg"
        eyebrow="Our Story"
        title="About JMB Hotels"
        subtitle={`The Jay Maa Bayan Group has branches across ${cities.length} cities in Madhya Pradesh, built on years of practical hospitality experience.`}
        height="h-[60vh]"
      />

      <section className="container-edit py-20 md:py-28">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20 items-start">
          <ScrollReveal className="relative">
            <img
              src="/media/founder-dhanraj-rebari.png"
              alt="Dhanraj Rebari, founder of JMB Hotels"
              className="w-full aspect-[4/5] object-cover object-[55%_center]"
              loading="lazy"
            />
            <div className="absolute bottom-5 left-5 right-5 bg-ivory/95 p-5 sm:p-6">
              <p className="eyebrow mb-1">Founder, JMB Hotels</p>
              <p className="font-display text-2xl text-charcoal">Dhanraj Rebari</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="eyebrow mb-3">The Founder Story</p>
            <h2 className="font-display text-3xl md:text-5xl text-charcoal mb-6 leading-tight">
              From hard work to a vision beyond one hotel
            </h2>
            <p className="text-charcoal/65 leading-relaxed mb-4">
              Dhanraj Rebari began his hospitality journey in 2009 with cleaning and other
              hands-on work. Learning the work from the ground up taught him discipline,
              dedication and what it takes to make every guest feel comfortable. That practical
              understanding of the day-to-day running of a hotel became the foundation for his
              own business.
            </p>
            <p className="text-charcoal/65 leading-relaxed mb-8">
              In 2019, after years of learning the industry, he took over his first hotel,
              Relax Inn in Dewas, Madhya Pradesh. It was a turning point: years of hard work
              became the beginning of a bigger vision.
            </p>

            <div className="border-y border-charcoal/10 divide-y divide-charcoal/10">
              {milestones.map(({ year, label }) => (
                <div key={year} className="grid grid-cols-[5rem_1fr] gap-4 py-4">
                  <span className="font-display text-lg text-champagne-dark">{year}</span>
                  <span className="text-sm text-charcoal/65 leading-relaxed">{label}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-20 md:mt-28 grid lg:grid-cols-2 gap-12 lg:gap-20">
          <ScrollReveal>
            <p className="eyebrow mb-3">Growing Beyond One Hotel</p>
            <h2 className="font-display text-3xl md:text-4xl text-charcoal mb-6">
              Five properties. One growing vision.
            </h2>
            <p className="text-charcoal/65 leading-relaxed max-w-prose">
              With time, experience and continued involvement in hospitality, Dhanraj grew
              the business beyond a single property. Each hotel marks another step in his
              journey and brings a continued commitment to comfortable stays, attentive
              service and a consistent guest experience.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-8">
              {properties.map(({ city, names }) => (
                <div key={city}>
                  <h3 className="eyebrow mb-3">{city}</h3>
                  <ul className="space-y-2">
                    {names.map((name) => (
                      <li key={name} className="text-charcoal/75">{name}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="bg-charcoal text-ivory p-8 md:p-10 lg:p-12">
            <p className="eyebrow text-champagne-light mb-3">A Vision Beyond Cities</p>
            <h2 className="font-display text-3xl md:text-4xl mb-6">
              A trusted hospitality brand across India
            </h2>
            <p className="text-ivory/70 leading-relaxed mb-4">
              Dhanraj's ambition is to develop JMB Hotels into a recognised hospitality brand
              with a presence across India. Growth, he believes, must be built on the quality
              of the work: comfortable stays, attentive service and an experience guests can
              trust.
            </p>
            <p className="text-ivory/70 leading-relaxed">
              Understanding guests, taking responsibility and maintaining a consistent
              approach to service are the foundations he wants to carry forward as the
              business grows.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal className="mt-16 md:mt-20 text-center">
          <p className="font-display text-xl md:text-2xl text-charcoal">
            JMB Hotels — Built on Experience. Growing with Trust. Driven by a Vision.
          </p>
        </ScrollReveal>
      </section>

      <section className="bg-cream border-y border-charcoal/5">
        <div className="container-edit py-16 md:py-20">
          <ScrollReveal>
            <p className="eyebrow mb-3">What Guides Us</p>
            <h2 className="font-display text-3xl md:text-4xl text-charcoal mb-10">
              The principles behind every stay
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: MapPinned, title: 'Central by Design', text: 'Every property sits close to the markets and landmarks travellers come for.' },
              { icon: ShieldCheck, title: 'One Standard', text: 'A consistent hospitality standard across every JMB hotel.' },
              { icon: HeartHandshake, title: 'Personal Service', text: 'Thoughtful, attentive hospitality shaped by years of hands-on experience.' },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="border border-charcoal/10 bg-white p-6">
                <Icon className="text-champagne-dark mb-4" size={26} strokeWidth={1.5} />
                <h3 className="font-display text-lg text-charcoal mb-2">{title}</h3>
                <p className="text-sm text-charcoal/60 leading-relaxed">{text}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <CTASection
        eyebrow="Explore the Group"
        title="Find a JMB branch"
        subtitle="See branch locations and official hotel websites."
        primary={{ label: 'View Branches', to: '/locations' }}
        secondary={{ label: 'Contact Us', to: '/contact' }}
      />
    </div>
  )
}
