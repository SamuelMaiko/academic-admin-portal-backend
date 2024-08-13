import React from "react";
import { useAdminContext } from "../../../Context/AdminContext";
import { X } from "phosphor-react";
import WriterListCard from "./WriterListCard";
import { CircleAlert, Plus } from "lucide-react";

const UploadFiles = () => {
  const { setShowUploadFilesModal } = useAdminContext();
  return (
    <div
      className="absolute w-full md:w-[46%] h-[34rem] rounded-lg  md:px-2 left-[50%]
 translate-x-[-50%] top-[50%] translate-y-[-50%] bg-bgcolor dark:bg-darkMode-body
  dark:text-darkMode-text     
 "
    >
      {/* header */}
      <div className="flex justify-between items-center py-3 px-4 border-b-neutral-300 border-b-[1px]">
        <p className="text-xl font-semibold">Upload Files</p>
        {/* close button */}
        <button
          onClick={() => setShowUploadFilesModal(false)}
          className="rounded-full hover:bg-neutral-200 dark:hover:bg-gray-600 p-2"
        >
          <X size={24} />
        </button>
      </div>
      {/* body */}
      <div>
        <div className="flex justify-center pt-5  text-neutral-600">
          <div
            className="bg-transparent w-[80%] h-[8rem] rounded-xl border-dotted border-[1px]
           border-neutral-400 flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-2">
              <Plus
                size={29}
                className="text-neutral-600 p-1 rounded-full border-[2px] border-neutral-600 "
              />
              <p>Click to choose files</p>
              <p className="flex items-center">
                <span>
                  <CircleAlert size={22} />
                </span>
                <span className="font-medium">Max file size: 10MB</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadFiles;
