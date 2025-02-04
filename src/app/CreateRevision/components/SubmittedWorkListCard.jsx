import React from "react";
import { useNavigate } from "react-router-dom";
import formatDate from "../../Home/components/datetime/formatDate";
import { Divider } from "keep-react";
import { useAdminContext } from "../../../Context/AdminContext";
import { Minus } from "lucide-react";
import relativeTime from "../../Home/components/datetime/RelativeTime";

const SubmittedWorkListCard = ({ work, sender, created_at }) => {
  const { setWork, setWorkCode, setShowChooseWorkModal } = useAdminContext();

  return (
    <>
      <div
        className=" relative pt-2 pb-4 px-[0.7rem] hover:bg-[#f1f1f1] dark:hover:bg-darkMode-cardHover
     transition-colors duration-300 dark:bg-darkMode-cardBg  cursor-pointer"
        onClick={() => {
          setWork(work.id);
          setWorkCode(work.work_code);
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
            {work.work_code}
          </span>
        </p>
        <p className="text-sm">
          by{" "}
          <strong>
            {sender.id ? (
              `${sender.first_name} ${sender.last_name}`
            ) : (
              <Minus className="ml-[30%]" size={18} />
            )}
          </strong>
        </p>
        <p className="text-sm text-blue-500">
          {relativeTime(created_at)}{" "}
          <span className="text-black">({formatDate(created_at)}).</span>
        </p>
      </div>
      <Divider className="dark:hidden" color="primary" />
      <Divider className="hidden dark:block" color="secondary" />
    </>
  );
};

export default SubmittedWorkListCard;
