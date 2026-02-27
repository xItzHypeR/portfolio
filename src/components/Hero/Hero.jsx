import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={`container ${styles.inner}`}>
                {/* Left column */}
                <div className={styles.left}>
                    <div className={styles.tagline}>
                        <p className={styles.role}>Full Stack Engineer</p>
                        <p className={styles.location}>BASED IN ESTELI, NICARAGUA</p>
                    </div>

                    <h1 className={styles.headline}>
                        BUILDING <br />
                        <span className={styles.outlineWord}>ROBUST</span> <br />
                        SYSTEMS.
                    </h1>

                    <div className={styles.descBox}>
                        <p>
                            I craft high-performance digital experiences with brutal
                            efficiency. Specializing in scalable architecture, clean code,
                            and user-centric interfaces.
                        </p>
                    </div>

                    <div className={styles.ctas}>
                        <a href="#projects" className={styles.btnPrimary}>
                            VIEW PROJECTS
                            <span className="material-icons">arrow_downward</span>
                        </a>
                        <a href="https://github.com/xItzHypeR" target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
                            GITHUB
                            <span className="material-icons">code</span>
                        </a>
                    </div>
                </div>

                {/* Right column: image card */}
                <div className={styles.right}>
                    <div className={`${styles.imageCard} code-overlay`}>
                        <div className={styles.gridOverlay} />
                        <div className={styles.colorOverlay} />
                        <div className={styles.scanlines} />
                        <img
                            src="/GustavoPeralta.webp"
                            alt="Stylized developer portrait with tech aesthetic"
                            className={styles.photo}
                        />
                        <div className={`${styles.corner} ${styles.cornerTL}`} />
                        <div className={`${styles.corner} ${styles.cornerTR}`} />

                        <div className={`${styles.corner} ${styles.cornerBR}`} />
                        <div className={styles.devTag}>&lt;GUSTAVO PERALTA /&gt;</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
