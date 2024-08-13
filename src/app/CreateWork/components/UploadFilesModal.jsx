import React from "react";
import { useAdminContext } from "../../../Context/AdminContext";
import UploadFiles from "./UploadFiles";

const UploadFilesModal = () => {
  const { showUploadFilesModal } = useAdminContext();

  return (
    <div
      className={`${
        showUploadFilesModal ? "" : "hidden"
      } bg-[rgba(0,0,0,0.3)] dark:bg-[rgba(0,0,0,0.6)] fixed z-50 inset-0`}
    >
      <UploadFiles />
    </div>
  );
};

export default UploadFilesModal;
