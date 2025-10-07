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
          <li className="text-align-left">
            <a
              className="color-secondary no-underline underline-hover"
              onClick={() => handleViewChange("index")}
              role="button"
            >
              Liam Schenk
            </a>
          </li>
          <li className="text-align-center">
            <a
              className={`color-secondary no-underline underline-hover ${
                activeView === "index" ? styles.active : ""
              }`}
              onClick={() => handleViewChange("index")}
              role="button"
              tabIndex={0}
            >
              Index
            </a>
          </li>
          <li className="text-align-right">
            <a
              className={`color-secondary no-underline underline-hover ${
                activeView === "about" ? styles.active : ""
              }`}
              onClick={() => handleViewChange("about")}
              role="button"
              tabIndex={0}
            >
              Über
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
