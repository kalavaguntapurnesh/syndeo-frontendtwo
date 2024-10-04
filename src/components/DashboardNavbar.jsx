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
    Swal.fire({
      title: "Logged Out Successfully!!!",
      icon: "success",
    });
    navigate("/login");
    setTimeout(function () {
      window.location.reload();
    }, 1500);
  };

  const adminMenu = [
    {
      name: "Home",
      path: "/dashboard",
      icon: FaHome,
    },
  ];

  const userMenu = [
    {
      name: "Home",
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
    {
      name: "Templates",
      path: "/dashboard",
      icon: MdOutlineTimer,
    },
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
      name: "Display Employees",
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
                <div className="text-xl block">
                  <h2 className="text-colorFour font-bold">SYNDÈO.</h2>
                </div>
              </div>

              <div className="lg:ml-12 lg:flex hidden">
                {NavbarMenu.map((item) => (
                  <a
                    key={item}
                    href={item.path}
                    className="lg:p-4 p-[11px] cursor-pointer text-colorFour font-semibold lg:text-base text-xs tracking-wider"
                  >
                    {item?.name}
                  </a>
                ))}
              </div>

              <div className="lg:block hidden mr-8">
                <button
                  onClick={handleLogout}
                  class=" bg-colorFour hover:bg-green-600 transition duration-1000 text-white py-2 px-6 rounded-full"
                >
                  Logout
                </button>
              </div>
              {/* 
              <div className="cursor-pointer lg:block hidden">
                <button
                  onClick={() => navigate(`/profile/${user?._id}`)}
                  className="flex justify-center items-center w-12 h-12 rounded-full font-extrabold text-[#ffffff] bg-colorFour"
                >
                  {firstNameInitial} {lastNameInitial}
                </button>
              </div> */}

              <div
                onClick={handleNav}
                className="block lg:hidden cursor-pointer"
              >
                {!nav ? (
                  <RiMenu3Fill size={28} className=" mr-4 " />
                ) : (
                  <AiOutlineClose size={28} className=" mr-4" />
                )}
              </div>

              <div
                className={
                  !nav
                    ? "lg:hidden fixed left-[-100%] h-[75%] ease-in-out duration-1000 "
                    : "lg:hidden fixed left-0 top-0 w-[70%] border-r h-[80%] bg-white dark:bg-[#000300] ease-in-out duration-1000 rounded-b-lg z-10 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
                }
              >
                <h1 className="w-full text-2xl text-colorFour font-bold m-4 cursor-pointer">
                  SYNDÈO.
                </h1>
                <div className="uppercase p-4">
                  {NavbarMenu.map((item) => (
                    <div
                      key={item}
                      className="p-4 border-b border-gray-500 text-colorFour cursor-pointer font-semibold dark:text-white"
                    >
                      <a href={item.path}>{item.name}</a>
                    </div>
                  ))}
                </div>
                {/* <div className="uppercase">
                  <a
                    href="/notifications"
                    className="py-4 px-8 border-gray-600 text-colorThree cursor-pointer font-medium dark:text-white"
                  >
                    Notifications
                  </a>
                </div> */}
                <div className="uppercase mt-6 px-8" onClick={handleLogout}>
                  <a
                    className="py-2.5 px-8 border-gray-600 cursor-pointer font-medium bg-cdnColorTwo
        rounded-[4px] text-white text-sm"
                  >
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
