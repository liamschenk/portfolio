"use client";

import * as m from "motion/react-m";

import { parentVariants, childVariants } from "../utilities/variants";
import { formatYearRange } from "../utilities/dates";

import styles from "../styles/about.module.css";

export default function About({ basics, work, education, profiles }) {
  const statusLabel = {
    available: "Verfügbar für Anfragen",
    partial: "Teilweise verfügbar",
    unavailable: "Nicht verfügbar",
  };

  return (
    <main>
      <m.div animate="visible" initial="hidden" variants={parentVariants}>
        <m.div
          className="margin-bottom-large padding-top-medium padding-bottom-medium"
          variants={childVariants}
        >
          <h2 className="color-secondary margin-bottom-small">Über</h2>
          <p className={`${styles["basics-description"]} color-quaternary`}>
            {basics.description}
          </p>
        </m.div>

        <m.div
          className="margin-bottom-large padding-top-medium padding-bottom-medium"
          variants={childVariants}
        >
          <h2 className="color-secondary margin-bottom-small">
            Berufserfahrung
          </h2>
          {work.map((item) => (
            <div
              className={`${styles["experience-grid"]} margin-bottom-extra-small`}
              key={item._id}
            >
              <p className="color-tertiary">
                {formatYearRange(item.startDate, item.endDate, item.ongoing)}
              </p>
              <p className="color-secondary">
                {`${item.position} ${item.preposition || "bei"} ${item.firm}`}
              </p>
            </div>
          ))}
        </m.div>

        <m.div
          className="margin-bottom-large padding-top-medium padding-bottom-medium"
          variants={childVariants}
        >
          <h2 className="color-secondary margin-bottom-small">Ausbildung</h2>
          {education.map((item) => (
            <div
              className={`${styles["experience-grid"]} margin-bottom-extra-small`}
              key={item._id}
            >
              <p className="color-tertiary">
                {formatYearRange(item.startDate, item.endDate, item.ongoing)}
              </p>
              <p className="color-secondary">
                {`${item.degree} ${item.preposition || "am"} ${item.institution}`}
              </p>
            </div>
          ))}
        </m.div>

        <m.div
          className="margin-bottom-large padding-top-medium padding-bottom-medium"
          variants={childVariants}
        >
          <h2 className="color-secondary margin-bottom-small">Kontakt</h2>
          {profiles.map((item) => {
            const isExternal = !item.link.startsWith("mailto:");

            return (
              <div
                className={`${styles["contact-grid"]} margin-bottom-extra-small`}
                key={item._id}
              >
                <p className="color-tertiary">{item.network}</p>
                <p className="color-secondary">
                  <a
                    className="underline no-underline-hover"
                    href={item.link}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    aria-label={
                      isExternal
                        ? `${item.username} auf ${item.network} (Öffnet in neuem Tab)`
                        : `${item.username} per E-Mail kontaktieren`
                    }
                  >
                    {item.username}
                  </a>
                  {isExternal && (
                    <svg
                      className={`${styles["external-icon"]} color-secondary`}
                      viewBox="-10 0 1598 2048"
                      aria-hidden="true"
                    >
                      <path
                        fill="currentColor"
                        d="M1338 1442h-166v-298q0 -54 3 -116.5t8 -126.5t11 -123.5t13 -107.5l11 42q-23 35 -47.5 70t-50.5 67t-56 62l-725 726l-118 -118l726 -725q30 -30 62.5 -56t67 -50.5t69.5 -47.5l42 11q-64 9 -147 17t-169 13t-158 5h-298v-166h922v922z"
                      />
                    </svg>
                  )}
                </p>
              </div>
            );
          })}
        </m.div>

        <m.div
          className="margin-bottom-large padding-top-medium padding-bottom-medium"
          variants={childVariants}
        >
          <h2 className="color-secondary margin-bottom-small">Aktuell</h2>
          <div
            className={`${styles["status-container"]} ${styles[basics.status]}`}
          >
            <span className={styles["status-circle"]} aria-hidden="true"></span>
            <p className={styles["status-label"]}>
              {statusLabel[basics.status]}
            </p>
          </div>
        </m.div>
      </m.div>
    </main>
  );
}
