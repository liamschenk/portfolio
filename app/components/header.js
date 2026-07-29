/* eslint-disable @next/next/no-img-element */

"use client";

import styles from "../styles/header.module.css";

export default function Header({ about }) {
  const { bio } = about;

  return (
    <section
      className={`${styles["header-wrapper"]} padding-top-medium padding-right-large padding-bottom-medium padding-left-large border-bottom`}
    >
      <div>
        <img
          className={`${styles["header-media"]} border-full`}
          src={bio.picture.asset.url}
          alt={`Portrait von ${bio.name}`}
          draggable="false"
        />
      </div>
      <div>
        <p className="color-secondary">{bio.name}</p>
        <p className="color-tertiary">{bio.position}</p>
      </div>
    </section>
  );
}
