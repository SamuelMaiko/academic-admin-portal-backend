import React from "react";
import ListComponent from "./ListComponent";
import formatDate from "../../Home/components/datetime/formatDate";
import { useNavigate } from "react-router-dom";

const WordsWritten = ({ submittedWork, setSubmittedWork }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col pt-[1rem] bg-gray-100 dark:bg-darkMode-bars 
     px-[1rem] md:px-[2rem] pb-[1rem]"
    >
      <h1 className=" font-semibold mb-4">Words written</h1>
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
                    <strong>{item.words}</strong> words of Work{" "}
                    <strong
                      className="cursor-pointer hover:underline"
                      onClick={() =>
                        navigate(`/work/${item.submission.work.id}`)
                      }
                    >
                      {item.work_code}
                    </strong>{" "}
                    on <i> {formatDate(item.submission.created_at)}.</i>
                  </p>
                }
              />
            );
          })}
      </ul>
    </div>
  );
};

export default WordsWritten;
