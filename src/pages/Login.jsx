import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { useState } from "react";
import { eye } from "react-icons-kit/feather/eye";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import { FaHome } from "react-icons/fa";
import { FaIndustry } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa6";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(showLoading());
    axios
      .post(
        // "http://localhost:8080/api/v1/login",
        "https://backend-syndeo.onrender.com/api/v1/login",
        {
          email,
          password,
        }
      )
      .then((response) => {
        window.location.reload();
        dispatch(hideLoading());
        if (response.status === 200) {
          localStorage.setItem("token", response.data.token);
          console.log(response.data.token);
          Swal.fire({
            title: "Login Success",
            icon: "success",
          });
          navigate("/dashboard");
        } else {
          Swal.fire({
            icon: "error",
            title: "Incorrect Credentials !!!",
            text: "The username & password doesn't match. Please enter valid username and correct password.",
          });
        }
      })
      .catch((error) => {
        dispatch(hideLoading());
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };

  return (
    <div>
      {/* <Navbar /> */}
      <div className="relative ">
        <div className="w-full h-screen">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 h-full ">
            <div className="h-[100%] w-full pt-8">
              <div className="flex flex-col justify-center px-6 h-full">
                <div className="flex justify-center items-center">
                  <div className="w-full bg-white rounded-lg shadow md:mt-0 xl:p-0 max-w-md">
                    <div className="p-6 space-y-4 md:space-y-4 sm:p-8">
                      <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-colorThree md:text-2xl dark:text-white">
                        Log in to Syndèo
                      </h1>
                      <form
                        className="space-y-4 md:space-y-6"
                        onSubmit={handleSubmit}
                      >
                        <div>
                          <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-bold text-colorThree dark:text-white"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            className=" border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="name@domain.com"
                            required="true"
                            onChange={(e) => setEmail(e.target.value)}
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
                              className=" border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              required="true"
                              onChange={(e) => setPassword(e.target.value)}
                            ></input>
                            <span
                              onClick={handleToggle}
                              className="cursor-pointer flex justify-center items-center"
                            >
                              <Icon
                                className="absolute mr-10 text-black"
                                icon={icon}
                                size={20}
                              ></Icon>
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-start">
                            <div className="flex items-center h-5">
                              <input
                                id="remember"
                                aria-describedby="remember"
                                type="checkbox"
                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                required=""
                              ></input>
                            </div>
                            <div className="ml-3 text-sm">
                              <label
                                htmlFor="remember"
                                className="text-black dark:text-gray-300 "
                              >
                                Keep me signed in
                              </label>
                            </div>
                          </div>
                          <a
                            href="/forgotPassword"
                            className="text-sm hover:underline"
                          >
                            Forgot password?
                          </a>
                        </div>
                        <button
                          type="submit"
                          className="w-full text-white bg-colorFour text-base hover:bg-colorFour transition ease-in-out duration-1000 focus:outline-none font-semibold rounded-lg px-5 py-2.5 text-center cursor-pointer"
                        >
                          Log in
                        </button>
                        <div className="relative flex py-1 items-center">
                          <div className="flex-grow border-t border-gray-400"></div>
                          <span className="flex-shrink mx-4 text-black text-sm">
                            or
                          </span>
                          <div className="flex-grow border-t border-gray-400"></div>
                        </div>

                        <button className="w-full flex text-black font-medium items-center justify-center gap-x-3 py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
                          <img
                            src="https://secure.meetupstatic.com/next/images/login/google.svg?w=48"
                            alt=""
                            className="w-5 h-5"
                          />
                          Log in with Google
                        </button>

                        <button className="w-full flex text-black font-medium items-center justify-center gap-x-3 py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
                          <img
                            src="https://secure.meetupstatic.com/next/images/login/apple.svg?w=48"
                            alt=""
                            className="w-5 h-5"
                          />
                          Log in with Apple
                        </button>

                        <p className="text-sm text-center font-light text-gray-500 dark:text-gray-400 ">
                          Not Registered?{" "}
                          <a
                            href="/register"
                            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                          >
                            Create Account
                          </a>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50">
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
                <div className="text-base text-gray-600 lg:pb-0 pb-4">
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

                <div className="w-full lg:pt-2 pt-4 lg:pb-0 pb-4">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
