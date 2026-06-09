import { useEffect } from 'react';
import { profile } from '../data/profile';

type MetaProps = {
  title: string;
  description: string;
};

export function Meta({ title, description }: MetaProps) {
  useEffect(() => {
    document.title = `${title} | ${profile.name}`;
    setMeta('description', description);
    setProperty('og:title', `${title} | ${profile.name}`);
    setProperty('og:description', description);
    setProperty('twitter:title', `${title} | ${profile.name}`);
    setProperty('twitter:description', description);
  }, [description, title]);

  return null;
}

function setMeta(name: string, content: string) {
  const element = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  element?.setAttribute('content', content);
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
