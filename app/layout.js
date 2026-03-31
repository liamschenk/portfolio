import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Liam Schenk – Portfolio",
  description:
    "Portfolio von Liam Schenk, gelerntem Mediamatiker mit Abschluss bei Swisscom.",
  keywords: [
    "Portfolio",
    "Liam Schenk",
    "Mediamatiker",
    "Grafikdesign",
    "Webdesign",
    "Multimedia",
    "Schweizerischer Turnverband",
    "Swisscom",
    "Schweiz",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
