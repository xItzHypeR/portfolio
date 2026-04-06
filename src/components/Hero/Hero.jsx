import styles from "./Hero.module.css";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        {/* Left column */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className={styles.left}
        >
          <div className={styles.tagline}>
            <p className={styles.role}>Full Stack Engineer</p>
            <p className={styles.location}>BASED IN ESTELI, NICARAGUA</p>
          </div>

          <h1 className={styles.headline}>
            BUILDING <br />
            <span className={styles.outlineWord}>ROBUST</span> <br />
            SYSTEMS.
          </h1>

          <div className={styles.descBox}>
            <p>
              Fullstack developer with experience building web applications and
              automation tools. Skilled in Java, C#, JavaScript, and React, with
              a strong focus on problem solving, performance optimization, and
              clean code practices. Proven ability to design efficient solutions
              and deliver measurable improvements in performance and usability.
            </p>
          </div>

          <div className={styles.ctas}>
            <a href="#projects" className={styles.btnPrimary}>
              VIEW PROJECTS
              <span className="material-icons">arrow_downward</span>
            </a>
            <a
              href="https://github.com/xItzHypeR"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnSecondary}
            >
              GITHUB
              <span className="material-icons">code</span>
            </a>
          </div>
        </motion.div>

        {/* Right column: image card */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className={styles.right}
        >
          <div className={`${styles.imageCard} code-overlay`}>
            <div className={styles.gridOverlay} />
            <div className={styles.colorOverlay} />
            <div className={styles.scanlines} />
            <img
              src="/GustavoPeralta.webp"
              alt="Stylized developer portrait with tech aesthetic"
              className={styles.photo}
              fetchPriority="high"
              loading="eager"
            />
            <div className={`${styles.corner} ${styles.cornerTL}`} />
            <div className={`${styles.corner} ${styles.cornerTR}`} />

            <div className={`${styles.corner} ${styles.cornerBR}`} />
            <div className={styles.devTag}>&lt;GUSTAVO PERALTA /&gt;</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
