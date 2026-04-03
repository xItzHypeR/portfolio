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
                    <p className={styles.copy}>© {new Date().getFullYear()} ITZHYPER PORTFOLIO</p>
                </div>
            </div>
        </motion.footer>
    );
}
