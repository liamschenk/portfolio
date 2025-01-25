import { motion } from "framer-motion";
import styles from "../styles/about.module.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.125, // Controls the delay between sections
    },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About({ basics, work, education }) {
  return (
    <motion.main
      className={styles.about}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.section variants={sectionVariants}>
        <h3>Über</h3>
        <p>{basics.summary}</p>
      </motion.section>
      <motion.section variants={sectionVariants}>
        <h3>Kontakt</h3>
        {basics.profiles.map((profile, index) => (
          <div key={index}>
            <p>{profile.network}:</p>
            <p>
              <a href={profile.url} target="_blank" rel="noopener noreferrer">
                {profile.username}
              </a>
            </p>
          </div>
        ))}
      </motion.section>
      <motion.section variants={sectionVariants}>
        <h3>Berufserfahrung</h3>
        {work.map((work, index) => (
          <div key={index}>
            <p>
              {work.startDate} — {work.endDate}
            </p>
            <p>
              {work.position} bei {work.name}
            </p>
          </div>
        ))}
      </motion.section>
      <motion.section variants={sectionVariants}>
        <h3>Ausbildung</h3>
        {education.map((education, index) => (
          <div key={index}>
            <p>
              {education.startDate} — {education.endDate}
            </p>
            <p>
              {education.area} bei {education.institution}
            </p>
          </div>
        ))}
      </motion.section>
    </motion.main>
  );
}
