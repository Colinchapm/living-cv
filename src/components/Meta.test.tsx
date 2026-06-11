import { render, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Meta } from './Meta';
import { personJsonLd } from '../data/structuredData';
import { siteConfig } from '../data/site';

describe('Meta', () => {
  it('sets canonical, description and JSON-LD metadata', async () => {
    render(
      <Meta
        title="SEO Test"
        description="Metadata test description"
        canonicalPath="/seo-test"
        jsonLd={personJsonLd()}
      />,
    );

    await waitFor(() => {
      expect(document.title).toBe(`SEO Test | ${siteConfig.personName}`);
    });

    expect(document.querySelector('meta[name="description"]')).toHaveAttribute(
      'content',
      'Metadata test description',
    );
    expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute(
      'href',
      `${siteConfig.productionUrl}/seo-test`,
    );

    const jsonLd = document.querySelector<HTMLScriptElement>('script[type="application/ld+json"]');
    expect(jsonLd?.textContent).toBeTruthy();
    expect(() => JSON.parse(jsonLd?.textContent ?? '')).not.toThrow();
  });
});
