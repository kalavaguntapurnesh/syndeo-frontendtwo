import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
// import { eye } from "react-icons-kit/feather/eye";
// import { eyeOff } from "react-icons-kit/feather/eyeOff";
// import { Icon } from "react-icons-kit";

const AddEmployees = () => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
  // const handleToggle = () => {
  //   if (type === "password") {
  //     setIcon(eye);
  //     setType("text");
  //   } else {
  //     setIcon(eyeOff);
  //     setType("password");
  //   }
  // };

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
        <div>
          <h1 className="pb-3 font-medium leading-normal tracking-normal text-2xl lg:text-start text-center">
            Add an Employee
          </h1>
        </div>
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
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
                className=" border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                placeholder="123456"
                className=" border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                  type={type}
                  value={password}
                  id="password"
                  placeholder="******"
                  title="Password must be within 8 to 12 characters containing alteast 1 uppercase, 1 lowercase, 1 number and a special character"
                  className=" border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
          </div>

          <div className="md:pt-8 pt-4 pb-4">
            <div className="flex justify-center">
              <button className="  hover:text-white transition duration-1000 text-white bg-colorFour hover:bg-green-600 py-3 px-8 rounded-full">
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
