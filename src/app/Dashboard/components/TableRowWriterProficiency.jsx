import { Table, Badge, TableRow, TableCell } from "keep-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import formatDate from "../../Home/components/datetime/formatDate";
import { useNotificationContext } from "../../../Context/NotificationContext";
import { useProgressBarContext } from "../../../Context/ProgressBarContext";

const TableRowWriterProficiency = ({
  id,
  registration_number,
  full_name,
  assigned_work,
  uptaken_work,
  poor_work,
  average_score,
}) => {
  return (
    <TableRow
      onClick={() => {}}
      // bg-blue-100 hover:bg-blue-200 dark:bg-blue-700 hover:dark:bg-blue-800
      className={` dark:text-white cursor-pointer h-[4rem]`}
    >
      <TableCell>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div>
                <p className="-mb-0.5 text-body-4 text-metal-600 dark:text-sidebartext-hover font-bold text-[15px]">
                  {registration_number}
                </p>
              </div>
            </div>
          </div>
        </div>
      </TableCell>

      <TableCell>
        <p className="whitespace-nowrap text-center">{full_name}</p>
      </TableCell>
      <TableCell>
        <p className="whitespace-nowrap text-center">{assigned_work}</p>
      </TableCell>
      <TableCell>
        <p className="whitespace-nowrap text-center">{uptaken_work}</p>
      </TableCell>
      <TableCell>
        <p className="whitespace-nowrap text-center">{poor_work}</p>
      </TableCell>
      <TableCell>
        <p className="whitespace-nowrap text-center">{average_score}%</p>
      </TableCell>
    </TableRow>
  );
};

export default TableRowWriterProficiency;
