import React from "react";
import { useStateShareContext } from "../../../Context/StateContext";
import ConfirmDelete from "./ConfirmDelete";

const DeleteProfilePhotoModal = () => {
  const { showDeleteProfilePhotoModal } = useStateShareContext();

  return (
    <div
      className={`${
        showDeleteProfilePhotoModal ? "" : "hidden"
      } bg-[rgba(0,0,0,0.3)] dark:bg-[rgba(0,0,0,0.6)] fixed z-50 inset-0`}
    >
      <ConfirmDelete />
    </div>
  );
};

export default DeleteProfilePhotoModal;
