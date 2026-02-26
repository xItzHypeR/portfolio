import { useParams, Link, useNavigate } from 'react-router-dom';
import { projects } from '../../data/projects';
import styles from './ProjectDetail.module.css';
import { useEffect } from 'react';

export default function ProjectDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projects.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [id]);

    if (!project) {
        return (
            <div className={styles.container}>
                <h2>Project not found</h2>
                <Link to="/" className={styles.backBtn}>Back Home</Link>
            </div>
        );
    }

    const nextProject = projects[(projects.indexOf(project) + 1) % projects.length];

    return (
        <div className={styles.page}>
            <nav className={styles.nav}>
                <div className={`container ${styles.navInner}`}>
                    <Link to="/" className={styles.backBtn}>
                        <span className="material-icons">arrow_back</span>
                        BACK TO PROJECTS
                    </Link>
                </div>
            </nav>

            <main className={`container ${styles.main}`}>
                <header className={styles.header}>
                    <div className={styles.headerText}>
                        <div className={styles.tagline}>{project.tagline}</div>
                        <h1 className={styles.title}>
                            {project.title.split(' ').map((word, i) => (
                                <span key={i}>{word}<br /></span>
                            ))}
                        </h1>
                    </div>
                    <div className={styles.headerCtas}>
                        {/* <button className={styles.btnPrimary}>LIVE DEMO</button>
                        <button className={styles.btnSecondary}>VIEW CODE</button> */}
                    </div>
                    <p className={styles.shortDesc}>
                        {project.fullDesc}
                    </p>
                </header>

                <section className={styles.heroImageWrap}>
                    <div className={styles.imageDecor} />
                    <div className={styles.imageContainer}>
                        <img src={project.img} alt={project.imgAlt} className={styles.heroImg} />
                        <div className={styles.imgBadge}>
                            <span className={styles.imgName}>
                                {project.title}
                            </span>
                        </div>
                    </div>
                </section>

                <div className={styles.marquee}>
                    <div className={styles.marqueeInner}>
                        {[...Array(6)].map((_, i) => (
                            <span key={i}>
                                {project.techList.join(' • ')} •
                            </span>
                        ))}
                    </div>
                </div>

                <div className={styles.contentGrid}>
                    <div className={styles.storyCol}>
                        <div className={styles.neoCard}>
                            <div className={`${styles.cardBadge} ${styles.badgePink}`}>The Problem</div>
                            <h2 className={styles.cardTitle}>
                                <span className="material-icons">warning</span>
                                The Challenge
                            </h2>
                            <p className={styles.cardText}>{project.challenge}</p>
                        </div>

                        <div className={styles.neoCard}>
                            <div className={`${styles.cardBadge} ${styles.badgeGreen}`}>The Solution</div>
                            <h2 className={styles.cardTitle}>
                                <span className="material-icons">check_circle</span>
                                Implementation
                            </h2>
                            <p className={styles.cardText}>{project.solution}</p>
                        </div>
                    </div>

                    <aside className={styles.metaCol}>
                        <div className={styles.statsBox}>
                            <h3 className={styles.statsTitle}>Project Stats</h3>
                            <div className={styles.statItem}>
                                <span className={styles.statLabel}>Role</span>
                                <span className={styles.statValue}>{project.stats.role}</span>
                            </div>
                            <div className={styles.statItem}>
                                <span className={styles.statLabel}>Timeline</span>
                                <span className={styles.statValue}>{project.stats.timeline}</span>
                            </div>
                            <div className={styles.statItem}>
                                <span className={styles.statLabel}>Team</span>
                                <span className={styles.statValue}>{project.stats.team}</span>
                            </div>
                        </div>

                        <div className={styles.techBox}>
                            <h3 className={styles.statsTitle}>Tech Stack</h3>
                            <div className={styles.techList}>
                                {project.techList.map(tech => (
                                    <span key={tech} className={styles.techTag}>{tech}</span>
                                ))}
                            </div>
                        </div>

                        <Link to={`/project/${nextProject.id}`} className={styles.nextProject}>
                            <div className={styles.nextDecor} />
                            <div className={styles.nextContent}>
                                <span className={styles.nextLabel}>Next Project</span>
                                <h4 className={styles.nextTitle}>{nextProject.title} →</h4>
                            </div>
                        </Link>
                    </aside>
                </div>
            </main>
        </div>
    );
}
