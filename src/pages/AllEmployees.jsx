import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import Layout from "../components/Layout";
import Swal from "sweetalert2";
import { FaUserTie } from "react-icons/fa";

const AllEmployees = () => {
  const { user } = useSelector((state) => state.user);
  const [employees, setEmployees] = useState([]);
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [searchQuery, setSearchQuery] = useState("");

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
        <div>
          <h1 className="pb-3 font-medium leading-normal tracking-normal text-2xl lg:text-start text-center">
            List of Employees
          </h1>
        </div>

        <input
          type="text"
          placeholder="Search by name or email..."
          // value={searchQuery}
          // onChange={handleSearch}
          className="border rounded-l px-3 py-2"
        />

        {employees.length > 0 ? (
          <div className="mt-4">
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
                  <tr>
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
                <p>
                  Need help? Find out more about sharing your{" "}
                  <a href="/dashboard" className="text-colorFour font-medium">
                    booking pages
                  </a>
                </p>
              </div>
            </div>
          </div>
        )}
      </Layout>
    </div>
  );
};

export default AllEmployees;
