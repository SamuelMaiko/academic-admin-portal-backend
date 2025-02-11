import React, { useEffect, useState } from "react";
import ListComponent from "./ListComponent";
import instance from "../../../../axios/instance";
import { toast } from "react-toastify";
import formatDate from "../../WorkFeed/components/datetime/formatDate";
import { useNavigate } from "react-router-dom";

const QualityIssues = () => {
  const [loading, setLoading] = useState(false);
  const [qualityIssuesWork, setQualityIssuesWork] = useState([]);
  const navigate = useNavigate();

  const getQualityIssuesWork = async () => {
    setLoading(true);
    try {
      const response = await instance.get(`/work/quality-issues-work/`);
      setQualityIssuesWork(response.data);
    } catch (error) {
      if (error.response && error.response.status) {
        const status = error.response.status;
        const message = error.response.data;

        switch (status) {
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

  useEffect(() => {
    getQualityIssuesWork();
  }, []);

  return (
    <div className="flex flex-col pt-[1rem] bg-gray-100 dark:bg-darkMode-bars px-[1rem] md:px-[2rem] pb-[3rem]">
      <h1 className=" font-semibold mb-4 text-[15px] lg:text-[17px]">
        Quality issues
      </h1>
      <ul className="text-[15px] ">
        <p
          className={` ${
            qualityIssuesWork && qualityIssuesWork.length == 0 ? "" : "hidden"
          } text-gray-600 dark:text-gray-200`}
        >
          No work found.
        </p>
        {qualityIssuesWork &&
          qualityIssuesWork.map((item, index) => {
            return (
              <ListComponent
                key={index}
                index={index}
                content={
                  <p>
                    Poor quality for work{" "}
                    <strong
                      className="cursor-pointer hover:underline"
                      onClick={() => navigate(`/work/${item.work.id}`)}
                    >
                      {item.work.work_code}
                    </strong>{" "}
                    on <i> {formatDate(item.created_at)}.</i>
                  </p>
                }
              />
            );
          })}
      </ul>
    </div>
  );
};

export default QualityIssues;
