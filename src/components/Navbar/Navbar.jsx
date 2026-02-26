import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={`container ${styles.inner}`}>
        <a href="#" className={styles.logo}>ITZHYPER.PORTFOLIO</a>

        <div className={styles.links}>
          <a href="#work" className={styles.navLink}>WORK</a>
          <a href="#about" className={styles.navLink}>ABOUT</a>
          <a href="#contact" className={styles.ctaBtn}>GET IN TOUCH</a>
        </div>

        <button className={styles.menuBtn} type="button" aria-label="Open menu">
          <span className="material-icons">menu</span>
        </button>
      </div>
    </nav>
  );
}
