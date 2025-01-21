import React, { useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';  
import success from "../assets/success.png"
const VerifyEmail = () => {
 
  const { token } = useParams();

  console.log(token);
  useEffect(() => {
    if (token) {
      verifyEmail(token); 
    }
  }, [token]);


  const verifyEmail = async (token) => {

     // Handle success response
     const style = document.createElement('style');
     style.innerHTML = `
       .swal-custom-ok-button {
         background-color: #0A3161; /* Custom color */
         color:white;
         border: none;
         padding: 10px 20px;
         font-size: 16px;
         border-radius: 5px;
       }

       .swal-custom-ok-button:hover {
         background-color:rgb(69, 93, 122); /* Hover color */
       }
     `;
     document.head.appendChild(style);

    try {
    //   const response = await axios.get(`https://backend-syndeo.onrender.com/api/v1/confirm/${token}`);
      
    //   console.log(response);  

    Swal.fire({
        html: `
          <div style="display: flex; flex-direction: column; align-items: center;">
            <!-- Logo and Title Section -->
            <div style="display: flex; text-align: left; margin-bottom: 20px;">
              <h4 style="margin: 0; font-size: 1.5rem; font-weight: bold; color: #B31942; margin-right: 15px;">
                Syndèo.
              </h4>
            </div>
      
            <!-- Success Image (Centered) -->
            <div>
              <img src="${success}" alt="Success" style="width: 60px; height: 60px; margin: 0 10px;" />
            </div>
      
            <!-- Title (centered) -->
            <div style="width: 100%; text-align: center; margin-bottom: 20px;">
              <h1 style="margin: 0; font-size: 30px;">Email Verified Successfully</h1>
            </div>
          </div>
        `,
        customClass: {
          confirmButton: 'swal-custom-ok-button' 
        },
        confirmButtonText: 'Login',  
        preConfirm: () => {
          window.location.href = 'https://syndeo-frontendtwo.vercel.app/login';  
        }
      });
      
      


    //   if (response.data && response.data.message === "Email Verified Successfully") {
        // Swal.fire({
        //   icon: 'success',
        //   title: 'Email Verified Successfully',  
        //   html: `Please <a href="https://syndeo-frontendtwo.vercel.app/login" target="_blank">login here</a>`, 
        //   showConfirmButton: true,
        //   confirmButtonText: 'Close',
        // });
    //   } else {
    //     Swal.fire('Error', 'Something went wrong. Please try again later.', 'error');
    //   }
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
