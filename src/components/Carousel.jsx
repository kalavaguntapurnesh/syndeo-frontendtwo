import One from "../assets/One.svg";
import Two from "../assets/Two.svg";
import Three from "../assets/Three.svg";
import { MdArrowRightAlt } from "react-icons/md";

const Carousel = () => {
  const values1 = [
    {
      icon: One,
      Title: "Define your schedule",
      description:
        "Take control of your time by crafting a well-defined schedule tailored to your unique priorities.",
      color: "text-green-500", // Blue color for this icon
    },
    {
      icon: Two,
      Title: "Share booking link",
      description:
        "Effortlessly share your booking link to streamline scheduling & make convenient for everyone involved.",
      color: "text-blue-500", // Green color for this icon
    },
    {
      icon: Three,
      Title: "Receive early alerts",
      description:
        "Stay informed ahead of time with timely notifications, ensuring you never miss important updates or events.",
      color: "text-yellow-500", // Red color for this icon
    },
  ];

  return (
    <>
      <div className="lg:pt-12 pt-8 pb-12">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px]">
              <div className="p-4">
                <div className="space-y-3">
                  <div className="flex items-center text-center justify-center ">
                    <div className="h-4 w-1 bg-mainColor"></div>

                    <p className="ml-2 lg:text-lg font-semibold text-mainColor">
                      Our Services
                    </p>
                  </div>

                  <div className="text-center mt-4">
                    <h3 className="lg:text-4xl text-2xl font-bold text-headingColor">
                      Elevate impressions with seamless scheduling
                    </h3>
                  </div>

                  <div className="text-gray-600 text-center">
                    <p>
                      Streamline your scheduling process with precision and
                      ease, leaving a lasting positive impression on clients and
                      stakeholders effortlessly.
                    </p>
                  </div>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 pt-8">
                  {values1.map((value, index) => (
                    <div
                      key={index}
                      className="flex md:justify-start justify-center"
                    >
                      <div className="w-full bg-white border shadow border-gray-200 rounded p-6">
                        <div className="space-y-3">
                          <div className="flex justify-center items-center">
                            <img
                              src={value.icon}
                              alt=""
                              className="w-12 h-12"
                            />
                          </div>

                          <div className="flex justify-center items-center">
                            <h4 className="text-2xl text-headingColor font-bold text-center">
                              {value.Title}
                            </h4>
                          </div>
                          <div className="flex justify-center  items-center text-gray-600 text-center">
                            <p>{value.description}</p>
                          </div>

                          <div className="px-6 flex justify-center">
                            <a
                              href="/login"
                              className="flex flex-row items-center text-mainColor hover:text-headingColor transition ease-in-out duration-500 hover:-translate-y-1"
                            >
                              <span className="relative z-10 ">Know More</span>
                              <MdArrowRightAlt className="ml-1 mt-1 w-5 h-5 " />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
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

                      <p className="ml-2 lg:text-lg font-semibold text-mainColor">
                        Discover Syndèo
                      </p>
                    </div>
                    <div>
                      <h2 className="lg:text-4xl text-2xl lg:text-start text-center text-headingColor font-bold lg:leading-snug">
                        Revolutionizing appointment scheduling for
                        <span className="text-colorFour"> everyone.</span>
                      </h2>
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

                    <div className="lg:text-start text-base text-center text-gray-600 lg:leading-normal">
                      <p>
                        Redefining appointment management, Syndèo streamlines
                        scheduling with intuitive features, smart automation,
                        and tailored tools for individuals and businesses
                      </p>
                    </div>

                    <div className=" pt-4">
                      <div className="lg:block hidden bg-slate-100 rounded space-y-4 h-24">
                        <div className="md:pb-2 pb-6 h-[100%]">
                          <div className="grid md:grid-cols-3 grid-cols-1 gap-4 lg:h-[100%] h-auto">
                            <div className="flex flex-col justify-center items-center space-y-1">
                              <div className="text-footerLinks lg:text-4xl text-2xl font-bold ">
                                <h4>2023 </h4>
                              </div>
                              <div className="text-gray-600">
                                <p>Year Founded</p>
                              </div>
                            </div>

                            <div className="flex flex-col justify-center items-center space-y-1">
                              <div className="text-footerLinks lg:text-4xl text-2xl font-bold ">
                                <h4>180+</h4>
                              </div>
                              <div className="text-gray-600">
                                <p>Countries Availability</p>
                              </div>
                            </div>

                            <div className="flex flex-col justify-center items-center space-y-1">
                              <div className="text-footerLinks lg:text-4xl text-2xl font-bold ">
                                <h4>24/7</h4>
                              </div>
                              <div className="text-gray-600">
                                <p>Application Usage</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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

export default Carousel;
