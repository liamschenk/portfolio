"use client";

import styles from "./styles/error.module.css";

export default function Error({ error, reset }) {
  return (
    <main>
      <div className={styles["error-container"]}>
        <div className={styles["error-grid"]}>
          <h2 className="color-secondary margin-bottom-small">500</h2>
          <p className="color-quaternary">Interner Serverfehler.</p>
        </div>
      </div>
    </main>
  );
}
