import { motion } from "framer-motion";
import styles from "../styles/about.module.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.125 } },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.375 } },
};

export default function About({ basics, work, education }) {
  return (
    <main>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={sectionVariants}>
          <section className={styles.section}>
            <h1>Über</h1>
            <p>{basics.summary}</p>
          </section>
        </motion.div>

        <motion.div variants={sectionVariants}>
          <section className={styles.section}>
            <h1>Berufserfahrung</h1>
            {work.map((item, index) => (
              <div key={index} className={styles.grid}>
                <p className="tertiary">
                  {item.startDate} — {item.endDate}
                </p>
                <p className="secondary">
                  {item.position} bei {item.name}
                </p>
              </div>
            ))}
          </section>
        </motion.div>

        <motion.div variants={sectionVariants}>
          <section className={styles.section}>
            <h1>Ausbildung</h1>
            {education.map((item, index) => (
              <div key={index} className={styles.grid}>
                <p className="tertiary">
                  {item.startDate} — {item.endDate}
                </p>
                <p className="secondary">
                  {item.area} am {item.institution}
                </p>
              </div>
            ))}
          </section>
        </motion.div>

        <motion.div variants={sectionVariants}>
          <section className={styles.section}>
            <h1>Kontakt</h1>
            {basics.profiles.map((profile, index) => (
              <div key={index} className={`${styles.grid} ${styles.lastGrid}`}>
                <p className="tertiary">{profile.network}</p>
                <p>
                  <a
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {profile.username}
                  </a>
                </p>
              </div>
            ))}
          </section>
        </motion.div>
      </motion.div>
    </main>
  );
}
