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
            <a onClick={() => handleViewChange("index")}>Liam Schenk</a>
          </li>
          <li>
            <a
              onClick={() => handleViewChange("index")}
              className={activeView === "index" ? styles.active : ""}
            >
              Index
            </a>
          </li>
          <li>
            <a
              onClick={() => handleViewChange("about")}
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
