import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';
import styles from './Projects.module.css';

function ProjectCard({ project }) {
    return (
        <article className={styles.card}>
            <div className={styles.imgWrap}>
                <div className={styles.imgOverlay} />
                <img
                    src={project.img}
                    alt={project.imgAlt}
                    className={styles.cardImg}
                />
            </div>
            <div className={styles.cardBody}>
                <div className={styles.cardHeader}>
                    <div>
                        <h3 className={styles.cardTitle}>{project.title}</h3>
                        <p className={styles.cardTech}>{project.tech}</p>
                    </div>
                    <span className={styles.badge}>{project.badge}</span>
                </div>
                <p className={styles.cardDesc}>{project.desc}</p>
                <Link to={`/project/${project.id}`} className={styles.caseStudyBtn}>
                    View Case Study
                    <span className="material-icons">arrow_forward</span>
                </Link>
            </div>
        </article>
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
                    {projects.map((p) => (
                        <ProjectCard key={p.id} project={p} />
                    ))}
                </div>
            </div>
        </section>
    );
}
