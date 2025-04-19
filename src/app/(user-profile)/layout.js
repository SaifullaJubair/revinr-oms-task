"use client";
import { useState } from "react";
import UserProfileNavbar from "@/shared/navbar/UserProfileNavbar";
import Sidebar from "@/shared/dashBoardSidebar/Sidebar";

const DashboardLayout = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : true
  );
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <Sidebar
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
        isMobileSidebarOpen={isMobileSidebarOpen}
        setMobileSidebarOpen={setMobileSidebarOpen}
      />

      {/* Overlay for mobile - only shown when mobile sidebar is open */}
      {isMobileSidebarOpen && (
        <div
          onClick={() => setMobileSidebarOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 md:hidden" // z-40 to be below sidebar (z-50)
        />
      )}

      {/* Main Content */}
      <div
        className={`flex-1 flex flex-col bg-gray-100 transition-all duration-300`}
        style={{
          // Only apply margin on desktop
          marginLeft:
            window.innerWidth >= 768 ? (isCollapsed ? "60px" : "280px") : "60px",
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
