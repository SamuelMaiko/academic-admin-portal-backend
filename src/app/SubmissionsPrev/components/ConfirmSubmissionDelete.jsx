import { Divider } from "keep-react";
import React, { useState } from "react";
import { useStateShareContext } from "../../../Context/StateContext";
import { X } from "phosphor-react";
import { useProgressBarContext } from "../../../Context/ProgressBarContext";
import instance from "../../../axios/instance";
import { toast } from "react-toastify";

const ConfirmSubmissionDelete = () => {
  const { setShowDeleteSubmissionModal } = useStateShareContext();
  const [loading, setLoading] = useState();
  const {
    submissions,
    setSubmissions,
    submissionToDelete,
    setSubmissionToDelete,
  } = useProgressBarContext();
  const id = submissionToDelete;

  const handleDelete = async () => {
    setLoading(true);
    try {
      const response = await instance.delete(`/submissions/${id}/delete/`);
      // removing from state
      const updatedSubmissions = submissions.filter((item) => item.id != id);
      setSubmissions(updatedSubmissions);
      // hiding modal
      setShowDeleteSubmissionModal(false);
      // setting the submission to delete to null
      setSubmissionToDelete(null);
    } catch (error) {
      if (error.response && error.response.status) {
        const status = error.response.status;
        const message = error.response.data.error;

        switch (status) {
          case 403:
            toast.warning("Not allowed.");
            break;
          case 500:
            toast.error(`Internal server error`);
            break;
          default:
            toast.error(`Error: ${message}`);
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
        <p className="text-xl font-semibold">Confirm Delete submission</p>
        {/* close button */}
        <button
          onClick={() => setShowDeleteSubmissionModal(false)}
          className="rounded-full hover:bg-neutral-200 dark:hover:bg-gray-600 p-2"
        >
          <X size={24} />
        </button>
      </div>
      <Divider className="dark:hidden" color="primary" />
      <Divider className="hidden dark:block" color="secondary" />
      {/* central section*/}
      <div className="p-3">
        <p>
          Are you sure you want to delete this submission? This action cannot be
          undone.
        </p>
      </div>
      <Divider />
      <div className="flex justify-between py-3 px-4">
        <div></div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowDeleteSubmissionModal(false)}
            className="border-[1px] border-blue-500 py-1 px-3 rounded-2xl hover:bg-gray-100
             font-medium text-blue-500 transition-background duration-300 flex items-center"
          >
            <span>Cancel</span>
          </button>
          <button
            onClick={handleDelete}
            className={` bg-blue-500 hover:bg-blue-600
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

export default ConfirmSubmissionDelete;
