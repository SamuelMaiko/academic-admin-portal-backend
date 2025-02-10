import { Badge, TableCell, TableRow } from "keep-react";
import React from "react";
import { useNavigate } from "react-router-dom";

import { Minus } from "lucide-react";
import formatDate from "../../../../utils/formatDate";
import CountdownToDate from "../../../../SharedComponents/CountdownToDate";

const TableRowManageWork = ({
  id,
  work_code,
  words,
  deadline,
  type,
  status,
  writer,
}) => {
  const navigate = useNavigate();

  return (
    <TableRow
      onClick={() => navigate(`/manage-work/${id}/change`)}
      className={`bg-white dark:bg-darkMode-cardBg dark:text-white cursor-pointer
          h-[4rem]`}
    >
      <TableCell>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div>
                <p className="-mb-0.5 text-metal-600 dark:text-sidebartext-hover font-bold text-[12px] lg:text-[15px]">
                  {work_code}
                </p>
              </div>
            </div>
          </div>
        </div>
      </TableCell>

      <TableCell>
        <p className="whitespace-nowrap text-[12px] lg:text-[15px]">{type}</p>
      </TableCell>
      <TableCell className="whitespace-nowrap text-[12px] lg:text-[15px]">
        <p>
          {writer.id ? (
            writer.full_name
          ) : (
            <Minus className="ml-[30%]" size={18} />
          )}
        </p>
      </TableCell>
      <TableCell>
        <p className="text-[12px] lg:text-[15px]">{words}</p>
      </TableCell>
      <TableCell className="whitespace-nowrap text-[12px] lg:text-[15px] lowercase">
        {formatDate(deadline)}
      </TableCell>
      <TableCell className=" whitespace-nowrap text-[12px] lg:text-[15px] lowercase">
        <CountdownToDate deadline={deadline} />
      </TableCell>
      <TableCell>
        <>
          <Badge
            showIcon={true}
            className={`${
              status == "Not started" ? "" : "hidden"
            } bg-[#e0e0e0] dark:bg-[#2c2c2c] text-[#333] dark:text-[#ccc] 
                    hover:bg-[#d0d0d0] dark:hover:bg-[#3c3c3c] transition-colors duration-300 whitespace-nowrap text-[12px] lg:text-[14px]`}
          >
            {status}
          </Badge>
          <Badge
            showIcon={true}
            className={`${
              status == "In Progress" ? "" : "hidden"
            } bg-[#ffeb3b] dark:bg-[#fdd835] text-[#333] dark:text-[#000] 
                    hover:bg-[#fdd835] dark:hover:bg-[#e0c020] transition-colors duration-300 whitespace-nowrap text-[12px] lg:text-[14px]`}
          >
            {status}
          </Badge>
          <Badge
            showIcon={true}
            className={`${
              status == "Completed" ? "" : "hidden"
            } bg-[#4caf50] dark:bg-[#66bb6a] text-[#fff] dark:text-[#fff] 
                    hover:bg-[#388e3c] dark:hover:bg-[#4caf50] transition-colors duration-300 whitespace-nowrap text-[12px] lg:text-[14px]`}
          >
            {status}
          </Badge>
        </>
      </TableCell>
    </TableRow>
  );
};

export default TableRowManageWork;
