import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  metadataBase: new URL("https://www.liamschenk.ch"),
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
  alternates: {
    canonical: "https://www.liamschenk.ch",
  },
  icons: {
    icon: [
      { url: "/metadata/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/metadata/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Liam Schenk – Portfolio",
    description:
      "Portfolio von Liam Schenk, gelerntem Mediamatiker mit Abschluss bei Swisscom.",
    url: "https://www.liamschenk.ch",
    siteName: "Liam Schenk – Portfolio",
    images: [
      {
        url: "https://www.liamschenk.ch/metadata/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Liam Schenk Portfolio – Startseite",
      },
    ],
    locale: "de_CH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Liam Schenk – Portfolio",
    description:
      "Portfolio von Liam Schenk, gelerntem Mediamatiker mit Abschluss bei Swisscom.",
    images: ["https://www.liamschenk.ch/metadata/og-image.webp"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
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
