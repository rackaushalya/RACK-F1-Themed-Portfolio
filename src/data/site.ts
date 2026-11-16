/**
 * SITE-WIDE IDENTITY AND SETTINGS
 * ------------------------------------------------------------------
 * My identity, the module details and the site navigation.
 */

/** Builds a path to a file inside /public that works on any host. */
export const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

export const driver = {
  identity: 'R.A.C.K. PERERA',
  initials: 'R.A.C.K.',
  surname: 'PERERA',
  preferredName: 'Chamika Kaushalya',
  studentId: 'SA25610158',
  module: 'Professional Skills',
  courseCode: 'IT1215',
  year: 'Year 2',
  semester: 'Semester 2',
  season: '2026',
  /** Used exactly as it appears in the academic sources. Not expanded. */
  university: 'SCU',
  programme: 'IT',
  /** Lecturer in charge of the module. */
  lecturer: 'Mrs. Ravihari Weerasinghe',
}

export const hero = {
  /**
   * LEFT SLOT: Lewis Hamilton, full Ferrari helmet, visor closed.
   * The photograph was supplied by me. Its background has been removed;
   * nothing else was changed. The untouched original is kept beside it as
   * public/assets/hero/lewis-hamilton-original.jpg (see ASSET_CREDITS.md).
   */
  leftImage: 'assets/hero/lewis-hamilton-ferrari-helmet.webp',
  leftAlt: 'Lewis Hamilton in a red Ferrari race suit and gold helmet with the visor closed, head bowed and arms crossed',

  /** RIGHT SLOT: Chamika's real portrait (background removed, face untouched). */
  rightImage: 'assets/hero/chamika-kaushalya-cutout.webp',
  rightAlt: 'Portrait of Chamika Kaushalya in a black suit, looking towards the left',
}

export type NavItem = { label: string; to: string; note: string }

/** GRID | DRIVER | TELEMETRY | SEASON | GARAGE | FINALE | RESULTS */
export const nav: NavItem[] = [
  { label: 'Grid', to: '/', note: 'Home / starting grid' },
  { label: 'Driver', to: '/?section=driver', note: 'Driver profile' },
  { label: 'Telemetry', to: '/?section=telemetry', note: 'Professional skills' },
  { label: 'Season', to: '/?section=season', note: 'The nine race weekends' },
  { label: 'Garage', to: '/gallery', note: 'Work and evidence' },
  { label: 'Finale', to: '/finale', note: 'Praana 2026' },
  { label: 'Results', to: '/report', note: 'Championship report' },
]
