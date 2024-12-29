import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="max-w-[1400px] m-auto pt-28 pb-12">
        <section id="pricing">
          <div className="space-y-3">
            <div className="flex items-center text-center justify-center ">
              <div className="h-4 w-1 bg-mainColor"></div>

              <p className="ml-2 lg:text-lg font-semibold text-mainColor">
                Our Plans
              </p>
            </div>

            <div className="text-center mt-4">
              <h3 className="lg:text-4xl text-2xl font-bold text-headingColor">
                Explore our pricing options
              </h3>
            </div>

            <div className="text-gray-600 text-center">
              <p>
                Choose a plan that fits your needs, offering flexibility, value,
                and transparency every step forward.
              </p>
            </div>
          </div>
          <div className="flex flex-col mt-10 mx-5 space-y-5 md:space-y-0 md:flex-row md:space-x-5 md:mx-0 justify-between">
            <div className="flex-1 cursor-pointer bg-white border border-gray-200 rounded">
              <div className="bg-white p-10 rounded">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900">Basic</h4>
                    <p className="text-xs text-gray-500">
                      Basic feature at no cost
                    </p>
                  </div>
                  <div>
                    <div className="bg-gray-100 p-2 rounded text-center">
                      <h4 className="text-2xl font-bold text-gray-900">
                        $0.00
                      </h4>
                      <p className="text-xs text-gray-500">Per month</p>
                    </div>
                  </div>
                </div>
                <hr className="text-gray-100 mt-5" />

                <div className="mt-10">
                  <ul role="list" className="space-y-4">
                    <li className="flex items-center">
                      <div className="bg-colorFour rounded-full p-1">
                        <svg
                          className="flex-shrink-0 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>

                      <span className="ml-3 text-base text-cdnColor">
                        2 appointments per month
                      </span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-colorFour rounded-full p-1">
                        <svg
                          className="flex-shrink-0 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>

                      <span className="ml-3 text-base text-cdnColor">
                        Email Notifications & Reminders
                      </span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-colorFour rounded-full p-1">
                        <svg
                          className="flex-shrink-0 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>

                      <span className="ml-3 text-base text-cdnColor">
                        Custom help desk
                      </span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-red-500 rounded-full p-1">
                        <svg
                          className="flex-shrink-0 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          // className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>

                      <span className="ml-3 text-base text-gray-500">
                        Worldwide Accessibility
                      </span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-red-500 rounded-full p-1">
                        <svg
                          className="flex-shrink-0 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          // className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>

                      <span className="ml-3 text-base text-gray-500">
                        Automatic Timezone Conversion
                      </span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-red-500 rounded-full p-1">
                        <svg
                          className="flex-shrink-0 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          // className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>

                      <span className="ml-3 text-base text-gray-500">
                        Employee Verified Online Booking
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="mt-12">
                  <button
                    onClick={() => navigate("/login")}
                    className="bg-white border border-colorFour text-colorFour  w-full py-3 rounded"
                  >
                    Get started
                  </button>
                </div>
              </div>
            </div>

            <div className="flex-1 cursor-pointer rounded bg-white border border-gray-200">
              <div className="bg-cdnColor p-10 rounded">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-2xl font-bold text-black">
                      Professional
                    </h4>
                    <p className="text-xs text-gray-500">Individual level</p>
                  </div>
                  <div>
                    <div className="bg-gray-100 p-2 rounded text-center">
                      <h4 className="text-2xl font-bold text-gray-900">
                        $9.90
                      </h4>
                      <p className="text-xs text-gray-500">Per month</p>
                    </div>
                  </div>
                </div>
                <hr className="text-gray-800 mt-5" />

                <div className="mt-10 flex-grow">
                  <ul role="list" className="space-y-4">
                    <li className="flex items-center">
                      <div className="bg-colorFour rounded-full p-1">
                        <svg
                          className="flex-shrink-0 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>

                      <span className="ml-3 text-base text-black">
                        Unlimited appointments per month
                      </span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-colorFour rounded-full p-1">
                        <svg
                          className="flex-shrink-0 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>

                      <span className="ml-3 text-base text-black">
                        Email Notifications & Reminders
                      </span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-colorFour rounded-full p-1">
                        <svg
                          className="flex-shrink-0 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>

                      <span className="ml-3 text-base text-black">
                        Custom help desk
                      </span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-colorFour rounded-full p-1">
                        <svg
                          className="flex-shrink-0 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>

                      <span className="ml-3 text-base text-black">
                        Worldwide Accessibility
                      </span>
                    </li>

                    <li className="flex items-center">
                      <div className="bg-colorFour rounded-full p-1">
                        <svg
                          className="flex-shrink-0 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>

                      <span className="ml-3 text-base text-black">
                        Automatic Timezone Conversion
                      </span>
                    </li>

                    <li className="flex items-center">
                      <div className="bg-red-500 rounded-full p-1">
                        <svg
                          className="flex-shrink-0 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          // className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>

                      <span className="ml-3 text-base text-gray-500">
                        Employee Verified Online Booking
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="mt-12">
                  <button
                    onClick={() => navigate("/login")}
                    className="bg-white border border-colorFour text-colorFour  w-full py-3 rounded"
                  >
                    Get started
                  </button>
                </div>
              </div>
            </div>

            <div className="flex-1 cursor-pointer rounded bg-white border border-gray-200">
              <div className="bg-white p-10 rounded">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900">
                      Organization
                    </h4>
                    <p className="text-xs text-gray-500">Enterprise level</p>
                  </div>
                  <div>
                    <div className="bg-gray-100 p-2 rounded text-center">
                      <h4 className="text-2xl font-bold text-gray-900">
                        $14.90
                      </h4>
                      <p className="text-xs text-gray-500">Per month</p>
                    </div>
                  </div>
                </div>
                <hr className="text-gray-100 mt-5" />

                <div className="mt-10 flex-grow">
                  <ul role="list" className="space-y-4">
                    <li className="flex items-center">
                      <div className="bg-colorFour rounded-full p-1">
                        <svg
                          className="flex-shrink-0 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>

                      <span className="ml-3 text-base text-cdnColor">
                        Unlimited appointments per month
                      </span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-colorFour rounded-full p-1">
                        <svg
                          className="flex-shrink-0 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>

                      <span className="ml-3 text-base text-cdnColor">
                        Customizable Emails & Reminders
                      </span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-colorFour rounded-full p-1">
                        <svg
                          className="flex-shrink-0 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>

                      <span className="ml-3 text-base text-black">
                        Custom help desk
                      </span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-colorFour rounded-full p-1">
                        <svg
                          className="flex-shrink-0 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>

                      <span className="ml-3 text-base text-black">
                        Worldwide Accessibility
                      </span>
                    </li>

                    <li className="flex items-center">
                      <div className="bg-colorFour rounded-full p-1">
                        <svg
                          className="flex-shrink-0 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>

                      <span className="ml-3 text-base text-black">
                        Automatic Timezone Conversion
                      </span>
                    </li>

                    <li className="flex items-center">
                      <div className="bg-colorFour rounded-full p-1">
                        <svg
                          className="flex-shrink-0 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>

                      <span className="ml-3 text-base text-black">
                        Employee Verified Online Booking
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="mt-12">
                  <button
                    onClick={() => navigate("/login")}
                    className="bg-white border border-colorFour text-colorFour  w-full py-3 rounded"
                  >
                    Get started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Pricing;
