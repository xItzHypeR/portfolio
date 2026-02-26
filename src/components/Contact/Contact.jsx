import styles from './Contact.module.css';

export default function Contact() {
    return (
        <section id="contact" className={styles.section}>
            <div className="container">
                <div className={styles.box}>
                    <div className={styles.glowBlob} />
                    <div className={styles.inner}>
                        <div className={styles.left}>
                            <h2 className={styles.title}>READY TO SCALE?</h2>
                            <p className={styles.subtitle}>
                                Currently available for freelance projects and open to full-time
                                opportunities. Let&apos;s build something that breaks the internet
                                (in a good way).
                            </p>
                            <a href="mailto:gperalta672@gmail.com" className={styles.emailLink}>
                                GPERALTA672@GMAIL.COM
                                <span className="material-icons">north_east</span>
                            </a>
                        </div>
                        <div className={styles.links}>
                            <a href="https://www.linkedin.com/in/gustavo-peralta-54a598249/" className={`${styles.socialBtn} ${styles.socialBtnLight}`}>LINKEDIN</a>
                            <a href="https://www.instagram.com/ItzHypeR.dev/" className={styles.socialBtn}>INSTAGRAM</a>
                            <a href="/CV_Gustavo_Peralta.pdf" download="CV_Gustavo_Peralta.pdf" className={styles.socialBtn}>RESUME (PDF)</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
