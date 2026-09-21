export const SITE_URL = 'https://portfolio-itzhyper.vercel.app';

const PERSON = {
    '@type': 'Person',
    name: 'Gustavo Peralta',
    url: `${SITE_URL}/`,
};

export const HOME_META = {
    title: 'Gustavo Peralta | Full-Stack Developer',
    description: 'Portfolio of Gustavo Peralta, a full-stack developer from Nicaragua building useful digital tools and experiences.',
    image: '/GustavoPeralta.webp',
    path: '/',
    robots: 'index, follow',
    type: 'website',
    structuredData: {
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        mainEntity: {
            ...PERSON,
            image: `${SITE_URL}/GustavoPeralta.webp`,
            jobTitle: 'Full-Stack Developer',
            description: 'Full-stack developer from Nicaragua building responsive websites, practical software, and useful digital tools.',
            homeLocation: {
                '@type': 'Place',
                name: 'Estelí, Nicaragua',
            },
            knowsAbout: ['React', 'JavaScript', 'Java', 'C#', 'SQL', 'UI/UX design'],
            sameAs: [
                'https://www.linkedin.com/in/gustavo-peralta-54a598249/',
                'https://github.com/xItzHypeR',
                'https://www.instagram.com/ItzHypeR.dev/',
            ],
        },
    },
};

export function getProjectMeta(project, id = project?.id) {
    const path = `/project/${id}`;

    if (!project) {
        return {
            title: 'Project not found | Gustavo Peralta',
            description: 'Explore Gustavo Peralta\'s selected digital projects.',
            image: '/GustavoPeralta.webp',
            path,
            robots: 'noindex, follow',
            type: 'website',
        };
    }

    const url = `${SITE_URL}${path}`;

    return {
        title: `${project.title} | Gustavo Peralta`,
        description: project.fullDesc,
        image: project.img,
        path,
        robots: 'index, follow',
        type: 'article',
        structuredData: {
            '@context': 'https://schema.org',
            '@type': 'CreativeWork',
            name: project.title,
            headline: project.tagline,
            description: project.fullDesc,
            url,
            image: `${SITE_URL}${project.img}`,
            creator: PERSON,
            keywords: project.techList,
            isPartOf: {
                '@type': 'WebSite',
                name: 'Gustavo Peralta',
                url: `${SITE_URL}/`,
            },
        },
    };
}
