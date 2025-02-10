import React from "react";
import LandingNavBar from "../LandingPage/components/LandingNavBar";
import { Footer } from "flowbite-react";
import NewPasswordForm from "./components/NewPasswordForm";

const NewPassword = () => {
  return (
    <div>
      <LandingNavBar />
      <div className="min-h-[80vh] flex md:items-center justify-center px-2 md:px-0">
        <NewPasswordForm />
      </div>
      <Footer />
    </div>
  );
};

export default NewPassword;
