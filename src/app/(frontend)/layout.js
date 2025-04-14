const MainLayout = async ({ children }) => {
  return (
    <div>
      {/* <TopNavbar /> */}
      <div className="sticky top-0 z-30 bg-white">{/* <h1>topbar</h1> */}</div>
      <div className="min-h-screen">{children}</div>
      {/* <h1>footer</h1> */}
    </div>
  );
};

export default MainLayout;
