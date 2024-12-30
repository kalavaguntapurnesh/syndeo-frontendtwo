import user from "../assets/user.svg";
import message from "../assets/message.svg";
import schedule from "../assets/schedule.svg";

const Reviews = () => {
  const values1 = [
    {
      icon: user,
      Title: "1. Create an account",
      description:
        "Sign up to unlock the full potential of our platform and start managing your appointments with ease.",
    },
    {
      icon: schedule,
      Title: "2. Create your schedule",
      description:
        "Easily organize and share your booking link to simplify scheduling and ensure a hassle-free experience for everyone",
    },
    {
      icon: message,
      Title: "3. Receive early notifications",
      description:
        "Get notified promptly to stay prepared, keeping track of important updates and events without any hassle.",
    },
  ];
  return (
    <div className="lg:pt-12 pt-8 pb-12">
      <div className="relative">
        <div className="w-full">
          <div className="w-full mx-auto max-w-[1400px]">
            <div className="p-4">
              <div className="space-y-3">
                <div className="flex items-center text-center justify-center ">
                  <div className="h-4 w-1 bg-mainColor"></div>

                  <p className="ml-2 lg:text-lg font-semibold text-mainColor">
                    How does it work?
                  </p>
                </div>

                <div className="text-center mt-4">
                  <h3 className="lg:text-4xl text-2xl font-bold text-headingColor">
                    Discover the process behind scheduling simplicity
                  </h3>
                </div>

                <div className="text-gray-600 text-center">
                  <p>
                    Learn how our intuitive platform simplifies appointment
                    management, ensuring efficiency, clarity, and ease for
                    individuals and businesses alike.
                  </p>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 pt-8">
                {values1.map((value, index) => (
                  <div
                    key={index}
                    className="flex md:justify-start justify-center"
                  >
                    <div className="w-full bg-white p-6">
                      <div className="space-y-3">
                        <div className="flex md:justify-start justify-center items-center">
                          <img src={value.icon} alt="" className="w-12 h-12" />
                        </div>

                        <div className="flex md:justify-start justify-center items-center pt-4">
                          <h1 className="text-2xl text-headingColor font-bold text-center">
                            {value.Title}
                          </h1>
                        </div>
                        <div className="flex md:justify-start justify-center items-center text-gray-600 md:text-start text-center">
                          <p>{value.description}</p>
                        </div>

                        {/* <div className="px-6 flex md:justify-start justify-center">
                          <a
                            href="/login"
                            className="flex flex-row items-center text-mainColor hover:text-headingColor transition ease-in-out duration-500 hover:-translate-y-1"
                          >
                            <span className="relative z-10 ">Know More</span>
                            <MdArrowRightAlt className="ml-1 mt-1 w-5 h-5 " />
                          </a>
                        </div> */}
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
  );
};

export default Reviews;
