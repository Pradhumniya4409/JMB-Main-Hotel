import Hero from '../components/Hero'
import ScrollReveal from '../components/ScrollReveal'
import CTASection from '../components/CTASection'
import useSEO from '../utils/useSEO'
import { getCities } from '../utils/hotelHelpers'
import { ShieldCheck, MapPinned, HeartHandshake } from 'lucide-react'

export default function About() {
  useSEO({
    title: 'About JMB Hotels',
    description: 'The Jay Maa Bayan (JMB) Group of Hotels — comfortable, centrally located stays across Indore and Dewas.',
    path: '/about',
  })
  const cities = getCities()

  return (
    <div>
      <Hero
        poster="/media/demo/about-hero.jpg"
        eyebrow="Our Story"
        title="About JMB Hotels"
        subtitle={`The Jay Maa Bayan Group has branches across ${cities.length} cities in Madhya Pradesh.`}
        height="h-[60vh]"
      />

      <section className="container-edit py-20 grid lg:grid-cols-2 gap-16 items-start">
        <ScrollReveal>
          <p className="eyebrow mb-3">Who We Are</p>
          <h2 className="font-display text-3xl md:text-4xl text-charcoal mb-6">
            A group built on central locations and consistent hospitality
          </h2>
          <p className="text-charcoal/65 leading-relaxed max-w-prose mb-4">
            JMB Hotels — the Jay Maa Bayan Group of Hotels — operates properties across Indore and
            Dewas, each chosen for its position in the middle of the city it serves: beside
            markets, transit routes and the streets that visitors actually walk.
          </p>
          <p className="text-charcoal/65 leading-relaxed max-w-prose">
            Every JMB property is run to the same standard of comfort, cleanliness and courteous
            service, while keeping the character of its own neighbourhood — from the old-city
            energy of Sarafa Bazar to the quieter residential streets of Dewas.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { icon: MapPinned, title: 'Central by Design', text: 'Every property sits close to the markets and landmarks travellers come for.' },
            { icon: ShieldCheck, title: 'One Standard', text: 'A consistent hospitality standard across every JMB hotel.' },
            { icon: HeartHandshake, title: 'Personal Service', text: 'Family-run hospitality with a direct line to every property.' },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="border border-charcoal/10 p-6">
              <Icon className="text-champagne-dark mb-4" size={26} strokeWidth={1.5} />
              <h3 className="font-display text-lg text-charcoal mb-2">{title}</h3>
              <p className="text-sm text-charcoal/60 leading-relaxed">{text}</p>
            </div>
          ))}
        </ScrollReveal>
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
