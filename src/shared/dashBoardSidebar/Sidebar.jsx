"use client";
import { useEffect } from "react";
import Link from "next/link";
import { dropDownItems, DropdownSection } from "./DropdownSection";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { BsBagCheck } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";
import { BiCollapse } from "react-icons/bi";
import Image from "next/image";
import { FaAngleLeft } from "react-icons/fa";

const Sidebar = ({
  isCollapsed,
  setIsCollapsed,
  isMobileSidebarOpen,
  setMobileSidebarOpen,
}) => {
  // Set initial state based on screen size
  useEffect(() => {
    const handleResize = () => {
      const isDesktop = window.innerWidth >= 768;
      if (isDesktop) {
        setMobileSidebarOpen(false);
        setIsCollapsed(false); // Expanded by default on desktop
      } else {
        setIsCollapsed(true); // Collapsed by default on mobile
      }
    };

    // Set initial state
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsCollapsed, setMobileSidebarOpen]);

  const showExpandedContent = !isCollapsed || isMobileSidebarOpen;

  return (
    <aside
      className={`bg-[#111827] shadow-md fixed top-0 left-0 z-40 h-screen transition-all duration-300
      ${isCollapsed ? "w-[60px]" : "w-[280px]"}
      ${
        isMobileSidebarOpen
          ? "translate-x-0 w-[250px] z-50" // Mobile: higher z-index when open
          : "md:translate-x-0 "
      }`}
    >
      {/* Collapse/Expand Button */}
      {!showExpandedContent && (
        <div
          className={`absolute -right-4 top-14 bg-blue-700 p-2 rounded-full cursor-pointer block`}
          onClick={() => {
            if (window.innerWidth >= 768) {
              setIsCollapsed(!isCollapsed);
            } else {
              setMobileSidebarOpen(!isMobileSidebarOpen);
            }
          }}
        >
          <FaAngleLeft
            className={`text-white text-lg transition-transform duration-300 ${
              isMobileSidebarOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
      )}
      {/* Logo */}
      <div className="flex items-center justify-between px-4 py-4">
        <div className="inline-flex items-center gap-3  ">
          <div
            className="border-2 border-[#E0E5ED] rounded-full w-10 h-10 relative cursor-pointer "
            onClick={() => {
              if (window.innerWidth >= 768) {
                setIsCollapsed(!isCollapsed);
              } else {
                setMobileSidebarOpen(!isMobileSidebarOpen);
              }
            }}
          >
            <Image
              src="/assets/images/paint.png"
              alt="Login"
              fill
              className="rounded-full w-full object-cover bg-white"
            />
          </div>
          {showExpandedContent && (
            <div>
              <h3 className="font-bold text-sm md:text-base">
                <span className="text-gray-500">OMS/ </span>
                <span className="text-cyan-500">Study Press</span>
              </h3>
              <h5 className="text-xs text-gray-400">Solutions of Study</h5>
            </div>
          )}
        </div>
        <BiCollapse
          className="text-white text-2xl"
          onClick={() => {
            if (window.innerWidth >= 768) {
              setIsCollapsed(!isCollapsed);
            } else {
              setMobileSidebarOpen(!isMobileSidebarOpen);
            }
          }}
        />
      </div>

      <div className="border-t-[2px]  border-gray-800  mb-3" />

      {/* ----------Logo End ------------*/}

      {/* Scrollable Nav Items */}
      <div className="overflow-y-auto px-3 flex-1 max-h-[calc(100vh-220px)] sidebar-scroll">
        {showExpandedContent && (
          <>
            <DropdownSection
              icon={<HiOutlineBuildingOffice2 />}
              title="HR"
              items={[
                "Attendance",
                "Leave",
                "Employee",
                "Recruitment",
                "Meeting",
                "Requisitions",
                "Notices",
                "Holidays",
                "Notes",
              ]}
            />

            <DropdownSection
              icon={<BsBagCheck />}
              title="Tasks"
              items={["To Do", "In Progress", "Completed"]}
            />
            <DropdownSection
              icon={<HiOutlineBuildingOffice2 />}
              title="CRM"
              items={["Leads", "Opportunities", "Contacts"]}
            />

            <DropdownSection
              icon={<BsBagCheck />}
              title="Accounts"
              items={["Invoices", "Payments", "Expenses"]}
            />
          </>
        )}
        {dropDownItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`flex items-center gap-3 w-full p-2 mt-1 rounded-md transition-all duration-200 ${
              !showExpandedContent ? "justify-center" : ""
            } hover:bg-slate-700 text-gray-300`}
          >
            <div className="text-[1.3rem] ">{item.icon}</div>
            {showExpandedContent && <p className="text-[1rem]">{item.name}</p>}
          </Link>
        ))}

        {/* Dropdown Sections */}
      </div>

      {/* Settings & Logout */}
      <div className="p-3 border-t border-gray-700">
        <Link
          href="/settings"
          className={`flex items-center gap-3 w-full p-2 mt-1 rounded-md hover:bg-slate-700 text-gray-300 ${
            !showExpandedContent ? "justify-center" : ""
          }`}
        >
          <IoSettingsOutline className="text-[1.3rem]" />
          {showExpandedContent && <p className="text-[1rem]">Settings</p>}
        </Link>

        <div
          className={`flex items-center gap-3 w-full p-2 mt-1 rounded-md hover:bg-slate-700 text-gray-300 cursor-pointer ${
            !showExpandedContent ? "justify-center" : ""
          }`}
        >
          <TbLogout2 className="text-[1.3rem]" />
          {showExpandedContent && <p className="text-[1rem]">Logout</p>}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
