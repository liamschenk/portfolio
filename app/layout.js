import { Inter } from "next/font/google";
import { LazyMotion, domAnimation } from "motion/react";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  metadataBase: new URL("https://www.liamschenk.ch"),
  title: "Liam Schenk",
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
  alternates: {
    canonical: "https://www.liamschenk.ch",
  },
  icons: {
    icon: [{ url: "/metadata/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/metadata/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Liam Schenk",
    description:
      "Portfolio von Liam Schenk, gelerntem Mediamatiker mit Abschluss bei Swisscom.",
    url: "https://www.liamschenk.ch",
    siteName: "Liam Schenk",
    images: [
      {
        url: "https://www.liamschenk.ch/metadata/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio von Liam Schenk, gelerntem Mediamatiker mit Abschluss bei Swisscom.",
      },
    ],
    locale: "de_CH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Liam Schenk",
    description:
      "Portfolio von Liam Schenk, gelerntem Mediamatiker mit Abschluss bei Swisscom.",
    images: ["https://www.liamschenk.ch/metadata/og-image.jpg"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ebebf0",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Liam Schenk",
  jobTitle: "Mediamatiker",
  email: "mailto:hallo@liamschenk.ch",
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
        <LazyMotion features={domAnimation}>{children}</LazyMotion>
      </body>
    </html>
  );
}
