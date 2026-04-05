"use client";

import { useState } from "react";
import { motion } from "framer-motion";

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
  const [animationDone, setAnimationDone] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const toggleAccordion = (index, event) => {
    if (event.nativeEvent.pointerType === "touch") {
      setHoveredIndex(null);
    }
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <main>
      <motion.div
        animate="visible"
        initial="hidden"
        variants={parentVariants}
        onAnimationComplete={() => setAnimationDone(true)}
      >
        {projects.map((project, index) => (
          <motion.div
            animate={{
              opacity: getOpacity(index, openIndex, hoveredIndex),
            }}
            variants={childVariants}
            transition={{
              opacity: { duration: 0.375, ease: "easeInOut" },
            }}
            key={project._id}
          >
            <button
              className={`${
                styles.grid
              } padding-top-medium padding-bottom-medium ${index !== 0 && "border-top"}`}
              type="button"
              onClick={(event) =>
                animationDone && toggleAccordion(index, event)
              }
              onMouseEnter={() => animationDone && setHoveredIndex(index)}
              onMouseLeave={() => animationDone && setHoveredIndex(null)}
              aria-expanded={openIndex === index}
              aria-controls={`project-content-${project._id}`}
            >
              <p className="color-quaternary text-align-left">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="color-secondary text-align-left">{project.title}</p>
              <p className="color-tertiary text-align-right">
                {project.date
                  ? new Date(project.date).getUTCFullYear()
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
              role="region"
              aria-labelledby={`project-button-${project._id}`}
            >
              <div className={`${styles.description} margin-bottom-large`}>
                <p className="color-quaternary">{project.description}</p>
              </div>

              {project.media.length > 0 && (
                <Slideshow
                  className="margin-bottom-large"
                  title={project.title}
                  media={project.media}
                />
              )}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}
