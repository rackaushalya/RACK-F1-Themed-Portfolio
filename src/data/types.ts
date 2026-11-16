export type SkillId =
  | 'self-awareness'
  | 'career-readiness'
  | 'personal-branding'
  | 'communication-etiquette'
  | 'negotiation'
  | 'teamwork'

export type Block =
  | { type: 'p'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'cards'; cols?: 2 | 3 | 4; items: { title: string; text: string; meta?: string }[] }
  | { type: 'table'; head: string[]; rows: string[][] }
  | { type: 'quote'; text: string; cite?: string }
  | { type: 'tip'; text: string }
  | { type: 'chips'; label: string; items: string[] }

export type Section = {
  heading?: string
  blocks: Block[]
}

export type EvidenceItem = {
  src: string
  /** Says what the image shows. Image credits live in ASSET_CREDITS.md, not on the page. */
  caption: string
  alt: string
  /** What kind of evidence this is. */
  kind: 'Lecture slide' | 'Class activity' | 'Worksheet' | 'Whiteboard' | 'My own evidence'
  /** Natural size, so grids keep correct aspect ratios. */
  w: number
  h: number
}

export type Race = {
  round: number
  slug: string
  /** Decorative label only. */
  grandPrix: string
  circuit: string
  country: string
  /** The real academic topic of the week. */
  topic: string
  status: 'complete' | 'dns'
  /** One-line description for the calendar card. */
  strapline: string
  skills: SkillId[]
  skillNote?: string
  briefing: Section[]
  notes: Section[]
  practice: Section[]
  application: Section[]
  /** Photographs and slides for the week. A week with none simply has no evidence session. */
  evidence: EvidenceItem[]
  /** Post-Race Report: my personal reflection, one paragraph per entry. */
  report: string[]
  /** Short points shown beside the reflection. */
  takeaways: string[]
}
