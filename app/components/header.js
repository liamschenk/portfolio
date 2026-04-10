"use client";

export default function Header({ route, setRoute }) {
  return (
    <header className="margin-bottom-extra-large">
      <nav>
        <ul>
          <li className="text-align-left">
            <button
              onClick={() => setRoute("index")}
              aria-current={route === "index" ? "page" : undefined}
            >
              <span
                className={`color-secondary ${route === "index" ? "underline" : "no-underline underline-hover"}`}
              >
                Index
              </span>
            </button>
          </li>

          <li className="text-align-center">
            <button
              onClick={() => setRoute("index")}
              aria-current={route === "index" ? "page" : undefined}
            >
              <span className="color-secondary no-underline underline-hover">
                Liam Schenk
              </span>
            </button>
          </li>

          <li className="text-align-right">
            <button
              onClick={() => setRoute("about")}
              aria-current={route === "about" ? "page" : undefined}
            >
              <span
                className={`color-secondary ${route === "about" ? "underline" : "no-underline underline-hover"}`}
              >
                Über
              </span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
