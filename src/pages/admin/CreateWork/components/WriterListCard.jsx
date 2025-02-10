import { Divider } from "keep-react";
import React from "react";
import { useAdminContext } from "../../../../Context/AdminContext";
import defaultProfile from "../../../../assets/Default_pfp.jpg";

const WriterListCard = ({ writer }) => {
  const { setShowChooseWriterModal, setWriterName, setWriter } =
    useAdminContext();

  const fullName = `${writer.first_name && writer.first_name} ${
    writer.last_name && writer.last_name
  }`;
  return (
    <>
      <div
        onClick={() => {
          setWriterName(fullName);
          setWriter(writer.id);
          setShowChooseWriterModal(false);
        }}
        className="flex items-center gap-4 px-2 py-5 hover:bg-gray-100 transition-colors duration-300 cursor-pointer"
      >
        <div className="size-[2.5rem] bg-transparent rounded-full overflow-hidden">
          <img
            src={
              writer.profile_picture_absolute
                ? writer.profile_picture_absolute
                : defaultProfile
            }
            className="h-full w-full"
          />
        </div>
        <div className="">
          <p className="text-[14px] md:text-[15px] font-semibold">{fullName}</p>
          <p className="text-[13px] md:text-[14px] text-gray-500">
            {writer.email}
          </p>
        </div>
      </div>
      <Divider className="dark:hidden" color="primary" />
      <Divider className="hidden dark:block" color="secondary" />
    </>
  );
};

export default WriterListCard;
