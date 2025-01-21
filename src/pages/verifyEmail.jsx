import React, { useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';  

const VerifyEmail = () => {
 
  const { token } = useParams();

  console.log(token);
  useEffect(() => {
    if (token) {
      verifyEmail(token); 
    }
  }, [token]);

  const verifyEmail = async (token) => {
    try {
    //   const response = await axios.get(`http://localhost:8080/api/v1/confirm/${token}`);
      const response = await axios.get(`https://backend-syndeo.onrender.com/api/v1/confirm/${token}`);
      if (response.data.message === "Email Verified Successfully") {
   
        Swal.fire({
          icon: 'success',
          title: response.data.message, 
          html: `Please <a href="https://backend-syndeo.onrender.com/api/v1/login" target="_blank">login here</a>`,  
        //   html: `Please <a href="http://localhost:8080/api/v1/login" target="_blank">login here</a>`, 
          showConfirmButton: true,
          confirmButtonText: 'Close',
        });
      } else {
        Swal.fire('Error', 'Something went wrong. Please try again later.', 'error');
      }
    } catch (error) {
      Swal.fire('Error', 'An error occurred. Please try again later.', 'error');
    }
  };

  return (
    <div>
      <h2>Verifying your email...</h2>
    </div>
  );
};

export default VerifyEmail;
