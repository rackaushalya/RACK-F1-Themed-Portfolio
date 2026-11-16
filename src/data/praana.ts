/**
 * SEASON FINALE: PRAANA 2026 BLOOD DONATION PROGRAMME
 * ------------------------------------------------------------------
 * Every fact here is from my own account of the project or is visible in my
 * own project photographs. Roles are shown only for the leader, the secretary
 * and the treasurer. No other individual responsibilities are assigned.
 *
 * PHOTOGRAPHS
 *   Originals:  public/assets/praana-2026/            (untouched)
 *   Web copies: public/assets/praana-2026/web/        (resized for the site)
 */

export const praana = {
  name: 'Praana 2026',
  type: 'Blood Donation Programme',
  finaleTitle: 'Blood Donation Grand Prix',
  date: '21 October 2026',
  dateShort: '21.10.2026',
  partner: 'Leo Club of SCU',
  donors: '40+',
  budget: 'LKR 40,000',
  description: [
    'Praana 2026 was a blood donation camp organised in collaboration with the Leo Club of SCU.',
    'The project aimed to support community healthcare by encouraging voluntary blood donations.',
  ],
  objectives: [
    'Support community healthcare.',
    'Encourage voluntary blood donations.',
    'Open the programme to the university and to the companies around it.',
  ],
  audience: [
    'Office staff from companies surrounding the university',
    'University lecturers',
    'University students',
    'University management staff',
  ],
  result:
    'With the support of donors, the medical staff and the Leo Club of SCU, the campaign successfully received over 40 blood donors.',
}

/* ------------------------------------------------------------------ */
/* THE PIT CREW                                                         */
/* ------------------------------------------------------------------ */
export type CrewMember = { no: number; name: string; note?: string; role?: string; me?: boolean }

export const pitCrew: CrewMember[] = [
  { no: 1, name: 'R.A.C.K. Perera', note: 'Chamika Kaushalya', role: 'Team Leader / Secretary', me: true },
  { no: 2, name: 'W.H.B. Nethara' },
  { no: 3, name: 'M.A.M. Yaseer' },
  { no: 4, name: 'A.B.A. Rahman' },
  { no: 5, name: 'G.R.M.D. Gamlath', role: 'Treasurer' },
  { no: 6, name: 'M.K.G.M.D. Senadira' },
  { no: 7, name: 'W.C.R. Bamunusinghe' },
]

/* ------------------------------------------------------------------ */
/* THE RACE CONTROL ROOM: coordination with the Leo Club                */
/* ------------------------------------------------------------------ */
export const controlRoom = {
  story: [
    'Praana 2026 ran on one partnership, with the Leo Club of SCU. During the planning process our group communicated directly with Mr. Anurudda. He explained how the work would be shared. The Leo Club was responsible for coordinating with the blood bank and arranging the event date. Our group was expected to support the event by arranging refreshments and managing the necessary venue arrangements.',
    'We also created a WhatsApp group that brought everyone into one place: our project team, the President of the Leo Club, Mr. Aravinth, and the relevant Leo Club members. We used it to share information, communicate tasks and coordinate preparations. Communication was smooth and clear throughout the preparation process.',
    'The Leo Club asked our group to provide a secretary and a treasurer. I took responsibility as the secretary, and G.R.M.D. Gamlath became the treasurer. That coordination helped the project activities proceed smoothly.',
  ],
  channels: [
    {
      label: 'Direct line',
      title: 'Mr. Anurudda',
      items: ['Our direct contact during planning', 'Explained how responsibilities were shared'],
    },
    {
      label: 'Team radio · WhatsApp group',
      title: 'One shared channel',
      items: ['Our project team', 'Mr. Aravinth, President of the Leo Club', 'Relevant Leo Club members'],
    },
    {
      label: 'Roles requested by the Leo Club',
      title: 'Secretary and treasurer',
      items: ['Secretary: R.A.C.K. Perera', 'Treasurer: G.R.M.D. Gamlath'],
    },
  ],
  split: [
    { who: 'Leo Club of SCU', what: 'Coordinated with the blood bank and arranged the event date.' },
    { who: 'Our group', what: 'Arranged refreshments and managed the venue arrangements.' },
  ],
}

/* ------------------------------------------------------------------ */
/* RACE STRATEGY AND PLANNING                                           */
/* ------------------------------------------------------------------ */
export const strategySteps: { title: string; text: string }[] = [
  {
    title: 'Initial discussion with Mr. Anurudda',
    text: 'I discussed the project with Mr. Anurudda to understand how the camp would be organised.',
  },
  {
    title: 'Coordination with the Leo Club',
    text: 'We worked with the Leo Club of SCU as our project partner and kept in contact with its members.',
  },
  {
    title: 'Blood bank date coordination',
    text: 'The Leo Club arranged the date after coordinating with the blood bank: 21 October 2026.',
  },
  {
    title: 'Our group’s responsibilities',
    text: 'Our group was asked to assist with refreshments and event arrangements.',
  },
  {
    title: 'The LKR 40,000 budget',
    text: 'Based on those responsibilities, our group prepared a planned budget of LKR 40,000.',
  },
  {
    title: 'Refreshments and venue',
    text: 'With the budget in place, we prepared for the refreshments and venue arrangements ahead of the event.',
  },
]

export const budgetNote =
  'This was our planned project budget, prepared before the event. It helped our group get ready for the refreshments and arrangements we were responsible for. It is not a record of the final amount spent.'

/* ------------------------------------------------------------------ */
/* RACE PROMOTION                                                       */
/* ------------------------------------------------------------------ */
export const promotion = {
  story: [
    'During the promotion stage I worked with M.A.M. Yaseer from our team and Chamara from the Leo Club. Together we visited companies located around our university and distributed promotional flyers explaining the blood donation programme.',
    'We also asked those companies to inform their employees about the upcoming event and to encourage interested staff members to take part. This was an important part of reaching potential donors outside the university community.',
  ],
  team: [
    { name: 'Chamika Kaushalya', from: 'Our team' },
    { name: 'M.A.M. Yaseer', from: 'Our team' },
    { name: 'Chamara', from: 'Leo Club of SCU' },
  ],
}

/* ------------------------------------------------------------------ */
/* PRE-RACE GARAGE SETUP: the day before                                */
/* ------------------------------------------------------------------ */
export const venuePrep = {
  story: [
    'Before the blood donation camp, our group prepared the venue. On the day before the event we arranged the third-floor hall by collecting chairs and tables from the common area and the lecture halls.',
    'Mr. Anurudda guided our group during this preparation, and Chamara from the Leo Club helped us complete the arrangements. We worked together until the space was ready.',
  ],
  checklist: ['Chairs and tables collected', 'Third-floor hall arranged', 'Ready the day before'],
}

/* ------------------------------------------------------------------ */
/* RACE DAY                                                             */
/* ------------------------------------------------------------------ */
export const raceDayStory =
  'By the morning of 21 October 2026 our group had completed the necessary arrangements. Once the medical staff arrived, the blood donation campaign proceeded smoothly. Our group worked together through the day to support the event and assist with the arrangements.'

/* ------------------------------------------------------------------ */
/* AN UNEXPECTED PIT STOP: refreshments and the vegetarian donor        */
/* ------------------------------------------------------------------ */
export const pitStop: { label: string; title: string; text: string }[] = [
  {
    label: 'The plan',
    title: 'One Milo, one fish bun',
    text: 'Our group organised refreshments for donors. Each donor was to receive one Milo drink and one fish bun, and we arranged these into individual bags at the venue so they were ready to hand over.',
  },
  {
    label: 'The surprise',
    title: 'A vegetarian donor',
    text: 'During the event my friend Adshayn donated blood and mentioned that he was a vegetarian. That was when we realised we had not prepared any vegetarian refreshments beforehand.',
  },
  {
    label: 'The response',
    title: 'A quick team decision',
    text: 'It was an unexpected situation in the middle of the event. Once we knew about his dietary requirement, we responded quickly and arranged suitable vegetarian refreshments for him.',
  },
  {
    label: 'The lesson',
    title: 'Plan for everyone',
    text: 'It taught us to consider different dietary requirements when planning an event, and to ask about them before the day. Preparation, inclusivity and adaptability turned out to be parts of the same job.',
  },
]

/* ------------------------------------------------------------------ */
/* ONE TEAM. ONE MISSION.                                               */
/* ------------------------------------------------------------------ */
export const oneTeam = {
  story: [
    'Throughout the project, our entire group worked together. We supported one another and worked collectively to make the campaign successful.',
    'The medical staff arrived after the setup was ready, the campaign proceeded smoothly, and the event received over 40 blood donors. Teamwork was the biggest strength of this project.',
  ],
  areas: [
    'Planning',
    'Budget preparation',
    'Promotions',
    'Venue arrangements',
    'Refreshment preparation',
    'Event-day support',
    'Communication with the Leo Club',
  ],
}

/* ------------------------------------------------------------------ */
/* PHOTOGRAPHS                                                          */
/* ------------------------------------------------------------------ */
export type PhotoSlot = {
  /** File name inside public/assets/praana-2026/web/ */
  file: string
  src: string
  /** Short index shown with the photograph, such as "Exhibit 01" or "Frame 03". */
  label: string
  caption: string
  alt: string
  /** Natural size of the web copy, so the gallery keeps its true aspect ratio. */
  w: number
  h: number
  /** Tile shape in the race-day grid: feature = 2 x 2, tall = 1 x 2, std = one cell. */
  shape: 'feature' | 'tall' | 'std'
  /** Optional CSS object-position, to keep the subject in frame when a tile crops. */
  focus?: string
}

const web = (file: string) => `assets/praana-2026/web/${file}`
const photo = (
  label: string,
  file: string,
  w: number,
  h: number,
  shape: PhotoSlot['shape'],
  caption: string,
  alt: string,
  focus?: string,
): PhotoSlot => ({ label, file, src: web(file), caption, alt, w, h, shape, focus })

/** Project evidence shown inside the story sections. */
export const exhibits = {
  flyers: photo(
    'Exhibit 01', 'praana-leaflets.jpg', 1080, 608, 'std',
    'Promotional flyers distributed to surrounding companies to raise awareness of Praana 2026.',
    'A hand holds a fan of printed blood donation flyers showing a red heart held in two hands, with text in Sinhala.',
  ),
  hall: photo(
    'Exhibit 02', 'praana-status-update.jpg', 738, 1145, 'tall',
    'The third-floor hall prepared by our team on the day before Praana 2026.',
    'The hall set out with rows of chairs. A hand in the foreground holds the printed event poster. Text below the photograph reads: All set for tomorrow, our camp goes live at 9 AM.',
    '50% 0%',
  ),
  poster: photo(
    'Poster', 'praana-event-poster.jpg', 1131, 1600, 'tall',
    'The Praana 2026 event poster: Donate Blood, Save Lives. 21 October, 9.00 AM onwards.',
    'Poster reading Donate Blood Save Lives, 21 Oct, 9.00 AM onwards, Confifi Building, 33 St. Michaels Road, Colombo 03, with the SCU and Leo Club of SCU marks.',
  ),
  selfie: photo(
    'Team', 'praana-group-selfie.jpg', 1800, 1013, 'std',
    'A group selfie in the third-floor hall.',
    'A group selfie of about sixteen people smiling in the hall, with rows of chairs behind them.',
  ),
}

/** Used by the Paddock Gallery. */
export const raceEvidenceItems: PhotoSlot[] = [exhibits.flyers, exhibits.hall, exhibits.poster, exhibits.selfie]

/** RACE DAY: photographs of the event itself. */
export const raceDayPhotos: PhotoSlot[] = [
  photo(
    'Frame 01', 'praana-donation-area.jpg', 810, 457, 'feature',
    'The donation area during the camp, with the medical staff attending to donors.',
    'A hall with several donation beds. Donors lie on the beds while a nurse in uniform works beside them.',
  ),
  photo(
    'Frame 02', 'praana-donor-on-bed.jpg', 1012, 1800, 'tall',
    'M.A.M. Yaseer, a member of our team, donating blood.',
    'A donor lies on a donation bed during the camp.',
    '50% 30%',
  ),
  photo(
    'Frame 03', 'praana-blood-pressure-check.jpg', 1080, 608, 'std',
    'Mr. Adithya during the medical checkup.',
    'A member of the medical staff checks a seated man’s blood pressure at a table.',
  ),
  photo(
    'Frame 04', 'praana-nurse-and-donor.jpg', 1080, 608, 'std',
    'A nurse preparing equipment beside a donor.',
    'A nurse in uniform and gloves prepares equipment while a donor lies on a bed next to her.',
  ),
  photo(
    'Frame 05', 'praana-food-packs.jpg', 1280, 720, 'std',
    'Packing the refreshment bags for donors at the venue.',
    'Two people wearing gloves sort bags of buns at a table, with paper bags and cartons of drinks beside them.',
  ),
  photo(
    'Frame 06', 'praana-on-the-floor.jpg', 1012, 1800, 'tall',
    'Me, Chamika, thanking a donor with a small gift and an appreciation certificate from the Leo Club.',
    'Two people stand facing each other in the hall. One hands the other a small red gift box and a certificate.',
    '50% 62%',
  ),
  photo(
    'Frame 07', 'praana-group-leo-club-banner.jpg', 1440, 810, 'feature',
    'The Praana 2026 organising team with the Leo Club of SCU.',
    'A group of about fourteen people stand together behind a maroon banner reading Leo Club of SCU, Lions International.',
  ),
]

/* ------------------------------------------------------------------ */
/* POST-RACE REPORT: my personal reflection                             */
/* ------------------------------------------------------------------ */
export const reflection: { title: string; paragraphs: string[] }[] = [
  {
    title: 'Leading the team',
    paragraphs: [
      'I was the leader of our group of seven. Praana 2026 was different from leading a normal assignment group, because people outside the university were depending on the result. In an assignment, a mistake costs marks. Here, a mistake could have meant donors arriving at a hall that was not ready. That changed how I thought about responsibility. I found that leading mostly meant knowing what was still not done, and following up until it was.',
    ],
  },
  {
    title: 'Secretary to the Leo Club',
    paragraphs: [
      'The Leo Club asked our group for a secretary and a treasurer. I took the secretary role and Gamlath became the treasurer. Most of my communication was directly with Mr. Anurudda, who explained early on that the Leo Club would arrange the date with the blood bank and that our group would look after the refreshments and the venue.',
      'We also had a WhatsApp group with our team, the Leo Club President, Mr. Aravinth, and the relevant club members. Writing in that group was not like messaging friends. I had to be clear about what was decided, who was doing it and by when, and I had to stay polite even when things were moving fast. This is where the etiquette lecture stopped being theory for me.',
    ],
  },
  {
    title: 'Planning, budgeting and time',
    paragraphs: [
      'Once we knew our responsibilities, we prepared a budget of LKR 40,000 for the refreshments and arrangements. It was a planned figure, set before the event. Working it out made us think through what we actually needed before spending anything, and putting numbers on paper exposed the gaps in our plan very quickly.',
      'We also did not control the date. The Leo Club fixed it with the blood bank, so everything on our side had to be ready by 21 October and we planned backwards from there.',
    ],
  },
  {
    title: 'Getting the word out',
    paragraphs: [
      'For the promotion I went with Yaseer from our team and Chamara from the Leo Club to the companies around our university. We handed out flyers, explained the programme and asked them to tell their employees. Asking people we did not know for their time takes some confidence. It became easier once I had a short, clear explanation ready, which is really the same advice we were given for interviews.',
    ],
  },
  {
    title: 'The day before, and race day',
    paragraphs: [
      'The day before the camp we set up the third-floor hall, collecting chairs and tables from the common area and the lecture halls. Mr. Anurudda guided us and Chamara helped us finish. Because the hall was ready, the day itself was calm. The medical staff arrived, the camp started and it ran smoothly.',
      'Our job on the day was to support the event and help with the arrangements. I also had the chance to thank a donor with a small gift and an appreciation certificate from the Leo Club, which was one of the best moments of the day for me.',
    ],
  },
  {
    title: 'The vegetarian pit stop',
    paragraphs: [
      'Our refreshment plan was one Milo and one fish bun for each donor, packed into individual bags. Then my friend Adshayn donated and told us he was a vegetarian. We had nothing prepared for him. It was a small problem, but it was ours, and it came up in the middle of the event.',
      'We did not spend time on who should have thought of it. We arranged suitable vegetarian refreshments for him quickly and carried on. What stays with me is how easy it would have been to avoid. One question during planning would have covered it. Being inclusive is not complicated. It mostly means remembering that not everyone is like me.',
    ],
  },
  {
    title: 'What I would do differently',
    paragraphs: [
      'Next time I would ask about dietary requirements at the planning stage and include a vegetarian option in the budget from the start. I would also confirm every logistical need in writing before event day, including the furniture, the refreshments and who is bringing what, so that nothing depends on memory.',
    ],
  },
  {
    title: 'What the project did for my professional skills',
    paragraphs: [
      'Seeing more than 40 people come in and donate made the weeks of messages and planning feel worth it. None of it was the work of one person. Seven of us shared the planning, the promotion, the hall, the refreshments and the day itself, and we had the Leo Club beside us the whole way.',
      'For me, Praana 2026 is where the module came together. I used teamwork from the Paper Craft Challenge, communication and etiquette from the lectures, and self-control from the emotional intelligence week, all in one real event. I am more confident now that I can lead a team, speak to an organisation professionally and stay calm when a plan changes.',
    ],
  },
]

export const reflectionSkills = [
  'Leadership and responsibility',
  'Teamwork',
  'Professional communication',
  'Planning and budgeting',
  'Time management and preparation',
  'Adaptability',
  'Inclusivity',
  'Event coordination',
  'Problem-solving',
]
