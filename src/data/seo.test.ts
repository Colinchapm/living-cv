import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { portfolioProjects } from './portfolio';
import { siteRoutes } from './routes';
import { siteConfig } from './site';
import { personJsonLd, projectJsonLd } from './structuredData';

const root = process.cwd();

describe('SEO configuration', () => {
  it('uses unique page titles and meta descriptions', () => {
    const titles = new Set(siteRoutes.map((route) => route.title));
    const descriptions = new Set(siteRoutes.map((route) => route.description));

    expect(titles.size).toBe(siteRoutes.length);
    expect(descriptions.size).toBe(siteRoutes.length);
    expect(siteRoutes.every((route) => route.description.length > 80)).toBe(true);
  });

  it('does not use placeholder contact or production-domain values', () => {
    expect(siteConfig.email).not.toBe('contact@example.com');
    expect(siteConfig.productionUrl).not.toMatch(/example|localhost|placeholder/i);
    expect(siteConfig.productionUrl).toBe('https://colinchapman.co.uk');
    expect(siteConfig.location).not.toMatch(/\d+\s+\w+\s+(street|road|avenue|lane|drive)/i);
  });

  it('generates valid Person and project JSON-LD', () => {
    const person = personJsonLd();
    expect(JSON.stringify(person)).toContain('Colin Chapman');
    expect(JSON.stringify(person)).not.toContain('contact@example.com');

    for (const project of portfolioProjects) {
      expect(() => JSON.stringify(projectJsonLd(project))).not.toThrow();
      expect(projectJsonLd(project)).toMatchObject({
        '@type': 'SoftwareApplication',
        operatingSystem: 'Web',
      });
    }
  });

  it('has robots.txt and sitemap.xml for every public route', () => {
    const robots = readFileSync(join(root, 'public/robots.txt'), 'utf8');
    const sitemap = readFileSync(join(root, 'public/sitemap.xml'), 'utf8');

    expect(robots).toContain('Allow: /');
    expect(robots).toContain(`${siteConfig.productionUrl}/sitemap.xml`);
    expect(robots).not.toMatch(/colinchapman[.]dev/);
    expect(sitemap).not.toMatch(/colinchapman[.]dev/);

    for (const route of siteRoutes) {
      expect(sitemap).toContain(`${siteConfig.productionUrl}${route.path}`);
    }

    expect(sitemap).toContain(`${siteConfig.productionUrl}/volunteering`);
    expect(sitemap).toContain(
      `${siteConfig.productionUrl}/portfolio/construction-services-marketplace`,
    );
    expect(sitemap).toContain(`${siteConfig.productionUrl}/portfolio/tattoo-work-marketplace`);
  });
});
