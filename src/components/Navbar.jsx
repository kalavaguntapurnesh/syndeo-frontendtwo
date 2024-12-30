import { useState, useEffect } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdownMobile, setOpenDropdownMobile] = useState(null);

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

  const toggleDropdown = (dropdown) => {
    if (openDropdown === dropdown) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdown);
    }
  };

  const toggleMobileDropdown = (dropdown) => {
    setOpenDropdownMobile((prev) => (prev === dropdown ? null : dropdown));
  };

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
          {/* <Tabs /> */}
          {/* <FlyoutLink href="/our-practices" FlyoutContent={SupportContent}>
            Our Practice
          </FlyoutLink> */}
          {/* <FlyoutLink
            href="/managed-it-services"
            FlyoutContent={ServicesContent}
          >
            Our Services
          </FlyoutLink> */}
          {/* <FlyoutLink href="/solutions" FlyoutContent={PricingContent}>
            Achievements
          </FlyoutLink> */}
          {/* <FlyoutLink href="/experts" FlyoutContent={IndustriesContent}>
            Our Experts
          </FlyoutLink> */}

          {/* <FlyoutLink
            href="/why-mannam-and-associates"
            FlyoutContent={AboutUsContent}
          >
            About Us
          </FlyoutLink> */}

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
            <a href="/pricing">Pricings</a>
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
            {/* <li className="p-4 border-b border-headingColor">
              <div
                onClick={() => toggleMobileDropdown("subscription")}
                className="flex items-center justify-between cursor-pointer text-footerLinks font-medium"
              >
                Our Practice
                <FaAngleDown
                  className={`transition-transform ${
                    openDropdownMobile === "subscription"
                      ? "rotate-180 text-mainColor"
                      : ""
                  }`}
                />
              </div>
              <AnimatePresence>
                {openDropdownMobile === "subscription" && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pl-4 mt-6 space-y-2"
                  >
                    <li className="text-headingColor">
                      <a
                        href="/employment-based-visa"
                        className="block text-sm hover:text-mainColor transition duration-300 ease-in-out  hover:font-semibold"
                      >
                        Employment Based Visas
                      </a>
                    </li>
                    <li className="text-headingColor">
                      <a
                        href="/investor-based-visa"
                        className="block text-sm hover:text-mainColor transition duration-300 ease-in-out  hover:font-semibold"
                      >
                        Investor Based Visas
                      </a>
                    </li>
                    <li className="text-headingColor">
                      <a
                        href="/family-based-visa"
                        className="block text-sm hover:text-mainColor transition duration-300 ease-in-out  hover:font-semibold
"
                      >
                        Family Based Visas
                      </a>
                    </li>
                    <li className="text-headingColor">
                      <a
                        href="/student-based-visa"
                        className="block text-sm hover:text-mainColor transition duration-300 ease-in-out  hover:font-semibold
"
                      >
                        Students & Scholars
                      </a>
                    </li>
                    <li className="text-headingColor">
                      <a
                        href="/naturalization"
                        className="block text-sm hover:text-mainColor transition duration-300 ease-in-out  hover:font-semibold
"
                      >
                        Naturalization
                      </a>
                    </li>
                    <li className="text-headingColor">
                      <a
                        href="/liaison-service"
                        className="block text-sm hover:text-mainColor transition duration-300 ease-in-out  hover:font-semibold
"
                      >
                        Liaison Services
                      </a>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li> */}
            {/* <li className="p-4 border-b border-headingColor">
              <a
                href="/contact"
                className="flex items-center justify-between cursor-pointer text-headingColor"
              >
                Achievements
              </a>
            </li> */}

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
                About Us
              </a>
            </li>

            <li className="p-4 border-b border-headingColor">
              <a
                href="/pricing"
                className="flex items-center justify-between cursor-pointer text-footerLinks font-medium"
              >
                Pricing
              </a>
            </li>

            {/* <li className="p-4 border-b border-headingColor">
              <a
                href="/experts"
                className="flex items-center justify-between cursor-pointer text-footerLinks font-medium"
              >
                Our Experts
              </a>
            </li> */}

            <li className="p-4 border-b border-headingColor">
              <a
                href="/contact"
                className="flex items-center justify-between cursor-pointer text-footerLinks font-medium"
              >
                Contact Us
              </a>
            </li>
          </ul>

          <div className="px-4">
            <h5 className="p-4 text-xl text-footerLinks font-semibold">
              Follow us on
            </h5>
            <div className="p-4">
              <div className="grid grid-cols-4">
                <a href="https://www.linkedin.com/company/mannam-&-associates-llc/">
                  <FaLinkedinIn className="w-6 h-6 text-footerLinks duration-1000 hover:text-mainColor ease-in-out" />
                </a>
                <a href="https://www.linkedin.com/company/mannam-&-associates-llc/">
                  <FaXTwitter className="w-6 h-6 text-footerLinks duration-1000 hover:text-mainColor ease-in-out" />
                </a>
                <a href="https://www.linkedin.com/company/mannam-&-associates-llc/">
                  {" "}
                  <FaInstagram className="w-6 h-6 text-footerLinks duration-1000 hover:text-mainColor ease-in-out" />
                </a>
                <a href="https://www.linkedin.com/company/mannam-&-associates-llc/">
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

const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <a
        href={href}
        className={`relative uppercase ${
          isScrolled
            ? "text-headingColor hover:text-mainColor transition ease-in-out duration-500"
            : "text-headingColor hover:text-mainColor transition ease-in-out duration-500"
        }`}
      >
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className={`absolute -bottom-1 -left-2 -right-2 h-[2px] origin-left scale-x-0 rounded transition-transform duration-300 ease-out ${
            isScrolled ? "bg-mainColor" : "bg-mainColor"
          }`}
        />
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const AboutUsContent = () => {
  return (
    <div className="w-64 bg-white p-6 shadow-xl">
      <div className="mb-3 space-y-3">
        <h3 className="font-semibold text-sideHeading">About MannamLaw</h3>

        <a
          href="/why-mannam-and-associates"
          className="block text-sm text-sideHeading hover:text-mainColor transition duration-500 ease-in-out  hover:font-semibold"
        >
          Why MannamLaw
        </a>
        <a
          href="/collaborate-with-us"
          className="block text-sm text-sideHeading hover:text-mainColor transition duration-500 ease-in-out  hover:font-semibold"
        >
          Our Difference
        </a>
      </div>
      {/* <div className="mb-6 space-y-3"></div>
      <button
        onClick={() => navigate("/about-us")}
        className="w-full rounded border-[1px] border-mainColor px-4 py-2 font-medium hover:font-normal duration-500 ease-in-out transition text-mainColor hover:text-white hover:bg-mainColor hover:border-none"
      >
        View More
      </button> */}
    </div>
  );
};

const SupportContent = () => {
  return (
    <div className="w-64 bg-white p-6 shadow-xl">
      <div className="mb-3 space-y-3">
        <h3 className="font-semibold text-sideHeading">How We Operate</h3>

        <a
          href="/employment-based-visa"
          className="block text-sm text-sideHeading hover:text-mainColor transition duration-500 ease-in-out  hover:font-semibold"
        >
          Employment Based Visas
        </a>
        <a
          href="/family-based-visa"
          className="block text-sm text-sideHeading hover:text-mainColor transition duration-500 ease-in-out  hover:font-semibold"
        >
          Family Based Visas
        </a>
        <a
          href="/investor-based-visa"
          className="block text-sm text-sideHeading hover:text-mainColor transition duration-500 ease-in-out  hover:font-semibold"
        >
          Investor Based Visas
        </a>
        <a
          href="/student-based-visa"
          className="block text-sm text-sideHeading hover:text-mainColor transition duration-500 ease-in-out  hover:font-semibold"
        >
          Students & Scholars
        </a>
        <a
          href="/naturalization"
          className="block text-sm text-sideHeading hover:text-mainColor transition duration-500 ease-in-out  hover:font-semibold"
        >
          Naturalization
        </a>
        <a
          href="/liaison-service"
          className="block text-sm text-sideHeading hover:text-mainColor transition duration-500 ease-in-out  hover:font-semibold"
        >
          Liaison Services
        </a>
      </div>
      {/* <button
        onClick={() => navigate("/about-us")}
        className="w-full rounded border-[1px] border-mainColor px-4 py-2 font-medium hover:font-normal duration-500 ease-in-out transition text-mainColor hover:text-white hover:bg-mainColor hover:border-none"
      >
        View More
      </button> */}
    </div>
  );
};

export default Navbar;
