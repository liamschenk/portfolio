import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Liam Schenk",
  description:
    "Ich bin gelernter Mediamatiker EFZ  und arbeite aktuell beim Schweizerischen Turnverband. Ich arbeite strukturiert, teamorientiert und lerne gerne Neues.",
  keywords:
    "Portfolio, Mediamatiker, Webdesign, Grafikdesign, Multimedia, Swisscom, Schweiz, Liam Schenk, digitale Medien, Ausbildung Mediamatiker",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
