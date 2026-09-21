export const projects = [
    {
        id: 'chatverde',
        title: 'CHAT VERDE',
        tagline: 'NATURAL-LANGUAGE SEARCH',
        tech: 'F# • .NET • NLP • C#',
        techList: ['F#', '.NET', 'NLP', 'C#', 'Windows Forms'],
        kind: 'ACADEMIC BUILD',
        desc: 'A conversational catalog search that understands natural-language product queries.',
        fullDesc: 'An academic console application built in F# and .NET to explore the Medicina Verde catalog through natural-language queries. The project focuses on text normalization, tokenization, stopword handling, and intent recognition.',
        challenge: 'A strict text search made it hard to find products when a query included accents, different casing, or a category instead of an exact product name.',
        solution: 'I built a small search pipeline that normalizes user input, removes stopwords, tokenizes terms, and recognizes category intents. The result is a clearer way to explore the catalog than exact-match search.',
        stats: {
            role: 'Solo developer',
            timeline: 'Academic project · 2025',
            team: '1 developer'
        },
        img: '/ChatVerde.webp',
        imgAlt: 'Console conversational interface'
    },
    {
        id: 'allegra',
        title: 'ALLEGRA E-COMMERCE',
        tagline: 'E-COMMERCE PROTOTYPE',
        tech: 'React • Vite • Tailwind CSS',
        techList: ['React', 'Vite', 'API'],
        kind: 'ACADEMIC BUILD',
        desc: 'A responsive e-commerce prototype with a component-based React architecture.',
        fullDesc: 'An academic e-commerce prototype focused on a clear shopping experience, reusable React components, and responsive layouts. It explores the structure a small online store needs before connecting a production backend.',
        challenge: 'The store concept needed a simple path from browsing products to reviewing a cart, while remaining easy to maintain as the interface grew.',
        solution: 'I split the interface into reusable React components, organized the product data, and designed responsive product, cart, and checkout screens with clear interaction states.',
        stats: {
            role: 'Frontend developer',
            timeline: 'Academic project · 2025',
            team: 'Student team'
        },
        img: '/TiendaDeRopaAllegra.webp',
        imgAlt: 'E-commerce dashboard interface'
    },
    {
        id: 'directory',
        title: 'BUSINESS DIRECTORY',
        tagline: 'LOCAL DIRECTORY CONCEPT',
        tech: 'JavaScript • Tailwind CSS',
        techList: ['JavaScript', 'Tailwind CSS', 'Google Maps API', 'Accessibility'],
        kind: 'ACADEMIC BUILD',
        desc: 'A local business directory concept with search, filters, and map context.',
        fullDesc: 'A directory concept for helping people discover local businesses through searchable information, filters, and map-based context. The project explores how a small community-focused product can stay useful and easy to navigate.',
        challenge: 'Useful local information was scattered and difficult to compare. The interface needed to make discovery feel quick on both desktop and mobile.',
        solution: 'I built an interactive search experience with client-side filtering, map context through the Google Maps API, and responsive layouts that keep the most important business details visible.',
        stats: {
            role: 'Frontend developer',
            timeline: 'Academic project · 2025',
            team: '1 developer'
        },
        img: '/EsteliHub.webp',
        imgAlt: 'Abstract map interface'
    },
    {
        id: 'productivity',
        title: 'PROD SYSTEM',
        tagline: 'PRODUCTION TRACKING',
        tech: 'Java • SQL • Database Design',
        techList: ['Java', 'SQL', 'MySQL', 'Database Normalization', 'KPI Visualization'],
        kind: 'ACADEMIC BUILD',
        desc: 'A production tracking concept for recording output and visualizing operational KPIs.',
        fullDesc: 'An academic internal-tool concept for recording production data and presenting it through useful KPIs. The project combines relational database design with a practical CRUD workflow for day-to-day operations.',
        challenge: 'The workflow needed a reliable way to organize production records and turn them into information a manager could understand quickly.',
        solution: 'I modeled a normalized relational database, built the core CRUD flow in Java, and designed KPI views that make the most relevant operational data easier to scan.',
        stats: {
            role: 'Backend developer',
            timeline: 'Academic project · 2023',
            team: '1 developer'
        },
        img: '/prodSystem.webp',
        imgAlt: 'Database architecture diagram style visualization'
    },
    {
        id: 'cashcrafter',
        title: 'CASH CRAFTER',
        tagline: 'DESKTOP FINANCE TOOL',
        tech: 'Java • C# • .NET',
        techList: ['Java', 'C#', '.NET', 'Windows Forms', 'Financial Logic'],
        kind: 'ACADEMIC BUILD',
        desc: 'A desktop finance calculator for repetitive small-business calculations.',
        fullDesc: 'An academic desktop tool designed to make everyday financial calculations easier for small merchants. The project combines a focused Windows Forms interface with reusable financial logic.',
        challenge: 'Manual calculations were repetitive and easy to get wrong. The tool needed to make common scenarios understandable without adding unnecessary complexity.',
        solution: 'I separated the financial formulas from the interface, created a focused C# workflow, and collaborated with a small student team to turn the requirements into a usable desktop tool.',
        stats: {
            role: 'Developer',
            timeline: 'Academic project · 2023',
            team: '3 students'
        },
        img: '/cashcrafter.webp',
        imgAlt: 'Financial calculations interface'
    }
];
