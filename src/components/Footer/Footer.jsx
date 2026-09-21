import styles from './Footer.module.css';
import { motion } from 'motion/react';

export default function Footer() {
    return (
        <motion.footer 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={styles.footer}
        >
            <div className={`container ${styles.inner}`}>
                <div className={styles.brand}>
                    <span className={styles.dot} />
                    <p className={styles.copy}>© {new Date().getFullYear()} Gustavo Peralta · Estelí, Nicaragua</p>
                </div>
                <p className={styles.note}>Available for remote collaborations</p>
                <div className={styles.links}>
                    <a className={styles.link} href="https://github.com/xItzHypeR" target="_blank" rel="noopener noreferrer">GITHUB</a>
                    <a className={styles.link} href="https://www.linkedin.com/in/gustavo-peralta-54a598249/" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
                </div>
            </div>
        </motion.footer>
    );
}
