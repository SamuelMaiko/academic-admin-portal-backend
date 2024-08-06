import React from "react";
import LandingNavBar from "./components/LandingNavBar";
import LandingHeader from "./components/LandingHeader";
import { useStateShareContext } from "../../Context/StateContext";
import MobileNavBar from "./components/MobileNavBar";

const LandingPage = () => {
  const { show } = useStateShareContext();

  return (
    <div className="relative h-[98vh] overflow-hidden w-full ">
      <LandingNavBar />
      <div className=" ">
        <LandingHeader />
      </div>
    </div>
  );
};

export default LandingPage;
