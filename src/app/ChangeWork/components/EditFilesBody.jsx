import React from "react";
import FileCard from "./FileCard";
import { useAdminContext } from "../../../Context/AdminContext";

const EditFilesBody = () => {
  const {workFiles} =useAdminContext()

  return (
    <div className="">
      {
        workFiles && workFiles.map((workFile, index)=> <FileCard key={index} {...workFile} />)
      }
    </div>
  );
};

export default EditFilesBody;
