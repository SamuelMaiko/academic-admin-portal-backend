import React from "react";
import LandingNavBar from "../LandingPage/components/LandingNavBar";
import { Footer } from "flowbite-react";
import ResetSuccess from "./components/ResetSuccess";

const ResetSuccessful = () => {
  return (
    <div>
      <LandingNavBar />
      <div className="min-h-[80vh] flex mt-2 md:items-center justify-center px-2 md:px-0">
        <ResetSuccess />
      </div>
      <Footer />
    </div>
  );
};

export default ResetSuccessful;
