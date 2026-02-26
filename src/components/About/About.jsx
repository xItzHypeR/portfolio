import styles from './About.module.css';

const skills = [
    'Java', 'C#', 'JavaScript (ES6+)', 'SQL',
    'React.js', 'Vite', 'Tailwind CSS', 'HTML5', 'CSS3',
    'Git', 'GitHub', 'VS Code', 'MySQL Workbench'
];

export default function About() {
    return (
        <section id="about" className={styles.section}>
            <div className="container">
                <div className={styles.grid}>
                    {/* Left: text */}
                    <div>
                        <h2 className={styles.headline}>
                            PURE <br />CODE. <br />NO FLUFF.
                        </h2>
                        <p className={styles.body}>
                            I don't just write code; I engineer solutions. My approach is
                            rooted in mathematical precision and creative problem-solving. I
                            believe in software that is fast, reliable, and accessible.
                        </p>
                        <div className={styles.skillsBox}>
                            <h3 className={styles.skillsTitle}>Technical Arsenal</h3>
                            <ul className={styles.skillsList}>
                                {skills.map((s) => (
                                    <li key={s} className={styles.skillItem}>
                                        <span className={styles.dot} />
                                        {s}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right: image */}
                    <div className={styles.imageWrapper}>
                        <div className={styles.rotatedBg} />
                        <div className={styles.imageFrame}>
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuATDNafF68GM3trJlayC88MScowtHI1yf2I0NyokCf7ttjXCcdYAxiJp0c8Bm4xHVelFz9FxAqslhErLOFAjunQyQezR70qZKcdK-hEay-0sOCzfvM-Nd7wQpVAa_vL7xYqvRZ4BU9CBpr-ox4M3qil-CuVKA0ejaPLaqD5hYBfv5hJ4zpQTcCl22h2Cr0xz2MsxbTK-JilR07bxIwPCdXhNbCHkqJXXr208c4_8JGcyhOqBljA-gRJQmTEF9UrBiLmCOd3DcHmrCw2"
                                alt="Minimalist laptop setup on a wooden desk"
                                className={styles.photo}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
