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
        <motion.section
          variants={sectionVariants}
          className={styles.aboutSection}
        >
          <h1>About</h1>
          <p>{basics.summary}</p>
        </motion.section>
        <motion.section
          variants={sectionVariants}
          className={styles.aboutSection}
        >
          <h1>Contact</h1>
          {basics.profiles.map((profile, index) => (
            <div key={index} className={styles.infoGrid}>
              <p>{profile.network}:</p>
              <p>
                <a href={profile.url} target="_blank" rel="noopener noreferrer">
                  {profile.username}
                </a>
              </p>
            </div>
          ))}
        </motion.section>
        <motion.section
          variants={sectionVariants}
          className={styles.aboutSection}
        >
          <h1>Work Experience</h1>
          {work.map((work, index) => (
            <div key={index} className={styles.infoGrid}>
              <p>
                {work.startDate} — {work.endDate}
              </p>
              <p>
                {work.position} at {work.name}
              </p>
            </div>
          ))}
        </motion.section>
        <motion.section
          variants={sectionVariants}
          className={styles.aboutSection}
        >
          <h1>Education</h1>
          {education.map((education, index) => (
            <div key={index} className={styles.infoGrid}>
              <p>
                {education.startDate} — {education.endDate}
              </p>
              <p>
                {education.area} at {education.institution}
              </p>
            </div>
          ))}
        </motion.section>
      </motion.div>
    </main>
  );
}
