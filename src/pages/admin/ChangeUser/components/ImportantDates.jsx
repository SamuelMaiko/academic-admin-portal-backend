import React from "react";
import ImportantDateCard from "./ImportantDateCard";

const ImportantDates = ({ lastLoginDate, dateJoinedDate }) => {
  return (
    <div className="mb-5">
      <h1 className="mt-8 bg-blue-500 text-white py-2 px-1 text-[15px] lg:text-[16px]">
        Important Dates
      </h1>
      {/* important dates */}
      <ImportantDateCard title={"Date joined"} date={dateJoinedDate} />
      <ImportantDateCard title={"Last login"} date={lastLoginDate} />
    </div>
  );
};

export default ImportantDates;
