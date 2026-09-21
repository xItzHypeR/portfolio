import styles from './About.module.css';
import { motion } from 'motion/react';
import ToolIcon from './ToolIcons';

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
                                        <ToolIcon name={s} className={styles.skillIcon} />
                                        <span>{s}</span>
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
                        className={styles.profileCard}
                    >
                        <div className={styles.cardHeader}>
                            <span>PROFILE CARD</span>
                            <span>01 / 04</span>
                        </div>
                        <div className={styles.cardIdentity}>
                            <div className={styles.initials}><img src="/gp-logo.svg" alt="GP" /></div>
                            <div>
                                <p className={styles.cardEyebrow}>GUSTAVO PERALTA</p>
                                <h3 className={styles.cardRole}>COMPUTER SYSTEMS<br />ENGINEERING STUDENT</h3>
                            </div>
                        </div>
                        <p className={styles.cardQuote}>
                            I&apos;m building a career around clear communication, careful work, and steady iteration.
                        </p>
                        <div className={styles.cardFacts}>
                            <div>
                                <span>FOCUS</span>
                                <strong>Web apps + practical tools</strong>
                            </div>
                            <div>
                                <span>BASED IN</span>
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
                        <div className={styles.cardFooter}>
                            <span>OPEN TO OPPORTUNITIES</span>
                            <span>EST. 2026</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
