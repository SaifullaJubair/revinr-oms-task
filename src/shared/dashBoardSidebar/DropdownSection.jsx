"use client";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
// import { FaRegImage } from "react-icons/fa";
// import { HiUsers } from "react-icons/hi";
// import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
// import { IoNewspaperOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
// import { BsBagCheck } from "react-icons/bs";
// import { AiOutlineProduct } from "react-icons/ai";
// import { PiUserCircleCheckLight } from "react-icons/pi";
// import { TbReportSearch } from "react-icons/tb";
import { useState } from "react";

export const dropDownItems = [
  { path: "/", name: "Dashboard", icon: <RxDashboard /> },
  // { path: "/category", name: "Category", icon: <IoNewspaperOutline /> },
  // { path: "/company", name: "Company", icon: <HiOutlineBuildingOffice2 /> },
  // { path: "/product", name: "Product", icon: <AiOutlineProduct /> },
  // { path: "/banner", name: "Banner", icon: <FaRegImage /> },
  // { path: "/order", name: "Order", icon: <BsBagCheck /> },
  // { path: "/sales-report", name: "Sale Report", icon: <TbReportSearch /> },
  // { path: "/all-users", name: "All Users", icon: <HiUsers /> },
  // { path: "/all-users", name: "All Users", icon: <HiUsers /> },
  // { path: "/all-users", name: "All Users", icon: <HiUsers /> },
  // { path: "/all-users", name: "All Users", icon: <HiUsers /> },
  // { path: "/all-users", name: "All Users", icon: <HiUsers /> },
  // { path: "/all-users", name: "All Users", icon: <HiUsers /> },
  // { path: "/all-users", name: "All Users", icon: <HiUsers /> },
  // { path: "/all-users", name: "All Users", icon: <HiUsers /> },
  // { path: "/all-users", name: "All Users", icon: <HiUsers /> },
  // { path: "/all-users", name: "All Users", icon: <HiUsers /> },
  // { path: "/all-users", name: "All Users", icon: <HiUsers /> },
  // { path: "/all-users", name: "All Users", icon: <HiUsers /> },
  // { path: "/all-users", name: "All Users", icon: <HiUsers /> },
  // { path: "/all-users", name: "All Users", icon: <HiUsers /> },
  // { path: "/all-users", name: "All Users", icon: <HiUsers /> },
  // { path: "/all-users", name: "All Users", icon: <HiUsers /> },
  // { path: "/all-users", name: "All Users", icon: <HiUsers /> },
  // { path: "/all-users", name: "All Users", icon: <HiUsers /> },
  // { path: "/all-users", name: "All Users", icon: <HiUsers /> },
  // { path: "/all-users", name: "All Users", icon: <HiUsers /> },
  // { path: "/all-users", name: "All Users", icon: <HiUsers /> },
  // { path: "/all-users", name: "All Users", icon: <HiUsers /> },
  // { path: "/all-users", name: "All Users", icon: <HiUsers /> },
  // { path: "/all-users", name: "All Users", icon: <HiUsers /> },
  // { path: "/all-users", name: "All Users", icon: <HiUsers /> },
  // { path: "/all-users", name: "All Users", icon: <HiUsers /> },
  // { path: "/all-users", name: "All Users", icon: <HiUsers /> },
  // { path: "/all-users", name: "All Users", icon: <HiUsers /> },
  // { path: "/all-users", name: "All Users", icon: <HiUsers /> },
  // { path: "/all-users", name: "All Users", icon: <HiUsers /> },
  // { path: "/all-users", name: "All Users", icon: <HiUsers /> },
  // { path: "/all-users", name: "All Users", icon: <HiUsers /> },
  // { path: "/all-users", name: "All Users", icon: <HiUsers /> },
  // { path: "/all-users", name: "All Users", icon: <HiUsers /> },
  // { path: "/all-users", name: "All Users", icon: <HiUsers /> },
  // { path: "/all-users", name: "All Users", icon: <HiUsers /> },
  // { path: "/all-staff", name: "All Staff", icon: <PiUserCircleCheckLight /> },
];

export const DropdownSection = ({ icon, title, items }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center justify-between w-full px-3 py-2   text-gray-300 hover:bg-gray-800 rounded-md transition ${
          open ? "bg-gray-800 " : ""
        }`}
      >
        <span className={`flex items-center gap-2 ${open ? "text-white" : ""}`}>
          {icon}
          <span className={`${open ? "text-cyan-500" : ""}`}>{title}</span>
        </span>
        {open ? <FaChevronUp /> : <FaChevronDown />}
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="ml-5 my-1.5 pl-5 border-l-[2px]  border-gray-600  py-1 text-gray-300 space-y-3">
          {items.map((item, i) => (
            <li key={i} className="hover:text-cyan-500 cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
