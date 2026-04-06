import styles from './Contact.module.css';
import emailjs from '@emailjs/browser';
import { motion } from 'motion/react';
import { useState } from 'react';
import { databases, ID } from '../../lib/appwrite';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !message) {
            setError('');
            setTimeout(() => setError('Please fill in all fields.'), 10);
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
                alert('Message sent!');
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch((error) => {
                alert('Something went wrong.');
            });

        const promise = databases.createDocument(
            import.meta.env.VITE_APPWRITE_DATABASE_ID,
            import.meta.env.VITE_APPWRITE_COLLECTION_ID,
            ID.unique(),
            {
                name: name,
                email: email,
                message: message
            }
        );
        promise.then((response) => {
            setName('');
            setEmail('');
            setMessage('');
        }).catch((error) => {
            alert('Something went wrong.');
        });


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
                            <h2 className={styles.title}>READY TO SCALE?</h2>
                            <p className={styles.subtitle}>
                                Currently available for freelance projects and open to full-time
                                opportunities. Let&apos;s build something that breaks the internet
                                (in a good way).
                            </p>
                            <form className={styles.form} onSubmit={handleSubmit}>
                                <label htmlFor="name" className={styles.label}>NAME</label>
                                <input id="name" type="text" placeholder="Name" className={styles.input} value={name} onChange={(e) => setName(e.target.value)} />
                                <label htmlFor="email" className={styles.label}>EMAIL</label>
                                <input id="email" type="email" placeholder="Email" className={styles.input} value={email} onChange={(e) => setEmail(e.target.value)} />
                                <label htmlFor="message" className={styles.label}>MESSAGE</label>
                                <textarea id="message" className={`${styles.input} ${styles.textarea}`} placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                                <div className={styles.buttonWrapper}>
                                    {error && <p className={styles.error}>{error}</p>}
                                    <button type="submit" className={styles.button}>SEND MESSAGE</button>
                                </div>
                            </form>
                        </div>
                        <div className={styles.links}>
                            <a target="_blank" href="https://www.linkedin.com/in/gustavo-peralta-54a598249/" className={`${styles.socialBtn} ${styles.socialBtnLight}`}>LINKEDIN</a>
                            <a target="_blank" href="https://www.instagram.com/ItzHypeR.dev/" className={styles.socialBtn}>INSTAGRAM</a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
