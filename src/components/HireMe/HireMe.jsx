import styles from "./HireMe.module.css";
import { motion } from "framer-motion";

export default function HireMe() {
  return (
    <motion.div
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
    </motion.div>
  );
}
