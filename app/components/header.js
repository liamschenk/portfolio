"use client";

import Link from "next/link";

import styles from "../styles/header.module.css";

export default function Header({ route, setRoute }) {
  return (
    <header className={`${styles.navigation} margin-bottom-extra-large`}>
      <nav>
        <ul>
          <li>
            <Link
              className={`color-secondary ${route === "index" ? "underline" : "no-underline underline-hover"}`}
              href="/"
              onClick={() => setRoute("index")}
              aria-current={route === "index" ? "page" : undefined}
            >
              Index
            </Link>
          </li>

          <li>
            <Link
              className="color-secondary no-underline underline-hover"
              href="/"
              onClick={() => setRoute("index")}
            >
              Liam Schenk
            </Link>
          </li>

          <li>
            <Link
              className={`color-secondary ${route === "about" ? "underline" : "no-underline underline-hover"}`}
              href="/"
              onClick={() => setRoute("about")}
              aria-current={route === "about" ? "page" : undefined}
            >
              Über
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
