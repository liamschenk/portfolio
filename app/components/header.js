import styles from "../styles/header.module.css";

export default function Header({ setView, activeView }) {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <a onClick={() => setView("index")}>Liam Schenk</a>
          </li>
          <li>
            <a
              onClick={() => setView("index")}
              className={activeView === "index" ? styles.active : ""}
            >
              Index
            </a>
          </li>
          <li>
            <a
              onClick={() => setView("about")}
              className={activeView === "about" ? styles.active : ""}
            >
              About
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
