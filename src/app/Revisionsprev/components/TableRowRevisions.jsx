import { Table, Badge, TableRow, TableCell } from "keep-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import formatDate from "../../Home/components/datetime/formatDate";
import { useNotificationContext } from "../../../Context/NotificationContext";
import { useProgressBarContext } from "../../../Context/ProgressBarContext";

const TableRowRevisions = ({
  id,
  read,
  work,
  reviewer,
  timeReviewed,
  submitBefore,
  status,
}) => {
  const navigate = useNavigate();
  const { setNotificationsCount } = useNotificationContext();
  const { revisions } = useProgressBarContext();

  const navigateToDetails = () => {
    // if not Read means it will be read soon (by MarkAsRead function in detail page),
    // so I might as well deduct the counter by one now, right?
    if (!read) {
      setNotificationsCount((current) => ({
        ...current,
        revisions: current.revisions - 1,
      }));
    }
    navigate(`/revisions/${id}`);
  };
  return (
    <TableRow
      onClick={navigateToDetails}
      className={`bg-white dark:bg-darkMode-cardBg dark:text-white cursor-pointer ${
        !read
          ? "bg-blue-100 hover:bg-blue-200 dark:bg-blue-700 hover:dark:bg-blue-800"
          : "hover:bg-lightmode-cardBgHover"
      } h-[4rem]`}
    >
      <TableCell>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div>
                <p className="-mb-0.5 text-body-4 font-medium text-metal-600 dark:text-sidebartext-hover">
                  {work.work_code}
                </p>
              </div>
            </div>
          </div>
        </div>
      </TableCell>

      <TableCell>
        <p className="whitespace-nowrap">
          {reviewer?.first_name} {reviewer?.last_name}
        </p>
      </TableCell>
      <TableCell>
        <p className="whitespace-nowrap">{formatDate(timeReviewed)}</p>
      </TableCell>
      <TableCell>
        <p className="whitespace-nowrap">{formatDate(submitBefore)}</p>
      </TableCell>
      <TableCell>
        <>
          <Badge
            showIcon={true}
            className={`${
              status == "Not started" ? "" : "hidden"
            } bg-[#e0e0e0] dark:bg-[#2c2c2c] text-[#333] dark:text-[#ccc] 
                    hover:bg-[#d0d0d0] dark:hover:bg-[#3c3c3c] transition-colors duration-300`}
          >
            {status}
          </Badge>
          <Badge
            showIcon={true}
            className={`${
              status == "In Progress" ? "" : "hidden"
            } bg-[#ffeb3b] dark:bg-[#fdd835] text-[#333] dark:text-[#000] 
                    hover:bg-[#fdd835] dark:hover:bg-[#e0c020] transition-colors duration-300`}
          >
            {status}
          </Badge>
          <Badge
            showIcon={true}
            className={`${
              status == "Completed" ? "" : "hidden"
            } bg-[#4caf50] dark:bg-[#66bb6a] text-[#fff] dark:text-[#fff] 
                    hover:bg-[#388e3c] dark:hover:bg-[#4caf50] transition-colors duration-300`}
          >
            {status}
          </Badge>
        </>
      </TableCell>
    </TableRow>
  );
};

export default TableRowRevisions;
