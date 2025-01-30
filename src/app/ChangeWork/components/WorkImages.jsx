import React, { useState } from "react";
import ImageBlock from "./ImageBlock";
import { ArrowLeft, CloudArrowDown } from "phosphor-react";
import CarouselComponent from "./CarouselComponent ";
import { Plus, X } from "lucide-react";
import { useStateShareContext } from "../../../Context/StateContext";
import Chimp from "../../../assets/gpt-redesign-5.webp";
import { toast } from "react-toastify";
import { useAdminContext } from "../../../Context/AdminContext";

const WorkImages = ({ setLoading, zipUrl, zipName }) => {
  const [images, setImages] = useState(null);
  const [imagesToDisplay, setImagesToDisplay] = useState([]);
  const { setShowChangeImagesModal } = useAdminContext();

  const handleImagesChange = (e) => {
    setImages([...e.target.files]);
    console.log([...e.target.files]);

    setLoading(true);

    toast.success("Upload successful!");
    setLoading(false);

    // make api request for images
  };

  return (
    <div className="">
      <div className="flex justify-between pr-10 md:pr-5 mb-8">
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
      <div className="grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 md:px-2">
        <ImageBlock image={Chimp} />
        {/* TODO: return <ImageBlock key={index} {...image} />; */}
        <ImageBlock image={Chimp} />
        <ImageBlock image={Chimp} />
        <ImageBlock image={Chimp} />
        <ImageBlock image={Chimp} />

        {/* {imagesToDisplay &&
          imagesToDisplay.map((image, index) => {
            return <ImageBlock key={index} image={image} />;
          })} */}
        {/* editing block */}
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
              e.target = "";
            }}
            className="hidden"
          />
          <Plus size={34} />
        </div>
      </div>
      {/* <button
        onClick={() => setShowChangeImagesModal(false)}
        className="absolute bottom-8 right-[10%] bg-green-700 hover:bg-green-600 transition-colors duration-300
          dark:text-darkMode-cardButtonT dark:hover:text-darkMode-cardButtonTHov
           rounded-lg font-semibold  py-1 px-5 text-white"
      >
        Close
      </button> */}
    </div>
  );
};

export default WorkImages;
