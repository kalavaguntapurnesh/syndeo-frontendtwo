import { useEffect, useState } from "react";
import axios from "axios";
// import { useSelector } from "react-redux";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";

const AddEmployees = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleChange = (event) => {
    const input = event.target.value;
    setPhoneNumber(input);
  };

  const params = useParams();

  return (
    <div>
      <Layout>
        <div>
          <h1 className="pb-3 font-medium leading-normal tracking-normal text-2xl lg:text-start text-center">
            Add an Employee
          </h1>
        </div>
        <form
          className="space-y-4 md:space-y-6"
          // onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
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
                className=" border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your first name"
                required
                onChange={(e) => setFirstName(e.target.value)}
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
                className=" border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your last name"
                required="true"
                onChange={(e) => setLastName(e.target.value)}
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
                className=" border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required="true"
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>

            <div>
              <label
                htmlFor="employeeId"
                className="block mb-2 text-sm font-bold text-colorThree dark:text-white"
              >
                Employee ID
              </label>
              <input
                type="text"
                name="employeeId"
                id="employeeId"
                className=" border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required="true"
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>

            <div>
              <label
                htmlFor="phone-input"
                className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
              >
                Phone number
              </label>
              <div className="relative">
                {/* <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 19 18"
                  >
                    <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
                  </svg>
                </div> */}
                <input
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  aria-describedby="helper-text-explanation"
                  className=" border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required="true"
                  // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  pattern="[789][0-9]{9}"
                  placeholder="123-456-7890"
                  title="Must start with either 7, 8, 9 and should be of 10 numbers"
                  value={phoneNumber}
                  onChange={handleChange}
                />
              </div>
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
                  name="password"
                  value={password}
                  id="password"
                  title="Password must be within 8 to 12 characters containing alteast 1 uppercase, 1 lowercase, 1 number and a special character"
                  className=" border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required="true"
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
              </div>
            </div>
          </div>

          <div className="md:pt-8 pt-4 pb-4">
            <div className="flex justify-center">
              <button class="  hover:text-white transition duration-1000 text-white bg-colorFour hover:bg-green-600 py-3 px-8 rounded-full">
                Add Employee
              </button>
            </div>
          </div>
        </form>
      </Layout>
    </div>
  );
};

export default AddEmployees;
