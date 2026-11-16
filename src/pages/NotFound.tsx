import { TrackLines } from '../components/TrackLines'
import { ArrowLink } from '../components/ui'

export function NotFound() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-cream pt-28">
      <TrackLines seed={99} />
      <div className="wrap relative">
        <p className="label text-rosso">Off the racing line</p>
        <h1 className="mt-6">
          <span className="serif-cap block text-[clamp(2rem,5vw,4rem)]">Page</span>
          <span className="headline block text-[clamp(3rem,10vw,8rem)]">Not found</span>
        </h1>
        <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-charcoal-mid">
          This page is not part of the 2026 calendar. Head back to the starting grid.
        </p>
        <div className="mt-8">
          <ArrowLink to="/">Back to the starting grid</ArrowLink>
        </div>
      </div>
    </section>
  )
}
