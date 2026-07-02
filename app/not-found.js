import styles from "./styles/error.module.css";

export default function NotFound({}) {
  return (
    <main>
      <div className={styles["error-container"]}>
        <div className={styles["error-grid"]}>
          <h2 className="color-secondary margin-bottom-small">404</h2>
          <p className="color-quaternary">Seite nicht gefunden.</p>
        </div>
      </div>
    </main>
  );
}
