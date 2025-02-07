import React from "react";
import { useNavigate } from "react-router-dom";
import Vini from "../../../assets/article.png";
import { useAdminContext } from "../../../Context/AdminContext";
import Button from "../../../SharedComponents/Button";

const RevisionChatBar = () => {
  const navigate = useNavigate();
  const { workBeingRevised, setShowNavBar } = useAdminContext();

  return (
    <div
      className={`w-full h-[5rem] px-[1rem] md:px-[2rem] flex  items-center justify-between sticky
         top-0 z-40 bg-white dark:bg-darkMode-bars dark:text-darkMode-text`}
    >
      <div className="flex items-center justify-between md:justify-normal gap-3">
        <Button
          onClick={() => {}}
          buttonType="roundedIconBtn"
          className="dark:hover:bg-gray-600 size-[2.8rem] ml-1 p-0 overflow-hidden bg-black dark:hover:text-white"
        >
          <img
            className="w-full h-full object-cover object-top"
            src={Vini}
            alt=""
          />
        </Button>
        <p className="md:font-medium text-[17px] md:text-2xl whitespace-nowrap">
          Revision Chat
        </p>
      </div>
      <div
        onClick={() => {
          navigate(
            `/manage-work/${workBeingRevised && workBeingRevised.id}/change`
          );
          setShowNavBar(true);
        }}
        className="flex flex-col items-end md:items-center cursor-pointer md:mr-[20%]"
      >
        <p className="font-bold text-[15px] md:text-lg">
          {workBeingRevised && workBeingRevised.work_code}
        </p>
        <p className="text-[13px] md:text-[15px] hidden lg:block">
          Tap here for work info
        </p>
      </div>
      <div className="hidden md:block"></div>
    </div>
  );
};

export default RevisionChatBar;
