import React from "react";
import { useStateShareContext } from "../../../Context/StateContext";
import ConfirmRevoke from "./ConfirmRevoke";

const RevokeWorkModal = () => {
  const { showRevokeWorkModal } = useStateShareContext();

  return (
    <div
      className={`${
        showRevokeWorkModal ? "" : "hidden"
      } bg-[rgba(0,0,0,0.3)] dark:bg-[rgba(0,0,0,0.6)] fixed z-50 inset-0`}
    >
      <ConfirmRevoke />
    </div>
  );
};

export default RevokeWorkModal;
