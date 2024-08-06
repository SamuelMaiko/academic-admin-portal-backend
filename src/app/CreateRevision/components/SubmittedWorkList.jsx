import { X } from "lucide-react";
import React from "react";
import { useAdminContext } from "../../../Context/AdminContext";
import SubmittedWorkListCard from "./SubmittedWorkListCard";

const SubmittedWorkList = () => {
  const { setShowChooseWorkModal } = useAdminContext();
  return (
    <div
      className="absolute w-full md:w-[46%] h-[34rem] rounded-lg  md:px-2 left-[50%]
   translate-x-[-50%] top-[50%] translate-y-[-50%] bg-bgcolor dark:bg-darkMode-body
    dark:text-darkMode-text     
   "
    >
      {/* header */}
      <div className="flex justify-between items-center py-3 px-4 border-b-neutral-300 border-b-[1px]">
        <p className="text-xl font-semibold">Choose submitted work</p>
        {/* close button */}
        <button
          onClick={() => setShowChooseWorkModal(false)}
          className="rounded-full hover:bg-neutral-200 dark:hover:bg-gray-600 p-2"
        >
          <X size={24} />
        </button>
      </div>
      <div>
        <SubmittedWorkListCard id={1} firstName="Samuel" lastName="Maiko" />
      </div>
    </div>
  );
};

export default SubmittedWorkList;
