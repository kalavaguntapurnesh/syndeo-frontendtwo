// import { Icon } from "react-icons-kit";
// import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { useState } from "react";
// import { eye } from "react-icons-kit/feather/eye";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { showLoading, hideLoading } from "../redux/features/alertSlice";
// import { FaHome } from "react-icons/fa";
// import { FaIndustry } from "react-icons/fa";
// import { FaMicrophone } from "react-icons/fa6";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import apple from "../assets/Apple.svg";
import google from "../assets/Google.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  // const [icon, setIcon] = useState(eyeOff);
  const navigate = useNavigate();
  // const dispatch = useDispatch();
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
        // "http://localhost:8080/api/v1/login",
        "https://backend-syndeo.onrender.com/api/v1/login",
        {
          email,
          password,
        }
      )
      .then((response) => {
        window.location.reload();
        // dispatch(hideLoading());
        if (response.status === 200) {
          localStorage.setItem("token", response.data.token);
          console.log(response.data.token);
          console.log("Login Success & now moving to dashboard");
          Swal.fire({
            title: "Login Success",
            icon: "success",
          });
          navigate("/dashboard");
        }
      })
      .catch((error) => {
        // dispatch(hideLoading());
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Check your username and password!!!",
        });
      });
  };

  return (
    <div>
      <Navbar />
      <div className="relative md:pt-12 pt-20 pb-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="p-4">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 h-full">
              <div className="h-[100%] w-full lg:pt-8">
                <div className="flex flex-col justify-center h-full">
                  <div className="flex justify-center items-center">
                    <div className="w-full bg-white rounded shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] md:mt-0 xl:p-0 max-w-md">
                      <div className="p-6 space-y-4 md:space-y-4 sm:p-8">
                        <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-footerLinks md:text-2xl ">
                          Log in to Syndèo
                        </h1>
                        <form
                          className="space-y-4 md:space-y-6"
                          onSubmit={handleSubmit}
                        >
                          <div>
                            <label
                              htmlFor="email"
                              className="block mb-2 text-sm font-bold text-colorThree "
                            >
                              Email
                            </label>
                            <input
                              type="email"
                              name="email"
                              id="email"
                              className=" border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                              placeholder="name@domain.com"
                              required="true"
                              onChange={(e) => setEmail(e.target.value)}
                            ></input>
                          </div>
                          <div>
                            <label
                              htmlFor="password"
                              className="block mb-2 text-sm font-bold text-colorThree "
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
                                className=" border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                required="true"
                                onChange={(e) => setPassword(e.target.value)}
                              ></input>
                              {/* <span
                              onClick={handleToggle}
                              className="cursor-pointer flex justify-center items-center"
                            >
                              <Icon
                                className="absolute mr-10 text-black"
                                icon={icon}
                                size={20}
                              ></Icon>
                            </span> */}
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
                                  className="text-black  "
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
                            className="w-full text-white bg-colorFour text-base hover:bg-colorFour transition ease-in-out duration-1000 focus:outline-none font-semibold rounded px-5 py-2.5 text-center cursor-pointer"
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

                          <button className="w-full flex text-black font-medium items-center justify-center gap-x-3 py-2.5 border rounded hover:bg-gray-50 duration-150 active:bg-gray-100">
                            <img src={google} alt="" className="w-5 h-5" />
                            Log in with Google
                          </button>

                          <button className="w-full flex text-black font-medium items-center justify-center gap-x-3 py-2.5 border rounded hover:bg-gray-50 duration-150 active:bg-gray-100">
                            <img src={apple} alt="" className="w-5 h-5" />
                            Log in with Apple
                          </button>

                          <p className="text-sm text-center font-light text-gray-500  ">
                            Not Registered?{" "}
                            <a
                              href="/register"
                              className="font-medium text-primary-600 hover:underline "
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

              <div className="bg-slate-50 lg:block hidden">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
