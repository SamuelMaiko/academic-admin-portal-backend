import React from "react";
import { useAdminContext } from "../../../../Context/AdminContext";
import WritersList from "./WritersList";

const ChooseWriterModal = () => {
  const { showChooseWriterModal } = useAdminContext();

  return (
    <div
      className={`${
        showChooseWriterModal ? "" : "hidden"
      } bg-[rgba(0,0,0,0.3)] dark:bg-[rgba(0,0,0,0.6)] fixed z-50 inset-0`}
    >
      <WritersList />
    </div>
  );
};

export default ChooseWriterModal;
