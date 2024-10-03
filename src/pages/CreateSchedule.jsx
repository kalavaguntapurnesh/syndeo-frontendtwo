import Layout from "../components/Layout";
import Calendar from "react-calendar";
import axios from "axios";
import "react-calendar/dist/Calendar.css";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";

const CreateSchedule = () => {
  const { user } = useSelector((state) => state.user);
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  const handleDateChange = (newDate) => {
    setDate(newDate);
    setShowModal(false); // Close the modal after date selection
  };

  const handleStartTimeChange = (event) => {
    setStartTime(event.target.value);
    const selectedStartTime = new Date(date);
    const [hours, minutes] = event.target.value.split(":").map(Number);
    selectedStartTime.setHours(hours, minutes);
    selectedStartTime.setMinutes(selectedStartTime.getMinutes() + 30); // Set minimum end time
    const minEndTime = selectedStartTime.toTimeString().slice(0, 5);
    setEndTime(minEndTime); // Update end time accordingly
  };

  const handleEndTimeChange = (event) => {
    setEndTime(event.target.value);
  };

  const renderTimeOptions = () => {
    const options = [];
    for (let h = 0; h < 24; h++) {
      for (let m = 0; m < 60; m += 30) {
        const time = `${String(h).padStart(2, "0")}:${String(m).padStart(
          2,
          "0"
        )}`;
        options.push(
          <option key={time} value={time}>
            {time}
          </option>
        );
      }
    }
    return options;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(showLoading());
    axios
      .post("http://localhost:8080/api/v1/makeIndividualSchedules", {
        userId: params.id,
        title,
        description,
        location,
        date,
        startTime,
        endTime,
      })
      .then((response) => {
        dispatch(hideLoading());
        if (response.status === 200) {
          Swal.fire({
            title: "Schedule booking Successful",
            text: "Invites can use the link below to attend the event.",
            icon: "success",
          });
          navigate("/login");
        }
      })
      .catch((error) => {
        dispatch(hideLoading());
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };

  return (
    <div>
      <Layout>
        <div>
          <h1 className="pb-3 font-medium leading-normal text-colorFour tracking-normal text-2xl lg:text-start text-center">
            To make a new scheduling, fill the following details.
          </h1>
        </div>

        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-bold text-colorThree dark:text-white"
              >
                Title of the event
              </label>
              <input
                type="text"
                name="title"
                id="title"
                className=" border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Give your event a name"
                required
                onChange={(e) => setTitle(e.target.value)}
              ></input>
            </div>

            <div>
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-bold text-colorThree dark:text-white"
              >
                Description (optional)
              </label>
              <input
                type="text"
                name="description"
                id="description"
                className=" border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Here you can include things like agenda, instructions and other details."
                required
                onChange={(e) => setDescription(e.target.value)}
              ></input>
            </div>

            <div>
              <label
                htmlFor="location"
                className="block mb-2 text-sm font-bold text-colorThree dark:text-white"
              >
                Location (optional)
              </label>
              <input
                type="text"
                name="location"
                id="location"
                className=" border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your location or address of the event"
                required
                onChange={(e) => setLocation(e.target.value)}
              ></input>
            </div>

            <div>
              <label
                htmlFor="date"
                className="block mb-2 text-sm font-bold text-colorThree dark:text-white"
              >
                Enter the date
              </label>
              <input
                type="text"
                name="date"
                value={date.toDateString()}
                onClick={() => setShowModal(true)}
                id="date"
                className=" border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Select the date for your event"
                required
                onChange={(e) => setDate(e.target.value)}
              ></input>

              {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                  <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-xl mb-4 text-colorFour font-semibold text-center">
                      Select the date
                    </h2>
                    <Calendar
                      onChange={handleDateChange}
                      value={date}
                      className="react-calendar"
                      minDate={new Date()}
                    />
                    <div className="flex justify-center items-center">
                      <button
                        onClick={() => setShowModal(false)} // Close the modal on cancel
                        className="mt-4 px-4 py-2 bg-colorFour text-white rounded-full hover:bg-green-800 transition duration-1000 ease-in-out"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div>
              <label
                htmlFor="startTime"
                className="block mb-2 text-sm font-bold text-colorThree dark:text-white"
              >
                Enter the Start Time
              </label>
              <select
                value={startTime}
                onChange={handleStartTimeChange}
                className=" border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">Select Start Time</option>
                {renderTimeOptions()}
              </select>
            </div>

            <div>
              <label
                htmlFor="endTime"
                className="block mb-2 text-sm font-bold text-colorThree dark:text-white"
              >
                Enter the End Time
              </label>
              <select
                value={endTime}
                onChange={handleEndTimeChange}
                className=" border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                disabled={!startTime} // Disable if no start time is selected
              >
                <option value="">Select End Time</option>
                {startTime &&
                  renderTimeOptions().filter((option) => {
                    const [startHours, startMinutes] = startTime
                      .split(":")
                      .map(Number);
                    const [endHours, endMinutes] = option.key
                      .split(":")
                      .map(Number);
                    const startTimeInMinutes =
                      startHours * 60 + startMinutes + 30; // add 30 minutes
                    const endTimeInMinutes = endHours * 60 + endMinutes;

                    return endTimeInMinutes >= startTimeInMinutes;
                  })}
              </select>
            </div>
          </div>

          <div className="md:pt-8 pt-4 pb-4">
            <div className="flex justify-center">
              <button class="  hover:text-white transition duration-1000 text-white bg-colorFour hover:bg-green-600 py-3 px-8 rounded-full">
                Make Schedule
              </button>
            </div>
          </div>
        </form>
      </Layout>
    </div>
  );
};

export default CreateSchedule;
