import { useEffect } from 'react';
import { HOME_META, SITE_URL, getProjectMeta } from './seoConfig';

export { HOME_META, SITE_URL, getProjectMeta };

function setMeta(attribute, key, content) {
    let element = document.querySelector(`meta[${attribute}="${key}"]`);

    if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
    }

    element.setAttribute('content', content);
}

function setCanonical(path) {
    let element = document.querySelector('link[rel="canonical"]');

    if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', 'canonical');
        document.head.appendChild(element);
    }

    element.setAttribute('href', `${SITE_URL}${path === '/' ? '/' : path}`);
}

function setStructuredData(serializedData) {
    let element = document.querySelector('#structured-data');

    if (!serializedData) {
        element?.remove();
        return;
    }

    if (!element) {
        element = document.createElement('script');
        element.id = 'structured-data';
        element.type = 'application/ld+json';
        document.head.appendChild(element);
    }

    element.textContent = serializedData;
}

export function usePageMeta({
    title,
    description,
    image,
    path,
    robots = 'index, follow',
    type = 'website',
    structuredData,
}) {
    const serializedData = structuredData ? JSON.stringify(structuredData) : '';

    useEffect(() => {
        const imageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`;

        document.title = title;
        setMeta('name', 'description', description);
        setMeta('name', 'robots', robots);
        setMeta('property', 'og:title', title);
        setMeta('property', 'og:description', description);
        setMeta('property', 'og:type', type);
        setMeta('property', 'og:url', `${SITE_URL}${path === '/' ? '/' : path}`);
        setMeta('property', 'og:image', imageUrl);
        setMeta('name', 'twitter:title', title);
        setMeta('name', 'twitter:description', description);
        setMeta('name', 'twitter:image', imageUrl);
        setCanonical(path);
        setStructuredData(serializedData);
    }, [description, image, path, robots, serializedData, title, type]);
}
