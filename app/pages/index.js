"use client";

import { useState } from "react";
import * as m from "motion/react-m";

import Carousel from "../components/carousel";

import { parentVariants, childVariants } from "../utilities/variants";
import { hoveredOpacity } from "../utilities/accordion";
import { formatYear } from "../utilities/dates";

import styles from "../styles/index.module.css";

export default function Index({ projects }) {
  const [animationDone, setAnimationDone] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <main>
      <m.div
        animate="visible"
        initial="hidden"
        variants={parentVariants}
        onAnimationComplete={() => setAnimationDone(true)}
      >
        {projects.map((project, index) => (
          <m.div
            animate={{
              opacity: hoveredOpacity(index, openIndex, hoveredIndex),
            }}
            variants={childVariants}
            transition={{
              opacity: { duration: 0.375, ease: "easeInOut" },
            }}
            key={project._id}
          >
            <button
              className={`${styles["project-grid"]} padding-top-medium padding-bottom-medium`}
              id={`project-button-${project._id}`}
              type="button"
              onClick={() => {
                if (animationDone) toggleAccordion(index);
              }}
              onMouseEnter={() => {
                if (animationDone) setHoveredIndex(index);
              }}
              onMouseLeave={() => {
                if (animationDone) setHoveredIndex(null);
              }}
              aria-expanded={openIndex === index}
              aria-controls={`project-content-${project._id}`}
            >
              <p className="color-quaternary text-align-left">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="color-secondary text-align-left">{project.title}</p>
              <hr className={styles["project-spacer"]} />
              <p className="color-tertiary text-align-right">
                {formatYear(project.date)}
              </p>
            </button>

            <m.div
              className={styles["project-content"]}
              id={`project-content-${project._id}`}
              animate={{
                height: openIndex === index ? "auto" : 0,
                opacity: openIndex === index ? 1 : 0,
              }}
              initial={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              role="region"
              aria-labelledby={`project-button-${project._id}`}
            >
              <div
                className={`${styles["description-grid"]} margin-bottom-large`}
              >
                <p
                  className={`${styles["project-description"]} color-quaternary`}
                >
                  {project.description}
                </p>
              </div>

              {project.media.length > 0 && (
                <Carousel title={project.title} media={project.media} />
              )}
            </m.div>
          </m.div>
        ))}
      </m.div>
    </main>
  );
}
