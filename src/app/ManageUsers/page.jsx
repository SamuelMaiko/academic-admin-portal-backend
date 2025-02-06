import React from "react";
import PageHeader from "../../SharedComponents/PageHeader";
import { useStateShareContext } from "../../Context/StateContext";
import TableManageUsers from "./components/TableManageUsers";

const ManageUsers = () => {
  const { darkMode } = useStateShareContext();

  return (
    <div
      className={`w-full px-[1rem] md:px-[2rem] ${
        darkMode ? "dark" : ""
      } dark:bg-darkMode-body min-h-screen `}
    >
      <PageHeader
        title="Manage Users"
        subTitle={"Create, edit, delete, or deactivate users. "}
      />
      <div className="relative">
        <TableManageUsers />
      </div>
    </div>
  );
};

export default ManageUsers;
