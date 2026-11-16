import { Reveal, SectionHeading } from '../components/ui'
import { TrackLines } from '../components/TrackLines'
import { asset, driver } from '../data/site'

const panels: { k: string; v: string; wide?: boolean }[] = [
  { k: 'Driver', v: driver.identity },
  { k: 'Name', v: driver.preferredName },
  { k: 'Student ID', v: driver.studentId },
  { k: 'Season', v: driver.season },
  { k: 'Category', v: `${driver.year}, ${driver.semester}` },
  { k: 'Championship', v: driver.module },
  { k: 'Course code', v: driver.courseCode },
  { k: 'University', v: driver.university },
  { k: 'Lecturer in charge', v: driver.lecturer, wide: true },
]

export function DriverProfile() {
  return (
    <section id="driver" className="relative overflow-hidden bg-cream-paper py-24 sm:py-32">
      <TrackLines seed={12} className="opacity-70" />
      <div className="wrap relative">
        <Reveal>
          <SectionHeading index="02" kicker="Off track" thin="Driver" heavy="Profile" />
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1fr)] lg:gap-20">
          {/* portrait: the original, unedited photograph */}
          <Reveal className="relative">
            <div className="relative">
              <div className="absolute -left-3 -top-3 h-16 w-16 border-l-[3px] border-t-[3px] border-rosso" aria-hidden />
              <img
                src={asset('assets/hero/chamika-kaushalya-portrait.jpg')}
                alt={`${driver.preferredName}, portrait in a black suit`}
                loading="lazy"
                width={1254}
                height={1254}
                className="aspect-[4/5] w-full object-cover object-[62%_20%]"
              />
              <div className="absolute bottom-0 left-0 bg-ink px-4 py-3 text-cream">
                <p className="label text-cream/55">Driver</p>
                <p className="headline mt-1.5 text-xl">{driver.identity}</p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="label text-rosso">The driver</p>
              <p className="mt-4 font-serif text-[clamp(1.9rem,3.6vw,3.1rem)] leading-[1.08] tracking-[-0.01em]">
                {driver.preferredName}
              </p>
              <div className="mt-7 space-y-5 text-[1.08rem] leading-[1.75] text-charcoal">
                <p>
                  I am {driver.preferredName}, competing this season as {driver.identity}. I am a {driver.year}{' '}
                  {driver.programme} student at {driver.university}, undertaking the {driver.module} module (
                  {driver.courseCode}) in {driver.semester} as part of my academic journey.
                </p>
                <p>
                  This website records that journey as a championship season. Each week of the module is a race
                  weekend, each professional skill is a performance metric, and our group project, Praana 2026, is the
                  season finale.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <dl className="mt-10 grid grid-cols-2 gap-px border border-pit bg-pit sm:grid-cols-3">
                {panels.map((p) => (
                  <div key={p.k} className={`bg-cream-paper p-4 sm:p-5 ${p.wide ? 'col-span-2 sm:col-span-1' : ''}`}>
                    <dt className="label text-charcoal-light">{p.k}</dt>
                    <dd className="mt-2.5 font-display text-[1.02rem] font-extrabold uppercase leading-tight tracking-tight text-ink">
                      {p.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.15}>
              <dl className="mt-10 grid grid-cols-4 gap-4 border-t border-ink pt-6">
                {[
                  ['09', 'Race weekends'],
                  ['08', 'Completed'],
                  ['01', 'DNS'],
                  ['01', 'Group project'],
                ].map(([n, l], i) => (
                  <div key={l}>
                    <dd className={`headline text-[clamp(2rem,4.4vw,3.6rem)] ${i === 2 ? 'text-charcoal-light' : i === 3 ? 'text-rosso' : ''}`}>
                      {n}
                    </dd>
                    <dt className="label mt-2 leading-relaxed text-charcoal-mid">{l}</dt>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
