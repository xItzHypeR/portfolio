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
                            PURE <br />CODE. <br />NO FLUFF.
                        </h2>
                        <p className={styles.body}>
                            I don't just write code; I engineer solutions. My approach is
                            rooted in mathematical precision and creative problem-solving. I
                            believe in software that is fast, reliable, and accessible.
                        </p>
                        <div className={styles.skillsBox}>
                            <h3 className={styles.skillsTitle}>Technical Arsenal</h3>
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
                        className={styles.imageWrapper}
                    >
                        <div className={styles.rotatedBg} />
                        <div className={styles.imageFrame}>
                            <img
                                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop"
                                alt="Minimalist laptop setup on a wooden desk"
                                className={styles.photo}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
