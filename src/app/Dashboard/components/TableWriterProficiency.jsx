import React, { useEffect, useState } from "react";
import {
  Badge,
  Table,
  TableCaption,
  TableHeader,
  TableHead,
  TableBody,
  Button,
} from "keep-react";

import UnavailableDark from "../../../assets/UnavailableDark.png";
import UnavailableLight from "../../../assets/UnavailableLight.png";
import { useStateShareContext } from "../../../Context/StateContext";
import { useProgressBarContext } from "../../../Context/ProgressBarContext";
import { useNotificationContext } from "../../../Context/NotificationContext";
import { useNavigate } from "react-router-dom";
import TableRowWriterProficiency from "./TableRowWriterProficiency";
import getUsersPerformance from "../api/getUsersPerformance";
import Loader from "../../../SharedComponents/Loader";

const TableWriterProficiency = ({ loading, setLoading }) => {
  const { darkMode } = useStateShareContext();
  // const [loading, setLoading] = useState(true);
  const [writersProficiency, setWritersProficiency] = useState([]);

  useEffect(() => {
    setLoading(true);
    getUsersPerformance().then((data) => {
      // console.log(data);
      setWritersProficiency(data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Table showCheckbox={false} hoverable={true}>
        {/* <TableCaption>
          <div className="my-5 flex items-center justify-between px-6"></div>
        </TableCaption> */}
        <TableHeader className="">
          <TableHead className="min-w-[100px]">
            <p className="text-body-5 font-medium text-metal-400 dark:text-sidebartext-hover text-center">
              #Reg. no
            </p>
          </TableHead>
          <TableHead className="min-w-[122px] text-center text-[13px] lg:text-[15px]">
            Full name
          </TableHead>
          <TableHead className="min-w-[200px] text-center text-[13px] lg:text-[15px]">
            Assigned work
          </TableHead>
          <TableHead className="min-w-[150px] text-center text-[13px] lg:text-[15px]">
            Uptaken work
          </TableHead>
          <TableHead className="min-w-[200px] text-center text-[13px] lg:text-[15px]">
            Poor work
          </TableHead>
          <TableHead className="min-w-[200px] text-center text-[13px] lg:text-[15px]">
            Average score
          </TableHead>
          {/* <TableHead className="min-w-[100px]" /> */}
        </TableHeader>
        <TableBody
          className={`divide-gray-25 divide-y ${loading ? "hidden" : ""} `}
        >
          {writersProficiency &&
            writersProficiency.map((writersProficiency, index) => (
              <TableRowWriterProficiency key={index} {...writersProficiency} />
            ))}
        </TableBody>
      </Table>
      <div className={`pb-[8rem] hidden`}>
        <img
          className="mx-auto w-[16rem]"
          src={darkMode ? UnavailableDark : UnavailableLight}
          alt=""
        />
        <p className="font-bold text-2xl text-center">No revisions yet!</p>
        <p className="font-medium text-sm text-center mt-2">
          Any revisions for your work will appear here.
        </p>
      </div>
    </>
  );
};

export default TableWriterProficiency;
