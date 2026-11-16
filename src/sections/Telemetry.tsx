import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { TrackLines } from '../components/TrackLines'
import { Reveal, SectionHeading } from '../components/ui'
import { pad, races } from '../data/races'
import { SELF_ASSESSMENT, skills } from '../data/skills'
import type { SkillId } from '../data/types'

/**
 * Circular performance indicator.
 * It shows a qualitative level only (HIGH / STRONG), with no numerical scores.
 */
function Ring({ code, active }: { code: string; active: boolean }) {
  const r = 34
  const c = 2 * Math.PI * r
  return (
    <svg viewBox="0 0 84 84" className="h-[84px] w-[84px]" aria-hidden>
      <circle cx="42" cy="42" r={r} fill="none" stroke="rgba(243,239,230,0.14)" strokeWidth="3" />
      <motion.circle
        cx="42"
        cy="42"
        r={r}
        fill="none"
        stroke="#D40000"
        strokeWidth="3"
        strokeLinecap="butt"
        strokeDasharray={c}
        transform="rotate(-90 42 42)"
        initial={{ strokeDashoffset: c }}
        whileInView={{ strokeDashoffset: c * 0.08 }}
        viewport={{ once: true }}
        transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
      />
      {/* tick marks */}
      {Array.from({ length: 24 }).map((_, i) => (
        <line
          key={i}
          x1="42"
          y1="2"
          x2="42"
          y2={i % 6 === 0 ? 7 : 5}
          stroke="rgba(243,239,230,0.35)"
          strokeWidth="1"
          transform={`rotate(${i * 15} 42 42)`}
        />
      ))}
      <text
        x="42"
        y="47"
        textAnchor="middle"
        className="font-mono"
        fontSize="15"
        fontWeight="500"
        fill={active ? '#D40000' : '#F3EFE6'}
      >
        {code}
      </text>
    </svg>
  )
}

export function Telemetry({
  selected,
  onSelect,
}: {
  selected: SkillId | null
  onSelect: (id: SkillId | null) => void
}) {
  const current = skills.find((s) => s.id === selected) ?? null
  return (
    <section id="telemetry" className="relative overflow-hidden bg-ink py-24 text-cream sm:py-32">
      <TrackLines seed={21} tone="dark" />
      <div className="wrap relative">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <Reveal>
            <SectionHeading index="03" kicker="Telemetry · Professional skills" thin="Driver" heavy="Performance" tone="dark" />
          </Reveal>
          <Reveal delay={0.1} className="max-w-sm">
            <p className="text-[0.98rem] leading-relaxed text-cream/65">
              Six professional skills from the module, read as performance metrics. Every level shown is my own
              self-assessment. These are qualitative labels, not official grades or marks.
            </p>
            <p className="label mt-4 text-cream/45">Select a skill to see its evidence and race weekends</p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-px border border-cream/15 bg-cream/15 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => {
            const active = s.id === selected
            return (
              <Reveal key={s.id} delay={i * 0.05} className="h-full">
                <button
                  type="button"
                  onClick={() => onSelect(active ? null : s.id)}
                  aria-pressed={active}
                  className={`group relative flex h-full w-full flex-col p-6 text-left transition-colors duration-300 sm:p-7 ${
                    active ? 'bg-cream text-ink' : 'bg-ink hover:bg-ink-soft'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className={active ? '[&_circle:first-child]:stroke-ink/15 [&_line]:stroke-ink/40' : ''}>
                      <Ring code={s.code} active={active} />
                    </div>
                    <div className="text-right">
                      <p className={`label ${active ? 'text-charcoal-mid' : 'text-cream/45'}`}>Self-assessment</p>
                      <p className="label mt-2 inline-block bg-rosso px-2 py-1.5 text-cream">{SELF_ASSESSMENT}</p>
                    </div>
                  </div>

                  <h3 className="headline mt-7 text-[1.7rem]">{s.name}</h3>
                  <p className={`label mt-2.5 ${active ? 'text-rosso-deep' : 'text-rosso'}`}>{s.focus}</p>
                  <p className={`mt-4 text-[0.96rem] leading-relaxed ${active ? 'text-charcoal' : 'text-cream/65'}`}>
                    {s.explanation}
                  </p>

                  <div className="mt-auto pt-7">
                    {/* racing-red progress line */}
                    <div className={`h-px w-full ${active ? 'bg-ink/15' : 'bg-cream/15'}`}>
                      <motion.div
                        className="h-[3px] -translate-y-px bg-rosso"
                        initial={{ width: 0 }}
                        whileInView={{ width: '92%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.2 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                    <div className={`label mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 ${active ? 'text-charcoal-mid' : 'text-cream/55'}`}>
                      <span>Related</span>
                      {s.rounds.map((r) => (
                        <span key={r} className={r === 9 ? 'line-through opacity-70' : ''}>
                          RW{pad(r)}
                        </span>
                      ))}
                      {s.finale && <span>Finale</span>}
                    </div>
                    {s.caveat && (
                      <p className={`mt-3 font-mono text-[0.7rem] leading-relaxed ${active ? 'text-charcoal-mid' : 'text-cream/50'}`}>
                        {s.caveat}
                      </p>
                    )}
                  </div>
                </button>
              </Reveal>
            )
          })}
        </div>

        {/* evidence read-out */}
        <div className="mt-px border border-t-0 border-cream/15 bg-ink-soft" aria-live="polite">
          <AnimatePresence mode="wait" initial={false}>
            {current ? (
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3 }}
                className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.25fr_1fr]"
              >
                <div>
                  <p className="label text-rosso">Supporting evidence · {current.name}</p>
                  <p className="mt-4 text-[1.05rem] leading-relaxed text-cream/85">{current.evidence}</p>
                  <p className="label mt-5 text-cream/45">Level: {SELF_ASSESSMENT} · my own self-assessment</p>
                </div>
                <div>
                  <p className="label text-cream/45">Related chapters</p>
                  <ul className="mt-4 divide-y divide-cream/10 border-y border-cream/10">
                    {current.rounds.map((r) => {
                      const race = races.find((x) => x.round === r)!
                      return (
                        <li key={r}>
                          <Link
                            to={`/race/${race.slug}`}
                            className="group flex items-center justify-between gap-4 py-3.5 transition-colors hover:text-rosso"
                          >
                            <span className="flex items-baseline gap-4">
                              <span className="label text-rosso">RW{pad(r)}</span>
                              <span className="font-display text-base font-bold uppercase tracking-tight">
                                {race.topic}
                                {race.status === 'dns' && <span className="label ml-3 text-cream/45">DNS</span>}
                              </span>
                            </span>
                            <ArrowUpRight size={16} aria-hidden className="shrink-0" />
                          </Link>
                        </li>
                      )
                    })}
                    {current.finale && (
                      <li>
                        <Link
                          to="/finale"
                          className="flex items-center justify-between gap-4 py-3.5 transition-colors hover:text-rosso"
                        >
                          <span className="flex items-baseline gap-4">
                            <span className="label text-rosso">Finale</span>
                            <span className="font-display text-base font-bold uppercase tracking-tight">Praana 2026</span>
                          </span>
                          <ArrowUpRight size={16} aria-hidden className="shrink-0" />
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              </motion.div>
            ) : (
              <motion.p
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="label p-6 leading-relaxed text-cream/45 sm:p-8"
              >
                No skill selected. Choose a card above to load its evidence and highlight its race weekends in the
                calendar below.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
