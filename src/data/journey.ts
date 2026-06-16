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
    title: 'Became a father',
    description:
      'Fatherhood brought new responsibility, purpose and a practical need to learn quickly in real situations.',
  },
  {
    year: '2013',
    title: 'Charlie diagnosed autistic',
    description:
      'The family began navigating education systems, health services, assessments, support plans and advocacy.',
  },
  {
    year: '2015',
    title: 'Colin diagnosed autistic',
    description:
      'What began as a process of understanding his son gradually became part of Colin understanding himself.',
  },
  {
    year: '2015',
    title: 'Family responsibilities expanded significantly',
    description:
      'Caring, planning, advocacy and practical household organisation became a central part of daily life.',
  },
  {
    year: '2018',
    title: 'Alexander (Xander) diagnosed autistic',
    description:
      'Colin continued developing the patience, evidence gathering and adaptive communication required to support different learning needs.',
  },
  {
    year: '2022',
    title: 'Elizabeth (Lilly) diagnosed autistic',
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
      'Meaningful progress rarely happens overnight. Practice matters, consistency matters, and when a problem cannot be solved today, Colin learns, adapts and continues tomorrow.',
  },
  {
    title: 'Systems That Work for Real People',
    description:
      "Supporting autistic children strengthened Colin's belief that systems should work for real people rather than ideal circumstances.",
  },
] as const satisfies readonly JourneyPrinciple[];

export const skillsFromCaring = [
  {
    title: 'Breaking Complexity Down',
    examples: [
      'Turning large problems into smaller, achievable steps.',
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
      'Staying calm when plans need to change.',
    ],
  },
  {
    title: 'Engineering Translation',
    examples: [
      'Troubleshooting methodically.',
      'Recognising patterns across systems.',
      'Applying resilience, empathy and continuous learning to cloud and platform work.',
    ],
  },
] as const satisfies readonly JourneySkill[];

export const journeyImages = [
  {
    src: '/images/journey/colin-profile.jpg',
    alt: 'Portrait of Colin Chapman',
    caption: 'A clear profile image for the personal journey page.',
    fallbackLabel: 'Profile image placeholder',
  },
  {
    src: '/images/journey/colin-family-context.jpg',
    alt: 'Colin Chapman on a family day out in a park',
    caption:
      "A positive family moment representing the caring context behind Colin's professional journey.",
    fallbackLabel: 'Family context image placeholder',
  },
  {
    src: '/images/journey/colin-family-day-out.jpg',
    alt: 'Colin Chapman smiling during a family day out',
    caption:
      'A relaxed family moment showing the responsibility, perspective and motivation behind the Living CV.',
    fallbackLabel: 'Family day out image placeholder',
  },
  {
    src: '/images/journey/colin-family-adventure.jpg',
    alt: 'Colin Chapman with family during a visitor attraction day out',
    caption:
      'A family day out image included as personal context, without naming other people or adding private details.',
    fallbackLabel: 'Family adventure image placeholder',
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
