"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const router = useRouter();

  // ✅ Fixing window error: Scroll logic must run only on the client side
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const div = document.getElementById("movingDiv");
      if (div) {
        div.style.top = 100 + scrollY + "px";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    //
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
    //
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

  return (
    <>
      <header className="bg-emerald-50 p-5 sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/brandName.png"
                width={120}
                height={120}
                alt="Logo"
                className="h-10 w-auto object-contain"
              />
            </Link>

            {/* Hamburger Icon for Mobile */}
            <div className="md:hidden">
              <button onClick={() => setOpenMenu(!openMenu)}>
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

            {/* Desktop Menu */}
            <nav className="hidden md:flex  space-x-6 text-sm text-green-900 font-semibold relative">
              {menuItems.map((item, idx) => (
                <div
                  key={idx}
                  className="group relative"
                  onMouseEnter={() => setActiveMenu(idx)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <Link
                    href={item.link}
                    className="hover:text-[#135254] flex items-center gap-1 py-5"
                  >
                    {item.title}
                    <ChevronDown size={14} />
                  </Link>

                  {/* Mega Dropdown */}
                  {activeMenu === idx && (
                    <div
                      className="fixed left-0 top-20 hidden group-hover:flex transition-opacity duration-3000 opacity-0 group-hover:opacity-100
  w-screen bg-white shadow-lg border-t border-gray-200 z-50"
                    >
                      <div
                        id="movingDiv"
                        className="max-w-7xl mx-auto w-full px-6 py-8 grid grid-cols-3 gap-6"
                      >
                        {item.subCategories.map((sub, subIdx) => (
                          <Link
                            key={subIdx}
                            href={sub.link}
                            onClick={(e) => {
                              e.preventDefault();
                              router.push(sub.link); // navigate
                              router.refresh(); // force refresh
                              setOpenMenu(false);
                              setActiveMenu(null);
                            }}
                            className="text-gray-700 hover:text-green-800"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Mobile Menu */}
          {openMenu && (
            <div className="md:hidden mt-2 space-y-4 bg-white p-4 rounded shadow">
              {menuItems.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <Link
                    href={item.link}
                    className="block font-semibold text-green-800"
                    onClick={(e) => {
                      e.preventDefault();
                      router.push(item.link); // navigate
                      router.refresh(); // force refresh
                      setOpenMenu(false);
                      setActiveMenu(null);
                    }}
                  >
                    {item.title}
                  </Link>
                  <div className="pl-4">
                    {item.subCategories.map((sub, subIdx) => (
                      <Link
                        key={subIdx}
                        href={sub.link}
                        onClick={(e) => {
                          e.preventDefault();
                          router.push(sub.link);
                          router.refresh();
                          setOpenMenu(false);
                          setActiveMenu(null);
                        }}
                        className="block text-sm text-gray-600 hover:text-green-800"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </header>
      <div className=" space-y-6  mx-16 text-center text-xs border-b-2 border-black p-5 font-Aria">
        We independently review products. Purchases made through our links may
        earn us a commission, supporting our content at no extra cost.{" "}
        <Link
          href="/about"
          className="text-blue-600 hover:underline hover:text-blue-500"
        >
          Learn more about our company{" "}
        </Link>
      </div>
    </>
  );
}

export default Header;
