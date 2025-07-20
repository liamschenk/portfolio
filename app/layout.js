import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Liam Schenk — Portfolio",
  description:
    "Portfolio von Liam Schenk, gelerntem Mediamatiker EFZ mit Abschluss bei Swisscom.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="keywords"
          content="Portfolio, Mediamatiker, Webdesign, Grafikdesign, Multimedia, Swisscom, Schweiz, Liam Schenk, digitale Medien, Ausbildung Mediamatiker"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
