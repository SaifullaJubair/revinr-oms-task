"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Bell, Settings, ChevronDown, Menu, X } from "lucide-react";
import { FaCheck, FaEdit, FaEyeSlash, FaPlus } from "react-icons/fa";
import { HiOutlineDuplicate } from "react-icons/hi";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex items-center justify-between bg-white rounded-sm p-2.5 px-4 md:px-6 shadow-sm border border-b-gray-200 mx-auto">
      {/* Left Section - Logo + Title (Always visible) */}
      <div className="flex items-center gap-3">
        <div className="border-4 border-[#E0E5ED] rounded-full w-10 h-10 md:w-12 md:h-12 relative">
          <Image
            src="/assets/images/paint.png"
            alt="Logo"
            fill
            className="rounded-full w-full object-cover bg-white"
          />
        </div>
        <div className="hidden sm:block">
          <h3 className="font-bold text-gray-700 text-sm md:text-base">
            <span className="text-gray-500">OMS/ </span>
            <span className="text-cyan-500">Study Press</span>
          </h3>
          <h5 className="text-xs text-gray-400">Solutions of Study</h5>
        </div>
      </div>

      
      {/* Right Section - Desktop Buttons + Icons (Hidden on mobile) */}
      <div className="hidden md:flex items-center gap-4">
        <button className="flex items-center gap-1 text-sm text-gray-600 font-bold px-4 py-1 rounded hover:bg-gray-100">
          <span className="bg-[#00B6BC] text-white rounded-full size-5 flex items-center justify-center">
            <FaPlus size={12} />
          </span>
          Add requisitions
        </button>
        <Button
          className="flex items-center gap-1 text-sm border border-gray-300 px-3 py-1 hover:bg-gray-100 rounded-2xl text-gray-600"
          variant={"outline"}
        >
          <FaEdit size={14} />
          Add notes
        </Button>

    
        <Settings size={20} className="text-gray-700 cursor-pointer" />
        <HiOutlineDuplicate
          size={20}
          className="text-gray-700 cursor-pointer"
        />
        <ChevronDown size={20} className="text-gray-700 cursor-pointer" />
      </div>

      {/* Mobile Menu Button (Visible only on mobile) */}
      <div className="flex md:hidden items-center gap-3">
    

        <Settings size={20} className="text-gray-700 cursor-pointer" />
        <HiOutlineDuplicate
          size={20}
          className="text-gray-700 cursor-pointer"
        />

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
            <div className="flex items-center gap-3 border-b pb-4">
              <Image
                src="/assets/icons/avatar.png"
                alt="User"
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-bold text-black">User XYZ</p>
                <p className="text-xs text-gray-500">Super Admin</p>
                <p className="text-xs text-pink-500">12:05 AM</p>
              </div>
            </div>

            <button className="flex items-center gap-2 text-sm text-gray-600 font-bold px-4 py-2 rounded hover:bg-gray-100">
              <span className="bg-[#00B6BC] text-white rounded-full size-5 flex items-center justify-center">
                <FaPlus size={12} />
              </span>
              Add requisitions
            </button>

            <Button
              className="flex items-center gap-2 text-sm border border-gray-300 px-4 py-2 hover:bg-gray-100 rounded-2xl text-gray-600 justify-start"
              variant={"outline"}
            >
              <FaEdit size={14} />
              Add notes
            </Button>

            <div className="flex items-center justify-between pt-4 border-t">
              <p className="text-xs text-gray-500">Wednesday, 01 January</p>
              <ChevronDown size={18} className="text-gray-700" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
