import { Divider } from "keep-react";
import { TriangleAlert } from "lucide-react";
import React, { useState } from "react";
import { useAdminContext } from "../../../../Context/AdminContext";
import deleteWork from "../api/deleteWork";
import { useNavigate } from "react-router-dom";

const ConfirmDeleteWork = () => {
  const { setShowDeleteWorkModal, workToDelete } = useAdminContext();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteWork(workToDelete).then((data) => {
      console.log(data);
      navigate("/manage-work");
      setShowDeleteWorkModal(false);
    });
  };

  return (
    <div
      className="absolute w-full md:w-[30rem] px-2 left-[50%] translate-x-[-50%] top-[30%] rounded-lg
bg-bgcolor dark:bg-darkMode-body"
    >
      <div className="text-[1.3rem]  px-4 flex items-center justify-center py-3 ">
        <p className="text-[17px] lg:text-[18px] font-semibold"> Delete work</p>
      </div>
      <Divider className="dark:hidden" color="primary" />
      <Divider className="hidden dark:block" color="secondary" />
      <div className="flex justify-center mt-2">
        <div className="size-[3.5rem] rounded-full bg-red-100 grid place-items-center text-red-500">
          <TriangleAlert size={27} />
        </div>
      </div>
      {/* <Divider className="dark:hidden" color="primary" />
<Divider className="hidden dark:block" color="secondary" /> */}
      {/* central section*/}
      <div className="p-3 h-[10rem]">
        <p className="text-[16px] lg:text-[17px] font-semibold text-center dark:text-white text-gray-700">
          Are you sure ?
        </p>
        <p className="text-center dark:text-white text-gray-700 mt-4 text-[14px] lg:text-[15px]">
          This action cannot be undone. All the work related details e.g images,
          files and writer's work record will also be deleted.
        </p>
      </div>
      <Divider />
      <div className="flex justify-between py-3 px-4">
        <div></div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowDeleteWorkModal(false)}
            className="border-[1px] border-red-500 py-1 px-3 rounded-2xl hover:bg-gray-100
       font-medium text-red-500 transition-background duration-300 flex items-center text-[13px] lg:text-[14px]"
          >
            <span>Cancel</span>
          </button>
          <button
            onClick={handleDelete}
            className={` bg-red-500 hover:bg-red-600
        py-1 px-3 rounded-2xl font-medium text-white transition-background duration-300 flex items-center text-[13px] lg:text-[14px]`}
            // disabled={loading}
          >
            <span>{loading ? "Deleting..." : "Delete"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteWork;
