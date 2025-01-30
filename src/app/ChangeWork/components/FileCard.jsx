import { Divider } from "keep-react";
import { DownloadCloudIcon, Trash2 } from "lucide-react";
import React from "react";

const FileCard = () => {
  return (
    <>
      <div className="flex items-center text-[15px] gap-4 p-3 bg-white hover:bg-neutral-100">
        <p>student-announcements.pdf</p>
        <span className="italic">&middot; 945kb</span>
        <span
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="hover:bg-gray-200 rounded-full p-2 cursor-pointer transition-colors duration-300"
        >
          <DownloadCloudIcon size={17} />
        </span>
        <span
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="hover:bg-gray-200 rounded-full p-2 cursor-pointer transition-colors duration-300"
        >
          <Trash2 size={17} />
        </span>
      </div>
      <Divider className="dark:hidden" color="primary" />
      <Divider className="hidden dark:block" color="secondary" />
    </>
  );
};

export default FileCard;
