import React from "react";

function About() {
  return (
    <div className="py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8 sm:p-10 text-center sm:text-left">
        <h1 className="text-4xl sm:text-5xl font-bold  border-l-8 border-black pl-4 mb-6">
          About Stork Linkers
        </h1>
        <h2 className="text-2xl">
          At Stork Linkers, we bring smart home solutions.
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 mb-6">
          <strong> Our mission is simple:</strong> help you elevate your
          everyday living through budget-friendly, practical tips and
          expert-backed insights. Whether you are enhancing your home’s comfort,
          organizing your space, or exploring décor inspiration, we provide
          content that’s clear, actionable, and genuinely useful.
        </p>
        <p className="text-lg sm:text-xl text-gray-700 mb-6">
          We share practical tips on artificial grass, home improvement, storage
          solutions, lifestyle upgrades, and reliable services. Everything we
          share is designed to make your life easier, better, and more stylish
          without the stress or the splurge.
        </p>
        <h3>Why Stork Linkers?</h3>
        <p className="text-lg sm:text-xl text-gray-700 mb-6">
          Because we believe great living starts with great information. That’s
          why we stay current, constantly update our content, and bring you
          fresh ideas that matter.
        </p>
        <p className="italic text-gray-800 font-medium border-l-4 border-blue-900 pl-4">
          Stay connected. Stay inspired. Stay linked — with{""}{" "}
          <strong>Stork Linkers</strong>.
        </p>
      </div>
    </div>
  );
}

export default About;
