import React from "react";
import LandingNavBar from "../LandingPage/components/LandingNavBar";
import { Footer } from "flowbite-react";
import VerifyCodeForm from "./components/VerifyCodeForm";

const VerifySentCode = () => {
  return (
    <div>
      <LandingNavBar />
      <div className="min-h-[80vh] flex mt-[2.4rem] md:mt-0 md:items-center justify-center px-2 md:px-0">
        <VerifyCodeForm />
      </div>
      <Footer />
    </div>
  );
};

export default VerifySentCode;
