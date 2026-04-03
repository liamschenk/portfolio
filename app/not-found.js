import styles from "./styles/error.module.css";

export default function NotFound({ error, reset }) {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.grid}>
          <h2 className="margin-bottom-small">404</h2>
          <p className="color-quaternary">Seite nicht gefunden.</p>
        </div>
      </div>
    </main>
  );
}
