import Three from "../assets/Three.svg";
import { MdArrowRightAlt } from "react-icons/md";
import quality from "../assets/Quality.svg";
import chat from "../assets/Chat.svg";
import heart from "../assets/Heart.svg";
import search from "../assets/Search.svg";
import idea from "../assets/Idea.svg";

const AboutOne = () => {
  const values1 = [
    {
      icon: quality,
      Title: "Define your schedule",
      description:
        "Take control of your time by crafting a well-defined schedule tailored to your unique priorities.",
      color: "text-green-500", // Blue color for this icon
    },
    {
      icon: chat,
      Title: "Share booking link",
      description:
        "Effortlessly share your booking link to streamline scheduling & make convenient for everyone involved.",
      color: "text-blue-500", // Green color for this icon
    },
    {
      icon: search,
      Title: "Receive early alerts",
      description:
        "Stay informed ahead of time with timely notifications, ensuring you never miss important updates or events.",
      color: "text-yellow-500", // Red color for this icon
    },

    {
      icon: idea,
      Title: "Receive early alerts",
      description:
        "Stay informed ahead of time with timely notifications, ensuring you never miss important updates or events.",
      color: "text-yellow-500", // Red color for this icon
    },

    {
      icon: Three,
      Title: "Receive early alerts",
      description:
        "Stay informed ahead of time with timely notifications, ensuring you never miss important updates or events.",
      color: "text-yellow-500", // Red color for this icon
    },

    {
      icon: heart,
      Title: "Receive early alerts",
      description:
        "Stay informed ahead of time with timely notifications, ensuring you never miss important updates or events.",
      color: "text-yellow-500", // Red color for this icon
    },
  ];

  return (
    <>
      <div className="lg:pt-28 pt-24 pb-12">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px]">
              <div className="p-4">
                <div className="space-y-3">
                  <div className="flex items-center text-center justify-center ">
                    <div className="h-4 w-1 bg-mainColor"></div>

                    <p className="ml-2 lg:text-lg font-bold text-mainColor">
                      About Syndèo
                    </p>
                  </div>

                  <div className="text-center mt-4">
                    <h3 className="lg:text-4xl text-2xl font-bold text-headingColor">
                      Your schedules, our priority.
                    </h3>
                  </div>

                  <div className="text-gray-600 text-center">
                    <p>
                      Ensuring seamless, efficient scheduling to prioritize your
                      time and enhance your appointment management experience
                      effortlessly.
                    </p>
                  </div>

                  {/* <div className="lg:grid hidden lg:grid-cols-3 grid-cols-1 gap-4 pt-4">
                  <div className="flex flex-row items-center">
                    <div>
                      <img src={CorrectTwo} alt="" className="w-6 h-6" />
                    </div>
                    <div className="text-gray-600 ml-2">
                      <p>
                        Streamlined scheduling for hassle-free appointments.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-row items-center">
                    <div>
                      <img src={CorrectTwo} alt="" className="w-6 h-6" />
                    </div>
                    <div className="text-gray-600 ml-2">
                      <p>Automated reminders to keep you on track.</p>
                    </div>
                  </div>

                  <div className="flex flex-row items-center">
                    <div>
                      <img src={CorrectTwo} alt="" className="w-6 h-6" />
                    </div>
                    <div className="text-gray-600 ml-2">
                      <p>
                        Customizable settings tailored to your unique needs.
                      </p>
                    </div>
                  </div>
                </div> */}

                  <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 pt-4">
                    {/* <div>
                      <img
                        src="https://images.pexels.com/photos/6285084/pexels-photo-6285084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                        className="rounded"
                      />
                    </div>

                    <div>
                      <img
                        src="https://images.pexels.com/photos/7993955/pexels-photo-7993955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                        className="rounded"
                      />
                    </div>

                    <div>
                      <img
                        src="https://images.pexels.com/photos/7648319/pexels-photo-7648319.jpeg?auto=compress&cs=tinysrgb&w=1200"
                        alt=""
                        className="rounded"
                      />
                    </div>

                    <div>
                      <img
                        src="https://images.pexels.com/photos/29903855/pexels-photo-29903855/free-photo-of-modern-wall-clock-with-time-and-humidity-display.jpeg?auto=compress&cs=tinysrgb&w=1200"
                        alt=""
                        className="rounded"
                      />
                    </div> */}

                    {values1.map((value, index) => (
                      <div
                        key={index}
                        className="flex md:justify-start justify-center"
                      >
                        <div className="w-full bg-white border border-gray-200 rounded p-6">
                          <div className="space-y-3">
                            <div className="flex justify-center items-center">
                              <img
                                src={value.icon}
                                alt=""
                                className="w-12 h-12"
                              />
                            </div>

                            <div className="flex justify-center items-center">
                              <h1 className="text-2xl text-headingColor font-bold text-center">
                                {value.Title}
                              </h1>
                            </div>
                            <div className="flex justify-center  items-center text-gray-600 text-center">
                              <p>{value.description}</p>
                            </div>

                            <div className="px-6 flex justify-center">
                              <a
                                href="/login"
                                className="flex flex-row items-center text-mainColor hover:text-headingColor transition ease-in-out duration-500 hover:-translate-y-1"
                              >
                                <span className="relative z-10 ">
                                  Know More
                                </span>
                                <MdArrowRightAlt className="ml-1 mt-1 w-5 h-5 " />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center pb-4 pt-4">
                    <a
                      href="/contact"
                      className="relative flex h-[50px] md:w-60 w-3/4 items-center justify-center overflow-hidden border border-headingColor text-white  transition-all before:absolute before:h-0 before:w-0  before:bg-white hover:text-mainColor hover:border-mainColor before:duration-500 before:ease-out  hover:before:h-56 hover:before:w-full rounded bg-colorFour"
                    >
                      <span className="relative z-10">
                        Get Started for Free
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-12 pb-12">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px]">
              <div className="p-4">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 ">
                  <div className="space-y-4 flex flex-col lg:justify-start justify-center">
                    <div className="flex items-center lg:text-start text-center justify-center lg:justify-start lg:ml-[5px]">
                      <div className="h-4 w-1 bg-mainColor"></div>

                      <p className="ml-2 lg:text-lg font-bold text-mainColor">
                        Discover Syndèo
                      </p>
                    </div>
                    <div>
                      <h1 className="lg:text-5xl lg:text-start text-center text-2xl text-headingColor font-bold lg:leading-snug">
                        Revolutionizing appointment scheduling for
                        <span className="text-colorFour"> everyone.</span>
                      </h1>
                    </div>
                    <div className="lg:text-start text-base text-center text-gray-600 lg:leading-normal">
                      <p>
                        Transforming the way appointments are managed, Syndèo
                        simplifies scheduling with user-friendly features,
                        seamless automation, and personalized tools designed to
                        meet the needs of individuals and businesses alike,
                        effortlessly and efficiently.
                      </p>
                    </div>

                    <div className="flex lg:justify-start justify-center items-center pb-4 pt-4">
                      <a
                        href="/contact"
                        className="relative flex h-[50px] md:w-60 w-3/4 items-center justify-center overflow-hidden border border-headingColor text-white  transition-all before:absolute before:h-0 before:w-0  before:bg-white hover:text-mainColor hover:border-mainColor before:duration-500 before:ease-out  hover:before:h-56 hover:before:w-full rounded bg-colorFour"
                      >
                        <span className="relative z-10">
                          Start a schedule now
                        </span>
                      </a>
                    </div>
                  </div>

                  <div className="flex lg:justify-end justify-center items-center w-[100%]">
                    <div className="lg:block hidden">
                      <img
                        src="https://images.pexels.com/photos/4427430/pexels-photo-4427430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        // width="612"
                        // height="512"
                        className="h-auto w-auto rounded"
                      />
                    </div>
                    <div className="flex justify-center items-center">
                      <img
                        src="https://images.pexels.com/photos/4427430/pexels-photo-4427430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        // width="612"
                        // height="512"
                        className=" h-auto w-auto lg:hidden block rounded"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutOne;
