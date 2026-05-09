"use client";

import styles from "../styles/header.module.css";

export default function Header({ route, setRoute }) {
  return (
    <header className={`${styles.navigation} margin-bottom-extra-large`}>
      <nav>
        <ul>
          <li>
            <a
              className={`color-secondary ${route === "index" ? "underline" : "no-underline underline-hover"}`}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setRoute("index");
              }}
              aria-current={route === "index" ? "page" : undefined}
            >
              Index
            </a>
          </li>

          <li>
            <a
              className="color-secondary no-underline underline-hover"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setRoute("index");
              }}
            >
              Liam Schenk
            </a>
          </li>

          <li>
            <a
              className={`color-secondary ${route === "about" ? "underline" : "no-underline underline-hover"}`}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setRoute("about");
              }}
              aria-current={route === "about" ? "page" : undefined}
            >
              Über
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
