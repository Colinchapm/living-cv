import type { PortfolioProject } from './portfolio';
import { absoluteUrl, siteConfig } from './site';

export const personId = `${siteConfig.productionUrl.replace(/\/$/, '')}/#colin-chapman`;

export function personJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': personId,
    name: siteConfig.personName,
    jobTitle: siteConfig.canonicalTitle,
    url: siteConfig.productionUrl,
    email: `mailto:${siteConfig.email}`,
    homeLocation: {
      '@type': 'Place',
      name: siteConfig.location,
    },
    sameAs: [siteConfig.githubUrl],
    knowsAbout: [
      'AWS',
      'Microsoft Azure',
      'Google Cloud',
      'Python',
      'Linux',
      'SQL',
      'CI/CD',
      'Terraform',
      'Docker',
      'Platform support',
    ],
  };
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.productionUrl.replace(/\/$/, '')}/#website`,
    name: siteConfig.siteName,
    url: siteConfig.productionUrl,
    publisher: {
      '@id': personId,
    },
  };
}

export function profilePageJsonLd(path = '/') {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    name: siteConfig.siteName,
    url: absoluteUrl(path),
    mainEntity: {
      '@id': personId,
    },
  };
}

export function projectJsonLd(project: PortfolioProject) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: project.title,
    description: project.summary,
    url: absoluteUrl(`/projects/${project.slug}`),
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    creator: {
      '@id': personId,
    },
    codeRepository: siteConfig.githubUrl,
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
