"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Menu, X } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-green-50 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/brandName.png"
              width={100}
              height={100}
              alt="Logo"
              className="h-10 w-auto object-contain"
            />
          </Link>
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 text-sm text-green-900 font-semibold">
            <Link href="/about" className="hover:text-[#135254]">
              About
            </Link>
            <Link href="/contact" className="hover:text-[#135254]">
              Contact
            </Link>
            <Link href="/privacyPolicy" className="hover:text-[#135254]">
              Privacy Policy
            </Link>
            <Link href="/affiliateDisclosure" className="hover:text-[#135254]">
              Affiliate Disclosure
            </Link>
            <Link href="/termsService" className="hover:text-[#135254]">
              Terms & Conditions
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="hover:text-[#135254]">Blog</button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href="/artificalGrassGide">Artificial Grass</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/affordableHomeImprovment">
                    Affordable Home Improvement
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/affordableStorage">Affordable Storage</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/localServices">Local Services</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-green-900 focus:outline-none"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 space-y-2 pb-4">
            <Link
              href="/about"
              className="block text-green-900 hover:text-[#135254]"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block text-green-900 hover:text-[#135254]"
            >
              Contact
            </Link>
            <Link
              href="/privacyPolicy"
              className="block text-green-900 hover:text-[#135254]"
            >
              Privacy Policy
            </Link>
            <Link
              href="/affiliateDisclosure"
              className="block text-green-900 hover:text-[#135254]"
            >
              Affiliate Disclosure
            </Link>
            <Link
              href="/termsService"
              className="block text-green-900 hover:text-[#135254]"
            >
              Terms & Conditions
            </Link>

            {/* Blog Dropdown (simplified for mobile) */}
            <div>
              <div className="font-semibold mt-2">Blog</div>
              <div className="ml-4 space-y-1">
                <Link
                  href="/artificalGrassGide"
                  className="block text-green-800 hover:text-[#135254]"
                >
                  Artificial Grass
                </Link>
                <Link
                  href="/affordableHomeImprovment"
                  className="block text-green-800 hover:text-[#135254]"
                >
                  Affordable Home Improvement
                </Link>
                <Link
                  href="/affordableStorage"
                  className="block text-green-800 hover:text-[#135254]"
                >
                  Affordable Storage
                </Link>
                <Link
                  href="/localServices"
                  className="block text-green-800 hover:text-[#135254]"
                >
                  Local Services
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
