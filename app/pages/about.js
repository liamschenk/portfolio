import { motion } from "framer-motion";

import { parentVariants, childVariants } from "../utilities/variants";

import styles from "../styles/about.module.css";

export default function About({ basics, profiles, work, education }) {
  function formatDate(startDate, endDate, ongoing = false) {
    if (!startDate) return "?";

    const format = (dateStr) => {
      const date = new Date(dateStr);
      if (!isFinite(date)) return "?";

      const month = date
        .toLocaleString("de-DE", { month: "short" })
        .slice(0, 3);
      const year = date.getFullYear();
      return `${month} ${year}`;
    };

    const formattedStart = format(startDate);
    const formattedEnd = ongoing ? "Jetzt" : endDate ? format(endDate) : "?";

    return `${formattedStart} – ${formattedEnd}`;
  }

  return (
    <main>
      <motion.div initial="hidden" animate="visible" variants={parentVariants}>
        <motion.section
          className="padding-top-medium padding-bottom-medium margin-bottom-large"
          variants={childVariants}
        >
          <h2 className="margin-bottom-small">Über</h2>
          <p className={`${styles.summary} color-quaternary`}>
            {basics.summary}
          </p>
        </motion.section>

        <motion.section
          className="padding-top-medium padding-bottom-medium margin-bottom-large"
          variants={childVariants}
        >
          <h2 className="margin-bottom-small">Berufserfahrung</h2>
          {work.map((item, index) => (
            <div key={index} className={styles["grid-large"]}>
              <p className="color-tertiary margin-bottom-extra-small">
                {formatDate(item.startDate, item.endDate, item.ongoing)}
              </p>
              <p className="color-secondary margin-bottom-extra-small">
                {`${item.position} ${item.preposition || "bei"} ${item.name}`}
              </p>
            </div>
          ))}
        </motion.section>

        <motion.section
          className="padding-top-medium padding-bottom-medium margin-bottom-large"
          variants={childVariants}
        >
          <h2 className="margin-bottom-small">Ausbildung</h2>
          {education.map((item, index) => (
            <div key={index} className={styles["grid-large"]}>
              <p className="color-tertiary margin-bottom-extra-small">
                {formatDate(item.startDate, item.endDate, item.ongoing)}
              </p>
              <p className="color-secondary margin-bottom-extra-small">
                {`${item.area} ${item.preposition || "am"} ${item.institution}`}
              </p>
            </div>
          ))}
        </motion.section>

        <motion.section
          className="padding-top-medium padding-bottom-medium margin-bottom-large"
          variants={childVariants}
        >
          <h2 className="margin-bottom-small">Kontakt</h2>
          {profiles.map((profile, index) => (
            <div key={index} className={styles["grid-medium"]}>
              <p className="color-tertiary margin-bottom-extra-small">
                {profile.network}
              </p>
              <p className="color-secondary margin-bottom-extra-small">
                <a
                  className="underline no-underline-hover"
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {profile.username}
                </a>
                <span>
                  {" "}
                  <svg viewBox="-10 0 1598 2048" className={styles.svg}>
                    <path
                      fill="currentColor"
                      d="M1338 1442h-166v-298q0 -54 3 -116.5t8 -126.5t11 -123.5t13 -107.5l11 42q-23 35 -47.5 70t-50.5 67t-56 62l-725 726l-118 -118l726 -725q30 -30 62.5 -56t67 -50.5t69.5 -47.5l42 11q-64 9 -147 17t-169 13t-158 5h-298v-166h922v922z"
                    />
                  </svg>
                </span>
              </p>
            </div>
          ))}
        </motion.section>
      </motion.div>
    </main>
  );
}
