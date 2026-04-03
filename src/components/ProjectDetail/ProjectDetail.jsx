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
                <motion.header 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className={styles.header}
                >
                    <div className={styles.headerText}>
                        <div className={styles.tagline}>{project.tagline}</div>
                        <h1 className={styles.title}>
                            {project.title.split(' ').map((word, i) => (
                                <motion.span 
                                    key={`${word}-${i}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.2 + (i * 0.1) }}
                                    style={{ display: "inline-block", marginRight: "1rem" }}
                                >
                                    {word}
                                </motion.span>
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
                </motion.header>

                <motion.section 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className={styles.heroImageWrap}
                >
                    <div className={styles.imageDecor} />
                    <div className={styles.imageContainer}>
                        <img src={project.img} alt={project.imgAlt} className={styles.heroImg} />
                        <div className={styles.imgBadge}>
                            <span className={styles.imgName}>
                                {project.title}
                            </span>
                        </div>
                    </div>
                </motion.section>

                <div className={styles.marquee}>
                    <div className={styles.marqueeInner}>
                        {[...Array(6)].map((_, i) => (
                            <span key={`tech-${i}`}>
                                {project.techList.join(' • ')} •
                            </span>
                        ))}
                    </div>
                </div>

                <div className={styles.contentGrid}>
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className={styles.storyCol}
                    >
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
                    </motion.div>

                    <motion.aside 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className={styles.metaCol}
                    >
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
                                {project.techList.map((tech, i) => (
                                    <motion.span 
                                        key={tech} 
                                        className={styles.techTag}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        whileHover={{ scale: 1.1, backgroundColor: "var(--color-primary)", color: "#fff", cursor: "default" }}
                                        transition={{ duration: 0.3, delay: i * 0.05 }}
                                    >{tech}</motion.span>
                                ))}
                            </div>
                        </div>

                        <Link to={`/project/${nextProject.id}`} style={{ textDecoration: 'none' }}>
                            <motion.div 
                                className={styles.nextProject}
                                whileHover={{ scale: 1.05, x: -5 }}
                            >
                                <div className={styles.nextDecor} />
                                <div className={styles.nextContent}>
                                    <span className={styles.nextLabel}>Next Project</span>
                                    <h4 className={styles.nextTitle}>{nextProject.title} →</h4>
                                </div>
                            </motion.div>
                        </Link>
                    </motion.aside>
                </div>
            </main>
        </div>
    );
}
