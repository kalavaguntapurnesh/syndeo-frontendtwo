import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import quote from "../assets/Quote.svg";
import ScrollToTop from "../components/ScrollToTop";

const Pricing = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />

      <ScrollToTop />

      <div className="lg:pt-28 pt-24 pb-12">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px]">
              <div className="p-4">
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
                        Choose a plan that fits your needs, offering
                        flexibility, value, and transparency every step forward.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col mt-10 mx-5 space-y-5 md:space-y-0 md:flex-row md:space-x-5 md:mx-0 justify-between">
                    <div className="flex-1 cursor-pointer bg-white border border-gray-200 rounded shadow">
                      <div className="bg-white p-10 rounded">
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="text-2xl font-bold text-gray-900">
                              Basic
                            </h4>
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

                    <div className="flex-1 cursor-pointer rounded bg-white border border-gray-200 shadow">
                      <div className="bg-cdnColor p-10 rounded">
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="text-2xl font-bold text-black">
                              Professional
                            </h4>
                            <p className="text-xs text-gray-500">
                              Individual level
                            </p>
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

                    <div className="flex-1 cursor-pointer rounded bg-white border border-gray-200 shadow">
                      <div className="bg-white p-10 rounded">
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="text-2xl font-bold text-gray-900">
                              Organization
                            </h4>
                            <p className="text-xs text-gray-500">
                              Enterprise level
                            </p>
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
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-12 flex justify-center flex-col">
          <div className="py-8">
            <div className="space-y-3">
              <div className="flex items-center text-center justify-center ">
                <div className="h-4 w-1 bg-mainColor"></div>

                <p className="ml-2 lg:text-lg font-semibold text-mainColor">
                  Client testimonials hub
                </p>
              </div>

              <div className="text-center mt-4">
                <h3 className="lg:text-4xl text-2xl font-bold text-headingColor">
                  What our clients say
                </h3>
              </div>

              <div className="text-gray-600 text-center">
                <p>
                  Hear from our satisfied clients who have experienced
                  streamlined scheduling, enhanced productivity, and effortless
                  appointment management with Syndèo
                </p>
              </div>
            </div>

            <div className="pt-16">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4">
                <div className="flex md:justify-start justify-center">
                  <div className="w-full max-w-sm bg-white border border-gray-200 p-6">
                    <div className="space-y-3">
                      <div>
                        <img
                          src={quote}
                          alt=""
                          className="md:w-[52px] md:h-[52px] w-12 h-12"
                        />
                      </div>
                      {/* <div className="flex flex-row">
                        <img src={Star} alt="" className="w-5 h-5" />
                        <img src={Star} alt="" className="w-5 h-5" />
                        <img src={Star} alt="" className="w-5 h-5" />
                        <img src={Star} alt="" className="w-5 h-5" />
                        <img src={Star} alt="" className="w-5 h-5" />
                      </div> */}

                      <div>
                        <p>
                          Syndèo’s features are incredibly well-thought-out.
                          From setup to reminders, everything works perfectly. I
                          can’t imagine my routine schedules without it.
                        </p>
                      </div>

                      <div>
                        <h1 className="font-bold text-2xl">
                          Great experience so far
                        </h1>
                      </div>
                      <div>
                        <h2 className="text-sm text-gray-700 font-normal">
                          Dean C., Senior Software Engineer
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex md:justify-start justify-center">
                  <div className="w-full max-w-sm bg-white border border-gray-200 p-6">
                    <div className="space-y-3">
                      <div>
                        <img
                          src={quote}
                          alt=""
                          className="md:w-[52px] md:h-[52px] w-12 h-12"
                        />
                      </div>
                      {/* <div className="flex flex-row">
                        <img src={Star} alt="" className="w-5 h-5" />
                        <img src={Star} alt="" className="w-5 h-5" />
                        <img src={Star} alt="" className="w-5 h-5" />
                        <img src={Star} alt="" className="w-5 h-5" />
                        <img src={Star} alt="" className="w-5 h-5" />
                      </div> */}

                      <div>
                        <p>
                          Syndèo’s platform delivers everything promised. Easy
                          setup, excellent features, and fantastic results—I
                          couldn’t ask for a better tool!.
                        </p>
                      </div>
                      <div>
                        <h1 className="font-bold text-2xl">
                          Simple and precious
                        </h1>
                      </div>
                      <div>
                        <h2 className="text-sm text-gray-700 font-normal">
                          Roberto B., Executive Vice President
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex md:justify-start justify-center">
                  <div className="w-full max-w-sm bg-white border border-gray-200 p-6">
                    <div className="space-y-3">
                      <div>
                        <img
                          src={quote}
                          alt=""
                          className="md:w-[52px] md:h-[52px] w-12 h-12"
                        />
                      </div>
                      {/* <div className="flex flex-row">
                        <img src={Star} alt="" className="w-5 h-5" />
                        <img src={Star} alt="" className="w-5 h-5" />
                        <img src={Star} alt="" className="w-5 h-5" />
                        <img src={Star} alt="" className="w-5 h-5" />
                        <img src={Star} alt="" className="w-5 h-5" />
                      </div> */}

                      <div>
                        <p>
                          With its user-friendly design and amazing features,
                          Syndèo has transformed how I organize my appointments.
                          Highly recommended!
                        </p>
                      </div>

                      <div>
                        <h1 className="font-bold text-2xl">
                          Simple and affordable
                        </h1>
                      </div>
                      <div>
                        <h2 className="text-sm text-gray-700 font-normal">
                          Lee E., Director of Information Technology
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
