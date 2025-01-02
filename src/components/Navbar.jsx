import { useState, useEffect } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight / 4) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-20 transition-all duration-300 ease-in-out select-none ${
        isScrolled ? "bg-white shadow-md py-6" : "bg-white py-6"
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex justify-between items-center px-4">
        <a href="/" className="flex flex-row items-center md:ml-0 ml-1">
          {/* <SiPaloaltosoftware className="text-mainColor text-2xl leading-none" /> */}
          <h4 className="md:text-3xl text-2xl text-colorFour font-bold cursor-pointer">
            <div className="flex gap-0">
              Syndèo.
              {/* <span className="ml-[4px] text-[#0A3161] font-bold">
                Associates
              </span> */}
            </div>
          </h4>
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex flex-grow justify-center space-x-8 items-center">
          <li
            className={` group transition duration-300 uppercase ${
              isScrolled
                ? "text-headingColor hover:text-mainColor transition ease-in-out duration-500"
                : "text-headingColor hover:text-mainColor transition ease-in-out duration-500"
            }`}
          >
            <a href="/">Home</a>
            <div
              className={` h-[2px] w-0 group-hover:w-full transition-all duration-300 ${
                isScrolled ? "bg-mainColor" : "bg-mainColor"
              }`}
            ></div>
          </li>

          <li
            className={` group transition duration-300 uppercase ${
              isScrolled
                ? "text-headingColor hover:text-mainColor transition ease-in-out duration-500"
                : "text-headingColor hover:text-mainColor transition ease-in-out duration-500"
            }`}
          >
            <a href="/about">About Us</a>
            <div
              className={` h-[2px] w-0 group-hover:w-full transition-all duration-300 ${
                isScrolled ? "bg-mainColor" : "bg-mainColor"
              }`}
            ></div>
          </li>

          <li
            className={` group transition duration-300 uppercase ${
              isScrolled
                ? "text-headingColor hover:text-mainColor transition ease-in-out duration-500"
                : "text-headingColor hover:text-mainColor transition ease-in-out duration-500"
            }`}
          >
            <a href="/pricing">Pricing</a>
            <div
              className={` h-[2px] w-0 group-hover:w-full transition-all duration-300 ${
                isScrolled ? "bg-mainColor" : "bg-mainColor"
              }`}
            ></div>
          </li>

          <li
            className={` group transition duration-300 uppercase ${
              isScrolled
                ? "text-headingColor hover:text-mainColor transition ease-in-out duration-500"
                : "text-headingColor hover:text-mainColor transition ease-in-out duration-500"
            }`}
          >
            <a href="/contact">Contact Us</a>
            <div
              className={` h-[2px] w-0 group-hover:w-full transition-all duration-300 ${
                isScrolled ? "bg-mainColor" : "bg-mainColor"
              }`}
            ></div>
          </li>
        </ul>

        {/* Login Button */}
        <div className="hidden lg:flex space-x-4">
          <a
            href="/login"
            className="uppercase border-[1px] relative lg:px-6 md:px-4 py-2 rounded bg-colorFour text-sm border-colorFour hover:border-colorFour text-white font-medium overflow-hidden transition-all duration-500 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-auto before:w-0 before:bg-white before:duration-500 before:ease-out hover:text-colorFour hover:before:h-40 hover:before:w-48 "
          >
            <span className="relative z-10">Book Now</span>
          </a>
        </div>

        <div className="lg:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <AiOutlineClose
                className={`w-5 h-5 ${
                  isScrolled ? "text-headingColor" : "text-headingColor"
                }`}
              />
            ) : (
              <RiMenu3Fill
                className={`w-5 h-5 ${
                  isScrolled ? "text-headingColor" : "text-headingColor"
                }`}
              />
            )}
          </button>
        </div>

        <div
          className={
            !isMobileMenuOpen
              ? "lg:hidden fixed left-[-100%] h-[100%] ease-in-out duration-1000 "
              : "lg:hidden fixed left-0 top-0 w-[70%] h-[100%] bg-white ease-in-out duration-1000 rounded-b-lg z-10 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
          }
        >
          <a href="/" className="flex flex-row items-center ml-6 mt-6 mb-2">
            {/* <SiPaloaltosoftware className="text-mainColor text-2xl leading-none" /> */}
            <h4 className="ml-1 text-2xl text-mainColor font-bold cursor-pointer">
              Syndèo
              {/* <span className="text-headingColor">Associates</span> */}
            </h4>
          </a>

          <ul className="p-4">
            <li className="p-4 border-b border-headingColor">
              <a
                href="/"
                className="flex items-center justify-between cursor-pointer text-footerLinks font-medium"
              >
                Home
              </a>
            </li>

            <li className="p-4 border-b border-headingColor">
              <a
                href="/about"
                className="flex items-center justify-between cursor-pointer text-footerLinks font-medium"
              >
                About Syndèo
              </a>
            </li>

            <li className="p-4 border-b border-headingColor">
              <a
                href="/pricing"
                className="flex items-center justify-between cursor-pointer text-footerLinks font-medium"
              >
                Our Pricing
              </a>
            </li>

            <li className="p-4 border-b border-headingColor">
              <a
                href="/contact"
                className="flex items-center justify-between cursor-pointer text-footerLinks font-medium"
              >
                Contact Us
              </a>
            </li>

            <li className="p-4 border-b border-headingColor">
              <a
                href="/login"
                className="flex items-center justify-between cursor-pointer text-footerLinks font-medium"
              >
                Login / Register
              </a>
            </li>
          </ul>

          <div className="px-4">
            <h5 className="p-4 text-xl text-footerLinks font-semibold">
              Follow us on
            </h5>
            <div className="p-4">
              <div className="grid grid-cols-4">
                <a href="">
                  <FaLinkedinIn className="w-6 h-6 text-footerLinks duration-1000 hover:text-mainColor ease-in-out" />
                </a>
                <a href="">
                  <FaXTwitter className="w-6 h-6 text-footerLinks duration-1000 hover:text-mainColor ease-in-out" />
                </a>
                <a href="">
                  {" "}
                  <FaInstagram className="w-6 h-6 text-footerLinks duration-1000 hover:text-mainColor ease-in-out" />
                </a>
                <a href="">
                  {" "}
                  <FaFacebookF className="w-6 h-6 text-footerLinks duration-1000 hover:text-mainColor ease-in-out" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
