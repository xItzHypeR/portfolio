import styles from './Footer.module.css';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export default function Footer() {
    const [isAtBottom, setIsAtBottom] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const windowHeight = window.innerHeight;
            const docHeight = document.documentElement.scrollHeight;

            // Only appear when the user is all the way at the bottom (within 200px of page bottom)
            const atBottom = windowHeight + scrollTop >= docHeight - 200;
            setIsAtBottom(atBottom);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        const startPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
        if (startPosition <= 0) return;

        const root = document.documentElement;
        const previousBehavior = root.style.scrollBehavior;
        root.style.scrollBehavior = 'auto';

        const duration = 850;
        const startTime = performance.now();

        const easeInOutCubic = (t) => {
            return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        };

        const step = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = easeInOutCubic(progress);

            window.scrollTo(0, Math.round(startPosition * (1 - ease)));

            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                root.style.scrollBehavior = previousBehavior;
            }
        };

        requestAnimationFrame(step);
    };

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
                <div className={styles.actionWrap}>
                    <button
                        type="button"
                        onClick={scrollToTop}
                        className={`${styles.backToTopBtn} ${isAtBottom ? styles.visible : ''}`}
                        aria-label="Back to top"
                        tabIndex={isAtBottom ? 0 : -1}
                    >
                        <span className={styles.arrow}>↑</span>
                        <span>BACK TO TOP</span>
                    </button>
                </div>
            </div>
        </motion.footer>
    );
}