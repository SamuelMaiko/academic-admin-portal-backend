import React, { useEffect } from "react";
import PageHeader from "../../../SharedComponents/PageHeader";
import TableAssignedWork from "./components/TableAssignedWork";
import { useStateShareContext } from "../../../Context/StateContext";
import { useAdminContext } from "../../../Context/AdminContext";

const AssignedWork = () => {
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
        title="Assigned work"
        subTitle={"Browse work you been allocated by the admins."}
      />
      <div>
        <TableAssignedWork />
      </div>
    </div>
  );
};

export default AssignedWork;
