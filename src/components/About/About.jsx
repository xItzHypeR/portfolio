import styles from './About.module.css';
import { motion } from 'motion/react';

const skills = [
    'Java', 'C#', 'JavaScript (ES6+)', 'SQL',
    'React.js', 'Vite', 'Tailwind CSS', 'HTML5', 'CSS3',
    'Git', 'GitHub', 'VS Code', 'MySQL Workbench'
];

export default function About() {
    return (
        <section id="about" className={styles.section}>
            <div className="container">
                <div className={styles.grid}>
                    {/* Left: text */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className={styles.headline}>
                            CODE. <br />CURIOSITY. <br />CRAFT.
                        </h2>
                        <p className={styles.body}>
                            I like understanding how things work and making them easier to use.
                            My approach combines practical software development, a sense for
                            visual detail, and the patience to keep improving an idea until it
                            feels clear.
                        </p>
                        <div className={styles.profileMeta}>
                            <div>
                                <span>BASED</span>
                                <strong>Estelí, Nicaragua</strong>
                            </div>
                            <div>
                                <span>COLLABORATION</span>
                                <strong>Remote / async</strong>
                            </div>
                            <div>
                                <span>LANGUAGES</span>
                                <strong>Spanish + written English</strong>
                            </div>
                        </div>
                        <div className={styles.skillsBox}>
                            <h3 className={styles.skillsTitle}>Tools I Use</h3>
                            <ul className={styles.skillsList}>
                                {skills.map((s) => (
                                    <li key={s} className={styles.skillItem}>
                                        <span className={styles.dot} />
                                        {s}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className={styles.profileBoard}
                    >
                        <div className={styles.boardGrid} />
                        <div className={styles.boardTopline}>
                            <span>ABOUT ME / 001</span>
                            <span>GP</span>
                        </div>
                        <div className={styles.boardProfile}>
                            <p className={styles.boardName}>GUSTAVO<br />PERALTA</p>
                            <p className={styles.boardRole}>COMPUTER SYSTEMS<br />ENGINEERING STUDENT</p>
                        </div>
                        <div className={styles.boardRule} />
                        <div className={styles.boardList}>
                            <span>BASED IN ESTELÍ, NICARAGUA</span>
                            <span>REMOTE / ASYNC COLLABORATION</span>
                            <span>SPANISH + WRITTEN ENGLISH</span>
                        </div>
                        <div className={styles.boardFooter}>
                            <span>WEB APPS · PRACTICAL TOOLS</span>
                            <span>OPEN TO OPPORTUNITIES</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
