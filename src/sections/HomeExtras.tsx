import { Link } from 'react-router-dom'
import { TrackLines } from '../components/TrackLines'
import { ArrowLink, Reveal, SectionHeading } from '../components/ui'
import { galleryItems } from '../data/gallery'
import { praana } from '../data/praana'
import { pad, races } from '../data/races'
import { asset, driver } from '../data/site'

/* ------------------------------------------------------------------ */
/* Pit-lane ticker                                                      */
/* ------------------------------------------------------------------ */
const tickerItems = [
  'Nine race weekends',
  'Eight completed',
  'One DNS',
  'One major group project',
  'Praana 2026',
  `${driver.year}, ${driver.semester}`,
  `${driver.module} · ${driver.courseCode}`,
]

export function Ticker() {
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden}>
      {tickerItems.map((t) => (
        <li key={t} className="label flex items-center gap-8 whitespace-nowrap pr-8 text-cream">
          <span>{t}</span>
          <span className="h-1.5 w-1.5 bg-rosso" />
        </li>
      ))}
    </ul>
  )
  return (
    <div className="overflow-hidden bg-ink py-4">
      <div className="ticker-track flex w-max">
        {row(false)}
        {row(true)}
        {row(true)}
        {row(true)}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Season finale banner: the one place red is used as a field           */
/* ------------------------------------------------------------------ */
export function FinaleBanner() {
  return (
    <section id="finale" className="relative overflow-hidden bg-rosso text-cream">
      <TrackLines seed={44} tone="dark" className="opacity-80" />
      <div className="wrap relative grid gap-12 py-24 sm:py-28 lg:grid-cols-[1.35fr_1fr] lg:items-end">
        <Reveal>
          <p className="label flex items-center gap-4 text-cream/80">
            <span>06</span>
            <span className="h-px w-10 bg-cream/40" />
            <span>The 2026 season finale</span>
          </p>
          <h2 className="mt-7">
            <span className="serif-cap block text-[clamp(2.2rem,5.6vw,5rem)]">Praana</span>
            <span className="headline block text-[clamp(4.2rem,15vw,13rem)]">2026</span>
          </h2>
          <p className="headline mt-4 text-[clamp(1.2rem,2.4vw,1.9rem)]">{praana.finaleTitle}</p>
        </Reveal>

        <Reveal delay={0.12}>
          <dl className="grid grid-cols-2 gap-px border border-cream/25 bg-cream/25">
            {[
              ['Blood donors', praana.donors],
              ['Race day', praana.date],
              ['Project partner', praana.partner],
              ['Pit crew', '7 members'],
            ].map(([k, v]) => (
              <div key={k} className="bg-rosso p-5">
                <dt className="label text-cream/70">{k}</dt>
                <dd className="mt-2.5 font-display text-xl font-extrabold uppercase leading-tight tracking-tight">{v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 max-w-md text-[1.02rem] leading-relaxed text-cream/90">{praana.description[0]}</p>
          <div className="mt-7">
            <ArrowLink to="/finale" tone="red">
              Enter the season finale
            </ArrowLink>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Garage teaser: a strip of evidence                                   */
/* ------------------------------------------------------------------ */
export function GarageTeaser() {
  // One representative image from each part of the season, in a fixed order.
  const wanted = ['rw4-0', 'praana-0', 'rw1-0', 'praana-6', 'rw2-0']
  const strip = wanted
    .map((id) => galleryItems.find((g) => g.id === id))
    .filter((g): g is (typeof galleryItems)[number] => Boolean(g))
  return (
    <section id="garage" className="relative overflow-hidden bg-cream-paper py-24 sm:py-32">
      <div className="wrap">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <Reveal>
            <SectionHeading index="07" kicker="The garage · Work and evidence" thin="The paddock" heavy="Gallery" />
          </Reveal>
          <Reveal delay={0.1}>
            <ArrowLink to="/gallery">Open the full gallery</ArrowLink>
          </Reveal>
        </div>
        <Reveal className="mt-12">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {strip.map((g, i) => (
              <Link
                key={g.id}
                to="/gallery"
                className={`group relative block overflow-hidden bg-ink ${i === 0 ? 'col-span-2 sm:col-span-1' : ''}`}
              >
                <img
                  src={asset(g.src)}
                  alt={g.alt}
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover opacity-90 transition-[transform,opacity] duration-700 group-hover:scale-105 group-hover:opacity-100"
                />
                <span className="label absolute bottom-0 left-0 bg-ink px-2.5 py-2 text-cream">{g.tag.split(' · ')[0]}</span>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Results teaser: the classification table                              */
/* ------------------------------------------------------------------ */
export function ResultsTeaser() {
  return (
    <section id="results" className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <TrackLines seed={58} />
      <div className="wrap relative grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
        <div>
          <Reveal>
            <SectionHeading index="08" kicker="Results · Final reflection" thin="Championship" heavy="Report" />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-md text-[1.06rem] leading-[1.75] text-charcoal">
              The season in review: the overall learning journey, the professional skills developed, what the group
              project taught me, and how I will apply it all professionally.
            </p>
            <div className="mt-8">
              <ArrowLink to="/report">Read the championship report</ArrowLink>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <p className="label mb-4 text-charcoal-mid">Season classification</p>
          <ol className="border-t border-ink">
            {races.map((r) => (
              <li key={r.slug} className="border-b border-pit">
                <Link
                  to={`/race/${r.slug}`}
                  className="group grid grid-cols-[2.6rem_1fr_auto] items-center gap-3 py-3.5 transition-colors hover:text-rosso"
                >
                  <span className="label text-rosso">{pad(r.round)}</span>
                  <span className={`font-display text-[1.02rem] font-bold uppercase leading-tight tracking-tight ${r.status === 'dns' ? 'text-charcoal-light' : ''}`}>
                    {r.topic}
                  </span>
                  <span className={`label ${r.status === 'dns' ? 'text-charcoal-light' : 'text-ink'}`}>
                    {r.status === 'dns' ? 'DNS' : 'Complete'}
                  </span>
                </Link>
              </li>
            ))}
            <li className="border-b border-ink">
              <Link
                to="/finale"
                className="grid grid-cols-[2.6rem_1fr_auto] items-center gap-3 py-3.5 transition-colors hover:text-rosso"
              >
                <span className="label text-rosso">FIN</span>
                <span className="font-display text-[1.02rem] font-bold uppercase leading-tight tracking-tight">
                  Praana 2026: Blood Donation Programme
                </span>
                <span className="label">40+ donors</span>
              </Link>
            </li>
          </ol>
        </Reveal>
      </div>
    </section>
  )
}
