import React, { useEffect } from "react";
import FillDetailsForm from "../components/FillDetailsForm";
import { getCookie } from "../../../Cookies/Cookie";
import { useNavigate } from "react-router-dom";

const FillDetails = () => {
  const navigate = useNavigate();

  useEffect(() => {
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
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center">
        <h1 className="font-semibold text-2xl md:text-3xl">
          Fill your details
        </h1>
        <p className="font-medium my-4 text-sm md:text-base">
          Input your personal details for account setup.
        </p>
      </div>
      <div className="flex w-full mt-4">
        <FillDetailsForm />
      </div>
    </div>
  );
};

export default FillDetails;
