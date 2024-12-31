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

const Dashboard = () => {
  const { user } = useSelector((state) => state.user);
  const [customer, setCustomer] = useState(null);
  const navigate = useNavigate();

  const getCustomerInfo = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/getUserData",
        // "https://backend-syndeo.onrender.com/api/v1/getUserData",
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

  return (
    <div>
      <Layout>
        <div>
          <h1 className="pb-3 font-medium leading-normal tracking-normal text-2xl lg:text-start text-center">
            Hello, {customer?.firstName} {customer?.lastName}
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 pt-8">
          <button
            onClick={() => navigate(`/createSchedule/${user?._id}`)}
            className="flex md:justify-start justify-center"
          >
            <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
              <div className="space-y-4">
                <div className="py-8 space-y-2">
                  <div className="flex justify-center items-center">
                    <img src={ai} alt="" className="w-12 h-12" />
                  </div>
                  <div className="flex justify-center items-center text-center">
                    <h1 className="text-xl font-semibold">
                      Create booking page
                    </h1>
                  </div>
                  <div className="flex justify-center items-center text-center">
                    <p className="text-gray-500">
                      Start taking bookings and meet with your customers in no
                      time.
                    </p>
                  </div>
                </div>
                <div className="flex justify-center py-8">
                  <button
                    onClick={() => navigate(`/createSchedule/${user?._id}`)}
                    className="text-colorFour font-semibold"
                  >
                    Create an event
                  </button>
                </div>
              </div>
            </div>
          </button>

          <button
            onClick={() => navigate(`/bookings/${user?._id}`)}
            href=""
            className="flex md:justify-start justify-center"
          >
            <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
              <div className="space-y-4">
                <div className="py-8 space-y-2">
                  <div className="flex justify-center items-center">
                    <img src={calendar} alt="" className="w-12 h-12" />
                  </div>
                  <div className="flex justify-center items-center text-center">
                    <h1 className="text-xl font-semibold">
                      No Upcoming bookings
                    </h1>
                  </div>
                  <div className="flex justify-center items-center text-center">
                    <p className="text-gray-500">
                      As soon as someone books a time with you it will show up
                      here.
                    </p>
                  </div>
                </div>
                <div className="flex justify-center py-8">
                  <button
                    onClick={() => navigate(`/bookings/${user?._id}`)}
                    className="text-colorFour font-semibold"
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
            <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
              <div className="space-y-4">
                <div className="flex justify-center items-center">
                  <img src={premium} alt="" className="w-12 h-12" />
                </div>
                <div className="flex justify-center items-center text-center">
                  <h1 className="text-xl font-semibold">
                    Try our powerful features
                  </h1>
                </div>
                {/* <div className="flex justify-center items-center text-center">
                  <p className="text-gray-500">
                    Start 14 day trial to get more out of YouCanBookMe
                  </p>
                </div> */}

                <div className="bg-[#f8f9f8] rounded space-y-1">
                  <div className="flex flex-row justify-start items-center">
                    <img src={success} alt="" className="w-4 h-4 ml-2" />
                    <h1 className="ml-4 text-gray-500">Automatic reminders</h1>
                  </div>

                  <div className="flex flex-row justify-start items-center">
                    <img src={success} alt="" className="w-4 h-4 ml-2" />
                    <h1 className="ml-4  text-gray-500">
                      Workflows to follow up meetings and track no-shows
                    </h1>
                  </div>

                  <div className="flex flex-row justify-start items-center">
                    <img src={success} alt="" className="w-4 h-4 ml-2" />
                    <h1 className="ml-4  text-gray-500">
                      Let bookers choose meeting length
                    </h1>
                  </div>
                </div>

                <div className="flex justify-center py-6">
                  <button
                    onClick={() => navigate(`/createSchedule/${user?._id}`)}
                    className="border-[1px] border-colorFour hover:bg-colorFour hover:text-white transition duration-1000 font-semibold text-colorFour py-2 px-4 rounded-full"
                  >
                    Start making event
                  </button>
                </div>
              </div>
            </div>
          </button>
        </div>

        <div>
          <h1 className="pt-8 font-medium leading-normal tracking-normal text-2xl lg:text-start text-center">
            Useful links
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 pt-4">
          <a href="" className="flex md:justify-start justify-center">
            <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
              <div className="flex flex-row justify-between">
                <div className="flex justify-center items-center">
                  <img src={gc} alt="" className="w-8 h-8" />
                </div>
                <div className="flex justify-center items-center">
                  <h1 className="font-semibold text-lg">Add to Calendar</h1>
                </div>
                <div className="flex justify-center items-center">
                  <MdOutlineKeyboardArrowRight className="text-gray-500" />
                </div>
              </div>
            </div>
          </a>

          <a href="" className="flex md:justify-start justify-center">
            <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
              <div className="flex flex-row justify-between">
                <div className="flex justify-center items-center">
                  <img src={chrome} alt="" className="w-8 h-8" />
                </div>
                <div className="flex justify-center items-center">
                  <h1 className="font-semibold text-lg">Chrome Extension</h1>
                </div>
                <div className="flex justify-center items-center">
                  <MdOutlineKeyboardArrowRight className="text-gray-500" />
                </div>
              </div>
            </div>
          </a>

          <a href="" className="flex md:justify-start justify-center">
            <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
              <div className="flex flex-row justify-between">
                <div className="flex justify-center items-center">
                  <img src={clock} alt="" className="w-8 h-8" />
                </div>
                <div className="flex justify-center items-center">
                  <h1 className="font-semibold text-lg">Automatic Reminders</h1>
                </div>
                <div className="flex justify-center items-center">
                  <MdOutlineKeyboardArrowRight className="text-gray-500" />
                </div>
              </div>
            </div>
          </a>
        </div>
      </Layout>

      <div className="w-full bg-white text-gray-500 text-sm rounded-4xl">
        <div className="mx-auto max-w-[600px] py-6">
          <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
            <div className="flex justify-center items-center">
              <a href="">© 2024 Syndeo Ltd</a>
            </div>
            <div className="flex justify-center items-center">
              <a href="">Terms</a>
            </div>
            <div className="flex justify-center items-center">
              <a href="">Privacy</a>
            </div>
            <div className="flex justify-center items-center text-colorFour font-bold">
              <a href="">Syndèo</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
