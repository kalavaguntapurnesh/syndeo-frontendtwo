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
      const response = await axios.get(`https://backend-syndeo.onrender.com/api/v1/confirm/${token}`);
      
      console.log(response);  

      if (response.data && response.data.message === "Email Verified Successfully") {
        Swal.fire({
          icon: 'success',
          title: 'Email Verified Successfully',  
          html: `Please <a href="https://syndeo-frontendtwo.vercel.app/login" target="_blank">login here</a>`, 
          showConfirmButton: true,
          confirmButtonText: 'Close',
        });
      } else {
        Swal.fire('Error', 'Something went wrong. Please try again later.', 'error');
      }
    } catch (error) {
      console.error('Error during email verification:', error); // Log the error
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
