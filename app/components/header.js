"use client";

export default function Header({ setView, activeView }) {
  return (
    <header className="margin-bottom-extra-large">
      <nav>
        <ul>
          <li className="text-align-left">
            <button
              onClick={() => setView("index")}
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
            <button onClick={() => setView("index")}>
              <p className="color-secondary no-underline underline-hover">
                Liam Schenk
              </p>
            </button>
          </li>

          <li className="text-align-right">
            <button
              onClick={() => setView("about")}
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
