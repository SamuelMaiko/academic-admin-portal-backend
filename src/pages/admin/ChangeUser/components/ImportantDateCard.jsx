import React from "react";
import formatDate from "../../../../utils/formatDate";

const ImportantDateCard = ({ title, date }) => {
  return (
    <div className="mt-6">
      <h1 className="text-[14px] lg:text-[15px] text-black dark:text-white font-medium">
        {title}
      </h1>
      <p className="text-[13px] lg:text-[14px] font-medium text-gray-500 dark:text-gray-400 mt-1">
        {date ? formatDate(date) : "Not available"}
      </p>
    </div>
  );
};

export default ImportantDateCard;
