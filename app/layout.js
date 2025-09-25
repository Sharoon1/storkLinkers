import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Poppins, Open_Sans } from "next/font/google";
import Footer from "./(components)/footer";
import Header from "./(components)/header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-poppins",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-open-sans",
});

export const metadata = {
  title: "Stork Linkers | Smart Home Solutions & Practical Living Tips",
  description:
    "Discover smart home solutions, artificial grass ideas, and storage tips with Stork Linkers. Affordable, stylish, and practical upgrades for modern living.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${openSans.variable}`}>
      <head>
        {/* Hreflang for USA */}
        <link
          rel="alternate"
          href="https://storklinkers.com/"
          hreflang="en-us"
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
