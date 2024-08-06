import React, { useEffect, useState } from "react";
import {
  Badge,
  Table,
  TableCaption,
  TableHeader,
  TableHead,
  TableBody,
} from "keep-react";

import TableRowRevisions from "./TableRowRevisions";
import UnavailableDark from "../../../assets/UnavailableDark.png";
import UnavailableLight from "../../../assets/UnavailableLight.png";
import { useStateShareContext } from "../../../Context/StateContext";
import { toast } from "react-toastify";
import instance from "../../../axios/instance";
import { useProgressBarContext } from "../../../Context/ProgressBarContext";
import { useNotificationContext } from "../../../Context/NotificationContext";

const TableRevisions = () => {
  const { darkMode } = useStateShareContext();
  const [loading, setLoading] = useState(false);
  const { revisions, setRevisions } = useProgressBarContext();
  const { setNotificationsCount } = useNotificationContext();

  const fetchRevisions = async () => {
    setLoading(true);
    try {
      const response = await instance.get("/revisions/writer-revisions/");
      setRevisions(response.data);
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
    fetchRevisions();
  }, []);

  return (
    <>
      <Table showCheckbox={false} hoverable={true}>
        <TableCaption>
          <div className="my-5 flex items-center justify-between px-6">
            <div className="flex items-center gap-5">
              <p className="text-body-1 font-semibold text-metal-600 dark:text-white">
                Revisions
              </p>
              <Badge size="sm" color="secondary" className="dark:text-black">
                {revisions.length} revisions
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
          <TableHead className="min-w-[122px]">Reviewer</TableHead>
          <TableHead className="min-w-[150px]">Time reviewed</TableHead>
          <TableHead className="min-w-[200px]">Submit before</TableHead>
          <TableHead className="min-w-[200px]">Status</TableHead>
        </TableHeader>
        <TableBody
          className={`divide-gray-25 divide-y ${loading ? "hidden" : ""} `}
        >
          {revisions &&
            revisions.map((revision, index) => {
              return (
                <TableRowRevisions
                  key={index}
                  id={revision.id}
                  reviewer={revision.reviewer}
                  status={revision.status}
                  timeReviewed={revision.created_at}
                  work={revision.work}
                  submitBefore={revision.submit_before}
                  read={revision.is_read}
                  revisions={revisions}
                  setRevisions={setRevisions}
                />
              );
            })}
        </TableBody>
      </Table>
      <div
        className={`pb-[8rem] ${
          revisions.length !== 0 || loading ? "hidden" : ""
        } `}
      >
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

export default TableRevisions;
