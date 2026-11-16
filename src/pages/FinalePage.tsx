import { ArrowLeft, Check, Maximize2 } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Lightbox } from '../components/Lightbox'
import { TrackLines } from '../components/TrackLines'
import { ArrowLink, Reveal } from '../components/ui'
import {
  budgetNote,
  controlRoom,
  exhibits,
  oneTeam,
  pitCrew,
  pitStop,
  praana,
  promotion,
  raceDayPhotos,
  raceDayStory,
  reflection,
  reflectionSkills,
  strategySteps,
  venuePrep,
  type PhotoSlot as Slot,
} from '../data/praana'
import { asset, driver } from '../data/site'

/** Tile footprint on the race-day grid. On phones every tile is a single full-width frame. */
const shapeTile = {
  feature: 'aspect-[4/3] sm:col-span-2 sm:row-span-2 sm:aspect-auto',
  tall: 'aspect-[3/4] sm:row-span-2 sm:aspect-auto',
  std: 'aspect-[4/3] sm:aspect-auto',
}

function Part({
  letter,
  title,
  sub,
  tone = 'light',
}: {
  letter: string
  title: string
  sub: string
  /** 'red' is for sections with a red background, where the badge is inverted. */
  tone?: 'light' | 'dark' | 'red'
}) {
  const dark = tone !== 'light'
  const badge = tone === 'red' ? 'bg-cream text-rosso' : 'bg-rosso text-cream'
  return (
    <div className="mb-12">
      <div className={`flex items-center gap-4 ${tone === 'red' ? 'text-cream/80' : dark ? 'text-cream/55' : 'text-charcoal-mid'}`}>
        <span className={`inline-flex h-10 w-10 shrink-0 items-center justify-center font-display text-lg font-black ${badge}`}>
          {letter}
        </span>
        <span className={`h-px flex-1 ${tone === 'red' ? 'bg-cream/35' : dark ? 'bg-cream/20' : 'bg-pit'}`} />
        <span className="label text-right">{sub}</span>
      </div>
      <h2 className="headline mt-6 text-[clamp(2.1rem,5.6vw,4.6rem)]">{title}</h2>
    </div>
  )
}

/** Long-form paragraphs used by the story sections. */
function Story({ paragraphs, tone = 'light' }: { paragraphs: string[]; tone?: 'light' | 'dark' }) {
  return (
    <div className={`space-y-5 text-[1.06rem] leading-[1.78] ${tone === 'dark' ? 'text-cream/80' : 'text-charcoal'}`}>
      {paragraphs.map((p) => (
        <p key={p}>{p}</p>
      ))}
    </div>
  )
}

/** One photograph with its label and caption underneath. The lightbox shows the whole image. */
function Exhibit({
  slot,
  ratio,
  tone = 'light',
  onOpen,
}: {
  slot: Slot
  /** Tailwind aspect-ratio class for the frame. */
  ratio: string
  tone?: 'light' | 'dark'
  onOpen: (src: string) => void
}) {
  const dark = tone === 'dark'
  return (
    <figure>
      <button
        type="button"
        onClick={() => onOpen(slot.src)}
        aria-label={`Open image: ${slot.caption}`}
        className={`group relative block w-full overflow-hidden bg-ink ${ratio}`}
      >
        <img
          src={asset(slot.src)}
          alt={slot.alt}
          loading="lazy"
          width={slot.w}
          height={slot.h}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          style={slot.focus ? { objectPosition: slot.focus } : undefined}
        />
        <span className="absolute right-0 top-0 inline-flex h-10 w-10 items-center justify-center bg-rosso text-cream opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
          <Maximize2 size={16} aria-hidden />
        </span>
        <span className="label absolute bottom-0 left-0 bg-rosso px-2.5 py-2 text-cream">{slot.label}</span>
      </button>
      <figcaption className={`mt-3 text-[0.95rem] leading-snug ${dark ? 'text-cream/75' : 'text-charcoal'}`}>
        {slot.caption}
      </figcaption>
    </figure>
  )
}

/** Editorial photo grid for race day. Photographs fill their tiles without being stretched. */
function PhotoGrid({ slots, onOpen }: { slots: Slot[]; onOpen: (src: string) => void }) {
  return (
    <div className="grid grid-flow-dense grid-cols-1 gap-3 sm:auto-rows-[15rem] sm:grid-cols-2 sm:gap-4 lg:auto-rows-[19.5rem] lg:grid-cols-3">
      {slots.map((s) => (
        <figure key={s.file} className={`group relative overflow-hidden bg-ink ${shapeTile[s.shape]}`}>
          <button
            type="button"
            onClick={() => onOpen(s.src)}
            aria-label={`Open image: ${s.caption}`}
            className="block h-full w-full"
          >
            <img
              src={asset(s.src)}
              alt={s.alt}
              loading="lazy"
              width={s.w}
              height={s.h}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              style={s.focus ? { objectPosition: s.focus } : undefined}
            />
            <span className="absolute right-0 top-0 inline-flex h-10 w-10 items-center justify-center bg-rosso text-cream opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
              <Maximize2 size={16} aria-hidden />
            </span>
          </button>
          <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end gap-3 bg-ink/95 px-3.5 py-3 text-cream">
            <span className="label shrink-0 pb-0.5 text-rosso">{s.label}</span>
            <span className="text-[0.86rem] leading-snug">{s.caption}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  )
}

export function FinalePage() {
  // Lightbox order follows the page from top to bottom.
  const all = [exhibits.flyers, exhibits.poster, exhibits.hall, ...raceDayPhotos, exhibits.selfie]
  const images = all.map((s) => ({ src: s.src, caption: s.caption, alt: s.alt, meta: `Praana 2026 · ${s.label}` }))
  const [lightbox, setLightbox] = useState<number | null>(null)
  const open = (src: string) => setLightbox(images.findIndex((i) => i.src === src))
  const [leader, ...crew] = pitCrew

  return (
    <article>
      {/* ================= HERO ================= */}
      <header className="relative overflow-hidden bg-rosso pb-0 pt-36 text-cream sm:pt-44">
        <TrackLines seed={71} tone="dark" lap={false} />
        <div className="wrap relative">
          <Link to="/?section=season" className="label inline-flex items-center gap-2 text-cream/75 transition-colors hover:text-cream">
            <ArrowLeft size={14} aria-hidden /> The 2026 Championship
          </Link>
          <p className="label mt-12 flex items-center gap-4">
            <span>The 2026 season finale</span>
            <span className="h-px w-10 bg-cream/45" />
            <span className="text-cream/75">{praana.type}</span>
          </p>
          <h1 className="mt-6">
            <span className="serif-cap block text-[clamp(2.6rem,8vw,7.5rem)]">Praana</span>
            <span className="headline block text-[clamp(5.5rem,24vw,22rem)] leading-[0.78]">2026</span>
          </h1>
          <p className="headline mt-8 text-[clamp(1.4rem,3.4vw,2.8rem)]">{praana.finaleTitle}</p>
        </div>

        <dl className="relative mt-14 grid gap-px border-t border-cream/25 bg-cream/25 sm:grid-cols-3">
          {[
            ['Race day', praana.date],
            ['Result', `${praana.donors} blood donors`],
            ['Project partner', praana.partner],
          ].map(([k, v]) => (
            <div key={k} className="bg-rosso-deep px-5 py-7 sm:px-8 lg:px-12">
              <dt className="label text-cream/65">{k}</dt>
              <dd className="headline mt-3 text-[clamp(1.5rem,2.8vw,2.3rem)]">{v}</dd>
            </div>
          ))}
        </dl>
      </header>

      {/* ================= A. RACE BRIEFING ================= */}
      <section className="relative overflow-hidden bg-cream py-24 sm:py-28">
        <TrackLines seed={72} />
        <div className="wrap relative">
          <Reveal>
            <Part letter="A" title="Race Briefing" sub="Background, objectives and purpose" />
          </Reveal>
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
            <Reveal>
              <div className="space-y-6 font-serif text-[clamp(1.35rem,2.5vw,1.95rem)] leading-[1.32] text-ink">
                {praana.description.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <p className="mt-8 max-w-xl text-[1.05rem] leading-[1.75] text-charcoal">
                Praana 2026 was the major group project of my {driver.module} season. I led our team of seven{' '}
                {driver.programme} students, and we organised the camp together with the {praana.partner}.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="space-y-10">
              <div>
                <p className="label text-rosso">Objectives</p>
                <ul className="mt-5 border-t border-ink">
                  {praana.objectives.map((o, i) => (
                    <li key={o} className="flex gap-5 border-b border-pit py-4 text-[1.02rem] leading-relaxed text-charcoal">
                      <span className="label mt-1.5 text-rosso">0{i + 1}</span>
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="label text-rosso">The event was open to</p>
                <ul className="mt-5 grid grid-cols-1 gap-px border border-pit bg-pit sm:grid-cols-2">
                  {praana.audience.map((a) => (
                    <li key={a} className="bg-cream-paper p-4 text-[0.98rem] leading-snug text-charcoal">
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= B. THE PIT CREW ================= */}
      <section className="relative overflow-hidden bg-ink py-24 text-cream sm:py-28">
        <TrackLines seed={73} tone="dark" />
        <div className="wrap relative">
          <Reveal>
            <Part letter="B" title="The Pit Crew" sub="Organising team · seven members" tone="dark" />
          </Reveal>
          <ol className="grid gap-px border border-cream/15 bg-cream/15 sm:grid-cols-2 lg:grid-cols-4">
            <li className="bg-rosso sm:col-span-2">
              <Reveal className="flex h-full min-h-[15rem] flex-col justify-between gap-8 p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <span className="headline text-[clamp(4rem,9vw,6.5rem)] leading-[0.8]">0{leader.no}</span>
                  <span className="label bg-cream px-2.5 py-2 text-rosso">{leader.role}</span>
                </div>
                <div>
                  <p className="font-display text-[clamp(1.7rem,3.4vw,2.5rem)] font-black uppercase leading-none tracking-tight">
                    {leader.name}
                  </p>
                  <p className="mt-3 font-serif text-[1.35rem] leading-tight">{leader.note}</p>
                  <p className="label mt-4 text-cream/80">That is me. I led the group.</p>
                </div>
              </Reveal>
            </li>
            {crew.map((m, i) => (
              <li key={m.no} className="bg-ink">
                <Reveal delay={(i % 4) * 0.06} className="flex h-full min-h-[11.5rem] flex-col justify-between p-6">
                  <div className="flex items-start justify-between gap-3">
                    <span className="headline text-outline text-[3.2rem] text-cream/45">0{m.no}</span>
                    {m.role && <span className="label bg-rosso px-2 py-1.5 text-cream">{m.role}</span>}
                  </div>
                  <div>
                    <p className="font-display text-[1.2rem] font-extrabold uppercase leading-tight tracking-tight">{m.name}</p>
                    <p className="label mt-2.5 text-cream/45">Organising team</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
          <div className="hatch-light mt-px flex flex-wrap items-end justify-between gap-6 border border-t-0 border-cream/15 p-6 sm:p-8">
            <div>
              <p className="label text-rosso">Project partner</p>
              <p className="headline mt-3 text-[clamp(1.6rem,3.6vw,2.8rem)]">{praana.partner}</p>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-cream/60">
              The Leo Club asked our group to provide a secretary and a treasurer. I became the secretary and
              G.R.M.D. Gamlath became the treasurer.
            </p>
          </div>
        </div>
      </section>

      {/* ================= C. THE RACE CONTROL ROOM ================= */}
      <section className="relative overflow-hidden bg-cream-paper py-24 sm:py-28">
        <div className="wrap relative">
          <Reveal>
            <Part letter="C" title="The Race Control Room" sub="Team coordination with the Leo Club" />
          </Reveal>
          <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
            <Reveal>
              <Story paragraphs={controlRoom.story} />
            </Reveal>
            <Reveal delay={0.1}>
              <div className="grid gap-px border border-pit bg-pit">
                {controlRoom.channels.map((c) => (
                  <div key={c.label} className="bg-cream p-5 sm:p-6">
                    <p className="label text-rosso">{c.label}</p>
                    <p className="mt-3 font-display text-[1.2rem] font-extrabold uppercase leading-tight tracking-tight text-ink">
                      {c.title}
                    </p>
                    <ul className="mt-3 space-y-1.5">
                      {c.items.map((item) => (
                        <li key={item} className="flex gap-3 text-[0.98rem] leading-relaxed text-charcoal">
                          <span className="mt-[0.7em] h-[2px] w-3 shrink-0 bg-rosso" aria-hidden />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal>
            <p className="label mb-4 mt-14 text-charcoal-mid">Who handled what</p>
            <div className="grid gap-px border border-ink bg-ink md:grid-cols-2">
              {controlRoom.split.map((s) => (
                <div key={s.who} className="bg-cream-paper p-6">
                  <p className="font-display text-[1.25rem] font-extrabold uppercase leading-tight tracking-tight text-ink">{s.who}</p>
                  <p className="mt-2.5 text-[1.02rem] leading-relaxed text-charcoal">{s.what}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= D. RACE STRATEGY AND PLANNING ================= */}
      <section className="relative overflow-hidden bg-cream py-24 sm:py-28">
        <TrackLines seed={74} />
        <div className="wrap relative">
          <Reveal>
            <Part letter="D" title="Race Strategy and Planning" sub="From first discussion to a ready venue" />
          </Reveal>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_21rem] lg:gap-14">
            <ol className="grid gap-px border border-pit bg-pit sm:grid-cols-2">
              {strategySteps.map((s, i) => (
                <li key={s.title} className="bg-cream-paper">
                  <Reveal delay={(i % 2) * 0.06} className="h-full border-t-[3px] border-rosso p-5 sm:p-6">
                    <p className="label text-rosso">Stage 0{i + 1}</p>
                    <p className="mt-3 font-display text-[1.15rem] font-extrabold uppercase leading-tight tracking-tight text-ink">
                      {s.title}
                    </p>
                    <p className="mt-2.5 text-[0.98rem] leading-relaxed text-charcoal-mid">{s.text}</p>
                  </Reveal>
                </li>
              ))}
            </ol>
            <Reveal delay={0.1}>
              <aside className="bg-ink p-6 text-cream sm:p-8 lg:sticky lg:top-28">
                <p className="label text-rosso">Planned project budget</p>
                <p className="headline mt-5 text-[clamp(2.6rem,6vw,3.6rem)] leading-[0.9]">{praana.budget}</p>
                <div className="mt-6 h-px w-full bg-cream/20" />
                <p className="mt-6 text-[0.98rem] leading-relaxed text-cream/75">{budgetNote}</p>
              </aside>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= E. RACE PROMOTION ================= */}
      <section className="relative overflow-hidden bg-ink py-24 text-cream sm:py-28">
        <TrackLines seed={76} tone="dark" />
        <div className="wrap relative">
          <Reveal>
            <Part letter="E" title="Race Promotion" sub="Spreading the word" tone="dark" />
          </Reveal>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.7fr] lg:gap-14">
            <Reveal>
              <Story paragraphs={promotion.story} tone="dark" />
              <p className="label mb-4 mt-10 text-rosso">The promotion team</p>
              <ul className="border-t border-cream/25">
                {promotion.team.map((m) => (
                  <li key={m.name} className="flex items-baseline justify-between gap-4 border-b border-cream/15 py-3.5">
                    <span className="font-display text-[1.08rem] font-extrabold uppercase leading-tight tracking-tight">{m.name}</span>
                    <span className="label shrink-0 text-cream/55">{m.from}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1} className="grid items-start gap-5 sm:grid-cols-[1.75fr_1fr]">
              <Exhibit slot={exhibits.flyers} ratio="aspect-[4/3]" tone="dark" onOpen={open} />
              <Exhibit slot={exhibits.poster} ratio="aspect-[1131/1600]" tone="dark" onOpen={open} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= F. PRE-RACE GARAGE SETUP ================= */}
      <section className="relative overflow-hidden bg-cream-paper py-24 sm:py-28">
        <div className="wrap relative">
          <Reveal>
            <Part letter="F" title="Pre-Race Garage Setup" sub="Venue preparation · the day before" />
          </Reveal>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1fr] lg:items-center lg:gap-16">
            <Reveal>
              <Exhibit slot={exhibits.hall} ratio="aspect-[4/5]" onOpen={open} />
            </Reveal>
            <Reveal delay={0.1}>
              <Story paragraphs={venuePrep.story} />
              <ul className="mt-10 grid gap-px border border-pit bg-pit sm:grid-cols-3">
                {venuePrep.checklist.map((c) => (
                  <li key={c} className="flex items-start gap-3 bg-cream p-4 text-[0.98rem] leading-snug text-charcoal">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center bg-rosso text-cream">
                      <Check size={13} strokeWidth={3} aria-hidden />
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= G. RACE DAY ================= */}
      <section className="relative overflow-hidden bg-ink py-24 text-cream sm:py-28">
        <TrackLines seed={75} tone="dark" />
        <div className="wrap relative">
          <Reveal>
            <Part letter="G" title="Race Day" sub={praana.date} tone="dark" />
          </Reveal>
          <Reveal>
            <p className="mb-10 max-w-3xl text-[1.06rem] leading-[1.78] text-cream/80">
              {raceDayStory} Select any frame to view the full photograph.
            </p>
          </Reveal>
          <PhotoGrid slots={raceDayPhotos} onOpen={open} />
        </div>
      </section>

      {/* ================= H. AN UNEXPECTED PIT STOP ================= */}
      <section className="relative overflow-hidden bg-cream py-24 sm:py-28">
        <TrackLines seed={78} />
        <div className="wrap relative">
          <Reveal>
            <Part letter="H" title="An Unexpected Pit Stop" sub="Refreshments and learning to adapt" />
          </Reveal>
          <ol className="grid gap-px border border-pit bg-pit sm:grid-cols-2 lg:grid-cols-4">
            {pitStop.map((s, i) => (
              <li key={s.label} className={i === 3 ? 'bg-ink text-cream' : 'bg-cream-paper'}>
                <Reveal delay={i * 0.06} className="flex h-full flex-col p-6">
                  <p className="label text-rosso">
                    0{i + 1} · {s.label}
                  </p>
                  <p className="mt-4 font-display text-[1.3rem] font-extrabold uppercase leading-tight tracking-tight">{s.title}</p>
                  <p className={`mt-3 text-[0.98rem] leading-relaxed ${i === 3 ? 'text-cream/80' : 'text-charcoal-mid'}`}>{s.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-charcoal-mid">
            The refreshment bags being packed at the venue are shown in Frame 05 of Race Day.
          </p>
        </div>
      </section>

      {/* ================= I. ONE TEAM. ONE MISSION. ================= */}
      <section className="relative overflow-hidden bg-cream-paper py-24 sm:py-28">
        <div className="wrap relative">
          <Reveal>
            <Part letter="I" title="One Team. One Mission." sub="The team behind the finish" />
          </Reveal>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <Reveal>
              <Story paragraphs={oneTeam.story} />
              <p className="label mb-4 mt-10 text-rosso">What we coordinated together</p>
              <ul className="grid gap-px border border-pit bg-pit sm:grid-cols-2">
                {oneTeam.areas.map((a, i) => (
                  <li
                    key={a}
                    className={`flex items-center gap-4 bg-cream p-4 text-[0.98rem] leading-snug text-charcoal ${
                      i === oneTeam.areas.length - 1 ? 'sm:col-span-2' : ''
                    }`}
                  >
                    <span className="label text-rosso">0{i + 1}</span>
                    {a}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1}>
              <Exhibit slot={exhibits.selfie} ratio="aspect-[16/10]" onOpen={open} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= J. CHAMPIONSHIP RESULTS ================= */}
      <section className="relative overflow-hidden bg-rosso py-24 text-cream sm:py-32">
        <TrackLines seed={77} tone="dark" />
        <div className="wrap relative">
          <Reveal>
            <Part letter="J" title="Championship Results" sub="Final classification" tone="red" />
          </Reveal>
          <div className="grid gap-10 lg:grid-cols-[auto_1fr] lg:items-end lg:gap-20">
            <Reveal>
              <p className="headline text-[clamp(8rem,30vw,24rem)] leading-[0.74]">{praana.donors}</p>
              <p className="headline mt-6 text-[clamp(1.5rem,3.6vw,3rem)]">Blood donors</p>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="font-serif text-[clamp(1.3rem,2.3vw,1.8rem)] leading-[1.35]">{praana.result}</p>
              <p className="mt-6 max-w-xl text-[1.02rem] leading-[1.75] text-cream/90">
                The campaign was open to office staff from the companies surrounding the university, university
                lecturers, students and management staff, and it supported community healthcare by encouraging
                voluntary blood donation.
              </p>
            </Reveal>
          </div>
        </div>
        <div className="chequer absolute inset-x-0 bottom-0 h-3 text-cream/30" aria-hidden />
      </section>

      {/* ================= K. POST-RACE REPORT ================= */}
      <section className="relative overflow-hidden bg-cream py-24 sm:py-28">
        <div className="wrap relative">
          <Reveal>
            <Part letter="K" title="Post-Race Report" sub="My personal reflection" />
          </Reveal>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_19rem] lg:gap-16">
            <div className="space-y-12">
              {reflection.map((r, i) => (
                <Reveal key={r.title}>
                  <div className="border-t border-ink pt-6">
                    <p className="label text-rosso">0{i + 1}</p>
                    <h3 className="mt-3 font-display text-[clamp(1.35rem,2.6vw,1.9rem)] font-extrabold uppercase leading-tight tracking-[-0.02em] text-ink">
                      {r.title}
                    </h3>
                    <div className="mt-5 max-w-3xl space-y-5 text-[1.08rem] leading-[1.8] text-charcoal">
                      {r.paragraphs.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.1}>
              <aside className="border border-pit bg-cream-paper p-6 lg:sticky lg:top-28">
                <p className="label text-charcoal-mid">Skills this project tested</p>
                <ul className="mt-5 space-y-3">
                  {reflectionSkills.map((s, i) => (
                    <li key={s} className="flex gap-4 text-[0.98rem] leading-snug text-charcoal">
                      <span className="label mt-0.5 text-rosso">0{i + 1}</span>
                      {s}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 border-t border-pit pt-5">
                  <p className="font-serif text-[1.3rem] leading-tight text-ink">{driver.preferredName}</p>
                  <p className="label mt-2 leading-relaxed text-charcoal-mid">Team Leader / Secretary · Praana 2026</p>
                </div>
              </aside>
            </Reveal>
          </div>
          <div className="mt-16 flex flex-wrap gap-x-10 gap-y-5">
            <ArrowLink to="/gallery">Open the paddock gallery</ArrowLink>
            <ArrowLink to="/report">Read the championship report</ArrowLink>
          </div>
        </div>
      </section>

      <Lightbox images={images} index={lightbox} onClose={() => setLightbox(null)} onIndex={setLightbox} />
    </article>
  )
}
