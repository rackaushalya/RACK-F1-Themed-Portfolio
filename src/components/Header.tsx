import { AnimatePresence, motion } from 'framer-motion'
import { Droplet, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { driver, nav } from '../data/site'

/**
 * Minimal header: wordmark, one red call-to-action and a menu button.
 * The full navigation lives in the overlay menu.
 */
export function Header({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => setOpen(false), [location])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const dark = tone === 'dark' && !scrolled
  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow,padding] duration-300 ${
          scrolled ? 'bg-cream/90 py-3 shadow-[0_1px_0_rgba(17,17,16,0.08)] backdrop-blur' : 'py-5 sm:py-7'
        }`}
      >
        <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:px-[4.6vw]">
          <Link
            to="/"
            aria-label={`${driver.identity}, home`}
            className={`group leading-none transition-colors ${dark ? 'text-cream' : 'text-ink'}`}
          >
            <span className="serif-cap block text-[1.35rem] tracking-[0.01em] sm:text-[1.6rem]">{driver.initials}</span>
            <span className="headline block text-[1.35rem] sm:text-[1.6rem]">{driver.surname}</span>
          </Link>

          <div className="flex items-center gap-2.5">
            <Link
              to="/finale"
              className="label inline-flex h-11 items-center gap-2 bg-rosso px-3.5 text-cream transition-colors hover:bg-rosso-deep sm:px-4"
            >
              <Droplet size={14} aria-hidden />
              <span>Finale</span>
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="site-menu"
              className={`group inline-flex h-11 w-11 flex-col items-center justify-center gap-[5px] border transition-colors ${
                dark ? 'border-cream/50 text-cream hover:bg-cream hover:text-ink' : 'border-ink text-ink hover:bg-ink hover:text-cream'
              }`}
            >
              <span className="h-[1.5px] w-5 bg-current transition-transform group-hover:translate-x-0.5" />
              <span className="h-[1.5px] w-5 bg-current transition-transform group-hover:-translate-x-0.5" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="site-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-ink text-cream"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between px-5 py-5 sm:px-8 sm:py-7 lg:px-[4.6vw]">
              <span className="label text-cream/55">
                {driver.season} Professional Skills Championship
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                autoFocus
                className="inline-flex h-11 w-11 items-center justify-center border border-cream/50 transition-colors hover:bg-cream hover:text-ink"
              >
                <X size={20} aria-hidden />
              </button>
            </div>

            <nav aria-label="Main" className="mx-auto w-full max-w-[1600px] flex-1 px-5 pb-10 sm:px-8 lg:px-[4.6vw]">
              <ul className="border-t border-cream/15">
                {nav.map((item, i) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.22 + i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="border-b border-cream/15"
                  >
                    <Link
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className="group flex items-baseline gap-4 py-3.5 sm:gap-8 sm:py-4"
                    >
                      <span className="label w-7 text-rosso">0{i + 1}</span>
                      <span className="headline text-[clamp(2rem,6.2vw,4.6rem)] transition-transform duration-300 group-hover:translate-x-3">
                        {item.label}
                      </span>
                      <span className="label ml-auto hidden text-cream/45 transition-colors group-hover:text-cream sm:block">
                        {item.note}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <p className="label mt-8 leading-relaxed text-cream/40">
                {driver.identity} · {driver.studentId} · {driver.module} ({driver.courseCode})
              </p>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
