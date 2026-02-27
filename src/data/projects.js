export const projects = [
    {
        id: 'chatverde',
        title: 'CHAT VERDE',
        tagline: 'CONVERSATIONAL APP',
        tech: 'F# • .NET • NLP • C#',
        techList: ['F#', '.NET', 'NLP', 'C#', 'Windows Forms'],
        badge: '',
        desc: 'Optimized search performance handling natural language queries with under 100ms response times.',
        fullDesc: 'A conversational console application developed in F# on .NET to query the "Medicina Verde 100% Natural" product catalog using natural language. It features advanced search capabilities with exact tokenization and intent recognition.',
        challenge: 'Finding products in a catalog of 500 items was difficult due to strict spelling requirements and lack of natural language understanding, causing a high match loss for common spelling variations.',
        solution: 'I developed a search engine prioritizing specific fields with tokenization and stopword removal, improving precision by over 10%. I implemented case and accent-insensitive text normalization ending in 0% match loss, and integrated intent recognition to list full categories (e.g., "shampoos").',
        stats: {
            role: 'Software Engineer',
            timeline: 'November 2025',
            team: 'Estelí, Nicaragua'
        },
        img: '/ChatVerde.webp',
        imgAlt: 'Console conversational interface'
    },
    {
        id: 'allegra',
        title: 'ALLEGRA E-COMMERCE',
        tagline: 'E-COMMERCE',
        tech: 'React • Vite • Tailwind CSS',
        techList: ['React', 'Vite', 'API'],
        badge: '',
        desc: 'Reduced page load time by 60% through a complete architectural refactor.',
        fullDesc: 'A high-performance e-commerce platform built to handle complex checkout flows and high traffic. The project focused on transitioning a legacy codebase to a modern component-based architecture.',
        challenge: 'The existing legacy HTML/JavaScript codebase suffered from poor performance and difficulty in maintenance. Implementing a secure, multi-method checkout flow required careful integration of multiple payment gateway APIs and complex form validations.',
        solution: 'I refactored the entire frontend using Vite and React, implementing a robust state management system. I also integrated several payment gateway APIs and developed an asynchronous form validation system that significantly reduced user input errors.',
        stats: {
            role: 'Full Stack Engineer',
            timeline: 'July 2025',
            team: '4 Developers'
        },
        img: '/TiendaDeRopaAllegra.webp',
        imgAlt: 'E-commerce dashboard interface'
    },
    {
        id: 'directory',
        title: 'BUSINESS DIRECTORY',
        tagline: 'DIRECTORY APP',
        tech: 'JavaScript • Tailwind CSS',
        techList: ['JavaScript', 'Tailwind CSS', 'Google Maps API', 'Accessibility'],
        badge: '',
        desc: 'Interactive search platform for local businesses with real-time filtering.',
        fullDesc: 'A comprehensive platform designed to digitize the online presence of local businesses. It features a high-performance search engine and dynamic mapping.',
        challenge: 'Many local businesses lacked an online presence or had difficult-to-find information. The goal was to create a highly accessible (90+ Lighthouse score) platform that would be easy for anyone to use.',
        solution: 'I developed an interactive search platform with real-time filtering and dynamic map rendering using the Google Maps API. I optimized the user experience with efficient CSS and responsive design principles.',
        stats: {
            role: 'Frontend Developer',
            timeline: 'June 2025',
            team: '1 Developer'
        },
        img: '/EsteliHub.webp',
        imgAlt: 'Abstract map interface'
    },
    {
        id: 'productivity',
        title: 'PROD SYSTEM',
        tagline: 'ERP SYSTEM',
        tech: 'Java • SQL • Database Design',
        techList: ['Java', 'SQL', 'MySQL', 'Database Normalization', 'KPI Visualization'],
        badge: '',
        desc: 'Optimized performance report generation by 30% via database normalization.',
        fullDesc: 'A robust internal tool for tracking and visualizing production metrics and KPIs in real-time, helping managers make data-driven decisions.',
        challenge: 'The existing system suffered from significant data redundancy and slow query times, making real-time tracking almost impossible for large datasets.',
        solution: 'I designed a normalized relational database schema that reduced redundancy and improved query speed by 30%. I then built a full CRUD application that allowed managers to visualize KPIs instantly.',
        stats: {
            role: 'Backend Developer',
            timeline: 'June 2023',
            team: '1 Developer'
        },
        img: '/prodSystem.webp',
        imgAlt: 'Database architecture diagram style visualization'
    },
    {
        id: 'cashcrafter',
        title: 'CASH CRAFTER',
        tagline: 'FINTECH TOOL',
        tech: 'Java • C# • .NET',
        techList: ['Java', 'C#', '.NET', 'Windows Forms', 'Financial Logic'],
        badge: '',
        desc: 'Reduced manual accounting time by 40% for small merchants.',
        fullDesc: 'A powerful desktop financial calculator designed specifically for small merchants who need quick, reliable accounting calculations.',
        challenge: 'Small merchants were spending too much time on manual accounting calculations, which was prone to human error and slowed down business operations.',
        solution: 'I engineered an automated desktop tool with an intuitive C# interface that handled complex financial formulas instantly. I also led a small team of students through the agile development lifecycle.',
        stats: {
            role: 'Software Architect and Developer',
            timeline: 'June 2023',
            team: '3 Students'
        },
        img: '/cashcrafter.webp',
        imgAlt: 'Financial calculations interface'
    }
];
