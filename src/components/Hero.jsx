import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

// Cinematic full-bleed hero. Supply `video` for an autoplaying loop (falls
// back gracefully to `poster` alone when no video file is present), plus an
// eyebrow, a two-line display headline and supporting copy/actions as children.
export default function Hero({
  video,
  poster,
  backgroundImages = [],
  eyebrow,
  title,
  subtitle,
  children,
  height = 'h-[92vh]',
}) {
  const shouldReduceMotion = useReducedMotion()
  const [activeImage, setActiveImage] = useState(0)
  const imageList = backgroundImages.join('|')

  useEffect(() => {
    if (shouldReduceMotion || backgroundImages.length < 2) return undefined

    const delay = activeImage === 0 ? 3000 : 2000
    const timeoutId = window.setTimeout(() => {
      setActiveImage((index) => (index + 1) % backgroundImages.length)
    }, delay)

    return () => window.clearTimeout(timeoutId)
  }, [activeImage, backgroundImages.length, shouldReduceMotion])

  useEffect(() => {
    if (!imageList) return

    imageList.split('|').forEach((src) => {
      const image = new window.Image()
      image.src = src
    })
  }, [imageList])

  return (
    <section className={`relative ${height} min-h-[560px] w-full overflow-hidden bg-charcoal`}>
      {video ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={poster}
        >
          <source src={video} type="video/mp4" />
        </video>
      ) : backgroundImages.length > 0 ? (
        <AnimatePresence initial={false} mode="sync">
          <motion.img
            key={shouldReduceMotion ? poster : backgroundImages[activeImage]}
            src={shouldReduceMotion ? poster : backgroundImages[activeImage]}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18, ease: 'easeInOut' }}
          />
        </AnimatePresence>
      ) : (
        <motion.img
          src={poster}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          initial={false}
          animate={shouldReduceMotion ? undefined : { scale: [1, 1.06] }}
          transition={{ duration: 24, ease: 'linear', repeat: Infinity, repeatType: 'reverse' }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/45 to-charcoal/45" />
      <div className="absolute inset-0 bg-charcoal/15" />

      <div className="relative z-10 flex h-full flex-col items-start justify-end container-edit pb-24 pt-32">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="eyebrow text-champagne-light mb-5"
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-ivory text-[13vw] leading-[0.98] sm:text-6xl md:text-7xl lg:text-[5.5rem] max-w-4xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="text-ivory/80 text-base md:text-lg max-w-xl mt-6 leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  )
}
