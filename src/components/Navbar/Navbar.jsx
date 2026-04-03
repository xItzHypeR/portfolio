import styles from './Navbar.module.css';
import { useState } from 'react';
import Checkbox from './Checkbox';
import { motion } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header 
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}

    className={styles.nav}>
      <div className={`container ${styles.inner}`}>
        <a href="#hero" className={styles.logo}>ITZHYPER.PORTFOLIO</a>

        <nav className={styles.links + ' ' + (isOpen ? styles.open : '')}>
          <a href="#about" className={styles.navLink} onClick={() => setIsOpen(false)} >ABOUT</a>
          <a download href="/CV_Gustavo_Peralta.pdf" className={styles.outlineBtn} onClick={() => setIsOpen(false)}>DOWNLOAD RESUME</a>
          <a href="#contact" className={styles.ctaBtn} onClick={() => setIsOpen(false)}>GET IN TOUCH</a>

        </nav>
        <div className={styles.menuBtn}>
          <Checkbox handleMenuToggle={() => setIsOpen(!isOpen)} isOpen={isOpen} />
        </div>
      </div>
    </motion.header>
  );
}
