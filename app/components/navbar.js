import styles from "../styles/navbar.module.css";

export default function Navbar({ setView, activeView }) {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <a onClick={() => setView("projects")}>Liam Schenk</a>
          </li>
          <li>
            <a
              onClick={() => setView("projects")}
              className={activeView === "projects" ? styles.active : ""}
            >
              Projekte
            </a>
          </li>
          <li>
            <a
              onClick={() => setView("about")}
              className={activeView === "about" ? styles.active : ""}
            >
              Über
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
