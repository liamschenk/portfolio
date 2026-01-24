import { useState } from "react";
import Slideshow from "../components/slideshow";
import { motion } from "framer-motion";

import { parentVariants, childVariants } from "../utilities/variants";

import styles from "../styles/index.module.css";

const getOpacity = (index, openAccordion, hoveredIndex) => {
  if (openAccordion === null) {
    return hoveredIndex === null || hoveredIndex === index ? 1 : 0.5;
  }
  return openAccordion === index || hoveredIndex === index ? 1 : 0.5;
};

export default function Index({ projects }) {
  const [openAccordion, setOpenAccordion] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <main>
      <motion.div initial="hidden" animate="visible" variants={parentVariants}>
        {projects.map((project, index) => (
          <motion.section
            key={index}
            variants={childVariants}
            animate={{
              opacity: getOpacity(index, openAccordion, hoveredIndex),
            }}
            transition={{ duration: 0.375, ease: "easeInOut" }}
          >
            <button
              className={`${
                styles.button
              } padding-top-medium padding-bottom-medium border-top  ${
                index === 0 ? "border-none" : ""
              }`}
              onClick={() => toggleAccordion(index)}
              type="button"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <p className="color-quaternary text-align-left">{`0${
                index + 1
              }`}</p>
              <p className="color-secondary text-align-left">{project.name}</p>
              <p className="color-tertiary text-align-right">
                {project.date
                  ? new Intl.DateTimeFormat("de-DE", {
                      year: "numeric",
                    }).format(new Date(project.date))
                  : "Unbekannt"}
              </p>
            </button>

            <motion.div
              className={styles.content}
              initial={{ height: 0 }}
              animate={{ height: openAccordion === index ? "auto" : 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              <div className={styles.description}>
                <p className="color-quaternary margin-bottom-large">
                  {project.description}
                </p>
              </div>

              {project.media?.length > 0 && (
                <Slideshow
                  media={project.media}
                  className="margin-bottom-medium"
                />
              )}
            </motion.div>
          </motion.section>
        ))}
      </motion.div>
    </main>
  );
}
