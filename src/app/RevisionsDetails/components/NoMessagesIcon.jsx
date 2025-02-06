import React from "react";
import noMessages from "../../../assets/no_messages.png";

const NoMessagesIcon = ({ revisionMessages, loading }) => {
  return (
    <div
      className={`h-[90%] flex flex-col items-center gap-4 pt-[14%] ${
        revisionMessages.length == 0 && !loading ? "" : "hidden"
      }`}
    >
      <div className="h-auto md:h-[25rem] w-full md:w-[35rem] opacity-[0.5]">
        <img src={noMessages} alt="no messages png" className="h-full w-full" />
      </div>
      <div className="text-center">
        <p className="text-[18px] md:text-2xl font-bold ">No messages yet</p>
        <p className="text-[14px] md:text-[17px]">
          Any messages related to the revision will appear here. Start
          messaging.
        </p>
      </div>
    </div>
  );
};

export default NoMessagesIcon;
