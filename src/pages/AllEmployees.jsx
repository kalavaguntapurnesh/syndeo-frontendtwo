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

  const fetchEmployees = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/getOrganizationEmployees",
        { adminId: params.id }
      );
      if (response.status === 200) {
        setEmployees(response.data.data);
        Swal.fire({
          title: "Employees Fetched Successfully",
          icon: "success",
        });
      }
    } catch (error) {
      console.log("Error in fetching employyes", error);
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

  return (
    <div>
      <Layout>
        <div>
          <h1 className="pb-3 font-medium leading-normal tracking-normal text-2xl lg:text-start text-center">
            List of Employees
          </h1>
        </div>

        {employees.length > 0 ? (
          <div className="mt-4">
            <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-colorFour text-left text-xs font-medium text-white uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-3 bg-colorFour lg:block hidden text-left text-xs font-medium text-white uppercase tracking-wider">
                    Description
                  </th>
                  <th className="px-6 py-3 bg-colorFour text-left text-xs font-medium text-white uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-6 py-3 bg-colorFour text-left text-xs font-medium text-white uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 bg-colorFour text-left text-xs font-medium text-white uppercase tracking-wider">
                    Start Time
                  </th>
                  <th className="px-6 py-3 bg-colorFour text-left text-xs font-medium text-white uppercase tracking-wider">
                    End Time
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {/* {individualSchedules.map((schedule) => (
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600">
                      {schedule.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap lg:block hidden text-sm font-medium text-gray-600">
                      {schedule.description}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600">
                      {schedule.location}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600">
                      {schedule.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600">
                      {schedule.startTime}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600">
                      {schedule.endTime}
                    </td>
                  </tr>
                ))} */}
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
