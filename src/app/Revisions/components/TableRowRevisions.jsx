import { Table, Badge, TableRow, TableCell, Button } from "keep-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import formatDate from "../../Home/components/datetime/formatDate";
import { useNotificationContext } from "../../../Context/NotificationContext";
import { useProgressBarContext } from "../../../Context/ProgressBarContext";
import CountdownToDate from "../../Home/components/CountdownToDate";
import { Minus } from "lucide-react";

const TableRowRevisions = ({
  id,
  status,
  writer,
  submit_before,
  work,
  is_read,
}) => {
  const navigate = useNavigate();

  return (
    <TableRow
      // bg-white dark:bg-darkMode-cardBg dark:text-white
      onClick={() => navigate(`/revisions/${id}`)}
      className={`
        ${
          !is_read
            ? "bg-blue-100 hover:bg-blue-200 dark:bg-blue-700 hover:dark:bg-blue-800"
            : "hover:bg-lightmode-cardBgHover"
        }
        cursor-pointer h-[4rem]`}
    >
      <TableCell>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div>
                <p className="-mb-0.5 text-[12px] lg:text-[15px] text-metal-600 dark:text-sidebartext-hover font-bold ">
                  {work.work_code}
                </p>
              </div>
            </div>
          </div>
        </div>
      </TableCell>

      <TableCell>
        <p className="whitespace-nowrap text-[12px] lg:text-[15px]">
          {writer.id ? (
            `${writer.first_name} ${writer.last_name}`
          ) : (
            <Minus className="ml-[30%]" size={18} />
          )}
        </p>
      </TableCell>
      <TableCell>
        <p className="whitespace-nowrap lowercase text-[12px] lg:text-[15px] ">
          {formatDate(submit_before)}
        </p>
      </TableCell>
      <TableCell>
        <p className="whitespace-nowrap lowercase text-[12px] lg:text-[15px]">
          <CountdownToDate deadline={submit_before} />
        </p>
      </TableCell>
      <TableCell>
        <>
          <Badge
            showIcon={true}
            className={`${
              status == "Not started" ? "" : "hidden"
            } bg-[#e0e0e0] dark:bg-[#2c2c2c] text-[#333] dark:text-[#ccc] 
                    hover:bg-[#d0d0d0] dark:hover:bg-[#3c3c3c] transition-colors duration-300 text-[12px] lg:text-[14px]`}
          >
            {/* {status} */}
            {status}
          </Badge>
          <Badge
            showIcon={true}
            className={`${
              status == "In Progress" ? "" : "hidden"
            } bg-[#ffeb3b] dark:bg-[#fdd835] text-[#333] dark:text-[#000] 
                    hover:bg-[#fdd835] dark:hover:bg-[#e0c020] transition-colors duration-300 text-[12px] lg:text-[14px]`}
          >
            {status}
          </Badge>
          <Badge
            showIcon={true}
            className={`${
              status == "Completed" ? "" : "hidden"
            } bg-[#4caf50] dark:bg-[#66bb6a] text-[#fff] dark:text-[#fff] 
                    hover:bg-[#388e3c] dark:hover:bg-[#4caf50] transition-colors duration-300 text-[12px] lg:text-[14px]`}
          >
            {status}
          </Badge>
        </>
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-1">
          <Button
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/revisions/${id}/change`);
            }}
            className={` dark:text-darkMode-cardText
               dark:hover:text-darkMode-cardTextHover py-2 bg-blue-500
                dark:bg-darkMode-cardButton hover:bg-blue-400 px-7
                 text-white  transition-colors duration-300 text-[12px] lg:text-[15px]`}
          >
            Edit
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default TableRowRevisions;
