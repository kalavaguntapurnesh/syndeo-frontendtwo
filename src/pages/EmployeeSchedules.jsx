import Layout from "./../components/Layout";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const EmployeeSchedules = () => {
  const { user } = useSelector((state) => state.user);
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div>
      <Layout>
        <div className="flex flex-row ">
          <div className="w-1/2 ">
            <h1 className="pb-3 font-medium leading-normal tracking-normal md:text-2xl text-lg lg:text-start text-center">
              Make a Schedule
            </h1>
          </div>

          <div className="w-1/2 flex justify-end">
            <button
              onClick={() => navigate("/dashboard")}
              type="button"
              class="text-gray-500 bg-white border hover:bg-colorFour hover:text-white transition duration-1000 ease-in-out border-gray-500 font-medium rounded-full text-sm md:px-5 md:py-2.5 px-2"
            >
              Go to Home
            </button>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default EmployeeSchedules;
