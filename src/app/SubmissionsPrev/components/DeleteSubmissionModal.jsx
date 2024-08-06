import React from "react";
import { useStateShareContext } from "../../../Context/StateContext";
import ConfirmSubmissionDelete from "./ConfirmSubmissionDelete";

const DeleteSubmissionModal = () => {
  const { showDeleteSubmissionModal } = useStateShareContext();

  return (
    <div
      className={`${
        showDeleteSubmissionModal ? "" : "hidden"
      } bg-[rgba(0,0,0,0.3)] dark:bg-[rgba(0,0,0,0.6)] fixed z-50 inset-0`}
    >
      <ConfirmSubmissionDelete />
    </div>
  );
};

export default DeleteSubmissionModal;
