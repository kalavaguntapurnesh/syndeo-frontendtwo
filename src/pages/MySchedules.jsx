import Layout from "./../components/Layout";
import { ImSortAmountDesc } from "react-icons/im";
import calendar from "../assets/calendar.svg";

const MySchedules = () => {
  return (
    <div>
      <Layout>
        <div className="flex flex-row ">
          <div className="w-1/2 ">
            <h1 className="pb-3 font-medium leading-normal tracking-normal text-2xl lg:text-start text-center">
              Upcoming Bookings
            </h1>
          </div>

          <div className="w-1/2 flex justify-end">
            <button
              type="button"
              class="text-gray-500 bg-white border border-gray-500 font-medium rounded-full text-sm px-5 py-2.5 "
            >
              Go to Home
            </button>
          </div>
        </div>

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

            <div className="text-center text-gray-500">
              <p>
                Need help? Find out more about sharing your{" "}
                <a href="/dashboard" className="text-colorFour font-medium">
                  booking pages
                </a>
              </p>
            </div>
          </div>
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

export default MySchedules;
