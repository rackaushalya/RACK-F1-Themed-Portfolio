/**
 * CHAMPIONSHIP REPORT: THE SEASON IN REVIEW
 * ------------------------------------------------------------------
 * `facts` are short statements about what the season covered.
 * `text` is my own reflection, one paragraph per entry.
 */
export type ReportSection = {
  no: string
  title: string
  facts: string[]
  text: string[]
}

export const reportSections: ReportSection[] = [
  {
    no: '01',
    title: 'Overall academic learning journey',
    facts: [
      'The season began with the idea that knowledge alone is not enough in the workplace, and that technical, soft and transferable skills are what set a professional apart.',
      'It then moved through portfolio writing, interview skills, CV writing, emotional intelligence, building a personal brand, professional etiquette in communication and dining etiquette.',
      'Eight of the nine race weekends were completed. Race Weekend 09, Negotiation Skills, is recorded as a DNS.',
    ],
    text: [
      'I started Professional Skills expecting an easy module beside my technical subjects. I thought it would be common sense written on slides. It asked more of me than I expected, because every topic turned into a question about myself: what my skills are, how I come across, how I write, even how I behave at a table.',
      'The weeks also built on each other in a way I only noticed at the end. The first week asked who I am. The portfolio, CV and interview weeks asked how I show that to an employer. Emotional intelligence and personal branding asked how other people experience me. The two etiquette weeks were about behaving well in the places a career will take me. I missed the ninth week on negotiation, and I have recorded that honestly as a DNS.',
    ],
  },
  {
    no: '02',
    title: 'Professional skills developed',
    facts: [
      'Six professional skills run through the module: self-awareness, career readiness, personal branding, communication and etiquette, negotiation, and teamwork.',
      'My self-assessment across the assessed skills is HIGH / STRONG. This is my own qualitative judgement, not an official grade.',
    ],
    text: [
      'The skill I developed most is communication. I write more carefully now, I plan what I want to say, and I have a structure for answering questions about my experience. Career readiness comes next, mainly because I now have a CV I understand and can adjust, and the STAR method for interviews.',
      'Self-awareness grew more quietly, through the Professional Identity Tree, the Johari Window and the emotions lecture. Teamwork was tested for real, first in the Paper Craft Challenge and then at full size in Praana 2026.',
    ],
  },
  {
    no: '03',
    title: 'Strongest skills',
    facts: [],
    text: [
      'I consider teamwork and communication my strongest skills, and leading a team is where the two meet. My best evidence is Praana 2026. I led a group of seven, acted as secretary in our coordination with the Leo Club of SCU, and the camp received over 40 donors.',
      'On my Professional Identity Tree I wrote reliability and teamwork as two of my fruits before any of that happened. I think the project showed they were more than words on a page.',
    ],
  },
  {
    no: '04',
    title: 'Areas for improvement',
    facts: [
      'Negotiation has no lecture evidence in this portfolio, because Race Weekend 09 was a DNS. It is the clearest gap in my season.',
    ],
    text: [
      'Negotiation is the obvious gap. I plan to go through the Negotiation Skills material myself so that the topic is not left empty in my own knowledge.',
      'Beyond that, I need to be more concise when I speak, especially when I am nervous, and I want to get better at controlling my reactions under pressure. Praana 2026 also showed me that my planning needs to cover the details I do not personally think of, such as dietary requirements.',
    ],
  },
  {
    no: '05',
    title: 'What I learned from the group project',
    facts: [
      'Praana 2026 was a blood donation programme held on 21 October 2026 in collaboration with the Leo Club of SCU.',
      'I led our team of seven and served as secretary in our coordination with the Leo Club. The campaign received over 40 blood donors.',
    ],
    text: [
      'The project taught me things a lecture cannot. A plan on paper has to meet real people, a real hall and a fixed date. I learned how much depends on clear communication with a partner organisation, why a budget should be prepared before anything is bought, and how much easier event day becomes when the setup is finished the day before.',
      'The vegetarian refreshment situation taught me the most for its size. A small gap in planning became a live problem in the middle of the event, and a calm team was still able to fix it.',
    ],
  },
  {
    no: '06',
    title: 'Teamwork and communication development',
    facts: [
      'Teamwork was practised in the Race Weekend 02 Paper Craft Challenge and at full scale in Praana 2026.',
      'Communication was covered in interview skills, in telephone, email and social media etiquette, and in dining etiquette.',
    ],
    text: [
      'In the second week our group had a short time to turn newspapers into a tote bag, and we learned to agree quickly and share the work. Praana 2026 was the same lesson stretched over weeks, with a budget, a partner and the public involved.',
      'My communication changed along the way. Early in the semester I wrote the way I chat. By the time I was messaging in a group that included the Leo Club President, I was checking that every message was clear, polite and complete before I sent it.',
    ],
  },
  {
    no: '07',
    title: 'Personal development',
    facts: [
      'The Johari Window and emotional intelligence weeks dealt directly with self-awareness and self-regulation.',
      'The personal branding week asked how I want to be described when I am not in the room.',
    ],
    text: [
      'I am more aware of how I come across than I was at the start of the semester. The emotions lecture gave me better words for what I feel and a few tools for staying steady. The personal branding questions made me decide what I want to be known for: being reliable and easy to work with.',
      'I would also say I am more confident. Speaking to companies about a blood donation camp and standing in front of a class to present a paper bag are small things, but they add up.',
    ],
  },
  {
    no: '08',
    title: 'Future professional application',
    facts: [
      'The CV, STAR method and interview communication skills apply directly to internship and job applications.',
      'Email, telephone and dining etiquette apply to everyday professional conduct.',
    ],
    text: [
      'The first place I will use all this is internship applications. I will tailor my CV for each role, prepare STAR answers from my projects and from Praana 2026, and go into interviews treating them as a conversation.',
      'In my studies I will keep the feedback habit and the email checklist. Later, in an IT career, I expect the etiquette and emotional intelligence topics to matter more than they seem to now, because technical work is still done with clients, colleagues and teams.',
    ],
  },
  {
    no: '09',
    title: 'Final personal reflection',
    facts: [],
    text: [
      'If I had to sum up the season in one line, it would be the one from the first lecture: knowledge alone is not enough. I came in thinking of myself as a student who needed to learn more technology. I am leaving with a clearer picture of the kind of professional I want to be, and with one real project behind me to show for it.',
      'There is still a lot to work on, and one race I did not start. But I finished the season knowing what my strengths are, where the gaps are, and what I am going to do about them.',
    ],
  },
]
