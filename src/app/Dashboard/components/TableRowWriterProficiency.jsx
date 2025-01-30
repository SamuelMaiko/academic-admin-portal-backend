import { Table, Badge, TableRow, TableCell } from "keep-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import formatDate from "../../Home/components/datetime/formatDate";
import { useNotificationContext } from "../../../Context/NotificationContext";
import { useProgressBarContext } from "../../../Context/ProgressBarContext";

const TableRowWriterProficiency = ({}) => {
  return (
    <TableRow
      onClick={() => {}}
      className={` dark:text-white cursor-pointer 
      bg-blue-100 hover:bg-blue-200 dark:bg-blue-700 hover:dark:bg-blue-800 h-[4rem]`}
    >
      <TableCell>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div>
                <p className="-mb-0.5 text-body-4 font-medium text-metal-600 dark:text-sidebartext-hover text-center">
                  TW6544
                </p>
              </div>
            </div>
          </div>
        </div>
      </TableCell>

      <TableCell>
        <p className="whitespace-nowrap text-center">Samuel Maiko</p>
      </TableCell>
      <TableCell>
        <p className="whitespace-nowrap text-center">38</p>
      </TableCell>
      <TableCell>
        <p className="whitespace-nowrap text-center">10</p>
      </TableCell>
      <TableCell>
        <p className="whitespace-nowrap text-center">1</p>
      </TableCell>
      <TableCell>
        <p className="whitespace-nowrap text-center">98%</p>
      </TableCell>
    </TableRow>
  );
};

export default TableRowWriterProficiency;
