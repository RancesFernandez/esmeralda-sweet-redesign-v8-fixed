import { useEffect } from 'react';

const SITE_URL = 'https://esmeraldasweet.uy';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;
const SOCIAL_PROFILES = [
  'https://www.instagram.com/esmeralda_sweet_uy/',
  'https://www.tiktok.com/@esmeralda_sweet_uy',
];

function upsertMeta(attribute, key, content) {
  if (!content) return;

  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function upsertLink(rel, href) {
  let element = document.head.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
}

export default function SEO({
  title,
  description,
  path = '/',
  image = DEFAULT_IMAGE,
  type = 'website',
  jsonLd,
}) {
  useEffect(() => {
    const canonicalUrl = `${SITE_URL}${path}`;

    document.title = title;
    document.documentElement.lang = 'es-UY';

    upsertMeta('name', 'description', description);
    upsertMeta('name', 'robots', 'index, follow');
    upsertMeta('name', 'author', 'Esmeralda Sweet');
    upsertMeta('name', 'theme-color', '#0f7a5b');

    upsertMeta('property', 'og:locale', 'es_UY');
    upsertMeta('property', 'og:type', type);
    upsertMeta('property', 'og:site_name', 'Esmeralda Sweet');
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('property', 'og:image', image);
    upsertMeta('property', 'og:image:alt', 'Esmeralda Sweet - Pastelería artesanal');

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', image);
    upsertMeta('name', 'twitter:image:alt', 'Esmeralda Sweet - Pastelería artesanal');

    upsertLink('canonical', canonicalUrl);

    const existingSchema = document.head.querySelector('#esmeralda-seo-schema');
    existingSchema?.remove();

    if (jsonLd) {
      const schema = document.createElement('script');
      schema.id = 'esmeralda-seo-schema';
      schema.type = 'application/ld+json';
      schema.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(schema);
    }

    return () => {
      document.head.querySelector('#esmeralda-seo-schema')?.remove();
    };
  }, [description, image, jsonLd, path, title, type]);

  return null;
}

export function buildBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Bakery',
    name: 'Esmeralda Sweet',
    url: SITE_URL,
    image: DEFAULT_IMAGE,
    description:
      'Pastelería artesanal en Montevideo con tortas, postres, alfajores, desayunos y propuestas dulces y saladas para regalar, compartir y celebrar.',
    telephone: '+598099123926',
    areaServed: {
      '@type': 'City',
      name: 'Montevideo',
      containedInPlace: {
        '@type': 'Country',
        name: 'Uruguay',
      },
    },
    sameAs: SOCIAL_PROFILES,
  };
}

export function buildWebPageSchema({ title, description, path = '/' }) {
  return {
    '@context': 'https://schema.org',
    '@type': path === '/' ? 'WebSite' : 'CollectionPage',
    name: title,
    description,
    url: `${SITE_URL}${path}`,
    inLanguage: 'es-UY',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Esmeralda Sweet',
      url: SITE_URL,
    },
  };
}
