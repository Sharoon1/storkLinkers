import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FacebookPixel from "./(components)/facebookPixels";
import { Poppins, Open_Sans } from "next/font/google";
import Footer from "./(components)/footer";
import Header from "./(components)/header";
import Script from "next/script";

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
  title: "StorkLinkers | Smart Choices. Simplified Living.",
  description:
    "Tired of wasting time exploring endless options? At StorkLinkers, we test, compare, and review products so you can shop smarter and live better. Discover trusted home upgrades, clever tools, and practical ideas designed for modern living.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-US" className={`${poppins.variable} ${openSans.variable}`}>
      <head>
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-DSRTXMHBX6"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DSRTXMHBX6');
          `}
        </Script>

        {/* hreflang for USA */}
        <link
          rel="alternate"
          href="https://www.storklinkers.com/"
          hrefLang="en-us"
        />

        {/* Geo Targeting for USA */}
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="geo.position" content="37.0902;-95.7129" />
        <meta name="ICBM" content="37.0902, -95.7129" />
        <meta name="language" content="English" />
        <meta name="distribution" content="global" />

        {/* Favicon / Logo */}
        <link rel="icon" href="/BrandName.svg" type="image/svg+xml" />

        {/* Open Graph for social + Google */}
        <meta property="og:site_name" content="Stork Linkers" />
        <meta
          property="og:title"
          content="Stork Linkers | Smart Home Solutions & Practical Living Tips"
        />
        <meta
          property="og:description"
          content="Discover smart home solutions, artificial grass ideas, and storage tips with Stork Linkers. Affordable, stylish, and practical upgrades for modern living."
        />
        <meta property="og:url" content="https://www.storklinkers.com/" />
        <meta
          property="og:image"
          content="https://www.storklinkers.com/BrandName.svg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Stork Linkers | Smart Home Solutions & Practical Living Tips"
        />
        <meta
          name="twitter:description"
          content="Discover affordable, stylish smart home and lifestyle solutions at Stork Linkers."
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
              name: "Stork Linkers",
              url: "https://www.storklinkers.com/",
              logo: "https://www.storklinkers.com/BrandName.svg",
              sameAs: [
                "https://www.facebook.com/StorkLinkers",
                "https://www.instagram.com/StorkLinkers",
                "https://www.linkedin.com/company/storklinkers",
              ],
            }),
          }}
        />
      </head>

      <body>
        {/* 2. PLACE THE PIXEL COMPONENT HERE, right after <body> */}
        <FacebookPixel />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
