import React from "react";
import FileLink from "./FileLink";

const WorkFiles = ({ files }) => {
  return (
    <div className="mt-10">
      <h1 className="text-[16px] lg:text-[18px] font-semibold mb-3">Files</h1>
      <div>
        {files &&
          files.map((file, index) => {
            return <FileLink key={index} {...file} />;
          })}

        <div
          className={`text-[14px] lg:text-[16px] text-neutral-500 ${
            files && files.length === 0 ? "" : "hidden"
          }`}
        >
          No files available.
        </div>
      </div>
    </div>
  );
};

export default WorkFiles;
