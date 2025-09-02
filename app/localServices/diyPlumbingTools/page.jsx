import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import React from "react";

const faqs = [
  {
    question: "Q1: Are DIY plumbing tools expensive?",
    answer:
      "Not at all. Most essentials like plungers, Teflon tape, and basic wrenches cost under $20.",
  },
  {
    question: "Q2: Can I damage my pipes by using these tools?",
    answer:
      "Only if you overtighten or use the wrong size. Stick to beginner-friendly tools and you’ll be safe.",
  },
  {
    question: "Q3: Do I still need a plumber for major repairs?",
    answer:
      "Yes, DIY tools are great for small fixes. For burst pipes, water heater issues, or sewer line problems, call a licensed plumber.",
  },
  {
    question: "Q4: Where can I buy DIY plumbing tools?",
    answer: "Amazon offers affordable, top-rated tools with fast delivery.",
  },
];

function DIYPlumbingTools() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 my-10">
      <div className="space-y-10">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-indigo-600">
            Best Tools for DIY Plumbing Fixes at Home (Amazon Picks)
          </h2>

          <p className="text-gray-700 leading-relaxed">
            If you’ve ever dealt with a dripping faucet, clogged drain, or leaky
            pipe, you know how frustrating plumbing issues can be. Hiring a
            plumber is often expensive, and not every fix requires professional
            help. The good news? With the right DIY plumbing tools (many of
            which are affordable and available on Amazon), you can handle common
            home plumbing repairs yourself—saving both money and time.
          </p>

          <p className="text-gray-700 leading-relaxed">
            In this guide, we’ll cover:
          </p>

          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Must-have DIY plumbing tools Amazon shoppers love</li>
            <li>Product recommendations (with pros, cons, and reviews)</li>
            <li>Comparison tables for easy decision-making</li>
            <li>Step-by-step pro tips for safe repairs</li>
            <li>FAQs to answer common questions</li>
          </ul>

          <p className="text-gray-700 leading-relaxed">
            Whether you’re a budget-conscious homeowner or a renter looking for
            quick fixes, this guide will help you build the perfect DIY plumbing
            toolkit.
          </p>
        </div>
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-indigo-600">
              Why DIY Plumbing Tools Are Worth It
            </h2>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>
                <strong>Save Money:</strong> Avoid high service fees for minor
                repairs.
              </li>
              <li>
                <strong>Convenience:</strong> Quick fixes without waiting for a
                plumber.
              </li>
              <li>
                <strong>Confidence:</strong> Learn practical skills while
                maintaining your home.
              </li>
              <li>
                <strong>Emergency-ready:</strong> Be prepared when something
                breaks unexpectedly.
              </li>
            </ul>
            <p className="mt-3 text-gray-700">
              💡 <strong>Pro Tip:</strong> Start small—purchase essential tools
              first, then expand your kit as you gain confidence.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-indigo-600">
              Essential DIY Plumbing Tools (Amazon Picks)
            </h2>
            <p className="mt-2 text-gray-700">
              Here’s a breakdown of must-have plumbing tools for home fixes:
            </p>

            {/* Tool 1 */}
            <div className="mt-5">
              <h3 className="text-xl font-semibold">
                1. Adjustable Pipe Wrench
              </h3>
              <p className="mt-1 text-gray-700">
                The classic plumber’s tool for gripping and turning pipes.
              </p>
              <p className="mt-2">
                <strong>Best Pick on Amazon:</strong> RIDGID Heavy-Duty Straight
                Pipe Wrench
              </p>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>
                  <strong>Pros:</strong> Durable, strong grip, lifetime warranty
                </li>
                <li>
                  <strong>Cons:</strong> Heavier than cheaper models
                </li>
              </ul>
              <p className="mt-1">
                <strong>Why Buy:</strong> Perfect for loosening stubborn pipes
                and fittings
              </p>
              <a href="#" className="text-indigo-600 font-semibold">
                👉 Check Price on Amazon
              </a>
            </div>

            {/* Tool 2 */}
            <div className="mt-5">
              <h3 className="text-xl font-semibold">2. Basin Wrench</h3>
              <p className="mt-1 text-gray-700">
                Ideal for those hard-to-reach nuts under sinks.
              </p>
              <p className="mt-2">
                <strong>Amazon Favorite:</strong> RIDGID Model 1017 Basin Wrench
              </p>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>
                  <strong>Pros:</strong> Long reach, swiveling jaw
                </li>
                <li>
                  <strong>Cons:</strong> Learning curve for beginners
                </li>
              </ul>
              <p className="mt-1">
                <strong>Why Buy:</strong> Essential for faucet repairs
              </p>
              <a href="#" className="text-indigo-600 font-semibold">
                👉 See on Amazon
              </a>
            </div>

            {/* Tool 3 */}
            <div className="mt-5">
              <h3 className="text-xl font-semibold">
                3. Plumber’s Tape (Teflon Tape)
              </h3>
              <p className="mt-1 text-gray-700">
                A budget-friendly essential for sealing threaded connections.
              </p>
              <p className="mt-2">
                <strong>Amazon Bestseller:</strong> Dixon Valve Teflon PTFE
                Thread Sealant Tape
              </p>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>
                  <strong>Pros:</strong> Inexpensive, prevents leaks, easy to
                  apply
                </li>
                <li>
                  <strong>Cons:</strong> None (always handy to have around)
                </li>
              </ul>
              <p className="mt-1">
                <strong>Why Buy:</strong> Stops leaks before they start
              </p>
              <a href="#" className="text-indigo-600 font-semibold">
                👉 Get it on Amazon
              </a>
            </div>

            {/* Tool 4 */}
            <div className="mt-5">
              <h3 className="text-xl font-semibold">
                4. Hand Auger (Plumber’s Snake)
              </h3>
              <p className="mt-1 text-gray-700">
                Great for unclogging stubborn drains without harsh chemicals.
              </p>
              <p className="mt-2">
                <strong>Top Amazon Choice:</strong> RIDGID Power Spin Drain
                Cleaner
              </p>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>
                  <strong>Pros:</strong> Clears clogs up to 25 feet, easy
                  hand-crank design
                </li>
                <li>
                  <strong>Cons:</strong> Manual effort required
                </li>
              </ul>
              <p className="mt-1">
                <strong>Why Buy:</strong> Safer and more effective than chemical
                drain cleaners
              </p>
              <a href="#" className="text-indigo-600 font-semibold">
                👉 Buy on Amazon
              </a>
            </div>

            {/* Tool 5 */}
            <div className="mt-5">
              <h3 className="text-xl font-semibold">
                5. Plunger (Cup + Flange)
              </h3>
              <p className="mt-1 text-gray-700">
                Every home needs at least one.
              </p>
              <p className="mt-2">
                <strong>Amazon Bestseller:</strong> Neiko Toilet Plunger with
                Aluminum Handle
              </p>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>
                  <strong>Pros:</strong> Heavy-duty suction, ergonomic handle
                </li>
                <li>
                  <strong>Cons:</strong> Takes up space in small bathrooms
                </li>
              </ul>
              <p className="mt-1">
                <strong>Why Buy:</strong> First line of defense against clogged
                toilets and sinks
              </p>
              <a href="#" className="text-indigo-600 font-semibold">
                👉 Order on Amazon
              </a>
            </div>

            {/* Tool 6 */}
            <div className="mt-5">
              <h3 className="text-xl font-semibold">6. Hacksaw</h3>
              <p className="mt-1 text-gray-700">
                For cutting through pipes, bolts, and plastic fittings.
              </p>
              <p className="mt-2">
                <strong>Best Value on Amazon:</strong> Stanley 12-Inch Hacksaw
              </p>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>
                  <strong>Pros:</strong> Affordable, replaceable blades
                </li>
                <li>
                  <strong>Cons:</strong> Requires effort for thicker pipes
                </li>
              </ul>
              <p className="mt-1">
                <strong>Why Buy:</strong> Multipurpose tool for plumbing and
                general DIY work
              </p>
              <a href="#" className="text-indigo-600 font-semibold">
                👉 Check Price
              </a>
            </div>

            {/* Tool 7 */}
            <div className="mt-5">
              <h3 className="text-xl font-semibold">
                7. Tongue-and-Groove Pliers (Channel Locks)
              </h3>
              <p className="mt-1 text-gray-700">
                A versatile tool for gripping, twisting, and tightening.
              </p>
              <p className="mt-2">
                <strong>Amazon Favorite:</strong> Channellock 12-Inch Tongue &
                Groove Pliers
              </p>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>
                  <strong>Pros:</strong> Reliable grip, durable steel
                </li>
                <li>
                  <strong>Cons:</strong> Heavier than smaller pliers
                </li>
              </ul>
              <p className="mt-1">
                <strong>Why Buy:</strong> Handles multiple plumbing tasks with
                ease
              </p>
              <a href="#" className="text-indigo-600 font-semibold">
                👉 View on Amazon
              </a>
            </div>
          </div>
        </div>
        <div className="my-10">
          <h2 className="text-2xl font-bold text-indigo-600 mb-4">
            Comparison Table: Best DIY Plumbing Tools on Amazon
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 rounded-lg shadow-sm">
              <thead className="bg-indigo-600 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Tool</th>
                  <th className="px-4 py-3 text-left">Best Amazon Pick</th>
                  <th className="px-4 py-3 text-left">Price Range</th>
                  <th className="px-4 py-3 text-left">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3">Pipe Wrench</td>
                  <td className="px-4 py-3">RIDGID Heavy-Duty Wrench</td>
                  <td className="px-4 py-3">$$</td>
                  <td className="px-4 py-3">Loosening/tightening pipes</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Basin Wrench</td>
                  <td className="px-4 py-3">RIDGID Model 1017</td>
                  <td className="px-4 py-3">$$</td>
                  <td className="px-4 py-3">Faucet & sink repairs</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Teflon Tape</td>
                  <td className="px-4 py-3">Dixon Valve PTFE Tape</td>
                  <td className="px-4 py-3">$</td>
                  <td className="px-4 py-3">Leak prevention</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Hand Auger</td>
                  <td className="px-4 py-3">RIDGID Power Spin Drain Cleaner</td>
                  <td className="px-4 py-3">$$</td>
                  <td className="px-4 py-3">Clogged drains</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Plunger</td>
                  <td className="px-4 py-3">Neiko Heavy-Duty Plunger</td>
                  <td className="px-4 py-3">$</td>
                  <td className="px-4 py-3">Toilets & sinks</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Hacksaw</td>
                  <td className="px-4 py-3">Stanley 12-Inch Hacksaw</td>
                  <td className="px-4 py-3">$</td>
                  <td className="px-4 py-3">Cutting pipes</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Tongue & Groove Pliers</td>
                  <td className="px-4 py-3">Channellock Pliers</td>
                  <td className="px-4 py-3">$$</td>
                  <td className="px-4 py-3">General plumbing tasks</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="space-y-6">
          {/* Section Title */}
          <h2 className="text-3xl font-bold text-indigo-600">
            Pro Tips for DIY Plumbing Repairs
          </h2>

          {/* Pro Tips List */}
          <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
            <li>Always shut off the water before working on pipes.</li>
            <li>Keep towels and a bucket nearby to catch water spills.</li>
            <li>Use Teflon tape on threaded connections to prevent leaks.</li>
            <li>Don’t overtighten fittings—hand-tight is often enough.</li>
            <li>
              For stubborn clogs, use a{" "}
              <span className="font-medium">hand auger</span> before chemicals.
            </li>
          </ul>

          {/* Common Fixes Section */}
          <h3 className="text-2xl font-semibold text-indigo-600">
            Common Plumbing Fixes You Can Do Yourself
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white shadow-md rounded-2xl p-5 border">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                Fix a Leaky Faucet
              </h4>
              <p className="text-gray-600">
                Use a basin wrench + replacement washers.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-2xl p-5 border">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                Unclog a Sink Drain
              </h4>
              <p className="text-gray-600">
                Try a hand auger or plunger for safe unclogging.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-2xl p-5 border">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                Replace a Showerhead
              </h4>
              <p className="text-gray-600">
                Use an adjustable wrench + Teflon tape.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-2xl p-5 border">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                Tighten a Loose Toilet Bolt
              </h4>
              <p className="text-gray-600">
                Channel lock pliers get the job done quickly.
              </p>
            </div>
          </div>

          {/* Extra Pro Tip */}
          <div className="bg-indigo-50 border-l-4 border-indigo-600 p-4 rounded-xl shadow-sm">
            <p className="text-gray-700">
              💡 <span className="font-semibold">Pro Tip:</span> Always test
              your repair by slowly turning the water back on to check for leaks
              before cleaning up.
            </p>
          </div>
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
        <div className=" space-y-6">
          {/* Section Title */}
          <h2 className="text-3xl font-bold text-indigo-600">
            Final Thoughts: Build Your DIY Plumbing Toolkit Today
          </h2>

          {/* Paragraph */}
          <p className="text-gray-700 leading-relaxed">
            Owning the right DIY plumbing tools is like having an insurance
            policy for your home— affordable, reliable, and always ready when
            you need them. Instead of waiting (and paying) for a plumber, you
            can solve common problems yourself in minutes.
          </p>

          {/* Checklist */}
          <ul className="list-none space-y-3 text-gray-700">
            <li>
              ✅ Start with the basics (plunger, Teflon tape, adjustable
              wrench).
            </li>
            <li>
              ✅ Upgrade as needed with a basin wrench, auger, and pliers.
            </li>
            <li>
              ✅ Buy from trusted brands on Amazon for durability and
              convenience.
            </li>
          </ul>

          {/* CTA */}
          <div className="bg-indigo-50 border-l-4 border-indigo-600 p-5 rounded-xl shadow-md">
            <p className="text-gray-800 font-medium">
              👉 Ready to save money and take control of your home repairs?
            </p>
            <a
              href="#"
              className="mt-3 inline-block bg-indigo-600 text-white px-5 py-3 rounded-xl shadow hover:bg-indigo-700 transition"
            >
              Shop the Best DIY Plumbing Tools on Amazon Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DIYPlumbingTools;
