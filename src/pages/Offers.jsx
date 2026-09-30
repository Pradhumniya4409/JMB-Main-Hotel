import { Gift } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import CTASection from '../components/CTASection'
import useSEO from '../utils/useSEO'

export default function Offers() {
  useSEO({
    title: 'Offers',
    description: 'Special offers and packages from JMB Hotels — announced here as they become available.',
    path: '/offers',
  })

  return (
    <div>
      <div className="pt-40 pb-28 container-edit">
        <ScrollReveal className="max-w-lg mx-auto text-center">
          <Gift className="mx-auto text-champagne-dark mb-6" size={44} strokeWidth={1.3} />
          <p className="eyebrow mb-3">Limited Time</p>
          <h1 className="font-display text-4xl md:text-5xl text-charcoal mb-5">
            Special offers will be announced here.
          </h1>
          <p className="text-charcoal/60 leading-relaxed">
            We're preparing seasonal packages and direct-booking offers across our Indore and Dewas
            properties. Check back soon, or contact a hotel directly for the best current rate.
          </p>
        </ScrollReveal>
      </div>
      <CTASection eyebrow="In the Meantime" title="Book direct for the best rate" />
    </div>
  )
}
