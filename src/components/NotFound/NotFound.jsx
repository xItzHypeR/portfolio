import { Link } from 'react-router-dom';
import { usePageMeta } from '../../lib/seo';
import styles from './NotFound.module.css';

export default function NotFound() {
    usePageMeta({
        title: '404 | Gustavo Peralta',
        description: 'The page you are looking for does not exist.',
        image: '/GustavoPeralta.webp',
        path: window.location.pathname,
        robots: 'noindex, follow',
        type: 'website',
    });

    return (
        <main className={styles.page}>
            <div className={styles.pattern} aria-hidden="true" />

            <div className={styles.content}>
                <span className={styles.eyebrow}>ERROR / 404</span>
                <h1 className={styles.code}>404</h1>
                <p className={styles.title}>PAGE NOT FOUND</p>
                <p className={styles.copy}>
                    The page you are looking for does not exist, but there is still
                    something useful to build.
                </p>

                <Link to="/" className={styles.homeButton}>
                    <span className="material-icons">arrow_back</span>
                    BACK TO HOME
                </Link>
            </div>
        </main>
    );
}
