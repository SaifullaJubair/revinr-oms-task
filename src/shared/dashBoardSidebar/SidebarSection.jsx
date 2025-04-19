"use client";
import { FaRegImage, FaChevronDown, FaChevronRight } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { IoNewspaperOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { BsBagCheck } from "react-icons/bs";
import { AiOutlineProduct } from "react-icons/ai";
import { PiUserCircleCheckLight } from "react-icons/pi";
import { TbReportSearch } from "react-icons/tb";
import { useState } from "react";

export const sidebarItems = [
  { path: "/", name: "Dashboard", icon: <RxDashboard /> },
  { path: "/category", name: "Category", icon: <IoNewspaperOutline /> },
  { path: "/company", name: "Company", icon: <HiOutlineBuildingOffice2 /> },
  { path: "/product", name: "Product", icon: <AiOutlineProduct /> },
  { path: "/banner", name: "Banner", icon: <FaRegImage /> },
  { path: "/order", name: "Order", icon: <BsBagCheck /> },
  { path: "/sales-report", name: "Sale Report", icon: <TbReportSearch /> },
  { path: "/all-users", name: "All Users", icon: <HiUsers /> },
  { path: "/all-staff", name: "All Staff", icon: <PiUserCircleCheckLight /> },
  { path: "/all-staff", name: "All Staff", icon: <PiUserCircleCheckLight /> },
  { path: "/all-staff", name: "All Staff", icon: <PiUserCircleCheckLight /> },
  { path: "/all-staff", name: "All Staff", icon: <PiUserCircleCheckLight /> },
  { path: "/all-staff", name: "All Staff", icon: <PiUserCircleCheckLight /> },
  { path: "/all-staff", name: "All Staff", icon: <PiUserCircleCheckLight /> },
  { path: "/all-staff", name: "All Staff", icon: <PiUserCircleCheckLight /> },
  { path: "/all-staff", name: "All Staff", icon: <PiUserCircleCheckLight /> },
  { path: "/all-staff", name: "All Staff", icon: <PiUserCircleCheckLight /> },
  { path: "/all-staff", name: "All Staff", icon: <PiUserCircleCheckLight /> },
  { path: "/all-staff", name: "All Staff", icon: <PiUserCircleCheckLight /> },
  { path: "/all-staff", name: "All Staff", icon: <PiUserCircleCheckLight /> },
  { path: "/all-staff", name: "All Staff", icon: <PiUserCircleCheckLight /> },
  { path: "/all-staff", name: "All Staff", icon: <PiUserCircleCheckLight /> },
  { path: "/all-staff", name: "All Staff", icon: <PiUserCircleCheckLight /> },
  { path: "/all-staff", name: "All Staff", icon: <PiUserCircleCheckLight /> },
  { path: "/all-staff", name: "All Staff", icon: <PiUserCircleCheckLight /> },
  { path: "/all-staff", name: "All Staff", icon: <PiUserCircleCheckLight /> },
  { path: "/all-staff", name: "All Staff", icon: <PiUserCircleCheckLight /> },
  { path: "/all-staff", name: "All Staff", icon: <PiUserCircleCheckLight /> },
  { path: "/all-staff", name: "All Staff", icon: <PiUserCircleCheckLight /> },
  { path: "/all-staff", name: "All Staff", icon: <PiUserCircleCheckLight /> },
  { path: "/all-staff", name: "All Staff", icon: <PiUserCircleCheckLight /> },
  { path: "/all-staff", name: "All Staff", icon: <PiUserCircleCheckLight /> },
  { path: "/all-staff", name: "All Staff", icon: <PiUserCircleCheckLight /> },
  { path: "/all-staff", name: "All Staff", icon: <PiUserCircleCheckLight /> },
  { path: "/all-staff", name: "All Staff", icon: <PiUserCircleCheckLight /> },
  { path: "/all-staff", name: "All Staff", icon: <PiUserCircleCheckLight /> },
  { path: "/all-staff", name: "All Staff", icon: <PiUserCircleCheckLight /> },
  { path: "/all-staff", name: "All Staff", icon: <PiUserCircleCheckLight /> },
  { path: "/all-staff", name: "All Staff", icon: <PiUserCircleCheckLight /> },
];

export const SidebarSection = ({ icon, title, items }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full px-3 py-2 text-sm text-white hover:bg-slate-700 rounded transition"
      >
        <span className="flex items-center gap-2">
          {icon}
          <span>{title}</span>
        </span>
        {open ? <FaChevronDown /> : <FaChevronRight />}
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="ml-4 mt-1 pl-3 border-l border-gray-600 text-sm text-gray-300 space-y-1">
          {items.map((item, i) => (
            <li key={i} className="hover:text-white cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
