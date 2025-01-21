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
                  <div className="flex flex-col lg:mb-0 mb-8 gap-4 lg:col-span-1 col-span-2">
                    <div className="w-full">
                      <a
                        href="/"
                        className="flex flex-row items-center md:justify-start justify-center "
                      >
                        <h3 className="ml-1 text-2xl text-mainColor font-bold cursor-pointer">
                          Syndèo
                          {/* <span className="text-[#0A3161]">Associates</span> */}
                        </h3>
                      </a>
                      {/* <div className="text-footerLinks py-4">
                        <p className="font-medium text-headingColor no-underline  leading-6 ">
                          An easy & cost-effective solution for online meeting
                          scheduling.
                        </p>
                      </div> */}
                    </div>
                  </div>

                  <div className="mb-12 md:mb-0 lg:block hidden">
                    <div className="flex items-center md:justify-start justify-center">
                      {/* <div className="h-4 w-1 bg-mainColor"></div> */}
                      <h4 className=" text-sm leading-5 text-mainColor font-bold tracking-wider uppercase flex md:justify-start justify-center items-start mt-1 ">
                        Quick Links
                      </h4>
                    </div>
                    <ul className="pl-0 mt-4 space-y-3 list-none">
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/"
                          className="hover:text-mainColor font-medium text-headingColor no-underline text-[14px] leading-6 text-footerLinks text-center transition duration-300 ease-in-out"
                        >
                          LinkedIn Page
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/login"
                          className="hover:text-mainColor font-medium text-headingColor no-underline text-[14px] leading-6 text-footerLinks text-center transition duration-300 ease-in-out"
                        >
                          Log In Page
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/about"
                          className="hover:text-mainColor font-medium text-headingColor no-underline text-[14px] leading-6 text-footerLinks text-center transition duration-300 ease-in-out"
                        >
                          Product Features
                        </a>
                      </li>

                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/contact"
                          className="hover:text-mainColor font-medium text-headingColor no-underline text-[14px] leading-6 text-footerLinks text-center transition duration-300 ease-in-out"
                        >
                          Client Testimonials
                        </a>
                      </li>

                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/"
                          className="hover:text-mainColor font-medium text-headingColor no-underline text-[14px] leading-6 text-footerLinks text-center transition duration-300 ease-in-out"
                        >
                          Syndèo Mobile App
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-12 md:mb-0">
                    <div className="flex items-center md:justify-start justify-center">
                      {/* <div className="h-4 w-1 bg-mainColor"></div> */}
                      <h4 className=" text-sm leading-5 text-mainColor font-bold tracking-wider uppercase flex md:justify-start justify-center items-start mt-1 ">
                        Company
                      </h4>
                    </div>
                    <ul className="pl-0 mt-4 space-y-3 list-none">
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/privacy"
                          className="hover:text-mainColor font-medium text-headingColor no-underline text-[14px] leading-6 text-footerLinks text-center transition duration-300 ease-in-out"
                        >
                          Terms & Conditions
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/privacy"
                          className="hover:text-mainColor font-medium text-headingColor no-underline text-[14px] leading-6 text-footerLinks text-center transition duration-300 ease-in-out"
                        >
                          Privacy & Policy
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/about"
                          className="hover:text-mainColor font-medium text-headingColor no-underline text-[14px] leading-6 text-footerLinks text-center transition duration-300 ease-in-out"
                        >
                          Our Leadership
                        </a>
                      </li>

                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/privacy"
                          className="hover:text-mainColor font-medium text-headingColor no-underline text-[14px] leading-6 text-footerLinks text-center transition duration-300 ease-in-out"
                        >
                          Developer Policy
                        </a>
                      </li>

                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/"
                          className="hover:text-mainColor font-medium text-headingColor no-underline text-[14px] leading-6 text-footerLinks text-center transition duration-300 ease-in-out"
                        >
                          Our Partnerships
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="mb-12 md:mb-0">
                    <div className="flex items-center md:justify-start justify-center">
                      {/* <div className="h-4 w-1 bg-mainColor"></div> */}
                      <h4 className=" text-sm leading-5 font-bold text-mainColor tracking-wider uppercase flex md:justify-start justify-center items-start mt-1 ">
                        General
                      </h4>
                    </div>
                    <ul className="pl-0 mt-4 space-y-3 list-none">
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/pricing"
                          className="hover:text-mainColor font-medium text-headingColor no-underline text-[14px] leading-6 text-footerLinks text-center transition duration-300 ease-in-out"
                        >
                          Our Pricing
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/"
                          className="hover:text-mainColor font-medium text-headingColor no-underline text-[14px] leading-6 text-footerLinks text-center transition duration-300 ease-in-out"
                        >
                          Affliate Program
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/"
                          className="hover:text-mainColor font-medium text-headingColor no-underline text-[14px] leading-6 text-footerLinks text-center transition duration-300 ease-in-out"
                        >
                          Admin Management
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/"
                          className="hover:text-mainColor font-medium text-headingColor no-underline text-[14px] leading-6 text-footerLinks text-center transition duration-300 ease-in-out"
                        >
                          Customize Availability
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
                        Resources
                      </h4>
                    </div>
                    <ul className="pl-0 mt-4 space-y-3 list-none">
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/about-us"
                          className="hover:text-mainColor font-medium text-headingColor no-underline text-[14px] leading-6 text-footerLinks text-center transition duration-300 ease-in-out"
                        >
                          Help Center
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/about"
                          className="hover:text-mainColor font-medium text-headingColor no-underline text-[14px] leading-6 text-footerLinks text-center transition duration-300 ease-in-out"
                        >
                          Client Stories
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href=""
                          className="hover:text-mainColor font-medium text-headingColor no-underline text-[14px] leading-6 text-footerLinks text-center transition duration-300 ease-in-out"
                        >
                          Syndèo Community
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/register"
                          className="hover:text-mainColor font-medium text-headingColor no-underline text-[14px] leading-6 text-footerLinks text-center transition duration-300 ease-in-out"
                        >
                          Sign up for free
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href=""
                          className="hover:text-mainColor font-medium text-headingColor no-underline text-[14px] leading-6 text-footerLinks text-center transition duration-300 ease-in-out"
                        >
                          Data Security
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
                          href="/"
                          className="hover:text-mainColor font-medium text-headingColor no-underline text-[14px] leading-6 text-footerLinks text-center transition duration-300 ease-in-out"
                        >
                          Our Cookie Policy
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/"
                          className="hover:text-mainColor font-medium text-headingColor no-underline text-[14px] leading-6 text-footerLinks text-center transition duration-300 ease-in-out"
                        >
                          Product Overview
                        </a>
                      </li>

                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/"
                          className="hover:text-mainColor font-medium text-headingColor no-underline text-[14px] leading-6 text-footerLinks text-center transition duration-300 ease-in-out"
                        >
                          Data Processing Agreement
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/"
                          className="hover:text-mainColor font-medium text-headingColor no-underline text-[14px] leading-6 text-footerLinks text-center transition duration-300 ease-in-out"
                        >
                          Data Retention Policy
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/"
                          className="hover:text-mainColor font-medium text-headingColor no-underline text-[14px] leading-6 text-footerLinks text-center transition duration-300 ease-in-out"
                        >
                          Accessibility Statement
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="w-full py-2">
                <div className="grid grid-cols-1 gap-8 lg:gap-4 w-full">
                  <div className="grid grid-cols-5">
                    <a href="" className="flex justify-center items-center ">
                      <FaLinkedin
                        size={25}
                        className="cursor-pointer text-headingColor"
                      />
                    </a>
                    <a href="" className="flex justify-center items-center">
                      <FaXTwitter
                        size={25}
                        className="cursor-pointer text-headingColor"
                      />
                    </a>
                    <a href="" className="flex justify-center items-center">
                      <FaInstagram
                        size={25}
                        className="cursor-pointer text-headingColor"
                      />
                    </a>
                    <a href="" className="flex justify-center items-center">
                      <FaGoogle
                        size={25}
                        className="cursor-pointer text-headingColor"
                      />
                    </a>
                    <a href="" className="flex justify-center items-center">
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
                © 2025 Syndèo - All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
