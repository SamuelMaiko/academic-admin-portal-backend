import React from "react";
import { useStateShareContext } from "../../Context/StateContext";

const SideBarModal = () => {
  const { showMobileSideBar } = useStateShareContext();
  return (
    <div
      className={`${
        showMobileSideBar ? "" : "hidden"
      } bg-[rgba(0,0,0,0.4)] dark:bg-[rgba(0,0,0,0.3)] fixed z-40 inset-0 md:hidden transition-transform duration-500`}
    ></div>
  );
};

export default SideBarModal;
