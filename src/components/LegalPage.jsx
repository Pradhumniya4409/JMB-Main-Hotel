import ScrollReveal from './ScrollReveal'
import useSEO from '../utils/useSEO'

export default function LegalPage({ title, path, updated = 'September 2026', children }) {
  useSEO({ title, description: `${title} for JMB Hotels.`, path })
  return (
    <div className="pt-32 pb-24">
      <div className="container-edit max-w-prose">
        <ScrollReveal>
          <p className="eyebrow mb-3">Policy</p>
          <h1 className="font-display text-4xl md:text-5xl text-charcoal mb-3">{title}</h1>
          <p className="text-xs text-charcoal/40 mb-10">Last updated: {updated}</p>
          <div className="prose-legal space-y-6 text-charcoal/70 leading-relaxed text-sm">
            {children}
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
