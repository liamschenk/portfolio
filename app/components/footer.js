"use client";

import styles from "../styles/footer.module.css";

export default function Footer({ about }) {
  const { bio, profile } = about;

  return (
    <section
      className={`${styles["footer-wrapper"]} padding-right-large padding-left-large border-top`}
    >
      <div className="padding-top-medium padding-right-large padding-bottom-medium border-right">
        <p className="color-secondary">2026</p>
      </div>
      <div className="padding-top-medium padding-bottom-medium padding-left-large border-left">
        <p className="color-tertiary">
          <a
            className="hover"
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${bio.name} auf ${profile.network} kontaktieren`}
          >
            {profile.username}
          </a>
        </p>
      </div>
    </section>
  );
}
