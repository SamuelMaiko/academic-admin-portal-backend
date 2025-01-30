import React from "react";
import PageHeader from "../../SharedComponents/PageHeader";
import { useStateShareContext } from "../../Context/StateContext";
import TableManageWork from "./components/TableManageWork";

const ManageWork = () => {
  const { darkMode } = useStateShareContext();

  return (
    <div
      className={`w-full px-[1rem] md:px-[2rem] ${
        darkMode ? "dark" : ""
      } dark:bg-darkMode-body min-h-screen `}
    >
      <PageHeader
        title="Manage Work"
        subTitle={
          "Create, assign, edit, or delete work. Manage all tasks effectively from here."
        }
      />{" "}
      <div>
        <TableManageWork />
      </div>
    </div>
  );
};

export default ManageWork;
