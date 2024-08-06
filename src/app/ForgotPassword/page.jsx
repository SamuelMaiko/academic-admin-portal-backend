import React from "react";
import LandingNavBar from "../LandingPage/components/LandingNavBar";
import ForgotPasswordForm from "./components/ForgotPasswordForm";
import Footer from "../Footer/page";

const ForgotPassword = () => {
  return (
    <div className="">
      <LandingNavBar />
      <div className="min-h-[80vh] flex md:items-center justify-center px-2 md:px-0">
        <ForgotPasswordForm />
      </div>
      <Footer />
    </div>
  );
};

export default ForgotPassword;
