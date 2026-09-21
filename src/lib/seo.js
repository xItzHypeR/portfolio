import { useEffect } from 'react';

export const SITE_URL = 'https://portfolio-itzhyper.vercel.app';

export const HOME_META = {
    title: 'Gustavo Peralta | Full-Stack Developer',
    description: 'Portfolio of Gustavo Peralta, a full-stack developer from Nicaragua building useful digital tools and experiences.',
    image: '/GustavoPeralta.webp',
    path: '/',
};

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

export function usePageMeta({ title, description, image, path }) {
    useEffect(() => {
        const imageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`;

        document.title = title;
        setMeta('name', 'description', description);
        setMeta('property', 'og:title', title);
        setMeta('property', 'og:description', description);
        setMeta('property', 'og:url', `${SITE_URL}${path === '/' ? '/' : path}`);
        setMeta('property', 'og:image', imageUrl);
        setMeta('name', 'twitter:title', title);
        setMeta('name', 'twitter:description', description);
        setMeta('name', 'twitter:image', imageUrl);
        setCanonical(path);
    }, [description, image, path, title]);
}
