// artificialGrassforBalconiesPatios
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import React from "react";
const faqs = [
  {
    question: "Can I use an artificial grass rug on concrete or tiles?",
    answer:
      "Yes! Just ensure proper drainage or air flow underneath. Use adhesive or corner weights if needed.",
  },
  {
    question: "What’s the best way to clean a turf rug?",
    answer:
      "Hose it off weekly and brush it with a stiff broom. For pet mess, use a mild detergent or enzyme cleaner.",
  },
  {
    question: "How long does an outdoor artificial grass rug last?",
    answer:
      "With care, 5–8 years. Cheaper versions may last 2–3 years in harsh climates.",
  },
];

function BalconiesPatios() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 my-10">
      <div className="space-y-10">
        {/* 🌿 Title */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold 0 mb-2">
            🌿 Top 10 Artificial Grass Rugs for Balconies and Patios (2025
            Review)
          </h1>
        </div>

        {/* 📑 Table of Contents */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            📑 Table of Contents
          </h2>
          <ul className="space-y-2 list-disc list-inside text-green-800">
            <li>
              <a href="#why-rug" className="hover:underline">
                Why Choose an Artificial Grass Rug for Outdoor Spaces?
              </a>
            </li>
            <li>
              <a href="#comparison-table" className="hover:underline">
                Quick Comparison Table – Top 10 Picks
              </a>
            </li>
            <li>
              <a href="#top-products" className="hover:underline">
                Top 10 Artificial Grass Rugs for Balconies and Patios
              </a>
            </li>
            <li>
              <a href="#buyers-guide" className="hover:underline">
                How to Choose the Right Artificial Grass Rug (Buyer's Guide)
              </a>
            </li>
            <li>
              <a href="#pro-tips" className="hover:underline">
                Pro Tips for Outdoor Use
              </a>
            </li>
            <li>
              <a href="#faqs" className="hover:underline">
                FAQs – Artificial Grass Rug Outdoor
              </a>
            </li>
            <li>
              <a href="#final-recommendations" className="hover:underline">
                Final Recommendations
              </a>
            </li>
          </ul>
        </div>
        <div id="why-choose" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">
            ✅ Why Choose an Artificial Grass Rug for Outdoor Spaces?
          </h2>
          <p className="text-lg text-gray-800 mb-4">
            If you live in an urban or suburban area, maintaining a natural lawn
            isn’t always easy — water restrictions, intense heat, poor soil, or
            even limited space can make it nearly impossible.
          </p>
          <p className="text-lg text-gray-800 mb-4">
            That’s where artificial grass rugs for outdoor spaces come in.
          </p>
          <p className="text-lg text-gray-800 mb-2">
            Whether it’s a small balcony, patio, rooftop, or deck, these turf
            rugs:
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
            <li>Create a vibrant, clean, and natural look</li>
            <li>Are safe for pets and children</li>
            <li>Require no watering, mowing, or fertilizing</li>
            <li>Stay green and neat all year long</li>
          </ul>
        </div>

        <div
          id="comparison-table"
          className="overflow-x-auto rounded-xl shadow-md bg-white mt-12"
        >
          <h2 className="text-2xl font-bold text-green-700 px-5 py-4 border-b">
            🛒 Quick Comparison Table – Top 10 Artificial Grass Rugs
          </h2>
          <table className="min-w-full text-sm text-left text-gray-700 border-collapse">
            <thead className="bg-green-600 text-white uppercase text-xs tracking-wider">
              <tr>
                <th className="px-5 py-3">Product Name</th>
                <th className="px-5 py-3">Pile Height</th>
                <th className="px-5 py-3">Size Options</th>
                <th className="px-5 py-3">Drainage</th>
                <th className="px-5 py-3">Best For</th>
                <th className="px-5 py-3">Price Range</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-5 py-4 font-medium">
                  Goasis Lawn Artificial Grass Turf
                </td>
                <td className="px-5 py-4">1.38"</td>
                <td className="px-5 py-4">Custom sizes</td>
                <td className="px-5 py-4">Yes</td>
                <td className="px-5 py-4">Luxury balconies</td>
                <td className="px-5 py-4">$$</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-5 py-4 font-medium">
                  Petgrow Synthetic Grass Mat
                </td>
                <td className="px-5 py-4">1.37"</td>
                <td className="px-5 py-4">3'x5' to 13'x82'</td>
                <td className="px-5 py-4">Yes</td>
                <td className="px-5 py-4">Pets & kids</td>
                <td className="px-5 py-4">$$</td>
              </tr>
              <tr>
                <td className="px-5 py-4 font-medium">
                  LITA Premium Artificial Turf Rug
                </td>
                <td className="px-5 py-4">1.38"</td>
                <td className="px-5 py-4">2'x4' to 13'x82'</td>
                <td className="px-5 py-4">Yes</td>
                <td className="px-5 py-4">High-traffic patios</td>
                <td className="px-5 py-4">$$$</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-5 py-4 font-medium">
                  GOLDEN MOON Outdoor Grass Rug
                </td>
                <td className="px-5 py-4">1.5"</td>
                <td className="px-5 py-4">3'x5', 5'x8', tiles</td>
                <td className="px-5 py-4">Yes</td>
                <td className="px-5 py-4">Small balconies</td>
                <td className="px-5 py-4">$$</td>
              </tr>
              <tr>
                <td className="px-5 py-4 font-medium">SavvyGrow Grass Rug</td>
                <td className="px-5 py-4">1.2"</td>
                <td className="px-5 py-4">Multiple sizes</td>
                <td className="px-5 py-4">Yes</td>
                <td className="px-5 py-4">Budget buyers</td>
                <td className="px-5 py-4">$</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-5 py-4 font-medium">
                  Pet Adobe Artificial Grass Patch
                </td>
                <td className="px-5 py-4">1"</td>
                <td className="px-5 py-4">3'x5'</td>
                <td className="px-5 py-4">Yes</td>
                <td className="px-5 py-4">Apartments & pet zones</td>
                <td className="px-5 py-4">$</td>
              </tr>
              <tr>
                <td className="px-5 py-4 font-medium">
                  SunVilla Realistic Turf Mat
                </td>
                <td className="px-5 py-4">1.38"</td>
                <td className="px-5 py-4">4'x6', 5'x8', more</td>
                <td className="px-5 py-4">Yes</td>
                <td className="px-5 py-4">Soft feel & pets</td>
                <td className="px-5 py-4">$$</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-5 py-4 font-medium">
                  ZGR Heavy-Duty Turf Carpet
                </td>
                <td className="px-5 py-4">1.4"</td>
                <td className="px-5 py-4">Up to 13'x82'</td>
                <td className="px-5 py-4">Yes</td>
                <td className="px-5 py-4">Large patios</td>
                <td className="px-5 py-4">$$$</td>
              </tr>
              <tr>
                <td className="px-5 py-4 font-medium">
                  Fezep Synthetic Lawn Rug
                </td>
                <td className="px-5 py-4">1.18"</td>
                <td className="px-5 py-4">5'x8', 6'x10'</td>
                <td className="px-5 py-4">Yes</td>
                <td className="px-5 py-4">Mid-size patios</td>
                <td className="px-5 py-4">$$</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-5 py-4 font-medium">
                  iCustomRug Green Outdoor Turf
                </td>
                <td className="px-5 py-4">0.25"</td>
                <td className="px-5 py-4">Budget sizes</td>
                <td className="px-5 py-4">No</td>
                <td className="px-5 py-4">Temporary decor</td>
                <td className="px-5 py-4">$</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* 1. Goasis Lawn */}
        <div className="mb-6 p-4 border border-gray-200 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-green-700">
            🏆 1. Goasis Lawn Artificial Grass Turf Rug
          </h2>
          <p className="mt-1 text-gray-800">
            <strong>Best For:</strong> Luxe feel and softness
          </p>
          <p className="text-yellow-600 font-medium">
            Amazon Rating: ★★★★★ (4.7/5)
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
            <li>4-tone realistic color blend</li>
            <li>Fire- and UV-resistant</li>
            <li>Pet-friendly and non-toxic</li>
            <li>Available in large roll sizes</li>
          </ul>
          <p className="mt-2 italic text-sm text-gray-600">
            Pro Tip: Use landscape staples or turf tape to secure on tile or
            concrete.
          </p>
          <a href="#" className="inline-block mt-3 text-blue-600 underline">
            👉 🔗 View on Amazon
          </a>
        </div>

        {/* 2. Petgrow */}
        <div className="mb-6 p-4 border border-gray-200 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-green-700">
            🐾 2. Petgrow Synthetic Grass Mat
          </h2>
          <p className="mt-1 text-gray-800">
            <strong>Best For:</strong> Pets and children
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
            <li>1.37" pile for realistic feel</li>
            <li>Anti-slip backing</li>
            <li>Quick-drying and odor-resistant</li>
            <li>Comes in sizes up to 13x82 ft</li>
          </ul>
          <p className="mt-2 italic text-sm text-gray-600">
            Great for balconies that double as pet play areas!
          </p>
          <a href="#" className="inline-block mt-3 text-blue-600 underline">
            👉 🔗 Check Price on Amazon
          </a>
        </div>

        {/* 3. LITA */}
        <div className="mb-6 p-4 border border-gray-200 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-green-700">
            🌟 3. LITA Premium Artificial Turf Rug
          </h2>
          <p className="mt-1 text-gray-800">
            <strong>Best For:</strong> High-traffic outdoor areas
          </p>
          <p className="mt-2 text-gray-700 font-medium">Why You'll Love It:</p>
          <ul className="list-disc list-inside mt-1 space-y-1 text-gray-700">
            <li>70 oz total weight – ultra-durable</li>
            <li>Soft yet dense yarn</li>
            <li>Ideal for patios with furniture</li>
          </ul>
          <p className="mt-2 italic text-sm text-gray-600">
            Pro Tip: Rinse weekly to prevent dirt buildup and keep it fresh.
          </p>
          <a href="#" className="inline-block mt-3 text-blue-600 underline">
            👉 🔗 Shop Now on Amazon
          </a>
        </div>

        {/* 4. GOLDEN MOON */}
        <div className="mb-6 p-4 border border-gray-200 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-green-700">
            🏡 4. GOLDEN MOON Outdoor Grass Rug
          </h2>
          <p className="mt-1 text-gray-800">
            <strong>Perfect For:</strong> Apartment balconies
          </p>
          <p className="mt-2 text-gray-700 font-medium">
            Special Feature: Interlocking tiles available
          </p>
          <ul className="list-disc list-inside mt-1 space-y-1 text-gray-700">
            <li>Ultra-soft and springy</li>
            <li>Available in compact rug sizes</li>
            <li>No installation required</li>
          </ul>
          <a href="#" className="inline-block mt-3 text-blue-600 underline">
            👉 🔗 See It on Amazon
          </a>
        </div>

        {/* 5. SavvyGrow */}
        <div className="mb-6 p-4 border border-gray-200 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-green-700">
            💰 5. SavvyGrow Grass Rug
          </h2>
          <p className="mt-1 text-gray-800 font-medium">
            Best Budget-Friendly Pick
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
            <li>1.2" pile, soft and green</li>
            <li>UV- and heat-resistant</li>
            <li>Lightweight and foldable</li>
          </ul>
          <p className="mt-2 italic text-sm text-gray-600">
            A great entry-level turf mat for renters and new homeowners.
          </p>
          <a href="#" className="inline-block mt-3 text-blue-600 underline">
            👉 🔗 View Lowest Price
          </a>
        </div>

        {/* 6. Pet Adobe */}
        <div className="mb-6 p-4 border border-gray-200 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-green-700">
            🐶 6. Pet Adobe Artificial Grass Patch
          </h2>
          <p className="mt-1 text-gray-800 font-medium">
            Top Pick for Pet Lovers
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
            <li>3'x5' portable turf patch</li>
            <li>Odor-blocking material</li>
            <li>Washable and reusable</li>
          </ul>
          <p className="mt-2 italic text-sm text-gray-600">
            Works well as a dog potty area or portable balcony patch.
          </p>
          <a href="#" className="inline-block mt-3 text-blue-600 underline">
            👉 🔗 Buy on Amazon
          </a>
        </div>

        {/* 7. SunVilla */}
        <div className="mb-6 p-4 border border-gray-200 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-green-700">
            🌞 7. SunVilla Realistic Turf Mat
          </h2>
          <p className="mt-1 text-gray-800 font-medium">
            Softest Turf on the List
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
            <li>1.38" pile height</li>
            <li>Fade-resistant</li>
            <li>Easy DIY installation</li>
          </ul>
          <p className="mt-2 italic text-sm text-gray-600">
            Combine with outdoor rugs or garden lights for cozy balcony
            evenings.
          </p>
          <a href="#" className="inline-block mt-3 text-blue-600 underline">
            👉 🔗 Explore on Amazon
          </a>
        </div>

        {/* 8. ZGR Heavy-Duty */}
        <div className="mb-6 p-4 border border-gray-200 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-green-700">
            💪 8. ZGR Heavy-Duty Turf Carpet
          </h2>
          <p className="mt-1 text-gray-800 font-medium">
            Best for Large Patios
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
            <li>Extra-wide options</li>
            <li>High-density for long-term use</li>
            <li>Heavy backing holds position</li>
          </ul>
          <p className="mt-2 italic text-sm text-gray-600">
            Great for permanent outdoor flooring setups.
          </p>
          <a href="#" className="inline-block mt-3 text-blue-600 underline">
            👉 🔗 Get It Now
          </a>
        </div>

        {/* 9. Fezep */}
        <div className="mb-6 p-4 border border-gray-200 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-green-700">
            🛋️ 9. Fezep Synthetic Lawn Rug
          </h2>
          <p className="mt-1 text-gray-800 font-medium">
            Great for Most Average Patios
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
            <li>1.18" pile</li>
            <li>Flexible and easy to trim</li>
            <li>Premium drainage system</li>
          </ul>
          <p className="mt-2 italic text-sm text-gray-600">
            Use underneath outdoor tables or beside lounge chairs.
          </p>
          <a href="#" className="inline-block mt-3 text-blue-600 underline">
            👉 🔗 See Amazon Reviews
          </a>
        </div>

        {/* 10. iCustomRug */}
        <div className="mb-6 p-4 border border-gray-200 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-green-700">
            🧳 10. iCustomRug Green Turf Carpet
          </h2>
          <p className="mt-1 text-gray-800 font-medium">
            Best for Short-Term or Decorative Use
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
            <li>Only 0.25" pile</li>
            <li>Lightweight and low-cost</li>
            <li>No drainage – ideal for covered areas</li>
          </ul>
          <p className="mt-2 italic text-sm text-gray-600">
            Perfect for events, photoshoots, or party patios.
          </p>
          <a href="#" className="inline-block mt-3 text-blue-600 underline">
            👉 🔗 Buy on Amazon
          </a>
        </div>
        {/* Buyer's Guide */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-green-700 mb-4">
            📚 Outdoor Artificial Grass Rug Buyer’s Guide
          </h2>

          {/* 1. Pile Height */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800">
              🧵 1. Pile Height
            </h3>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>0.25" to 0.75": Budget and temporary decor</li>
              <li>
                1" to 1.5": Realistic feel, perfect for patios or balconies
              </li>
            </ul>
          </div>

          {/* 2. Drainage */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800">
              💧 2. Drainage
            </h3>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>
                Look for drainage holes if your rug will be exposed to rain
              </li>
              <li>Helps avoid mold and waterlogging</li>
            </ul>
          </div>

          {/* 3. UV Resistance */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800">
              🌞 3. UV Resistance
            </h3>
            <p className="text-gray-700 mt-2">
              UV-stabilized turf lasts longer and avoids fading
            </p>
          </div>

          {/* 4. Pet & Kid Safety */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800">
              🐕 4. Pet & Kid Safety
            </h3>
            <p className="text-gray-700 mt-2">
              Non-toxic, lead-free, soft yarns recommended
            </p>
          </div>

          {/* 5. Backing Type */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800">
              🪵 5. Backing Type
            </h3>
            <p className="text-gray-700 mt-2">
              Rubber or latex backing provides grip and prevents slipping
            </p>
          </div>
        </div>

        {/* Pro Tips */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            🌟 Pro Tips for Outdoor Artificial Grass Rug Use
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>✔️ Hose down weekly to keep clean</li>
            <li>✔️ Use enzyme sprays in pet areas</li>
            <li>✔️ Add potted plants for a more natural look</li>
            <li>✔️ For balconies, trim to size using heavy-duty scissors</li>
            <li>✔️ Use outdoor double-sided tape for corners</li>
          </ul>
        </div>
        <div className="w-full  mx-auto p-4">
          <h2 className="text-2xl font-bold mb-6 text-center">
            ❓ Frequently Asked Questions (FAQs){" "}
          </h2>
          {/* question */}
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold bg-gray-100 p-4 rounded-2xl shadow-md">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="bg-white p-4 rounded-b-2xl shadow-md border-t">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-green-700 mb-4">
            🎯 Final Recommendations
          </h2>
          <p className="text-gray-700 text-lg mb-4">
            Here are our top picks based on your needs:
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full text-left border border-gray-200 rounded-lg shadow-sm bg-white">
              <thead className="bg-green-600 text-white uppercase text-sm">
                <tr>
                  <th className="px-4 py-3">Need</th>
                  <th className="px-4 py-3">Product</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                <tr className="border-t">
                  <td className="px-4 py-3 font-medium">Best Overall</td>
                  <td className="px-4 py-3">
                    Goasis Lawn Artificial Grass Turf
                  </td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="px-4 py-3 font-medium">Best for Pets</td>
                  <td className="px-4 py-3">Petgrow Synthetic Grass Mat</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3 font-medium">Budget Option</td>
                  <td className="px-4 py-3">SavvyGrow Grass Rug</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="px-4 py-3 font-medium">Apartment Living</td>
                  <td className="px-4 py-3">GOLDEN MOON Outdoor Rug</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-10 p-6 border border-green-200 rounded-xl shadow-md bg-green-50">
          <h2 className="text-3xl font-bold text-green-700 mb-3">
            📢 Ready to Make Your Outdoor Space Beautiful?
          </h2>
          <p className="text-gray-800 text-lg mb-4">
            Artificial grass rugs make your balcony, patio, or rooftop feel like
            a real garden—without the maintenance.
          </p>

          <p className="text-gray-800 text-lg mb-4">
            ✅ Click below to explore our top recommended picks:
          </p>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-700 transition"
          >
            👉 🛒 Browse Top Artificial Grass Rugs on Amazon
          </a>
        </div>
      </div>
    </div>
  );
}

export default BalconiesPatios;
