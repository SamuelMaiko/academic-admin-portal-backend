import React from "react";
import { Download, Trash } from "lucide-react";
import { useStateShareContext } from "../../../Context/StateContext";
import { useAdminContext } from "../../../Context/AdminContext";
import deleteWorkImage from "../api/deleteWorkImage"

const ImageBlock = ({ id, image, image_name, download_url, combined, workToUploadFiles }) => {
  const { setShowCarouselModal } = useStateShareContext();
  const {setWorkImages}=useAdminContext()

  // JUST to prevent propagation nothing else
  const handleDownload = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className="relative size-[6rem] cursor-pointer hover:bg-gray-400 overflow-hidden"
    >
      <img className="h-full w-full " src={image} alt={image_name} />
      <div
        className="bg-transparent hover:bg-[rgba(0,0,0,0.2)] transition-colors duration-300 
      absolute inset-0 z-10 size-full"
      ></div>
      {/* download icon */}
      <a href={download_url} download={combined}>
        <Download
          size={18}
          className="absolute top-1 right-1 text-white hover:bg-gray-300 transition-colors duration-300 z-20"
          onClick={handleDownload}
        />
      </a>
      <Trash
        size={18}
        className="absolute top-8 right-1 text-white hover:bg-gray-300 transition-colors duration-300 z-20"
        onClick={(e) => {
          e.stopPropagation();
          
          deleteWorkImage(id)
          .then(data=>{
            // console.log(data)
            setWorkImages(prev=>{
              const newList=prev.filter(image=> image.id!==id)
              return newList
            })
          })
        }}
      />
    </div>
  );
};

export default ImageBlock;
