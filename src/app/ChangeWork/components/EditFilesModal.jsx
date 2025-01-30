import React from "react";
import { useAdminContext } from "../../../Context/AdminContext";
import EditImages from "./EditImages";
import EditFiles from "./EditFiles";

const EditFilesModal = () => {
  const { showChangeFilesModal } = useAdminContext();

  return (
    <div
      className={`${
        showChangeFilesModal ? "" : "hidden"
      } bg-[rgba(0,0,0,0.3)] dark:bg-[rgba(0,0,0,0.6)] fixed z-50 inset-0`}
    >
      <EditFiles />
    </div>
  );
};

export default EditFilesModal;
