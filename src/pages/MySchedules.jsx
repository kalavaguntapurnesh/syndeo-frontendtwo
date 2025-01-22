import Layout from "./../components/Layout";
import calendar from "../assets/calendar.svg";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import axios from "axios";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

const MySchedules = () => {
  const { user } = useSelector((state) => state.user);
  const [upcomingSchedules, setUpcomingSchedules] = useState([]);
  const [pastSchedules, setPastSchedules] = useState([]);
  const [showMoreUpcoming, setShowMoreUpcoming] = useState(false);
  const [showMorePast, setShowMorePast] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getIndividualSchedules = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/getIndividualSchedules",
        // "https://backend-syndeo.onrender.com/api/v1/getIndividualSchedules",
        { userId: params.id }
      );
      if (Array.isArray(response.data)) {
        const today = new Date().toDateString();
        const upcoming = response.data.filter(
          (schedule) => new Date(schedule.date) >= new Date(today)
        );
        const past = response.data.filter(
          (schedule) => new Date(schedule.date) < new Date(today)
        );
        setUpcomingSchedules(upcoming);
        setPastSchedules(past);
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
    getIndividualSchedules();
  }, []);

  const toggleShowMoreUpcoming = () => setShowMoreUpcoming(!showMoreUpcoming);
  const toggleShowMorePast = () => setShowMorePast(!showMorePast);

  return (
    <div>
      <Layout>
        <div className="flex flex-row ">
          <div className="w-1/2 ">
            <h1 className="pb-3 font-medium leading-normal tracking-normal md:text-2xl text-lg lg:text-start text-center">
              Upcoming Bookings
            </h1>
          </div>

          <div className="w-1/2 flex justify-end">
            <button
              onClick={() => navigate("/dashboard")}
              type="button"
              className="text-gray-500 bg-white border hover:bg-colorFour hover:text-white transition duration-1000 ease-in-out border-gray-500 font-medium rounded-full text-sm md:px-5 md:py-2.5 px-2"
            >
              Go to Home
            </button>
          </div>
        </div>

        {upcomingSchedules.length > 0 ? (
          <div className="mt-4 container mx-auto p-4">
            <div className="hidden md:block">
              <table className="min-w-full table-auto bg-white border border-gray-200 shadow-md rounded-lg">
                <thead>
                  <tr>
                    <th className="px-6 py-3 bg-colorFour text-left text-xs font-medium text-white uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-6 py-3 bg-colorFour lg:block hidden text-left text-xs font-medium text-white uppercase tracking-wider">
                      Description
                    </th>
                    <th className="px-6 py-3 bg-colorFour text-left text-xs font-medium text-white uppercase tracking-wider">
                      Location
                    </th>
                    <th className="px-6 py-3 bg-colorFour text-left text-xs font-medium text-white uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 bg-colorFour text-left text-xs font-medium text-white uppercase tracking-wider">
                      Start Time
                    </th>
                    <th className="px-6 py-3 bg-colorFour text-left text-xs font-medium text-white uppercase tracking-wider">
                      End Time
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {upcomingSchedules
                    .slice(0, showMoreUpcoming ? upcomingSchedules.length : 3)
                    .map((schedule) => (
                      <tr key={schedule}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600">
                          {schedule.title}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap lg:block hidden text-sm font-medium text-gray-600">
                          {schedule.description}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600">
                          {schedule.location}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600">
                          {schedule.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600">
                          {schedule.startTime}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600">
                          {schedule.endTime}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
              {upcomingSchedules.length > 3 && (
                <div className="flex justify-center items-center">
                  <button
                    onClick={toggleShowMoreUpcoming}
                    className="mt-4 text-blue-500 hover:underline"
                  >
                    {showMorePast ? "Show Less" : "Show More"}
                  </button>
                </div>
              )}
            </div>

            <div className="block md:hidden">
              {upcomingSchedules.map((schedule) => (
                <div key={schedule} className="mb-4 border-2 rounded-lg shadow-sm bg-white border-colorFour flex flex-col space-y-1">
                  <div className="flex justify-center items-center w-full bg-colorFour pt-1 pb-1">
                    <p className="text-base text-white">
                      Event Name: {schedule.title}
                    </p>
                  </div>
                  <div className="flex justify-center items-center ">
                    <p className="text-base text-gray-600">
                      Description: {schedule.description}
                    </p>
                  </div>
                  <div className="flex justify-center items-center ">
                    <p className="text-base text-gray-600">
                      Location: {schedule.location}
                    </p>
                  </div>
                  <div className="flex justify-center items-center">
                    <p className="text-base text-gray-600">
                      Date of Event: {schedule.date}
                    </p>
                  </div>
                  <div className="flex justify-center items-center flex-row pb-1">
                    <p className="text-base text-gray-600">
                      Start Time: {schedule.startTime}
                    </p>
                    <p className="ml-2 text-base text-gray-600">
                      End Time: {schedule.endTime}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-white shadow rounded mt-12">
            <div className="space-y-4 py-12">
              <div className="flex justify-center items-center ">
                <img src={calendar} alt="" className="w-12 h-12" />
              </div>
              <div className="text-center">
                <h1 className="leading-normal tracking-normal text-2xl text-gray-500">
                  No upcoming bookings
                </h1>
              </div>

              <div className="text-center text-gray-500 md:text-base text-sm">
                <p>
                  Need help? Find out more about sharing your{" "}
                  <a href="/dashboard" className="text-colorFour font-medium">
                    booking pages
                  </a>
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="w-1/2 my-4">
          <h1 className="pb-3 font-medium leading-normal tracking-normal md:text-2xl text-lg lg:text-start text-center">
            Past Bookings
          </h1>
        </div>
        {pastSchedules.length > 0 ? (
          <div className="mt-4 container mx-auto p-4">
            <div className="hidden md:block">
              <table className="min-w-full table-auto bg-white border border-gray-200 shadow-md rounded-lg">
                <thead>
                  <tr>
                    <th className="px-6 py-3 bg-colorFour text-left text-xs font-medium text-white uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-6 py-3 bg-colorFour lg:block hidden text-left text-xs font-medium text-white uppercase tracking-wider">
                      Description
                    </th>
                    <th className="px-6 py-3 bg-colorFour text-left text-xs font-medium text-white uppercase tracking-wider">
                      Location
                    </th>
                    <th className="px-6 py-3 bg-colorFour text-left text-xs font-medium text-white uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 bg-colorFour text-left text-xs font-medium text-white uppercase tracking-wider">
                      Start Time
                    </th>
                    <th className="px-6 py-3 bg-colorFour text-left text-xs font-medium text-white uppercase tracking-wider">
                      End Time
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {pastSchedules
                    .slice(0, showMorePast ? pastSchedules.length : 3)
                    .map((schedule) => (
                      <tr key={schedule}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600">
                          {schedule.title}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap lg:block hidden text-sm font-medium text-gray-600">
                          {schedule.description}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600">
                          {schedule.location}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600">
                          {schedule.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600">
                          {schedule.startTime}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600">
                          {schedule.endTime}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>

              {pastSchedules.length > 3 && (
                <div className="flex justify-center items-center">
                  <button
                    onClick={toggleShowMorePast}
                    className="mt-4 text-blue-500 hover:underline"
                  >
                    {showMorePast ? "Show Less" : "Show More"}
                  </button>
                </div>
              )}
            </div>

            <div className="block md:hidden">
              {pastSchedules.map((schedule) => (
                <div key={schedule} className="mb-4 border-2 rounded-lg shadow-sm bg-white border-colorFour flex flex-col space-y-1">
                  <div className="flex justify-center items-center w-full bg-colorFour pt-1 pb-1">
                    <p className="text-base text-white">
                      Event Name: {schedule.title}
                    </p>
                  </div>
                  <div className="flex justify-center items-center ">
                    <p className="text-base text-gray-600">
                      Description: {schedule.description}
                    </p>
                  </div>
                  <div className="flex justify-center items-center ">
                    <p className="text-base text-gray-600">
                      Location: {schedule.location}
                    </p>
                  </div>
                  <div className="flex justify-center items-center">
                    <p className="text-base text-gray-600">
                      Date of Event: {schedule.date}
                    </p>
                  </div>
                  <div className="flex justify-center items-center flex-row pb-1">
                    <p className="text-base text-gray-600">
                      Start Time: {schedule.startTime}
                    </p>
                    <p className="ml-2 text-base text-gray-600">
                      End Time: {schedule.endTime}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-white shadow rounded mt-12">
            <div className="space-y-4 py-12">
              <div className="flex justify-center items-center ">
                <img src={calendar} alt="" className="w-12 h-12" />
              </div>
              <div className="text-center">
                <h1 className="leading-normal tracking-normal text-2xl text-gray-500">
                  No upcoming bookings
                </h1>
              </div>

              <div className="text-center text-gray-500 md:text-base text-sm">
                <p>
                  Need help? Find out more about sharing your{" "}
                  <a href="/dashboard" className="text-colorFour font-medium">
                    booking pages
                  </a>
                </p>
              </div>
            </div>
          </div>
        )}
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

export default MySchedules;
