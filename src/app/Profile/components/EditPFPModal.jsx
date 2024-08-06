import React from "react";
import { useStateShareContext } from "../../../Context/StateContext";
import EditInfoForm from "./EditInfoForm";
import EditPFPForm from "./EditPFPForm";

const EditPFPModal = () => {
  const { showEditPFPModal } = useStateShareContext();

  return (
    <div
      className={`${
        showEditPFPModal ? "" : "hidden"
      } bg-[rgba(0,0,0,0.3)] dark:bg-[rgba(0,0,0,0.6)] fixed z-50 inset-0`}
    >
      <EditPFPForm />
    </div>
  );
};

export default EditPFPModal;
