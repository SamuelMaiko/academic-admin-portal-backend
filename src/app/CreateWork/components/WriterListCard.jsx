import { Divider } from "keep-react";
import React from "react";
import { useAdminContext } from "../../../Context/AdminContext";

const WriterListCard = ({ id, firstName, lastName }) => {
  const { setShowChooseWriterModal, setWriterName, setWriter } =
    useAdminContext();
  return (
    <>
      <div
        onClick={() => {
          setWriterName(`${firstName} ${lastName}`);
          setWriter(id);
          setShowChooseWriterModal(false);
        }}
        className="flex items-center gap-4 px-2 py-5 hover:bg-gray-100 transition-colors duration-300 cursor-pointer"
      >
        <div className="size-[2.5rem] bg-black rounded-full"></div>
        <div className="">
          <p className="font-medium text-md">John Kimani</p>
          <p className="text-[15px]">johnkimani@gmail.com</p>
        </div>
      </div>
      <Divider className="dark:hidden" color="primary" />
      <Divider className="hidden dark:block" color="secondary" />
    </>
  );
};

export default WriterListCard;
