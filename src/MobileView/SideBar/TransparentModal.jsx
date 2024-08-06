import React from "react";
import { useStateShareContext } from "../../Context/StateContext";
import MobileSideBar from "./MobileSideBar";

const TransparentModal = () => {
  const { showMobileSideBar } = useStateShareContext();
  return (
    <div
      className={`${
        showMobileSideBar ? "" : ""
      } fixed z-40 inset-0 md:hidden -translate-x-[27rem] bg-red-200 transition-transform duration-500`}
    >
      <MobileSideBar />
    </div>
  );
};

export default TransparentModal;
