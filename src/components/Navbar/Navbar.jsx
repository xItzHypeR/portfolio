import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <header className={styles.nav}>
      <div className={`container ${styles.inner}`}>
        <a href="#" className={styles.logo}>ITZHYPER.PORTFOLIO</a>

        <nav className={styles.links}>
          <a href="#about" className={styles.navLink}>ABOUT</a>
          <a href="#contact" className={styles.ctaBtn}>GET IN TOUCH</a>
        </nav>

        <button className={styles.menuBtn} type="button" aria-label="Open menu">
          <span className="material-icons">menu</span>
        </button>
      </div>
    </header>
  );
}
