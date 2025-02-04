import { Badge } from "keep-react";
import React from "react";

const AccountStatus = ({ isActive }) => {
  return (
    <>
      {/* for when inactive */}
      <Badge
        showIcon={true}
        className={`${
          !isActive ? "" : "hidden"
        } bg-[#e0e0e0] dark:bg-[#2c2c2c] text-[#333] dark:text-[#ccc] 
                    hover:bg-[#d0d0d0] dark:hover:bg-[#3c3c3c] transition-colors duration-300 whitespace-nowrap`}
      >
        {isActive ? "" : "Inactive"}
      </Badge>
      {/* barge for when active */}
      <Badge
        showIcon={true}
        className={`${
          isActive ? "" : "hidden"
        } bg-[#ffeb3b] dark:bg-[#fdd835] text-[#333] dark:text-[#000] 
                    hover:bg-[#fdd835] dark:hover:bg-[#e0c020] transition-colors duration-300 whitespace-nowrap`}
      >
        {isActive ? "Active" : ""}
      </Badge>
    </>
  );
};

export default AccountStatus;
