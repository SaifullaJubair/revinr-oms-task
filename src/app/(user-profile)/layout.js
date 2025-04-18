import UserProfileNavbar from "@/shared/navbar/UserProfileNavbar";
import Sidebar from "@/shared/Sidebar";


const AuthLayout = async ({ children }) => {
  return (
    <div>
      <div className={`w-full overflow-x-auto scrollbar-thin`}>
        <Sidebar />
        <header className=" bg-gray-100">
          <UserProfileNavbar />
        </header>

        <div className="bg-gray-100 relative min-h-screen ">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
