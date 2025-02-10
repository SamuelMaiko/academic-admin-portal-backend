import React, { useEffect } from "react";
import PageHeader from "../../../SharedComponents/PageHeader";
import { useStateShareContext } from "../../../Context/StateContext";
import TableManageWork from "./components/TableManageWork";
import { useAdminContext } from "../../../Context/AdminContext";

const ManageWork = () => {
  const { darkMode } = useStateShareContext();
  const { setShowNavBar } = useAdminContext();

  useEffect(() => {
    setShowNavBar(true);
  }, []);

  return (
    <div
      className={`w-full px-[1rem] md:px-[2rem] pb-[2rem] ${
        darkMode ? "dark" : ""
      } dark:bg-darkMode-body min-h-screen bg-gray-100`}
    >
      <PageHeader
        title="Manage Work"
        subTitle={"Create, assign, edit, or delete work."}
      />{" "}
      <div className="relative mt-4">
        <TableManageWork />
      </div>
    </div>
  );
};

export default ManageWork;
