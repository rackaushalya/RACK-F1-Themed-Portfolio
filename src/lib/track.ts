/**
 * Procedural circuit-style line art.
 * These are decorative, abstract loops. They are not maps of real circuits.
 */

function mulberry32(seed: number) {
  let a = seed >>> 0
  return () => {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

type Pt = [number, number]

/** Closed Catmull-Rom spline through the points, as an SVG path string. */
function smoothClosed(pts: Pt[], tension = 0.5): string {
  const n = pts.length
  const f = (v: number) => v.toFixed(1)
  let d = `M${f(pts[0][0])},${f(pts[0][1])}`
  for (let i = 0; i < n; i++) {
    const p0 = pts[(i - 1 + n) % n]
    const p1 = pts[i]
    const p2 = pts[(i + 1) % n]
    const p3 = pts[(i + 2) % n]
    const c1: Pt = [p1[0] + ((p2[0] - p0[0]) * tension) / 3, p1[1] + ((p2[1] - p0[1]) * tension) / 3]
    const c2: Pt = [p2[0] - ((p3[0] - p1[0]) * tension) / 3, p2[1] - ((p3[1] - p1[1]) * tension) / 3]
    d += ` C${f(c1[0])},${f(c1[1])} ${f(c2[0])},${f(c2[1])} ${f(p2[0])},${f(p2[1])}`
  }
  return `${d} Z`
}

export type CircuitOptions = {
  seed: number
  /** Centre and radii of the loop. */
  cx: number
  cy: number
  rx: number
  ry: number
  /** Number of corners. */
  corners?: number
  /** 0 to 1: how far corners wander from the ellipse. */
  wobble?: number
}

export function circuitPath({ seed, cx, cy, rx, ry, corners = 11, wobble = 0.42 }: CircuitOptions): string {
  const rnd = mulberry32(seed)
  const pts: Pt[] = []
  const rot = rnd() * Math.PI * 2
  for (let i = 0; i < corners; i++) {
    const a = rot + (i / corners) * Math.PI * 2 + (rnd() - 0.5) * (Math.PI / corners) * 0.9
    const k = 1 - wobble + rnd() * wobble * 1.6
    pts.push([cx + Math.cos(a) * rx * k, cy + Math.sin(a) * ry * k])
  }
  return smoothClosed(pts, 1.15)
}
