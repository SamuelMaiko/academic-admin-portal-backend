import React from "react";
import ConfirmUserDeactivate from "./ConfirmUserDeactivate";
import { useAdminContext } from "../../../Context/AdminContext";

const DeactivateUserModal = () => {
  const { showDeactivateUserModal } = useAdminContext();
  return (
    <div
      className={`${
        showDeactivateUserModal ? "" : "hidden"
      } bg-[rgba(0,0,0,0.3)] dark:bg-[rgba(0,0,0,0.6)] fixed z-50 inset-0`}
    >
      <ConfirmUserDeactivate />
    </div>
  );
};

export default DeactivateUserModal;
