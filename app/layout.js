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
          href="https://www.storklinkers.com/"
          hrefLang="en-us"
        />
        {/* Organization Logo Schema */}
        {/* Favicon / Logo */}
        <link rel="icon" href="/BrandName.svg" type="image/svg+xml" />

        {/* Open Graph for social + Google */}
        <meta property="og:site_name" content="Storklinkers" />
        <meta
          property="og:title"
          content="Storklinkers - Your Trusted Ecommerce Store"
        />
        <meta
          property="og:description"
          content="Shop with confidence at Storklinkers. Quality products, secure checkout, and fast delivery."
        />
        <meta property="og:url" content="https://www.storklinkers.com/" />
        <meta
          property="og:image"
          content="https://www.storklinkers.com/BrandName.svg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Storklinkers - Your Trusted Ecommerce Store"
        />
        <meta
          name="twitter:description"
          content="Shop with confidence at Storklinkers."
        />
        <meta
          name="twitter:image"
          content="https://www.storklinkers.com/BrandName.svg"
        />

        {/* Schema.org Organization Logo */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Storklinkers",
              url: "https://www.storklinkers.com/",
              logo: "https://www.storklinkers.com/BrandName.svg",
            }),
          }}
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
