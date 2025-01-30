import React from "react";
import { useAdminContext } from "../../../Context/AdminContext";
import EditImages from "./EditImages";

const EditImagesModal = () => {
  const { showChangeImagesModal } = useAdminContext();

  return (
    <div
      className={`${
        showChangeImagesModal ? "" : "hidden"
      } bg-[rgba(0,0,0,0.3)] dark:bg-[rgba(0,0,0,0.6)] fixed z-50 inset-0`}
    >
      <EditImages />
    </div>
  );
};

export default EditImagesModal;
