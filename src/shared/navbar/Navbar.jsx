"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Menu, X, Globe, Search } from "lucide-react";

import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex items-center justify-between bg-white rounded-sm p-2.5 px-4 md:px-6 shadow-sm border border-b-gray-200 mx-auto">
      {/* Left Section - Logo + Title (Always visible) */}
      <Link href="/" className="inline-flex items-center gap-3">
        <div className="border-4 border-[#E0E5ED] rounded-full w-10 h-10 md:w-12 md:h-12 relative">
          <Image
            src="/assets/images/paint.png"
            alt="Logo"
            fill
            className="rounded-full w-full object-cover bg-white"
          />
        </div>
        <div className="">
          <h3 className="font-bold text-gray-700 text-sm md:text-base">
            <span className="text-gray-500">OMS/ </span>
            <span className="text-cyan-500">Study Press</span>
          </h3>
          <h5 className="text-xs text-gray-400">Solutions of Study</h5>
        </div>
      </Link>

      {/* Right Section - Desktop Buttons + Icons (Hidden on mobile) */}
      <div className="hidden md:flex items-center gap-6 mr-4">
        <Search size={16} className="text-gray-400 cursor-pointer" />
        <button className="flex items-center gap-2 text-gray-600 text-sm font-bold cursor-pointer">
          <Globe className="text-gray-400" size={16} />
          English
        </button>
        <Link
          href="/sign-in"
          className="text-red-500 font-bold text-sm cursor-pointer"
        >
          Sign In
        </Link>
      </div>

      {/* Mobile Menu Button (Visible only on mobile) */}
      <div className="flex md:hidden items-center gap-3">
        <button
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          className="p-1 text-gray-700 focus:outline-none"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Content */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 right-0 left-0 bg-white shadow-lg border-t border-gray-200 z-50 p-4">
          <div className="flex flex-col space-y-4">
            <div className="block  md:hidden items-center gap-6 mr-4 space-y-4">
              <button className="flex items-center gap-2 text-gray-600 text-sm font-bold cursor-pointer">
                <Search size={16} className="text-gray-400 cursor-pointer" />
                Search
              </button>

              <button className="flex items-center gap-2 text-gray-600 text-sm font-bold cursor-pointer">
                <Globe className="text-gray-400" size={16} />
                English
              </button>
            </div>

            <Link href="/sign-in" className="text-red-500 font-bold text-sm">
              Sign In
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
