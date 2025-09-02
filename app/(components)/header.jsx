"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp, ChevronRight } from "lucide-react";

const menuItems = [
  {
    title: "Artificial Grass",
    link: "/artificalGrassGide",
    subCategories: [
      {
        name: "Grass for Pets",
        link: "/artificalGrassGide/bestArtificialGrassforDogs",
      },
      {
        name: "Balcony & Patio Turf",
        link: "/artificalGrassGide/artificialGrassforBalconiesPatios",
      },
      {
        name: "Installation Tools",
        link: "/artificalGrassGide/artificialTurfTools",
      },
      {
        name: "Budget Turf Options",
        link: "/artificalGrassGide/budgetArtificialGrass",
      },
      {
        name: "Premium Turf Brands",
        link: "/artificalGrassGide/artificialGrassLandscapingUSA",
      },
    ],
  },
  {
    title: "Affordable Home Improvement",
    link: "/affordableHomeImprovment",
    subCategories: [
      {
        name: "Smart Home Gadgets",
        link: "/affordableHomeImprovment/smartHomeGadgets",
      },
      {
        name: "Peel and Stick Wallpaper",
        link: "/affordableHomeImprovment/peelStickWallpapersRenters",
      },
      {
        name: "Home Lighting Upgrades",
        link: "/affordableHomeImprovment/affordableHomeLighting",
      },
      {
        name: "Top 10 Tools Under $50",
        link: "/affordableHomeImprovment/amazoneHomeToolsTop10",
      },
      {
        name: "Small Space Home Improvements",
        link: "/affordableHomeImprovment/smallSpaceHomeImprovements",
      },
    ],
  },
  {
    title: "Specialized Local Services",
    link: "/localServices",
    subCategories: [
      {
        name: "DIY Plumbing Tools (Amazon Picks)",
        link: "/localServices/diyPlumbingTools",
      },
      {
        name: "Best Home Cleaning Tools (2025 Guide)",
        link: "/localServices/bestHomeCleaningTools",
      },
      {
        name: "Electrical Repair Kit for Home Use",
        link: "/localServices/electricalRepairKit",
      },
      { name: "Home Safety Gear", link: "/localServices/homeSafetyGear" },
      {
        name: "Pest Control Spray (Amazon Picks)",
        link: "/localServices/pestControlSpray",
      },
    ],
  },
  {
    title: "Affordable Storage",
    link: "/affordableStorage",
    subCategories: [
      {
        name: "Under Bed Storage Ideas (2025 Guide)",
        link: "/affordableStorage/topUnderBedStorageIdeas",
      },
      {
        name: "Vertical Storage Racks for Apartments",
        link: "/affordableStorage/verticalStorageRacksApartments",
      },
      {
        name: "Cheap Closet Organizer System (Amazon Picks)",
        link: "/affordableStorage/ClosetOrganizers",
      },
      {
        name: "Garage Storage Racks (Amazon Picks)",
        link: "/affordableStorage/garageStorageRacks",
      },
    ],
  },
];

function Dropdown({ item, idx, openIndex, setOpenIndex }) {
  const isOpen = openIndex === idx;
  const buttonRef = useRef(null);
  const panelId = `mega-panel-${idx}`;

  const onButtonKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpenIndex(isOpen ? null : idx);
    } else if (e.key === "Escape") {
      setOpenIndex(null);
      buttonRef.current?.blur();
    }
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpenIndex(idx)}
      onMouseLeave={() => setOpenIndex(null)}
    >
      <button
        ref={buttonRef}
        aria-haspopup="true"
        aria-controls={panelId}
        aria-expanded={isOpen}
        onKeyDown={onButtonKeyDown}
        onFocus={() => setOpenIndex(idx)}
        onBlur={() => {
          setTimeout(() => {
            if (!document.activeElement?.closest(`#${panelId}`))
              setOpenIndex(null);
          }, 0);
        }}
        className="flex items-center gap-1 py-5 hover:text-[#135254] text-green-900 font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-200"
      >
        <Link href={item.link} className="pointer-events-none">
          {item.title}
        </Link>
        <ChevronDown size={14} className="ml-1" />
      </button>

      {/* Fixed: Avoid w-screen; use full-bleed absolute container with inner centered max width */}
      <div
        id={panelId}
        role="region"
        aria-labelledby={panelId + "-label"}
        className={`absolute left-0 right-0 top-full bg-white border-t border-gray-200 shadow-lg z-50
          pointer-events-none opacity-0 translate-y-2 transition-all duration-200 ease-out
          ${isOpen ? "pointer-events-auto opacity-100 translate-y-0" : ""}`}
      >
        {/* inner padding keeps content aligned with page container and prevents horizontal overflow */}
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto px-0 py-8 grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="col-span-2 md:col-span-2 grid gap-3">
              <h3 id={panelId + "-label"} className="sr-only">
                {item.title} menu
              </h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-3">
                {item.subCategories.map((sub, i) => (
                  <Link
                    key={i}
                    href={sub.link}
                    className="flex items-center gap-2 p-3 rounded hover:bg-emerald-50 transition-colors duration-150"
                  >
                    <div className="flex-none w-8 h-8 bg-gray-100 rounded flex items-center justify-center text-xs text-gray-500">
                      <ChevronRight size={14} />
                    </div>
                    <div className="text-gray-700 hover:text-emerald-800">
                      <div className="text-sm font-medium">{sub.name}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="hidden md:block">
              <div className="h-full rounded-sm p-4 bg-emerald-50 flex flex-col justify-center items-start">
                <div className="text-sm font-semibold text-emerald-800">
                  Featured
                </div>
                <div className="mt-2 text-gray-600 text-sm">
                  Curated picks & installation guides.
                </div>
                <Link
                  href={item.link}
                  className="mt-4 inline-block text-sm font-semibold hover:underline text-emerald-700"
                >
                  See all {item.title}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpenMenu(false);
        setActiveAccordion(null);
        setOpenIndex(null);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    // defensive overflow-x-hidden here prevents accidental horizontal scroll from any child
    <header className="bg-emerald-50 sticky top-0 z-50 shadow-md overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            aria-label="Go to homepage"
            className="flex items-center space-x-2"
          >
            <Image
              src="/brandName.png"
              width={120}
              height={120}
              alt="Logo"
              className="h-10 w-auto object-contain"
            />
          </Link>

          <nav
            className="hidden md:flex space-x-6 text-sm text-green-900 font-semibold"
            role="navigation"
            aria-label="Main navigation"
          >
            {menuItems.map((item, idx) => (
              <Dropdown
                key={idx}
                item={item}
                idx={idx}
                openIndex={openIndex}
                setOpenIndex={setOpenIndex}
              />
            ))}
          </nav>

          <div className="md:hidden">
            <button
              aria-label={openMenu ? "Close menu" : "Open menu"}
              aria-expanded={openMenu}
              onClick={() => {
                setOpenMenu((v) => !v);
                if (openMenu) setActiveAccordion(null);
              }}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-200"
            >
              <svg
                className="h-6 w-6 text-green-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    openMenu
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {openMenu && (
          <div
            className="md:hidden mt-2 bg-white p-4 rounded shadow"
            role="menu"
            aria-label="Mobile menu"
          >
            {menuItems.map((item, idx) => {
              const expanded = activeAccordion === idx;
              return (
                <div key={idx} className="border-b last:border-b-0">
                  <div className="flex items-center justify-between py-3">
                    <Link
                      href={item.link}
                      className="text-base font-semibold text-green-800"
                    >
                      {item.title}
                    </Link>
                    <button
                      onClick={() => setActiveAccordion(expanded ? null : idx)}
                      aria-expanded={expanded}
                      aria-controls={`mobile-acc-${idx}`}
                      className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-200"
                    >
                      {expanded ? (
                        <ChevronUp size={18} />
                      ) : (
                        <ChevronDown size={18} />
                      )}
                    </button>
                  </div>

                  <div
                    id={`mobile-acc-${idx}`}
                    role="region"
                    aria-hidden={!expanded}
                    className={`pl-4 overflow-hidden transition-all duration-200 ${
                      expanded ? "max-h-96 py-2" : "max-h-0"
                    }`}
                  >
                    <div className="space-y-2">
                      {item.subCategories.map((sub, sIdx) => (
                        <Link
                          key={sIdx}
                          href={sub.link}
                          className="flex items-center gap-2 text-sm text-gray-700 hover:text-emerald-800 py-2"
                        >
                          <div className="w-6 h-6 flex items-center justify-center text-xs bg-gray-100 rounded">
                            <ChevronRight size={12} />
                          </div>
                          <span>{sub.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
}
