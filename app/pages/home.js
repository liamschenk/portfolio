/* eslint-disable @next/next/no-img-element */

"use client";

import { useState } from "react";
import * as m from "motion/react-m";

import Carousel from "../components/carousel";

import styles from "../styles/home.module.css";

export default function Home({ projects, about }) {
  const { bio, listening } = about;

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  function formatYear(dateStr) {
    if (!dateStr) return "Unbekannt";
    return new Date(dateStr).getUTCFullYear();
  }

  return (
    <>
      <main className={styles["page-wrapper"]}>
        <section
          className={`${styles["listening-wrapper"]} padding-right-large padding-left-large border-bottom`}
        >
          <div className="padding-top-medium padding-right-large padding-bottom-medium border-right">
            <p className="color-secondary">Läuft gerade</p>
          </div>
          <div
            className={`${styles["listening-carousel"]} padding-top-medium padding-bottom-medium padding-left-large`}
          >
            <div className={styles["listening-track"]}>
              {[0, 1].map((groupIndex) => (
                <div className={styles["listening-group"]} key={groupIndex}>
                  {[0, 1, 2].map((setIndex) => (
                    <div
                      className={styles["listening-slide"]}
                      key={`${groupIndex}-${setIndex}`}
                    >
                      <img
                        className={`${styles["listening-media"]} border-full`}
                        src={listening.media.asset.url}
                        alt={`${listening.title} von ${listening.artist}`}
                        draggable="false"
                      />
                      <p className="color-secondary">{listening.title}</p>
                      <p className="color-tertiary">{listening.artist}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className={`${styles["bio-wrapper"]} margin-top-extra-large margin-bottom-extra-large padding-top-medium padding-right-large padding-bottom-medium padding-left-large`}
        >
          <p className="color-quaternary">{bio.description}</p>
        </section>

        <section className={`${styles["projects-wrapper"]} margin-bottom-extra-large`}>
          {projects.map((project, index) => (
            <div className={styles["accordion-wrapper"]} key={project._id}>
              <button
                className={`${styles["accordion-button"]} padding-top-medium padding-right-large padding-bottom-medium padding-left-large border-top border-bottom`}
                id={`accordion-button-${project._id}`}
                type="button"
                onClick={() => toggleAccordion(index)}
                aria-expanded={openIndex === index}
                aria-controls={`accordion-content-${project._id}`}
              >
                <p className="color-secondary">{project.title}</p>
                <p className="color-tertiary">{formatYear(project.date)}</p>
              </button>

              <m.div
                className="border-bottom"
                id={`accordion-content-${project._id}`}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                initial={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                style={{ overflow: "hidden" }}
                role="region"
                aria-labelledby={`accordion-button-${project._id}`}
              >
                <div className="padding-top-medium padding-right-large padding-bottom-medium padding-left-large">
                  <p className="color-quaternary">{project.description}</p>
                </div>

                {project.media.length > 0 && (
                  <Carousel title={project.title} media={project.media} />
                )}
              </m.div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
