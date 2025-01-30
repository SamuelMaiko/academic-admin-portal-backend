import { ArrowRight } from "lucide-react";
import { Pen } from "phosphor-react";
import React from "react";

const Block = ({ title, value, icon }) => {
  return (
    <div
      className={`w-full flex flex-col gap-4 h-[9.3rem] rounded-xl p-4 
    shadow-[2px_2px_10px_rgba(0,0,0,0.08)] bg-white dark:bg-darkMode-cardBg
    border-[2.3px] transition-colors duration-300
      ${
        title == "Words written"
          ? "border-transparent hover:border-blue-400 hover:text-blue-400"
          : title == "Work completed"
          ? "border-transparent hover:border-green-500 hover:text-green-500"
          : title == "Revoked work"
          ? " border-transparent hover:border-red-500 hover:text-red-500"
          : title == "Writers employed"
          ? "border-transparent hover:border-blue-700 hover:text-blue-700"
          : ""
      }
    `}
    >
      <div className="flex items-center gap-4">
        <span
          className={`rounded-[8px] size-[2.6rem] grid place-items-center bg-gray-200 ${
            title == "Words written"
              ? "text-blue-400"
              : title == "Work completed"
              ? "text-green-500"
              : title == "Revoked work"
              ? "text-red-500 "
              : title == "Writers employed"
              ? "text-blue-700"
              : ""
          }`}
        >
          {icon}
        </span>
        <div className="flex flex-col">
          <span className="font-opensans font-bold text-xl md:text-2xl text-black">
            {value}
          </span>
          <span className="text-xs md:text-sm font-semibold text-neutral-500">
            {title}
          </span>
        </div>
      </div>
      <div className="h-[55%] w-full ">
        <div className=" h-full w-full border-t-[1px] border-dotted border-black flex justify-between items-center">
          <span className="font-semibold">View details</span>
          <ArrowRight size={18} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Block;
