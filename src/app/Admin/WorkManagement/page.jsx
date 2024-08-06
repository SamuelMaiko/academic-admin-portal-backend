import React from "react";
import PageHeader from "../../../SharedComponents/PageHeader";
import TableWork from "./components/TableWork";

const WorkManagement = () => {
  return (
    <div className="w-full px-[2rem]">
      <PageHeader
        title={"Work Management"}
        subTitle={
          "Manage the work by creating, editing, deleting and assigning."
        }
      />
      <div>
        <TableWork />
      </div>
    </div>
  );
};

export default WorkManagement;
