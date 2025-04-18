"use client";
import { RxDashboard } from "react-icons/rx";
import { IoNewspaperOutline } from "react-icons/io5";
import { MdOutlineBrandingWatermark } from "react-icons/md";
import { HiOutlineBuildingOffice2, HiUser, HiUsers } from "react-icons/hi2";
import { FaRegImage, FaAngleLeft } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { TbLogout2, TbReportSearch } from "react-icons/tb";
import { BsBagCheck } from "react-icons/bs";
import { AiOutlineProduct } from "react-icons/ai";
import { PiUserCircleCheckLight } from "react-icons/pi";
import UseGetSettingData from "../../hooks/useGetSettingData";
import Cookies from "js-cookie";

const sidebarItems = [
  { path: "/", name: "Dashboard", icon: <RxDashboard /> },
  { path: "/category", name: "Category", icon: <IoNewspaperOutline /> },
  // { path: "/brand", name: "Brand", icon: <MdOutlineBrandingWatermark /> },
  { path: "/company", name: "Company", icon: <HiOutlineBuildingOffice2 /> },
  { path: "/product", name: "Product", icon: <AiOutlineProduct /> },
  { path: "/banner", name: "Banner", icon: <FaRegImage /> },
  { path: "/order", name: "Order", icon: <BsBagCheck /> },
  { path: "/sales-report", name: "Sale Report", icon: <TbReportSearch /> },
  { path: "/all-users", name: "All Users", icon: <HiUsers /> },
  { path: "/all-staff", name: "All Staff", icon: <PiUserCircleCheckLight /> },
];

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const location = useLocation();
  const { data: getSettingData } = UseGetSettingData();
  const navigate = useNavigate();
  const handleLogOut = () => {
    // Remove the token from cookies
    Cookies.remove("dream_pharma_token");

    // Redirect to the home page
    window.location.reload();
    setTimeout(() => {
      navigate("/sign-in");
    }, 500);
  };
  return (
    <aside
      className={`bg-slate-900 shadow-md transition-all relative duration-300   z-50 ${
        isCollapsed ? "md:w-[80px] w-[60px]" : "w-[220px] lg:w-[250px]"
      }`}
    >
      {/* Logo */}
      <div className="mt-5 px-3">
        <Link to="/">
          <img
            // src={
            //   isCollapsed
            //     ? "https://i.ibb.co/0BZfPq6/darklogo.png"
            //     : `${getSettingData?.data?.[0]?.logo}`
            // }
            src={`${getSettingData?.data?.[0]?.logo}`}
            alt="logo"
            className={`cursor-pointer w-[150px] ${
              isCollapsed ? "h-10" : "h-20"
            }  mx-auto`}
          />
        </Link>
        <div className="border border-gray-300 mt-3"></div>
      </div>

      {/* Collapse Button */}
      <div
        className="absolute  -right-4 transform -translate-y-1/2 bg-blue-700 p-2 rounded-full cursor-pointer transition-all duration-300"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <FaAngleLeft
          className={`text-white text-lg transition-transform duration-300 ${
            isCollapsed ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
      {/* <div className="mt-6 px-3 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 h-[calc(92vh-160px)]  z-50 overflow-x-visible overflow-y-auto"> */}

      {/* Sidebar Items */}
      <div className="mt-6 px-3">
        {sidebarItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center  w-full p-2 mt-1 rounded-md transition-all duration-200 relative group ${
              location.pathname === item.path
                ? "bg-blueColor-700 text-white"
                : "hover:bg-slate-700 text-gray-300"
            } ${isCollapsed ? "justify-center" : ""}`}
          >
            <div className="flex items-center gap-3">
              <div className="text-[1.3rem]">{item.icon}</div>
              {!isCollapsed && (
                <p className="text-[1rem] font-medium">{item.name}</p>
              )}
            </div>

            {/* Tooltip */}
            {isCollapsed && (
              <span className="absolute whitespace-nowrap left-[66px] bg-gray-600 text-white px-3 py-1 rounded-md hidden group-hover:block transition-all duration-300 text-sm">
                {item.name}
              </span>
            )}
          </Link>
        ))}
      </div>

      <hr className="mt-1.5" />
      {/* Settings & Logout */}
      <div className="mt-2 px-3 mb-4">
        <Link
          to="/settings"
          className={`flex items-center w-full p-2 mt-1 gap-3 rounded-md transition-all duration-200 relative group ${
            location.pathname === "/settings"
              ? "bg-blueColor-700 text-white"
              : "hover:bg-slate-700 text-gray-300"
          } ${isCollapsed ? "justify-center" : ""}`}
        >
          <IoSettingsOutline className="text-[1.3rem]" />
          {!isCollapsed && <p className="text-[1rem] font-medium">Settings</p>}
          {isCollapsed && (
            <span className="absolute left-[66px] bg-gray-600 text-white px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">
              Settings
            </span>
          )}
        </Link>

        <div
          className={`flex items-center w-full  p-2 mt-1 gap-3 rounded-md transition-all duration-200 relative group hover:bg-slate-700 text-gray-300 cursor-pointer ${
            isCollapsed ? "justify-center" : ""
          }`}
          onClick={handleLogOut}
        >
          <TbLogout2 className="text-[1.3rem]" />
          {!isCollapsed && <p className="text-[1rem] font-medium">Logout</p>}
          {isCollapsed && (
            <span className="absolute left-[66px] bg-gray-600 text-white px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">
              Logout
            </span>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
