"use client";

import styles from "./styles/error.module.css";

export default function Error({ error, reset }) {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.grid}>
          <h2 className="margin-bottom-small">500</h2>
          <p className="color-quaternary">Interner Serverfehler.</p>
        </div>
      </div>
    </main>
  );
}
