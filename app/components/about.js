/* eslint-disable @next/next/no-img-element */

import styles from "../styles/about.module.css";

export default function About({ about }) {
  return (
    <section className={`${styles["about-wrapper"]} margin-top-large`}>
      <div className="padding-bottom-medium">
        <img
          className={styles["about-portrait"]}
          src={about.portrait?.asset?.url}
          alt={`Portrait von ${about.name}`}
          draggable="false"
        />
      </div>
      <div className={styles["about-details"]}>
        <h1 className="color-text-primary padding-bottom-small">
          {about.name}
        </h1>
        <p className="color-text-tertiary">{about.description}</p>
      </div>
    </section>
  );
}
