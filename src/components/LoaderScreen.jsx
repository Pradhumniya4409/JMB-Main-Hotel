import { AnimatePresence, motion } from 'framer-motion'

export default function LoaderScreen({ visible }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.55, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#120f0d]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(185,147,86,0.18),_transparent_48%)]" />
          <motion.div
            initial={{ opacity: 0, scale: 0.78, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex flex-col items-center"
          >
            <motion.div
              initial={{ rotate: -10, scale: 0.8 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="relative mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-champagne/40 bg-charcoal/40 shadow-[0_0_30px_rgba(185,147,86,0.18)] backdrop-blur-sm"
            >
              <motion.img
                src="/media/hotels/jmb-hotels-logo.png"
                alt="JMB Hotels logo"
                className="h-16 w-16 object-contain"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
              />
              <motion.span
                aria-hidden="true"
                className="absolute inset-3 rounded-full border border-champagne/30"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1.2, opacity: [0.2, 0.6, 0.2] }}
                transition={{ duration: 1.6, ease: 'easeOut', repeat: Infinity, repeatDelay: 0.2 }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <p className="text-[10px] uppercase tracking-[0.5em] text-champagne-light/80">Jay Maa Bayan</p>
              <h1 className="mt-3 font-display text-3xl tracking-[0.08em] text-ivory sm:text-4xl">
                JMB Hotels
              </h1>
            </motion.div>

            <motion.div
              className="mt-8 h-1.5 w-44 overflow-hidden rounded-full bg-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-champagne via-champagne-light to-ivory"
                initial={{ x: '-100%' }}
                animate={{ x: '0%' }}
                transition={{ duration: 2.5, ease: 'easeInOut' }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
