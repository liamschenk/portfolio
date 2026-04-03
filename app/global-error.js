"use client";

import { Inter } from "next/font/google";

import "./globals.css";
import styles from "./styles/error.module.css";

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
});

export default function GlobalError({ error, reset }) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <main>
          <div className={styles["flex-container"]}>
            <div>
              <h2>Da hat etwas nicht geklappt.</h2>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
