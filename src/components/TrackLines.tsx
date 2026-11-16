import { useMemo } from 'react'
import { circuitPath } from '../lib/track'

/**
 * Subtle grey racetrack contour lines for section backgrounds.
 * Purely decorative: hidden from assistive technology.
 */
export function TrackLines({
  seed = 7,
  tone = 'light',
  lap = false,
  className = '',
}: {
  seed?: number
  tone?: 'light' | 'dark'
  /** Show one slow red marker travelling round a line. */
  lap?: boolean
  className?: string
}) {
  const paths = useMemo(
    () => [
      circuitPath({ seed: seed * 11 + 1, cx: 720, cy: 420, rx: 520, ry: 300, corners: 12, wobble: 0.5 }),
      circuitPath({ seed: seed * 11 + 2, cx: 330, cy: 300, rx: 330, ry: 250, corners: 9, wobble: 0.55 }),
      circuitPath({ seed: seed * 11 + 3, cx: 1120, cy: 520, rx: 360, ry: 260, corners: 10, wobble: 0.5 }),
      circuitPath({ seed: seed * 11 + 4, cx: 760, cy: 640, rx: 420, ry: 170, corners: 8, wobble: 0.45 }),
    ],
    [seed],
  )
  const stroke = tone === 'dark' ? 'rgba(243,239,230,0.09)' : 'rgba(46,45,42,0.13)'
  return (
    <svg
      aria-hidden
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      viewBox="0 0 1440 840"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      {paths.map((d, i) => (
        <path key={i} d={d} stroke={stroke} strokeWidth={1.1} vectorEffect="non-scaling-stroke" />
      ))}
      {lap && (
        <path
          d={paths[0]}
          pathLength={1000}
          className="lap-marker"
          stroke="#D40000"
          strokeWidth={2}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      )}
    </svg>
  )
}

/** Small abstract circuit glyph for a race card. Decorative, not a real map. */
export function CircuitGlyph({
  round,
  className = '',
  muted = false,
}: {
  round: number
  className?: string
  muted?: boolean
}) {
  const d = useMemo(
    () => circuitPath({ seed: round * 97 + 13, cx: 100, cy: 70, rx: 78, ry: 46, corners: 8 + (round % 4), wobble: 0.5 }),
    [round],
  )
  return (
    <svg aria-hidden viewBox="0 0 200 140" className={className} fill="none">
      <path d={d} stroke="currentColor" strokeWidth={2.4} strokeLinejoin="round" opacity={muted ? 0.35 : 0.9} />
      {!muted && (
        <path
          d={d}
          pathLength={100}
          strokeDasharray="7 93"
          stroke="#D40000"
          strokeWidth={4}
          strokeLinecap="round"
        />
      )}
    </svg>
  )
}
