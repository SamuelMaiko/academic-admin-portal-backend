import React, { useState } from "react";
import { useStateShareContext } from "../../../../Context/StateContext";

const DeactivateUserModal = () => {
  const account_status = "Active";
  const { showDeactivateModal, setShowDeactivateModal } =
    useStateShareContext();
  return (
    <div
      className={`${
        showDeactivateModal ? "" : "hidden"
      } bg-[rgba(0,0,0,0.3)] fixed z-30 inset-0`}
    >
      <div className="absolute w-[460px] p-4 left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] bg-bgcolor rounded-lg">
        <div className="text-xl text-center font-medium py-2">
          {account_status && account_status === "Active"
            ? "Confirm Account Deactivation"
            : "Confirm Account Activation"}{" "}
        </div>
        <p className="w-[90%] mb-[3rem] mx-auto">
          {account_status && account_status === "Active"
            ? "Are you sure you want to deactivate this user account? "
            : "Confirm Account Activation"}
        </p>
        {/* <p
          className={`${
            account_status && account_status === "Active" ? "" : "hidden"
          }`}
        >
          This action is irreversible.
        </p>
        <p className="text-sm text-gray-400 ">Samuel Maiko</p> */}

        <div className="flex justify-between mt-7 px-4">
          <button
            onClick={() => setShowDeactivateModal(false)}
            className="py-2 px-5 bg-blue-600 text-white hover:bg-blue-700 transition-background duration-300 rounded-lg flex items-center"
          >
            <span className="mr-1">
              {/* <MdOutlineCancel /> */}
              icon
            </span>
            <span>Cancel</span>
          </button>
          <button
            onClick={() => {}}
            className={` ${
              account_status && account_status !== "Active"
                ? "bg-[#4CAF50] hover:bg-[#45A049]"
                : "bg-orange-500 hover:bg-orange-600"
            }  py-2 px-5  text-white transition-background duration-300 rounded-lg flex items-center`}
          >
            <span className="mr-1">
              {/* <MdSettingsPower /> */}
              icon
            </span>
            <span>
              {account_status && account_status === "Active"
                ? "Deactivate"
                : "Activate"}
            </span>
          </button>
        </div>
        {/* __________cancel btn */}
        <div
          onClick={() => setShowDeactivateModal(false)}
          className="absolute top-2 right-3 w-7 h-4 transition-colors duration-300 hover:text-[#666] cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className=""
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default DeactivateUserModal;
