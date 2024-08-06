import React, { useState } from "react";
import { toast } from "react-toastify";
import { getCookie } from "../../../Cookies/Cookie";
import { useNavigate } from "react-router-dom";
import instance from "../../../axios/instance";

const ResendOTPButton = ({ setShowResendSuccess, setError }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const email = getCookie("forgotEmail");

  const handleResendCode = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setShowResendSuccess(false);

    try {
      const response = await instance.post("/auth/get-new-otp/", {
        email,
      });
      setShowResendSuccess(true);
      //   toast.success("OTP resent to email.");
    } catch (error) {
      if (error.response && error.response.status) {
        const status = error.response.status;
        const message = error.response.data;
        console.log(error.response.data);

        switch (status) {
          case 400:
            toast.error(message.error);
            break;
          case 404:
            toast.error(message.error);
            break;
          case 500:
            toast.error("Internal server error.");

            break;
          default:
            // setError(`Error: ${message}`);
            break;
        }
      } else {
        // setError("An unexpected error occurred. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleResendCode}
      className="text-blue-600 hover:bg-blue-100 transition-colors duration-300
         mt-2 px-2 text-sm rounded-xl font-medium"
      disabled={loading}
    >
      {loading ? "Resending..." : "Resend code"}
    </button>
  );
};

export default ResendOTPButton;
