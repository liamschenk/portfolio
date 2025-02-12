import { useCallback } from "react";
import styles from "../styles/header.module.css";

export default function Header({ setView, activeView }) {
  const handleViewChange = useCallback(
    (view) => {
      if (activeView !== view) setView(view);
    },
    [activeView, setView]
  );

  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <a onClick={() => handleViewChange("index")} role="button">
              Liam Schenk
            </a>
          </li>
          <li>
            <a
              onClick={() => handleViewChange("index")}
              role="button"
              tabIndex={1}
              className={activeView === "index" ? styles.active : ""}
            >
              Index
            </a>
          </li>
          <li>
            <a
              onClick={() => handleViewChange("about")}
              role="button"
              tabIndex={2}
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
