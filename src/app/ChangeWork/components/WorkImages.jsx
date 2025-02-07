import React, { useState, useEffect } from "react";
import ImageBlock from "./ImageBlock";
import { CloudArrowDown } from "phosphor-react";
import { Plus, TvMinimalPlay } from "lucide-react";
import { useStateShareContext } from "../../../Context/StateContext";
import { useAdminContext } from "../../../Context/AdminContext";
import uploadWorkImages from "../../CreateWork/api/uploadWorkImages";

const WorkImages = ({ setLoading }) => {
  const {
    workImages,
    zipDetails,
    workToUploadFiles,
    setWorkImages,
    images,
    setImages,
  } = useAdminContext();
  const { setShowCarouselModal } = useStateShareContext();
  const imagesCount = workImages && workImages.length;

  const handleImagesChange = (e) => {
    const files = [...e.target.files];
    setImages(files);
    e.target.value = ""; // Clear the input
  };

  useEffect(() => {
    if (images && images.length > 0) {
      setLoading(true);
      uploadWorkImages(parseInt(workToUploadFiles, 10), images).then((data) => {
        if (data) {
          setWorkImages((prev) => [...prev, ...data]);
        }
        setLoading(false);
      });
    }
  }, [images]); // This effect runs whenever `images` changes

  return (
    <div className="">
      <div className="flex justify-between pr-2 md:pr-5 mb-8">
        <h1 className="text-[16px] lg:text-[17px] font-semibold ">
          Images {`(${imagesCount})`}
        </h1>
        <div className="flex gap-2">
          <a
            href={zipDetails && zipDetails.zipDownloadLink}
            className={imagesCount == 0 ? "hidden" : ""}
            download={`${zipDetails.zipName}.zip`}
          >
            <button
              className="text-sm flex items-center gap-2 bg-yellow-300 hover:bg-yellow-400
            transition-colors duration-300 text-black py-1 px-4  font-medium text-[13px] lg:text-[14px]"
            >
              <span>
                <CloudArrowDown size={20} className="hidden lg:block" />
                <CloudArrowDown size={18} className="lg:hidden block" />{" "}
              </span>
              <span>Download all images</span>
            </button>
          </a>
          <button
            className={`text-sm flex items-center gap-2 bg-gray-200 cursor-default
              transition-colors duration-300 text-black py-1 px-4  font-medium text-[13px] lg:text-[14px]
              ${imagesCount == 0 ? "" : "hidden"}
              `}
          >
            <span>
              <CloudArrowDown size={20} className="hidden lg:block" />
              <CloudArrowDown size={18} className="lg:hidden block" />{" "}
            </span>
            <span className="lg:hidden block">Download images</span>
            <span className="hidden lg:block">Download all images</span>
          </button>
          <button
            onClick={() => setShowCarouselModal(true)}
            className={`text-sm flex items-center gap-2 hover:text-gray-500 
            transition-colors duration-300 text-black py-1 md:px-4  font-medium 
            ${imagesCount == 0 ? "hidden" : ""}
            `}
          >
            <TvMinimalPlay size={20} />{" "}
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 md:px-2 overflow-y-scroll h-[20rem] scrollble">
        {workImages.map((workImage, index) => (
          <ImageBlock key={index} {...workImage} />
        ))}
        <div
          onClick={() => {
            document.getElementById("upload_images_input").click();
          }}
          className="relative size-[6rem] cursor-pointer bg-gray-200 hover:bg-gray-300 overflow-hidden
         flex justify-center items-center transition-colors duration-300"
        >
          <input
            id="upload_images_input"
            multiple
            accept="image/*"
            type="file"
            onChange={(e) => {
              handleImagesChange(e);
              e.target.value = "";
            }}
            className="hidden"
          />
          <Plus size={34} className="hidden lg:block" />
          <Plus size={30} className="lg:hidden block" />
        </div>
      </div>
    </div>
  );
};

export default WorkImages;
