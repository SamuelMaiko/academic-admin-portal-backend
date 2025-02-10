import React from "react";
import { useAdminContext } from "../../../../Context/AdminContext";
import SubmittedWorkList from "./SubmittedWorkList";

const ChooseWorkModal = () => {
  const { showChooseWorkModal } = useAdminContext();

  return (
    <div
      className={`${
        showChooseWorkModal ? "" : "hidden"
      } bg-[rgba(0,0,0,0.3)] dark:bg-[rgba(0,0,0,0.6)] fixed z-50 inset-0`}
    >
      <SubmittedWorkList />
    </div>
  );
};

export default ChooseWorkModal;
