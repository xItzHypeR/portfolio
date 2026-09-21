import styles from './Contact.module.css';
import emailjs from '@emailjs/browser';
import { motion } from 'motion/react';
import { useState } from 'react';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSending, setIsSending] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name.trim() || !email.trim() || !message.trim()) {
            setStatus({ type: 'error', message: 'Please fill in all fields.' });
            return;
        }

        setIsSending(true);
        setStatus({ type: '', message: '' });

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    name: name.trim(),
                    email: email.trim(),
                    message: message.trim(),
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
            setStatus({ type: 'success', message: 'Thanks — I will get back to you soon.' });
            setName('');
            setEmail('');
            setMessage('');
        } catch {
            setStatus({ type: 'error', message: 'Something went wrong. Please try again or reach out on LinkedIn.' });
        } finally {
            setIsSending(false);
        }
    };

    return (
        <section id="contact" className={styles.section}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className={styles.box}
                >
                    <div className={styles.glowBlob} />
                    <div className={styles.inner}>
                        <div className={styles.left}>
                            <h2 className={styles.title}>HAVE A PROJECT IN MIND?</h2>
                            <p className={styles.subtitle}>
                                Tell me what you&apos;re trying to build, what&apos;s getting in the way,
                                and what you need next. I work remotely from Nicaragua and
                                collaborate asynchronously in Spanish or written English.
                            </p>
                            <form className={styles.form} onSubmit={handleSubmit}>
                                <label htmlFor="name" className={styles.label}>NAME</label>
                                <input id="name" type="text" placeholder="Your name" autoComplete="name" className={styles.input} value={name} onChange={(e) => setName(e.target.value)} required />
                                <label htmlFor="email" className={styles.label}>EMAIL</label>
                                <input id="email" type="email" placeholder="you@example.com" autoComplete="email" className={styles.input} value={email} onChange={(e) => setEmail(e.target.value)} required />
                                <label htmlFor="message" className={styles.label}>MESSAGE</label>
                                <textarea id="message" className={`${styles.input} ${styles.textarea}`} placeholder="What would you like to build?" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                                <div className={styles.buttonWrapper}>
                                    {status.message && <p className={`${styles.status} ${styles[status.type]}`} role="status">{status.message}</p>}
                                    <button type="submit" className={styles.button} disabled={isSending}>{isSending ? 'SENDING...' : 'SEND MESSAGE'}</button>
                                </div>
                            </form>
                        </div>
                        <div className={styles.links}>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/gustavo-peralta-54a598249/" className={`${styles.socialBtn} ${styles.socialBtnLight}`}>LINKEDIN</a>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/xItzHypeR" className={styles.socialBtn}>GITHUB</a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/ItzHypeR.dev/" className={styles.socialBtn}>INSTAGRAM</a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
