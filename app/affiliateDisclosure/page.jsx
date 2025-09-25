import Head from "next/head";
import React from "react";

function AffilateDisclosure() {
  return (
    <>
      <Head>
        <title>Affiliate Disclosure | Stork Linkers</title>
        <meta
          name="description"
          content="Stork Linkers participates in affiliate programs. Learn how this disclosure explains our partnerships, commissions, and transparency."
        />
        <link
          rel="canonical"
          href="https://storklinkers.com/affiliateDisclosure"
        />
        <meta name="robots" content="noindex, follow" />
      </Head>
      <div className="bg-gray-50 text-gray-800 font-sans">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Affiliate Disclosure
          </h1>

          <p className="mb-4">
            This website may contain affiliate links. If you click on one of
            these links and make a purchase, I may earn a small commission — at
            no extra cost to you.
          </p>

          <p className="mb-4">
            I only recommend products or services that I personally believe in
            and find valuable for my audience. These commissions help support
            this website and allow me to keep providing helpful content for
            free.
          </p>

          <p className="mb-4">
            Transparency is important to me. That’s why I clearly disclose
            whenever a post or page contains affiliate links.
          </p>

          <p className="mb-4">
            If you have any questions or concerns, feel free to{" "}
            <a href="/contact" className="text-blue-600 hover:underline">
              contact me
            </a>
          </p>

          <p className="mt-8">Thank you for your support!</p>
        </div>
      </div>
    </>
  );
}

export default AffilateDisclosure;
