import React, { useEffect, useState } from "react";
import {
  Table,
  Badge,
  TableBody,
  TableHead,
  TableHeader,
  TableCaption,
} from "keep-react";
import TableRowUptakenWork from "./TableRowUptakenWork";
import UnavailableDark from "../../../assets/UnavailableDark.png";
import UnavailableLight from "../../../assets/UnavailableLight.png";
import { useStateShareContext } from "../../../Context/StateContext";
import { toast } from "react-toastify";
import instance from "../../../axios/instance";
import { useProgressBarContext } from "../../../Context/ProgressBarContext";
import Loader from "../../../SharedComponents/Loader";

const TableUptakenWork = () => {
  const { darkMode } = useStateShareContext();

  const [loading, setLoading] = useState(false);
  const { uptakenWork, setUptakenWork } = useProgressBarContext();

  const fetchUptakenWork = async () => {
    setLoading(true);
    try {
      const response = await instance.get("/work/uptaken/");
      setUptakenWork(response.data);
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
    fetchUptakenWork();
  }, []);
  return (
    <>
      <Table showCheckbox={false} hoverable={true}>
        <TableCaption>
          <div className="my-5 flex items-center justify-between px-6">
            <div className="flex items-center gap-5">
              <p className="text-body-1 font-semibold text-metal-600 dark:text-white">
                Uptaken work
              </p>
              <Badge size="sm" color="secondary" className="dark:text-black">
                {uptakenWork.length} items
              </Badge>
            </div>
          </div>
        </TableCaption>
        <TableHeader>
          <TableHead className="min-w-[100px]">
            <p className="text-body-5 font-medium text-metal-400 dark:text-sidebartext-hover">
              #
            </p>
          </TableHead>
          <TableHead className="min-w-[122px]">Type</TableHead>
          <TableHead className="min-w-[82px]">Words</TableHead>
          <TableHead className="min-w-[200px]">Deadline</TableHead>
          <TableHead className="min-w-[140px]">Timer</TableHead>
          <TableHead className="min-w-[150px]">Status</TableHead>
          <TableHead className="min-w-[100px]" />
        </TableHeader>
        <TableBody
          className={`divide-gray-25 divide-y ${loading ? "hidden" : ""}`}
        >
          {uptakenWork &&
            uptakenWork.map((work, index) => {
              return (
                <TableRowUptakenWork
                  key={index}
                  id={work.id}
                  work_code={work.work_code}
                  type={work.type}
                  words={work.words}
                  deadline={work.deadline}
                  status={work.status}
                  read={work.uptaken_is_read}
                  isSubmitted={work.is_submitted}
                />
              );
            })}
        </TableBody>
      </Table>
      <Loader loading={loading} />
      <div
        className={`pb-[8rem] ${
          uptakenWork.length !== 0 || loading ? "hidden" : ""
        } `}
      >
        <img
          className="mx-auto w-[16rem]"
          src={darkMode ? UnavailableDark : UnavailableLight}
          alt=""
        />
        <p className="font-bold text-2xl text-center">No uptaken work yet!</p>
        <p className="font-medium text-sm text-center mt-2">
          Any uptaken work will appear here.
        </p>
      </div>
    </>
  );
};

export default TableUptakenWork;
