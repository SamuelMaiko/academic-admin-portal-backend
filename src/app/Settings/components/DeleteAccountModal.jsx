import React from "react";
import { useStateShareContext } from "../../../Context/StateContext";
import ConfirmAccountDelete from "./ConfirmAccountDelete";

const DeleteAccountModal = () => {
  const { showDeleteAccountModal } = useStateShareContext();

  return (
    <div
      className={`${
        showDeleteAccountModal ? "" : "hidden"
      } bg-[rgba(0,0,0,0.3)] dark:bg-[rgba(0,0,0,0.6)] fixed z-50 inset-0`}
    >
      <ConfirmAccountDelete />
    </div>
  );
};

export default DeleteAccountModal;
