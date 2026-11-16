/**
 * DRIVER PERFORMANCE: PROFESSIONAL SKILLS
 * ------------------------------------------------------------------
 * The six professional skills that run through the module. The level is my
 * own self-assessment: HIGH / STRONG across all assessed skills. These are
 * qualitative labels, not official grades, and no numerical scores are shown.
 */
import type { SkillId } from './types'

export const SELF_ASSESSMENT = 'HIGH / STRONG'

export type Skill = {
  id: SkillId
  code: string
  name: string
  focus: string
  /** Short academic explanation drawn from the lecture content. */
  explanation: string
  /** Race weekend rounds this skill connects to. */
  rounds: number[]
  /** True when the Praana 2026 finale is also evidence for this skill. */
  finale?: boolean
  /** Supporting evidence: what the weeks covered and what I did. */
  evidence: string
  /** Honest caveat shown on the card, where one applies. */
  caveat?: string
}

export const skills: Skill[] = [
  {
    id: 'self-awareness',
    code: 'SA',
    name: 'Self-awareness',
    focus: 'Emotional intelligence',
    explanation:
      'Understanding myself and how others see me, and noticing and managing emotions in myself and in other people.',
    rounds: [1, 5],
    evidence:
      "Race Weekend 01 introduced the Johari Window, and I drew my own Professional Identity Tree of values, beliefs, attitudes and character. Race Weekend 05 covered emotional intelligence, Goleman's five competencies and self-regulation strategies.",
  },
  {
    id: 'career-readiness',
    code: 'CR',
    name: 'Career readiness',
    focus: 'Interview skills and CV writing',
    explanation:
      'Being prepared to apply for a role: a tailored, error-free CV and clear, structured answers in an interview.',
    rounds: [3, 4],
    evidence:
      "Race Weekend 03 covered interview skills: the 7 C's of communication, the STAR method and interview do's and don'ts. Race Weekend 04 covered CV writing, including how to get past the ATS, and I took my own printed CV to the session.",
  },
  {
    id: 'personal-branding',
    code: 'PB',
    name: 'Personal branding',
    focus: 'Portfolio and brand',
    explanation:
      'Deliberately shaping the perception people hold of me, and proving it with an organised portfolio of evidence.',
    rounds: [2, 4, 6],
    evidence:
      'Race Weekend 02 covered portfolio writing and the types of portfolio. Race Weekend 04 treated the CV as a targeted marketing document. Race Weekend 06 covered building a personal brand.',
  },
  {
    id: 'communication-etiquette',
    code: 'CE',
    name: 'Communication & etiquette',
    focus: 'Professional conduct',
    explanation:
      'Communicating and behaving correctly for the time and place: on the phone, by email, online, in interviews and at the table.',
    rounds: [3, 7, 8],
    evidence:
      'Race Weekend 03 covered the communication skills used at an interview. Race Weekend 07 covered professional etiquette in communication. Race Weekend 08 covered dining etiquette.',
  },
  {
    id: 'negotiation',
    code: 'NG',
    name: 'Negotiation',
    focus: 'Win-win thinking',
    explanation: 'Reaching an agreement that works for both sides. This is the topic of Race Weekend 09.',
    rounds: [9],
    evidence:
      'Race Weekend 09, Negotiation Skills, is recorded as DNS (Did Not Start). There is no lecture evidence for this skill in this portfolio.',
    caveat: 'Self-assessed only. No lecture evidence: RW09 is a DNS.',
  },
  {
    id: 'teamwork',
    code: 'TW',
    name: 'Teamwork',
    focus: 'Group work',
    explanation: 'Sharing ideas, dividing the work and contributing so that a group finishes something together.',
    rounds: [2],
    finale: true,
    evidence:
      'In the Race Weekend 02 Paper Craft Challenge our group built and presented a newspaper tote bag. In the season finale, Praana 2026, I led our team of seven in organising a blood donation programme with the Leo Club of SCU, and it received over 40 blood donors.',
  },
]

export const skillById = (id: SkillId) => skills.find((s) => s.id === id)!
