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
import getAccounts from "../api/getAccounts";

const TableManageUsers = () => {
  const { darkMode } = useStateShareContext();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    setLoading(true);
    getAccounts().then((data) => {
      setAccounts(data);
      setLoading(false);
    });
  }, []);
  return (
    <>
      <Table showCheckbox={false} hoverable="true" className="">
        <TableCaption>
          <div className="my-5 flex items-center justify-between px-6">
            <div className="flex items-center gap-5">
              <p className="text-[16px] lg:text-xl font-semibold text-metal-600 dark:text-white">
                Users
              </p>
              <Badge
                size="sm"
                color="secondary"
                className="dark:text-black text-[12px] md:text-sm"
              >
                {accounts.length} accounts
              </Badge>
            </div>
            <Button
              onClick={() => navigate("/manage-users/create")}
              className={` dark:text-darkMode-cardText dark:hover:text-darkMode-cardTextHover py-2
                 text-blue-500 border-[1px] bg-transparent  border-blue-500 dark:border-darkMode-cardButton
                  hover:bg-darkMode-cardButtonHover hover:text-white
                  px-7 transition-colors duration-300 text-[12px] lg:text-[15px]`}
            >
              Create user
            </Button>
          </div>
        </TableCaption>
        <TableHeader>
          <TableHead className="min-w-[70px]">
            <p className="text-[13px] lg:text-[15px] font-medium text-metal-400 dark:text-sidebartext-hover whitespace-nowrap">
              #Reg no.
            </p>
          </TableHead>
          <TableHead className="min-w-[80px] whitespace-nowrap text-[13px] lg:text-[15px]">
            First name
          </TableHead>
          <TableHead className="min-w-[80px] whitespace-nowrap text-[13px] lg:text-[15px]">
            Last name
          </TableHead>
          <TableHead className="min-w-[80px] text-[13px] lg:text-[15px]">
            Email
          </TableHead>
          <TableHead className="min-w-[100px] text-[13px] lg:text-[15px]">
            Role
          </TableHead>
          <TableHead className="min-w-[100px] text-[13px] lg:text-[15px]">
            Rating
          </TableHead>
          <TableHead className="min-w-[140px] text-[13px] lg:text-[15px]">
            Status
          </TableHead>
          {/* <TableHead className="min-w-[100px]" /> */}
        </TableHeader>
        <TableBody
          className={`divide-gray-25 divide-y ${loading ? "hidden" : ""}`}
        >
          {accounts &&
            accounts.map((account, index) => (
              <TableRowManageUsers key={index} {...account} />
            ))}
        </TableBody>
      </Table>
      <div
        className={`pb-[8rem] pt-[7rem] ${
          accounts.length !== 0 || loading ? "hidden  " : ""
        }`}
      >
        <img
          className="mx-auto w-[16rem]"
          src={darkMode ? UnavailableDark : UnavailableLight}
          alt=""
        />
        <p className="font-bold text-2xl text-center">No user accounts!</p>
        <p className="font-medium text-sm text-center mt-2">
          Any accounts in the system appear here.
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

export default TableManageUsers;
