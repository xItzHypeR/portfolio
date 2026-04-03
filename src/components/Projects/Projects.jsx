import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';
import styles from './Projects.module.css';
import { motion } from 'motion/react';

function ProjectCard({ project, index }) {
    return (
        <motion.article 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={styles.card}
        >
            <div className={styles.imgWrap}>
                <div className={styles.imgOverlay} />
                <img
                    src={project.img}
                    alt={project.imgAlt}
                    className={styles.cardImg}
                    loading="lazy"
                />
            </div>
            <div className={styles.cardBody}>
                <div className={styles.cardHeader}>
                    <div>
                        <h3 className={styles.cardTitle}>{project.title}</h3>
                        <div className={styles.techContainer}>
                            {project.techList.map((tech, index) => (
                                <span key={`${tech}-${index}`} className={styles.cardTech}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                <p className={styles.cardDesc}>{project.desc}</p>
                <Link to={`/project/${project.id}`} className={styles.caseStudyBtn}>
                    View Case Study
                    <span className="material-icons">arrow_forward</span>
                </Link>
            </div>
        </motion.article>
    );
}

export default function Projects() {
    return (
        <section id="projects" className={styles.section}>
            <div className="container">
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>SELECTED WORKS</h2>
                    <span className={styles.sectionDate}>/// 2022 - 2025</span>
                </div>
                <div className={styles.grid}>
                    {projects.map((p, index) => (
                        <ProjectCard key={p.id} project={p} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
