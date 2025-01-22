import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { MdCategory } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { SlGraph } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";
import { MdFilterAlt } from "react-icons/md";

const AddEmployees = () => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [statusOpen, setStatusOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [type, setType] = useState("password");
  // const [icon, setIcon] = useState(eyeOff);
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleChange = (event) => {
    const input = event.target.value;
    setPhoneNumber(input);
  };

  const params = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(showLoading());
    axios
      .post(
        // "http://localhost:8080/api/v1/add-employee",
        "https://backend-syndeo.onrender.com/api/v1/add-employee",
        {
          firstName,
          lastName,
          email,
          password,
          role: "employee",
          phoneNumber,
          adminId: params.id,
          employeeId,
        }
      )
      .then((response) => {
        dispatch(hideLoading());
        if (response.status === 201) {
          Swal.fire({
            title: "Employee Added Successfully",
            icon: "success",
          });
        }
        navigate("/dashboard");
      })
      .catch((error) => {
        dispatch(hideLoading());
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong in adding employees!",
        });
      });
  };

  return (
    <div>
      <Layout>
        <div className="lg:flex items-center justify-between">
          <h1 className="pb-3 font-medium leading-normal tracking-normal text-2xl lg:text-start text-center">
            Add an employee
          </h1>
          <div className="lg:flex gap-3 ">
            <div className="relative">
              <span className="absolute top-1/2 left-2 transform -translate-y-1/2 text-xl font-bold text-colorFour">
                <CiSearch />
              </span>
              <input
                type="text"
                placeholder="Search for an event"
                className="w-full py-2 pl-8 border border-gray-300 rounded focus:outline-none hover:border-colorFour transition-colors duration-300 "
              />
            </div>

            <div className="lg:flex grid grid-cols-2 gap-2 lg:mt-0 mt-4">
              <div className="relative flex gap-4 items-center justify-between bg-gray-300 p-2 rounded">
                <span className="text-colorFour text-xl">
                  <MdCategory />
                </span>
                <div>All Categories</div>
                <span
                  className="text-2xl   hover:bg-white cursor-pointer"
                  onClick={() => setCategoryOpen(!categoryOpen)}
                >
                  <RiArrowDropDownLine />
                </span>
                {categoryOpen && (
                  <div className="absolute top-full left-0 mt-2 w-full bg-white shadow-lg rounded p-2">
                    <ul>
                      <li className="p-2">Category 1</li>
                      <li className="p-2">Category 2</li>
                      <li className="p-2">Category 3</li>
                    </ul>
                  </div>
                )}
              </div>

              <div className="relative flex gap-4 items-center justify-between bg-gray-300 p-2 rounded">
                <span className="text-colorFour text-xl">
                  <SlGraph />
                </span>
                <div>All Status</div>
                <span
                  className="text-2xl   hover:bg-white cursor-pointer"
                  onClick={() => setStatusOpen(!statusOpen)}
                >
                  <RiArrowDropDownLine />
                </span>
                {statusOpen && (
                  <div className="absolute top-full left-0 mt-2 w-full bg-white shadow-lg rounded p-2">
                    <ul>
                      <li className="p-2">Status 1</li>
                      <li className="p-2">Status 2</li>
                      <li className="p-2">Status 3</li>
                    </ul>
                  </div>
                )}
              </div>

              <div className="relative flex gap-4 items-center justify-between bg-gray-300 p-2 rounded">
                <span className="text-colorFour text-xl font-bold">
                  <FaLocationDot />
                </span>
                <div>All Location</div>
                <span
                  className="text-2xl   hover:bg-white cursor-pointer"
                  onClick={() => setLocationOpen(!locationOpen)}
                >
                  <RiArrowDropDownLine />
                </span>
                {locationOpen && (
                  <div className="absolute top-full left-0 mt-2 w-full bg-white shadow-lg rounded p-2">
                    <ul>
                      <li className="p-2">Location 1</li>
                      <li className="p-2">Location 2</li>
                      <li className="p-2">Location 3</li>
                    </ul>
                  </div>
                )}
              </div>

              <div className="relative flex gap-4 items-center justify-between bg-gray-300 p-2 rounded">
                <span className="text-colorFour text-xl">
                  <MdFilterAlt />
                </span>
                <div>Advance Filter</div>
                <span
                  className="text-2xl   hover:bg-white cursor-pointer"
                  onClick={() => setFilterOpen(!filterOpen)}
                >
                  <RiArrowDropDownLine />
                </span>
                {filterOpen && (
                  <div className="absolute top-full left-0 mt-2 w-full bg-white shadow-lg rounded p-2">
                    <ul>
                      <li className="p-2">Filter 1</li>
                      <li className="p-2">Filter 2</li>
                      <li className="p-2">Filter 3</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <form className="space-y-4 md:space-y-6 pt-8" onSubmit={handleSubmit}>
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
                className=" border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-3 "
                placeholder="Employee First Name"
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
                className=" border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-3 "
                placeholder="Employee Last Name"
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
                className=" border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-3"
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
                placeholder="123456"
                className=" border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-3 "
                required="true"
                onChange={(e) => setEmployeeId(e.target.value)}
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
                <input
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  aria-describedby="helper-text-explanation"
                  className=" border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-3 "
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
                  type={type}
                  value={password}
                  id="password"
                  placeholder="******"
                  title="Password must be within 8 to 12 characters containing alteast 1 uppercase, 1 lowercase, 1 number and a special character"
                  className=" border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-3 "
                  required="true"
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
              </div>
            </div>
          </div>

          <div className="md:pt-8 pt-4 pb-4 w-[100%]">
            <div className="flex justify-center w-[100%]">
              <button className="transition duration-1000 text-white bg-colorFour hover:bg-white border border-colorFour hover:text-colorFour py-3 px-20 rounded">
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
