import React from "react";
import { useNavigate } from "react-router-dom";
import Rocket from "../../../assets/Rocket.png";

const ResetSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full md:w-[27%] p-6 rounded-lg md:shadow-[0_2px_12px_rgba(0,0,0,0.2)]">
      <h1 className="text-[23px] font-semibold mb-2">
        Your password has been changed
      </h1>
      <div className="size-[6rem] my-3 mx-auto">
        <img className="w-full h-full" src={Rocket} alt="" />
      </div>

      <button
        onClick={() => navigate("/login")}
        className="transition-colors duration-300 hover:bg-blue-600 mt-7
         bg-blue-500 text-white py-3 px-3 rounded-3xl w-full font-medium "
      >
        Go to Login
      </button>
    </div>
  );
};

export default ResetSuccess;
