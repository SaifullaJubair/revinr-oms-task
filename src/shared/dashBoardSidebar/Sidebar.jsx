"use client";
import { useEffect } from "react";
import Link from "next/link";
import { sidebarItems, SidebarSection } from "./SidebarSection";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { BsBagCheck } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";
import { FaAngleLeft } from "react-icons/fa";

const Sidebar = ({
  isCollapsed,
  setIsCollapsed,
  isMobileSidebarOpen,
  setMobileSidebarOpen,
}) => {
  // Handle screen size changes
  useEffect(() => {
    const handleResize = () => {
      const isDesktop = window.innerWidth >= 768;
      if (isDesktop) {
        setMobileSidebarOpen(false); // Always hide mobile state on desktop
      } else {
        setIsCollapsed(true); // Always start collapsed on mobile
      }
    };

    // Set initial state
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsCollapsed, setMobileSidebarOpen]);

  // Determine if we're showing expanded content
  const showExpandedContent = !isCollapsed || isMobileSidebarOpen;

  return (
    <aside
      className={`bg-slate-900 shadow-md fixed top-0 left-0 z-40 h-screen transition-all duration-300
      ${isCollapsed ? "w-[60px]" : "w-[250px]"}
      ${isMobileSidebarOpen ? "translate-x-0 w-[250px]" : "md:translate-x-0"}`}
    >
      {/* Collapse/Expand Button */}
      <div
        className={`absolute -right-4 top-10 bg-blue-700 p-2 rounded-full cursor-pointer`}
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
            window.innerWidth >= 768
              ? isCollapsed
                ? "rotate-180"
                : "rotate-0"
              : isMobileSidebarOpen
              ? "rotate-180"
              : "rotate-0"
          }`}
        />
      </div>

      {/* Logo */}
      <div className="p-4 flex justify-center">
        <img
          src="https://i.ibb.co/0BZfPq6/darklogo.png"
          alt="logo"
          className="h-12"
        />
      </div>

      <div className="border-t border-gray-700 mb-3" />

      {/* Scrollable Nav Items */}
      <div className="overflow-y-auto px-3 flex-1 h-[calc(100vh-160px)] sidebar-scroll">
        {sidebarItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`flex items-center gap-3 w-full p-2 mt-1 rounded-md transition-all duration-200 ${
              !showExpandedContent ? "justify-center" : ""
            } hover:bg-slate-700 text-gray-300`}
          >
            <div className="text-[1.3rem]">{item.icon}</div>
            {showExpandedContent && <p className="text-[1rem]">{item.name}</p>}
          </Link>
        ))}

        {/* Dropdown Sections */}
        {showExpandedContent && (
          <>
            <SidebarSection
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

            <SidebarSection
              icon={<BsBagCheck />}
              title="Tasks"
              items={["To Do", "In Progress", "Completed"]}
            />
          </>
        )}
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
