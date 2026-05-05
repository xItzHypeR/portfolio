import styles from './Navbar.module.css';
import { useState } from 'react';
import { motion } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={styles.nav}
    >
      <div className={`container ${styles.inner}`}>
        <a href="#hero" className={styles.logo}>GUSTAVO://PERALTA</a>

        <nav className={`${styles.links} ${isOpen ? styles.open : ''}`}>
          <a href="#projects" className={styles.navLink} onClick={() => setIsOpen(false)}>PROJECTS</a>
          <a href="#about" className={styles.navLink} onClick={() => setIsOpen(false)}>ABOUT</a>
          <a href="#contact" className={styles.navLink} onClick={() => setIsOpen(false)}>CONTACT</a>
          <a download href="/CV_Gustavo_Peralta.pdf" className={styles.resumeLink} onClick={() => setIsOpen(false)}>RESUME</a>
        </nav>

        <div className={styles.menuBtn}>
          <button
            className={`${styles.hamburger} ${isOpen ? styles.active : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </motion.header>
  );
}
