import styles from './About.module.css';
import { motion } from 'motion/react';

const skills = [
    'Java',
    'C#',
    'JavaScript (ES6+)',
    'SQL',
    'React.js',
    'Vite',
    'Tailwind CSS',
    'HTML5 / CSS3',
    'Git / GitHub',
    'MySQL',
];

export default function About() {
    return (
        <section id="about" className={styles.section}>
            <div className="container">
                <div className={styles.grid}>
                    {/* Left: text */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={styles.label}>/// ABOUT</div>
                        <h2 className={styles.headline}>
                            PURE CODE.{'\n'}NO FLUFF.
                        </h2>
                        <p className={styles.body}>
                            I DON'T JUST WRITE CODE; I ENGINEER SOLUTIONS. MY APPROACH IS
                            ROOTED IN MATHEMATICAL PRECISION AND CREATIVE PROBLEM-SOLVING. I
                            BELIEVE IN SOFTWARE THAT IS FAST, RELIABLE, AND ACCESSIBLE.
                        </p>

                        <div className={styles.statsGrid}>
                            <div className={styles.statRow}>
                                <span className={styles.statLabel}>LOCATION</span>
                                <span className={styles.statValue}>ESTELI, NI</span>
                            </div>
                            <div className={styles.statRow}>
                                <span className={styles.statLabel}>FOCUS</span>
                                <span className={styles.statValue}>FULLSTACK DEV</span>
                            </div>
                            <div className={styles.statRow}>
                                <span className={styles.statLabel}>STATUS</span>
                                <span className={styles.statValue}>AVAILABLE</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: skills */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className={styles.skillsLabel}>TECHNICAL ARSENAL</div>
                        <ul className={styles.skillsList}>
                            {skills.map((s, i) => (
                                <motion.li
                                    key={s}
                                    className={styles.skillItem}
                                    initial={{ opacity: 0, x: 10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: i * 0.05 }}
                                >
                                    {s}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
