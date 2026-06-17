export interface JourneyTimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface JourneyPrinciple {
  title: string;
  description: string;
}

export interface JourneySkill {
  title: string;
  examples: readonly string[];
}

export interface JourneyImage {
  src: string;
  alt: string;
  caption: string;
  fallbackLabel: string;
  width: number;
  height: number;
}

export const journeyTimeline = [
  {
    year: '2010',
    title: 'Foundation Degree in Computing',
    description:
      'Colin graduated with a Foundation Degree in Computing and expected to follow a fairly traditional path into technology.',
  },
  {
    year: '2011',
    title: 'Became a father after graduating',
    description:
      'Fatherhood brought new responsibility, purpose and a practical need to learn quickly in real situations.',
  },
  {
    year: '2013',
    title: 'Charlie diagnosed autistic',
    description:
      "During Charlie's assessment, people often commented that he was Colin's double or a copy of him. Comments about Colin's own childhood, including late potty training, helped him recognise similarities while the family navigated education systems, assessments and support plans.",
  },
  {
    year: '2015',
    title: 'Colin diagnosed autistic',
    description:
      "Colin received his own autism diagnosis after recognising high-level similarities through Charlie's assessment process.",
  },
  {
    year: '2015',
    title: 'Family responsibilities expanded significantly',
    description:
      'Caring, planning, advocacy and practical household organisation became a central part of daily life.',
  },
  {
    year: '2018',
    title: 'Xander diagnosed autistic',
    description:
      'Colin continued developing the patience, evidence gathering and adaptive communication required to support different learning needs.',
  },
  {
    year: '2022',
    title: 'Lilly diagnosed autistic',
    description:
      'The family context further reinforced the importance of structure, empathy, consistency and flexible problem-solving.',
  },
  {
    year: '2025-Present',
    title: 'Living CV, cloud projects and return to technology',
    description:
      'Colin has been building public evidence of cloud, platform engineering, DevOps and software-delivery skills through the Living CV and portfolio projects.',
  },
] as const satisfies readonly JourneyTimelineItem[];

export const journeyPrinciples = [
  {
    title: 'A Man of Duties',
    description:
      'If something needs doing, Colin does it. If there is a problem, he works towards a solution. If somebody depends on him, he steps forward.',
  },
  {
    title: 'Consistency Over Drama',
    description:
      'The biggest effect of change comes from the effort put into it. Meaningful progress rarely happens overnight: repetition, practice, persistence and consistency matter.',
  },
  {
    title: 'Systems That Work for Real People',
    description:
      "Becoming a parent carer strengthened Colin's belief that systems should work for real people rather than ideal circumstances.",
  },
] as const satisfies readonly JourneyPrinciple[];

export const skillsFromCaring = [
  {
    title: 'Breaking Complexity Down',
    examples: [
      'Turning large problems into smaller, achievable steps.',
      'Breaking processes into smaller chunks so they can be repeated, practised and improved.',
      'Adapting explanations for different ways of learning.',
      'Building confidence through repeatable progress.',
    ],
  },
  {
    title: 'Evidence and Advocacy',
    examples: [
      'Gathering evidence before decisions are made.',
      'Documenting context clearly.',
      'Explaining complex topics without losing the human reality behind them.',
    ],
  },
  {
    title: 'Planning and Reliability',
    examples: [
      'Prioritising what matters most.',
      'Designing routines and processes that reduce friction.',
      'Staying calm when plans need to change and taking ownership when something needs doing.',
    ],
  },
  {
    title: 'Engineering Translation',
    examples: [
      'Troubleshooting methodically.',
      'Recognising patterns across systems.',
      'Applying resilience, user empathy, repetition and continuous learning to cloud and platform work.',
    ],
  },
] as const satisfies readonly JourneySkill[];

export const journeyImages = [
  {
    src: '/images/journey/colin-profile.jpg',
    alt: 'Portrait of Colin Chapman for the personal journey page',
    caption: 'Profile image support for the personal journey page.',
    fallbackLabel: 'Profile image placeholder',
    width: 900,
    height: 1200,
  },
  {
    src: '/images/journey/colin-family-context.jpg',
    alt: 'Colin Chapman in a positive family context',
    caption: 'A privacy-conscious family context image space without naming other people.',
    fallbackLabel: 'Family context image placeholder',
    width: 1600,
    height: 1200,
  },
  {
    src: '/images/journey/colin-working.jpg',
    alt: 'Colin Chapman focused on practical technical work',
    caption: 'Optional image space representing focused technical work.',
    fallbackLabel: 'Working image placeholder',
    width: 1600,
    height: 1200,
  },
] as const satisfies readonly JourneyImage[];

export const journeyEngineeringSkills = [
  'breaking large problems into manageable tasks',
  'creating repeatable systems',
  'documenting processes',
  'troubleshooting',
  'pattern recognition',
  'resilience',
  'continuous learning',
  'user empathy',
  'calm decision making',
] as const;

export const journeyCloudApplications = [
  'AWS',
  'GCP',
  'cloud infrastructure',
  'platform engineering',
  'automation',
  'DevOps',
  'AI-assisted development',
] as const;
