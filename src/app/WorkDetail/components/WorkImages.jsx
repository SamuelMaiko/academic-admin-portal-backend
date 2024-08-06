import React, { useState } from "react";
import ImageBlock from "./ImageBlock";
import { ArrowLeft, CloudArrowDown } from "phosphor-react";
import CarouselComponent from "./CarouselComponent ";
import { X } from "lucide-react";
import { useStateShareContext } from "../../../Context/StateContext";

const WorkImages = ({ images, zipUrl, zipName }) => {
  const { showCarouselModal, setShowCarouselModal } = useStateShareContext();
  return (
    <div>
      <div className="flex justify-between pr-10 md:pr-20 mb-8">
        <h1 className="text-lg font-semibold ">Images</h1>
        <a
          href={zipUrl}
          className={images?.length == 0 ? "hidden" : ""}
          download={zipName ? `${zipName}.zip` : undefined}
        >
          <button
            className="text-sm flex items-center gap-2 bg-yellow-300 hover:bg-yellow-400
         transition-colors duration-300 text-black py-1 px-4  font-medium"
          >
            <span>
              <CloudArrowDown size={20} />{" "}
            </span>
            <span>Download all images</span>
          </button>
        </a>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-8 gap-4 md:gap-6 md:px-2">
        {images &&
          images.map((image, index) => {
            return <ImageBlock key={index} {...image} />;
          })}
      </div>
      {/* carousel modal */}
      <div
        className={`${
          showCarouselModal ? "" : "hidden"
        } fixed inset-0 z-50 bg-[rgba(0,0,0,0.3)] dark:bg-[rgba(0,0,0,0.6)] backdrop-blur-md`}
      >
        <div
          className="absolute w-[100vw] md:w-[60%] h-[100%] left-[50%]
     translate-x-[-50%] top-[50%] translate-y-[-50%] dark:bg-darkMode-body
      dark:text-darkMode-text bg-transparent flex items-center 
     "
        >
          <CarouselComponent images={images} />
          {/* cancel button */}
          <button
            onClick={() => setShowCarouselModal(false)}
            className="rounded-full p-2 absolute
             top-3 -right-[30%] text-white hidden md:block"
          >
            <X size={24} />
          </button>
          {/* back button for mobile */}
          <button
            onClick={() => setShowCarouselModal(false)}
            className="rounded-full p-2 absolute
             top-3 left-0 text-white block md:hidden"
          >
            <ArrowLeft size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkImages;
