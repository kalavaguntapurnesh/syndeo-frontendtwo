import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import Layout from "../components/Layout";
import Swal from "sweetalert2";
import { FaUserTie } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { MdCategory } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { SlGraph } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";
import { MdFilterAlt } from "react-icons/md";

const AllEmployees = () => {
  const { user } = useSelector((state) => state.user);
  const [employees, setEmployees] = useState([]);
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [searchQuery, setSearchQuery] = useState("");
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [statusOpen, setStatusOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);

  const fetchEmployees = async () => {
    try {
      const response = await axios.post(
        // "http://localhost:8080/api/v1/getOrganizationEmployees",
        "https://backend-syndeo.onrender.com/api/v1/getOrganizationEmployees",
        { adminId: params.id }
      );
      if (response.status === 200) {
        setEmployees(response.data);
        console.log("The Employees are : ", response.data);
      }
    } catch (error) {
      console.log("Error in fetching employees", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong in fetching employees!",
      });
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  // const handleSearch = async (e) => {
  //   setSearchQuery(e.target.value);
  //   if (e.target.value === "") {
  //     const response = await axios.post(
  //       "http://localhost:8080/api/v1/getOrganizationEmployees",
  //       // "https://backend-syndeo.onrender.com/api/v1/getOrganizationEmployees",
  //       { adminId: params.id }
  //     );
  //     if (response.status === 200) {
  //       setEmployees(response.data);
  //       console.log("The Employees are : ", response.data);
  //     }
  //   }

  //   try {
  //     const response = await axios.post(
  //       "http://localhost:8080/api/v1/searchOrganizationEmployees",
  //       { adminId: params.id, searchQuery: e.target.value }
  //     );
  //     if (response.status === 200) {
  //       setEmployees(response.data);
  //       console.log("The Searched Employees are : ", response.data);
  //     }
  //   } catch (error) {
  //     console.error("Error searching employees:", error);
  //   }
  // };

  return (
    <div>
      <Layout>
        <div className="lg:flex items-center justify-between">
          <h1 className="pb-3 font-medium leading-normal tracking-normal text-2xl lg:text-start text-center">
            List of employees
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

        {/* <input
          type="text"
          placeholder="Search by name or email..."
          // value={searchQuery}
          // onChange={handleSearch}
          className="border rounded-l px-3 py-2"
        /> */}

        {employees.length > 0 ? (
          <div className="mt-4 pt-8">
            <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-colorFour text-left text-xs font-medium text-white uppercase tracking-wider">
                    Employee ID
                  </th>

                  <th className="px-6 py-3 bg-colorFour text-left text-xs font-medium text-white uppercase tracking-wider">
                    First Name
                  </th>
                  <th className="px-6 py-3 bg-colorFour text-left text-xs font-medium text-white uppercase tracking-wider">
                    Last Name
                  </th>
                  <th className="px-6 py-3 bg-colorFour text-left text-xs font-medium text-white uppercase tracking-wider">
                    Email
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {employees.map((employee) => (
                  <tr key={employee}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600">
                      {employee.employeeId}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600">
                      {employee.firstName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600">
                      {employee.lastName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600">
                      {employee.email}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="bg-white shadow rounded mt-12">
            <div className="space-y-4 py-12">
              <div className="flex justify-center items-center ">
                <FaUserTie className="w-12 h-12 text-colorFour" />
              </div>
              <div className="text-center">
                <h1 className="leading-normal tracking-normal text-2xl text-gray-500">
                  No upcoming bookings
                </h1>
              </div>

              <div className="text-center text-gray-500 md:text-base text-sm">
                <p>Need help? Find out more about sharing your booking pages</p>
              </div>
            </div>
          </div>
        )}
      </Layout>
    </div>
  );
};

export default AllEmployees;
