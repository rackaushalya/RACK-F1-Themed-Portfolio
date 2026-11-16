import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect } from 'react'
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { raceBySlug } from './data/races'
import { FinalePage } from './pages/FinalePage'
import { GalleryPage } from './pages/GalleryPage'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { RacePage } from './pages/RacePage'
import { ReportPage } from './pages/ReportPage'

/** Pages whose top section is dark or red, so the header starts in light text. */
function headerTone(pathname: string): 'light' | 'dark' {
  if (pathname === '/finale') return 'dark'
  const slug = pathname.match(/^\/race\/(.+)$/)?.[1]
  if (slug && raceBySlug(slug)?.status === 'dns') return 'dark'
  return 'light'
}

function Shell() {
  const location = useLocation()
  const reduce = useReducedMotion()

  // New page: start at the top. The home page handles its own section scrolling.
  useEffect(() => {
    if (location.pathname !== '/') window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [location.pathname])

  return (
    <>
      <a
        href="#main"
        onClick={(e) => {
          e.preventDefault()
          document.getElementById('main')?.focus()
        }}
        className="label sr-only z-[70] bg-ink px-4 py-3 text-cream focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <Header tone={headerTone(location.pathname)} />
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          id="main"
          tabIndex={-1}
          key={location.pathname}
          className="outline-none"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0 }}
          transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/race/:slug" element={<RacePage />} />
            <Route path="/finale" element={<FinalePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/report" element={<ReportPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Shell />
    </HashRouter>
  )
}
