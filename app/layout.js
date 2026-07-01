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

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Liam Schenk",
  jobTitle: "Mediamatiker",
  email: "mailto:hello@liamschenk.ch",
  url: "https://www.liamschenk.ch",
  alumniOf: {
    "@type": "Organization",
    name: "Schweizerischer Turnverband",
  },
  sameAs: [
    "https://github.com/liamschenk",
    "https://www.linkedin.com/in/liamschenk/",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
