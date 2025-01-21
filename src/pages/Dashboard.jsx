import Layout from "./../components/Layout";
import chrome from "../assets/chrome.svg";
import ai from "../assets/AI.svg";
import calendar from "../assets/calendar.svg";
import clock from "../assets/clock.svg";
import premium from "../assets/PREMIUM.svg";
import gc from "../assets/GC.svg";
import success from "../assets/success.svg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { SlCalender } from "react-icons/sl";
import { MdSchedule } from "react-icons/md";
import { MdOutlineFeaturedVideo } from "react-icons/md";
import { FaCircleArrowRight } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { MdCategory } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { SlGraph } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";
import { MdFilterAlt } from "react-icons/md";


const Dashboard = () => {
  const { user } = useSelector((state) => state.user);
  const [customer, setCustomer] = useState(null);
  const navigate = useNavigate();

  const getCustomerInfo = async () => {
    try {
      const response = await axios.post(
        // "http://localhost:8080/api/v1/getUserData",
        "https://backend-syndeo.onrender.com/api/v1/getUserData",
        { userId: user?._id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.data) {
        setCustomer(response.data.data);
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  useEffect(() => {
    getCustomerInfo();
    //eslint-disable-next-line
  }, []);

  const [categoryOpen, setCategoryOpen] = useState(false);
  const [statusOpen, setStatusOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <div>
      <Layout>
        <div className="lg:flex items-center justify-between">
          <h1 className="pb-3 font-medium leading-normal tracking-normal text-2xl lg:text-start text-center">
            Hello, {customer?.firstName} {customer?.lastName}
          </h1>
          <div className="lg:flex gap-3 ">
            <div className="relative">
              <span className="absolute top-1/2 left-2 transform -translate-y-1/2 text-xl font-bold text-colorFour">
                <CiSearch />
              </span>
              <input
                type="text"
                placeholder="Search for an event"
                className="w-full py-2 pl-8 border border-gray-300 rounded focus:outline-none hover:border-colorFour transition-colors duration-300 "
              />
            </div>

            <div className="lg:flex grid grid-cols-2 gap-2 lg:mt-0 mt-4">
              <div className="relative flex gap-4 items-center justify-between bg-gray-300 p-2 rounded">
                <span className="text-colorFour text-xl">
                  <MdCategory />
                </span>
                <div>All Categories</div>
                <span
                  className="text-2xl shadow-xl hover:bg-white cursor-pointer"
                  onClick={() => setCategoryOpen(!categoryOpen)} 
                >
                  <RiArrowDropDownLine />
                </span>
                {categoryOpen && (
                  <div className="absolute top-full left-0 mt-2 w-full bg-white shadow-lg rounded p-2">
                    
                    <ul>
                      <li className="p-2">Category 1</li>
                      <li className="p-2">Category 2</li>
                      <li className="p-2">Category 3</li>
                    </ul>
                  </div>
                )}
              </div>


              <div className="relative flex gap-4 items-center justify-between bg-gray-300 p-2 rounded">
                <span className="text-colorFour text-xl">
                  <SlGraph />
                </span>
                <div>All Status</div>
                <span
                  className="text-2xl shadow-xl hover:bg-white cursor-pointer"
                  onClick={() => setStatusOpen(!statusOpen)} 
                >
                  <RiArrowDropDownLine />
                </span>
                {statusOpen && (
                  <div className="absolute top-full left-0 mt-2 w-full bg-white shadow-lg rounded p-2">
                    <ul>
                      <li className="p-2">Status 1</li>
                      <li className="p-2">Status 2</li>
                      <li className="p-2">Status 3</li>
                    </ul>
                  </div>
                )}
              </div>

              <div className="relative flex gap-4 items-center justify-between bg-gray-300 p-2 rounded">
                <span className="text-colorFour text-xl font-bold">
                  <FaLocationDot />
                </span>
                <div>All Location</div>
                <span
                  className="text-2xl shadow-xl hover:bg-white cursor-pointer"
                  onClick={() => setLocationOpen(!locationOpen)}
                >
                  <RiArrowDropDownLine />
                </span>
                {locationOpen && (
                  <div className="absolute top-full left-0 mt-2 w-full bg-white shadow-lg rounded p-2">
                    <ul>
                      <li className="p-2">Location 1</li>
                      <li className="p-2">Location 2</li>
                      <li className="p-2">Location 3</li>
                    </ul>
                  </div>
                )}
              </div>

              <div className="relative flex gap-4 items-center justify-between bg-gray-300 p-2 rounded">
                <span className="text-colorFour text-xl">
                  <MdFilterAlt />
                </span>
                <div>Advance Filter</div>
                <span
                  className="text-2xl shadow-xl hover:bg-white cursor-pointer"
                  onClick={() => setFilterOpen(!filterOpen)}
                >
                  <RiArrowDropDownLine />
                </span>
                {filterOpen && (
                  <div className="absolute top-full left-0 mt-2 w-full bg-white shadow-lg rounded p-2">
                    <ul>
                      <li className="p-2">Filter 1</li>
                      <li className="p-2">Filter 2</li>
                      <li className="p-2">Filter 3</li>
                    </ul>
                  </div>
                )}
              </div>

            </div>

          </div>
        </div>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 pt-4">
              <button
                onClick={() => navigate(`/createSchedule/${user?._id}`)}
                className="flex md:justify-start justify-center"
              >
                <div className="w-full p-4 bg-white border border-gray-200 rounded shadow sm:p-6 md:p-8 h-full">
                  <div className="space-y-4 h-full flex flex-col justify-between">
                    <div className="py-8 space-y-2">
                      <div className="flex justify-center items-center">
                        <div className="w-12 h-12 ">
                          <span className="text-5xl  text-colorFour font-bold"><SlCalender /></span>
                        </div>
                      </div>
                      <div className="flex justify-center items-center text-center">
                        <h1 className="text-xl font-semibold">
                          Create booking page
                        </h1>
                      </div>
                      <div className="flex justify-center items-center text-center">
                        <p className="text-gray-500">
                          Start taking bookings and meet with your customers in no time.
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center py-8">
                      <button
                        onClick={() => navigate(`/createSchedule/${user?._id}`)}
                        className="text-colorFour font-semibold text-xl"
                      >
                        Create an event
                      </button>
                    </div>
                  </div>
                </div>
              </button>

              <button
                onClick={() => navigate(`/bookings/${user?._id}`)}
                className="flex md:justify-start justify-center"
              >
                <div className="w-full p-4 bg-white border border-gray-200 rounded shadow sm:p-6 md:p-8 h-full">
                  <div className="space-y-4 h-full flex flex-col justify-between">
                    <div className="py-8 space-y-2">
                      <div className="flex justify-center items-center">
                        <div className="w-12 h-12 ">
                          <span className="text-5xl  text-colorFour font-bold"><MdSchedule /></span>
                        </div>
                      </div>
                      <div className="flex justify-center items-center text-center">
                        <h1 className="text-xl font-semibold">
                          No Upcoming bookings
                        </h1>
                      </div>
                      <div className="flex justify-center items-center text-center">
                        <p className="text-gray-500">
                          As soon as someone books a time with you it will show up here.
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center py-8">
                      <button
                        onClick={() => navigate(`/bookings/${user?._id}`)}
                        className="text-colorFour font-semibold text-xl"
                      >
                        View all Bookings
                      </button>
                    </div>
                  </div>
                </div>
              </button>

              <button
                onClick={() => navigate(`/createSchedule/${user?._id}`)}
                className="flex md:justify-start justify-center"
              >
                <div className="w-full p-4 bg-white border border-gray-200 rounded shadow sm:p-6 md:p-8 h-full">
                  <div className="space-y-4 h-full flex flex-col justify-between">
                    <div className="flex justify-center items-center">
                      <div className="w-12 h-12 ">
                        <span className="text-5xl  text-colorFour font-bold"><MdOutlineFeaturedVideo /></span>
                      </div>
                    </div>
                    <div className="flex justify-center items-center text-center">
                      <h1 className="text-xl font-semibold">
                        Try our powerful features
                      </h1>
                    </div>

                    <div className=" rounded space-y-3 p-2">
                      <div className="flex flex-row justify-start items-center">
                        <span className="text-xl text-colorFour font-bold"><FaCircleArrowRight /></span>
                        <h1 className="ml-3 text-gray-500 leading-tight">Automatic reminders</h1>
                      </div>

                      <div className="flex flex-row justify-start items-center">
                        <span className="text-xl text-colorFour font-bold"><FaCircleArrowRight /></span>
                        <h1 className="ml-3 text-gray-500 leading-tight">
                          Workflows to follow up meetings
                        </h1>
                      </div>

                      <div className="flex flex-row justify-start items-center">
                        <span className="text-xl text-colorFour font-bold"><FaCircleArrowRight /></span>
                        <h1 className="ml-3 text-gray-500 leading-tight">
                          Let bookers choose meeting length
                        </h1>
                      </div>
                    </div>



                    <div className="flex justify-center py-6">
                      <button
                        onClick={() => navigate(`/createSchedule/${user?._id}`)}
                        className="text-colorFour font-semibold text-xl"
                      >
                        Start making event
                      </button>
                    </div>
                  </div>
                </div>
              </button>
        </div>
        
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 pt-4">
              <button
                onClick={() => navigate(`/createSchedule/${user?._id}`)}
                className="flex md:justify-start justify-center"
              >
                <div className="w-full p-4 bg-white border border-gray-200 rounded shadow sm:p-6 md:p-8 h-full">
                  <div className="space-y-4 h-full flex flex-col justify-between">
                    <div className="py-8 space-y-2">
                      <div className="flex justify-center items-center">
                        <div className="w-12 h-12 ">
                          <span className="text-5xl  text-colorFour font-bold"><SlCalender /></span>
                        </div>
                      </div>
                      <div className="flex justify-center items-center text-center">
                        <h1 className="text-xl font-semibold">
                          Create booking page
                        </h1>
                      </div>
                      <div className="flex justify-center items-center text-center">
                        <p className="text-gray-500">
                          Start taking bookings and meet with your customers in no time.
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center py-8">
                      <button
                        onClick={() => navigate(`/createSchedule/${user?._id}`)}
                        className="text-colorFour font-semibold text-xl"
                      >
                        Create an event
                      </button>
                    </div>
                  </div>
                </div>
              </button>

              <button
                onClick={() => navigate(`/bookings/${user?._id}`)}
                className="flex md:justify-start justify-center"
              >
                <div className="w-full p-4 bg-white border border-gray-200 rounded shadow sm:p-6 md:p-8 h-full">
                  <div className="space-y-4 h-full flex flex-col justify-between">
                    <div className="py-8 space-y-2">
                      <div className="flex justify-center items-center">
                        <div className="w-12 h-12 ">
                          <span className="text-5xl  text-colorFour font-bold"><MdSchedule /></span>
                        </div>
                      </div>
                      <div className="flex justify-center items-center text-center">
                        <h1 className="text-xl font-semibold">
                          No Upcoming bookings
                        </h1>
                      </div>
                      <div className="flex justify-center items-center text-center">
                        <p className="text-gray-500">
                          As soon as someone books a time with you it will show up here.
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center py-8">
                      <button
                        onClick={() => navigate(`/bookings/${user?._id}`)}
                        className="text-colorFour font-semibold text-xl"
                      >
                        View all Bookings
                      </button>
                    </div>
                  </div>
                </div>
              </button>

              <button
                onClick={() => navigate(`/createSchedule/${user?._id}`)}
                className="flex md:justify-start justify-center"
              >
                <div className="w-full p-4 bg-white border border-gray-200 rounded shadow sm:p-6 md:p-8 h-full">
                  <div className="space-y-4 h-full flex flex-col justify-between">
                    <div className="flex justify-center items-center">
                      <div className="w-12 h-12 ">
                        <span className="text-5xl  text-colorFour font-bold"><MdOutlineFeaturedVideo /></span>
                      </div>
                    </div>
                    <div className="flex justify-center items-center text-center">
                      <h1 className="text-xl font-semibold">
                        Try our powerful features
                      </h1>
                    </div>

                    <div className=" rounded space-y-3 p-2">
                      <div className="flex flex-row justify-start items-center">
                        <span className="text-xl text-colorFour font-bold"><FaCircleArrowRight /></span>
                        <h1 className="ml-3 text-gray-500 leading-tight">Automatic reminders</h1>
                      </div>

                      <div className="flex flex-row justify-start items-center">
                        <span className="text-xl text-colorFour font-bold"><FaCircleArrowRight /></span>
                        <h1 className="ml-3 text-gray-500 leading-tight">
                          Workflows to follow up meetings
                        </h1>
                      </div>

                      <div className="flex flex-row justify-start items-center">
                        <span className="text-xl text-colorFour font-bold"><FaCircleArrowRight /></span>
                        <h1 className="ml-3 text-gray-500 leading-tight">
                          Let bookers choose meeting length
                        </h1>
                      </div>
                    </div>



                    <div className="flex justify-center py-6">
                      <button
                        onClick={() => navigate(`/createSchedule/${user?._id}`)}
                        className="text-colorFour font-semibold text-xl"
                      >
                        Start making event
                      </button>
                    </div>
                  </div>
                </div>
              </button>
        </div>

        
      </Layout>

      {/* <div className="w-full bg-white text-gray-500 text-sm rounded-4xl">
        <div className="mx-auto max-w-[600px] py-6">
          <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
            <div className="flex justify-center items-center text-colorFour font-bold">
              <a href="">© 2024 Syndeo Ltd</a>
            </div>
            <div className="flex justify-center items-center text-colorFour font-bold">
              <a href="">Terms</a>
            </div>
            <div className="flex justify-center items-center text-colorFour font-bold">
              <a href="">Privacy</a>
            </div>
            <div className="flex justify-center items-center text-colorFour font-bold">
              <a href="">Syndèo</a>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Dashboard;
