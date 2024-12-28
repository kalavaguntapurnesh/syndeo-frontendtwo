import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#E4E4E4] p-15 select-none">
      <div className="relative ">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="pb-8 mb-8 border-b border-gray-600">
              <div className="w-full p-8">
                <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6 mt-8">
                  <div className="flex flex-col lg:mb-0 mb-8 gap-4 col-span-2 ">
                    <div className="w-full">
                      <a
                        href="/"
                        className="flex flex-row items-center md:justify-start justify-center "
                      >
                        <h3 className="ml-1 text-2xl text-mainColor font-bold cursor-pointer">
                          Mannam &{" "}
                          <span className="text-[#0A3161]">Associates</span>
                        </h3>
                      </a>
                      <div></div>
                    </div>
                  </div>

                  <div className="mb-12 md:mb-0">
                    <div className="flex items-center md:justify-start justify-center">
                      {/* <div className="h-4 w-1 bg-mainColor"></div> */}
                      <h4 className=" text-sm leading-5 text-mainColor font-bold tracking-wider uppercase flex md:justify-start justify-center items-start mt-1 ">
                        Practices
                      </h4>
                    </div>
                    <ul className="pl-0 mt-4 space-y-3 list-none">
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/employment-based-visa"
                          className="hover:text-mainColor font-medium text-headingColor no-underline text-[14px] leading-6 text-footerLinks text-center transition duration-300 ease-in-out"
                        >
                          Employment Based Visas
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/investor-based-visa"
                          className="hover:text-mainColor font-medium text-headingColor no-underline text-[14px] leading-6 text-footerLinks text-center transition duration-300 ease-in-out"
                        >
                          Investor Based Visas
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/family-based-visa"
                          className="hover:text-mainColor font-medium text-headingColor no-underline text-[14px] leading-6 text-footerLinks text-center transition duration-300 ease-in-out"
                        >
                          Family Based Visas
                        </a>
                      </li>

                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/student-based-visa"
                          className="hover:text-mainColor font-medium text-headingColor no-underline text-[14px] leading-6 text-footerLinks text-center transition duration-300 ease-in-out"
                        >
                          Students and Scholars
                        </a>
                      </li>

                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/naturalization"
                          className="hover:text-mainColor font-medium text-headingColor no-underline text-[14px] leading-6 text-footerLinks text-center transition duration-300 ease-in-out"
                        >
                          Naturalization
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="mb-12 md:mb-0">
                    <div className="flex items-center md:justify-start justify-center">
                      {/* <div className="h-4 w-1 bg-mainColor"></div> */}
                      <h4 className=" text-sm leading-5 font-bold text-mainColor tracking-wider uppercase flex md:justify-start justify-center items-start mt-1 ">
                        About us
                      </h4>
                    </div>
                    <ul className="pl-0 mt-4 space-y-3 list-none">
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/privacy-policy"
                          className="hover:text-mainColor font-medium text-headingColor no-underline text-[14px] leading-6 text-footerLinks text-center transition duration-300 ease-in-out"
                        >
                          Our Privacy Policy
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/why-mannam-and-associates"
                          className="hover:text-mainColor font-medium text-headingColor no-underline text-[14px] leading-6 text-footerLinks text-center transition duration-300 ease-in-out"
                        >
                          Mannam & Associates
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/experts"
                          className="hover:text-mainColor font-medium text-headingColor no-underline text-[14px] leading-6 text-footerLinks text-center transition duration-300 ease-in-out"
                        >
                          Our Leadership
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/terms-and-conditions"
                          className="hover:text-mainColor font-medium text-headingColor no-underline text-[14px] leading-6 text-footerLinks text-center transition duration-300 ease-in-out"
                        >
                          Terms & Conditions
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/contact"
                          className="hover:text-mainColor font-medium text-headingColor no-underline text-[14px] leading-6 text-footerLinks text-center transition duration-300 ease-in-out"
                        >
                          Contact Us Now
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-12 md:mb-0">
                    <div className="flex items-center md:justify-start justify-center">
                      {/* <div className="h-4 w-1 bg-mainColor"></div> */}
                      <h4 className="  text-sm leading-5 font-bold text-mainColor tracking-wider uppercase flex md:justify-start justify-center items-start mt-1">
                        Government
                      </h4>
                    </div>
                    <ul className="pl-0 mt-4 space-y-3 list-none">
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            const userConfirmed = window.confirm(
                              "You are visiting a web page outside Mannam & Associates and we don't have control over it. Do you wish to continue?"
                            );
                            if (userConfirmed) {
                              window.location.href =
                                "https://www.uscis.gov/newsroom/all-news";
                            }
                          }}
                          className="hover:text-mainColor font-medium text-headingColor no-underline text-[14px] leading-6 text-footerLinks text-center transition duration-300 ease-in-out"
                        >
                          USCIS News
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/about-us"
                          className="hover:text-mainColor font-medium text-headingColor no-underline text-[14px] leading-6 text-footerLinks text-center transition duration-300 ease-in-out"
                        >
                          Homeland Security
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="https://www.linkedin.com/company/mannam-&-associates-llc/"
                          className="hover:text-mainColor font-medium text-headingColor no-underline text-[14px] leading-6 text-footerLinks text-center transition duration-300 ease-in-out"
                        >
                          Processing Times
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="#"
                          onClick={(event) => {
                            event.preventDefault();
                            const userConfirmed = window.confirm(
                              "You will be navigated to the U.S Department of State - Bureau of Consumer Affairs website. Do you wish to continue?"
                            );
                            if (userConfirmed) {
                              window.location.href =
                                "https://travel.state.gov/content/travel/en/legal/visa-law0/visa-bulletin.html";
                            }
                          }}
                          className="hover:text-mainColor font-medium text-headingColor no-underline text-[14px] leading-6 text-footerLinks text-center transition duration-300 ease-in-out"
                        >
                          VISA Bulletin
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="#"
                          onClick={(event) => {
                            event.preventDefault();
                            const userConfirmed = window.confirm(
                              "You are visiting a webpage outside Mannam & Associates. Do you wish to continue?"
                            );
                            if (userConfirmed) {
                              window.location.href =
                                "https://www.usembassy.gov/";
                            }
                          }}
                          className="hover:text-mainColor font-medium text-headingColor no-underline text-[14px] leading-6 text-footerLinks text-center transition duration-300 ease-in-out"
                        >
                          U.S Consulates
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-12 md:mb-0">
                    <div className="flex items-center md:justify-start justify-center">
                      {/* <div className="h-4 w-1 bg-mainColor"></div> */}
                      <h4 className="  text-sm leading-5 text-mainColor font-bold tracking-wider uppercase flex md:justify-start justify-center items-start mt-1 ">
                        Legal
                      </h4>
                    </div>
                    <ul className="pl-0 mt-4 space-y-3 list-none">
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/trademarks"
                          className="hover:text-mainColor font-medium text-headingColor no-underline text-[14px] leading-6 text-footerLinks text-center transition duration-300 ease-in-out"
                        >
                          Trademarks
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/copyright"
                          className="hover:text-mainColor font-medium text-headingColor no-underline text-[14px] leading-6 text-footerLinks text-center transition duration-300 ease-in-out"
                        >
                          Copyright
                        </a>
                      </li>

                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/"
                          className="hover:text-mainColor font-medium text-headingColor no-underline text-[14px] leading-6 text-footerLinks text-center transition duration-300 ease-in-out"
                        >
                          Disclaimer
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/"
                          className="hover:text-mainColor font-medium text-headingColor no-underline text-[14px] leading-6 text-footerLinks text-center transition duration-300 ease-in-out"
                        >
                          Job Paths
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/"
                          className="hover:text-mainColor font-medium text-headingColor no-underline text-[14px] leading-6 text-footerLinks text-center transition duration-300 ease-in-out"
                        >
                          Bar Membership
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="w-full">
                <div className="grid grid-cols-1 gap-8 lg:gap-4 w-full">
                  <div className="grid grid-cols-5">
                    <a
                      href="https://www.linkedin.com/company/mannam-&-associates-llc/"
                      className="flex justify-center items-center "
                    >
                      <FaLinkedin
                        size={25}
                        className="cursor-pointer text-headingColor"
                      />
                    </a>
                    <a
                      href="https://g.co/kgs/L7ak23S"
                      className="flex justify-center items-center"
                    >
                      <FaXTwitter
                        size={25}
                        className="cursor-pointer text-headingColor"
                      />
                    </a>
                    <a
                      href="https://g.co/kgs/L7ak23S"
                      className="flex justify-center items-center"
                    >
                      <FaInstagram
                        size={25}
                        className="cursor-pointer text-headingColor"
                      />
                    </a>
                    <a
                      href="https://g.co/kgs/L7ak23S"
                      className="flex justify-center items-center"
                    >
                      <FaGoogle
                        size={25}
                        className="cursor-pointer text-headingColor"
                      />
                    </a>
                    <a
                      href="https://g.co/kgs/L7ak23S"
                      className="flex justify-center items-center"
                    >
                      <FaFacebook
                        size={25}
                        className="cursor-pointer text-headingColor"
                      />
                    </a>{" "}
                  </div>

                  {/* <div className="flex justify-center items-center">
                    <form className="lg:w-[70%] w-[90%]">
                      <label
                        for="search"
                        class="mb-2 text-sm font-medium text-gray-900 sr-only"
                      >
                        Subscribe
                      </label>
                      <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                          
                        </div>
                        <input
                          type="search"
                          id="search"
                          class="block w-full p-4 ps-10 text-sm text-gray-900 border-[0.5px] border-headingColor rounded bg-gray-50 focus:outline-none"
                          placeholder="Enter your email address"
                          required
                        />
                        <button
                          type="submit"
                          class="text-white absolute end-2.5 bottom-2.5 bg-mainColor font-medium rounded text-sm px-4 py-2 "
                        >
                          Subscribe
                        </button>
                      </div>
                    </form>
                  </div> */}
                </div>
              </div>
            </div>

            <div className="text-center text-xs pb-6">
              <p className="text-headingColor">
                © 2024 Manna Law Firm. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
