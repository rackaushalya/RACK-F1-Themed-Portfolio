import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { TrackLines } from '../components/TrackLines'
import { ArrowLink, Reveal, SectionHeading } from '../components/ui'
import { praana } from '../data/praana'
import { pad, races } from '../data/races'
import { reportSections } from '../data/report'
import { driver } from '../data/site'
import { SELF_ASSESSMENT, skills } from '../data/skills'

export function ReportPage() {
  const reduce = useReducedMotion()
  return (
    <article>
      {/* ---------- header ---------- */}
      <header className="relative overflow-hidden bg-cream pb-16 pt-36 sm:pt-44">
        <TrackLines seed={83} lap />
        <div className="wrap relative">
          <Reveal>
            <SectionHeading index="08" kicker="Results · Final reflection" thin="Championship" heavy="Report" as="h1" />
          </Reveal>
          <Reveal delay={0.08}>
            <p className="headline mt-8 text-[clamp(1.3rem,2.6vw,2rem)] text-rosso">The season in review</p>
          </Reveal>

          <dl className="mt-12 grid grid-cols-2 gap-px border border-pit bg-pit lg:grid-cols-4">
            {[
              ['Race weekends', '09'],
              ['Completed', '08'],
              ['DNS', '01'],
              ['Finale result', `${praana.donors} donors`],
            ].map(([k, v]) => (
              <div key={k} className="bg-cream-paper p-5 sm:p-6">
                <dt className="label text-charcoal-light">{k}</dt>
                <dd className="headline mt-3 text-[clamp(1.8rem,4vw,3.2rem)]">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      {/* ---------- classification + skills ---------- */}
      <section className="bg-ink py-20 text-cream sm:py-24">
        <div className="wrap grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="label text-rosso">Season classification</p>
            <ol className="mt-6 border-t border-cream/25">
              {races.map((r) => (
                <li key={r.slug}>
                  <Link
                    to={`/race/${r.slug}`}
                    className="grid grid-cols-[2.6rem_1fr_auto] items-center gap-3 border-b border-cream/10 py-3.5 transition-colors hover:text-rosso"
                  >
                    <span className="label text-rosso">{pad(r.round)}</span>
                    <span className={`font-display font-bold uppercase leading-tight tracking-tight ${r.status === 'dns' ? 'text-cream/45' : ''}`}>
                      {r.topic}
                    </span>
                    <span className={`label ${r.status === 'dns' ? 'text-cream/45' : 'text-cream/80'}`}>
                      {r.status === 'dns' ? 'DNS' : 'Complete'}
                    </span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/finale"
                  className="grid grid-cols-[2.6rem_1fr_auto] items-center gap-3 py-3.5 transition-colors hover:text-rosso"
                >
                  <span className="label text-rosso">FIN</span>
                  <span className="font-display font-bold uppercase leading-tight tracking-tight">Praana 2026</span>
                  <span className="label text-cream/80">{praana.donors} donors</span>
                </Link>
              </li>
            </ol>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="label text-rosso">Driver performance · self-assessment</p>
            <ul className="mt-6 border-t border-cream/25">
              {skills.map((s) => (
                <li key={s.id} className="grid grid-cols-[2.6rem_1fr_auto] items-center gap-3 border-b border-cream/10 py-3.5">
                  <span className="label text-cream/45">{s.code}</span>
                  <span className="font-display font-bold uppercase leading-tight tracking-tight">{s.name}</span>
                  <span className="label bg-rosso px-2 py-1.5">{SELF_ASSESSMENT}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-relaxed text-cream/50">
              Levels are my own qualitative self-assessment. They are not official grades. Negotiation is self-assessed
              only: Race Weekend 09 was a DNS.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- the nine report sections ---------- */}
      <section className="relative bg-cream-paper py-24 sm:py-28">
        <div className="wrap">
          <div className="space-y-16">
            {reportSections.map((s) => (
              <Reveal key={s.no}>
                <div className="grid gap-6 border-t border-ink pt-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.5fr)] lg:gap-16">
                  <div>
                    <p className="label text-rosso">Section {s.no}</p>
                    <h2 className="headline mt-4 text-[clamp(1.7rem,3.4vw,2.7rem)]">{s.title}</h2>
                  </div>
                  <div className="space-y-6">
                    {s.facts.length > 0 && (
                      <div>
                        <p className="label mb-4 text-charcoal-mid">On the record</p>
                        <ul className="space-y-3">
                          {s.facts.map((f) => (
                            <li key={f} className="flex gap-4 text-[1.04rem] leading-[1.7] text-charcoal">
                              <span className="mt-[0.72em] h-[2px] w-4 shrink-0 bg-rosso" aria-hidden />
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <div className="max-w-3xl space-y-5 text-[1.08rem] leading-[1.8] text-ink">
                      {s.text.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- SEASON COMPLETE ---------- */}
      <section className="relative overflow-hidden bg-ink py-28 text-center text-cream sm:py-36">
        <TrackLines seed={88} tone="dark" lap />
        <div className="chequer absolute inset-x-0 top-0 h-4 text-cream/25" aria-hidden />
        <div className="wrap relative">
          <motion.p
            className="label text-rosso"
            initial={reduce ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Chequered flag
          </motion.p>
          <motion.h2
            className="mt-8"
            initial={reduce ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="serif-cap block text-[clamp(2.2rem,6vw,5.4rem)]">Season</span>
            <span className="headline block text-[clamp(3.2rem,11vw,10rem)]">Complete</span>
          </motion.h2>
          <p className="headline mt-6 text-[clamp(3rem,9vw,8rem)] text-rosso">{driver.season}</p>
          <div className="mx-auto mt-10 h-px w-24 bg-cream/30" />
          <p className="mt-10 leading-none">
            <span className="serif-cap block text-[clamp(1.6rem,3.4vw,2.8rem)]">{driver.initials}</span>
            <span className="headline block text-[clamp(1.9rem,4vw,3.3rem)]">{driver.surname}</span>
          </p>
          <p className="label mt-8 text-cream/60">Professional Skills Championship</p>
          <div className="mt-14 flex flex-wrap justify-center gap-x-10 gap-y-5">
            <ArrowLink to="/" tone="dark">
              Back to the starting grid
            </ArrowLink>
            <ArrowLink to="/?section=season" tone="dark">
              Review the season
            </ArrowLink>
          </div>
        </div>
      </section>
    </article>
  )
}
