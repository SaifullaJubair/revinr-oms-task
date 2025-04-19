"use client";
import { useState } from "react";
import UserProfileNavbar from "@/shared/navbar/UserProfileNavbar";
import Sidebar from "@/shared/dashBoardSidebar/Sidebar";

const DashboardLayout = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(true); // Default collapsed
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(true);
  

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <Sidebar
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
        isMobileSidebarOpen={isMobileSidebarOpen}
        setMobileSidebarOpen={setMobileSidebarOpen}
      />

      {/* Overlay for mobile */}
      {isMobileSidebarOpen && (
        <div
          onClick={() => setMobileSidebarOpen(false)}
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
        />
      )}

      {/* Main Content */}
      <div
        className={`flex-1 flex flex-col bg-gray-100 transition-all duration-300 ${
          isMobileSidebarOpen ? "overflow-hidden" : ""
        }`}
        style={{
          marginLeft: `${
            isMobileSidebarOpen
              ? "60px" // Push content when mobile sidebar is open
              : isCollapsed
              ? "60px"
              : "250px"
          }`,
        }}
      >
        <header className="bg-gray-100">
          <UserProfileNavbar />
        </header>
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
