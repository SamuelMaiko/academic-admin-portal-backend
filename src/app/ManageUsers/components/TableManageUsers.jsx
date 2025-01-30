import React, { useEffect, useState } from "react";
import {
  Badge,
  Table,
  TableBody,
  TableCaption,
  TableHeader,
  TableHead,
  Button,
  // TableHeadCell,
} from "keep-react";
import UnavailableDark from "../../../assets/UnavailableDark.png";
import UnavailableLight from "../../../assets/UnavailableLight.png";
import { useStateShareContext } from "../../../Context/StateContext";
import { toast } from "react-toastify";
import instance from "../../../axios/instance";
import { useProgressBarContext } from "../../../Context/ProgressBarContext";
import Loader from "../../../SharedComponents/Loader";
import TableRowManageUsers from "./TableRowManageUsers";
import { useNavigate } from "react-router-dom";

const TableManageUsers = () => {
  const { darkMode } = useStateShareContext();
  const [loading, setLoading] = useState(false);
  const { assignedWork, setAssignedWork } = useProgressBarContext();
  const navigate = useNavigate();

  const fetchAssignedWork = async () => {
    setLoading(true);
    try {
      const response = await instance.get("/work/assigned/");
      setAssignedWork(response.data);
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
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // fetchAssignedWork();
  }, []);
  return (
    <>
      <Table showCheckbox={false} hoverable="true" className="">
        <TableCaption>
          <div className="my-5 flex items-center justify-between px-6">
            <div className="flex items-center gap-5">
              <p className="text-body-1 font-semibold text-metal-600 dark:text-white">
                Users
              </p>
              <Badge size="sm" color="secondary" className="dark:text-black">
                {assignedWork.length} items
              </Badge>
            </div>
            <Button
              onClick={() => navigate("/manage-users/create")}
              className={` dark:text-darkMode-cardText dark:hover:text-darkMode-cardTextHover py-2
                 text-blue-500 border-[1px] bg-transparent  border-blue-500 dark:border-darkMode-cardButton
                  hover:bg-darkMode-cardButtonHover hover:text-white
                  px-7 transition-colors duration-300`}
            >
              Create user
            </Button>
          </div>
        </TableCaption>
        <TableHeader>
          <TableHead className="min-w-[70px]">
            <p className="text-body-5 font-medium text-metal-400 dark:text-sidebartext-hover">
              #Reg no.
            </p>
          </TableHead>
          <TableHead className="min-w-[80px] whitespace-nowrap">
            First name
          </TableHead>
          <TableHead className="min-w-[80px] whitespace-nowrap">
            Last name
          </TableHead>
          <TableHead className="min-w-[80px]">Email</TableHead>
          <TableHead className="min-w-[100px]">Role</TableHead>
          <TableHead className="min-w-[100px]">Rating</TableHead>
          <TableHead className="min-w-[140px]">Status</TableHead>
          {/* <TableHead className="min-w-[100px]" /> */}
        </TableHeader>
        <TableBody
          className={`divide-gray-25 divide-y ${loading ? "hidden" : ""}`}
        >
          {/* {assignedWork &&
            assignedWork.map((work, index) => {
              return (
                <TableRowAssignedWork
                  key={index}
                  id={work.id}
                  work_code={work.work_code}
                  type={work.type}
                  words={work.words}
                  deadline={work.deadline}
                  status={work.status}
                  read={work.assigned_is_read}
                  isSubmitted={work.is_submitted}
                />
              );
            })} */}
          <TableRowManageUsers
            id={2}
            work_code="WKghgeu"
            type="Essay"
            words={2800}
            deadline="2024-08-05T14:30:00Z"
            status="In Progress"
            read={false}
            isSubmitted={false}
          />
          <TableRowManageUsers
            id={2}
            work_code="WKghgeu"
            type="Essay"
            words={2800}
            deadline="2024-08-08T14:30:00Z"
            status="In Progress"
            read={false}
            isSubmitted={false}
          />
          <TableRowManageUsers
            id={2}
            work_code="WKghgeu"
            type="Essay"
            words={2800}
            deadline="2024-08-20T14:30:00Z"
            status="In Progress"
            read={false}
            isSubmitted={false}
          />
        </TableBody>
      </Table>
      <Loader loading={loading} />
      <div
        className={`pb-[8rem] ${
          assignedWork.length !== 0 || loading ? "hidden  " : ""
        }`}
      >
        <img
          className="mx-auto w-[16rem]"
          src={darkMode ? UnavailableDark : UnavailableLight}
          alt=""
        />
        <p className="font-bold text-2xl text-center">No assigned work yet!</p>
        <p className="font-medium text-sm text-center mt-2">
          Any assigned work will appear here.
        </p>
      </div>
    </>
  );
};

export default TableManageUsers;
