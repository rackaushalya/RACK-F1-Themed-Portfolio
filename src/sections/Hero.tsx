import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDownLeft, ArrowDownRight } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { TrackLines } from '../components/TrackLines'
import { asset, driver, hero } from '../data/site'

type Side = 'on' | 'off' | null
const EASE = [0.22, 1, 0.36, 1] as const

function Lockup({
  side,
  thin,
  description,
  to,
  hovered,
  setHovered,
  delay,
}: {
  side: 'on' | 'off'
  thin: string
  description: string
  to: string
  hovered: Side
  setHovered: (s: Side) => void
  delay: number
}) {
  const reduce = useReducedMotion()
  const isOn = side === 'on'
  const dim = hovered !== null && hovered !== side
  const Arrow = isOn ? ArrowDownLeft : ArrowDownRight
  return (
    <Link
      to={to}
      onMouseEnter={() => setHovered(side)}
      onMouseLeave={() => setHovered(null)}
      onFocus={() => setHovered(side)}
      onBlur={() => setHovered(null)}
      aria-label={`${thin} track: ${description}`}
      className={`group relative flex flex-col transition-opacity duration-500 ${isOn ? 'items-end text-right' : 'items-start text-left'} ${
        dim ? 'opacity-35' : 'opacity-100'
      }`}
    >
      <motion.span
        className="relative block text-[clamp(2.35rem,5.5vw,6rem)] max-lg:text-[clamp(2.35rem,9.5vw,5.2rem)]"
        initial={reduce ? false : { opacity: 0, y: 34 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay, ease: EASE }}
      >
        <span className="serif-cap block text-[1em] transition-[letter-spacing] duration-500 group-hover:tracking-[0.02em]">
          {thin}
        </span>
        <span className="headline -mt-[0.06em] block text-[1em]">Track</span>

        {/* racing-red handwritten accent crossing the lockup */}
        {isOn && (
          <motion.span
            aria-hidden
            className="pointer-events-none absolute right-[0.5em] top-[-0.06em] block origin-center -rotate-[13deg] font-script text-[1.42em] leading-none text-rosso mix-blend-multiply"
            initial={reduce ? false : { clipPath: 'inset(0 100% 0 0)' }}
            animate={{ clipPath: 'inset(-20% -10% -20% -10%)' }}
            transition={{ duration: 0.8, delay: delay + 0.75, ease: [0.65, 0, 0.35, 1] }}
          >
            On
          </motion.span>
        )}
        <span
          aria-hidden
          className={`absolute -bottom-2 h-[3px] w-full scale-x-0 bg-rosso transition-transform duration-500 group-hover:scale-x-100 ${
            isOn ? "right-0 origin-right" : "left-0 origin-left"
          }`}
        />
      </motion.span>

      <motion.span
        className="mt-5 block max-w-[13.5rem] text-[0.82rem] leading-snug text-charcoal sm:mt-7 sm:max-w-[13rem] sm:text-[0.95rem] xl:max-w-[15.5rem] xl:text-[0.98rem]"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: delay + 0.35 }}
      >
        {description}
      </motion.span>

      <motion.span
        className="btn-square mt-4 group-hover:translate-y-1 sm:mt-5"
        initial={reduce ? false : { opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.5 }}
      >
        <Arrow size={18} strokeWidth={2.4} aria-hidden />
      </motion.span>
    </Link>
  )
}

export function Hero() {
  const reduce = useReducedMotion()
  const [hovered, setHovered] = useState<Side>(null)

  return (
    <section id="grid" className="relative h-[100svh] min-h-[620px] overflow-hidden bg-cream lg:min-h-[680px]">
      <TrackLines seed={3} lap />

      {/* The stage: an inset frame the two cut-outs are anchored to. */}
      <div className="absolute inset-x-0 bottom-[7%] top-[15%] overflow-hidden sm:inset-x-[4.6vw] lg:top-[18%]">
        {/* LEFT: Lewis Hamilton slot (always left) */}
        <motion.div
          className="pointer-events-none absolute bottom-0 left-0 flex h-[44%] items-end lg:h-full"
          initial={reduce ? false : { opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0, scale: hovered === 'on' ? 1.025 : 1 }}
          transition={{ duration: 1.1, ease: EASE }}
          style={{ transformOrigin: 'left bottom' }}
        >
          <img
            src={asset(hero.leftImage)}
            alt={hero.leftAlt}
            className="h-full w-auto max-w-none -translate-x-[16%] lg:h-[min(100%,38vw)]"
            draggable={false}
          />
        </motion.div>

        {/* RIGHT: Chamika (always right) */}
        <motion.div
          className="pointer-events-none absolute bottom-0 right-0 flex h-[44%] items-end justify-end lg:h-full"
          initial={reduce ? false : { opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0, scale: hovered === 'off' ? 1.025 : 1 }}
          transition={{ duration: 1.1, ease: EASE }}
          style={{ transformOrigin: 'right bottom' }}
        >
          <img
            src={asset(hero.rightImage)}
            alt={hero.rightAlt}
            className="h-full w-auto max-w-none translate-x-[22%] lg:h-[min(100%,38vw)]"
            draggable={false}
          />
        </motion.div>

        {/* CENTRE: ON TRACK / OFF TRACK */}
        <div className="absolute inset-x-0 top-0 flex h-[56%] items-center justify-center px-4 lg:h-full">
          <h1 className="sr-only">
            {driver.identity} · The {driver.season} Professional Skills Championship
          </h1>
          <div className="grid grid-cols-2 gap-[5vw] lg:gap-[4.2vw]">
            <Lockup
              side="on"
              thin="On"
              description="My academic journey, professional skills and the 2026 championship."
              to="/?section=season"
              hovered={hovered}
              setHovered={setHovered}
              delay={0.35}
            />
            <Lockup
              side="off"
              thin="Off"
              description="My personal profile and introduction, away from the timing screens."
              to="/?section=driver"
              hovered={hovered}
              setHovered={setHovered}
              delay={0.5}
            />
          </div>
        </div>
      </div>

      {/* technical footer line */}
      <motion.div
        className="label absolute inset-x-0 bottom-0 flex h-[7%] items-center justify-between px-5 text-charcoal-mid sm:px-[4.6vw]"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <span>
          {driver.season} · {driver.courseCode}
        </span>
        <span className="hidden sm:inline">
          {driver.year}, {driver.semester} · {driver.module}
        </span>
        <span>Scroll ↓</span>
      </motion.div>
    </section>
  )
}
