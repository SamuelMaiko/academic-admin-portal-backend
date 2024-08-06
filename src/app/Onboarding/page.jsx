import React from "react";
import { Outlet } from "react-router-dom";
import ProgressBar from "./components/ProgressBar";

const Onboarding = () => {
  return (
    <div className="w-full overflow-hidden min-h-screen md:bg-[#f0f0f0]">
      <div className="md:w-[83%] mx-auto">
        <ProgressBar />
        <div className="bg-white rounded-lg md:shadow-[0px_0px_5px_rgba(0,0,0,0.15)] p-[1rem] md:p-[5rem] mt-10 md:mt-0">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
