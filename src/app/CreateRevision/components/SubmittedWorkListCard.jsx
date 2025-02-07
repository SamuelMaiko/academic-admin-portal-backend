import React from "react";
import { useNavigate } from "react-router-dom";
import { Divider } from "keep-react";
import { useAdminContext } from "../../../Context/AdminContext";
import { Minus } from "lucide-react";
import formatDate from "../../../utils/formatDate";
import relativeTime from "../../../utils/RelativeTime";

const SubmittedWorkListCard = ({ work, sender, created_at }) => {
  const { setWork, setWorkCode, setShowChooseWorkModal } = useAdminContext();

  return (
    <>
      <div
        className=" relative pt-2 pb-4 px-[0.7rem] hover:bg-[#f1f1f1] dark:hover:bg-darkMode-cardHover
     transition-colors duration-300 dark:bg-darkMode-cardBg  cursor-pointer text-[15px] lg:text-[16px]"
        onClick={() => {
          setWork(work.id);
          setWorkCode(work.work_code);
          setShowChooseWorkModal(false);
        }}
      >
        <div className="flex mb-3 items-center gap-1">
          <p className="">
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
          <p className="text-sm flex gap-1">
            by{" "}
            <strong>
              {sender.id ? (
                ` ${sender.first_name} ${sender.last_name}`
              ) : (
                <Minus className="ml-[30%]" size={18} />
              )}
            </strong>
          </p>
        </div>
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
