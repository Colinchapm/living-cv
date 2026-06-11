export const siteConfig = {
  siteName: 'Colin Chapman Living CV',
  personName: 'Colin Chapman',
  professionalTitle: 'Cloud & Platform Engineer',
  canonicalTitle: 'Cloud and Platform Engineer',
  productionUrl: import.meta.env.VITE_SITE_URL ?? 'https://colinchapman.dev',
  email: 'colinchapm@googlemail.com',
  githubUrl: 'https://github.com/Colinchapm',
  linkedinUrl: 'https://www.linkedin.com/in/colin-chapman-placeholder',
  location: 'North Tyneside / Newcastle upon Tyne, United Kingdom',
  defaultDescription:
    'Colin Chapman is a Cloud and Platform Engineer in North Tyneside and Newcastle upon Tyne, focused on AWS, Azure, Google Cloud, DevOps, platform support, Terraform and GitHub Actions.',
  defaultOgImage: '/og/colin-chapman-cloud-platform-engineer.svg',
  themeColor: '#0f172a',
  accentColor: '#38bdf8',
} as const;

export function absoluteUrl(path = '/') {
  const baseUrl = siteConfig.productionUrl.replace(/\/$/, '');
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${normalizedPath}`;
}
