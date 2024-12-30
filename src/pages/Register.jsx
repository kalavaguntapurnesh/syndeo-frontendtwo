import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { showLoading, hideLoading } from "../redux/features/alertSlice";
import Swal from "sweetalert2";
// import { Icon } from "react-icons-kit";
// import { eyeOff } from "react-icons-kit/feather/eyeOff";
// import { eye } from "react-icons-kit/feather/eye";
// import Select from "react-select";
// import { Country, State, City } from "country-state-city";
import Footer from "../components/Footer";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Navbar from "../components/Navbar";

function Register() {
  // const [eventType, setEventType] = useState("");
  const [showEventType, setShowEventType] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [organizationName, setOrganizationName] = useState("");
  const [organizationCountry, setOrganizationCountry] = useState(null);
  const [organizationState, setOrganizationState] = useState(null);
  const [organizationCity, setOrganizationCity] = useState(null);
  // const [icon, setIcon] = useState(eyeOff);
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleContinue = () => {
    setShowEventType(true);
  };

  const handleBack = () => {
    setShowEventType(false);
  };

  // const handleToggle = () => {
  //   if (type === "password") {
  //     setIcon(eye);
  //     setType("text");
  //   } else {
  //     setIcon(eyeOff);
  //     setType("password");
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(showLoading());
    axios
      .post(
        // "http://localhost:8080/api/v1/registerUser",
        "https://backend-syndeo.onrender.com/api/v1/registerUser",
        {
          firstName,
          lastName,
          email,
          organizationName,
          organizationCountry,
          organizationState,
          organizationCity,
          password,
          role,
          phoneNumber,
        }
      )
      .then((response) => {
        // dispatch(hideLoading());
        if (response.status === 201) {
          const verifyMail = response.data.email;
          // const partialEmail = verifyMail.replace(
          //   /(\w{3})[\w.-]+@([\w.]+\w)/,
          //   "$1***@$2"
          // );
          const partialEmail = verifyMail;
          Swal.fire({
            title: "Registration Success",
            text:
              "Check your email " +
              partialEmail +
              " and verify it to proceed further.",
            icon: "success",
          });
          navigate("/login");
        }
      })
      .catch((error) => {
        // dispatch(hideLoading());
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };

  useEffect(() => {}, [organizationCountry]);

  return (
    <div>
      <Navbar />
      <div className="relative lg:min-h-screen md:pt-12 pt-16 pb-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="p-4">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 h-full ">
              <div className="w-[100%]">
                <div className="justify-center w-full">
                  <div className="w-full space-y-4 ">
                    <div>
                      <section className="lg:mt-20 my-8">
                        <div className="flex flex-col items-center justify-center ">
                          <div className="w-full bg-white rounded shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:border lg:max-w-xl dark:bg-gray-800 dark:border-gray-700 ">
                            <div className="p-6 space-y-4 md:space-y-4">
                              <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-footerLinks md:text-2xl dark:text-white">
                                Sign up to your account
                              </h1>

                              {/* <button className="w-full flex text-black font-medium items-center justify-center gap-x-3 py-2.5 border rounded hover:bg-gray-50 duration-150 active:bg-gray-100">
                              <img
                                src="https://secure.meetupstatic.com/next/images/login/google.svg?w=48"
                                alt=""
                                className="w-5 h-5"
                              />
                              Continue with Google
                            </button>

                            <div className="relative flex py-1 items-center">
                              <div className="flex-grow border-t border-gray-400"></div>
                              <span className="flex-shrink mx-4 text-gray-400 text-sm">
                                Or
                              </span>
                              <div className="flex-grow border-t border-gray-400"></div>
                            </div>

                            <button className="w-full flex text-black font-medium items-center justify-center gap-x-3 py-2.5 border rounded hover:bg-gray-50 duration-150 active:bg-gray-100">
                              <img
                                src="https://secure.meetupstatic.com/next/images/login/apple.svg?w=48"
                                alt=""
                                className="w-5 h-5"
                              />
                              Continue with Apple
                            </button> */}

                              {/* <div className="relative flex py-1 items-center">
                              <div className="flex-grow border-t border-gray-400"></div>
                              <span className="flex-shrink mx-4 text-gray-400 text-sm">
                                Or
                              </span>
                              <div className="flex-grow border-t border-gray-400"></div>
                            </div> */}

                              <form
                                className="space-y-4 md:space-y-6"
                                onSubmit={handleSubmit}
                              >
                                {!showEventType ? (
                                  <div>
                                    <div className="grid grid-cols-1 gap-2">
                                      <div>
                                        <label
                                          htmlFor="firstName"
                                          className="block mb-2 text-sm font-bold text-colorThree dark:text-white"
                                        >
                                          First Name
                                        </label>
                                        <input
                                          type="text"
                                          name="firstName"
                                          id="firstName"
                                          className=" border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                          placeholder="Your first name"
                                          required
                                          onChange={(e) =>
                                            setFirstName(e.target.value)
                                          }
                                        ></input>
                                      </div>

                                      <div>
                                        <label
                                          htmlFor="lastName"
                                          className="block mb-2 text-sm font-bold text-colorThree dark:text-white"
                                        >
                                          Last Name
                                        </label>
                                        <input
                                          type="text"
                                          name="lastName"
                                          id="lastName"
                                          className=" border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                          placeholder="Your last name"
                                          required="true"
                                          onChange={(e) =>
                                            setLastName(e.target.value)
                                          }
                                        ></input>
                                      </div>

                                      <div>
                                        <label
                                          htmlFor="email"
                                          className="block mb-2 text-sm font-bold text-colorThree dark:text-white"
                                        >
                                          Email
                                        </label>
                                        <input
                                          type="email"
                                          name="Email"
                                          id="email"
                                          placeholder="name@domain.com"
                                          className=" border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                          required="true"
                                          onChange={(e) =>
                                            setEmail(e.target.value)
                                          }
                                        ></input>
                                      </div>

                                      <div>
                                        <label
                                          htmlFor="password"
                                          className="block mb-2 text-sm font-bold text-colorThree dark:text-white"
                                        >
                                          Password
                                        </label>
                                        <div className="flex flex-row">
                                          <input
                                            type={type}
                                            name="password"
                                            value={password}
                                            id="password"
                                            placeholder="••••••••"
                                            title="Password must be within 8 to 12 characters containing alteast 1 uppercase, 1 lowercase, 1 number and a special character"
                                            className=" border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            required="true"
                                            onChange={(e) =>
                                              setPassword(e.target.value)
                                            }
                                          ></input>
                                          {/* <span
                                          onClick={handleToggle}
                                          className="cursor-pointer flex justify-center items-center"
                                        >
                                          <Icon
                                            className="absolute mr-10 text-gray-500"
                                            icon={icon}
                                            size={20}
                                          ></Icon>
                                        </span> */}
                                        </div>
                                      </div>
                                    </div>

                                    <div className="mt-4">
                                      <button
                                        type="button"
                                        onClick={handleContinue}
                                        className="w-full text-white bg-colorFour text-base hover:bg-colorFour transition ease-in-out duration-1000 focus:outline-none font-medium rounded px-5 py-2.5 text-center cursor-pointer"
                                      >
                                        Continue
                                      </button>
                                    </div>
                                  </div>
                                ) : (
                                  <div className="space-y-4">
                                    <button
                                      type="button"
                                      onClick={handleBack}
                                      className="btn bg-colorFour text-white rounded p-3 text-sm font-semibold"
                                    >
                                      Go Back
                                    </button>

                                    <div>
                                      <label
                                        htmlFor="phone"
                                        className="block mb-2 text-sm font-bold text-colorThree dark:text-white"
                                      >
                                        Phone Number
                                      </label>

                                      <PhoneInput
                                        international
                                        defaultCountry="US"
                                        value={phoneNumber}
                                        onChange={setPhoneNumber}
                                        className="p-2.5 rounded text-sm border border-gray-300 text-gray-900 outline-none"
                                      />
                                    </div>

                                    <div>
                                      <label
                                        htmlFor="role"
                                        className="block mb-2 text-sm font-bold text-colorThree dark:text-white"
                                      >
                                        Registering as
                                      </label>
                                      <select
                                        id="role"
                                        name="role"
                                        className=" border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        onChange={(e) =>
                                          setRole(e.target.value)
                                        }
                                      >
                                        <option selected>
                                          Choose your Mode
                                        </option>
                                        <option
                                          value="individual"
                                          id="individual"
                                        >
                                          Individual
                                        </option>
                                        <option
                                          value="organization"
                                          id="organization"
                                        >
                                          Corporate
                                        </option>
                                      </select>
                                    </div>
                                    <div>
                                      {role === "organization" && (
                                        <>
                                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                                            <div>
                                              <label
                                                htmlFor="organizationName"
                                                className="block mb-2 text-sm font-bold text-colorThree dark:text-white"
                                              >
                                                Organization Name
                                              </label>
                                              <input
                                                type="text"
                                                name="organizationName"
                                                id="organizationName"
                                                placeholder=""
                                                className=" border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                required="true"
                                                onChange={(e) =>
                                                  setOrganizationName(
                                                    e.target.value
                                                  )
                                                }
                                              ></input>
                                            </div>
                                            {/* <div>
                                            <label
                                              htmlFor="organizationCountry"
                                              className="block mb-2 text-sm font-bold text-colorThree dark:text-white"
                                            >
                                              Country of Operation
                                            </label>
                                            <Select
                                              options={Country.getAllCountries()}
                                              getOptionLabel={(options) => {
                                                return options["name"];
                                              }}
                                              getOptionValue={(options) => {
                                                return options["name"];
                                              }}
                                              value={organizationCountry}
                                              onChange={(item) => {
                                                setOrganizationCountry(item);
                                              }}
                                            />
                                          </div>
                                          <div>
                                            <label
                                              htmlFor="country"
                                              className="block mb-2 text-sm font-bold text-colorThree dark:text-white"
                                            >
                                              State of Operation
                                            </label>
                                            <Select
                                              options={State?.getStatesOfCountry(
                                                organizationCountry?.isoCode
                                              )}
                                              getOptionLabel={(options) => {
                                                return options["name"];
                                              }}
                                              getOptionValue={(options) => {
                                                return options["name"];
                                              }}
                                              value={organizationState}
                                              onChange={(item) => {
                                                setOrganizationState(item);
                                              }}
                                            />
                                          </div>
                                          <div>
                                            <label
                                              htmlFor="country"
                                              className="block mb-2 text-sm font-bold text-colorThree dark:text-white"
                                            >
                                              City Location
                                            </label>
                                            <Select
                                              options={City.getCitiesOfState(
                                                organizationState?.countryCode,
                                                organizationState?.isoCode
                                              )}
                                              getOptionLabel={(options) => {
                                                return options["name"];
                                              }}
                                              getOptionValue={(options) => {
                                                return options["name"];
                                              }}
                                              value={organizationCity}
                                              onChange={(item) => {
                                                setOrganizationCity(item);
                                              }}
                                            />
                                          </div> */}
                                          </div>
                                        </>
                                      )}
                                    </div>

                                    <div className="flex items-start">
                                      <div className="flex items-center h-5">
                                        <input
                                          id="terms"
                                          aria-describedby="terms"
                                          type="checkbox"
                                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800 cursor-pointer"
                                          required
                                        ></input>
                                      </div>
                                      <div className="ml-3 text-sm">
                                        <label
                                          htmlFor="terms"
                                          className="font-light text-gray-500 dark:text-gray-300"
                                        >
                                          I accept the{" "}
                                          <a
                                            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                            href="/privacy"
                                          >
                                            Terms and Conditions
                                          </a>
                                        </label>
                                      </div>
                                    </div>
                                    <button
                                      type="submit"
                                      className="w-full text-white bg-colorFour text-base hover:bg-colorFour transition ease-in-out duration-1000 focus:outline-none font-semibold rounded px-5 py-2.5 text-center cursor-pointer"
                                    >
                                      Sign up
                                    </button>

                                    <div className="relative flex py-1 items-center">
                                      <div className="flex-grow border-t border-gray-400"></div>
                                      <span className="flex-shrink mx-4 text-gray-400 text-sm">
                                        Or
                                      </span>
                                      <div className="flex-grow border-t border-gray-400"></div>
                                    </div>
                                    <p className="text-sm text-center font-light text-gray-500 dark:text-gray-400">
                                      Already have an account?{" "}
                                      <a
                                        href="/login"
                                        className="font-medium text-primary-600 hover:underline dark:text-primary-500 cursor-pointer"
                                      >
                                        Login here
                                      </a>
                                    </p>
                                  </div>
                                )}
                              </form>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 lg:min-h-screen">
                <div className="flex justify-center items-center flex-col h-full space-y-4">
                  <div className="flex justify-center items-center lg:ml-0 lg:mr-0 ml-2 mr-2">
                    <img
                      src="https://doodle.com/auth/resources/18.0.1/login/doodle-v2/img/new-registration-desktop.svg"
                      alt=""
                    />
                  </div>
                  <div className="font-semibold lg:text-2xl text-xl tracking-wide lg:text-start text-center">
                    <h1>Join millions of people who own their time.</h1>
                  </div>
                  <div className="text-base text-gray-600 pb-8">
                    <ul className="space-y-2 ">
                      <li className="lg:text-start text-center">
                        &#x2022; Quick and easy meeting scheduling
                      </li>
                      <li className="lg:text-start text-center">
                        &#x2022; All-in-one tool with calendar and video
                        conferencing connections
                      </li>
                      <li className="lg:text-start text-center">
                        &#x2022; Unlimited Group Polls and access to the core
                        Sign-up Sheet, 1:1, and Booking Page features
                      </li>
                    </ul>
                  </div>

                  {/* <div className="w-full lg:pt-2 pt-4 lg:pb-0 pb-4">
                  <div className="grid grid-cols-3 gap-3">
                    <a
                      href="/"
                      className="flex flex-row justify-center items-center"
                    >
                      <FaHome className="text-colorFour w-4 h-4 mr-1" />
                      <div className=" text-colorFour font-semibold">
                        <h1>Home</h1>
                      </div>
                    </a>

                    <a
                      href="/about"
                      className="flex flex-row justify-center items-center"
                    >
                      <FaIndustry className="text-colorFour w-4 h-4 mr-1" />
                      <div className=" text-colorFour font-semibold">
                        <h1>About Us</h1>
                      </div>
                    </a>

                    <a
                      href="/contact"
                      className="flex flex-row justify-center items-center"
                    >
                      <FaMicrophone className="text-colorFour w-4 h-4 mr-1" />
                      <div className=" text-colorFour font-semibold">
                        <h1>Contact Us</h1>
                      </div>
                    </a>
                  </div>
                </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Register;
