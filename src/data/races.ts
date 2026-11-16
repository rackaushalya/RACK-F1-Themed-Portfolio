/**
 * THE NINE RACE WEEKENDS
 * ------------------------------------------------------------------
 * Topics, sequence and lecture content follow the module as recorded in
 * reference/aslam-portfolio/ (weeks 1 to 9), with class activities and
 * matching images from reference/PS.pdf. Image credits are kept in
 * ASSET_CREDITS.md and are not shown on the pages.
 *
 * Grand Prix names and circuits are decorative labels only.
 * `report` is my own Post-Race Report for the week, one paragraph per entry.
 */
import type { Race } from './types'

const ev = (file: string) => `assets/evidence/${file}`

export const races: Race[] = [
  /* ================================================================ 01 */
  {
    round: 1,
    slug: 'british-grand-prix',
    grandPrix: 'British Grand Prix',
    circuit: 'Silverstone Circuit',
    country: 'GBR',
    topic: 'Introduction to Professional Skills',
    status: 'complete',
    strapline: 'Technical, soft and transferable skills, the Johari Window and my Professional Identity Tree.',
    skills: ['self-awareness'],
    skillNote: 'Foundation for all six skills',
    briefing: [
      {
        heading: 'Lecture summary',
        blocks: [
          {
            type: 'p',
            text: "This week introduced the idea that knowledge alone isn't enough in the workplace. The skills built around that knowledge are what set a professional apart. The lecture looked at three types of skills (technical, soft and transferable) and at the Johari Window, a model for understanding ourselves and how others see us.",
          },
        ],
      },
      {
        heading: 'Topics covered',
        blocks: [
          {
            type: 'list',
            items: [
              'Why knowledge needs to be supported by professional skills',
              'Technical skills',
              'Soft skills',
              'Transferable skills',
              'The Johari Window model of self-awareness',
            ],
          },
        ],
      },
    ],
    notes: [
      {
        heading: 'Key concepts',
        blocks: [
          {
            type: 'cards',
            cols: 4,
            items: [
              { title: '01', text: 'Technical skills are specific, teachable abilities tied to a job or tool.' },
              { title: '02', text: 'Soft skills shape how we work with and relate to other people.' },
              { title: '03', text: 'Transferable skills are useful in almost any role or industry.' },
              { title: '04', text: 'The Johari Window helps us grow self-awareness through feedback and honesty.' },
            ],
          },
        ],
      },
      {
        heading: 'Three types of skills',
        blocks: [
          {
            type: 'cards',
            cols: 3,
            items: [
              {
                title: 'Technical skills',
                text: 'Measurable abilities that can be learned through study and practice, and they are often what gets a candidate noticed.',
              },
              {
                title: 'Soft skills',
                text: 'Soft skills decide how well we collaborate, persuade and lead. They are harder to measure, but employers value them highly.',
              },
              {
                title: 'Transferable skills',
                text: 'Transferable skills travel with us from one job, field or project to the next.',
              },
            ],
          },
          {
            type: 'chips',
            label: 'Technical: examples from the lecture',
            items: [
              'Microsoft Excel',
              'Networking',
              'Data Analysis',
              'Java programming',
              'Sales and Marketing',
              'Conflict Resolution',
              'Project Management',
              'Writing and editing',
            ],
          },
          {
            type: 'chips',
            label: 'Soft: examples from the lecture',
            items: ['Negotiation', 'Communication', 'Customer Service', 'Leadership', 'Critical thinking', 'Public speaking'],
          },
          {
            type: 'chips',
            label: 'Transferable: examples from the lecture',
            items: ['Problem solving', 'Time management', 'Teamwork', 'Decision making', 'Adaptability'],
          },
        ],
      },
      {
        heading: 'The Johari Window',
        blocks: [
          {
            type: 'p',
            text: 'Developed by Joseph Luft and Harrington Ingham in 1955. The aim is to grow the Open area through feedback and self-disclosure.',
          },
          {
            type: 'cards',
            cols: 2,
            items: [
              {
                meta: 'Known to self · Known to others',
                title: 'Open / Arena',
                text: 'What you and others both know about you, your public self.',
              },
              {
                meta: 'Not known to self · Known to others',
                title: 'Blind Spot',
                text: "What others see that you don't. Asking for feedback shrinks it.",
              },
              {
                meta: 'Known to self · Not known to others',
                title: 'Hidden / Façade',
                text: 'What you know but keep private. Sharing selectively builds trust.',
              },
              {
                meta: 'Not known to self · Not known to others',
                title: 'Unknown',
                text: 'Potential neither you nor others have discovered yet, revealed through new experiences.',
              },
            ],
          },
        ],
      },
    ],
    practice: [
      {
        heading: 'Class activities',
        blocks: [
          {
            type: 'p',
            text: 'The first session paired the theory with practical tasks.',
          },
          {
            type: 'list',
            items: [
              'Worksheet 1: sorting a list of skills into technical, soft and transferable, then matching skills to a job role.',
              'The Professional Identity Tree: a drawing in which the roots stand for values, the trunk for beliefs, the branches for attitudes and the fruits for character.',
              'The VBAC framework (Values, Beliefs, Attitudes, Character) and the employability skills employers look for: communication, teamwork, time management, adaptability, critical thinking and leadership.',
            ],
          },
        ],
      },
      {
        heading: 'My Professional Identity Tree',
        blocks: [
          {
            type: 'p',
            text: 'I drew my own tree for this activity. Filling it in made me put into words things I normally take for granted. The full drawing is in Race Evidence.',
          },
          {
            type: 'cards',
            cols: 2,
            items: [
              {
                meta: 'Roots · my values',
                title: 'What I stand on',
                text: 'Honesty, respect, empathy, kindness, fairness, hard work, responsibility and discipline.',
              },
              {
                meta: 'Trunk · my beliefs',
                title: 'What I believe',
                text: 'Growth begins where comfort ends. Stay curious, keep improving. Your attitude shapes your future. Dream big, work harder.',
              },
              {
                meta: 'Branches · my attitudes',
                title: 'How I approach work',
                text: 'Time management, good communication, creativity, confidence and a problem-solving mindset.',
              },
              {
                meta: 'Fruits · my character',
                title: 'What others should see',
                text: 'Reliability, problem solving, creativity, integrity, teamwork and leadership.',
              },
            ],
          },
          {
            type: 'p',
            text: 'Beside the trunk I added two short lines that sum up how I want to work: “Create, Innovate, Inspire” and “Today’s effort, tomorrow’s success”.',
          },
        ],
      },
    ],
    application: [
      {
        heading: 'How the learning applies',
        blocks: [
          {
            type: 'list',
            items: [
              'Sorting my own abilities into technical, soft and transferable skills shows which ones get a candidate noticed and which ones decide how well that person works with others.',
              'The Johari Window turns self-awareness into something practical: asking for feedback shrinks the Blind Spot, and sharing selectively reduces the Hidden area.',
              'Growing the Open area is the working aim, because it is the part of me that both I and the people around me can rely on.',
            ],
          },
          {
            type: 'p',
            text: 'As an IT student, my technical skills are the programming and tools I learn in my other modules. Communication and teamwork, which I wrote on my tree, are the soft skills I depend on in group work. Time management and problem solving are the transferable ones I expect to carry into any job. The feedback I want to ask my teammates for is simple: how clearly do I communicate when we are under pressure?',
          },
        ],
      },
    ],
    evidence: [
      {
        src: ev('rw01-professional-identity-tree.jpg'),
        caption: 'Professional Identity Tree Activity',
        alt: 'A hand-drawn tree on a sheet of paper headed R.A.C.K. Perera, SA25610158. Values are written on the roots, beliefs on the trunk, attitudes on the branches and character traits inside red apples.',
        kind: 'Class activity',
        w: 1306,
        h: 1800,
      },
    ],
    report: [
      'Before this lecture I thought doing well in IT was mostly about technical ability. If I could code and understood the theory, I assumed the rest would follow. The first week changed that. Hearing that knowledge on its own is not enough made me look at the skills around it, and I realised that most of what I do in group assignments depends on soft and transferable skills more than on what I know.',
      'The activity that stayed with me was the Professional Identity Tree. Writing values in the roots was easy. Honesty, respect and discipline are things I already care about. The fruits were harder, because they are what other people should be able to see in me. I wrote reliability, integrity, teamwork and leadership, and then had to ask myself whether my classmates would actually say those things about me.',
      'That question links to the Johari Window. I probably have a blind spot in how I come across when I am stressed or in a hurry, and I will only find out if I ask. I also keep some things in the hidden area. Like many students, I do not always say when I am unsure about a task. Being more open about that would make group work easier for everyone.',
      'I plan to use this in a practical way. After a group project I will ask one teammate for honest feedback, and in future interviews I can describe my skills in three clear groups and not as one long list.',
    ],
    takeaways: [
      'Knowledge gets me started. Skills decide how far I go with it.',
      'My tree is a written record of the values and character I want to be known for.',
      'Asking for feedback is the quickest way to shrink my blind spot.',
    ],
  },

  /* ================================================================ 02 */
  {
    round: 2,
    slug: 'monaco-grand-prix',
    grandPrix: 'Monaco Grand Prix',
    circuit: 'Circuit de Monaco',
    country: 'MCO',
    topic: 'Portfolio Writing + The Paper Craft Challenge',
    status: 'complete',
    strapline: 'Portfolio types and uses, and the newspaper tote bag our group built.',
    skills: ['teamwork', 'personal-branding'],
    briefing: [
      {
        heading: 'Lecture summary',
        blocks: [
          {
            type: 'p',
            text: 'This week introduced portfolios as a way to show what we can do, not just say it. The lecture covered the main types of portfolio and what they are used for. We also took part in a small group activity, the Paper Craft Challenge, where each team had to build something innovative from old newspapers within a limited time. Our group made a tote bag.',
          },
        ],
      },
      {
        heading: 'Topics covered',
        blocks: [
          {
            type: 'list',
            items: [
              'What a portfolio is',
              'Types of portfolios: personal, career, employment and assessment',
              'General uses of portfolios',
              'Group activity: The Paper Craft Challenge',
            ],
          },
        ],
      },
    ],
    notes: [
      {
        heading: 'Key concepts',
        blocks: [
          {
            type: 'cards',
            cols: 3,
            items: [
              {
                title: '01',
                text: 'A portfolio is an organised collection of work and evidence that shows your skills, learning and achievements.',
              },
              { title: '02', text: 'There are different portfolio types, each with its own purpose and audience.' },
              { title: '03', text: 'A portfolio shows evidence and reflection, not just a list of claims.' },
            ],
          },
        ],
      },
      {
        heading: 'Types of portfolios',
        blocks: [
          {
            type: 'cards',
            cols: 2,
            items: [
              {
                title: 'Personal portfolio',
                text: 'A collection about you, covering your interests, achievements and growth over time. It is often used for self-reflection and to share who you are.',
              },
              {
                title: 'Career portfolio',
                text: 'Tracks your skills, experience, training and goals, and supports career planning and development.',
              },
              {
                title: 'Employment portfolio',
                text: 'Prepared for a specific job application and typically includes a CV, a cover letter, references and samples of your work.',
              },
              {
                title: 'Assessment portfolio',
                text: 'Gathers evidence of learning so a teacher or assessor can judge progress against set outcomes. This website is an example.',
              },
            ],
          },
        ],
      },
      {
        heading: 'General uses of portfolios',
        blocks: [
          {
            type: 'list',
            items: [
              'Showcasing skills and achievements to others',
              'Tracking progress and reflecting on learning',
              'Supporting job applications and interviews',
              'Providing evidence for assessment',
              'Planning career goals',
              'Building a personal brand',
            ],
          },
        ],
      },
      {
        heading: 'What the portfolio for this module should contain',
        blocks: [
          {
            type: 'list',
            items: [
              'A summary of each lecture',
              'What was personally learned',
              'Evidence or testimonials that prove the work was actually done',
            ],
          },
          {
            type: 'tip',
            text: 'LinkedIn was given as an example of a portfolio most students already have without thinking of it that way.',
          },
        ],
      },
    ],
    practice: [
      {
        heading: 'The Paper Craft Challenge',
        blocks: [
          {
            type: 'p',
            text: 'A small-group activity. Each team had to create something innovative using only old newspapers, scissors and celotape, within a limited time.',
          },
          {
            type: 'cards',
            cols: 2,
            items: [
              { title: 'Materials', text: 'Old newspapers, scissors and celotape. Nothing else.' },
              { title: 'Constraint', text: 'A limited time to agree an idea, share out the work and finish the build.' },
            ],
          },
        ],
      },
      {
        heading: 'What our group made',
        blocks: [
          {
            type: 'p',
            text: 'Our group worked together to create a tote bag using newspapers. After completing the craft, we presented our finished tote bag to the class and explained our work.',
          },
          {
            type: 'p',
            text: 'The bag stands up on its own, has two folded newspaper handles and carries a paper flower that we made to go inside it. Both photographs are in Race Evidence.',
          },
        ],
      },
    ],
    application: [
      {
        heading: 'How the learning applies',
        blocks: [
          {
            type: 'list',
            items: [
              'This website is itself an assessment portfolio: each race weekend pairs a lecture summary with evidence and reflection instead of a list of claims.',
              'Knowing the four portfolio types makes it possible to choose the right one for the right audience, for example an employment portfolio for a specific job application.',
              'The Paper Craft Challenge is direct practice of working to a brief with limited materials and time, which depends on every member contributing.',
            ],
          },
          {
            type: 'p',
            text: 'With a time limit, our group could not spend long debating ideas. We had to settle on the tote bag quickly, share the folding, cutting and taping between us, and keep an eye on the clock. It showed me that a simple idea finished well is better than a clever one left half done.',
          },
        ],
      },
    ],
    evidence: [
      {
        src: ev('rw02-paper-craft-class-group.jpg'),
        caption: 'Our group presenting the tote bag we made from newspapers',
        alt: 'Nine students stand together at the front of the lecture room beside a projector screen. One of them holds the newspaper tote bag.',
        kind: 'Class activity',
        w: 1000,
        h: 750,
      },
      {
        src: ev('rw02-paper-craft-tote-bag.jpg'),
        caption: 'The finished tote bag our group made from newspapers',
        alt: 'A tote bag made from folded newspaper, with two newspaper handles and a paper flower inside, standing on a desk in the lecture room.',
        kind: 'Class activity',
        w: 571,
        h: 762,
      },
    ],
    report: [
      'This week had two halves, and the practical half is the one I remember best. Our group was given old newspapers, scissors and celotape and asked to make something useful in a short time. We chose a tote bag. Getting newspaper to hold a shape is harder than it sounds, because the bag had to carry its own weight and still look neat. When it finally stood up on its own, with the paper flower inside, we were quite proud of it.',
      'Presenting it mattered as much as making it. We stood in front of the class and explained what we made and why, which is basically what a portfolio does: show the work, then explain it. That connection made the lecture content easier to understand.',
      'From the lecture, the idea I keep coming back to is that a portfolio is evidence and reflection, not a list of claims. Anyone can write “good at teamwork” on a CV. A photograph of our group holding something we built together says it better. I also learned that different readers need different portfolios. This website is an assessment portfolio, but the same material could later be reshaped into an employment portfolio for an internship application.',
      'In future group work I want to keep the habit we fell into during the challenge: agree on one idea early, give everyone something to do, and leave time at the end to check the result. I will also collect evidence of my work as I go, because it is much harder to find afterwards.',
    ],
    takeaways: [
      'A portfolio proves a skill with evidence. It does not just claim it.',
      'Our tote bag showed me what a group can finish when everyone has a job.',
      'Different readers need different portfolios: personal, career, employment or assessment.',
    ],
  },

  /* ================================================================ 03 */
  {
    round: 3,
    slug: 'italian-grand-prix',
    grandPrix: 'Italian Grand Prix',
    circuit: 'Autodromo Nazionale Monza',
    country: 'ITA',
    topic: 'Interview Skills',
    status: 'complete',
    strapline: "Interview communication, the 7 C's and the STAR method.",
    skills: ['career-readiness', 'communication-etiquette'],
    briefing: [
      {
        heading: 'Lecture summary',
        blocks: [
          {
            type: 'p',
            text: "This week covered how to perform well in a job interview. The lecture looked at the communication skills interviewers notice, the 7 C's of effective communication, and the STAR method for structuring answers. The class also watched interview videos and listed the do's and don'ts.",
          },
        ],
      },
      {
        heading: 'Topics covered',
        blocks: [
          {
            type: 'list',
            items: [
              'What a job interview is',
              'Communication skills used at an interview',
              "The 7 C's of effective communication",
              'The STAR method',
              "Activity: do's and don'ts of an interview",
            ],
          },
        ],
      },
    ],
    notes: [
      {
        heading: 'What is a job interview?',
        blocks: [
          {
            type: 'p',
            text: "A job interview is a structured conversation where an employer assesses a candidate's skills, experience, attitude and fit for a role, and the candidate learns about the job.",
          },
        ],
      },
      {
        heading: 'Communication skills used at an interview',
        blocks: [
          {
            type: 'cards',
            cols: 2,
            items: [
              {
                title: 'Non-verbal communication',
                text: 'Body language, eye contact, posture and facial expressions that show confidence and interest.',
              },
              { title: 'Listening', text: 'Paying full attention so you understand each question before answering.' },
              { title: 'Responding', text: 'Giving clear, relevant and honest answers.' },
              { title: 'Questioning', text: 'Asking thoughtful questions to show interest in the role and the company.' },
            ],
          },
        ],
      },
      {
        heading: "The 7 C's of effective communication",
        blocks: [
          {
            type: 'cards',
            cols: 4,
            items: [
              { title: 'Clear', text: 'Present information clearly.' },
              { title: 'Concise', text: "Don't lose the message by being long-winded." },
              { title: 'Correct', text: 'Avoid misleading information.' },
              { title: 'Complete', text: 'Give all the necessary information, not just part of it.' },
              { title: 'Concrete', text: 'Use examples and stories rather than generalities.' },
              { title: 'Courteous', text: 'Always be and sound polite.' },
              { title: 'Confident', text: 'Show a confident tone and a “can do” attitude.' },
            ],
          },
        ],
      },
      {
        heading: 'The STAR method',
        blocks: [
          {
            type: 'table',
            head: ['Step', 'What to say'],
            rows: [
              ['S · Situation', 'Give brief details of the situation.'],
              ['T · Target', 'Say what you wanted to achieve.'],
              ['A · Action', 'Say what you did.'],
              ['R · Result', 'Say what the result was.'],
            ],
          },
          { type: 'tip', text: 'Signpost your evidence, for example “I\'m going to tell you about a time when…”.' },
        ],
      },
    ],
    practice: [
      {
        heading: "Activity: do's and don'ts of an interview",
        blocks: [
          {
            type: 'p',
            text: "The class watched interview videos and listed the do's and don'ts.",
          },
          {
            type: 'table',
            head: ["Do's", "Don'ts"],
            rows: [
              ['Research the company and the role beforehand', 'Arrive late or unprepared'],
              ['Dress smartly and professionally', 'Dress too casually'],
              ['Keep eye contact and sit with good posture', 'Slouch, fidget, or use your phone'],
              ['Listen carefully and answer with clear examples', 'Give vague or long-winded answers'],
              ['Thank the interviewer and follow up', 'Lie or exaggerate your experience'],
            ],
          },
        ],
      },
      {
        heading: 'Getting ready to apply',
        blocks: [
          {
            type: 'list',
            items: [
              'Documents to have ready for a job application: the highest education certificate with transcript, proof of work experience, and certificates, professional qualifications and extracurriculars.',
              'For IT roles it is better to show work than to describe it, for example through a GitHub profile with real projects.',
              'Useful phrases for describing strengths, work experience and future goals, along with active listening and interview attire.',
            ],
          },
        ],
      },
    ],
    application: [
      {
        heading: 'How the learning applies',
        blocks: [
          {
            type: 'list',
            items: [
              'STAR gives a fixed structure for “tell me about a time when…” questions, so an answer moves from situation to result instead of rambling.',
              "The 7 C's work as a checklist for any spoken answer: clear, concise, correct, complete, concrete, courteous and confident.",
              'Non-verbal communication, listening and questioning are assessed alongside the answers themselves, so they need practice too.',
            ],
          },
        ],
      },
      {
        heading: 'A STAR answer of my own',
        blocks: [
          {
            type: 'p',
            text: 'To practise the method, I built an answer from something that really happened at our Praana 2026 blood donation camp later in the semester.',
          },
          {
            type: 'table',
            head: ['Step', 'My answer'],
            rows: [
              [
                'S · Situation',
                'At our blood donation camp, one donor told us he was a vegetarian. The refreshments we had prepared for donors were a Milo drink and a fish bun.',
              ],
              [
                'T · Target',
                'As team leader, I wanted him to have something suitable to eat after donating, without holding up the camp.',
              ],
              [
                'A · Action',
                'We talked it over quickly as a team and arranged vegetarian refreshments for him while the event carried on.',
              ],
              [
                'R · Result',
                'He was looked after and the camp continued smoothly. We now know to ask about dietary needs before an event, not during it.',
              ],
            ],
          },
        ],
      },
    ],
    evidence: [
      {
        src: ev('rw03-slide-describing-your-strengths.jpg'),
        caption: 'Lecture slide: phrases for describing your strengths',
        alt: 'A projected lecture slide titled “Describing your strengths” listing example phrases.',
        kind: 'Lecture slide',
        w: 402,
        h: 677,
      },
      {
        src: ev('rw03-slide-interview-attire.jpg'),
        caption: "Lecture slide: interview attire, do and don't",
        alt: 'A projected lecture slide titled “Attire” comparing appropriate and inappropriate interview clothing.',
        kind: 'Lecture slide',
        w: 586,
        h: 838,
      },
      {
        src: ev('rw03-whiteboard-application-documents.jpg'),
        caption: 'Whiteboard: documents needed for a job application',
        alt: 'A classroom whiteboard listing highest education certificate, degree certificate, transcript, work experience, certificates and extracurriculars.',
        kind: 'Whiteboard',
        w: 556,
        h: 799,
      },
    ],
    report: [
      'I used to think of an interview as a test where the interviewer asks and I try not to get anything wrong. This lecture described it as a structured conversation, where the employer is checking fit and I am also finding out about the job. That small change in how I see it already makes interviews feel less frightening.',
      'The STAR method is the tool I found most useful. My natural habit when asked about an experience is to start in the middle and add details as I remember them. Situation, Target, Action, Result makes me tell it in order and finish with what actually happened. I tried it on a real example from our blood donation project, and it came out much shorter and clearer than the way I would normally tell that story.',
      "The do's and don'ts from the interview videos were a useful reality check. Arriving late or giving vague answers sounds obviously wrong, but watching someone else do it shows how quickly it damages an impression. Of the 7 C's, concise is the one I need to work on, because I tend to over-explain when I am nervous. Confident is the other. I know my work, but I do not always sound like I do.",
      'Before any real interview I will research the company, prepare three or four STAR stories from my projects, and practise saying them out loud. I also want to build up a GitHub profile with real projects, because for an IT role it is better to show work than to describe it.',
    ],
    takeaways: [
      'An interview is a two-way conversation, not an exam.',
      'STAR keeps my answers in order: Situation, Target, Action, Result.',
      "Of the 7 C's, I most need to practise being concise and confident.",
    ],
  },

  /* ================================================================ 04 */
  {
    round: 4,
    slug: 'japanese-grand-prix',
    grandPrix: 'Japanese Grand Prix',
    circuit: 'Suzuka Circuit',
    country: 'JPN',
    topic: 'CV Writing',
    status: 'complete',
    strapline: 'First impressions, tailoring, the ATS and the standard CV sections.',
    skills: ['career-readiness', 'personal-branding'],
    briefing: [
      {
        heading: 'Lecture summary',
        blocks: [
          {
            type: 'p',
            text: 'This week covered how to write an effective CV. The lecture looked at making a strong first impression, tailoring a CV to each employer, getting past applicant tracking systems, and the standard sections a CV should include, in the right order.',
          },
        ],
      },
      {
        heading: 'Topics covered',
        blocks: [
          {
            type: 'list',
            items: [
              'Making a strong first impression',
              'Tailoring a CV to each employer',
              'Getting past Applicant Tracking Systems (ATS)',
              'The standard sections of a CV and their order',
            ],
          },
        ],
      },
    ],
    notes: [
      {
        heading: 'Key concepts',
        blocks: [
          {
            type: 'cards',
            cols: 3,
            items: [
              { title: 'First impression', text: 'Use a formal, passport-size photo and make the CV completely error-free.' },
              {
                title: 'Tailor it',
                text: 'Research the company through its website and job advertisement, and adjust the CV to that company and role.',
              },
              {
                title: 'Keep it clean',
                text: 'Use a light background with dark text. Avoid dark backgrounds with light lettering.',
              },
              {
                title: 'Leave out personal details',
                text: 'Do not include your NIC, passport, bank details, date of birth, gender or marital status.',
              },
              {
                title: 'Order matters',
                text: 'List entries in reverse order, with the highest qualification and most recent items first.',
              },
              {
                title: 'Beating the ATS',
                text: 'Many employers use Applicant Tracking Systems to filter CVs, so use keywords from the job advertisement and a simple, clean layout.',
              },
            ],
          },
        ],
      },
      {
        heading: 'What a CV includes',
        blocks: [
          {
            type: 'table',
            head: ['Section', 'What to write'],
            rows: [
              ['Name and contact', 'Professional name, phone, email, address, LinkedIn profile, portfolio link'],
              ['Summary / profile', '1 to 2 positive lines about you'],
              ['Work experience', 'Only if you have it, such as freelancing or an internship'],
              ['Education', 'Highest qualification to lowest'],
              ['Professional qualifications', 'Courses that support the job'],
              ['Skills', 'Soft skills and technical skills'],
              ['Projects', 'Project name, tools used, a short description and the year'],
              ['Extracurricular activities', 'National, university and school level'],
              ['Awards', 'Any recognised achievements'],
              ['Research', 'Most recent first'],
              ['References', 'Two unrelated referees'],
            ],
          },
        ],
      },
    ],
    practice: [
      {
        heading: 'My CV in the session',
        blocks: [
          {
            type: 'p',
            text: 'I took a printed copy of my own CV to the CV Writing session. After the slides, students brought their CVs to the lecturer one by one so she could point out how each could be improved.',
          },
          {
            type: 'p',
            text: 'My photograph in Race Evidence shows my CV in the lecture room, with handwritten notes added beside the Education section. Having the real document in front of me meant I could check every point from the slides against my own work as the lecture went on.',
          },
        ],
      },
    ],
    application: [
      {
        heading: 'How the learning applies',
        blocks: [
          {
            type: 'list',
            items: [
              'A CV is a short, targeted marketing document rather than a full life story, so one general CV for every employer is not enough.',
              'Researching the company and the job advertisement supplies the keywords that help a CV pass ATS screening.',
              'A clean layout, correct information and reverse-order entries show care and professionalism before any conversation with an employer.',
            ],
          },
          {
            type: 'p',
            text: 'After the session I went back through my own CV with the lecture in mind. The points I am working on are keeping my education and projects in reverse order with the most recent first, describing each project with its tools and year, and adjusting the profile summary for the role I am applying to.',
          },
        ],
      },
    ],
    evidence: [
      {
        src: ev('rw04-my-cv-during-cv-writing-session.jpg'),
        caption: 'My CV during the CV Writing session',
        alt: 'A printed CV headed Chamika Kaushalya held up in the lecture room, with the lecturer at the projector screen in the background. The contact details are blurred.',
        kind: 'My own evidence',
        w: 990,
        h: 990,
      },
      {
        src: ev('rw04-slide-importance-of-research.jpg'),
        caption: 'Lecture slide: the importance of research when tailoring a CV',
        alt: 'A projected lecture slide titled “The Importance of Research” about using keywords from the job description to pass applicant tracking systems.',
        kind: 'Lecture slide',
        w: 563,
        h: 727,
      },
    ],
    report: [
      'This was the most hands-on week for me, because I walked in with my own CV in my hand. Up to then I had treated a CV as a document you write once and send everywhere. The lecture described it as a short marketing document that should be adjusted for each employer. Looking at my printed copy with that in mind, I could see it was written for nobody in particular.',
      'Two points were new to me. The first was the Applicant Tracking System. I did not know that software might filter my CV before a person ever reads it, or that a clean layout and keywords from the job advertisement help it get through. The second was the list of personal details to leave out. NIC number, date of birth and marital status are things many people still include, and I had never questioned it.',
      'The order of sections also made sense once it was explained. An employer reads from the top, so the strongest and most recent items go first. For a student with little work experience, that means my projects and skills have to carry more weight, and each project needs its tools, a short description and the year.',
      'My plan is to keep one master CV with everything on it and cut a tailored version from it for each application. I will also update it whenever I finish a project so it never falls behind. A CV with no errors and a sensible structure is the first proof of professionalism an employer gets from me, before I have said a word.',
    ],
    takeaways: [
      'A CV is a targeted marketing document, not a life story.',
      'Keywords and a clean layout help a CV get past ATS screening.',
      'Strongest and most recent items go first, and private details stay off.',
    ],
  },

  /* ================================================================ 05 */
  {
    round: 5,
    slug: 'singapore-grand-prix',
    grandPrix: 'Singapore Grand Prix',
    circuit: 'Marina Bay Street Circuit',
    country: 'SGP',
    topic: 'Emotional Intelligence',
    status: 'complete',
    strapline: "Emotions, Goleman's five competencies and self-regulation.",
    skills: ['self-awareness'],
    briefing: [
      {
        blocks: [
          {
            type: 'quote',
            text: 'Anyone can become angry, that is easy. But to be angry with the right person…',
            cite: 'Aristotle, quoted on the lecture slide',
          },
        ],
      },
      {
        heading: 'Lecture summary',
        blocks: [
          {
            type: 'p',
            text: "This week explored what emotions are, how they are grouped, and what emotional intelligence (EI) means. The lecture covered Goleman's five emotional competencies and strategies for regulating our own emotions.",
          },
        ],
      },
      {
        heading: 'Topics covered',
        blocks: [
          {
            type: 'list',
            items: [
              'What an emotion is',
              'Primary and secondary emotions, and how they intensify',
              'Emotional leakage',
              'The definition of emotional intelligence',
              "Goleman's emotional competencies",
              'Self-regulation strategies',
            ],
          },
        ],
      },
    ],
    notes: [
      {
        heading: 'What is an emotion?',
        blocks: [
          {
            type: 'list',
            items: [
              'A feeling',
              'The thoughts we have when we have that feeling',
              'A psychological and biological state',
              'The range of behaviours that are acted out',
            ],
          },
        ],
      },
      {
        heading: 'Primary emotions and how they can intensify',
        blocks: [
          { type: 'p', text: 'Emotions are grouped as primary and secondary emotions.' },
          {
            type: 'table',
            head: ['Primary emotion', 'Related feelings', 'At its extreme'],
            rows: [
              ['Sadness', 'Grief, sorrow, self-pity', 'Depression'],
              ['Fear', 'Anxiety, nervousness, wariness', 'Phobia and panic'],
              ['Enjoyment', 'Happiness, joy, contentment, ecstasy', 'Mania'],
              ['Love', 'Acceptance, trust, infatuation', 'Obsession'],
              ['Surprise', 'Shock, astonishment, wonder', 'Offensiveness'],
              ['Disgust', 'Contempt, scorn, aversion', 'Revulsion'],
              ['Shame', 'Guilt, embarrassment, remorse, regret', 'Distress'],
            ],
          },
        ],
      },
      {
        heading: 'Emotional leakage',
        blocks: [
          {
            type: 'p',
            text: 'The unintentional revealing of our real feelings through facial expressions, tone of voice or body language.',
          },
        ],
      },
      {
        heading: 'What is emotional intelligence?',
        blocks: [
          {
            type: 'quote',
            text: 'The ability to monitor one’s own and other people’s emotions, to discriminate between different emotions and label them appropriately, and to use emotional information to guide thinking and behaviour.',
            cite: 'Salovey and Mayer, 1990',
          },
        ],
      },
      {
        heading: "Goleman's emotional competencies",
        blocks: [
          {
            type: 'cards',
            cols: 3,
            items: [
              { title: '1 · Self-awareness', text: 'Knowing what emotions you feel.' },
              { title: '2 · Self-regulation', text: 'Managing your emotions and reactions.' },
              { title: '3 · Motivation', text: 'Using your emotions to work toward goals.' },
              { title: '4 · Empathy', text: "Understanding other people's feelings." },
              { title: '5 · Social skills', text: 'Handling relationships well.' },
            ],
          },
        ],
      },
      {
        heading: 'Self-regulation strategies',
        blocks: [
          {
            type: 'cards',
            cols: 2,
            items: [
              {
                title: 'Mindfulness',
                text: 'Awareness that arises from paying attention, on purpose, in the present moment and non-judgementally (Jon Kabat-Zinn).',
              },
              { title: 'Cognitive re-appraisal', text: 'Looking at a situation in a new way.' },
              { title: 'Acceptance', text: 'Accepting feelings without fighting them.' },
              { title: 'Problem solving', text: 'Acting on the cause of the emotion.' },
            ],
          },
        ],
      },
    ],
    practice: [
      {
        heading: 'Class activities',
        blocks: [
          {
            type: 'p',
            text: 'The session was led by a visiting lecturer, Mrs. Hubika Joshi, and the theory was broken up with short activities.',
          },
          {
            type: 'list',
            items: [
              'A breathing exercise, as part of the self-regulation section.',
              "A group task: invent a scenario involving a problem and solve it using one of Goleman's competencies.",
              'An individual task: write down three emotions you like feeling and three you do not, with the reason for each.',
              'Written feedback for the facilitator, handed in at the end.',
            ],
          },
        ],
      },
    ],
    application: [
      {
        heading: 'How the learning applies',
        blocks: [
          {
            type: 'list',
            items: [
              'Emotions are not simply good or bad. They affect thoughts and behaviour, and emotional intelligence is the skill of noticing and managing them in oneself and in others.',
              'The four self-regulation strategies give practical options in a tense moment: be mindful, re-appraise the situation, accept the feeling, or act on its cause.',
              'Awareness of emotional leakage matters in interviews, meetings and team work, where tone and body language can say more than words.',
            ],
          },
          {
            type: 'p',
            text: 'The clearest example I have comes from Praana 2026. When a donor told us he was a vegetarian and we had nothing suitable prepared, the easy reaction would have been to panic or to look for someone to blame. Staying calm, treating it as a problem to solve and acting on the cause was the fourth strategy from this lecture in practice.',
          },
        ],
      },
    ],
    evidence: [
      {
        src: ev('rw05-slide-emotional-intelligence-title.jpg'),
        caption: 'Lecture slide: Emotional Intelligence title slide',
        alt: 'A projected title slide reading “Emotional Intelligence” with an illustration of a head and a heart.',
        kind: 'Lecture slide',
        w: 503,
        h: 808,
      },
      {
        src: ev('rw05-slide-what-is-emotional-intelligence.jpg'),
        caption: 'Lecture slide: the Salovey and Mayer (1990) definition of EI',
        alt: 'A projected slide titled “What is Emotional Intelligence (EI)?” with the Salovey and Mayer definition.',
        kind: 'Lecture slide',
        w: 626,
        h: 894,
      },
      {
        src: ev('rw05-slide-emotions.jpg'),
        caption: 'Lecture slide: the range of emotions',
        alt: 'A projected slide showing a grid of emoji faces expressing different emotions.',
        kind: 'Lecture slide',
        w: 515,
        h: 808,
      },
    ],
    report: [
      'I expected this to be the softest topic in the module, and it turned out to be the one I think about most. The Salovey and Mayer definition talks about monitoring emotions, labelling them correctly and using that information to guide behaviour. I had never thought of emotions as information. I usually just react to them.',
      "The table of primary emotions helped with the labelling part. Seeing how fear runs from wariness up to panic, or how sadness can deepen into depression, made me realise how few words I use for what I feel. “Stressed” covers almost everything for me, when the real word is sometimes anxious, embarrassed or frustrated. Naming the feeling properly is self-awareness, the first of Goleman's competencies, and the other four do not really work without it.",
      'Emotional leakage was the idea that surprised me. My face and tone can give away irritation even when my words are polite, and teammates pick that up. I often end up coordinating group work, so I need to be careful about this. A leader’s mood spreads quickly.',
      'Self-regulation is where I most want to improve. Of the four strategies, cognitive re-appraisal suits me best: stopping to ask whether there is another way to read the situation before I respond. The breathing exercise from the session is something simple I can use before a presentation or a difficult conversation. For empathy, my aim is to listen fully before deciding what the other person means. These are habits, so I expect them to take practice.',
    ],
    takeaways: [
      'Emotions are information. Naming them correctly is the first step.',
      'My tone and face can leak what my words hide.',
      'Re-appraisal and slow breathing are my first tools for self-regulation.',
    ],
  },

  /* ================================================================ 06 */
  {
    round: 6,
    slug: 'belgian-grand-prix',
    grandPrix: 'Belgian Grand Prix',
    circuit: 'Circuit de Spa-Francorchamps',
    country: 'BEL',
    topic: 'Building a Personal Brand',
    status: 'complete',
    strapline: 'Perception, consistency and authenticity, in person and online.',
    skills: ['personal-branding'],
    briefing: [
      {
        heading: 'Lecture summary',
        blocks: [
          {
            type: 'p',
            text: 'This week explored what a personal brand is and how to build one deliberately, including on social media. The main idea is that a brand is the perception people hold of us, and we either shape it ourselves or let others shape it for us.',
          },
        ],
      },
      {
        heading: 'Topics covered',
        blocks: [
          {
            type: 'list',
            items: [
              'What a personal brand is',
              'Three questions to ask yourself',
              'LCD (Lowest Common Denominator)',
              'Key points in personal branding',
              'Personal branding on social media',
            ],
          },
        ],
      },
    ],
    notes: [
      {
        heading: 'What is a personal brand?',
        blocks: [
          { type: 'p', text: 'The personality and impression we present is our personal brand.' },
          { type: 'tip', text: 'Branding is all about perception.' },
        ],
      },
      {
        heading: 'LCD (Lowest Common Denominator)',
        blocks: [
          {
            type: 'p',
            text: 'A reminder not to settle for the generic, “good enough for everyone” level, because that is how a brand blends in.',
          },
        ],
      },
      {
        heading: 'Key points in personal branding',
        blocks: [
          {
            type: 'cards',
            cols: 3,
            items: [
              { title: 'Tell a story', text: "Let people see who you are and where you're going." },
              { title: 'Have structure', text: 'Present yourself in an organised, recognisable way.' },
              { title: 'Be consistent', text: 'Use the same message and style everywhere.' },
              { title: 'Be authentic', text: 'Stay true to yourself.' },
              { title: 'Focus', text: 'Concentrate on a clear area, not everything.' },
              { title: 'Personalize', text: 'Make it specific to you and your audience.' },
            ],
          },
        ],
      },
    ],
    practice: [
      {
        heading: 'Exercise: questions to ask yourself',
        blocks: [
          {
            type: 'p',
            text: 'The lecture set three questions for each of us to answer about our own brand. These are my honest answers.',
          },
          {
            type: 'table',
            head: ['Question', 'My answer'],
            rows: [
              [
                'Am I building my personal brand, or are others building it for me?',
                'Until now, mostly others. People know me from how I behave in class and in group work, not from anything I planned.',
              ],
              [
                "If my name came up in a room and I wasn't there, what would I want people to say?",
                'That I am reliable, that I do what I say I will do, and that I am easy to work with.',
              ],
              [
                'What needs to be there for them to say it?',
                'Meeting deadlines, communicating clearly and treating people fairly every time, so the description is true and not just something I say about myself.',
              ],
            ],
          },
        ],
      },
    ],
    application: [
      {
        heading: 'How the learning applies',
        blocks: [
          {
            type: 'list',
            items: [
              'A personal brand is not built by chance. If it is not shaped deliberately, other people will shape it.',
              'A consistent and authentic approach makes a person easier to remember and to trust.',
              'The six key points apply directly to a CV, a LinkedIn profile and a portfolio such as this one, which tells one consistent story.',
            ],
          },
          {
            type: 'p',
            text: 'At the moment my brand lives mostly offline, in how I behave in lectures and in group projects. The next step is to make my CV, my LinkedIn profile and this portfolio tell the same story, with the same name, the same tone and the same strengths.',
          },
        ],
      },
    ],
    evidence: [],
    report: [
      'The sentence I wrote down first in this lecture was that branding is all about perception. It is a slightly uncomfortable idea, because it means my brand is not what I think of myself. It is what other people think when they hear my name.',
      'The three questions made that personal. When I asked myself whether I am building my brand or letting others build it, I had to admit it has mostly been the second. I have never sat down and decided what I want to be known for. The Professional Identity Tree I drew in the first week turned out to be a good starting point, because the fruits on it, such as reliability, integrity and teamwork, are really a description of the brand I want.',
      'I also liked the warning about the lowest common denominator. It is tempting to present myself in a safe, general way that could describe any IT student. But “hardworking team player” is on everyone’s profile. A brand comes from being specific and then being consistent about it, in person and online.',
      'So my actions from this week are small and concrete. I will keep the same professional name and photo across my CV, LinkedIn and this site. I will share work I have actually done instead of general statements. And I will remember that every group project adds to my brand whether I plan it or not, because the people I work with now may be the ones who recommend me later.',
    ],
    takeaways: [
      'My brand is what people say about me when I am not in the room.',
      'Reliable, honest and easy to work with: that is what I want it to be.',
      'Consistency across my CV, LinkedIn and portfolio makes it believable.',
    ],
  },

  /* ================================================================ 07 */
  {
    round: 7,
    slug: 'austrian-grand-prix',
    grandPrix: 'Austrian Grand Prix',
    circuit: 'Red Bull Ring',
    country: 'AUT',
    topic: 'Professional Etiquette in Communication',
    status: 'complete',
    strapline: 'Telephone, email and social media etiquette.',
    skills: ['communication-etiquette'],
    briefing: [
      {
        heading: 'Lecture summary',
        blocks: [
          {
            type: 'p',
            text: 'This week covered the etiquette rules for professional communication by telephone, email and social media. Etiquette is the set of rules for the “correct” way to behave at a certain time and place, and how we communicate with co-workers, bosses and teachers matters.',
          },
        ],
      },
      {
        heading: 'Topics covered',
        blocks: [
          {
            type: 'list',
            items: [
              'What etiquette means',
              'Telephone etiquette',
              'Professional telephone language',
              'Email etiquette: seven rules',
              'Social media and professional reputation',
            ],
          },
        ],
      },
    ],
    notes: [
      {
        heading: 'Telephone etiquette',
        blocks: [
          {
            type: 'table',
            head: ['Topic', 'Guidance'],
            rows: [
              [
                'The basics',
                "Speak directly into the mouthpiece, don't eat or chew gum, don't cover the phone with your hand, and use the hold button. Always be courteous.",
              ],
              [
                'Answering',
                'Pick up within 2 to 3 rings and greet clearly, for example “Thank you for calling (department). How may I help you?”',
              ],
              ['Holding', 'Ask permission first, check back every 30 to 45 seconds, and thank the caller for waiting.'],
              [
                'Transferring',
                "Explain why, get the caller's agreement, confirm the other person can take the call, and tell the caller who they are being transferred to.",
              ],
              [
                'Taking messages',
                "Record who it's for, the caller's name and number, the date and time, the message and the action needed. Deliver it quickly and keep it confidential.",
              ],
              ['Outbound calls', 'Check the number, plan your objectives, take notes and state any follow-up action.'],
              [
                'Ending a call',
                'Use a closing phrase, state the next steps, thank the caller, and avoid slang such as “bye-bye” or “okie-dokie”.',
              ],
            ],
          },
        ],
      },
      {
        heading: 'Professional telephone language',
        blocks: [
          {
            type: 'table',
            head: ['Avoid', 'Say instead'],
            rows: [
              ['“Hold on.”', '“May I put you on hold?”'],
              ['“Who\'s calling?”', '“May I say who is calling, please?”'],
              ['“I can\'t hear you, speak up!”', '“I am having a little difficulty hearing you. Can you please speak up?”'],
              [
                '“I can\'t help you. Speak to someone else.”',
                '“I need to transfer your call so they can answer your question. May I do so?”',
              ],
              ['“Your problem” or “your complaint”', '“Your question” or “your concern”'],
            ],
          },
        ],
      },
      {
        heading: 'Email etiquette: seven rules',
        blocks: [
          {
            type: 'table',
            head: ['Rule', 'Why'],
            rows: [
              [
                "1. Include a subject and use the recipient's name and correct title",
                'It tells the reader what the email is about and shows respect',
              ],
              ["2. Don't write in ALL CAPITALS", 'It reads as shouting'],
              [
                "3. Don't send confidential information",
                'Medical, ID and bank details could be stolen if the account is accessed',
              ],
              [
                '4. Take care with abbreviations and emoticons',
                '“LOL” or “IDK” are not professional and may not be understood',
              ],
              [
                '5. Think before you send',
                'Ask whether it is relevant, whether it could offend or be misread, and whether it could cause trouble',
              ],
              ['6. Use correct grammar and proofread', 'Errors can cost you a job or a role'],
              ["7. Don't forward unnecessary emails", 'Forward only what is valuable, with a personal comment'],
            ],
          },
          { type: 'tip', text: 'Every email you send leaves a permanent copy with each recipient.' },
        ],
      },
      {
        heading: 'Social media',
        blocks: [
          {
            type: 'p',
            text: "Employers and universities often look at applicants' accounts. Use social media to build your brand, and be careful about what you post, because inappropriate posts can cost you an offer or even a job.",
          },
        ],
      },
    ],
    practice: [
      {
        heading: 'My pre-send email checklist',
        blocks: [
          {
            type: 'p',
            text: 'To put the lecture into practice, I turned the seven email rules into a short checklist that I go through before I send a formal email.',
          },
          {
            type: 'list',
            items: [
              'Is there a clear subject line?',
              "Have I used the recipient's name and correct title?",
              'Is there anything confidential that should not be in an email?',
              'Have I removed abbreviations, emoticons and words in capital letters?',
              'Could any sentence be misread or cause offence?',
              'Have I proofread it once from top to bottom?',
              'If I am forwarding something, is it worth the reader’s time, and have I added my own comment?',
            ],
          },
        ],
      },
    ],
    application: [
      {
        heading: 'How the learning applies',
        blocks: [
          {
            type: 'list',
            items: [
              'Professional communication is not only what is said but how it is said. A clear greeting, polite wording and careful proofreading show respect and build trust.',
              'The seven email rules apply immediately to emails sent to lecturers and, later, to employers.',
              'Social media should stay consistent with the personal brand built in Race Weekend 06, because employers and universities check applicants’ accounts.',
            ],
          },
          {
            type: 'p',
            text: 'I had a real chance to use this during Praana 2026, where I acted as secretary in our coordination with the Leo Club of SCU. Most of that communication ran through a WhatsApp group that included the club’s president, so even quick messages had to be clear, polite and complete.',
          },
        ],
      },
    ],
    evidence: [],
    report: [
      'Most of my daily communication is casual. I message friends in short forms and half sentences, and I had been carrying some of that style into messages that should have been formal. This lecture drew a clear line between the two. Etiquette was defined as the correct way to behave for a certain time and place, and a message to a lecturer or an organisation is not the same place as a chat with friends.',
      'The email rules are the part I can use straight away. A proper subject line, the right title for the person, no capital letters for emphasis and a proofread before sending are all simple, but I was not doing all of them every time. The reminder that every email leaves a permanent copy with the recipient also changed how careful I am. A message sent in a hurry cannot be taken back.',
      'Telephone etiquette was newer to me, since I rarely make formal calls. The table of phrases was helpful. “May I put you on hold?” and “Hold on” mean the same thing, but they leave completely different impressions. I also had not thought about planning the objective of a call before dialling, or about taking a complete message with a name, number, time and action.',
      'I got to practise some of this during our group project, where I was the secretary for our coordination with the Leo Club and had to keep messages to the team and the club clear and polite. From now on I want my emails to lecturers and future employers to look like they came from someone who respects the reader’s time. I will also treat my social media as public, because the lecture made it clear that employers do look.',
    ],
    takeaways: [
      'Formal messages follow different rules from chats with friends.',
      'Every email is permanent, so I check it before I send it.',
      'Polite phrasing on a call changes the impression completely.',
    ],
  },

  /* ================================================================ 08 */
  {
    round: 8,
    slug: 'abu-dhabi-grand-prix',
    grandPrix: 'Abu Dhabi Grand Prix',
    circuit: 'Yas Marina Circuit',
    country: 'ARE',
    topic: 'Dining Etiquette',
    status: 'complete',
    strapline: 'The place setting, rules of the table and plate signals.',
    skills: ['communication-etiquette'],
    briefing: [
      {
        heading: 'Lecture summary',
        blocks: [
          {
            type: 'p',
            text: 'This week covered table manners and why they matter. How we behave at the table reflects our education and shows respect for the people we eat with, whether at a family meal or a business dinner. Good etiquette is about being comfortable and making others comfortable.',
          },
        ],
      },
      {
        heading: 'Topics covered',
        blocks: [
          {
            type: 'list',
            items: [
              'The place setting',
              'Rules of the table',
              'Holding and using silverware',
              'Plate signals',
              'Thank-you notes',
            ],
          },
        ],
      },
    ],
    notes: [
      {
        heading: 'The place setting',
        blocks: [
          {
            type: 'cards',
            cols: 2,
            items: [
              {
                title: 'Start from the outside and work in',
                text: 'Use the outermost utensils first, then move inward with each course.',
              },
              {
                title: 'Bread and drinks: “b” and “d”',
                text: 'Make a “b” with your left hand and a “d” with your right. Your bread plate is on the left and your drink is on the right.',
              },
            ],
          },
        ],
      },
      {
        heading: 'Rules of the table',
        blocks: [
          {
            type: 'table',
            head: ['Topic', 'Rule'],
            rows: [
              [
                'Napkin',
                "Place it on your lap first, after your host does. Fold it, don't crumple it, and never use it as a bib. Leave it on your chair or beside your plate if you step away.",
              ],
              ['Bread', 'Break off and eat one small piece at a time. Take only enough butter for yourself.'],
              ['Salt and pepper', 'Always pass them together, and set them down rather than handing them over.'],
              [
                'Soup',
                'Ladle away from you. When finished, place the spoon on the plate beneath, never in the empty bowl.',
              ],
              ['Passing food', 'Pass to the right.'],
              [
                'Unwanted food in your mouth',
                'Remove it with the same utensil you used to put it in, and rest it on the side of your plate. Never in your napkin.',
              ],
            ],
          },
        ],
      },
      {
        heading: 'Holding and using silverware',
        blocks: [
          {
            type: 'cards',
            cols: 3,
            items: [
              { title: 'Two ways to hold', text: 'The pencil method and the scalpel method.' },
              {
                title: 'Continental (European) style',
                text: "Cut your food, don't switch hands, and eat with the fork tines down.",
              },
              {
                title: 'American style',
                text: 'Cut your food, rest your knife, switch the fork to the other hand, and eat with the tines up.',
              },
            ],
          },
        ],
      },
      {
        heading: 'Plate signals',
        blocks: [
          {
            type: 'cards',
            cols: 2,
            items: [
              {
                title: 'Still eating',
                text: 'Utensils rest on the plate, crossed or angled apart, with the knife blade facing you.',
              },
              {
                title: 'Finished',
                text: 'Place the knife and fork side by side at “4:25” on the plate, as on a clock face, with the knife blade facing in and the fork tines up.',
              },
            ],
          },
        ],
      },
      {
        heading: 'Thank-you notes',
        blocks: [
          {
            type: 'p',
            text: 'A handwritten note is appropriate when someone spends more than 15 to 20 minutes doing something for you. Include a greeting, an expression of gratitude, and something memorable about the event.',
          },
        ],
      },
    ],
    practice: [
      {
        heading: 'Class activities',
        blocks: [
          {
            type: 'p',
            text: 'Two activities tested the rules from the lecture.',
          },
          {
            type: 'list',
            items: [
              'A True or False quiz on table manners, with statements such as whether a single knife used for salad is kept for the entrée, whether a place plate only protects the tablecloth, whether French fries are eaten with a knife and fork at a formal event, and whether both hands are used to squeeze lemon into tea.',
              'A printed worksheet, Section C: Dining Etiquette, on business settings, for example what to do when unsure which fork to use, or when a phone on the table receives a notification during a business meal.',
            ],
          },
        ],
      },
    ],
    application: [
      {
        heading: 'How the learning applies',
        blocks: [
          {
            type: 'list',
            items: [
              'Dining etiquette is mostly about respect and awareness. Using utensils from the outside in, passing to the right and signalling when finished help everyone at the table feel comfortable.',
              'These conventions matter at business meals and at interviews held over lunch or dinner, as well as at formal dinners.',
              'A thank-you note after an event is a small, concrete professional habit.',
            ],
          },
          {
            type: 'p',
            text: 'The rule that was completely new to me was the finished position, with the knife and fork side by side at 4:25. At my next formal meal I plan to start with the basics: napkin on my lap, utensils from the outside in, and my phone off the table.',
          },
        ],
      },
    ],
    evidence: [
      {
        src: ev('rw08-slide-true-or-false-table-quiz.jpg'),
        caption: 'Lecture slide: the True or False quiz on table manners',
        alt: 'A projected slide titled “True or False” listing statements about table manners for the class to judge.',
        kind: 'Lecture slide',
        w: 952,
        h: 1122,
      },
      {
        src: ev('rw08-worksheet-section-c-dining-etiquette.jpg'),
        caption: 'Class worksheet: Section C, Dining Etiquette',
        alt: 'A printed multiple-choice worksheet headed Section C, Dining Etiquette.',
        kind: 'Worksheet',
        w: 475,
        h: 845,
      },
    ],
    report: [
      'I did not expect a lecture on table manners in an IT degree, and I was a little doubtful at the start. By the end I understood the point. A business lunch or a dinner interview is still a professional setting, and how I behave at the table says something about my upbringing and how much I respect the people I am eating with.',
      'Much of the content was new. I had no idea that cutlery is used from the outside in, or that there is a simple trick for remembering which bread plate and glass are mine: “b” with the left hand, “d” with the right. The plate signals were the most interesting part. Resting the utensils apart means I am still eating, and placing them together at the 4:25 position tells the server I have finished, all without saying anything.',
      'The True or False quiz was a good reminder that guessing does not work with formal dining. Several of the statements sound right and are not. The worksheet questions about business meals, like what to do when a phone on the table lights up, connected the topic to real work situations.',
      'I do not think I will remember every rule, and I do not think that is the goal. What I will remember is the principle behind them: be comfortable and make others comfortable. Watching the host, waiting before I start and passing things politely will get me through most situations. The thank-you note is one habit I want to keep, because a short handwritten message after someone has given me their time is rare enough to be remembered.',
    ],
    takeaways: [
      'Start from the outside and work in.',
      'Knife and fork together at 4:25 means I have finished.',
      'Good manners are about making other people comfortable.',
    ],
  },

  /* ================================================================ 09 */
  {
    round: 9,
    slug: 'australian-grand-prix',
    grandPrix: 'Australian Grand Prix',
    circuit: 'Albert Park Circuit',
    country: 'AUS',
    topic: 'Negotiation Skills',
    status: 'dns',
    strapline: 'Did not start.',
    skills: ['negotiation'],
    briefing: [],
    notes: [],
    practice: [],
    application: [],
    evidence: [],
    report: [],
    takeaways: [],
  },
]

export const completedRaces = races.filter((r) => r.status === 'complete')
export const raceBySlug = (slug: string | undefined) => races.find((r) => r.slug === slug)
export const pad = (n: number) => String(n).padStart(2, '0')
