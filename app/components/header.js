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
              tabIndex={0}
              className={activeView === "index" ? styles.active : ""}
            >
              Index
            </a>
          </li>
          <li>
            <a
              onClick={() => handleViewChange("about")}
              role="button"
              tabIndex={0}
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
