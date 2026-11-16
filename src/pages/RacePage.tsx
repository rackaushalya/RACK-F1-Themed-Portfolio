import { ArrowLeft, ArrowRight, Maximize2 } from 'lucide-react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Sections } from '../components/Blocks'
import { Lightbox } from '../components/Lightbox'
import { CircuitGlyph, TrackLines } from '../components/TrackLines'
import { ArrowLink, Reveal, StatusBadge } from '../components/ui'
import { pad, raceBySlug, races } from '../data/races'
import { asset, driver } from '../data/site'
import { SELF_ASSESSMENT, skillById } from '../data/skills'
import type { Race } from '../data/types'
import { NotFound } from './NotFound'

const sessions = [
  { id: 'briefing', no: '01', title: 'Race Briefing', sub: 'Lecture summary and topics covered' },
  { id: 'notes', no: '02', title: 'Driver Notes', sub: 'Concepts, definitions, theories and terminology' },
  { id: 'practice', no: '03', title: 'Practice Session', sub: 'Class activities, exercises and group work' },
  { id: 'application', no: '04', title: 'On-Track Application', sub: 'How the learning applies in practice' },
  { id: 'evidence', no: '05', title: 'Race Evidence', sub: 'Photographs, lecture slides and worksheets' },
  { id: 'report', no: '06', title: 'Post-Race Report', sub: 'Personal learning and reflection' },
] as const

function SessionHeader({ no, title, sub }: { no: string; title: string; sub: string }) {
  return (
    <div className="mb-10">
      <div className="pit-rule" />
      <div className="mt-6 flex flex-wrap items-baseline gap-x-6 gap-y-2">
        <span className="label text-rosso">Session {no}</span>
        <h2 className="headline text-[clamp(2rem,4.6vw,3.6rem)]">{title}</h2>
      </div>
      <p className="label mt-3 text-charcoal-mid">{sub}</p>
    </div>
  )
}

function RaceNav({ race }: { race: Race }) {
  const prev = races.find((r) => r.round === race.round - 1)
  const next = races.find((r) => r.round === race.round + 1)
  const cell = 'group flex min-h-[7.5rem] flex-col justify-between gap-4 bg-cream-paper p-5 transition-colors hover:bg-ink hover:text-cream sm:p-6'
  return (
    <nav aria-label="Race weekend navigation" className="wrap pb-24">
      <div className="grid gap-px border border-pit bg-pit md:grid-cols-3">
        {prev ? (
          <Link to={`/race/${prev.slug}`} className={cell}>
            <span className="label flex items-center gap-2 text-charcoal-mid group-hover:text-cream/60">
              <ArrowLeft size={14} aria-hidden /> Previous · RW{pad(prev.round)}
            </span>
            <span className="font-display text-lg font-extrabold uppercase leading-tight tracking-tight">{prev.topic}</span>
          </Link>
        ) : (
          <Link to="/" className={cell}>
            <span className="label flex items-center gap-2 text-charcoal-mid group-hover:text-cream/60">
              <ArrowLeft size={14} aria-hidden /> Starting grid
            </span>
            <span className="font-display text-lg font-extrabold uppercase leading-tight tracking-tight">Home</span>
          </Link>
        )}
        <Link to="/?section=season" className={`${cell} md:items-center md:text-center`}>
          <span className="label text-rosso">Back to</span>
          <span className="font-display text-lg font-extrabold uppercase leading-tight tracking-tight">The 2026 Championship</span>
        </Link>
        {next ? (
          <Link to={`/race/${next.slug}`} className={`${cell} md:items-end md:text-right`}>
            <span className="label flex items-center gap-2 text-charcoal-mid group-hover:text-cream/60">
              Next · RW{pad(next.round)} <ArrowRight size={14} aria-hidden />
            </span>
            <span className="font-display text-lg font-extrabold uppercase leading-tight tracking-tight">{next.topic}</span>
          </Link>
        ) : (
          <Link to="/finale" className={`${cell} md:items-end md:text-right`}>
            <span className="label flex items-center gap-2 text-charcoal-mid group-hover:text-cream/60">
              Next · Season finale <ArrowRight size={14} aria-hidden />
            </span>
            <span className="font-display text-lg font-extrabold uppercase leading-tight tracking-tight">Praana 2026</span>
          </Link>
        )}
      </div>
    </nav>
  )
}

/* ================================================================== */
/* DNS: DID NOT START                                                   */
/* ================================================================== */
function DnsPage({ race }: { race: Race }) {
  return (
    <div className="bg-charcoal text-cream">
      <section className="hatch-light relative overflow-hidden pb-20 pt-36 sm:pt-44">
        <TrackLines seed={90} tone="dark" />
        <div className="wrap relative">
          <Link to="/?section=season" className="label inline-flex items-center gap-2 text-cream/55 transition-colors hover:text-cream">
            <ArrowLeft size={14} aria-hidden /> The 2026 Championship
          </Link>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="label text-cream/55">
                Race weekend {pad(race.round)} · {race.grandPrix} · {race.circuit}
              </p>
              <h1 className="headline mt-5 text-[clamp(2.4rem,7vw,6rem)] text-cream/85">{race.topic}</h1>
            </div>
            <CircuitGlyph round={race.round} muted className="hidden h-28 w-40 text-cream lg:block" />
          </div>

          <p className="headline text-outline mt-10 text-[clamp(7rem,30vw,25rem)] leading-[0.8] text-cream/35" aria-hidden>
            DNS
          </p>

          <div className="mt-8 grid gap-px border border-cream/20 bg-cream/20 md:grid-cols-[auto_1fr]">
            <div className="bg-charcoal p-6 sm:p-8">
              <p className="label text-cream/50">Status</p>
              <p className="headline mt-3 text-[clamp(1.6rem,3.4vw,2.6rem)]">DNS: Did Not Start</p>
            </div>
            <div className="bg-charcoal p-6 sm:p-8">
              <p className="max-w-2xl text-[1.06rem] leading-[1.75] text-cream/80">
                I did not complete Race Weekend {pad(race.round)}, {race.topic}. This round is recorded as a DNS. No
                lecture summary, class activity, evidence or personal reflection is shown here, because none of it
                would be mine.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="wrap pb-20">
        <p className="label mb-4 text-cream/50">Timing sheet · Race weekend {pad(race.round)}</p>
        <ul className="border-t border-cream/25">
          {sessions.map((s) => (
            <li key={s.id} className="grid grid-cols-[3rem_1fr_auto] items-center gap-4 border-b border-cream/15 py-4">
              <span className="label text-cream/40">{s.no}</span>
              <span className="font-display text-lg font-bold uppercase tracking-tight text-cream/55">{s.title}</span>
              <span className="label text-cream/40">No time set</span>
            </li>
          ))}
        </ul>

        <div className="mt-12 grid gap-px border border-cream/20 bg-cream/20 sm:grid-cols-3">
          {[
            ['Race weekend', pad(race.round)],
            ['Topic', race.topic],
            ['Related skill', skillById(race.skills[0]).name],
          ].map(([k, v]) => (
            <div key={k} className="bg-charcoal p-5">
              <p className="label text-cream/45">{k}</p>
              <p className="mt-2.5 font-display text-lg font-extrabold uppercase leading-tight tracking-tight text-cream/80">{v}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-x-10 gap-y-5">
          <ArrowLink to="/?section=season" tone="dark">
            Back to the championship
          </ArrowLink>
          <ArrowLink to="/finale" tone="dark">
            Continue to the season finale
          </ArrowLink>
        </div>
      </section>

      <div className="bg-cream pt-px text-ink">
        <div className="pt-20">
          <RaceNav race={race} />
        </div>
      </div>
    </div>
  )
}

/* ================================================================== */
/* A completed race weekend                                             */
/* ================================================================== */
export function RacePage() {
  const { slug } = useParams()
  const race = raceBySlug(slug)
  const [lightbox, setLightbox] = useState<number | null>(null)

  if (!race) return <NotFound />
  if (race.status === 'dns') return <DnsPage race={race} />

  const images = race.evidence.map((e) => ({
    src: e.src,
    caption: e.caption,
    alt: e.alt,
    meta: `RW${pad(race.round)} · ${e.kind}`,
  }))

  // A week with no photographs has no evidence session, and the rest are renumbered.
  const shown = sessions
    .filter((s) => s.id !== 'evidence' || race.evidence.length > 0)
    .map((s, i) => ({ ...s, no: pad(i + 1) }))
  const head = (id: (typeof sessions)[number]['id']) => shown.find((s) => s.id === id)!

  return (
    <article>
      {/* ---------- header ---------- */}
      <header className="relative overflow-hidden bg-cream pb-14 pt-36 sm:pt-44">
        <TrackLines seed={race.round * 5} lap />
        <div className="wrap relative">
          <Link to="/?section=season" className="label inline-flex items-center gap-2 text-charcoal-mid transition-colors hover:text-rosso">
            <ArrowLeft size={14} aria-hidden /> The 2026 Championship
          </Link>

          <div className="mt-10 grid gap-8 lg:grid-cols-[auto_1fr_auto] lg:items-end lg:gap-12">
            <p className="headline text-[clamp(6rem,17vw,14rem)] leading-[0.76] text-rosso" aria-hidden>
              {pad(race.round)}
            </p>
            <div>
              <p className="label text-charcoal-mid">
                Race weekend {pad(race.round)} of 09 · {race.grandPrix}
              </p>
              <h1 className="headline mt-4 text-[clamp(2.2rem,5.6vw,5rem)]">{race.topic}</h1>
              <p className="mt-5 max-w-2xl text-[1.08rem] leading-relaxed text-charcoal-mid">{race.strapline}</p>
            </div>
            <CircuitGlyph round={race.round} className="hidden h-32 w-44 text-ink lg:block" />
          </div>

          <dl className="mt-12 grid gap-px border border-pit bg-pit sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-cream-paper p-5">
              <dt className="label text-charcoal-light">Academic topic</dt>
              <dd className="mt-2.5 font-display font-extrabold uppercase leading-tight tracking-tight">{race.topic}</dd>
            </div>
            <div className="bg-cream-paper p-5">
              <dt className="label text-charcoal-light">Circuit</dt>
              <dd className="mt-2.5 font-display font-extrabold uppercase leading-tight tracking-tight">{race.circuit}</dd>
            </div>
            <div className="bg-cream-paper p-5">
              <dt className="label text-charcoal-light">Status</dt>
              <dd className="mt-2.5">
                <StatusBadge status={race.status} />
              </dd>
            </div>
            <div className="bg-cream-paper p-5">
              <dt className="label text-charcoal-light">Related professional skills</dt>
              <dd className="mt-2.5 flex flex-wrap gap-2">
                {race.skills.map((id) => (
                  <Link
                    key={id}
                    to="/?section=telemetry"
                    className="label border border-ink/25 px-2.5 py-1.5 transition-colors hover:border-rosso hover:text-rosso"
                  >
                    {skillById(id).name}
                  </Link>
                ))}
              </dd>
              {race.skillNote && <p className="mt-3 text-sm text-charcoal-mid">{race.skillNote}</p>}
            </div>
          </dl>
        </div>
      </header>

      {/* ---------- session index ---------- */}
      <nav aria-label="Sessions on this page" className="sticky top-[68px] z-30 border-y border-pit bg-cream/90 backdrop-blur">
        <div className="wrap flex gap-6 overflow-x-auto py-3.5">
          {shown.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              className="label shrink-0 whitespace-nowrap text-charcoal-mid transition-colors hover:text-rosso"
            >
              <span className="mr-2 text-rosso">{s.no}</span>
              {s.title}
            </a>
          ))}
        </div>
      </nav>

      {/* ---------- sessions ---------- */}
      <div className="wrap space-y-24 py-20 sm:py-24">
        <section id="briefing" className="scroll-mt-36">
          <Reveal>
            <SessionHeader {...head('briefing')} />
            <Sections sections={race.briefing} />
          </Reveal>
        </section>

        <section id="notes" className="scroll-mt-36">
          <Reveal>
            <SessionHeader {...head('notes')} />
          </Reveal>
          <Sections sections={race.notes} />
        </section>

        <section id="practice" className="scroll-mt-36">
          <Reveal>
            <SessionHeader {...head('practice')} />
            <Sections sections={race.practice} />
          </Reveal>
        </section>

        <section id="application" className="scroll-mt-36">
          <Reveal>
            <SessionHeader {...head('application')} />
            <Sections sections={race.application} />
          </Reveal>
        </section>

        {race.evidence.length > 0 && (
          <section id="evidence" className="scroll-mt-36">
            <Reveal>
              <SessionHeader {...head('evidence')} />
            </Reveal>
            <p className="mb-8 max-w-3xl text-[1.02rem] leading-relaxed text-charcoal-mid">
              Photographs and slides from this week. Select any image to enlarge it.
            </p>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
              {race.evidence.map((e, i) => (
                <figure key={e.src}>
                  <button
                    type="button"
                    onClick={() => setLightbox(i)}
                    aria-label={`Open image: ${e.caption}`}
                    className="group relative block w-full overflow-hidden bg-ink"
                  >
                    <img
                      src={asset(e.src)}
                      alt={e.alt}
                      loading="lazy"
                      width={e.w}
                      height={e.h}
                      className="aspect-[4/5] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <span className="absolute right-0 top-0 inline-flex h-9 w-9 items-center justify-center bg-rosso text-cream opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                      <Maximize2 size={15} aria-hidden />
                    </span>
                    <span className="label absolute bottom-0 left-0 bg-ink px-2.5 py-2 text-cream">{e.kind}</span>
                  </button>
                  <figcaption className="mt-3 text-[0.95rem] leading-snug text-ink">{e.caption}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        <section id="report" className="scroll-mt-36">
          <Reveal>
            <SessionHeader {...head('report')} />
            <div className="grid gap-10 lg:grid-cols-[1.45fr_1fr] lg:gap-14">
              <div className="space-y-5 text-[1.08rem] leading-[1.8] text-charcoal">
                {race.report.map((p, i) => (
                  <p key={i} className={i === 0 ? 'text-ink' : undefined}>
                    {p}
                  </p>
                ))}
                <p className="pt-2 font-serif text-[1.25rem] leading-tight text-ink">{driver.preferredName}</p>
              </div>
              <aside className="self-start border border-pit bg-cream-paper p-6">
                <p className="label text-charcoal-mid">What I am taking from this round</p>
                <ul className="mt-5 space-y-3.5">
                  {race.takeaways.map((q, i) => (
                    <li key={q} className="flex gap-4 text-[0.98rem] leading-relaxed text-charcoal">
                      <span className="label mt-1.5 text-rosso">{pad(i + 1)}</span>
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
                <p className="label mt-6 border-t border-pit pt-5 leading-relaxed text-charcoal-mid">
                  Skills this round · {race.skills.map((id) => skillById(id).name).join(' · ')} · self-assessed{' '}
                  {SELF_ASSESSMENT}
                </p>
              </aside>
            </div>
          </Reveal>
        </section>
      </div>

      <RaceNav race={race} />
      <Lightbox images={images} index={lightbox} onClose={() => setLightbox(null)} onIndex={setLightbox} />
    </article>
  )
}
