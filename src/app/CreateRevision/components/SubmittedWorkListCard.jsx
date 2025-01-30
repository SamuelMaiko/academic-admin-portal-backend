import React from "react";
import { useNavigate } from "react-router-dom";
import formatDate from "../../Home/components/datetime/formatDate";
import { Divider } from "keep-react";
import { useAdminContext } from "../../../Context/AdminContext";

const SubmittedWorkListCard = () => {
  const navigate = useNavigate();
  const { setWork, setWorkCode, setShowChooseWorkModal } = useAdminContext();

  return (
    <>
      <div
        className=" relative pt-2 pb-4 px-[0.7rem] hover:bg-[#f1f1f1] dark:hover:bg-darkMode-cardHover
     transition-colors duration-300 dark:bg-darkMode-cardBg  cursor-pointer"
        onClick={() => {
          setWork(1);
          setWorkCode("WK6767");
          setShowChooseWorkModal(false);
        }}
      >
        <p className="mb-1">
          Submission for work
          <span
            onClick={(e) => {
              e.stopPropagation();
              //   navigate(`/work/${work.id}`);
            }}
            className="ml-1 font-semibold hover:underline hover:text-blue-500
       transition-colors duration-300 cursor-pointer"
          >
            WK6767
          </span>
        </p>
        <p className="text-sm">
          by <strong>Samuel Maiko</strong>
        </p>
        <p className="text-sm">on {formatDate("2024-08-06T15:45:30Z")}.</p>
      </div>
      <Divider className="dark:hidden" color="primary" />
      <Divider className="hidden dark:block" color="secondary" />
    </>
  );
};

export default SubmittedWorkListCard;
