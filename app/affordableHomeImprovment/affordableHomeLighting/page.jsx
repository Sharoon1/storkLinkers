import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import React from "react";

const faqs = [
  {
    question: "Q: Are cheap lighting products safe?",
    answer:
      "A: Yes, if UL-listed or Energy Star certified. Always read safety instructions.",
  },
  {
    question: "Q: Can renters use peel-and-stick lights?",
    answer:
      "A: Absolutely. Battery-powered or USB plug-ins are ideal for rental spaces.",
  },
  {
    question: "Q: Do smart bulbs require a hub?",
    answer:
      "A: Most don’t. Brands like Govee and TP-Link connect directly via Wi-Fi.",
  },
  {
    question: "Q: What’s the most cost-effective lighting upgrade?",
    answer:
      "A: Start with LED bulbs and strip lights—affordable and noticeable.",
  },
];

function AffordableHomeLighting() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 my-10">
      <div className="space-y-10">
        <div className="px-4 sm:px-6 lg:px-8 my-10">
          <div className="space-y-10">
            <div className="text-base text-gray-600">
              <h1 className="text-4xl font-semibold mt-8 mb-4 text-black">
                💡 Affordable Home Lighting Upgrades on Amazon (2025 Guide)
              </h1>
              <p className="mb-4">
                Looking to brighten up your home without burning a hole in your
                wallet? You’re not alone. Many homeowners and renters are
                searching for budget home lighting ideas that are stylish,
                functional, and—most importantly—affordable.
              </p>
              <p className="mb-6">
                In this guide, we’ll explore Amazon’s top-rated lighting
                upgrades, from under-cabinet lighting and modern ceiling
                fixtures to smart bulbs and LED strips. Whether you're upgrading
                a rental or giving your forever home a fresh glow, these options
                offer serious style on a shoestring.
              </p>

              <h2 className="text-2xl font-semibold mt-6 mb-2 text-black">
                📚 Table of Contents
              </h2>
              <ul className="list-disc list-inside space-y-1 text-teal-700">
                <li>
                  <a href="#why-lighting-matters" className="hover:underline">
                    Why Lighting Upgrades Matter
                  </a>
                </li>
                <li>
                  <a href="#what-to-consider" className="hover:underline">
                    What to Consider Before Buying Budget Lighting
                  </a>
                </li>
                <li>
                  <a href="#top-10-lighting" className="hover:underline">
                    Top 10 Affordable Home Lighting Ideas on Amazon
                  </a>
                </li>
                <li>
                  <a href="#comparison-table" className="hover:underline">
                    Comparison Table: Best Budget Lighting Options
                  </a>
                </li>
                <li>
                  <a href="#placement-tips" className="hover:underline">
                    Lighting Placement Tips for Maximum Impact
                  </a>
                </li>
                <li>
                  <a href="#diy-tips" className="hover:underline">
                    DIY Installation Tips
                  </a>
                </li>
                <li>
                  <a href="#faqs" className="hover:underline">
                    FAQs: Budget Lighting Ideas for Homeowners
                  </a>
                </li>
                <li>
                  <a href="#final-thoughts" className="hover:underline">
                    Final Thoughts: Best Budget Picks
                  </a>
                </li>
                <li>
                  <a href="#call-to-action" className="hover:underline">
                    Call to Action: Transform Your Space Today
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 my-10">
          <div className="space-y-10 text-base text-gray-600">
            {/* Why Lighting Upgrades Matter */}
            <section id="why-lighting-matters">
              <h2 className="text-2xl font-semibold text-black mb-4">
                🔦 Why Lighting Upgrades Matter
              </h2>
              <p className="mb-2">
                Upgrading your lighting isn’t just about brightness—it’s about:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>Mood:</strong> Warm tones make spaces feel cozy, while
                  cool tones energize.
                </li>
                <li>
                  <strong>Functionality:</strong> Task lighting improves
                  productivity in kitchens, offices, and bathrooms.
                </li>
                <li>
                  <strong>Aesthetics:</strong> The right fixture can double as a
                  statement piece.
                </li>
                <li>
                  <strong>Home Value:</strong> A well-lit home feels more modern
                  and inviting.
                </li>
              </ul>
              <p className="mt-4 italic text-teal-700">
                Pro Tip: Swapping outdated bulbs or fixtures is one of the
                fastest ROI-driven upgrades you can make on a small budget.
              </p>
            </section>

            {/* What to Consider Before Buying Budget Lighting */}
            <section id="what-to-consider" className="mt-10">
              <h2 className="text-2xl font-semibold text-black mb-4">
                🧠 What to Consider Before Buying Budget Lighting
              </h2>

              {/* Room Purpose */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-teal-700 mb-2">
                  1. Room Purpose
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    <strong>Living rooms:</strong> soft ambient lights
                  </li>
                  <li>
                    <strong>Kitchens:</strong> bright under-cabinet or ceiling
                    lighting
                  </li>
                  <li>
                    <strong>Bedrooms:</strong> dimmable, warm-toned lamps
                  </li>
                  <li>
                    <strong>Bathrooms:</strong> vanity lighting or waterproof
                    LEDs
                  </li>
                </ul>
              </div>

              {/* Budget */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-teal-700 mb-2">
                  2. Budget
                </h3>
                <p>
                  You can find impressive options on Amazon from{" "}
                  <strong>$15 to $60</strong> that offer longevity and style.
                </p>
              </div>

              {/* Energy Efficiency */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-teal-700 mb-2">
                  3. Energy Efficiency
                </h3>
                <p>
                  Look for LED and smart bulbs with{" "}
                  <strong>Energy Star ratings</strong> to save on power bills.
                </p>
              </div>

              {/* Size & Coverage */}
              <div>
                <h3 className="text-lg font-semibold text-teal-700 mb-2">
                  4. Size & Coverage
                </h3>
                <p>
                  Choose fixtures based on room size and ceiling height. Check
                  product dimensions before purchase.
                </p>
              </div>
            </section>
          </div>
        </div>
        <div className="my-8">
          <h2 className="text-2xl font-semibold mb-4">
            Top 10 Affordable Home Lighting Ideas on Amazon
          </h2>
          <p className="text-base text-gray-700 mb-6">
            Each of these lighting products is budget-friendly, highly rated by
            thousands of Amazon buyers, and ideal for renters and homeowners
            alike.
          </p>

          {/* 1 */}
          <div className="mb-6">
            <h3 className="text-xl font-medium text-teal-600">
              1. GE Enbrighten LED Under Cabinet Lighting Kit
            </h3>
            <p className="text-base text-gray-700">
              💰 <strong>Price:</strong> $39.99
              <br />
              🔋 <strong>Energy Efficient:</strong> Yes
              <br />✅ <strong>Best for:</strong> Kitchen, workspace, or closet
            </p>
            <ul className="list-disc ml-6 my-2 text-base text-gray-700">
              <li>Linkable up to 30 lights</li>
              <li>Dimmable</li>
              <li>Plug-in with easy peel-and-stick or screw mounting</li>
            </ul>
            <p className="text-base text-gray-700">
              ❌ <strong>Cons:</strong> Not battery-operated
            </p>
            <a href="#" className="text-blue-600 hover:underline">
              ➡️ View on Amazon
            </a>
          </div>

          {/* 2 */}
          <div className="mb-6">
            <h3 className="text-xl font-medium text-teal-600">
              2. LE LED Strip Lights Kit with Remote
            </h3>
            <p className="text-base text-gray-700">
              💰 <strong>Price:</strong> $25.99
              <br />
              🎨 <strong>Features:</strong> 16 color options, remote control
              <br />✅ <strong>Best for:</strong> Bedrooms, living rooms, behind
              TVs
            </p>
            <ul className="list-disc ml-6 my-2 text-base text-gray-700">
              <li>Easy to install</li>
              <li>Vibrant colors</li>
              <li>Great for mood lighting</li>
            </ul>
            <p className="text-base text-gray-700">
              ❌ <strong>Cons:</strong> Adhesive may wear out on rough surfaces.
            </p>
            <a href="#" className="text-blue-600 hover:underline">
              ➡️ Check on Amazon
            </a>
          </div>

          {/* 3 */}
          <div className="mb-6">
            <h3 className="text-xl font-medium text-teal-600">
              3. LORVIES Dimmable Touch Bedside Lamp
            </h3>
            <p className="text-base text-gray-700">
              💰 <strong>Price:</strong> $29.99
              <br />
              🔦 <strong>Features:</strong> 3 brightness levels, USB port
              <br />✅ <strong>Best for:</strong> Bedrooms, dorms, home offices
            </p>
            <ul className="list-disc ml-6 my-2 text-base text-gray-700">
              <li>USB charging port</li>
              <li>Modern design</li>
              <li>Compact and lightweight</li>
            </ul>
            <p className="text-base text-gray-700">
              ❌ <strong>Cons:</strong> Not compatible with smart bulbs
            </p>
            <a href="#" className="text-blue-600 hover:underline">
              ➡️ Buy on Amazon
            </a>
          </div>

          {/* 4 */}
          <div className="mb-6">
            <h3 className="text-xl font-medium text-teal-600">
              4. Ascher Vintage LED Edison Bulbs (4-Pack)
            </h3>
            <p className="text-base text-gray-700">
              💰 <strong>Price:</strong> $18.99
              <br />
              🌱 <strong>Eco-friendly:</strong> Yes
              <br />✅ <strong>Best for:</strong> Living rooms, pendant lights,
              or ceiling fans
            </p>
            <ul className="list-disc ml-6 my-2 text-base text-gray-700">
              <li>Energy-saving (90% less than incandescent)</li>
              <li>Stylish vintage look</li>
              <li>Long life span (20,000+ hours)</li>
            </ul>
            <p className="text-base text-gray-700">
              ❌ <strong>Cons:</strong> Not dimmable
            </p>
            <a href="#" className="text-blue-600 hover:underline">
              ➡️ Get on Amazon
            </a>
          </div>

          {/* 5 */}
          <div className="mb-6">
            <h3 className="text-xl font-medium text-teal-600">
              5. Globe Electric 3-Light Semi-Flush Ceiling Fixture
            </h3>
            <p className="text-base text-gray-700">
              💰 <strong>Price:</strong> $49.99
              <br />
              🧱 <strong>Style:</strong> Industrial matte black
              <br />✅ <strong>Best for:</strong> Entryways, kitchens, or
              hallways
            </p>
            <ul className="list-disc ml-6 my-2 text-base text-gray-700">
              <li>Eye-catching design</li>
              <li>Compatible with smart bulbs</li>
              <li>Easy to mount</li>
            </ul>
            <p className="text-base text-gray-700">
              ❌ <strong>Cons:</strong> Requires bulb purchase separately
            </p>
            <a href="#" className="text-blue-600 hover:underline">
              ➡️ Shop Now
            </a>
          </div>

          {/* 6 */}
          <div className="mb-6">
            <h3 className="text-xl font-medium text-teal-600">
              6. Govee Smart RGBWW Light Bulbs (2-Pack)
            </h3>
            <p className="text-base text-gray-700">
              💰 <strong>Price:</strong> $22.99
              <br />
              📱 <strong>Control via:</strong> App + Alexa/Google
              <br />✅ <strong>Best for:</strong> Smart home upgrades
            </p>
            <ul className="list-disc ml-6 my-2 text-base text-gray-700">
              <li>16 million colors</li>
              <li>Schedule, dim, or change colors remotely</li>
              <li>Voice-control enabled</li>
            </ul>
            <p className="text-base text-gray-700">
              ❌ <strong>Cons:</strong> Requires stable Wi-Fi
            </p>
            <a href="#" className="text-blue-600 hover:underline">
              ➡️ See on Amazon
            </a>
          </div>

          {/* 7 */}
          <div className="mb-6">
            <h3 className="text-xl font-medium text-teal-600">
              7. Simple Designs Mini Ceramic Lamp (Set of 2)
            </h3>
            <p className="text-base text-gray-700">
              💰 <strong>Price:</strong> $21.50
              <br />
              🎨 <strong>Available Colors:</strong> Gray, teal, white
              <br />✅ <strong>Best for:</strong> Dorms, guest rooms, or side
              tables
            </p>
            <ul className="list-disc ml-6 my-2 text-base text-gray-700">
              <li>Comes in a pair</li>
              <li>Compact size</li>
              <li>Stylish colors</li>
            </ul>
            <p className="text-base text-gray-700">
              ❌ <strong>Cons:</strong> Not very bright – more for ambiance
            </p>
            <a href="#" className="text-blue-600 hover:underline">
              ➡️ View on Amazon
            </a>
          </div>

          {/* 8 */}
          <div className="mb-6">
            <h3 className="text-xl font-medium text-teal-600">
              8. Addlon LED Floor Lamp
            </h3>
            <p className="text-base text-gray-700">
              💰 <strong>Price:</strong> $39.99
              <br />
              📐 <strong>Height:</strong> 63 inches
              <br />✅ <strong>Best for:</strong> Living rooms or reading
              corners
            </p>
            <ul className="list-disc ml-6 my-2 text-base text-gray-700">
              <li>Classic minimalist design</li>
              <li>Stable base</li>
              <li>Includes an LED bulb</li>
            </ul>
            <p className="text-base text-gray-700">
              ❌ <strong>Cons:</strong> Assembly required
            </p>
            <a href="#" className="text-blue-600 hover:underline">
              ➡️ Check Product
            </a>
          </div>

          {/* 9 */}
          <div className="mb-6">
            <h3 className="text-xl font-medium text-teal-600">
              9. Amico 5/6 Inch Ultra-Thin LED Recessed Lights (4 Pack)
            </h3>
            <p className="text-base text-gray-700">
              💰 <strong>Price:</strong> $39.99
              <br />✅ <strong>Best for:</strong> Modern ceilings, kitchens,
              offices
            </p>
            <ul className="list-disc ml-6 my-2 text-base text-gray-700">
              <li>Energy Star certified</li>
              <li>3 color temperature settings</li>
              <li>Slim fit design</li>
            </ul>
            <p className="text-base text-gray-700">
              ❌ <strong>Cons:</strong> Requires some wiring – not ideal for all
              renters
            </p>
            <a href="#" className="text-blue-600 hover:underline">
              ➡️ Buy on Amazon
            </a>
          </div>

          {/* 10 */}
          <div className="mb-6">
            <h3 className="text-xl font-medium text-teal-600">
              10. Maxvolador Modern Black Outdoor Wall Lantern
            </h3>
            <p className="text-base text-gray-700">
              💰 <strong>Price:</strong> $32.99
              <br />✅ <strong>Best for:</strong> Porch, patio, or entryway
            </p>
            <ul className="list-disc ml-6 my-2 text-base text-gray-700">
              <li>Weatherproof</li>
              <li>Sleek design</li>
              <li>Great night-time curb appeal</li>
            </ul>
            <p className="text-base text-gray-700">
              ❌ <strong>Cons:</strong> Outdoor use only
            </p>
            <a href="#" className="text-blue-600 hover:underline">
              ➡️ View Listing
            </a>
          </div>
        </div>
        <div className="overflow-x-auto my-12">
          <h2 id="comparison-table" className="text-2xl font-bold mb-4">
            Comparison Table: Best Budget Lighting Options
          </h2>
          <table className="min-w-full bg-white border border-gray-200 text-base text-gray-700">
            <thead className="bg-teal-600 text-white">
              <tr>
                <th className="px-4 py-2 text-left">Product</th>
                <th className="px-4 py-2 text-left">Type</th>
                <th className="px-4 py-2 text-left">Price</th>
                <th className="px-4 py-2 text-left">Best For</th>
                <th className="px-4 py-2 text-left">Smart Compatible</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="border px-4 py-2">GE Enbrighten</td>
                <td className="border px-4 py-2">Under Cabinet</td>
                <td className="border px-4 py-2">$39.99</td>
                <td className="border px-4 py-2">Kitchen</td>
                <td className="border px-4 py-2">No</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border px-4 py-2">LE Strip Lights</td>
                <td className="border px-4 py-2">LED Strip</td>
                <td className="border px-4 py-2">$25.99</td>
                <td className="border px-4 py-2">Bedrooms</td>
                <td className="border px-4 py-2">No</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border px-4 py-2">LORVIES Lamp</td>
                <td className="border px-4 py-2">Bedside Lamp</td>
                <td className="border px-4 py-2">$29.99</td>
                <td className="border px-4 py-2">Bedrooms</td>
                <td className="border px-4 py-2">No</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border px-4 py-2">Ascher Bulbs</td>
                <td className="border px-4 py-2">Edison Bulbs</td>
                <td className="border px-4 py-2">$18.99</td>
                <td className="border px-4 py-2">Living Room</td>
                <td className="border px-4 py-2">No</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border px-4 py-2">Globe Electric</td>
                <td className="border px-4 py-2">Ceiling Fixture</td>
                <td className="border px-4 py-2">$49.99</td>
                <td className="border px-4 py-2">Hallways</td>
                <td className="border px-4 py-2">Yes</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border px-4 py-2">Govee Bulbs</td>
                <td className="border px-4 py-2">Smart Bulbs</td>
                <td className="border px-4 py-2">$22.99</td>
                <td className="border px-4 py-2">Smart Homes</td>
                <td className="border px-4 py-2">Yes</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border px-4 py-2">Simple Designs</td>
                <td className="border px-4 py-2">Table Lamps</td>
                <td className="border px-4 py-2">$21.50</td>
                <td className="border px-4 py-2">Dorms</td>
                <td className="border px-4 py-2">No</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border px-4 py-2">Addlon</td>
                <td className="border px-4 py-2">Floor Lamp</td>
                <td className="border px-4 py-2">$39.99</td>
                <td className="border px-4 py-2">Reading Nooks</td>
                <td className="border px-4 py-2">No</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border px-4 py-2">Amico</td>
                <td className="border px-4 py-2">Recessed Lights</td>
                <td className="border px-4 py-2">$39.99</td>
                <td className="border px-4 py-2">Kitchens</td>
                <td className="border px-4 py-2">No</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border px-4 py-2">Maxvolador</td>
                <td className="border px-4 py-2">Outdoor Wall Light</td>
                <td className="border px-4 py-2">$32.99</td>
                <td className="border px-4 py-2">Patios</td>
                <td className="border px-4 py-2">No</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="my-10 px-4 md:px-10">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              🛠 Lighting Placement Tips for Maximum Impact
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong>Layer lighting:</strong> Combine ambient, task, and
                accent lighting.
              </li>
              <li>
                <strong>Use mirrors:</strong> Reflect light and make rooms
                appear larger.
              </li>
              <li>
                <strong>Focus on corners:</strong> Floor lamps or strips in
                corners eliminate shadows.
              </li>
              <li>
                <strong>Dimmers = Mood:</strong> Install dimmer switches for
                adjustable ambiance.
              </li>
              <li>
                <strong>Pro Tip:</strong> Group similar light types with smart
                plugs or hubs for one-tap control.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              🧰 DIY Installation Tips
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Use Command hooks or strips for renter-friendly installs.</li>
              <li>Use a level to keep the wall lighting aligned.</li>
              <li>Test lighting in the evening before permanent placement.</li>
              <li>
                For ceilings, turn off the breaker before installing wired
                fixtures.
              </li>
            </ul>
          </div>
        </div>
        {/* there is question  */}
        <div className="w-full mx-auto p-4">
          <h2 className="text-2xl font-bold mb-6 text-center">
            ❓ FAQs: Budget Lighting Ideas for Homeowners
          </h2>

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
        ;{/* therei end question  */}
        <div className="my-10 px-4 md:px-10">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              🏁 Final Thoughts: Best Budget Picks
            </h2>
            <p className="text-base text-gray-700 mb-4">
              Looking for a quick recommendation?
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong>🏆 Best Overall Value:</strong> GE Enbrighten Under
                Cabinet Kit
              </li>
              <li>
                <strong>💡 Best Smart Option:</strong> Govee RGBWW Smart Bulbs
              </li>
              <li>
                <strong>💫 Best Aesthetic Upgrade:</strong> Globe Electric
                Ceiling Fixture
              </li>
              <li>
                <strong>🌈 Best Mood Lighting:</strong> LE LED Strip Lights
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              🛍 Call to Action: Transform Your Space Today
            </h2>
            <p className="text-base text-gray-700 mb-4">
              Your home deserves to shine—literally. Whether you're staging for
              guests or creating a cozy night-in atmosphere, lighting sets the
              tone. And with these budget home lighting ideas, upgrading has
              never been easier (or more affordable).
            </p>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-blue-600 hover:underline text-base"
              >
                👉 Browse top-rated lighting upgrades on Amazon today
              </a>
              <a
                href="#"
                className="block text-blue-600 hover:underline text-base"
              >
                🛒 Shop the Full Collection
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AffordableHomeLighting;
