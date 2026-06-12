export type VolunteerGalleryImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
};

export const diySosVolunteering = {
  title: 'DIY SOS: The Big Build',
  role: 'Volunteer Construction Team Member',
  project: "Local boys' club renovation and performing arts studio conversion",
  period: 'July 2023',
  description:
    "Colin volunteered as part of the DIY SOS: The Big Build team supporting the renovation of a local boys' club into a performing arts and community facility. The project allowed him to contribute practical construction experience, work within a large coordinated volunteer team, and support a community-focused build for local young people.",
  contributions: [
    'Contributed practical construction and renovation skills.',
    'Worked alongside tradespeople, volunteers and project coordinators.',
    'Supported site activity during a highly time-constrained build.',
    'Followed site safety, sequencing and quality expectations.',
    'Helped contribute to a community facility intended to support local young people and performing arts activity.',
  ],
  skills: [
    'teamwork',
    'construction delivery',
    'communication',
    'community engagement',
    'working under pressure',
    'adaptability',
    'site safety awareness',
    'practical problem-solving',
    'reliability',
  ],
  technologyConnection:
    "This experience connects directly to Colin's engineering approach: clear sequencing, teamwork, reliability, safety awareness, delivery under pressure and practical problem-solving.",
  privacyNote:
    'Photo captions intentionally avoid naming other people, episode details or the exact club name. The images are used as personal volunteering evidence and do not imply endorsement by the BBC or DIY SOS.',
  heroImage: {
    src: '/images/volunteering/diy-sos/diy-sos-team-van.jpg',
    width: 1600,
    height: 1200,
    alt: 'Volunteer team members beside the DIY SOS Big Build van',
    caption: 'Volunteer team members beside the DIY SOS Big Build site vehicle.',
  },
  gallery: [
    {
      src: '/images/volunteering/diy-sos/diy-sos-site-volunteers.jpg',
      width: 900,
      height: 1200,
      alt: 'Colin volunteering on the DIY SOS Big Build site',
      caption: 'On site during the volunteer build, with PPE and site activity visible.',
    },
    {
      src: '/images/volunteering/diy-sos/diy-sos-build-team.jpg',
      width: 900,
      height: 1200,
      alt: 'Colin on site during the community renovation project',
      caption: 'Volunteer site moment during the community renovation project.',
    },
    {
      src: '/images/volunteering/diy-sos/diy-sos-community-project.jpg',
      width: 900,
      height: 1200,
      alt: 'Colin with a volunteer team member during the DIY SOS Big Build project',
      caption: 'Volunteer teamwork during a break in the build activity.',
    },
    {
      src: '/images/volunteering/diy-sos/diy-sos-site-teamwork.jpg',
      width: 900,
      height: 1200,
      alt: 'Colin on site with another volunteer during the DIY SOS Big Build',
      caption: 'Site teamwork during the time-constrained volunteer build.',
    },
    {
      src: '/images/volunteering/diy-sos/diy-sos-volunteer-base.jpg',
      width: 900,
      height: 1200,
      alt: 'Colin at the volunteer base during the community renovation project',
      caption: 'Volunteer base area during the DIY SOS community renovation project.',
    },
  ],
} as const;
