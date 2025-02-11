import { Divider } from "keep-react";
import React, { useState } from "react";
import { useStateShareContext } from "../../../../Context/StateContext";
import { X } from "phosphor-react";
import instance from "../../../../axios/instance";
import { toast } from "react-toastify";
import { useLocation, useParams } from "react-router-dom";
import { useProgressBarContext } from "../../../../Context/ProgressBarContext";

const ConfirmRevoke = () => {
  const { setShowRevokeWorkModal } = useStateShareContext();
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(false);
  const { setWorkDetails } = useProgressBarContext();

  const handleRevokeWork = async () => {
    setLoading(true);
    try {
      const id = pathname.split("/").at(-1);
      const response = await instance.post(`/work/${id}/revoke/`);
      setWorkDetails((current) => ({
        ...current,
        is_mine: false,
        has_writer: false,
        status: "Not started",
      }));
      setShowRevokeWorkModal(false);
      toast.success("Work revoked and added to default records.");
    } catch (error) {
      if (error.response && error.response.status) {
        const status = error.response.status;
        const message = error.response.data.error;

        switch (status) {
          case 400:
            toast.error("Work not found in list of allocated work.");
            break;
          case 500:
            toast.error(`Internal server error`);
            break;
          default:
            console.log(`Error: ${message}`);
            break;
        }
      } else {
        toast.error("An unexpected error occurred. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <div
      className="absolute w-[21rem]  px-2 left-[50%] translate-x-[-50%] top-[30%] rounded-lg
     bg-bgcolor dark:bg-darkMode-body"
    >
      <div className="text-[1.3rem]  px-4 flex items-center justify-between py-3 ">
        <p className="text-[16px] lg:text-[18px] font-semibold">Revoke work</p>
        {/* close button */}
        <button
          onClick={() => setShowRevokeWorkModal(false)}
          className="rounded-full hover:bg-neutral-200 dark:hover:bg-gray-600 p-2"
        >
          <X size={20} className="cursor-pointer hidden lg:block" />
          <X size={17} className="cursor-pointer lg:hidden block" />
        </button>
      </div>
      <Divider className="dark:hidden" color="primary" />
      <Divider className="hidden dark:block" color="secondary" />
      {/* central section*/}
      <div className="p-3">
        <p className="text-[15px] lg:text-[16px]">
          Are you sure you want to revoke this work?
        </p>
        <div>
          <p className="font-medium text-[15px] lg:text-[16px]">Note:</p>
          <p className="text-[13px] lg:text-[14px] text-red-400">
            <span className="font-medium ">assigned work:</span>
            admin will be informed of your action.
          </p>
          <p className="text-[13px] lg:text-[14px] text-red-400">
            <span className="font-medium">uptaken work:</span>will affect your
            score.
          </p>
        </div>
      </div>
      <Divider />
      <div className="flex justify-between py-3 px-4">
        <div></div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowRevokeWorkModal(false)}
            className="border-[1px] border-orange-500 py-1 px-3 rounded-2xl hover:bg-gray-100
             font-medium text-orange-500 transition-background duration-300 flex items-center text-[13px] lg:text-[14px]"
          >
            <span>Cancel</span>
          </button>
          <button
            onClick={handleRevokeWork}
            className={` bg-orange-500 hover:bg-orange-600 text-[13px] lg:text-[14px]
              py-1 px-3 rounded-2xl font-medium text-white transition-background duration-300 flex items-center`}
          >
            <span>{loading ? "loading..." : "Revoke"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRevoke;
