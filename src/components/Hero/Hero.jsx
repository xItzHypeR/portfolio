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
            <p className={styles.role}>Full-Stack Developer &amp; Creative Builder</p>
            <p className={styles.location}>BASED IN ESTELÍ, NICARAGUA · AVAILABLE WORLDWIDE</p>
          </div>

          <h1 className={styles.headline}>
            BUILDING <br />
            <span className={styles.outlineWord}>USEFUL</span> <br />
            DIGITAL WORK.
          </h1>

          <div className={styles.descBox}>
            <p>
              I&apos;m Gustavo, a full-stack developer who builds responsive websites
              and practical software for people and small teams. I bring together
              solid code, thoughtful interfaces, and a visual eye shaped by design.
            </p>
          </div>

          <div className={styles.ctas}>
            <a href="#projects" className={styles.btnPrimary}>
              SEE MY WORK
              <span className="material-icons">arrow_downward</span>
            </a>
            <a
              href="#contact"
              className={styles.btnSecondary}
            >
              LET&apos;S TALK
              <span className="material-icons">arrow_forward</span>
            </a>
          </div>
          <p className={styles.availability}>Remote-friendly · async collaboration · Spanish + written English</p>
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
