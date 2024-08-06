import React from "react";
import OnboardingLogo from "../../../assets/OnboardingLogo.png";
import LogoLight from "../../../assets/LogoLight.png";
import ProgressCounter from "./ProgressCounter";
import ProgressConnector from "./ProgressConnector";
import { useLocation } from "react-router-dom";
import useLocalStorage from "../../../CustomHooks/useLocalStorage";
import { useProgressBarContext } from "../../../Context/ProgressBarContext";

const ProgressBar = () => {
  const { verifyDone, fillDetailsDone, profileDone, changePasswordDone } =
    useProgressBarContext();
  const { pathname } = useLocation();
  return (
    <div className="bg-transparent h-[6rem] md:h-[8rem] flex flex-col md:flex-row items-center">
      <div className="h-[2.7rem] w-[9rem] md:w-[11rem]  ">
        <img
          className="w-full h-full hidden md:block object-cover object-center"
          src={OnboardingLogo}
          alt=""
        />
        <img
          className="w-full h-full md:hidden mt-2 object-cover object-center"
          src={LogoLight}
          alt=""
        />
      </div>
      <div
        className="md:pl-[2rem] gap-2 md:gap-0 flex items-center justify-around px-2 md:px-0 
      md:justify-normal w-full mt-[1.5rem] md:mt-0"
      >
        <ProgressCounter
          number={1}
          className={`${
            verifyDone
              ? ""
              : "bg-transparent border-[2px] border-gray-600 text-gray-600"
          } ${
            (pathname == "/onboarding/verify-email") & !verifyDone
              ? "border-blue-500 text-blue-500"
              : ""
          } ml-1`}
          title="Verification"
        />
        <ProgressConnector className={`${verifyDone ? "" : "bg-gray-400"}`} />
        <ProgressCounter
          number={2}
          className={`${
            fillDetailsDone
              ? ""
              : "bg-transparent border-[2px] border-gray-600 text-gray-600 "
          } ${
            (pathname == "/onboarding/fill-details") & !fillDetailsDone
              ? "border-blue-500 text-blue-500"
              : ""
          }`}
          title="Details"
        />
        <ProgressConnector
          className={`${fillDetailsDone ? "" : "bg-gray-400"}`}
        />
        <ProgressCounter
          number={3}
          className={`${
            profileDone
              ? ""
              : "bg-transparent border-[2px] border-gray-600 text-gray-600"
          } ${
            (pathname == "/onboarding/complete-profile") & !profileDone
              ? "border-blue-500 text-blue-500"
              : ""
          }
          `}
          title="Complete"
        />
        <ProgressConnector className={`${profileDone ? "" : "bg-gray-400"}`} />
        <ProgressCounter
          className={`${
            changePasswordDone
              ? ""
              : "bg-transparent border-[2px] border-gray-600 text-gray-600"
          } ${
            (pathname == "/onboarding/change-password") & !changePasswordDone
              ? "border-blue-500 text-blue-500"
              : ""
          }`}
          number={4}
          title="Password"
        />
        <ProgressConnector
          className={`${changePasswordDone ? "" : "bg-gray-400"}`}
        />
        <ProgressCounter
          className={`${
            changePasswordDone
              ? ""
              : "bg-transparent border-[2px] border-gray-600 text-gray-600"
          } ${
            (pathname == "/onboarding/success") & !changePasswordDone
              ? "border-blue-500 text-blue-500"
              : ""
          }`}
          number={5}
          title="Success"
        />
      </div>
    </div>
  );
};

export default ProgressBar;
