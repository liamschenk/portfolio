"use client";

import { useCallback } from "react";

export default function Header({ setView, activeView }) {
  const handleViewChange = useCallback(
    (view) => {
      if (activeView !== view) setView(view);
    },
    [activeView, setView],
  );

  return (
    <header className="margin-bottom-extra-large">
      <nav>
        <ul>
          <li className="text-align-left">
            <button
              onClick={() => handleViewChange("index")}
              aria-current={activeView === "index" ? "page" : undefined}
            >
              <p
                className={`color-secondary ${activeView === "index" ? "underline" : "no-underline underline-hover"}`}
              >
                Index
              </p>
            </button>
          </li>

          <li className="text-align-center">
            <button onClick={() => handleViewChange("index")}>
              <p className="color-secondary no-underline underline-hover">
                Liam Schenk
              </p>
            </button>
          </li>

          <li className="text-align-right">
            <button
              onClick={() => handleViewChange("about")}
              aria-current={activeView === "about" ? "page" : undefined}
            >
              <p
                className={`color-secondary ${activeView === "about" ? "underline" : "no-underline underline-hover"}`}
              >
                Über
              </p>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
