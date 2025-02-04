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

import TableRowRevisions from "./TableRowRevisions";
import UnavailableDark from "../../../assets/UnavailableDark.png";
import UnavailableLight from "../../../assets/UnavailableLight.png";
import { useStateShareContext } from "../../../Context/StateContext";
import { useProgressBarContext } from "../../../Context/ProgressBarContext";
import { useNavigate } from "react-router-dom";
import Loader from "../../../SharedComponents/Loader";
import getRevisions from "../api/getRevisions";

const TableRevisions = () => {
  const { darkMode } = useStateShareContext();
  const [loading, setLoading] = useState(false);
  const { revisions, setRevisions } = useProgressBarContext();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    getRevisions().then((data) => {
      setRevisions(data);
      setLoading(false);
      // console.log(data);
    });
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
            <Button
              onClick={() => navigate("/revisions/create")}
              className={` dark:text-darkMode-cardText dark:hover:text-darkMode-cardTextHover py-2
                 text-blue-500 border-[1px] bg-transparent  border-blue-500 dark:border-darkMode-cardButton
                  hover:bg-darkMode-cardButtonHover hover:text-white
                  px-7 transition-colors duration-300`}
            >
              Create revision
            </Button>
          </div>
        </TableCaption>
        <TableHeader>
          <TableHead className="min-w-[100px]">
            <p className="text-body-5 font-medium text-metal-400 dark:text-sidebartext-hover">
              #work
            </p>
          </TableHead>
          <TableHead className="min-w-[122px]">Writer</TableHead>
          <TableHead className="min-w-[200px]">Submit before</TableHead>
          <TableHead className="min-w-[150px]">Timer</TableHead>
          <TableHead className="min-w-[200px]">Status</TableHead>
          <TableHead className="min-w-[100px]" />
        </TableHeader>
        <TableBody
          className={`divide-gray-25 divide-y ${loading ? "hidden" : ""} `}
        >
          {revisions &&
            revisions.map((revision, index) => {
              return <TableRowRevisions key={index} {...revision} />;
            })}
        </TableBody>
      </Table>
      <div
        className={`pb-[8rem] pt-[6rem] ${
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
          The revisions you make for work will appear here.
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

export default TableRevisions;
