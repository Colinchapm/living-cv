import { useEffect } from 'react';
import { absoluteUrl, siteConfig } from '../data/site';

type MetaProps = {
  title: string;
  description: string;
  canonicalPath?: string;
  robots?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

export function Meta({
  title,
  description,
  canonicalPath,
  robots = 'index,follow',
  ogTitle,
  ogDescription,
  ogImage = siteConfig.defaultOgImage,
  jsonLd,
}: MetaProps) {
  useEffect(() => {
    const canonicalUrl = absoluteUrl(canonicalPath ?? window.location.pathname);
    const fullTitle = `${title} | ${siteConfig.personName}`;
    const imageUrl = absoluteUrl(ogImage);

    document.title = fullTitle;
    setMeta('description', description);
    setMeta('robots', robots);
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', ogTitle ?? fullTitle);
    setMeta('twitter:description', ogDescription ?? description);
    setMeta('twitter:image', imageUrl);
    setProperty('og:type', 'website');
    setProperty('og:site_name', siteConfig.siteName);
    setProperty('og:title', ogTitle ?? fullTitle);
    setProperty('og:description', ogDescription ?? description);
    setProperty('og:url', canonicalUrl);
    setProperty('og:image', imageUrl);
    setLink('canonical', canonicalUrl);
    setJsonLd(jsonLd);
  }, [canonicalPath, description, jsonLd, ogDescription, ogImage, ogTitle, robots, title]);

  return null;
}

function setMeta(name: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('name', name);
    document.head.append(element);
  }

  element.setAttribute('content', content);
}

function setProperty(property: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('property', property);
    document.head.append(element);
  }

  element.setAttribute('content', content);
}

function setLink(rel: string, href: string) {
  let element = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.append(element);
  }

  element.setAttribute('href', href);
}

function setJsonLd(jsonLd?: Record<string, unknown> | Record<string, unknown>[]) {
  const scriptId = 'page-json-ld';
  document.getElementById(scriptId)?.remove();

  if (!jsonLd) {
    return;
  }

  const script = document.createElement('script');
  script.id = scriptId;
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(jsonLd);
  document.head.append(script);
}
