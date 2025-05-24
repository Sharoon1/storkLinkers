import Image from "next/image";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

function Header() {
  return (
    <div className="bg-green-50 sticky  top-0 shadow-soft-green shadow-md">
      <div className="relative justify-center z-50  sm:static flex mx-20 py-5 sm:justify-between items-center sm:">
        <div className="opacity-30 sm:opacity-100">
          <Link href="/">
            <Image src="/brandName.png" width={100} height={100} alt="logo" />
          </Link>
        </div>
        <div className="absolute  sm:justify-center sm:static">
          <nav>
            <ul className="flex gap-x-5 opacity-70 sm:opacity-90 ">
              <li className="font-bold hover:text-[#135254] ">
                <Link href="/about">About Us</Link>
              </li>{" "}
              <li className="font-bold hover:text-[#135254] ">
                <Link href="/contact">Contact Us</Link>
              </li>{" "}
              <li className="font-bold hover:text-[#135254] ">
                <Link href="/privacyPolicy">Privacy Policy</Link>
              </li>{" "}
              <li className="font-bold hover:text-[#135254] ">
                <Link href="/affiliateDisclosure">Affiliate Disclosure</Link>
              </li>
              <li className="font-bold hover:text-[#135254] ">
                <Link href="/termsService">Terms and Conditions</Link>
              </li>
              {/* <li className="font-bold">Blog</li> */}
              {/* Blog Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <li className="font-bold cursor-pointer hover:text-[#135254] ">
                    Blog
                  </li>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link href="/artificalGrassGide hover:text-[#135254] ">
                      Artifical Grass
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/affordableHomeImprovment">
                      Affordable Home Improvment
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    {/* <Link href="../pages/affordable-storage.jsx">
                      Affordable Storage
                    </Link> */}
                    <Link href="affordableStorage">Affordable Storqge</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/localServices">Local Services</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
