import React from "react";
import trophy from "../../../assets/golden-trophy-removebg-preview.png";

const OverallWritersScore = () => {
  return (
    <div
      className="bg-white dark:bg-darkMode-cardBg dark:text-white h-full p-8 w-full
         rounded-3xl shadow-[2px_2px_10px_rgba(0,0,0,0.17)] flex gap-5 md:h-[18.6rem]"
    >
      <div className="w-[20%]">
        <p className="font-bold text-xl">Overall Writers Score</p>
        <p className="font-bold text-4xl">68%</p>
      </div>
      <div className="w-[12rem] h-auto">
        <img src={trophy} alt="trophy" className="w-full h-full " />
      </div>
      <div className="w-[20%]">
        <p className="font-bold text-xl">Work Assigned</p>
        <p className="font-bold text-4xl">9</p>
      </div>
    </div>
  );
};

export default OverallWritersScore;
