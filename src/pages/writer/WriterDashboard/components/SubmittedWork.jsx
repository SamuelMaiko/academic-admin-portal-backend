import React, { useEffect, useState } from "react";
import ListComponent from "./ListComponent";
import formatDate from "../../WorkFeed/components/datetime/formatDate";
import { useNavigate } from "react-router-dom";

const SubmittedWork = ({ submittedWork, setSubmittedWork }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col pt-[1rem] bg-gray-100 dark:bg-darkMode-bars 
    px-[1rem] md:px-[2rem] pb-[1rem]"
    >
      <h1 className=" font-semibold mb-4 text-[16px] lg:text-xl">
        Submitted work
      </h1>
      <ul className="text-[15px] ">
        <p
          className={` ${
            submittedWork && submittedWork.length == 0 ? "" : "hidden"
          } text-gray-600 dark:text-gray-200`}
        >
          No work found.
        </p>
        {submittedWork &&
          submittedWork.map((item, index) => {
            return (
              <ListComponent
                key={index}
                index={index}
                content={
                  <p>
                    Work{" "}
                    <strong
                      className="cursor-pointer hover:underline"
                      onClick={() =>
                        navigate(`/work/${item.submission.work.id}`)
                      }
                    >
                      {item.work_code}
                    </strong>{" "}
                    submitted on{" "}
                    <i> {formatDate(item.submission.created_at)}.</i>
                  </p>
                }
              />
            );
          })}
      </ul>
    </div>
  );
};

export default SubmittedWork;
