import React, { useState } from "react";
import { Pencil, NotePencil } from "phosphor-react";
import { useStateShareContext } from "../../../Context/StateContext";
import Vini from "../../../assets/Default_pfp.jpg";

const UserInfo = ({ firstName, lastName, regNo, county, role }) => {
  const { setShowEditInfoModal, setShowEditPFPModal, imageURL } =
    useStateShareContext();
  const [showImageEditIcon, setShowImageEditIcon] = useState(false);
  return (
    <div
      className="absolute left-1/2 -translate-x-1/2 top-[9rem] md:top-[11rem] flex items-center  
    md:shadow-[2px_2px_13px_rgba(0,0,0,0.1)] shadow-[2px_2px_13px_rgba(0,0,0,0.09)]
     dark:shadow-gray-600 bg-white w-[95%] rounded-[1rem]
     dark:bg-darkMode-cardBg dark:text-darkMode-text
    "
    >
      <div className="flex flex-col pl-5 md:pl-7 py-5 md:py-7">
        {/* edit icon */}
        <button
          onClick={() => setShowEditInfoModal(true)}
          className="absolute top-4 right-4 bg-neutral-100 dark:bg-transparent
           dark:hover:bg-gray-600 hover:bg-neutral-200 p-2 rounded-full"
        >
          <Pencil size={24} className="hidden md:block" />
          <Pencil size={23} className="block md:hidden" />
        </button>
        <div
          onMouseOver={() => setShowImageEditIcon(true)}
          onMouseOut={() => setShowImageEditIcon(false)}
          className="relative size-[4.5rem] bg-neutral-300 overflow-hidden rounded-lg"
        >
          <img
            src={imageURL == "" ? Vini : imageURL}
            alt=""
            className="w-full h-full object-cover object-top"
          />
          {/* Floating edit icon */}
          <button
            onClick={() => setShowEditPFPModal(true)}
            className={`${
              showImageEditIcon ? "" : "md:hidden"
            } absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-neutral-200`}
          >
            <NotePencil size={28} />
          </button>
        </div>
        <div className="">
          <p className="font-bold text-lg">
            {firstName} {lastName}
          </p>
          <p className="font-semibold text-sm text-yellow-600 dark:text-yellow-400">
            {role}
          </p>
          <p className="font-medium text-sm text-neutral-500 dark:text-darkMode-gray">
            Reg. {regNo}
          </p>
          <p className=" text-neutral-500 dark:text-darkMode-gray text-sm mt-2">
            {county} &#xB7;{" "}
            <span className="text-blue-600 dark:text-blue-400 font-bold hover:underline cursor-pointer">
              <a href="#contact">Contant info</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
