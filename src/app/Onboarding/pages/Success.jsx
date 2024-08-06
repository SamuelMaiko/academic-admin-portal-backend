import React, { useEffect } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import success from "../../../assets/success.png";
import { getCookie } from "../../../Cookies/Cookie";

const Success = () => {
  const navigate = useNavigate();
  useEffect(() => {
    // conditionally navigate
    if (getCookie("verifyDone") === "true") {
      if (getCookie("fillDetailsDone") === "true") {
        if (getCookie("profileDone") === "true") {
          if (getCookie("changePasswordDone") === "true") {
            navigate("/onboarding/success");
          } else {
            navigate("/onboarding/change-password");
          }
        } else {
          navigate("/onboarding/complete-profile");
        }
      } else {
        navigate("/onboarding/fill-details");
      }
    } else {
      navigate("/onboarding/verify-email");
    }
  }, []);
  return (
    <div>
      <div className=" flex justify-center h-[14rem] overflow-hidden">
        <div className="h-[13rem] md:h-[17rem]">
          <img
            src={success}
            className="w-auto h-full object-cover object-top"
            alt=""
          />
        </div>
      </div>
      <h1 className="text-[1.8rem] md:text-[2.4rem] md:mt-4 font-bold text-center">
        Success
      </h1>
      <h2 className="text-xl md:text-2xl font-medium text-center">
        Welcome to Techwave Writers!
      </h2>
      <div className="flex justify-center mt-8">
        <div className="">
          <div className="flex justify-center">
            <button
              className="button mt-[2rem]"
              onClick={() => navigate("/home")}
            >
              <span className="button-content">Get started </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
