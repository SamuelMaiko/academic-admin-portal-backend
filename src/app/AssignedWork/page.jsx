import React from "react";
import PageHeader from "../../SharedComponents/PageHeader";
import TableAssignedWork from "./components/TableAssignedWork";
import { useStateShareContext } from "../../Context/StateContext";

const AssignedWork = () => {
  const { darkMode } = useStateShareContext();

  return (
    <div
      className={`w-full px-[1rem] md:px-[2rem] ${
        darkMode ? "dark" : ""
      } dark:bg-darkMode-body min-h-screen `}
    >
      <PageHeader
        title="Work you have been assigned"
        subTitle={
          "Browse work you been allocated by the admins. Ordered by the latest."
        }
      />
      <div>
        <TableAssignedWork />
      </div>
    </div>
  );
};

export default AssignedWork;
