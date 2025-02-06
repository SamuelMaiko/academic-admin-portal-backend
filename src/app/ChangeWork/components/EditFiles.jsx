import React, { useState } from "react";
import { useAdminContext } from "../../../Context/AdminContext";
import { X } from "phosphor-react";
import { CircleAlert, CloudUpload, Plus } from "lucide-react";
import EditFilesBody from "./EditFilesBody";
import { Button } from "keep-react";
import uploadWorkFiles from "../../CreateWork/api/uploadWorkFiles";
import { toast } from "react-toastify";

const EditFiles = () => {
  const {
    setShowChangeFilesModal,
    workFiles,
    setWorkFiles,
    workToUploadFiles,
  } = useAdminContext();
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState("");

  return (
    <div
      className="absolute w-full md:w-[43%] h-[34rem] pb-7 rounded-lg  md:px-2 left-[50%]
 translate-x-[-50%] top-[50%] translate-y-[-50%] bg-bgcolor dark:bg-darkMode-body
  dark:text-darkMode-text 
 "
    >
      {/* header */}
      <div className="  flex justify-between items-center py-3 px-4 border-b-neutral-300 border-b-[1px]">
        <p className="text-[16px] lg:text-[17px] font-semibold">
          Edit Files {`(${workFiles && workFiles.length})`}
        </p>
        {/* close button */}
        <button
          onClick={() => {
            setShowChangeFilesModal(false);
            setFiles("");
          }}
          className="rounded-full hover:bg-neutral-200 dark:hover:bg-gray-600 p-2"
        >
          <X size={24} className="hidden lg:block" />
          <X size={20} className="lg:hidden block" />
        </button>
      </div>
      {/* body */}
      <div className="h-full">
        <div className=" text-neutral-600 h-[82%] overflow-y-scroll scrollble">
          {/* <WorkImages setLoading={setLoading} /> */}
          <EditFilesBody />
        </div>
        {/* lower div */}
        <div className="flex items-center h-[3.4rem] w-full pl-2">
          <form className="flex items-center gap-5">
            <input
              id="upload_files"
              multiple
              type="file"
              onChange={(e) => {
                setFiles([...e.target.files]);
                e.target = "";
              }}
              className="hidden"
            />
            <Button
              type="button"
              onClick={() => {
                document.getElementById("upload_files").click();
              }}
              className={`py-1
          text-neutral-600 bg-neutral-300 hover:bg-neutral-200
           hover:text-neutral-600 
          px-4 transition-colors duration-300 text-[13px] lg:text-[14px]`}
            >
              select files
            </Button>
            <p className="italic text-gray-500 font-normal text-[13px] lg:text-[14px] ">
              {files?.length ?? 0} files uploaded
            </p>
            {/* cloud upload button */}
            <button
              disabled={files.length === 0}
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                uploadWorkFiles(workToUploadFiles, files).then((data) => {
                  setWorkFiles((current) => [...current, ...data]);
                  toast.success("Files uploaded successfully", {
                    autoClose: 1000,
                  });
                  setFiles("");
                });
                // setShowChangeFilesModal(false);
              }}
              className={`  text-[13px] lg:text-[14px] dark:hover:bg-gray-600
           px-2 py-1 flex gap-2 transition-colors duration-300 rounded-lg ${
             files.length === 0
               ? "bg-neutral-300 text-metal-600"
               : "bg-blue-500 hover:bg-blue-600 text-white"
           }`}
            >
              <CloudUpload size={20} className="hidden lg:block" />
              <CloudUpload size={18} className="lg:hidden block" />
              <span>Upload</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditFiles;
