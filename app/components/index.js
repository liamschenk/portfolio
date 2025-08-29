import { motion } from "framer-motion";

import { parentVariants, childVariants } from "../utilities/variants";

import styles from "../styles/index.module.css";

function Arrow({ className }) {
  return (
    <svg viewBox="-10 0 1598 2048" className={className}>
      <path
        fill="currentColor"
        d="M1338 1442h-166v-298q0 -54 3 -116.5t8 -126.5t11 -123.5t13 -107.5l11 42q-23 35 -47.5 70t-50.5 67t-56 62l-725 726l-118 -118l726 -725q30 -30 62.5 -56t67 -50.5t69.5 -47.5l42 11q-64 9 -147 17t-169 13t-158 5h-298v-166h922v922z"
      />
    </svg>
  );
}

export default function Index() {
  return (
    <main>
      <motion.section
        initial="hidden"
        animate="visible"
        variants={parentVariants}
      >
        <motion.h1 variants={childVariants}>Hallo, ich bin Liam</motion.h1>
        <motion.p variants={childVariants}>
          Ich bin gelernter Mediamatiker EFZ mit Abschluss bei Swisscom. Aktuell
          arbeite ich beim{" "}
          <a
            href="https://www.stv-fsg.ch"
            target="_blank"
            rel="noopener noreferrer"
          >
            Schweizerischen Turnverband
          </a>{" "}
          als Mediamatiker. Mein Fokus liegt vor allem auf Grafikdesign. Ich
          arbeite strukturiert, teamorientiert und lerne gerne Neues.
        </motion.p>

        <motion.div className={styles.buttons} variants={childVariants}>
          <button
            onClick={() =>
              (window.location.href = "mailto:liam.schenk@bluewin.ch")
            }
          >
            E-Mail <Arrow className={styles.arrow} />
          </button>

          <button
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/liamschenk",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            LinkedIn <Arrow className={styles.arrow} />
          </button>

          <button
            onClick={() =>
              window.open(
                "https://github.com/liamschenk/portfolio",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            GitHub <Arrow className={styles.arrow} />
          </button>
        </motion.div>
      </motion.section>
    </main>
  );
}
