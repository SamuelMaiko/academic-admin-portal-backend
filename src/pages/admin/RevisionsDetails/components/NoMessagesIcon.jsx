import React from "react";
import noMessages from "../../../../assets/no_messages.png";

const NoMessagesIcon = ({ revisionMessages, loading }) => {
  return (
    <div
      className={`h-[90%] flex flex-col items-center gap-4 pt-[14%] lg:pt-0 ${
        revisionMessages.length == 0 && !loading ? "" : "hidden"
      }`}
    >
      <div className="h-auto md:h-[25rem] w-full md:w-[35rem] opacity-[0.5]">
        <img src={noMessages} alt="no messages png" className="h-full w-full" />
      </div>
      <div className="text-center">
        <p className="text-[15px] md:text-xl font-bold mb-3">No messages yet</p>
        <p className="text-[13px] md:text-sm">
          Any messages related to the revision will appear here. Start
          messaging.
        </p>
      </div>
    </div>
  );
};

export default NoMessagesIcon;
