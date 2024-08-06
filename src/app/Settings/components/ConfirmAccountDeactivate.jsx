import { Divider } from "keep-react";
import React, { useState } from "react";
import { useStateShareContext } from "../../../Context/StateContext";
import { Warning, X } from "phosphor-react";
import { TriangleAlert } from "lucide-react";
import instance from "../../../axios/instance";
import { toast } from "react-toastify";
import { deleteCookie } from "../../../Cookies/Cookie";
import { useNavigate } from "react-router-dom";

const ConfirmAccountDeactivate = () => {
  const { setShowDeactivateAccountModal } = useStateShareContext();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleDeactivateAccount = async () => {
    setLoading(true);
    try {
      const response = await instance.post("/auth/deactivate-account/");

      toast.success(
        "Account deactivated. You can login anytime to activate it."
      );
      setShowDeactivateAccountModal(false);
      // clearing all storage
      localStorage.clear();
      deleteCookie("access_token");
      deleteCookie("refresh_token");
      navigate("/");
    } catch (error) {
      if (error.response && error.response.status) {
        const status = error.response.status;
        const message = error.response.data;

        switch (status) {
          case 500:
            toast.error(`Internal server error`);
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
      <div className="text-[1.3rem]  px-4 flex items-center justify-center py-3 ">
        <p className=" text-lg md:text-xl font-semibold"> Deactivate account</p>
        {/* close button */}
        {/* <button
          onClick={() => setShowDeactivateAccountModal(false)}
          className="rounded-full hover:bg-neutral-200 dark:hover:bg-gray-600 p-2"
        >
          <X size={24} />
        </button> */}
      </div>
      <Divider className="dark:hidden" color="primary" />
      <Divider className="hidden dark:block" color="secondary" />
      <div className="flex justify-center mt-2">
        <div className="size-[3.5rem] rounded-full bg-orange-100 grid place-items-center text-orange-500">
          <TriangleAlert size={27} />
        </div>
      </div>
      {/* central section*/}
      <div className="p-3">
        <p className="text-lg md:text-xl font-semibold text-center dark:text-white text-gray-700">
          Are you sure ?
        </p>
        <p className="text-center dark:text-white text-gray-700 text-md">
          You can reactivate it anytime by logging back in.
        </p>
      </div>
      <Divider />
      <div className="flex justify-between py-3 px-4">
        <div></div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowDeactivateAccountModal(false)}
            className="border-[1px] border-orange-500 py-1 px-3 rounded-2xl hover:bg-gray-100
             font-medium text-orange-500 transition-background duration-300 flex items-center"
          >
            <span>Cancel</span>
          </button>
          <button
            onClick={handleDeactivateAccount}
            className={` bg-orange-500 hover:bg-orange-600
              py-1 px-3 rounded-2xl font-medium text-white transition-background duration-300 flex items-center`}
            disabled={loading}
          >
            <span>{loading ? "loading..." : "Deactivate"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmAccountDeactivate;
