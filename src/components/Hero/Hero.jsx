import styles from "./Hero.module.css";
import { motion } from "motion/react";

export default function Hero() {
  const today = new Date().toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric'
  }).toUpperCase();

  return (
    <section id="hero" className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        {/* System status line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={styles.status}
        >
          <span className={styles.statusDot} />
          <span>FULL STACK ENGINEER</span>
          <span>—</span>
          <span>{today}</span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className={styles.headline}
        >
          HI! I'M GUSTAVO PERALTA
          <span className={styles.cursor} />
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className={styles.desc}
        >
          ESTELI-BASED, FULLSTACK DEVELOPER. BUILDING ROBUST SYSTEMS
          WITH JAVA, C#, JAVASCRIPT, AND REACT. FOCUSED ON
          PERFORMANCE OPTIMIZATION AND CLEAN CODE PRACTICES.
        </motion.p>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className={styles.heroLinks}
        >
          <a href="#projects" className={styles.heroLink}>PROJECTS</a>
          <a
            href="https://github.com/xItzHypeR"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.heroLink}
          >
            GITHUB
          </a>
          <a
            href="https://www.linkedin.com/in/gustavo-peralta-54a598249/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.heroLink}
          >
            LINKEDIN
          </a>
        </motion.div>
      </div>

      {/* Decorative channel number */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1, delay: 1.2 }}
        className={styles.channel}
      >
        CH—01
      </motion.div>
    </section>
  );
}
