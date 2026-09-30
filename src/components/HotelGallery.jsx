import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export default function HotelGallery({ images = [], hotelName }) {
  const [active, setActive] = useState(null)

  if (!images.length) return null

  const showPrev = (e) => {
    e.stopPropagation()
    setActive((i) => (i === 0 ? images.length - 1 : i - 1))
  }
  const showNext = (e) => {
    e.stopPropagation()
    setActive((i) => (i === images.length - 1 ? 0 : i + 1))
  }

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {images.map((src, i) => (
          <button
            key={src + i}
            onClick={() => setActive(i)}
            className={`relative overflow-hidden ${i === 0 ? 'col-span-2 row-span-2 aspect-square md:aspect-[4/3]' : 'aspect-square'}`}
          >
            <img
              src={src}
              alt={`${hotelName} — photo ${i + 1}`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 ease-editorial hover:scale-105"
            />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-charcoal/95 flex items-center justify-center p-4"
            onClick={() => setActive(null)}
          >
            <button
              aria-label="Close gallery"
              className="absolute top-6 right-6 text-ivory/80 hover:text-champagne-light"
              onClick={() => setActive(null)}
            >
              <X size={28} />
            </button>
            <button
              aria-label="Previous photo"
              onClick={showPrev}
              className="absolute left-4 md:left-10 text-ivory/70 hover:text-champagne-light"
            >
              <ChevronLeft size={32} />
            </button>
            <motion.img
              key={active}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              src={images[active]}
              alt={`${hotelName} — photo ${active + 1}`}
              className="max-h-[85vh] max-w-[90vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              aria-label="Next photo"
              onClick={showNext}
              className="absolute right-4 md:right-10 text-ivory/70 hover:text-champagne-light"
            >
              <ChevronRight size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
