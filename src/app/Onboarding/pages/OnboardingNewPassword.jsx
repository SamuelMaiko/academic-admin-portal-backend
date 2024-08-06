import React, { useEffect } from "react";
import NewPasswordForm from "../components/NewPasswordForm";
import { getCookie } from "../../../Cookies/Cookie";
import { useNavigate } from "react-router-dom";

const OnboardingNewPassword = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (getCookie("changePasswordDone") === "true") {
      navigate("/onboarding/success");
    } else {
      navigate("/onboarding/change-password");
    }
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center">
        <h1 className="font-semibold text-3xl">Secure your account</h1>
        <p className="font-medium my-4 text-sm md:text-base">
          Change your default password to protect your information.
        </p>
      </div>
      <div className="flex w-full mt-4">
        <NewPasswordForm />
      </div>
    </div>
  );
};

export default OnboardingNewPassword;
