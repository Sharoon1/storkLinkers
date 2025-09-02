import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import React from "react";

const faqs = [
  {
    question: "Q1: Is budget equipment reliable?",
    answer:
      "👉 Yes—if certified. Avoid uncertified products for high-risk tasks.",
  },
  {
    question: "Q2: How do I choose the right glove size?",
    answer:
      "👉 Measure your palm circumference and compare it to the manufacturer’s sizing chart.",
  },
  {
    question: "Q3: Are safety glasses enough for chemicals?",
    answer: "👉 No. Use sealed goggles for splashes and liquids.",
  },
  {
    question: "Q4: How often should hearing protection be replaced?",
    answer:
      "👉 Foam plugs: after each use. Earmuffs: cushions yearly; replace the unit if distorted.",
  },
  {
    question: "Q5: What PPE is critical for electrical work?",
    answer:
      "👉 Insulating gloves, ANSI-rated safety glasses, and insulated tools.",
  },
];

function PestControlSpray() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 my-10">
      <div className="space-y-10">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-indigo-600">
            Safety Gear for DIY Repairs at Home — Buyer’s Guide & Top Amazon
            Picks
          </h1>

          <p>
            DIY projects are satisfying, but even small mistakes can lead to
            serious injuries. A splinter, a falling tool, or prolonged noise
            exposure can sideline your project—and your health. The right
            personal protective equipment (PPE) keeps you safe, saves money on
            medical bills, and ensures you finish your work on time.
          </p>

          <p>
            This guide highlights the essential safety equipment every U.S.
            homeowner should own, how to choose reliable products on Amazon, and
            which options stand out for protection and value.
          </p>

          <h2 className="text-2xl font-semibold text-indigo-600">
            Quick Overview
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Essential items: gloves, safety glasses, helmets, hearing
              protection, knee pads, and a first-aid kit.
            </li>
            <li>
              Key factors: OSHA/ANSI/ISEA certifications, proper fit, durable
              materials, and easy maintenance.
            </li>
            <li>
              Usage: inspect before each project, match to the task, replace
              when worn.
            </li>
            <li>
              Result: safer projects, fewer accidents, and long-term savings.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-indigo-600">
            Why Safety Equipment Matters
          </h2>
          <p>
            According to OSHA, many workshop accidents can be avoided with the
            right protective gear. Investing in PPE today safeguards your eyes,
            hearing, and joints while helping you avoid unnecessary expenses
            later.
          </p>

          <p>
            Amazon makes shopping easier by letting you check certifications,
            read reviews, and see product fit in one place. Always prioritize
            safety standards and protection over price.
          </p>
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-indigo-600 mb-4">
            Essential Home Safety Equipment
          </h2>

          {/* Work Gloves */}
          <h3 className="text-xl font-semibold mt-6 mb-2">
            1. Work Gloves — Protection for Hands and Grip
          </h3>
          <p>
            <strong>Why you need them:</strong> Hands face the highest risk of
            cuts, burns, and abrasions.
          </p>
          <p className="mt-2">
            <strong>Types:</strong>
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>
              General repairs: nitrile-coated gloves for grip and durability.
            </li>
            <li>
              Sharp tools: ANSI-rated cut-resistant gloves (levels A2–A5).
            </li>
            <li>
              Heat tasks: welding or soldering gloves with heat resistance.
            </li>
            <li>Electrical work: only use voltage-rated insulating gloves.</li>
          </ul>
          <p className="mt-2">
            <strong>Amazon Pick:</strong> 👉 Mechanix Wear Original Work Gloves
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>✅ Durable synthetic leather with a strong grip</li>
            <li>✅ Machine washable</li>
            <li>
              ⚠ Not cut-resistant—choose specialized gloves for sharp tasks
            </li>
          </ul>

          {/* Safety Glasses */}
          <h3 className="text-xl font-semibold mt-6 mb-2">
            2. Safety Glasses or Goggles — Protect Your Eyes
          </h3>
          <p>
            <strong>Why you need them:</strong> Eye injuries can occur instantly
            during drilling, grinding, or cutting.
          </p>
          <p className="mt-2">
            <strong>Options:</strong>
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>
              Safety glasses: ANSI Z87.1 certified, lightweight, best for
              impact.
            </li>
            <li>Goggles: sealed fit for chemical or dusty tasks.</li>
          </ul>
          <p className="mt-2">
            <strong>Amazon Pick:</strong> 👉 3M Virtua Safety Glasses, ANSI
            Z87.1
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>✅ Anti-fog coating</li>
            <li>✅ Wrap-around design for wide coverage</li>
            <li>⚠ Not sealed—goggles are safer for liquid chemicals</li>
          </ul>

          {/* Hard Hat */}
          <h3 className="text-xl font-semibold mt-6 mb-2">
            3. Hard Hat / Helmet — Shield from Overhead Hazards
          </h3>
          <p>
            <strong>Why you need it:</strong> Attic work, roofing, or areas with
            falling objects put your head at risk.
          </p>
          <p className="mt-2">
            <strong>Features to check:</strong>
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>ANSI Z89.1 compliance</li>
            <li>Adjustable suspension</li>
            <li>Lightweight build for comfort</li>
          </ul>
          <p className="mt-2">
            <strong>Amazon Pick:</strong> 👉 Pyramex Ridgeline Full Brim Hard
            Hat
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>✅ ANSI Z89.1 certified</li>
            <li>✅ Comfortable suspension system</li>
            <li>⚠ Slightly heavier than cap-style models</li>
          </ul>

          {/* Hearing Protection */}
          <h3 className="text-xl font-semibold mt-6 mb-2">
            4. Hearing Protection — Prevent Irreversible Hearing Loss
          </h3>
          <p>
            <strong>Why you need it:</strong> Prolonged exposure to saws,
            compressors, and grinders damages hearing permanently.
          </p>
          <p className="mt-2">
            <strong>Options:</strong>
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Earmuffs: higher NRR, reusable, ideal for long sessions.</li>
            <li>Foam plugs: disposable, convenient for short tasks.</li>
            <li>Silicone plugs: reusable, washable.</li>
          </ul>
          <p className="mt-2">
            <strong>Amazon Pick:</strong> 👉 Howard Leight by Honeywell Earmuffs
            (NRR 30 dB)
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>✅ High NRR for loud tools</li>
            <li>✅ Comfortable padded cushions</li>
            <li>⚠ Bulkier than earplugs for quick jobs</li>
          </ul>

          {/* Knee Pads */}
          <h3 className="text-xl font-semibold mt-6 mb-2">
            5. Knee Pads & Back Support — Prevent Strain and Fatigue
          </h3>
          <p>
            <strong>Why you need them:</strong> Flooring, tiling, and heavy
            lifting place stress on knees and the lower back.
          </p>
          <p className="mt-2">
            <strong>Amazon Pick:</strong> 👉 NoCry Professional Knee Pads
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>✅ Thick gel cushioning with secure straps</li>
            <li>✅ Comfortable for long kneeling sessions</li>
            <li>⚠ Straps may loosen after extended use</li>
          </ul>

          {/* First Aid */}
          <h3 className="text-xl font-semibold mt-6 mb-2">
            6. First-Aid Kit — Immediate Care When Needed
          </h3>
          <p>
            <strong>Why you need it:</strong> Even with precautions, cuts and
            burns can happen. A stocked first-aid kit allows fast treatment.
          </p>
          <p className="mt-2">
            <strong>Amazon Pick:</strong> 👉 First Aid Only 299-Piece Kit
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>✅ Compact and portable</li>
            <li>✅ Includes antiseptics, bandages, and burn care</li>
            <li>
              ⚠ Designed for small to medium injuries—add extra trauma supplies
              for larger workshops
            </li>
          </ul>
        </div>
        <div className="overflow-x-auto p-6 bg-white rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-indigo-600 mb-4">
            🔍 Quick Comparison Table
          </h2>
          <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
            <thead className="bg-indigo-600 text-white">
              <tr>
                <th className="px-4 py-2 text-left">Safety Gear</th>
                <th className="px-4 py-2 text-left">Amazon Pick</th>
                <th className="px-4 py-2 text-left">Key Features</th>
                <th className="px-4 py-2 text-left">Best For</th>
                <th className="px-4 py-2 text-left">Limitation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-2">Gloves</td>
                <td className="px-4 py-2">Mechanix Wear Original</td>
                <td className="px-4 py-2">
                  Durable synthetic leather, washable
                </td>
                <td className="px-4 py-2">General repairs</td>
                <td className="px-4 py-2">Not cut-resistant</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Safety Glasses</td>
                <td className="px-4 py-2">3M Virtua (ANSI Z87.1)</td>
                <td className="px-4 py-2">Anti-fog, wrap-around design</td>
                <td className="px-4 py-2">Impact protection</td>
                <td className="px-4 py-2">Not sealed</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Hard Hat</td>
                <td className="px-4 py-2">Pyramex Ridgeline Full Brim</td>
                <td className="px-4 py-2">
                  ANSI Z89.1 certified, suspension comfort
                </td>
                <td className="px-4 py-2">Roofing, attic, falling objects</td>
                <td className="px-4 py-2">Slightly heavier</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Hearing Protection</td>
                <td className="px-4 py-2">
                  Howard Leight Earmuffs (NRR 30 dB)
                </td>
                <td className="px-4 py-2">High noise reduction, padded</td>
                <td className="px-4 py-2">Loud tools, long sessions</td>
                <td className="px-4 py-2">Bulkier than plugs</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Knee Pads</td>
                <td className="px-4 py-2">NoCry Professional</td>
                <td className="px-4 py-2">Gel cushioning, secure straps</td>
                <td className="px-4 py-2">Flooring, tiling, kneeling</td>
                <td className="px-4 py-2">Straps may loosen</td>
              </tr>
              <tr>
                <td className="px-4 py-2">First-Aid Kit</td>
                <td className="px-4 py-2">First Aid Only (299 pcs)</td>
                <td className="px-4 py-2">
                  Compact, portable, antiseptics + bandages
                </td>
                <td className="px-4 py-2">Small–medium injuries</td>
                <td className="px-4 py-2">Needs extra trauma supplies</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* new section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-indigo-600 mb-4">
            Helpful Extras
          </h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              <strong>Dust masks/respirators:</strong> N95 for sanding and
              insulation; cartridge respirators for paint fumes.
            </li>
            <li>
              <strong>Face shields:</strong> extra protection during grinding or
              chiseling.
            </li>
            <li>
              <strong>High-visibility vests:</strong> ideal for outdoor projects
              near vehicles.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-indigo-600 mb-4">
            Smart Buying Checklist on Amazon
          </h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              ✔ <strong>Certifications:</strong> ANSI, OSHA, ISEA, or NIOSH
              compliance.
            </li>
            <li>
              ✔ <strong>Fit:</strong> always check size charts and real-user fit
              reviews.
            </li>
            <li>
              ✔ <strong>Materials:</strong> nitrile or reinforced synthetics for
              gloves; polycarbonate for lenses.
            </li>
            <li>
              ✔ <strong>Return policy:</strong> ensure flexibility in case the
              fit isn’t right.
            </li>
            <li>
              ✔ <strong>Latest reviews:</strong> product quality can change over
              time—always check recent feedback.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-indigo-600 mb-4">
            Maintenance Tips
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Clean lenses with mild soap; avoid harsh solvents.</li>
            <li>Wash gloves as instructed and replace when frayed.</li>
            <li>
              Replace hard hats after impacts or per manufacturer guidance.
            </li>
            <li>
              Discard foam earplugs after each use; clean earmuffs regularly.
            </li>
            <li>Restock your first-aid kit every six months.</li>
          </ul>
        </div>
        {/* fqs */}
        <div className="w-full p-4">
          <h2 className="text-2xl font-bold mb-6 text-center">FAQs</h2>
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
        {/*  */}

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-indigo-600 mb-4">
            Final Safety Checklist Before Starting
          </h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>✔ Gloves on</li>
            <li>✔ Glasses/goggles secured</li>
            <li>✔ Hearing protection in place</li>
            <li>✔ Tools inspected and functional</li>
            <li>✔ Workspace clear and well-lit</li>
            <li>✔ First-aid kit within reach</li>
          </ul>
          <div className="prose max-w-none p-6 bg-white rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4">
              Conclusion: Invest in Your Safety
            </h2>
            <p className="mb-4">
              The right tools make a project easier, but the right protective
              equipment ensures you stay healthy enough to enjoy the results.
              Amazon provides certified, well-reviewed options that fit every
              budget.
            </p>

            <p className="font-semibold text-lg">
              👉 Call to Action:{" "}
              <span className="text-indigo-600">
                Explore trusted home safety gear on Amazon
              </span>
              . Today, replace worn-out items, and treat PPE as an essential
              part of your toolkit—because protecting your health is the best
              investment you can make.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PestControlSpray;
