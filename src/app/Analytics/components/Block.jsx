import { Pen } from "phosphor-react";
import React from "react";

const Block = ({ title, value, icon }) => {
  return (
    <div className="w-full h-[7rem] rounded-lg p-3 shadow-[2px_2px_10px_rgba(0,0,0,0.08)] bg-white dark:bg-darkMode-cardBg">
      <div className="flex items-center gap-4">
        <span
          className={`rounded-[6px] size-[1.6rem] grid place-items-center  bg-gray-200 ${
            (title == "Revoked Work") | (title == "Quality Issues")
              ? "text-red-500"
              : title == "Words Written"
              ? "text-green-500"
              : " text-blue-400"
          }`}
        >
          {icon}
        </span>
        <span className="text-xs md:text-sm font-semibold">{title}</span>
      </div>
      <p className="font-opensans font-bold text-xl md:text-2xl mt-4">
        {value}
      </p>
    </div>
  );
};

export default Block;
