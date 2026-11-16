import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

/* ------------------------------------------------------------------ */
/* Scroll reveal                                                        */
/* ------------------------------------------------------------------ */
export function Reveal({
  children,
  delay = 0,
  className,
  y = 22,
}: {
  children: ReactNode
  delay?: number
  className?: string
  y?: number
}) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
/* Section heading: index number, thin serif line, heavy grotesque line */
/* ------------------------------------------------------------------ */
export function SectionHeading({
  index,
  kicker,
  thin,
  heavy,
  tone = 'light',
  as: Tag = 'h2',
}: {
  index: string
  kicker: string
  thin: string
  heavy: string
  tone?: 'light' | 'dark'
  as?: 'h1' | 'h2'
}) {
  return (
    <div>
      <div className={`label flex items-center gap-4 ${tone === 'dark' ? 'text-cream/60' : 'text-charcoal-mid'}`}>
        <span className="text-rosso">{index}</span>
        <span className={`h-px w-10 ${tone === 'dark' ? 'bg-cream/25' : 'bg-pit'}`} />
        <span>{kicker}</span>
      </div>
      <Tag className="mt-6">
        <span className="serif-cap block text-[clamp(2.1rem,5.2vw,4.6rem)]">{thin}</span>
        <span className="headline block text-[clamp(2.6rem,7.4vw,6.6rem)]">{heavy}</span>
      </Tag>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Text link with a square arrow                                        */
/* ------------------------------------------------------------------ */
export function ArrowLink({
  to,
  children,
  tone = 'light',
}: {
  to: string
  children: ReactNode
  tone?: 'light' | 'dark' | 'red'
}) {
  const text = tone === 'light' ? 'text-ink' : 'text-cream'
  const box =
    tone === 'red' ? 'bg-cream text-rosso' : tone === 'dark' ? 'bg-rosso text-cream' : 'bg-rosso text-cream'
  return (
    <Link to={to} className={`link-arrow group ${text}`}>
      <span className="border-b border-transparent pb-1 transition-colors duration-300 group-hover:border-current">
        {children}
      </span>
      <span
        className={`inline-flex h-9 w-9 items-center justify-center transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${box}`}
      >
        <ArrowUpRight size={16} strokeWidth={2.2} aria-hidden />
      </span>
    </Link>
  )
}

/* ------------------------------------------------------------------ */
/* Status badge                                                         */
/* ------------------------------------------------------------------ */
export function StatusBadge({ status, tone = 'light' }: { status: 'complete' | 'dns'; tone?: 'light' | 'dark' }) {
  if (status === 'dns') {
    return (
      <span className="label inline-flex items-center gap-2 border border-current px-2.5 py-1.5 text-charcoal-light">
        <span className="h-1.5 w-1.5 bg-current" />
        DNS · Did not start
      </span>
    )
  }
  return (
    <span
      className={`label inline-flex items-center gap-2 border px-2.5 py-1.5 ${
        tone === 'dark' ? 'border-cream/30 text-cream' : 'border-ink/20 text-ink'
      }`}
    >
      <span className="h-1.5 w-1.5 bg-rosso" />
      Classified · Complete
    </span>
  )
}
