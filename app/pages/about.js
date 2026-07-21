"use client";

import * as m from "motion/react-m";

import { parentVariants, childVariants } from "../utilities/variants";
import { formatYearRange } from "../utilities/dates";

import styles from "../styles/about.module.css";

export default function About({ bio, work, education, profiles }) {
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
          <p className={`${styles["bio-description"]} color-quaternary`}>
            {bio.description}
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
              className={styles["work-grid"]}
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
              className={styles["education-grid"]}
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
          {profiles.map((profile) => {
            const isExternal = !profile.link.startsWith("mailto:");

            return (
              <div
                className={styles["contact-grid"]}
                key={profile._id}
              >
                <p className="color-tertiary">{profile.network}</p>
                <p className="color-secondary">
                  <a
                    className={`${styles["contact-link"]} underline no-underline-hover`}
                    href={profile.link}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    aria-label={
                      isExternal
                        ? `${profile.username} auf ${profile.network} (Öffnet in neuem Tab)`
                        : `${profile.username} per E-Mail kontaktieren`
                    }
                  >
                    {profile.username}
                  </a>
                  <svg
                    className={styles["contact-icon"]}
                    viewBox="-10 0 1598 2048"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M1338 1442h-166v-298q0 -54 3 -116.5t8 -126.5t11 -123.5t13 -107.5l11 42q-23 35 -47.5 70t-50.5 67t-56 62l-725 726l-118 -118l726 -725q30 -30 62.5 -56t67 -50.5t69.5 -47.5l42 11q-64 9 -147 17t-169 13t-158 5h-298v-166h922v922z"
                    />
                  </svg>
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
            className={`${styles["status-container"]} ${styles[bio.status]}`}
          >
            <span className={styles["status-circle"]} aria-hidden="true"></span>
            <p className={styles["status-label"]}>
              {statusLabel[bio.status]}
            </p>
          </div>
        </m.div>
      </m.div>
    </main>
  );
}
