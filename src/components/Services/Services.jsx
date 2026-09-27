import styles from './Services.module.css';

const services = [
  {
    number: '01',
    title: 'Business websites',
    description: 'A clear, responsive place to explain your offer, show your work or products, and make it easy to contact you.',
  },
  {
    number: '02',
    title: 'Web applications',
    description: 'Search, forms, dashboards, and custom interfaces built around what your users actually need to do.',
  },
  {
    number: '03',
    title: 'Internal tools',
    description: 'Practical software to organize information, simplify repetitive tasks, and support everyday decisions.',
  },
];

export default function Services() {
  return (
    <section id="services" className={styles.section} aria-labelledby="services-title">
      <div className="container">
        <div className={styles.heading}>
          <div>
            <p className={styles.eyebrow}>WAYS I CAN HELP</p>
            <h2 id="services-title">WHAT I BUILD</h2>
          </div>
          <p>From an initial idea to a working product, I focus on useful features and clear communication.</p>
        </div>
        <div className={styles.grid}>
          {services.map((service) => (
            <article className={styles.card} key={service.number}>
              <span className={styles.number}>{service.number} /</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
        <p className={styles.note}>
          In Nicaragua or working remotely? We can discuss your project in Spanish or written English.
          {' '}<a href="#contact">Tell me what you need <span aria-hidden="true">→</span></a>
        </p>
      </div>
    </section>
  );
}
