import React, { useState } from "react";
import { useAdminContext } from "../../../../Context/AdminContext";
import { X } from "phosphor-react";
import WorkImages from "./WorkImages";
import Loader from "../../../../SharedComponents/Loader";

const EditImages = () => {
  const { setShowChangeImagesModal, images, setImages } = useAdminContext();
  const [loading, setLoading] = useState(false);

  return (
    <div
      className="absolute w-full md:w-[46%] lg:w-[34%] h-[34rem] pb-7 md:rounded-lg  md:px-2 left-[50%]
 translate-x-[-50%] top-[50%] translate-y-[-50%] bg-bgcolor dark:bg-darkMode-body
  dark:text-darkMode-text 
 "
    >
      <div
        className={`${
          loading ? "" : "hidden"
        } bg-[rgba(0,0,0,0.2)] dark:bg-[rgba(0,0,0,0.6)] absolute z-50 inset-0`}
      >
        <Loader loading={loading} />
      </div>
      {/* header */}
      <div className=" flex justify-between items-center py-3 px-4 border-b-neutral-300 border-b-[1px]">
        <p className="text-[16px] lg:text-[17px] font-semibold">Edit Images</p>
        {/* close button */}
        <button
          onClick={() => {
            setShowChangeImagesModal(false);
            setImages("");
          }}
          className="rounded-full hover:bg-neutral-200 dark:hover:bg-gray-600 p-2"
        >
          <X size={24} className="hidden lg:block" />
          <X size={20} className="lg:hidden block" />
        </button>
      </div>
      {/* body */}
      <div>
        <div className="flex justify-center pt-5  text-neutral-600">
          <WorkImages setLoading={setLoading} />
        </div>
      </div>
    </div>
  );
};

export default EditImages;
