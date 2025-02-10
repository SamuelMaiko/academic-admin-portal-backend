import React, { useEffect } from "react";
import PageHeader from "../../../SharedComponents/PageHeader";
import { useStateShareContext } from "../../../Context/StateContext";
import TableManageUsers from "./components/TableManageUsers";
import { useAdminContext } from "../../../Context/AdminContext";

const ManageUsers = () => {
  const { darkMode } = useStateShareContext();
  const { setShowNavBar } = useAdminContext();

  useEffect(() => {
    setShowNavBar(true);
  }, []);

  return (
    <div
      className={`w-full px-[1rem] md:px-[2rem] ${
        darkMode ? "dark" : ""
      } dark:bg-darkMode-body min-h-screen bg-gray-100 `}
    >
      <PageHeader
        title="Manage Users"
        subTitle={"Create, edit, delete, or deactivate users. "}
      />
      <div className="relative mt-4">
        <TableManageUsers />
      </div>
    </div>
  );
};

export default ManageUsers;
