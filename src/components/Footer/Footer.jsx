import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.inner}`}>
                <div className={styles.brand}>
                    <span className={styles.dot} />
                    <p className={styles.copy}>© {new Date().getFullYear()} ItzHyper.DEV PORTFOLIO</p>
                </div>
            </div>
        </footer>
    );
}
