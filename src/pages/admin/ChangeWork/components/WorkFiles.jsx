import React from "react";
import FileLink from "./FileLink";

const WorkFiles = ({ files }) => {
  return (
    <div className="mt-10">
      <h1 className="text-lg font-semibold mb-3">Files</h1>
      <div>
        {files &&
          files.map((file, index) => {
            return <FileLink key={index} {...file} />;
          })}
      </div>
    </div>
  );
};

export default WorkFiles;
