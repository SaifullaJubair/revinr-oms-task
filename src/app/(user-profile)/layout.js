import AuthNavbar from "@/shared/navbar/AuthNavbar";

const AuthLayout = async ({ children }) => {
  return (
    <div>
      <AuthNavbar />
      <div className="bg-gray-100 relative min-h-screen ">{children}</div>
    </div>
  );
};

export default AuthLayout;
