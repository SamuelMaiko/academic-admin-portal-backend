import React from "react";
import PageHeader from "../../../SharedComponents/PageHeader";
import TableUsers from "./components/TableUsers";

const UserManagement = () => {
  return (
    <div className="w-full px-[2rem]">
      <PageHeader
        title={"User Management"}
        subTitle={
          "Manage the users in the system by creating, editing, deactivating and deleting users."
        }
      />
      <div>
        <TableUsers />
      </div>
    </div>
  );
};

export default UserManagement;
