import React from "react";
import formatDate from "../../Home/components/datetime/formatDate";

const ImportantDateCard = ({ title, date }) => {
  return (
    <div className="mt-6">
      <h1 className="text-lg text-black dark:text-white font-medium">
        {title}
      </h1>
      <p className="text-[15px] font-medium text-gray-500 dark:text-gray-400 mt-1">
        {date ? formatDate(date) : "Not available"}
      </p>
    </div>
  );
};

export default ImportantDateCard;
