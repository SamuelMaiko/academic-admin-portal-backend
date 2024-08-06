import React, { useEffect } from "react";
import "./styles.css";
import CompleteProfileForm from "../components/CompleteProfileForm";
import { getCookie } from "../../../Cookies/Cookie";
import { useNavigate } from "react-router-dom";

const CompleteProfile = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (getCookie("profileDone") === "true") {
      if (getCookie("changePasswordDone") === "true") {
        navigate("/onboarding/success");
      } else {
        navigate("/onboarding/change-password");
      }
    } else {
      navigate("/onboarding/complete-profile");
    }
  }, []);

  return (
    <div className="flex flex-col ">
      <div className="flex flex-col md:pl-[13rem] md:pr-[13rem]">
        <h1 className="font-semibold text-2xl md:text-3xl text-center">
          Complete your profile
        </h1>
        <p className="font-medium my-4 text-sm md:text-base text-center md:text-left">
          Upload a profile picture and write a brief bio to personalize your
          account.
        </p>
      </div>
      <div className="flex w-full mt-4 md:pl-[13rem]">
        <CompleteProfileForm />
      </div>
    </div>
  );
};

export default CompleteProfile;
