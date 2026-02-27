import styles from './HireMe.module.css';

export default function HireMe() {
    return (
        <div className={styles.wrapper}>
            <a href="#contact" className={styles.fab}>
                HIRE ME
            </a>
        </div>
    );
}
