// import { ImPower } from "react-icons/im";
// import { FaFlag } from "react-icons/fa6";
import Lottie from "lottie-react";
import Home from "../assets/Home.json";

const Hero = () => {
  return (
    <div className="lg:pt-28 pt-24">
      <div className="relative">
        <div className="w-full">
          <div className="w-full mx-auto max-w-[1400px]">
            <div className="p-4">
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 ">
                <div className="space-y-4 flex flex-col lg:justify-start justify-center">
                  <div className="flex items-center lg:text-start text-center justify-center lg:justify-start lg:ml-[5px]">
                    <div className="h-4 w-1 bg-mainColor"></div>

                    <p className="ml-2 lg:text-lg font-semibold text-mainColor">
                      Why Choose Syndèo?
                    </p>
                  </div>
                  <div>
                    <h1 className="lg:text-5xl lg:text-start text-center text-2xl text-headingColor font-bold lg:leading-snug">
                      Simple scheduling for client-obsessed{" "}
                      <span className="text-colorFour">professionals.</span>
                    </h1>
                  </div>
                  <div className="lg:text-start text-base text-center text-gray-600 lg:leading-normal">
                    <p>
                      But you might feel a bit lost on how to get started. So,
                      Syndèo does the hard work for you! Everything you need to
                      know is on one platform. You will receive guidance
                      throughout the whole application process—all completely
                      free. With Syndèo, you’ll save time, avoid stress, and
                      gain confidence in your journey, ensuring a smooth and
                      successful experience!
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-4 lg:px-0 px-2">
                    <div className="flex lg:justify-start justify-center">
                      <div className="space-y-2">
                        <div className="flex justify-center lg:justify-start items-center">
                          <h4 className="lg:text-5xl text-4xl ml-2 text-headingColor font-bold text-start">
                            24/7
                          </h4>
                        </div>

                        <div className="flex justify-center lg:justify-start items-center lg:text-base text-sm text-gray-600">
                          <p className="lg:text-start text-center">
                            Platform Seamless Accessibility
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex lg:justify-start justify-center">
                      <div className="space-y-2">
                        <div className="flex justify-center lg:justify-start items-center">
                          <h4 className="lg:text-5xl text-4xl ml-2 text-headingColor font-bold text-start">
                            100%
                          </h4>
                        </div>

                        <div className="flex justify-center lg:justify-start items-center lg:text-base text-sm text-gray-600">
                          <p className="lg:text-start text-center ">
                            Efficiency & Unmatched Precision
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex lg:justify-start justify-center items-center pb-4 pt-4">
                    <a
                      href="/login"
                      className="relative flex h-[50px] md:w-60 w-3/4 items-center justify-center overflow-hidden border border-mainColor text-white shadow-none transition-all before:absolute before:h-0 before:w-0  before:bg-white hover:text-mainColor hover:border-mainColor before:duration-500 before:ease-out  hover:before:h-56 hover:before:w-full rounded bg-colorFour"
                    >
                      <span className="relative z-10">
                        Get Started for Free
                      </span>
                    </a>
                  </div>
                </div>

                <div className="flex lg:justify-end justify-center items-center w-[100%]">
                  <div className="lg:block hidden">
                    <Lottie
                      animationData={Home}
                      loop={true}
                      // width="612"
                      // height="512"
                      className="h-auto w-auto "
                    />
                  </div>
                  <div className="flex justify-center items-center">
                    <Lottie
                      animationData={Home}
                      loop={true}
                      // width="612"
                      // height="512"
                      className=" h-auto w-auto lg:hidden block"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
