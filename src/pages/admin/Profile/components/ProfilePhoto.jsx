import React from "react";
import { useStateShareContext } from "../../../../Context/StateContext";
import defaultProfile from "../../../../assets/Default_pfp.jpg";
import { Button } from "keep-react";

const ProfilePhoto = ({}) => {
  const { setShowEditPFPModal, imageURL } = useStateShareContext();
  return (
    <div
      className=" flex items-center gap-5 bg-transparent w-full
     dark:bg-darkMode-cardBg dark:text-darkMode-text pl-5 md:pl-7 py-5 md:py-7 
    "
    >
      <div className="relative size-[5.8rem] bg-neutral-300 overflow-hidden rounded-full">
        <img
          src={imageURL == "" ? defaultProfile : imageURL}
          alt=""
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div>
        <p className="font-semibold text-gray-500 mb-2 text-[14px] lg:text-[15px]">
          Your Photo
        </p>
        <Button
          onClick={() => setShowEditPFPModal(true)}
          className="bg-transparent text-blue-500 border-[1px] border-blue-500 hover:text-blue-500
         hover:bg-neutral-100 transition-colors duration-300 py-1 text-[14px] lg:text-[15px] px-5"
        >
          Change Photo
        </Button>
      </div>
    </div>
  );
};

export default ProfilePhoto;
