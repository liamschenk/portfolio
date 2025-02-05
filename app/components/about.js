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
    <motion.main
      className={styles.about}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.section variants={sectionVariants}>
        <h3>About</h3>
        <p>{basics.summary}</p>
      </motion.section>
      <motion.section variants={sectionVariants}>
        <h3>Contact</h3>
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
        <h3>Work Experience</h3>
        {work.map((work, index) => (
          <div key={index}>
            <p>
              {work.startDate} — {work.endDate}
            </p>
            <p>
              {work.position} at {work.name}
            </p>
          </div>
        ))}
      </motion.section>
      <motion.section variants={sectionVariants}>
        <h3>Education</h3>
        {education.map((education, index) => (
          <div key={index}>
            <p>
              {education.startDate} — {education.endDate}
            </p>
            <p>
              {education.area} at {education.institution}
            </p>
          </div>
        ))}
      </motion.section>
    </motion.main>
  );
}
