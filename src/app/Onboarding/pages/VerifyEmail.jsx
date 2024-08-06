import React, { useEffect } from "react";
import EnterVerificationCodeForm from "../components/EnterVerificationCodeForm";
import EnterEmailForm from "../components/EnterEmailForm";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../../../Cookies/Cookie";

const VerifyEmail = () => {
  const navigate = useNavigate();

  useEffect(() => {
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
      // navigate("/onboarding/success");
    } else {
      // navigate("/onboarding/change-password");
    }
  }, []);
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center">
        <h1 className="font-semibold text-2xl md:text-3xl">
          Verify your email
        </h1>
        <p className="font-medium my-4 text-sm md:text-base">
          Your Email will be used to verify your identity and added to your
          details after.
        </p>
        <p className="text-sm md:text-md hidden md:block">
          We&#39;ll send a verification code to your email. Enter a valid email.
          remember you won&#39;t be able to change it later.
        </p>
        <p className="text-sm md:text-md block md:hidden text-blue-400 text-left">
          Enter a valid email.
        </p>
      </div>
      <div className="flex md:flex-row flex-col w-full mt-4">
        <EnterEmailForm />
        <EnterVerificationCodeForm />
      </div>
    </div>
  );
};

export default VerifyEmail;
