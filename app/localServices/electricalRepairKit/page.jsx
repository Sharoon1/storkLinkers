import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import React from "react";
const faqs = [
  {
    question: "Q1: What is the best electrical repair kit for beginners?",
    answer:
      "👉 The Amazon Basics 73-Piece Kit is great for beginners due to its affordability and essential tools.",
  },
  {
    question: "Q2: Can I use these kits for all household electrical repairs?",
    answer:
      "👉 Yes, but only for small fixes like switches, outlets, and wires. For major rewiring, call a professional.",
  },
  {
    question: "Q3: How much should I spend on an electrical repair kit?",
    answer:
      "👉 Budget kits start at $25, while professional kits can cost $100+. Choose based on your needs.",
  },
  {
    question: "Q4: Do I really need a multimeter in my kit?",
    answer:
      "👉 Absolutely. A multimeter helps test voltage, resistance, and continuity—critical for safe repairs.",
  },
  {
    question: "Q5: Are these tools safe for high-voltage repairs?",
    answer:
      "👉 Only professional-grade kits like Klein Tools are rated for high-voltage work. Beginners should stick to basic home repairs.",
  },
];

function ElectricalRepairKit() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 my-10">
      <div className="space-y-10">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-indigo-600 mb-4">
            Must-Have Electrical Repair Kits for Homeowners
          </h1>

          <p className="text-gray-700 leading-relaxed mb-4">
            Imagine this: It’s a Saturday evening, and suddenly one of your
            outlets stops working. The fan won’t turn on, the Wi-Fi router goes
            dead, and you’re left scrambling for a quick fix.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            You could call an electrician—but that often means waiting hours (or
            even days) and paying $50–$100 for a simple job.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            That’s why an <strong>electrical repair kit for home use</strong> is
            a must-have. These kits provide the essential tools to handle basic
            DIY electrical repairs—like changing outlets, tightening loose
            wires, fixing switches, or testing connections—without spending a
            fortune on professional help.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            In this guide, we’ll cover:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>Why every homeowner should own an electrical repair kit</li>
            <li>
              The best electrical repair kits on Amazon (with pros, cons & price
              ranges)
            </li>
            <li>A comparison table to help you decide</li>
            <li>Storage tips to keep your tools organized</li>
            <li>FAQs and safety advice to keep you confident and secure</li>
          </ul>

          <p className="text-gray-700 leading-relaxed mb-6">
            By the end, you’ll know exactly which kit suits your needs—and how
            to use it safely.
          </p>

          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
            Why Homeowners Should Invest in an Electrical Repair Kit
          </h2>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>
              Save Money – Avoid costly electrician visits for minor fixes.
            </li>
            <li>
              Convenience – Handle quick repairs instantly without waiting.
            </li>
            <li>Safety – Insulated tools protect you while working.</li>
            <li>Confidence – Build independence with DIY skills.</li>
            <li>
              Multi-Purpose – Many kits include screwdrivers, pliers, testers,
              and tape, useful for all-around household work.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
            Key Features to Look for in an Electrical Repair Kit
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Before buying, ensure your kit includes these essentials:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>
              Insulated Screwdrivers – For outlets, switches, and terminals.
            </li>
            <li>Wire Strippers & Cutters – To replace or fix cables safely.</li>
            <li>
              Pliers (Needle-nose & Combination) – For gripping and twisting
              wires.
            </li>
            <li>Electrical Tape – Essential for insulation and quick fixes.</li>
            <li>
              Voltage Tester / Multimeter – To check for live wires before
              working.
            </li>
            <li>Cable Ties – For neat wiring and small repairs.</li>
            <li>Durable Case – To keep everything organized.</li>
          </ul>

          <p className="text-gray-700 font-semibold">
            💡 Pro Tip: Choose kits that are UL/CE certified for maximum safety.
          </p>
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-indigo-600 mb-4">
            🏆 Top 5 Best Electrical Repair Kits for Home Use (Amazon Picks)
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Below are the top-rated electrical repair kits available on Amazon.
            Each has been reviewed based on features, durability, ease of use,
            and customer feedback.
          </p>

          {/* 1. Klein Tools 1000V Electrical Repair Kit */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-2">
              1. Klein Tools 1000V Electrical Repair Kit
            </h2>
            <p className="text-gray-700 mb-1">
              ⭐ Best for Professionals & Advanced DIY
            </p>
            <p className="text-gray-700 mb-1">
              Includes: Insulated screwdrivers, wire stripper, pliers, tester
            </p>
            <p className="text-gray-700 mb-2">Price Range: $80–$120</p>
            <ul className="list-disc list-inside text-gray-700 mb-2">
              <li>Professional-grade quality</li>
              <li>Insulated tools rated up to 1000V</li>
              <li>Excellent durability</li>
            </ul>
            <p className="text-gray-700 mb-2">
              Cons: Higher price than budget kits
            </p>
            <p className="text-gray-700 font-semibold mb-2">
              Why It’s Worth It: Trusted brand for safety and reliability.
              Perfect if you want tools that last a lifetime.
            </p>
            <p className="text-indigo-600 font-semibold cursor-pointer mb-4">
              👉 Check Price on Amazon
            </p>
          </div>

          {/* 2. Dekopon 168-Piece Household & Electrical Kit */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-2">
              2. Dekopon 168-Piece Household & Electrical Kit
            </h2>
            <p className="text-gray-700 mb-1">⭐ Best All-in-One Kit</p>
            <p className="text-gray-700 mb-1">
              Includes: Screwdrivers, wire stripper, multimeter, hammer, tape,
              pliers
            </p>
            <p className="text-gray-700 mb-2">Price Range: $50–$70</p>
            <ul className="list-disc list-inside text-gray-700 mb-2">
              <li>Versatile (covers both household & electrical repairs)</li>
              <li>Affordable for beginners</li>
              <li>Comes in a sturdy case</li>
            </ul>
            <p className="text-gray-700 mb-2">
              Cons: Some tools aren’t heavy-duty.
            </p>
            <p className="text-gray-700 font-semibold mb-2">
              Why It’s Worth It: Great starter kit for homeowners who want one
              kit for everything.
            </p>
            <p className="text-indigo-600 font-semibold cursor-pointer mb-4">
              👉 View on Amazon
            </p>
          </div>

          {/* 3. WORKPRO 100-Piece Electrical Repair Tool Kit */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-2">
              3. WORKPRO 100-Piece Electrical Repair Tool Kit
            </h2>
            <p className="text-gray-700 mb-1">⭐ Best Value for Money</p>
            <p className="text-gray-700 mb-1">
              Includes: Voltage tester, pliers, insulated screwdrivers, wire
              stripper
            </p>
            <p className="text-gray-700 mb-2">Price Range: $40–$60</p>
            <ul className="list-disc list-inside text-gray-700 mb-2">
              <li>Affordable and reliable</li>
              <li>Organized storage box</li>
              <li>Covers all essential tools</li>
            </ul>
            <p className="text-gray-700 mb-2">
              Cons: Not as durable as Klein Tools
            </p>
            <p className="text-gray-700 font-semibold mb-2">
              Why It’s Worth It: A solid budget-friendly choice for casual home
              users.
            </p>
            <p className="text-indigo-600 font-semibold cursor-pointer mb-4">
              👉 See Amazon Price
            </p>
          </div>

          {/* 4. Amazon Basics Electrical Repair Kit (73-Piece) */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-2">
              4. Amazon Basics Electrical Repair Kit (73-Piece)
            </h2>
            <p className="text-gray-700 mb-1">⭐ Best for Beginners</p>
            <p className="text-gray-700 mb-1">
              Includes: Screwdrivers, wire stripper, tape, voltage tester
            </p>
            <p className="text-gray-700 mb-2">Price Range: $25–$40</p>
            <ul className="list-disc list-inside text-gray-700 mb-2">
              <li>Budget-friendly</li>
              <li>Lightweight and compact</li>
              <li>Easy-to-use for first-time DIYers</li>
            </ul>
            <p className="text-gray-700 mb-2">Cons: Limited durability</p>
            <p className="text-gray-700 font-semibold mb-2">
              Why It’s Worth It: Perfect for homeowners who just need basic
              tools for occasional fixes.
            </p>
            <p className="text-indigo-600 font-semibold cursor-pointer mb-4">
              👉 Check Price on Amazon
            </p>
          </div>

          {/* 5. Protomer 210-Piece Home & Electrical Tool Kit */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-2">
              5. Protomer 210-Piece Home & Electrical Tool Kit
            </h2>
            <p className="text-gray-700 mb-1">⭐ Best Heavy-Duty Set</p>
            <p className="text-gray-700 mb-1">
              Includes: Multimeter, socket set, pliers, screwdrivers, and
              electrical tape
            </p>
            <p className="text-gray-700 mb-2">Price Range: $90–$130</p>
            <ul className="list-disc list-inside text-gray-700 mb-2">
              <li>Very comprehensive kit</li>
              <li>High-quality tools with a good grip</li>
              <li>Durable carrying case</li>
            </ul>
            <p className="text-gray-700 mb-2">Cons: Large and heavy to store</p>
            <p className="text-gray-700 font-semibold mb-2">
              Why It’s Worth It: Excellent choice if you want everything in one
              kit, not just electrical tools.
            </p>
            <p className="text-indigo-600 font-semibold cursor-pointer mb-4">
              👉 See Amazon Deal
            </p>
          </div>
        </div>
        <div className="overflow-x-auto my-8">
          <table className="min-w-full border border-gray-200 divide-y divide-gray-200">
            <thead className="bg-indigo-100">
              <tr>
                <th className="px-4 py-2 text-left text-indigo-600 font-semibold text-sm">
                  Product
                </th>
                <th className="px-4 py-2 text-left text-indigo-600 font-semibold text-sm">
                  Best for
                </th>
                <th className="px-4 py-2 text-left text-indigo-600 font-semibold text-sm">
                  Price Range
                </th>
                <th className="px-4 py-2 text-left text-indigo-600 font-semibold text-sm">
                  Key Tools
                </th>
                <th className="px-4 py-2 text-left text-indigo-600 font-semibold text-sm">
                  Rating
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-2">Klein Tools 1000V Kit</td>
                <td className="px-4 py-2">Professionals</td>
                <td className="px-4 py-2">$80–$120</td>
                <td className="px-4 py-2">
                  Insulated screwdrivers, pliers, tester
                </td>
                <td className="px-4 py-2">⭐⭐⭐⭐⭐</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Dekopon 168-Piece</td>
                <td className="px-4 py-2">All-in-One</td>
                <td className="px-4 py-2">$50–$70</td>
                <td className="px-4 py-2">Multimeter, pliers, hammer, tape</td>
                <td className="px-4 py-2">⭐⭐⭐⭐</td>
              </tr>
              <tr>
                <td className="px-4 py-2">WORKPRO 100-Piece</td>
                <td className="px-4 py-2">Budget Users</td>
                <td className="px-4 py-2">$40–$60</td>
                <td className="px-4 py-2">Tester, screwdrivers, pliers</td>
                <td className="px-4 py-2">⭐⭐⭐⭐</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Amazon Basics 73-Piece</td>
                <td className="px-4 py-2">Beginners</td>
                <td className="px-4 py-2">$25–$40</td>
                <td className="px-4 py-2">Screwdrivers, tape, tester</td>
                <td className="px-4 py-2">⭐⭐⭐</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Protomer 210-Piece</td>
                <td className="px-4 py-2">Heavy-Duty</td>
                <td className="px-4 py-2">$90–$130</td>
                <td className="px-4 py-2">Multimeter, socket set, pliers</td>
                <td className="px-4 py-2">⭐⭐⭐⭐⭐</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-4">
            🛠️ Pro Tips for Small-Space Storage
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Use Wall Hooks – Hang pliers and cutters neatly.</li>
            <li>
              Drawer Organizers – Keep small items like tape and ties separate.
            </li>
            <li>Magnetic Tool Strip – Great for screwdrivers and testers.</li>
            <li>
              Labeling – Mark each tool slot in your case for quick access.
            </li>
            <li>
              Portable Cases – Always choose a kit with a compact carry case for
              easy storage.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            ⚡ Safety Tips for DIY Electrical Work
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Always Turn Off the Power at the breaker before working.</li>
            <li>Test Before You Touch with a voltage tester.</li>
            <li>Wear Rubber-Soled Shoes for added safety.</li>
            <li>Never work on Live Wires unless you’re experienced.</li>
            <li>Replace Damaged Cables Immediately to prevent fire hazards.</li>
          </ul>
        </div>
        {/* fqs */}
        <div className="w-full p-4">
          <h2 className="text-2xl font-bold mb-6 text-center">
            FAQs About DIY Plumbing Tools
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
        {/* final thoughts */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-4">✅ Final Buying Advice</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              If you’re a beginner DIY homeowner, go for the Amazon Basics
              Electrical Repair Kit—affordable and beginner-friendly.
            </li>
            <li>
              If you want a complete all-in-one solution, choose the Dekopro
              168-Piece Kit.
            </li>
            <li>
              If you’re serious about long-term DIY or professional work, invest
              in the Klein Tools 1000V Kit.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">📢 Call to Action</h2>
          <p className="mb-4">
            Don’t wait for the next electrical emergency. Investing in the right
            electrical repair kit for home use will save you time, money, and
            stress.
          </p>
          <a
            href="https://www.amazon.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 font-semibold underline"
          >
            👉 Click here to browse the best kits on Amazon now
          </a>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            ⚠️ Amazon Affiliate Disclaimer
          </h2>
          <p>
            As an Amazon Associate, I earn from qualifying purchases. This does
            not affect the price you pay but helps support this site.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ElectricalRepairKit;
