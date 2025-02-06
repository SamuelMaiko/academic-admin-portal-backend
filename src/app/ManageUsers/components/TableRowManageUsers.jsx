import { Badge, Button, TableCell, TableRow, toast } from "keep-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import CountdownToDate from "../../Home/components/CountdownToDate";
import formatDate from "../../Home/components/datetime/formatDate";
import instance from "../../../axios/instance";
import { useProgressBarContext } from "../../../Context/ProgressBarContext";
import { useNotificationContext } from "../../../Context/NotificationContext";

const TableRowManageUsers = ({
  id,
  first_name,
  last_name,
  email,
  registration_number,
  is_active,
  profile_picture_absolute,
  role,
}) => {
  const navigate = useNavigate();

  return (
    <TableRow
      onClick={() => navigate(`/manage-users/${id}/change`)}
      className={`bg-white dark:bg-darkMode-cardBg dark:text-white cursor-pointer 
        hover:bg-lightmode-cardBgHover h-[4rem]`}
    >
      <TableCell>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div>
                <p className="-mb-0.5 text-metal-600 dark:text-sidebartext-hover font-bold text-[12px] lg:text-[15px]">
                  {registration_number}
                </p>
              </div>
            </div>
          </div>
        </div>
      </TableCell>

      <TableCell className="text-[12px] lg:text-[15px]">
        <p>{first_name} </p>
      </TableCell>
      <TableCell className="whitespace-nowrap text-[12px] lg:text-[15px]">
        <p className="whitespace-nowrap">{last_name}</p>
      </TableCell>
      <TableCell>
        <p className="lowercase text-[12px] lg:text-[15px]">{email}</p>
      </TableCell>
      <TableCell
        className={`whitespace-nowrap text-[12px] lg:text-[15px] ${
          role == "Admin" ? "text-green-500" : ""
        }`}
      >
        {role}
      </TableCell>
      <TableCell className="lowercase whitespace-nowrap text-[12px] lg:text-[15px]">
        80%
      </TableCell>
      <TableCell>
        <>
          {/* for when inactive */}
          <Badge
            showIcon={true}
            className={`${
              !is_active ? "" : "hidden"
            } bg-[#e0e0e0] dark:bg-[#2c2c2c] text-[#333] dark:text-[#ccc] 
                    hover:bg-[#d0d0d0] dark:hover:bg-[#3c3c3c] transition-colors duration-300 whitespace-nowrap text-[12px] lg:text-[14px]`}
          >
            {is_active ? "" : "Inactive"}
          </Badge>
          {/* barge for when active */}
          <Badge
            showIcon={true}
            className={`${
              is_active ? "" : "hidden"
            } bg-[#ffeb3b] dark:bg-[#fdd835] text-[#333] dark:text-[#000] 
                    hover:bg-[#fdd835] dark:hover:bg-[#e0c020] transition-colors duration-300 whitespace-nowrap text-[12px] lg:text-[14px]`}
          >
            {is_active ? "Active" : ""}
          </Badge>
        </>
      </TableCell>
    </TableRow>
  );
};

export default TableRowManageUsers;
