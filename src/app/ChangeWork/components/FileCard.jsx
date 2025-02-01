import { Divider } from "keep-react";
import { DownloadCloudIcon, Trash2, Eye } from "lucide-react";
import React, {useState, useEffect} from "react";
import truncateFileName from "../../../utils/truncateFileName"

const FileCard = ({file, file_name, download_url}) => {
  const [viewableType, setViewableType]=useState(false)
  const fileExtension=file_name.split(".")[file_name.split(".").length-1]

  useEffect(()=>{
    if (fileExtension=="pdf"||fileExtension=="jpeg"||fileExtension=="jpg"||fileExtension=="png"||fileExtension=="webp"){
      setViewableType(true)
    }
   
    
  },[])
  return (
    <>
      <div className="flex items-center justify-between text-[15px] gap-4 p-3 bg-white hover:bg-neutral-100">
        <p>{truncateFileName(file_name, 45)}</p>
        {/* <span className="italic">&middot; 945kb</span> */}
        <div className="flex items-center gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
              }}
              className={`${viewableType?"":"text-gray-400"} hover:bg-gray-200 rounded-full p-2 cursor-pointer transition-colors duration-300`}
              disabled={viewableType==false}
            >
               <a className={`${!viewableType?"hidden":""}`} href={file} target="blank">
                <Eye size={17}  />
              </a>
          
              <Eye size={17} className={`${!viewableType?"":"hidden"}`} />

            </button>
            <span
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="hover:bg-gray-200 rounded-full p-2 cursor-pointer transition-colors duration-300"
            >
              <a href={download_url} download={file_name}>
              <DownloadCloudIcon size={17} />
              </a>
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
      </div>
      <Divider className="dark:hidden" color="primary" />
      <Divider className="hidden dark:block" color="secondary" />
    </>
  );
};

export default FileCard;
