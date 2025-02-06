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
import Loader from "../../../SharedComponents/Loader";
import TableRowSubmissions from "./TableRowSubmissions";
import getSubmissions from "../api/getSubmissions";

const TableSubmissions = () => {
  const { darkMode } = useStateShareContext();
  const [loading, setLoading] = useState(true);
  const [submittedWork, setSubmittedWork] = useState([]);

  useEffect(() => {
    setLoading(true);
    getSubmissions().then((data) => {
      setSubmittedWork(data);
      // console.log(data);
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
                Submissions
              </p>
              <Badge size="sm" color="secondary" className="dark:text-black">
                {submittedWork.length} submissions
              </Badge>
            </div>
          </div>
        </TableCaption>
        <TableHeader>
          <TableHead className="min-w-[70px]">
            <p className="text-body-5 font-medium text-metal-400 dark:text-sidebartext-hover">
              #work
            </p>
          </TableHead>
          <TableHead className="min-w-[80px] whitespace-nowrap">
            Submitted on
          </TableHead>
          <TableHead className="min-w-[80px] whitespace-nowrap">
            Writer
          </TableHead>
          <TableHead className="min-w-[80px] whitespace-nowrap">
            Claimed by
          </TableHead>

          <TableHead className="min-w-[100px]" />
        </TableHeader>
        <TableBody
          className={`divide-gray-25 divide-y ${loading ? "hidden" : ""}`}
        >
          {/* submissions list */}
          {submittedWork &&
            submittedWork.map((submission, index) => {
              return <TableRowSubmissions key={index} {...submission} />;
            })}
        </TableBody>
      </Table>
      <div
        className={`pb-[8rem] pt-[5rem] ${
          submittedWork.length !== 0 || loading ? "hidden  " : ""
        }`}
      >
        <img
          className="mx-auto w-[16rem]"
          src={darkMode ? UnavailableDark : UnavailableLight}
          alt=""
        />
        <p className="font-bold text-2xl text-center">No submissions yet!</p>
        <p className="font-medium text-sm text-center mt-2">
          Submitted work will appear here once writers upload their work.
        </p>
      </div>
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

export default TableSubmissions;
