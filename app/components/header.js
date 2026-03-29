import { useCallback } from "react";

import styles from "../styles/header.module.css";

export default function Header({ setView, activeView }) {
  const handleViewChange = useCallback(
    (view) => {
      if (activeView !== view) setView(view);
    },
    [activeView, setView],
  );

  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li className="text-align-left">
            <a
              className={`color-secondary ${activeView === "index" ? "underline" : "no-underline underline-hover"}`}
              role="button"
              onClick={() => handleViewChange("index")}
            >
              Index
            </a>
          </li>
          <li className="text-align-center">
            <a
              className="color-secondary no-underline underline-hover"
              role="button"
              onClick={() => handleViewChange("index")}
            >
              Liam Schenk
            </a>
          </li>
          <li className="text-align-right">
            <a
              className={`color-secondary ${activeView === "about" ? "underline" : "no-underline underline-hover"}`}
              role="button"
              onClick={() => handleViewChange("about")}
            >
              Über
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
