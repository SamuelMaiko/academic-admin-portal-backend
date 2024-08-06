import { Badge, Button, TableCell, TableRow, toast } from "keep-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import CountdownToDate from "../../Home/components/CountdownToDate";
import formatDate from "../../Home/components/datetime/formatDate";
import instance from "../../../axios/instance";
import { useProgressBarContext } from "../../../Context/ProgressBarContext";
import { useNotificationContext } from "../../../Context/NotificationContext";

const TableRowSubmissions = ({
  read,
  id,
  work_code,
  words,
  deadline,
  type,
  status,
  isSubmitted,
}) => {
  const navigate = useNavigate();
  const { assignedWork, setAssignedWork } = useProgressBarContext();
  const { setNotificationsCount } = useNotificationContext();
  //

  const handleSubmitWork = (event) => {
    event.stopPropagation();
    if (!isSubmitted) {
      navigate(`/work/${id}/submit`);
    }
  };

  const handleSeeDetails = () => {
    navigate(`/work/${id}`);
    if (!read) {
      markAsRead();
      setNotificationsCount((current) => ({
        ...current,
        assigned_work: current.assigned_work - 1,
      }));
    }
  };

  const markAsRead = async () => {
    try {
      const response = await instance.post(`/work/${id}/read/`);
      const updatedAssignedWork = assignedWork.map((item) =>
        item.id === id ? { ...item, assigned_is_read: true } : item
      );
      setAssignedWork(updatedAssignedWork);
    } catch (error) {
      if (error.response && error.response.status) {
        const status = error.response.status;
        const message = error.response.data;

        switch (status) {
          case 500:
            toast.error(`Internal server error`);
            break;
        }
      } else {
        toast.error("An unexpected error occurred. Please try again later.");
      }
    }
  };

  return (
    <TableRow
      onClick={handleSeeDetails}
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
                  {work_code}
                </p>
              </div>
            </div>
          </div>
        </div>
      </TableCell>
      <TableCell className="whitespace-nowrap">
        <p className="whitespace-nowrap">{formatDate(deadline)}</p>
      </TableCell>

      <TableCell>
        <p className="whitespace-nowrap">John Kimani</p>
      </TableCell>
      <TableCell>
        <p>Admin</p>
      </TableCell>

      <TableCell>
        <div className="flex items-center gap-1">
          <Button
            onClick={handleSubmitWork}
            className={` dark:text-darkMode-cardText
               dark:hover:text-darkMode-cardTextHover py-2 
                 text-white ${
                   isSubmitted
                     ? "bg-gray-400 text-white cursor-not-allowed px-4"
                     : "bg-blue-500 dark:bg-darkMode-cardButton hover:bg-darkMode-cardButtonHover px-7"
                 } transition-colors duration-300`}
          >
            {isSubmitted ? "Claimed by" : "Claim"}
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default TableRowSubmissions;
