import styles from './Marquee.module.css';
import { motion } from 'motion/react';

const techs = ['REACT', 'JAVASCRIPT', 'NODE.JS', 'JAVA', 'C#', 'SQL', 'VITE', 'GIT'];

function Track() {
    return (
        <span className={styles.track}>
            {techs.map((t, i) => (
                <span key={`${t}-${i}`} className={styles.item}>
                    {t}
                    <span className={styles.separator}>///</span>
                </span>
            ))}
        </span>
    );
}

export default function Marquee() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={styles.wrapper}
        >
            <div className={`${styles.scroll} animate-marquee`}>
                <Track />
                <Track />
                <Track />
                <Track />
            </div>
        </motion.div>
    );
}
