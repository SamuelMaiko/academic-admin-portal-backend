import { Download, Eye, Paperclip } from "phosphor-react";
import React from "react";
import truncateFileName from "../../../../utils/truncateFileName";
import { useLocation } from "react-router-dom";

const FileLink = ({ file_name = "", file, download_url }) => {
  const truncatedFileName = truncateFileName(file_name, 40);

  const { pathname } = useLocation();

  // Define the regex pattern
  const regex = /^\/submissions\/(\d+)$/;

  // Test the pathname against the regex
  const match = regex.exec(pathname);

  return (
    <div className="flex justify-between w-[70%] md:w-full">
      <div
        className="text-sm flex items-center gap-2 cursor-pointer hover:text-blue-700
         dark:hover:text-blue-400 hover:underline 
      transition-colors duration-300 mb-2 w-fit
    "
      >
        <span>
          {/* <Paperclip size={20} /> */}
          <Paperclip size={20} className="cursor-pointer hidden lg:block" />
          <Paperclip size={17} className="cursor-pointer lg:hidden block" />
        </span>
        <p
          className={`md:whitespace-nowrap line-clamp-2 md:line-clamp-none hidden md:block text-[13px] lg:text-[14px]`}
        >
          {truncateFileName(file_name, 40)}
        </p>
        <p className="md:whitespace-nowrap block md:hidden line-clamp-2 md:line-clamp-none text-[13px] lg:text-[14px]">
          {truncateFileName(file_name, 25)}
        </p>
        {/* <a href={file} target="blank"> */}
        {/* </a> */}
      </div>
      <div className="flex gap-4 ml-5 md:mr-[60%]">
        <a href={file} target="blank" className={`${match ? "hidden" : ""}`}>
          <Eye
            size={20}
            className="cursor-pointer text-black  dark:text-white
           transition-colors duration hidden lg:block"
          />
          <Eye
            size={17}
            className="cursor-pointer text-black  dark:text-white
           transition-colors duration lg:hidden block"
          />
        </a>
        <a href={download_url} download>
          {/* <Download
            size={20}
            className="cursor-pointer text-black  dark:text-white
          dark:hover:text-[#90ee90] transition-colors duration"
          /> */}
          <Download
            size={20}
            className="cursor-pointer text-black  dark:text-white
          dark:hover:text-[#90ee90] transition-colors duration hidden lg:block"
          />
          <Download
            size={17}
            className="cursor-pointer text-black  dark:text-white
          transition-colors duration lg:hidden block"
          />
        </a>
      </div>
    </div>
  );
};

export default FileLink;
