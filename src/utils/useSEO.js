import { useEffect } from 'react'

const setMeta = (name, content, attr = 'name') => {
  if (!content) return
  let el = document.head.querySelector(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

const setCanonical = (href) => {
  let el = document.head.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export default function useSEO({ title, description, path = '' }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | JMB Hotels` : 'JMB Hotels — Jay Maa Bayan Group of Hotels'
    document.title = fullTitle
    setMeta('description', description)
    setMeta('og:title', fullTitle, 'property')
    setMeta('og:description', description, 'property')
    setCanonical(`https://www.jmbhotels.com${path}`)
    window.scrollTo(0, 0)
  }, [title, description, path])
}
