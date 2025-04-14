import Navbar from "@/shared/navbar/Navbar";

const MainLayout = async ({ children }) => {
  return (
    <div>
      {/* <TopNavbar /> */}
      <div className="sticky top-0 z-30 bg-white">
        <Navbar />
      </div>
      <div className="min-h-screen bg-gray-100">{children}</div>
      {/* <h1>footer</h1> */}
    </div>
  );
};

export default MainLayout;
