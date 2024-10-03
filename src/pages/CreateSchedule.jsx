import Layout from "../components/Layout";
import Calendar from "react-calendar";
import axios from "axios";
import "react-calendar/dist/Calendar.css";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const CreateSchedule = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [date, setDate] = useState(new Date());

  const handleDayClick = (value) => {
    setDate(value);
  };

  return (
    <div>
      <Layout>
        <div>
          <h1 className="pb-3 font-medium leading-normal tracking-normal text-2xl lg:text-start text-center">
            Select date & time to schedule appointments
          </h1>
        </div>

        <div className="flex justify-center items-center flex-col mt-4">
          <div>
            <Calendar onClickDay={handleDayClick} minDate={new Date()} />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default CreateSchedule;
