import { AnimatePresence, motion } from 'framer-motion'
import { Maximize2 } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Lightbox } from '../components/Lightbox'
import { TrackLines } from '../components/TrackLines'
import { Reveal, SectionHeading } from '../components/ui'
import { galleryCategories, galleryItems, type GalleryCategory } from '../data/gallery'
import { asset } from '../data/site'

type Filter = 'All' | GalleryCategory

export function GalleryPage() {
  const [filter, setFilter] = useState<Filter>('All')
  const [lightbox, setLightbox] = useState<number | null>(null)

  const visible = useMemo(
    () => galleryItems.filter((g) => filter === 'All' || g.category === filter),
    [filter],
  )
  const photos = visible
  const images = photos.map((g) => ({
    src: g.src,
    caption: g.caption,
    alt: g.alt,
    meta: g.tag,
  }))
  const count = (c: Filter) => galleryItems.filter((g) => c === 'All' || g.category === c).length

  return (
    <article className="relative overflow-hidden bg-cream pb-28 pt-36 sm:pt-44">
      <TrackLines seed={64} />
      <div className="wrap relative">
        <Reveal>
          <SectionHeading index="07" kicker="The garage · Work and evidence" thin="The paddock" heavy="Gallery" as="h1" />
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-8 max-w-2xl text-[1.06rem] leading-[1.75] text-charcoal">
            Every image here belongs to a specific race weekend or to Praana 2026: lecture slides, class
            activities, my own work and photographs from our blood donation camp. Select any image to enlarge it.
          </p>
        </Reveal>

        {/* category filter */}
        <div role="tablist" aria-label="Gallery categories" className="mt-12 flex flex-wrap gap-2 border-y border-pit py-4">
          {galleryCategories.map((c) => {
            const active = filter === c
            return (
              <button
                key={c}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => {
                  setFilter(c)
                  setLightbox(null)
                }}
                className={`label inline-flex items-center gap-2.5 px-3.5 py-3 transition-colors duration-300 ${
                  active ? 'bg-ink text-cream' : 'text-charcoal hover:bg-pit-light'
                }`}
              >
                {c}
                <span className={active ? 'text-rosso' : 'text-charcoal-light'}>{String(count(c)).padStart(2, '0')}</span>
              </button>
            )
          })}
        </div>

        {/* masonry grid: columns keep every image at its true aspect ratio */}
        <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((g) => (
              <motion.div
                key={g.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="mb-5 break-inside-avoid"
              >
                <figure>
                    <button
                      type="button"
                      onClick={() => setLightbox(photos.findIndex((p) => p.id === g.id))}
                      aria-label={`Open image: ${g.caption}`}
                      className="group relative block w-full overflow-hidden bg-ink"
                    >
                      <img
                        src={asset(g.src)}
                        alt={g.alt}
                        loading="lazy"
                        className="w-full transition-transform duration-700 group-hover:scale-[1.04]"
                        style={{ aspectRatio: String(g.ratio) }}
                      />
                      <span className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/25" />
                      <span className="absolute right-0 top-0 inline-flex h-10 w-10 items-center justify-center bg-rosso text-cream opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                        <Maximize2 size={16} aria-hidden />
                      </span>
                    </button>
                    <figcaption className="mt-3">
                      <Link to={g.link} className="label text-rosso transition-colors hover:text-rosso-deep">
                        {g.tag}
                      </Link>
                      <p className="mt-2 text-[0.97rem] leading-snug text-ink">{g.caption}</p>
                    </figcaption>
                </figure>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <Lightbox images={images} index={lightbox} onClose={() => setLightbox(null)} onIndex={setLightbox} />
    </article>
  )
}
