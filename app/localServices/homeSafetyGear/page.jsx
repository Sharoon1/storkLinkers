import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import Head from "next/head";
import Image from "next/image";
import React from "react";

// UPDATED FAQs: More detailed, authoritative, and helpful answers
const faqs = [
  {
    question: "What’s the most important home safety gear for DIY?",
    answer:
      "The two non-negotiables are eye protection and gloves. Eye injuries from flying debris (wood, metal, etc.) happen in an instant and are often permanent. Gloves protect you from the most common injuries: cuts, scrapes, and abrasions. For any power tool use, hearing protection becomes equally important to prevent irreversible, cumulative hearing loss. Always start with ANSI-rated glasses and task-appropriate gloves.",
  },
  {
    question: "How do I know if gloves protect against electrical shock?",
    answer:
      "This is critical: Standard work gloves (leather, nitrile, etc.) do NOT protect against electrical shock. You must use special, insulated rubber gloves that are explicitly voltage-rated (e.g., 'Class 0' for up to 1,000V) and tested to specific ASTM/IEC standards. For any DIY home wiring, your safest and only approved method is to always turn off the power at the breaker first.",
  },
  {
    question: "How often should I change my hearing protection?",
    answer:
      "It depends on the type. Disposable foam earplugs are designed for one-time use, as they lose their ability to expand properly and can harbor bacteria. Reusable flanged plugs should be cleaned regularly and replaced when they become stiff or torn. For earmuffs, you should replace the foam/gel cushions every 6-12 months (or sooner if they become cracked, hard, or deformed), as this is essential for maintaining a proper sound-blocking seal.",
  },
  {
    question: "Can I use safety glasses instead of goggles for chemical work?",
    answer:
      "No. Safety glasses, even wrap-around styles, are designed to protect from impacts (flying debris). For handling any liquid chemicals, solvents, paint sprays, or even fine airborne dust, you must use chemical splash goggles. These create a complete seal around your eyes to prevent liquids or fumes from splashing up, under, or around the lenses, which glasses cannot do.",
  },
];

function HomeSafetyGear() {
  return (
    <>
      <Head>
        <title>
          Best Safety Gear for DIY Home Repairs – 2025 Amazon Picks & Buyer’s
          Guide
        </title>
        <meta
          name="description"
          content="Don't start your next project without the best DIY home repair safety gear. Read our expert guide to top-rated gloves, ANSI-certified goggles, hard hats, hearing protection, and first-aid kits available on Amazon."
        />
        <link
          rel="canonical"
          href="https://www.storklinkers.com/localServices/homeSafetyGear"
        />
      </Head>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 my-10">
        <div className="space-y-10">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-black">
              Safety Gear for DIY Repairs at Home — Ultimate Amazon Buyer’s
              Guide
            </h1>
            <p className="mb-4">
              Whether you’re a weekend warrior tightening a leaky pipe, learning
              to rewire a light switch, or building a new set of shelves, having
              the right protective equipment is non-negotiable. It's the one
              thing that stands between a simple task and a serious,
              life-altering injury. This expert-backed guide is designed for
              home DIYers (from beginners to seasoned pros) and cuts through the
              noise. We'll explore the essential categories of home safety gear,
              highlight top-rated Amazon picks based on real-world use, and
              provide pro-tips to ensure your next project is completed safely,
              successfully, and without a single trip to the ER.
            </p>
            <div className="h-px bg-gray-200 w-full" />
            <h2 className="text-2xl font-bold text-black">
              Quick Overview — What This Guide Covers
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Why this gear is a critical investment, not just an expense
              </li>
              <li>The 6 essential safety categories every DIYer must have</li>
              <li>
                Our top-rated Amazon picks for each category (with pros/cons)
              </li>
              <li>
                How to understand safety standards (ANSI/OSHA) for real
                protection
              </li>
              <li>Expert tips on care, maintenance, and proper use</li>
              <li>Answers to your most common safety gear questions</li>
            </ul>
            <div className="h-px bg-gray-200 w-full" />
            <h2 className="text-2xl font-bold text-black">
              Why Invest in Home Safety Gear from Amazon Products?
            </h2>
            <p className="mb-2">
              Every year, thousands of DIY projects end in preventable
              injuries—nasty cuts, chemical burns, eye damage from flying
              debris, permanent hearing loss from power tools, or worse. The
              cost of a single incident in time, money, and health far outweighs
              the small investment in quality protective gear.
            </p>
            <p>
              Buying thoroughly-tested safety gear from a trusted marketplace
              like Amazon gives you two massive advantages: transparent user
              reviews from people who've actually used the product, and easy
              access to certified, compliant equipment. When it comes to items
              that must perform under pressure (like gloves, goggles, and hard
              hats), Amazon’s best-seller lists and customer photos are
              invaluable for finding reliable, top-rated, and expert-recommended
              options that fit your budget.
            </p>
          </div>
          {/* Must have categoires */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Must-Have Categories (And Why Each Matters)
            </h2>
            <div className="space-y-6">
              {/* 1 */}
              <div className="flex flex-col-reverse md:flex-row gap-5 bg-indigo-50 border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
                <div className="md:w-2/3">
                  <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                    1. Protective Gloves — Keep Hands Safe and Functional
                  </h3>
                  <p className="mb-4">
                    Your hands are your most valuable tool. Protective gloves
                    are your first line of defense against cuts, punctures,
                    chemical irritation, and painful abrasions, all while
                    (ideally) maintaining the dexterity you need for small
                    fasteners. For general tasks, look for a balance: top-rated
                    nitrile-coated gloves offer fantastic grip and protection.
                    For heavier work, look for ANSI/ISEA cut-level ratings
                    (e.g., A2-A4 for most DIY tasks).
                  </p>
                  <p className="mb-4">
                    <span className="font-semibold text-indigo-600">
                      Top uses:
                    </span>
                    Carpentry, plumbing (handling pipes), general assembly, and
                    handling sharp materials. Never use standard gloves for live
                    electrical work.
                  </p>
                  <a
                    href="https://amzn.to/47rLpVM"
                    className="inline-block bg-indigo-600 my-2 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    👉 See Best Work Gloves on Amazon
                  </a>
                </div>
                <div className="md:w-1/3 flex items-center justify-center">
                  <img
                    src="/homeServices/workGloves.webp"
                    alt="Durable work gloves"
                    width={1400}
                    height={1000}
                    className="rounded-lg object-cover w-full h-auto shadow-md"
                  />
                </div>
              </div>
              {/* 2 */}
              <div className="flex flex-col-reverse md:flex-row gap-5 bg-indigo-50 border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
                <div className="md:w-2/3">
                  <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                    2. Eye Protection — The Simplest Way to Avoid Permanent
                    Damage
                  </h3>
                  <p className="mb-4">
                    This is the simplest and most crucial way to avoid
                    permanent, life-changing damage. A single speck of metal,
                    wood, or a splash of solvent traveling at high speed can
                    blind you. Always choose safety glasses or goggles that are
                    ANSI Z87.1-rated—this certification is non-negotiable, as it
                    guarantees they've passed high-impact testing. Top-rated
                    Amazon picks often feature wrap-around designs, anti-fog
                    coatings (a must-have for comfort), and anti-scratch lenses
                    for a longer lifespan.
                  </p>
                  <a
                    href="https://amzn.to/4osQpRz"
                    className="inline-block bg-indigo-600 my-3 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🛒 Shop Top-Rated Safety Glasses
                  </a>
                </div>
                <div className="md:w-1/3 flex items-center justify-center">
                  <img
                    src="/homeServices/Eyeprotection.webp"
                    alt="Eye protection safety glasses"
                    width={1400}
                    height={1000}
                    className="rounded-lg object-cover w-full h-auto shadow-md"
                  />
                </div>
              </div>
              {/* 3 */}
              <div className="flex flex-col-reverse md:flex-row gap-5 bg-indigo-50 border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
                <div className="md:w-2/3">
                  <h3 className="text-xl text-indigo-600 font-semibold mb-2">
                    3. Head Protection (Hard Hats/Helmets)
                  </h3>
                  <p className="mb-4">
                    Often overlooked for 'small' jobs, head protection is
                    critical when working in attics, under sinks, or near
                    ladders where a falling tool is a risk. A simple bump
                    against a rafter can be disorienting, and a falling object
                    can be catastrophic. For most home projects, a Type I hard
                    hat (which protects from top-impact) with a comfortable
                    4-point or 6-point suspension system is perfect. Top-rated
                    brands on Amazon like DEWALT and Pyramex offer affordable,
                    ANSI-compliant models that are lightweight and adjustable.
                  </p>
                  <a
                    href="https://amzn.to/49iV7MH"
                    className="inline-block bg-indigo-600 my-2 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    👉 Browse Affordable Hard Hats
                  </a>
                </div>
                <div className="md:w-1/3 flex items-center justify-center">
                  <img
                    src="/homeServices/HardHat.webp"
                    alt="Hard hat for head protection"
                    width={1400}
                    height={1000}
                    className="rounded-lg object-cover w-full h-auto shadow-md"
                  />
                </div>
              </div>
              {/* 4 */}
              <div className="flex flex-col-reverse md:flex-row gap-5 bg-indigo-50 border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
                <div className="md:w-2/3">
                  <h3 className="text-xl text-indigo-600 font-semibold mb-2">
                    4. Hearing Protection (Earmuffs or Plugs)
                  </h3>
                  <p className="mb-4">
                    That 'ringing' in your ears after using a circular saw or
                    shop-vac? That's permanent damage. Hearing loss from noise
                    is cumulative and irreversible. Always use protection when
                    operating power tools. Look for the Noise Reduction Rating
                    (NRR) on the packaging. Earmuffs are fantastic (and easy to
                    slip on/off), while foam earplugs can offer a higher NRR and
                    are great for hot weather or wearing with a hard hat.
                    High-NRR models are affordable and widely available on
                    Amazon.
                  </p>
                  <a
                    href="https://amzn.to/47GWPWZ"
                    className="inline-block bg-indigo-600 my-2 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    👉 Check Best Earmuffs & Earplugs
                  </a>
                </div>
                <div className="md:w-1/3 flex items-center justify-center">
                  <img
                    src="/homeServices/earmuffs.webp"
                    alt="Hearing protection earmuffs"
                    width={1400}
                    height={1000}
                    className="rounded-lg object-cover w-full h-auto shadow-md"
                  />
                </div>
              </div>
              {/* 5 */}
              <div className="flex flex-col-reverse md:flex-row gap-5 bg-indigo-50 border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
                <div className="md:w-2/3">
                  <h3 className="text-xl text-indigo-600 font-semibold mb-2">
                    5. Knee & Back Support (Knee Pads, Braces)
                  </h3>
                  <p className="mb-4">
                    Any project that has you kneeling for more than a few
                    minutes (think flooring, tiling, painting baseboards, or
                    under-sink plumbing) will destroy your knees. Quality knee
                    pads aren't just for comfort; they prevent chronic pain and
                    joint damage. Look for designs with soft gel or high-density
                    foam cushions and a hard-cap exterior, which allows you to
                    pivot and slide easily. This small investment makes long
                    work sessions far safer and more productive.
                  </p>
                  <a
                    href="https://amzn.to/4hrsuPs"
                    className="inline-block bg-indigo-600 my-2 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    👉 Shop Best Knee Pads on Amazon
                  </a>
                </div>
                <div className="md:w-1/3 flex items-center justify-center">
                  <img
                    src="/homeServices/KneePads.webp"
                    alt="Knee pads for support"
                    width={1400}
                    height={1000}
                    className="rounded-lg object-cover w-full h-auto shadow-md"
                  />
                </div>
              </div>
              {/* 6 */}
              <div className="flex flex-col-reverse md:flex-row gap-5 bg-indigo-50 border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
                <div className="md:w-2/3">
                  <h3 className="text-xl text-indigo-600 font-semibold mb-2">
                    6. First Aid & Emergency Gear
                  </h3>
                  <p className="mb-4">
                    Accidents happen even to the most careful DIYers. A
                    well-stocked, organized first aid kit is essential for
                    managing small cuts, burns, or punctures immediately and
                    effectively. A comprehensive kit designed for a home or
                    workshop should include more than just bandages—look for
                    antiseptic wipes, burn gel, sterile gauze, and trauma
                    dressings. Expert-recommended brands like Surviveware and
                    Protect Life are top-rated on Amazon because their kits are
                    well-organized and contain high-quality, practical supplies.
                  </p>
                  <a
                    href="https://amzn.to/4oBRVQP"
                    className="inline-block bg-indigo-600 my-2 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    👉 See Best First Aid Kits on Amazon{" "}
                  </a>
                </div>
                <div className="md:w-1/3 flex items-center justify-center">
                  <img
                    src="/homeServices/FirstAidKit.webp"
                    alt="First aid kit for emergencies"
                    width={1400}
                    height={1000}
                    className="rounded-lg object-cover w-full h-auto shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* "top categories" */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Top Picks for Your DIY Workshop
            </h2>
            <div className="space-y-6">
              {/* 1. Gloves */}
              <div className="flex flex-col-reverse md:flex-row gap-5 bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition overflow-hidden">
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold text-indigo-600 mb-4">
                    Gloves — Top All-Around Pick
                  </h3>
                  <p className="mb-4">
                    Highly-rated nitrile-coated work gloves (from brands like
                    Carhartt or DEX FIT) offer the best balance of dexterity and
                    protection for most DIY tasks. The nitrile palm provides a
                    non-slip grip on tools and materials, while the breathable
                    knit back keeps your hands comfortable. Reviewers
                    consistently praise their durability and 'second-skin' feel,
                    making them a go-to all-around option.
                  </p>
                  <p className="mb-4">
                    <strong className="text-indigo-600">Why buy:</strong> The
                    perfect balance of grip, sensitivity, and protection for
                    carpentry, plumbing, and general workshop tasks.
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-6">
                    <li>
                      <strong className="text-indigo-600">Pros:</strong>{" "}
                      Excellent dexterity and grip, breathable, surprisingly
                      durable for their thickness.
                    </li>
                    <li>
                      <strong className="text-indigo-600">Cons:</strong> Not for
                      heavy-duty demo (use leather); not insulated for live
                      electrical work.
                    </li>
                  </ul>
                  <a
                    href="https://amzn.to/47dClFm"
                    className="inline-block bg-indigo-600 my-2 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    👉 Buy Top-Rated Nitrile Gloves on Amazon
                  </a>
                </div>
                <div className="md:w-1/3 flex items-center justify-center">
                  <img
                    src="/homeServices/gloves.webp"
                    alt="Top-rated nitrile-coated work gloves"
                    width={1400}
                    height={1000}
                    className="rounded-lg object-cover w-full h-auto shadow-md"
                  />
                </div>
              </div>

              {/* 2. Eye Protection */}
              <div className="flex flex-col-reverse md:flex-row gap-5 bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition overflow-hidden">
                <div className="md:w-2/3">
                  <h3 className="text-xl text-indigo-600 font-bold mb-4">
                    Eye Protection — Top Pick
                  </h3>
                  <p className="mb-4">
                    The NoCry wrap-around safety glasses are an Amazon
                    best-seller for a reason. They are fully ANSI Z87.1
                    certified for impact resistance, lightweight, and feature an
                    effective anti-fog/anti-scratch coating. They provide
                    excellent side protection and are comfortable enough to wear
                    for extended projects without slipping or pinching.
                  </p>
                  <p className="mb-4">
                    <strong className="text-indigo-600">Why buy:</strong>{" "}
                    Affordable, certified, and comfortable impact protection
                    that you'll actually want to wear.
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-6">
                    <li>
                      <strong className="text-indigo-600">Pros:</strong>{" "}
                      Lightweight, ANSI Z87.1 certified, effective anti-fog and
                      anti-scratch coating.
                    </li>
                    <li>
                      <strong className="text-indigo-600">Cons:</strong> Not
                      fully sealed for chemical splashes—use dedicated goggles
                      for liquid work.
                    </li>
                  </ul>
                  <a
                    href="https://amzn.to/4oY84QX"
                    className="inline-block bg-indigo-600 my-2 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    👉 Check Price on Amazon
                  </a>
                </div>
                <div className="md:w-1/3 flex items-center justify-center">
                  <img
                    src="/homeServices/glasses.webp"
                    alt="NoCry wrap-around safety glasses"
                    width={1400}
                    height={1000}
                    className="rounded-lg object-cover w-full h-auto shadow-md"
                  />
                </div>
              </div>

              {/* 3. Hard Hats */}
              <div className="flex flex-col-reverse md:flex-row gap-5 bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition overflow-hidden">
                <div className="md:w-2/3">
                  <h3 className="text-xl text-indigo-600 font-bold mb-4">
                    Hard Hats — Top Pick
                  </h3>
                  <p className="mb-4">
                    Both DEWALT cap-style and Pyramex full-brim hard hats are
                    top-rated, ANSI-compliant options perfect for the home
                    workshop. The key feature to look for is a ratcheting 4- or
                    6-point suspension system, which allows for a perfectly snug
                    and comfortable fit with a simple twist of a knob. Full-brim
                    designs offer added sun and side protection for outdoor
                    projects.
                  </p>
                  <p className="mb-4">
                    <strong className="text-indigo-600">Why buy:</strong>{" "}
                    Essential, affordable impact protection for any overhead,
                    ladder, or attic work.
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-6">
                    <li>
                      <strong className="text-indigo-600">Pros:</strong> Easily
                      adjustable ratchet suspension for comfort, ANSI-compliant,
                      accessory slots.
                    </li>
                    <li>
                      <strong className="text-indigo-600">Cons:</strong> Can
                      feel a bit bulky for simple, ground-level tasks;
                      suspension should be inspected regularly.
                    </li>
                  </ul>
                  <a
                    href="https://amzn.to/3WUFHqz"
                    className="inline-block bg-indigo-600 my-2 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    👉 Buy DEWALT Hard Hat on Amazon{" "}
                  </a>
                </div>
                <div className="md:w-1/3 flex items-center justify-center">
                  <img
                    src="/homeServices/hat.webp"
                    alt="DEWALT cap-style hard hat"
                    width={1400}
                    height={1000}
                    className="rounded-lg object-cover w-full h-auto shadow-md"
                  />
                </div>
              </div>

              {/* 4. Hearing Protection */}
              <div className="flex flex-col-reverse md:flex-row gap-5 bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition overflow-hidden">
                <div className="md:w-2/3">
                  <h3 className="text-xl text-indigo-600 font-bold mb-4">
                    Hearing Protection — Top Pick
                  </h3>
                  <p className="mb-4">
                    When you need serious noise reduction for power tools, the
                    Decibel Defense Professional Safety Earmuffs are a top-tier
                    choice. They boast an exceptionally high Noise Reduction
                    Rating (NRR) of 37 dB, effectively silencing the dangerously
                    loud noise from saws, grinders, and mowers. They are
                    comfortable, durable, and provide a secure seal around the
                    ear.
                  </p>
                  <p className="mb-4">
                    <strong className="text-indigo-600">Why buy:</strong>{" "}
                    Provides maximum, expert-recommended hearing protection for
                    the loudest tools in your workshop.
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-6">
                    <li>
                      <strong className="text-indigo-600">Pros:</strong>{" "}
                      Extremely high 37 NRR, very comfortable for long sessions,
                      durable and reusable.
                    </li>
                    <li>
                      <strong className="text-indigo-600">Cons:</strong> Bulkier
                      than foam plugs and can feel warm in hot weather.
                    </li>
                  </ul>
                  <a
                    href="https://amzn.to/4htFNit"
                    className="inline-block bg-indigo-600 my-2 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    👉 Shop Safety Earmuffs on Amazon
                  </a>
                </div>
                <div className="md:w-1/3 flex items-center justify-center">
                  <img
                    src="/homeServices/Topearmuffs.webp"
                    alt="Decibel Defense safety earmuffs"
                    width={1400}
                    height={1000}
                    className="rounded-lg object-cover w-full h-auto shadow-md"
                  />
                </div>
              </div>

              {/* 5. Knee Pads */}
              <div className="flex flex-col-reverse md:flex-row gap-5 bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition overflow-hidden">
                <div className="md:w-2/3">
                  <h3 className="text-xl text-indigo-600 font-bold mb-4">
                    Knee Pads — Top Pick
                  </h3>
                  <p className="mb-4">
                    Professional-grade knee pads from brands like NoCry and
                    BALENNZ are Amazon best-sellers because they work. Unlike
                    cheap foam pads that flatten over time, these use a
                    combination of{" "}
                    <strong>thick gel and high-density foam</strong> to cradle
                    the knee, absorbing impact and distributing pressure. A
                    durable hard-cap shell lets you move easily on various
                    surfaces.
                  </p>
                  <p className="mb-4">
                    <strong className="text-indigo-600">Why buy:</strong>{" "}
                    Prevents chronic knee pain and provides superior,
                    long-lasting comfort for any project that involves kneeling.
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-6">
                    <li>
                      <strong className="text-indigo-600">Pros:</strong>{" "}
                      Excellent gel/foam cushioning, durable hard-cap, secure
                      straps that stay in place.
                    </li>
                    <li>
                      <strong className="text-indigo-600">Cons:</strong> Straps
                      can be tricky to adjust perfectly; can be bulky.
                    </li>
                  </ul>
                  <a
                    href="https://amzn.to/47IP176"
                    className="inline-block bg-indigo-600 my-2 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    👉 Check Amazon Price
                  </a>
                </div>
                <div className="md:w-1/3 flex items-center justify-center">
                  <img
                    src="/homeServices/Topkneepads.webp"
                    alt="Professional gel-cushioned knee pads"
                    width={1400}
                    height={1000}
                    className="rounded-lg object-cover w-full h-auto shadow-md"
                  />
                </div>
              </div>

              {/* 6. First Aid Kit */}
              <div className="flex flex-col-reverse md:flex-row gap-5 bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition overflow-hidden">
                <div className="md:w-2/3">
                  <h3 className="text-xl text-indigo-600 font-bold mb-4">
                    First Aid Kit — Top Pick
                  </h3>
                  <p className="mb-4">
                    Top-rated kits from Surviveware and Protect Life are
                    consistently recommended by health experts and DIYers. Their
                    key advantage is smart organization. Everything is clearly
                    labeled and compartmentalized, helping you find what you
                    need in an emergency and saving precious seconds. They are
                    compact but comprehensive, often including items for more
                    serious trauma (like pressure dressings) alongside everyday
                    bandages and wipes.
                  </p>
                  <p className="mb-4">
                    <strong className="text-indigo-600">Why buy:</strong> A
                    highly-organized, comprehensive kit to handle workshop
                    injuries quickly and effectively.
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-6">
                    <li>
                      <strong className="text-indigo-600">Pros:</strong>{" "}
                      Excellent organization, comprehensive supplies, often
                      includes trauma items.
                    </li>
                    <li>
                      <strong className="text-indigo-600">Cons:</strong>{" "}
                      Supplies have an expiration date and must be
                      checked/rotated periodically.
                    </li>
                  </ul>
                  <a
                    href="https://amzn.to/4hy0E4e"
                    className="inline-block bg-indigo-600 my-2 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    👉 Buy First Aid Kit Today
                  </a>
                </div>
                <div className="md:w-1/3 flex items-center justify-center">
                  <img
                    src="/homeServices/firstaid.webp"
                    alt="A well-organized first aid kit"
                    width={1400}
                    height={1000}
                    className="rounded-lg object-cover w-full h-auto shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* table */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              Safety Gear Comparison: At-a-Glance
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 rounded-lg">
                <thead className="bg-indigo-600 text-white">
                  <tr>
                    <th className="px-4 py-2 text-left">Category</th>
                    <th className="px-4 py-2 text-left">Top Pick (Example)</th>
                    <th className="px-4 py-2 text-left">Best For</th>
                    <th className="px-4 py-2 text-left">Key Spec to Check</th>
                    <th className="px-4 py-2 text-left">Why It Matters</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-2">Gloves</td>
                    <td className="px-4 py-2">Carhartt / DEX FIT Nitrile</td>
                    <td className="px-4 py-2">General repairs, assembly</td>
                    <td className="px-4 py-2">
                      Cut rating (ANSI), grip material
                    </td>
                    <td className="px-4 py-2">
                      Balance of protection & dexterity. Top-rated.
                    </td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="px-4 py-2">Eye Protection</td>
                    <td className="px-4 py-2">NoCry Safety Glasses</td>
                    <td className="px-4 py-2">Sawing, drilling, sanding</td>
                    <td className="px-4 py-2">ANSI Z87.1, anti-fog</td>
                    <td className="px-4 py-2">
                      Certified high-impact protection. Bestseller.
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-2">Hard Hat</td>
                    <td className="px-4 py-2">DEWALT / Pyramex</td>
                    <td className="px-4 py-2">Ladder/attic/demo work</td>
                    <td className="px-4 py-2">ANSI Z89.1 Type I</td>
                    <td className="px-4 py-2">
                      Essential head-impact protection. Top-rated.
                    </td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="px-4 py-2">Hearing</td>
                    <td className="px-4 py-2">Decibel Defense Earmuffs</td>
                    <td className="px-4 py-2">Power tools, mowers</td>
                    <td className="px-4 py-2">NRR (e.g., 25–37 dB)</td>
                    <td className="px-4 py-2">
                      Prevents irreversible hearing damage.
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-2">Knee Pads</td>
                    <td className="px-4 py-2">NoCry / BALENNZ Gel</td>
                    <td className="px-4 py-2">Flooring, tiling, gardening</td>
                    <td className="px-4 py-2">Gel or foam + hard cap</td>
                    <td className="px-4 py-2">
                      Prevents chronic knee trauma. Bestseller.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">First Aid</td>
                    <td className="px-4 py-2">Surviveware / Protect Life</td>
                    <td className="px-4 py-2">All workshop emergencies</td>
                    <td className="px-4 py-2">Organization & contents</td>
                    <td className="px-4 py-2">
                      Immediate treatment before help arrives. Expert-rated.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* next part */}
          <div className="p-6 bg-white rounded-2xl shadow-md space-y-6">
            <h2 className="text-2xl font-bold text-indigo-600">
              How to Choose the Right Size, Standard & Certification
            </h2>
            <div className="space-y-4">
              <p>
                <span className="font-semibold text-indigo-600">1.</span> Look
                for <span className="font-semibold">ANSI or ASTM markings</span>
                (e.g., ANSI Z87.1 for eye protection, ANSI/ISEA cut levels for
                gloves, ANSI Z89.1 for hard hats). This certification is your
                proof that the gear meets rigorous, standardized safety tests.
                Never buy eye or head protection without it.{" "}
                <span className="text-gray-500">Amazon+1</span>
              </p>
              <p>
                <span className="font-semibold text-indigo-600">2.</span>
                <span className="font-semibold">
                  Fit Matters More Than Brand.
                </span>
                Safety gear only works if it's worn correctly. If gloves are too
                loose, you lose all grip and control; if they're too tight, your
                hands will cramp and dexterity is lost. Always use the sizing
                charts on Amazon pages and read customer reviews for real-world
                fit advice.
              </p>
              <p>
                <span className="font-semibold text-indigo-600">3.</span>
                <span className="font-semibold">Check the NRR</span> for hearing
                protection. Sanders, circular saws, and routers all exceed safe
                noise levels. A higher NRR provides more noise reduction. For
                very loud tools (over 100 dB), experts recommend "doubling up"
                by wearing foam plugs inside of earmuffs.
                <span className="text-gray-500">Amazon</span>
              </p>
              <p>
                <span className="font-semibold text-indigo-600">4.</span> Don't
                treat gear as 'one and done.' Buy replacement parts if available
                (like sweatbands for hard hats, replaceable foam ear cushions,
                or extra straps). This makes your initial investment last much
                longer.
              </p>
            </div>
            <h2 className="text-2xl font-bold text-indigo-600 pt-6">
              Proper Use & Care (Expert Checklist)
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                Inspect gloves and goggles before each job. Replace immediately
                if cut, torn, or saturated with chemicals. Scratched goggles
                distort your vision, which is a safety hazard in itself.
              </li>
              <li>
                Clean goggles with a microfiber cloth and approved lens cleaner.
                Using a paper towel or your shirt will permanently scratch
                anti-fog and anti-glare coatings.
              </li>
              <li>
                Store ear protection in a clean, dust-free bag. The foam
                cushions on earmuffs are what create the seal; if they are
                cracked or hard, they won't work. Replace them yearly if used
                often.
              </li>
              <li>
                Rotate first-aid kit contents every 1-2 years; check expiration
                dates on ointments and sterile items. Replace anything you use
                immediately.
              </li>
              <li>
                When using hard hats, replace them after any hard impact, even
                if there’s no visible damage. The plastic's integrity can be
                compromised.
              </li>
            </ul>
          </div>
          {/* fqs part */}
          <div className="w-full p-4">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="mb-4"
                >
                  <AccordionTrigger className="text-lg font-semibold bg-gray-100 p-4 rounded-2xl shadow-md text-left hover:bg-gray-200 transition-colors duration-200">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="bg-white p-4 rounded-b-2xl shadow-md border-t text-gray-700 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          {/* call to action  */}
          <div className="p-6 bg-indigo-50 rounded-2xl shadow-md space-y-4 text-center">
            <h2 className="text-2xl font-bold text-indigo-600">
              Your Safety is Worth the Investment
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>
                <span className="font-medium">
                  “Ready to build a safer workshop?”
                </span>
                Don't wait for an accident to happen. Browse the latest,
                top-rated home safety gear on Amazon and read the reviews to
                find the perfect fit for your projects.
              </p>
              <a
                href="https://amzn.to/48Ptkn6"
                className="inline-block bg-indigo-600 my-2 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                👉 See All Top-Rated Safety Gear on Amazon
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeSafetyGear;
