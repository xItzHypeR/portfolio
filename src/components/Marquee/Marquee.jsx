import styles from './Marquee.module.css';

const techs = ['React', 'JS', 'Node.js', 'Java', 'C#', 'MySQL'];

function Track() {
    return (
        <span className={styles.track}>
            {techs.map((t, i) => (
                <span key={i} className={styles.item}>
                    {t}
                    <span className={`material-icons ${styles.icon}`}>bolt</span>

                </span>
            ))}
        </span>
    );
}

export default function Marquee() {
    return (
        <div className={styles.wrapper}>
            <div className={`${styles.scroll} animate-marquee`}>
                <Track />
                <Track />
                <Track />
                <Track />
            </div>
        </div>
    );
}
