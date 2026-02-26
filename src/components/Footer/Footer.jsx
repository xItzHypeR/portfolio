import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.inner}`}>
                <div className={styles.brand}>
                    <span className={styles.dot} />
                    <p className={styles.copy}>© 2026 HypeR.DEV PORTFOLIO</p>
                </div>
                <div className={styles.links}>
                    <a href="#" className={styles.link}>STYLEGUIDE</a>
                    <a href="#" className={styles.link}>LICENSING</a>
                </div>
            </div>
        </footer>
    );
}
