import React from "react";
import { useAdminContext } from "../../../Context/AdminContext";
import ConfirmUserDelete from "./ConfirmUserDelete";

const DeleteUserModal = () => {
  const { showDeleteUserModal } = useAdminContext();
  return (
    <div
      className={`${
        showDeleteUserModal ? "" : "hidden"
      } bg-[rgba(0,0,0,0.3)] dark:bg-[rgba(0,0,0,0.6)] fixed z-50 inset-0`}
    >
      <ConfirmUserDelete />
    </div>
  );
};

export default DeleteUserModal;
