import { CaretDown } from "phosphor-react";
import React, { useState } from "react";

const dropdownOptions = [
  { name: "I wk ago", onClick: () => {} },
  { name: "2 wks ago", onClick: () => {} },
  { name: "3 wks ago", onClick: () => {} },
  { name: "4 wks ago", onClick: () => {} },
];

const WorkCompletedGraph = () => {
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <div
      className="h-[14rem] md:h-[18.6rem] p-5 w-full rounded-lg shadow-[2px_2px_10px_rgba(0,0,0,0.17)]
         bg-white dark:bg-darkMode-cardBg relative"
    >
      {/* "this week" */}
      <div
        onClick={() => setShowDropDown((current) => !current)}
        onMouseLeave={() => setShowDropDown(false)}
        onMouseEnter={() => setShowDropDown(true)}
        className="flex px-3 py-1 bg-gray-100 hover:bg-gray-200 w-fit rounded-lg
           cursor-pointer transition-colors duration-300 items-center gap-2 font-semibold text-gray-500
           absolute right-4 top-4
           "
      >
        <span className="text-sm">This week</span>
        <CaretDown
          size={18}
          weight="bold"
          className={`${
            showDropDown ? "rotate-180 " : ""
          } text-sm text-gray-500 transition-transform duration-300`}
        />
        {/* dropdown */}
        <div
          className={`absolute top-[85%]  w-[100%] left-1/2 -translate-x-1/2 h-[7rem]
                 rounded-b-xl overflow-hidden ${showDropDown ? "" : "hidden"}`}
        >
          {dropdownOptions &&
            dropdownOptions.map((option, index) => (
              <div
                key={index}
                onClick={option.onClick}
                className="text-sm w-full text-left pl-6 bg-gray-100 hover:bg-gray-200 py-1 transition-colors duration-300"
              >
                {option.name}
              </div>
            ))}
        </div>
      </div>
      {/* works completed */}
      <div className="w-fit absolute top-4 left-4 ">
        <p className="text-3xl font-bold">40</p>
        <p className="text-sm text-gray-400 font-semibold">Work completed</p>
      </div>
    </div>
  );
};

export default WorkCompletedGraph;
