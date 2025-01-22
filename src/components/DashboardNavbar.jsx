import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenu3Fill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { FaHome } from "react-icons/fa";
import { MdOutlineTimer } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const DashboardNavbar = () => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);

  const [bell, setBell] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const handleBell = () => {
    setBell(!bell);
  };

  const handleLogout = () => {
    localStorage.clear();
    setTimeout(() => {
      Swal.fire({
        title: "Logged Out Successfully!!!",
        icon: "success",
      });
    }, 4000);
    navigate("/login");
    window.location.reload();
  };

  const adminMenu = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: FaHome,
    },
  ];

  const userMenu = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: FaHome,
    },
    {
      name: "Make a Schedule",
      path: `/createSchedule/${user?._id}`,
      icon: MdOutlineTimer,
    },
    {
      name: "My Bookings",
      path: `/bookings/${user?._id}`,
      icon: MdOutlineTimer,
    },
    {
      name: "Profile",
      path: `/profile/${user?._id}`,
      icon: MdOutlineTimer,
    },
    // {
    //   name: "Templates",
    //   path: "/dashboard",
    //   icon: MdOutlineTimer,
    // },
  ];

  const orgAdminMenu = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: FaHome,
    },
    {
      name: "Add Employees",
      path: `/addEmployees/${user?._id}`,
      icon: FaHome,
    },
    {
      name: "List of Employees",
      path: `/allEmployees/${user?._id}`,
      icon: FaHome,
    },
    {
      name: "My Profile",
      path: `/profile/${user?._id}`,
      icon: FaHome,
    },
  ];

  const employeeMenu = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: FaHome,
    },
    {
      name: "Make a Schedule",
      path: `/employeeSchedules/${user?._id}`,
      icon: FaHome,
    },
    {
      name: "My Schedules",
      path: `/bookings/${user?._id}`,
      icon: MdOutlineTimer,
    },
    {
      name: "My Profile",
      path: `/profile/${user?._id}`,
      icon: FaHome,
    },
  ];

  const NavbarMenu =
    user?.role === "individual"
      ? userMenu
      : user?.role === "organization"
      ? orgAdminMenu
      : user?.role === "employee"
      ? employeeMenu
      : adminMenu;

  return (
    <div>
      <div className="z-20 fixed w-full bg-white">
        <div className="w-full mx-auto max-w-[1400px]">
          <div className="justify-center w-full">
            <div className="text-black flex justify-between items-center h-[80px] w-full md:top-0 top-0 bg-white max-w-[1400px] mx-auto ">
              <div className="ml-8">
                <div className="text-2xl block">
                  <h2 className="text-colorFour font-bold">Syndèo.</h2>
                </div>
              </div>

              <div className="lg:ml-12 lg:flex hidden">
                {NavbarMenu.map((item) => (
                  <a
                    key={item}
                    href={item.path}
                    className="lg:p-4 p-[11px] cursor-pointer text-footerLinks font-medium uppercase hover:text-colorFour ease-in-out transition duration-500 lg:text-base text-xs tracking-wider"
                  >
                    {item?.name}
                  </a>
                ))}
              </div>

              <div className="lg:block hidden mr-8">
                <button
                  onClick={handleLogout}
                  className="uppercase border-[1px] relative lg:px-6 md:px-4 py-2 rounded bg-colorFour text-sm border-colorFour hover:border-colorFour hover:text-colorFour text-white font-medium overflow-hidden transition-all duration-500 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-auto before:w-0 before:bg-white before:duration-500 before:ease-out  hover:before:h-40 hover:before:w-48 "
                >
                  <span className="relative z-10">Logout</span>
                </button>
              </div>

              <div
                onClick={handleNav}
                className="block lg:hidden cursor-pointer"
              >
                {!nav ? (
                  <RiMenu3Fill className=" mr-4 w-5 h-5" />
                ) : (
                  <AiOutlineClose className=" mr-4 w-5 h-5" />
                )}
              </div>

              <div
                className={
                  !nav
                    ? "lg:hidden fixed left-[-100%] h-[75%] ease-in-out duration-1000 "
                    : "lg:hidden fixed left-0 top-0 w-[70%] border-r h-[100%] bg-white dark:bg-[#000300] ease-in-out duration-1000 rounded-b-lg z-10 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
                }
              >
                <div className="flex flex-row items-center ml-6 mt-6 mb-2">
                  <h4 className="ml-1 text-2xl text-mainColor font-bold cursor-pointer">
                    Syndèo
                  </h4>
                </div>
                <div className=" p-4">
                  {NavbarMenu.map((item) => (
                    <div
                      key={item}
                      className="p-4 border-b border-gray-400 text-footerLinks cursor-pointer font-medium  "
                    >
                      <a href={item.path}>{item.name}</a>
                    </div>
                  ))}
                </div>

                <div
                  className="uppercase mt-6 px-6 cursor-pointer"
                  onClick={handleLogout}
                >
                  <a className=" transition duration-1000 font-semibold text-white text-sm bg-colorFour hover:bg-white border-colorFour py-3 px-12 rounded">
                    Logout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
