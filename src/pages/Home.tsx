import { useEffect, useState } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import type { SkillId } from '../data/types'
import { Championship } from '../sections/Championship'
import { DriverProfile } from '../sections/DriverProfile'
import { Hero } from '../sections/Hero'
import { FinaleBanner, GarageTeaser, ResultsTeaser, Ticker } from '../sections/HomeExtras'
import { Telemetry } from '../sections/Telemetry'

export function Home() {
  const [params] = useSearchParams()
  const location = useLocation()
  const section = params.get('section')
  const [skill, setSkill] = useState<SkillId | null>(null)

  // Section links look like /?section=driver, so scroll to that section.
  useEffect(() => {
    if (!section) {
      window.scrollTo({ top: 0 })
      return
    }
    const el = document.getElementById(section)
    if (!el) return
    const id = window.setTimeout(() => {
      const top = el.getBoundingClientRect().top + window.scrollY - 64
      window.scrollTo({ top, behavior: 'smooth' })
    }, 60)
    return () => window.clearTimeout(id)
    // location.key changes on every navigation, so clicking the same
    // section link twice still scrolls.
  }, [section, location.key])

  return (
    <>
      <Hero />
      <Ticker />
      <DriverProfile />
      <Telemetry selected={skill} onSelect={setSkill} />
      <Championship selected={skill} onClear={() => setSkill(null)} />
      <FinaleBanner />
      <GarageTeaser />
      <ResultsTeaser />
    </>
  )
}
