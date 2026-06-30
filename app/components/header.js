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
              className="color-secondary"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setRoute("index");
              }}
              aria-label="Index"
            >
              <svg
                className={styles["header-icon"]}
                viewBox="0 0 512 512"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M279.847 106.925L412.628 327.013C418.157 336.211 418.388 347.603 413.024 357.015C407.661 366.428 397.626 372.4 386.667 372.4H121.103C110.144 372.4 100.109 366.428 94.746 357.015C89.382 347.603 89.613 336.211 95.142 327.013L227.923 106.925C233.399 97.823 243.272 92.4 253.885 92.4C264.498 92.4 274.371 97.823 279.847 106.925Z"
                />
              </svg>
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
