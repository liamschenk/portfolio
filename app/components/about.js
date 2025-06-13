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
              <div
                key={index}
                className={`${styles.grid} ${styles.mobileGrid}`}
              >
                <p className="tertiary">{profile.network}</p>
                <p>
                  <a
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {profile.username}
                  </a>
                  <span>
                    {" "}
                    <svg viewBox="-10 0 1598 2048" className={styles.arrow}>
                      <path
                        fill="currentColor"
                        d="M1338 1442h-166v-298q0 -54 3 -116.5t8 -126.5t11 -123.5t13 -107.5l11 42q-23 35 -47.5 70t-50.5 67t-56 62l-725 726l-118 -118l726 -725q30 -30 62.5 -56t67 -50.5t69.5 -47.5l42 11q-64 9 -147 17t-169 13t-158 5h-298v-166h922v922z"
                      />
                    </svg>
                  </span>
                </p>
              </div>
            ))}
          </section>
        </motion.div>

        <motion.div variants={sectionVariants}>
          <section className={styles.section}>
            <h1>Downloads</h1>
            <div className={`${styles.grid} ${styles.mobileGrid}`}>
              <p className="tertiary">Lebenslauf</p>
              <p>
                <a
                  href="files/Lebenslauf.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lebenslauf (PDF)
                </a>
                <span>
                  {" "}
                  <svg viewBox="-10 0 1598 2048" className={styles.arrow}>
                    <path
                      fill="currentColor"
                      d="M1338 1442h-166v-298q0 -54 3 -116.5t8 -126.5t11 -123.5t13 -107.5l11 42q-23 35 -47.5 70t-50.5 67t-56 62l-725 726l-118 -118l726 -725q30 -30 62.5 -56t67 -50.5t69.5 -47.5l42 11q-64 9 -147 17t-169 13t-158 5h-298v-166h922v922z"
                    />
                  </svg>
                </span>
              </p>
            </div>
          </section>
        </motion.div>
      </motion.div>
    </main>
  );
}
