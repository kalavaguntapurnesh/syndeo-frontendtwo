const Final = () => {
  return (
    <div className="bg-white">
      <div className="relative pt-8 pb-8">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="mx-auto max-w-[1000px] bg-[#E4E4E4] h-80 rounded">
              <div className="space-y-4">
                <div className="flex justify-center items-center lg:pt-12 pt-8">
                  <h1 className="md:text-4xl text-2xl text-footerLinks font-bold">
                    Get Started for Free
                  </h1>
                </div>

                <div className="flex justify-center items-center text-center max-w-xl mx-auto text-gray-600 ">
                  <p className="md:mx-0 mx-2">
                    You can activate a 14 day trial of our paid plan at any
                    time. After your trial, enjoy our free version — forever.
                  </p>
                </div>

                {/* <div className="flex justify-center items-center">
                  <a
                    href="/login"
                    className="border-[1px] bg-colorFour hover:text-white transition duration-1000 text-white py-3 px-6 rounded"
                  >
                    Create your own schedule now
                  </a>
                </div> */}

                <div className="flex justify-center items-center">
                  <a
                    href="/contact"
                    className="relative flex h-[50px] md:w-60 w-8/12 items-center justify-center overflow-hidden border border-headingColor text-white  transition-all before:absolute before:h-0 before:w-0  before:bg-white hover:text-mainColor hover:border-mainColor before:duration-500 before:ease-out  hover:before:h-56 hover:before:w-full rounded bg-colorFour"
                  >
                    <span className="relative z-10">
                      {" "}
                      Create your schedule now
                    </span>
                  </a>
                </div>

                <div className="flex justify-center items-center text-gray-600 text-center max-w-lg mx-auto">
                  <p>
                    No credit card required &#x2022; Free forever &#x2022;
                    Upgrade anytime
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Final;
