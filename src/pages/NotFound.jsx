import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import useSEO from '../utils/useSEO'
import { Compass } from 'lucide-react'

export default function NotFound() {
  useSEO({ title: 'Page Not Found', description: 'The page you are looking for could not be found.', path: '/404' })
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-charcoal">
      <div className="container-edit text-center py-32">
        <ScrollReveal>
          <Compass className="mx-auto text-champagne-light mb-8" size={40} strokeWidth={1.2} />
          <p className="eyebrow mb-4">Lost, but not far</p>
          <h1 className="font-display text-6xl md:text-8xl text-ivory mb-6">404</h1>
          <p className="text-ivory/65 max-w-md mx-auto leading-relaxed mb-10">
            The page you're looking for isn't here. It may have moved, or the address may be
            incorrect.
          </p>
          <Link to="/" className="btn-primary">Return Home</Link>
        </ScrollReveal>
      </div>
    </div>
  )
}
