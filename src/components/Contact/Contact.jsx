import styles from './Contact.module.css';
import emailjs from '@emailjs/browser';
import { motion } from 'motion/react';
import { useState } from 'react';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !message) {
            setError('');
            setTimeout(() => setError('> ERROR: ALL FIELDS REQUIRED.'), 10);
            return;
        }

        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            {
                name: name,
                email: email,
                message: message,
            },
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then(() => {
                alert('> MESSAGE TRANSMITTED SUCCESSFULLY.');
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch(() => {
                alert('> TRANSMISSION FAILED. RETRY.');
            });
    };

    return (
        <section id="contact" className={styles.section}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div className={styles.label}>/// CONTACT</div>
                    <h2 className={styles.headline}>READY TO CONNECT?</h2>
                    <p className={styles.subtitle}>
                        CURRENTLY AVAILABLE FOR FREELANCE PROJECTS AND OPEN TO
                        FULL-TIME OPPORTUNITIES.
                    </p>

                    <form className={styles.form} onSubmit={handleSubmit}>
                        <label htmlFor="contact-name" className={styles.fieldLabel}>NAME</label>
                        <input
                            id="contact-name"
                            type="text"
                            placeholder="_"
                            className={styles.input}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        <label htmlFor="contact-email" className={styles.fieldLabel}>EMAIL</label>
                        <input
                            id="contact-email"
                            type="email"
                            placeholder="_"
                            className={styles.input}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <label htmlFor="contact-message" className={styles.fieldLabel}>MESSAGE</label>
                        <textarea
                            id="contact-message"
                            className={`${styles.input} ${styles.textarea}`}
                            placeholder="_"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />

                        <div className={styles.submitRow}>
                            {error && <p className={styles.error}>{error}</p>}
                            <button type="submit" className={styles.submitBtn}>SEND_MESSAGE →</button>
                        </div>
                    </form>

                    <div className={styles.socials}>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.linkedin.com/in/gustavo-peralta-54a598249/"
                            className={styles.socialLink}
                        >
                            LINKEDIN
                        </a>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.instagram.com/ItzHypeR.dev/"
                            className={styles.socialLink}
                        >
                            INSTAGRAM
                        </a>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/xItzHypeR"
                            className={styles.socialLink}
                        >
                            GITHUB
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
