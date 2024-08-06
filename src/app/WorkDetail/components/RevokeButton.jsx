import React from "react";

const RevokeButton = ({ isMine, setShowRevokeWorkModal }) => {
  return (
    <button
      onClick={() => setShowRevokeWorkModal(true)}
      className={`${
        isMine ? "" : "hidden"
      } bg-red-500 hover:bg-red-600 transition-colors duration-300 text-white
              rounded-lg text-sm py-1 px-3 ml-2 md:ml-8`}
    >
      Revoke
    </button>
  );
};

export default RevokeButton;
