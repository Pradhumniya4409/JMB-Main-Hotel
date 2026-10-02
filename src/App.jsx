import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CallButton from './components/CallButton'
import WhatsAppButton from './components/WhatsAppButton'
import PageTransition from './components/PageTransition'
import LoaderScreen from './components/LoaderScreen'

import Home from './pages/Home'
import Locations from './pages/Locations'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  const location = useLocation()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 3000)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <LoaderScreen visible={isLoading} />
      {!isLoading && (
        <>
          <Navbar />
          <main className="flex-1">
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageTransition><Home /></PageTransition>} />
                <Route path="/locations" element={<PageTransition><Locations /></PageTransition>} />
                <Route path="/about" element={<PageTransition><About /></PageTransition>} />
                <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
                <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
          <CallButton />
          <WhatsAppButton />
        </>
      )}
    </div>
  )
}
