import React from "react";
import { useAdminContext } from "../../../../Context/AdminContext";
import ConfirmDeleteWork from "./ConfirmDeleteWork";

const DeleteWorkModal = () => {
  const account_status = "Active";
  const { showDeleteWorkModal } = useAdminContext();

  return (
    <div
      className={`${
        showDeleteWorkModal ? "" : "hidden"
      } bg-[rgba(0,0,0,0.3)] fixed z-50 inset-0`}
    >
      <ConfirmDeleteWork />
    </div>
  );
};

export default DeleteWorkModal;
