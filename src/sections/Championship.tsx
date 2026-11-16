import { motion } from 'framer-motion'
import { ArrowUpRight, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CircuitGlyph, TrackLines } from '../components/TrackLines'
import { Reveal, SectionHeading } from '../components/ui'
import { pad, races } from '../data/races'
import { skillById } from '../data/skills'
import type { Race, SkillId } from '../data/types'

function RaceCard({ race, state }: { race: Race; state: 'idle' | 'match' | 'dim' }) {
  const dns = race.status === 'dns'
  return (
    <Link
      to={`/race/${race.slug}`}
      aria-label={`Race weekend ${pad(race.round)}: ${race.topic}, ${dns ? 'did not start' : 'complete'}`}
      className={`group relative flex h-full min-h-[23rem] flex-col overflow-hidden p-6 transition-[opacity,background-color,color] duration-500 sm:p-7 ${
        dns ? 'hatch-light bg-charcoal text-cream/70' : 'bg-cream-paper text-ink hover:bg-ink hover:text-cream'
      } ${state === 'dim' ? 'opacity-30' : 'opacity-100'}`}
    >
      {state === 'match' && <span className="absolute inset-x-0 top-0 h-1 bg-rosso" aria-hidden />}

      <div className="flex items-start justify-between gap-4">
        <div>
          <p className={`label ${dns ? 'text-cream/45' : 'text-charcoal-mid group-hover:text-cream/55'}`}>Race weekend</p>
          <p className={`headline mt-2 text-[4.6rem] ${dns ? 'text-outline text-cream/45' : ''}`}>{pad(race.round)}</p>
        </div>
        <CircuitGlyph round={race.round} muted={dns} className="h-[4.6rem] w-[6.6rem] shrink-0" />
      </div>

      <p className={`label mt-6 ${dns ? 'text-cream/55' : 'text-rosso'}`}>
        {race.grandPrix} · {race.country}
      </p>
      <h3 className="mt-3 font-display text-[1.5rem] font-extrabold uppercase leading-[1.02] tracking-[-0.025em]">
        {race.topic}
      </h3>
      <p className={`mt-3 text-[0.93rem] leading-relaxed ${dns ? 'text-cream/50' : 'text-charcoal-mid group-hover:text-cream/65'}`}>
        {dns ? 'Status: DNS (Did Not Start). No lecture content is recorded for this round.' : race.strapline}
      </p>

      <div className={`mt-auto flex items-end justify-between gap-4 border-t pt-5 ${dns ? 'border-cream/15' : 'border-pit group-hover:border-cream/20'}`}>
        <div>
          <p className={`label ${dns ? 'text-cream/40' : 'text-charcoal-light group-hover:text-cream/45'}`}>{race.circuit}</p>
          <p className="label mt-2.5 flex items-center gap-2">
            <span className={`h-1.5 w-1.5 ${dns ? 'bg-cream/40' : 'bg-rosso'}`} />
            {dns ? 'DNS' : 'Complete'}
          </p>
        </div>
        <span className="label flex items-center gap-2.5">
          {dns ? 'View status' : 'Explore race'}
          <span
            className={`inline-flex h-9 w-9 items-center justify-center transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${
              dns ? 'border border-cream/35' : 'bg-rosso text-cream'
            }`}
          >
            <ArrowUpRight size={16} strokeWidth={2.2} aria-hidden />
          </span>
        </span>
      </div>
    </Link>
  )
}

export function Championship({
  selected,
  onClear,
}: {
  selected: SkillId | null
  onClear: () => void
}) {
  const skill = selected ? skillById(selected) : null
  return (
    <section id="season" className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <TrackLines seed={31} />
      <div className="wrap relative">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <Reveal>
            <SectionHeading index="04" kicker="On track · The journey" thin="The 2026" heavy="Championship" />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="label leading-[2] text-charcoal-mid">
              Year 2, Semester 2
              <br />
              Professional Skills · IT1215
            </p>
          </Reveal>
        </div>

        {/* championship progress */}
        <Reveal className="mt-12">
          <div className="flex items-baseline justify-between gap-4">
            <p className="label text-charcoal-mid">Season progress</p>
            <p className="label">
              <span className="text-rosso">08</span> / 09 race weekends classified · 01 DNS
            </p>
          </div>
          <div
            className="mt-4 grid grid-cols-9 gap-1.5"
            role="img"
            aria-label="Eight of nine race weekends complete; race weekend nine did not start"
          >
            {races.map((r, i) => (
              <motion.span
                key={r.round}
                className={`h-2.5 origin-left ${r.status === 'dns' ? 'hatch border border-charcoal/30' : 'bg-rosso'}`}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
              />
            ))}
          </div>
        </Reveal>

        {skill && (
          <div className="mt-8 flex flex-wrap items-center gap-3 bg-ink px-4 py-3 text-cream">
            <span className="label text-rosso">Telemetry filter</span>
            <span className="label">{skill.name}</span>
            <button
              type="button"
              onClick={onClear}
              className="label ml-auto inline-flex items-center gap-2 border border-cream/30 px-2.5 py-1.5 transition-colors hover:bg-cream hover:text-ink"
            >
              <X size={12} aria-hidden /> Clear
            </button>
          </div>
        )}

        <ol className={`grid gap-px border border-pit bg-pit sm:grid-cols-2 lg:grid-cols-3 ${skill ? 'mt-px' : 'mt-10'}`}>
          {races.map((race, i) => (
            <li key={race.slug} className="bg-cream">
              <Reveal delay={(i % 3) * 0.07} className="h-full">
                <RaceCard
                  race={race}
                  state={!skill ? 'idle' : skill.rounds.includes(race.round) ? 'match' : 'dim'}
                />
              </Reveal>
            </li>
          ))}
        </ol>

        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-charcoal-mid">
          Grand Prix names and circuit graphics are decorative labels for each chapter. The academic topic titles are
          the real module topics.
        </p>
      </div>
    </section>
  )
}
