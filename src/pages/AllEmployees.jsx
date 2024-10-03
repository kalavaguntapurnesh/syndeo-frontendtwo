import { useEffect, useState } from "react";
import axios from "axios";
// import { useSelector } from "react-redux";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";

const AllEmployees = () => {
  const navigate = useNavigate();
  const params = useParams();

  return (
    <div>
      <Layout>
        <div>
          <h1 className="pb-3 font-medium leading-normal tracking-normal text-2xl lg:text-start text-center">
            List of Employees
          </h1>
        </div>
      </Layout>
    </div>
  );
};

export default AllEmployees;
