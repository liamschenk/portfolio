import { motion } from "framer-motion";
import { useState } from "react";

import Slideshow from "../components/slideshow";

import { parentVariants, childVariants } from "../utilities/variants";

import styles from "../styles/index.module.css";

const getOpacity = (index, openIndex, hoveredIndex) => {
  if (openIndex === null) {
    return hoveredIndex === null || hoveredIndex === index ? 1 : 0.5;
  }
  return openIndex === index || hoveredIndex === index ? 1 : 0.5;
};

export default function Index({ projects }) {
  const [openIndex, setOpenIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <main>
      <motion.div animate="visible" initial="hidden" variants={parentVariants}>
        {projects.map((project, index) => (
          <motion.section
            animate={{
              opacity: getOpacity(index, openIndex, hoveredIndex),
            }}
            variants={childVariants}
            transition={{ duration: 0.375, ease: "easeInOut" }}
            key={project._id}
          >
            <button
              className={`${
                styles.button
              } ${index === 0 ? "border-none" : "border-top"} padding-top-medium padding-bottom-medium border-top`}
              type="button"
              onClick={() => toggleAccordion(index)}
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
              animate={{
                height: openIndex === index ? "auto" : 0,
                opacity: openIndex === index ? 1 : 0,
              }}
              initial={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              <div className={`${styles.description} margin-bottom-large`}>
                <p className="color-quaternary">{project.description}</p>
              </div>

              {project.media?.length > 0 && (
                <Slideshow
                  className="margin-bottom-large"
                  name={project.name}
                  media={project.media}
                />
              )}
            </motion.div>
          </motion.section>
        ))}
      </motion.div>
    </main>
  );
}
