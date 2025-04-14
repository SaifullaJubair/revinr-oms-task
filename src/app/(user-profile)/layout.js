import AuthNavbar from "@/shared/navbar/AuthNavbar";
import UserProfileNavbar from "@/shared/navbar/UserProfileNavbar";

const AuthLayout = async ({ children }) => {
  return (
    <div>
      <UserProfileNavbar />
      <div className="bg-gray-100 relative min-h-screen ">{children}</div>
    </div>
  );
};

export default AuthLayout;
