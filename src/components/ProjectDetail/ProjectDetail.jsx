import { useParams, Link, useNavigate } from 'react-router-dom';
import { projects } from '../../data/projects';
import styles from './ProjectDetail.module.css';
import { useEffect } from 'react';
import { motion } from 'motion/react';

export default function ProjectDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projects.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [id]);

    if (!project) {
        return (
            <div className={styles.page}>
                <div className="container" style={{ paddingTop: '120px' }}>
                    <h2 style={{ color: 'var(--color-active-white)', fontSize: 'var(--text-display)', fontWeight: 400 }}>
                        404
                    </h2>
                    <p style={{ color: 'var(--color-text-gray)', marginTop: '16px' }}>
                        {'> PROJECT NOT FOUND.'}
                    </p>
                    <Link to="/" style={{ color: 'var(--color-text-gray)', borderBottom: '1px solid var(--color-text-gray)', marginTop: '24px', display: 'inline-block' }}>
                        {'← BACK HOME'}
                    </Link>
                </div>
            </div>
        );
    }

    const nextProject = projects[(projects.indexOf(project) + 1) % projects.length];

    return (
        <div className={styles.page}>
            <nav className={styles.nav}>
                <div className={`container ${styles.navInner}`}>
                    <Link to="/" className={styles.backBtn}>
                        ← BACK TO PROJECTS
                    </Link>
                </div>
            </nav>

            <main className={`container ${styles.main}`}>
                <motion.header
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className={styles.header}
                >
                    <div className={styles.tagline}>/// {project.tagline}</div>
                    <h1 className={styles.title}>
                        {project.title.split(' ').map((word, i) => (
                            <motion.span
                                key={`${word}-${i}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.2 + (i * 0.1) }}
                                style={{ display: "inline-block", marginRight: "0.5em" }}
                            >
                                {word}
                            </motion.span>
                        ))}
                    </h1>
                    <p className={styles.shortDesc}>
                        {project.fullDesc}
                    </p>
                </motion.header>

                {/* Tech marquee */}
                <div className={styles.marquee}>
                    <div className={styles.marqueeInner}>
                        {[...Array(8)].map((_, i) => (
                            <span key={`tech-${i}`}>
                                {project.techList.join(' /// ')} ///
                            </span>
                        ))}
                    </div>
                </div>

                <div className={styles.contentGrid}>
                    {/* Story */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className={styles.storyCol}
                    >
                        <div>
                            <div className={styles.cardLabel}>/// THE CHALLENGE</div>
                            <h2 className={styles.cardTitle}>
                                {'>'} PROBLEM
                            </h2>
                            <p className={styles.cardText}>{project.challenge}</p>
                        </div>

                        <div className={styles.divider} />

                        <div>
                            <div className={styles.cardLabel}>/// THE SOLUTION</div>
                            <h2 className={styles.cardTitle}>
                                {'>'} IMPLEMENTATION
                            </h2>
                            <p className={styles.cardText}>{project.solution}</p>
                        </div>
                    </motion.div>

                    {/* Meta sidebar */}
                    <motion.aside
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className={styles.metaCol}
                    >
                        <div>
                            <div className={styles.metaLabel}>PROJECT STATS</div>
                            <div className={styles.statItem}>
                                <span className={styles.statLabel}>ROLE</span>
                                <span className={styles.statValue}>{project.stats.role}</span>
                            </div>
                            <div className={styles.statItem}>
                                <span className={styles.statLabel}>TIMELINE</span>
                                <span className={styles.statValue}>{project.stats.timeline}</span>
                            </div>
                            <div className={styles.statItem}>
                                <span className={styles.statLabel}>TEAM</span>
                                <span className={styles.statValue}>{project.stats.team}</span>
                            </div>
                        </div>

                        <div>
                            <div className={styles.metaLabel}>TECH STACK</div>
                            <div className={styles.techList}>
                                {project.techList.map((tech, i) => (
                                    <motion.span
                                        key={tech}
                                        className={styles.techTag}
                                        initial={{ opacity: 0, x: 10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: i * 0.05 }}
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </div>

                        <Link to={`/project/${nextProject.id}`} className={styles.nextProject}>
                            <span className={styles.nextLabel}>NEXT PROJECT</span>
                            <div className={styles.nextTitle}>{nextProject.title} →</div>
                        </Link>
                    </motion.aside>
                </div>
            </main>
        </div>
    );
}
