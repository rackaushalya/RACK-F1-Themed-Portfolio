/**
 * THE PADDOCK GALLERY
 * ------------------------------------------------------------------
 * Built automatically from the evidence attached to each race weekend and
 * from the Praana 2026 photographs. Add a photo in races.ts or praana.ts and
 * it appears here with no further changes.
 */
import { races, pad } from './races'
import { raceDayPhotos, raceEvidenceItems } from './praana'

export type GalleryCategory = 'Race weekends' | 'Class activities' | 'Project' | 'Praana 2026'
export const galleryCategories: ('All' | GalleryCategory)[] = [
  'All',
  'Race weekends',
  'Class activities',
  'Project',
  'Praana 2026',
]

export type GalleryItem = {
  id: string
  category: GalleryCategory
  src: string
  caption: string
  alt: string
  tag: string
  link: string
  ratio: number
}

const fromRaces: GalleryItem[] = races.flatMap((race) =>
  race.evidence.map((e, i) => ({
    id: `rw${race.round}-${i}`,
    category: (e.kind === 'Class activity' || e.kind === 'Worksheet' ? 'Class activities' : 'Race weekends') as GalleryCategory,
    src: e.src,
    caption: e.caption,
    alt: e.alt,
    tag: `RW${pad(race.round)} · ${race.topic}`,
    link: `/race/${race.slug}`,
    ratio: e.w / e.h,
  })),
)

const fromEvidence: GalleryItem[] = raceEvidenceItems.map((s, i) => ({
  id: `project-${i}`,
  category: 'Project',
  src: s.src,
  caption: s.caption,
  alt: s.alt,
  tag: 'Praana 2026 · Project evidence',
  link: '/finale',
  ratio: s.w / s.h,
}))

const fromRaceDay: GalleryItem[] = raceDayPhotos.map((s, i) => ({
  id: `praana-${i}`,
  category: 'Praana 2026',
  src: s.src,
  caption: s.caption,
  alt: s.alt,
  tag: 'Praana 2026 · Race day',
  link: '/finale',
  ratio: s.w / s.h,
}))

export const galleryItems: GalleryItem[] = [...fromRaces, ...fromEvidence, ...fromRaceDay]
