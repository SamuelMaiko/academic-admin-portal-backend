import { X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useAdminContext } from "../../../Context/AdminContext";
import SubmittedWorkListCard from "./SubmittedWorkListCard";
import getSubmittedWork from "../api/getSubmittedWork";

const SubmittedWorkList = () => {
  const { setShowChooseWorkModal } = useAdminContext();
  const [submittedWork, setSubmittedWork] = useState([]);

  useEffect(() => {
    getSubmittedWork().then((data) => {
      setSubmittedWork(data);
    });
  }, []);
  return (
    <div
      className="absolute w-full md:w-[46%] h-[34rem] md:rounded-lg  md:px-2 left-[50%]
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
        {submittedWork &&
          submittedWork.map((item, index) => (
            <SubmittedWorkListCard key={index} {...item} />
          ))}
      </div>
    </div>
  );
};

export default SubmittedWorkList;
