import { Divider } from "keep-react";
import React, { useState } from "react";
import { TriangleAlert } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAdminContext } from "../../../Context/AdminContext";
import deactivateAccount from "../api/deactivateAccount";

const ConfirmUserDeactivate = () => {
  const { setShowDeactivateUserModal, accountToDeactivate, setIsActive } =
    useAdminContext();
  const [loading, setLoading] = useState(false);

  const handleDeactivate = () => {
    setLoading(true);
    deactivateAccount(accountToDeactivate).then((data) => {
      setLoading(false);
      setIsActive(false);
      setShowDeactivateUserModal(false);
    });
  };

  return (
    <div
      className="absolute w-full md:w-[31rem] px-2 left-[50%] translate-x-[-50%] top-[21%] md:top-[30%] md:rounded-lg
     bg-bgcolor dark:bg-darkMode-body"
    >
      <div className="text-[1.3rem]  px-4 flex items-center justify-center py-3 ">
        <p className=" text-[17px] lg:text-[18px] font-semibold">
          {" "}
          Deactivate account
        </p>
        {/* close button */}
        {/* <button
          onClick={() => setShowDeactivateUserModal(false)}
          className="rounded-full hover:bg-neutral-200 dark:hover:bg-gray-600 p-2"
        >
          <X size={24} />
        </button> */}
      </div>
      <Divider className="dark:hidden" color="primary" />
      <Divider className="hidden dark:block" color="secondary" />
      <div className="flex justify-center mt-2 md:pt-[2rem]">
        <div className="size-[3.5rem] rounded-full bg-orange-100 grid place-items-center text-orange-500">
          <TriangleAlert size={27} />
        </div>
      </div>
      {/* central section*/}
      <div className="p-3 h-[7rem] md:h-[10rem]">
        <p className="text-[16px] lg:text-[17px] font-semibold text-center dark:text-white text-gray-700 mb-3">
          Are you sure ?
        </p>
        <p className="text-center dark:text-white text-gray-700 text-[14px] lg:text-[15px]">
          This will temporarily disable the user's access. They won't be able to
          log in until reactivated.
        </p>
      </div>
      <Divider />
      <div className="flex justify-between py-3 px-4">
        <div></div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowDeactivateUserModal(false)}
            className="border-[1px] border-orange-500 py-1 px-3 rounded-2xl hover:bg-gray-100
             font-medium text-orange-500 transition-background duration-300 flex items-center text-[13px] lg:text-[14px]"
          >
            <span>Cancel</span>
          </button>
          <button
            onClick={handleDeactivate}
            className={` bg-orange-500 hover:bg-orange-600 text-[13px] lg:text-[14px]
              py-1 px-3 rounded-2xl font-medium text-white transition-background duration-300 flex items-center`}
            disabled={loading}
          >
            <span>{loading ? "Deactivating..." : "Deactivate"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmUserDeactivate;
