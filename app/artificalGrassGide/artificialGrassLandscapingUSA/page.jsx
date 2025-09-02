import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import React from "react";

const faqs = [
  {
    question: "Q1. How long does artificial grass last?",
    answer: "A: High-quality turf can last 10–20 years with proper care.",
  },
  {
    question: "Q2. Is artificial grass safe for pets and kids?",
    answer:
      "A: Yes! Most premium turfs are lead-free, non-toxic, and come with drainage systems.",
  },
  {
    question: "Q3. Can I install it myself?",
    answer:
      "A: Absolutely. With a proper installation kit, it's a beginner-friendly DIY project.",
  },
  {
    question: "Q5. What size should I order?",
    answer:
      "A: Measure your area’s square footage and order 10% extra to allow for cuts and errors.",
  },
];

function LandScapingUSA() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 my-10">
      <div className="space-y-10">
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-4">
            🌱 Premium Artificial Grass Brands for Landscaping (Realistic
            Artificial Grass USA)
          </h1>

          <p className="text-gray-700 text-base mb-6">
            <strong>Meta Description:</strong> Looking for realistic artificial
            grass in the USA? Discover top premium brands for landscaping,
            compare features, and explore expert tips, FAQs, and buyer’s guide
            in this detailed review.
          </p>

          <div className="bg-gray-100 border border-gray-300 rounded-md p-4">
            <h2 className="text-3xl font-semibold mb-3">
              📌 Table of Contents
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
        </div>
        <div id="why-choose-artificial-grass" className="mb-10">
          <h2 className="text-3xl font-bold mb-4">
            🌱 Why Choose Artificial Grass for Landscaping?
          </h2>

          <p className="text-gray-700 text-base mb-4">
            Maintaining a lush green lawn can be costly and
            time-consuming—especially in areas with:
          </p>

          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Water restrictions</li>
            <li>Harsh sunlight and heat</li>
            <li>Poor soil conditions</li>
          </ul>

          <p className="text-gray-700 text-base mb-4">
            That’s why more homeowners, pet lovers, and even commercial property
            owners are switching to realistic artificial grass for
            low-maintenance beauty and long-term savings.
          </p>

          <p className="text-lg font-semibold mb-2">
            Benefits of Using Artificial Grass:
          </p>

          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>✅ No mowing or watering</li>
            <li>✅ Stays green all year round</li>
            <li>✅ Durable for pets and kids</li>
            <li>✅ Safe and non-toxic options available</li>
            <li>✅ Boosts curb appeal and property value</li>
          </ul>
        </div>
        <div id="realistic-artificial-grass-features" className="mb-10">
          <h2 className="text-3xl font-bold mb-4">
            👀 What Makes Artificial Grass Look Realistic?
          </h2>

          <p className="text-gray-700 text-base mb-4">
            Not all turf is created equal. The key to finding realistic
            artificial grass in the USA lies in the following features:
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full text-left border border-gray-200 rounded-lg shadow-sm bg-white">
              <thead className="bg-green-600 text-white uppercase text-sm">
                <tr>
                  <th className="px-4 py-3">Feature</th>
                  <th className="px-4 py-3">Why It Matters</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                <tr className="border-t">
                  <td className="px-4 py-3 font-medium">
                    Pile Height (1.5&quot;–2&quot;)
                  </td>
                  <td className="px-4 py-3">Mimics natural grass blades</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="px-4 py-3 font-medium">
                    Dual- or Multi-tone Color
                  </td>
                  <td className="px-4 py-3">Adds natural color variation</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3 font-medium">
                    Soft Polyethylene Fibers
                  </td>
                  <td className="px-4 py-3">
                    Gives a comfortable, barefoot-friendly feel
                  </td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="px-4 py-3 font-medium">Thatch Layer</td>
                  <td className="px-4 py-3">
                    Enhances realism with texture and depth
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3 font-medium">UV Resistance</td>
                  <td className="px-4 py-3">Prevents fading in sunny areas</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="px-4 py-3 font-medium">Drainage Holes</td>
                  <td className="px-4 py-3">
                    Allows water to pass through easily (great for pets & rain)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div id="top-brands" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">
            🏆 Top 5 Premium Artificial Grass Brands in the USA (2025)
          </h2>

          <p className="text-gray-700 text-base mb-6">
            Here are the top-rated turf products that combine realistic
            appearance, durability, and buyer satisfaction. We’ve hand-picked
            these based on user reviews, features, and value for money.
          </p>

          {/* Brand 1 */}
          <div className="mb-8 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-green-600 mb-2">
              1. Goasis Lawn Realistic Artificial Grass Turf
            </h3>
            <p className="text-blue-600 mb-2">
              <a href="#" className="underline">
                Affiliate Link: Buy Goasis Lawn on Amazon →
              </a>
            </p>
            <ul className="list-disc list-inside text-gray-800 mb-3">
              <li>1.38" pile height, 4-tone color</li>
              <li>UV and weather resistant</li>
              <li>Pet- and child-safe materials</li>
              <li>Easy to cut and install</li>
            </ul>
            <p className="text-gray-700 font-medium mb-1">Best For:</p>
            <ul className="list-disc list-inside text-green-700">
              <li>✅ Homeowners looking for a soft, natural feel</li>
              <li>✅ Medium to large yards or pet runs</li>
            </ul>
            <p className="mt-3 text-sm text-gray-600 italic">
              🛒 Pro Tip: Pair it with a turf tape and nails kit for easy DIY
              installation.
            </p>
          </div>

          {/* Brand 2 */}
          <div className="mb-8 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-green-600 mb-2">
              2. PET GROW PG1-4 Artificial Grass
            </h3>
            <p className="text-blue-600 mb-2">
              <a href="#" className="underline">
                Affiliate Link: Buy PET GROW PG1-4 on Amazon →
              </a>
            </p>
            <ul className="list-disc list-inside text-gray-800 mb-3">
              <li>1.37" pile height, vibrant natural color</li>
              <li>Environmentally friendly</li>
              <li>Built-in drainage system</li>
            </ul>
            <p className="text-gray-700 font-medium mb-1">Best For:</p>
            <ul className="list-disc list-inside text-green-700">
              <li>✅ Pet lovers & dog owners</li>
              <li>✅ High-traffic areas</li>
            </ul>
          </div>

          {/* Brand 3 */}
          <div className="mb-8 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-green-600 mb-2">
              3. SunVilla SV7 Realistic Indoor/Outdoor Grass Rug
            </h3>
            <p className="text-blue-600 mb-2">
              <a href="#" className="underline">
                Affiliate Link: Buy SunVilla SV7 on Amazon →
              </a>
            </p>
            <ul className="list-disc list-inside text-gray-800 mb-3">
              <li>1.38" blade height, 4-tone pattern</li>
              <li>Durable latex backing</li>
              <li>Non-toxic and lead-free</li>
            </ul>
            <p className="text-gray-700 font-medium mb-1">Best For:</p>
            <ul className="list-disc list-inside text-green-700">
              <li>✅ Indoor decor, balconies, patios</li>
              <li>✅ Small lawn transformations</li>
            </ul>
          </div>

          {/* Brand 4 */}
          <div className="mb-8 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-green-600 mb-2">
              4. ZGR Premium Realistic Synthetic Lawn
            </h3>
            <p className="text-blue-600 mb-2">
              <a href="#" className="underline">
                Affiliate Link: Buy ZGR Turf on Amazon →
              </a>
            </p>
            <ul className="list-disc list-inside text-gray-800 mb-3">
              <li>Lush 1.6" height</li>
              <li>70 oz total weight per square yard</li>
              <li>Fire resistant & UV-stabilized</li>
            </ul>
            <p className="text-gray-700 font-medium mb-1">Best For:</p>
            <ul className="list-disc list-inside text-green-700">
              <li>✅ Larger landscaping projects</li>
              <li>✅ Homeowners wanting premium turf texture</li>
            </ul>
          </div>

          {/* Brand 5 */}
          <div className="mb-8 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-green-600 mb-2">
              5. LITA Premium Artificial Grass
            </h3>
            <p className="text-blue-600 mb-2">
              <a href="#" className="underline">
                Affiliate Link: Buy LITA Grass on Amazon →
              </a>
            </p>
            <ul className="list-disc list-inside text-gray-800 mb-3">
              <li>1.38" pile, vibrant green tone</li>
              <li>Easy to install with any surface</li>
              <li>Withstands high traffic</li>
            </ul>
            <p className="text-gray-700 font-medium mb-1">Best For:</p>
            <ul className="list-disc list-inside text-green-700">
              <li>✅ Front/back yards</li>
              <li>✅ Dog runs and play areas</li>
            </ul>
          </div>
        </div>
        <div id="realistic-artificial-grass-features" className="mb-10">
          <h2 className="text-3xl font-bold mb-4">
            👀 What Makes Artificial Grass Look Realistic?
          </h2>

          <p className="text-gray-700 text-base mb-4">
            Not all turf is created equal. The key to finding realistic
            artificial grass in the USA lies in the following features:
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full text-left border border-gray-200 rounded-lg shadow-sm bg-white">
              <thead className="bg-green-600 text-white uppercase text-sm">
                <tr>
                  <th className="px-4 py-3">Feature</th>
                  <th className="px-4 py-3">Why It Matters</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                <tr className="border-t">
                  <td className="px-4 py-3 font-medium">
                    Pile Height (1.5&quot;–2&quot;)
                  </td>
                  <td className="px-4 py-3">Mimics natural grass blades</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="px-4 py-3 font-medium">
                    Dual- or Multi-tone Color
                  </td>
                  <td className="px-4 py-3">Adds natural color variation</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3 font-medium">
                    Soft Polyethylene Fibers
                  </td>
                  <td className="px-4 py-3">
                    Gives a comfortable, barefoot-friendly feel
                  </td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="px-4 py-3 font-medium">Thatch Layer</td>
                  <td className="px-4 py-3">
                    Enhances realism with texture and depth
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3 font-medium">UV Resistance</td>
                  <td className="px-4 py-3">Prevents fading in sunny areas</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="px-4 py-3 font-medium">Drainage Holes</td>
                  <td className="px-4 py-3">
                    Allows water to pass through easily (great for pets & rain)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div id="top-brands" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">
            🏆 Top 5 Premium Artificial Grass Brands in the USA (2025)
          </h2>

          <p className="text-gray-700 text-base mb-6">
            Here are the top-rated turf products that combine realistic
            appearance, durability, and buyer satisfaction. We’ve hand-picked
            these based on user reviews, features, and value for money.
          </p>

          {/* Brand 1 */}
          <div className="mb-8 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-green-600 mb-2">
              1. Goasis Lawn Realistic Artificial Grass Turf
            </h3>
            <p className="text-blue-600 mb-2">
              <a href="#" className="underline">
                Affiliate Link: Buy Goasis Lawn on Amazon →
              </a>
            </p>
            <ul className="list-disc list-inside text-gray-800 mb-3">
              <li>1.38" pile height, 4-tone color</li>
              <li>UV and weather resistant</li>
              <li>Pet- and child-safe materials</li>
              <li>Easy to cut and install</li>
            </ul>
            <p className="text-gray-700 font-medium mb-1">Best For:</p>
            <ul className="list-disc list-inside text-green-700">
              <li>✅ Homeowners looking for a soft, natural feel</li>
              <li>✅ Medium to large yards or pet runs</li>
            </ul>
            <p className="mt-3 text-sm text-gray-600 italic">
              🛒 Pro Tip: Pair it with a turf tape and nails kit for easy DIY
              installation.
            </p>
          </div>

          {/* Brand 2 */}
          <div className="mb-8 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-green-600 mb-2">
              2. PET GROW PG1-4 Artificial Grass
            </h3>
            <p className="text-blue-600 mb-2">
              <a href="#" className="underline">
                Affiliate Link: Buy PET GROW PG1-4 on Amazon →
              </a>
            </p>
            <ul className="list-disc list-inside text-gray-800 mb-3">
              <li>1.37" pile height, vibrant natural color</li>
              <li>Environmentally friendly</li>
              <li>Built-in drainage system</li>
            </ul>
            <p className="text-gray-700 font-medium mb-1">Best For:</p>
            <ul className="list-disc list-inside text-green-700">
              <li>✅ Pet lovers & dog owners</li>
              <li>✅ High-traffic areas</li>
            </ul>
          </div>

          {/* Brand 3 */}
          <div className="mb-8 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-green-600 mb-2">
              3. SunVilla SV7 Realistic Indoor/Outdoor Grass Rug
            </h3>
            <p className="text-blue-600 mb-2">
              <a href="#" className="underline">
                Affiliate Link: Buy SunVilla SV7 on Amazon →
              </a>
            </p>
            <ul className="list-disc list-inside text-gray-800 mb-3">
              <li>1.38" blade height, 4-tone pattern</li>
              <li>Durable latex backing</li>
              <li>Non-toxic and lead-free</li>
            </ul>
            <p className="text-gray-700 font-medium mb-1">Best For:</p>
            <ul className="list-disc list-inside text-green-700">
              <li>✅ Indoor decor, balconies, patios</li>
              <li>✅ Small lawn transformations</li>
            </ul>
          </div>

          {/* Brand 4 */}
          <div className="mb-8 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-green-600 mb-2">
              4. ZGR Premium Realistic Synthetic Lawn
            </h3>
            <p className="text-blue-600 mb-2">
              <a href="#" className="underline">
                Affiliate Link: Buy ZGR Turf on Amazon →
              </a>
            </p>
            <ul className="list-disc list-inside text-gray-800 mb-3">
              <li>Lush 1.6" height</li>
              <li>70 oz total weight per square yard</li>
              <li>Fire resistant & UV-stabilized</li>
            </ul>
            <p className="text-gray-700 font-medium mb-1">Best For:</p>
            <ul className="list-disc list-inside text-green-700">
              <li>✅ Larger landscaping projects</li>
              <li>✅ Homeowners wanting premium turf texture</li>
            </ul>
          </div>

          {/* Brand 5 */}
          <div className="mb-8 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-green-600 mb-2">
              5. LITA Premium Artificial Grass
            </h3>
            <p className="text-blue-600 mb-2">
              <a href="#" className="underline">
                Affiliate Link: Buy LITA Grass on Amazon →
              </a>
            </p>
            <ul className="list-disc list-inside text-gray-800 mb-3">
              <li>1.38" pile, vibrant green tone</li>
              <li>Easy to install with any surface</li>
              <li>Withstands high traffic</li>
            </ul>
            <p className="text-gray-700 font-medium mb-1">Best For:</p>
            <ul className="list-disc list-inside text-green-700">
              <li>✅ Front/back yards</li>
              <li>✅ Dog runs and play areas</li>
            </ul>
          </div>
        </div>
        <div className="w-full  mx-auto p-4">
          <h2 className="text-2xl font-bold mb-6 text-center">
            ❓ FAQs About Artificial Grass for Landscaping{" "}
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
        <div id="final-thoughts" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">
            🎯 Final Thoughts & Call to Action
          </h2>

          <p className="text-gray-800 text-lg mb-4">
            Choosing the best realistic artificial grass in the USA depends on
            your budget, landscaping goals, and pet/family needs. With the right
            turf, you can create a green, eco-friendly, low-maintenance outdoor
            space that looks amazing all year round.
          </p>

          <div className="p-4 bg-green-50 border-l-4 border-green-600 rounded-md mb-4">
            <p className="font-semibold text-green-700 mb-1">💥 Top Pick:</p>
            <p className="text-green-800">
              👉{" "}
              <a
                href="#"
                className="underline font-medium hover:text-green-900"
              >
                Goasis Lawn Artificial Grass on Amazon
              </a>{" "}
              – Premium quality, realistic look, and pet-friendly.
            </p>
          </div>

          <p className="text-gray-700 text-base">
            🛍️ <span className="font-semibold">Ready to buy?</span>
            <br />
            Click any link above to explore your favorite artificial grass
            product on Amazon and take advantage of current discounts!
          </p>
        </div>
      </div>
    </div>
  );
}

export default LandScapingUSA;
