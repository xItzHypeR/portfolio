import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';
import styles from './Projects.module.css';
import { motion } from 'motion/react';

function ProjectRow({ project, index }) {
    const num = String(index + 1).padStart(2, '0');

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
        >
            <Link to={`/project/${project.id}`} className={styles.projectRow}>
                <span className={styles.projectIndex}>{num}</span>
                <div className={styles.projectContent}>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <span className={styles.projectTagline}>{project.tagline}</span>
                </div>
                <div className={styles.projectMeta}>
                    <span className={styles.projectTech}>{project.tech}</span>
                    <span className={styles.arrow}>→</span>
                </div>
            </Link>
        </motion.div>
    );
}

export default function Projects() {
    return (
        <section id="projects" className={styles.section}>
            <div className="container">
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>SELECTED WORKS</h2>
                    <span className={styles.sectionDate}>/// 2023 — 2025</span>
                </div>
                <div className={styles.list}>
                    {projects.map((p, index) => (
                        <ProjectRow key={p.id} project={p} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
