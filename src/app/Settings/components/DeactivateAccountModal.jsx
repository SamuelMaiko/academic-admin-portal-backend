import React from "react";
import { useStateShareContext } from "../../../Context/StateContext";
import ConfirmAccountDelete from "./ConfirmAccountDelete";
import ConfirmAccountDeactivate from "./ConfirmAccountDeactivate";

const DeactivateAccountModal = () => {
  const { showDeactivateAccountModal } = useStateShareContext();

  return (
    <div
      className={`${
        showDeactivateAccountModal ? "" : "hidden"
      } bg-[rgba(0,0,0,0.3)] dark:bg-[rgba(0,0,0,0.6)] fixed z-50 inset-0`}
    >
      <ConfirmAccountDeactivate />
    </div>
  );
};

export default DeactivateAccountModal;
