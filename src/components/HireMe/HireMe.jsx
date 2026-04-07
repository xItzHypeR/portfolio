import styles from "./HireMe.module.css";
import { motion as Motion } from "motion/react";

export default function HireMe() {
  return (
    <Motion.div
      className={styles.wrapper}

      initial={{ y: 0 }}
      animate={{ y: -8 }}
      transition={{
        ease: "easeInOut",
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      <a href="#contact" className={styles.fab}>
        HIRE ME
      </a>
    </Motion.div>
  );
}
