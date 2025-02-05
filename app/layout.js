import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Liam Schenk — Portfolio",
  description:
    "Portfolio of Liam Schenk, a Mediamatics apprentice at Swisscom.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        <meta
          name="keywords"
          content="Portfolio, Mediamatiker, Mediamatics, Schweiz, Switzerland, Liam, Liam Schenk"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
