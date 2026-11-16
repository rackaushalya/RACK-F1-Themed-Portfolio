import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useCallback, useEffect } from 'react'
import { asset } from '../data/site'

export type LightboxImage = { src: string; caption: string; alt: string; meta?: string }

/** Full-screen image viewer with keyboard support (Esc, left and right arrows). */
export function Lightbox({
  images,
  index,
  onClose,
  onIndex,
}: {
  images: LightboxImage[]
  index: number | null
  onClose: () => void
  onIndex: (i: number) => void
}) {
  const open = index !== null
  const count = images.length
  const go = useCallback(
    (step: number) => {
      if (index === null) return
      onIndex((index + step + count) % count)
    },
    [index, count, onIndex],
  )

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, go, onClose])

  const img = index !== null ? images[index] : null
  return (
    <AnimatePresence>
      {img && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          className="fixed inset-0 z-[60] flex flex-col bg-ink/95 text-cream backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <div className="flex items-center justify-between px-5 py-4 sm:px-8">
            <span className="label text-cream/60">
              {String((index ?? 0) + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close image viewer"
              autoFocus
              className="inline-flex h-11 w-11 items-center justify-center border border-cream/40 transition-colors hover:bg-cream hover:text-ink"
            >
              <X size={20} aria-hidden />
            </button>
          </div>

          <div
            className="relative flex min-h-0 flex-1 items-center justify-center px-4 sm:px-20"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.img
              key={img.src}
              src={asset(img.src)}
              alt={img.alt}
              className="max-h-full max-w-full object-contain"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            />
            {count > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label="Previous image"
                  className="absolute left-2 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-rosso text-cream transition-colors hover:bg-rosso-deep sm:left-5"
                >
                  <ChevronLeft size={20} aria-hidden />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label="Next image"
                  className="absolute right-2 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-rosso text-cream transition-colors hover:bg-rosso-deep sm:right-5"
                >
                  <ChevronRight size={20} aria-hidden />
                </button>
              </>
            )}
          </div>

          <div className="px-5 py-5 text-center sm:px-8" onClick={(e) => e.stopPropagation()}>
            <p className="text-base">{img.caption}</p>
            {img.meta && <p className="label mt-2 leading-relaxed text-cream/50">{img.meta}</p>}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
