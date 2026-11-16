import { Link } from 'react-router-dom'
import { driver, nav } from '../data/site'

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="chequer h-3 w-full text-cream/20" aria-hidden />
      <div className="wrap grid gap-12 py-16 md:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="serif-cap text-3xl">{driver.initials}</p>
          <p className="headline text-3xl">{driver.surname}</p>
          <p className="label mt-6 leading-relaxed text-cream/55">
            The {driver.season} Professional Skills Championship
            <br />
            {driver.year}, {driver.semester} · {driver.courseCode}
          </p>
          <p className="mt-8 max-w-md text-sm leading-relaxed text-cream/50">
            This is a personal academic portfolio for the Professional Skills module. The Formula 1 and Ferrari-inspired
            styling is a creative theme only. The site is not affiliated with, endorsed by or connected to Ferrari,
            Formula 1 or any driver.
          </p>
        </div>
        <nav aria-label="Footer">
          <p className="label text-cream/45">Navigate</p>
          <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
            {nav.map((n) => (
              <li key={n.label}>
                <Link to={n.to} className="label text-cream/80 transition-colors hover:text-rosso">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-cream/10">
        <div className="wrap label flex flex-wrap items-center justify-between gap-3 py-5 leading-relaxed text-cream/40">
          <span>
            {driver.preferredName} · {driver.studentId}
          </span>
          <span>Nine race weekends · Eight completed · One DNS</span>
        </div>
      </div>
    </footer>
  )
}
