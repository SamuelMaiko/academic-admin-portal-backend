import { Divider } from "keep-react";
import React, { useState } from "react";
import { useStateShareContext } from "../../../../Context/StateContext";

const DeleteUserModal = () => {
  const account_status = "Active";
  const { showDeleteModal, setShowDeleteModal } = useStateShareContext();
  return (
    <div
      className={`${
        showDeleteModal ? "" : "hidden"
      } bg-[rgba(0,0,0,0.3)] fixed z-30 inset-0`}
    >
      <div className="absolute w-[460px] py-5  px-2 left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] bg-bgcolor">
        <div className="text-[1.3rem]  pl-5 text-chocolate">
          Delete the user permanently?
        </div>
        <Divider />
        <div className="flex justify-between mt-7 px-4">
          <button
            onClick={() => setShowDeleteModal(false)}
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
            <span>Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteUserModal;
