import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Liam Schenk — Portfolio",
  description:
    "Portfolio von Liam Schenk, lernender Mediamatiker bei Swisscom — mit Leidenschaft für Grafikdesign und Multimedia.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
