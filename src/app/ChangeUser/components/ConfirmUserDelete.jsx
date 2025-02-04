import { Divider } from "keep-react";
import React, { useState } from "react";
import { useAdminContext } from "../../../Context/AdminContext";
import { TriangleAlert } from "lucide-react";
import deleteAccount from "../api/deleteAccount";
import { useNavigate } from "react-router-dom";

const ConfirmUserDelete = () => {
  const { setShowDeleteUserModal, accountToDelete } = useAdminContext();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleDelete = () => {
    setLoading(true);
    deleteAccount(accountToDelete).then((data) => {
      console.log(data);

      setShowDeleteUserModal(false);
      setLoading(false);
      navigate("/manage-users");
    });
  };

  return (
    <div
      className="absolute w-[31rem] px-2 left-[50%] translate-x-[-50%] top-[30%] rounded-lg
     bg-bgcolor dark:bg-darkMode-body"
    >
      <div className="text-[1.3rem]  px-4 flex items-center justify-center py-3 ">
        <p className="text-lg md:text-xl font-semibold"> Delete account</p>
      </div>
      <Divider className="dark:hidden" color="primary" />
      <Divider className="hidden dark:block" color="secondary" />
      <div className="flex justify-center mt-2 pt-[2rem]">
        <div className="size-[3.5rem] rounded-full bg-red-100 grid place-items-center text-red-500">
          <TriangleAlert size={27} />
        </div>
      </div>
      {/* central section*/}
      <div className="p-3 h-[10rem]">
        <p className="text-lg md:text-xl font-semibold text-center dark:text-white text-gray-700">
          Are you sure ?
        </p>
        <p className="text-center dark:text-white text-gray-700 mt-3">
          This action cannot be undone. All the account progress and activity
          will be lost.
        </p>
      </div>
      <Divider />
      <div className="flex justify-between py-3 px-4">
        <div></div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowDeleteUserModal(false)}
            className="border-[1px] bg-gray-500 hover:bg-gray-600 py-1 px-3 rounded-2xl
             font-medium text-white transition-background duration-300 flex items-center"
          >
            <span>Cancel</span>
          </button>
          <button
            onClick={handleDelete}
            className={` bg-red-500 hover:bg-red-600
              py-1 px-3 rounded-2xl font-medium text-white transition-background duration-300 flex items-center`}
            disabled={loading}
          >
            <span>{loading ? "Deleting..." : "Delete"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmUserDelete;
