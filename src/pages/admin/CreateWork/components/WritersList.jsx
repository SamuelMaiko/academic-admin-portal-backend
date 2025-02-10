import React, { useEffect, useState } from "react";
import { useAdminContext } from "../../../../Context/AdminContext";
import { X } from "phosphor-react";
import WriterListCard from "./WriterListCard";
import getWriters from "../api/getWriters";

const WritersList = () => {
  const { setShowChooseWriterModal } = useAdminContext();
  const [writersList, setWritersList] = useState();

  useEffect(() => {
    getWriters().then((data) => setWritersList(data));
  }, []);
  return (
    <div
      className="absolute w-full md:w-[46%] h-[28rem] md:h-[34rem] md:rounded-lg  md:px-2 left-[50%]
 translate-x-[-50%] top-[50%] translate-y-[-50%] bg-bgcolor dark:bg-darkMode-body
  dark:text-darkMode-text     
 "
    >
      {/* header */}
      <div className="flex justify-between items-center py-3 px-4 border-b-neutral-300 border-b-[1px]">
        <p className=" font-semibold text-[16px] md:text-lg">Choose writer</p>
        {/* close button */}
        <button
          onClick={() => setShowChooseWriterModal(false)}
          className="rounded-full hover:bg-neutral-200 dark:hover:bg-gray-600 p-2"
        >
          <X size={24} className="hidden lg:block" />
          <X size={20} className="block lg:hidden" />
        </button>
      </div>
      <div>
        {writersList &&
          writersList.map((writer, index) => {
            return <WriterListCard key={index} writer={writer} />;
          })}
      </div>
    </div>
  );
};

export default WritersList;
