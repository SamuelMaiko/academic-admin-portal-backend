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
import TableRowManageWork from "./TableRowManageWork";
import { useNavigate } from "react-router-dom";
import getWork from "../api/getWork";

const TableManageWork = () => {
  const { darkMode } = useStateShareContext();
  const [loading, setLoading] = useState(false);
  const [work, setWork] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    getWork().then((data) => {
      setWork(data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Table showCheckbox={false} hoverable="true" className="">
        <TableCaption>
          <div className="my-5 flex items-center justify-between px-6">
            <div className="flex items-center gap-5">
              <p className="text-body-1 font-semibold text-metal-600 dark:text-white">
                Work
              </p>
              <Badge size="sm" color="secondary" className="dark:text-black">
                {work.length} items
              </Badge>
            </div>
            <Button
              onClick={() => navigate("/manage-work/create")}
              className={` dark:text-darkMode-cardText dark:hover:text-darkMode-cardTextHover py-2
                 text-blue-500 border-[1px] bg-transparent  border-blue-500 dark:border-darkMode-cardButton
                  hover:bg-darkMode-cardButtonHover hover:text-white
                  px-7 transition-colors duration-300`}
            >
              Create work
            </Button>
          </div>
        </TableCaption>
        <TableHeader>
          <TableHead className="min-w-[70px]">
            <p className="text-body-5 font-medium text-metal-400 dark:text-sidebartext-hover">
              #
            </p>
          </TableHead>
          <TableHead className="min-w-[80px]">Type</TableHead>
          <TableHead className="min-w-[80px]">Writer</TableHead>
          <TableHead className="min-w-[80px]">Words</TableHead>
          <TableHead className="min-w-[140px]">Deadline</TableHead>
          <TableHead className="min-w-[100px]">Timer</TableHead>
          <TableHead className="min-w-[100px]">Status</TableHead>
          {/* <TableHead className="min-w-[100px]" /> */}
        </TableHeader>
        <TableBody
          className={`divide-gray-25 divide-y ${loading ? "hidden" : ""}`}
        >
          {work &&
            work.map((work, index) => {
              return (
                <TableRowManageWork
                  key={index}
                  id={work.id}
                  work_code={work.work_code}
                  type={work.type}
                  words={work.words}
                  deadline={work.deadline}
                  status={work.status}
                  read={work.assigned_is_read}
                  writer={work.writer}
                  isSubmitted={work.is_submitted}
                />
              );
            })}
        </TableBody>
      </Table>
      {/* <div className="">
        
      </div> */}
      <div
        className={`pb-[8rem] pt-[6rem] ${
          // work.length !== 0 || loading ? "  " : "hidden"
          work.length !== 0 || loading ? "hidden  " : ""
        }`}
      >
        <img
          className="mx-auto w-[16rem]"
          src={darkMode ? UnavailableDark : UnavailableLight}
          alt=""
        />
        <p className="font-bold text-2xl text-center">No Work!</p>
        <p className="font-medium text-sm text-center mt-2">
          Any work in the platform will appear here.
        </p>
      </div>
      {/* page loader */}
      <div
        className={`absolute bg-[rgba(255,255,255,0.5)] inset-0 h-[80vh] bottom-0 flex flex-col items-center justify-center
        ${loading ? "" : "hidden"}
        `}
      >
        <Loader loading={loading} />
        <h1 className="font-semibold">Loading ...</h1>
      </div>
    </>
  );
};

export default TableManageWork;
