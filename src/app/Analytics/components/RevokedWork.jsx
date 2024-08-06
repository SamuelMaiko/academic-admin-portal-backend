import React, { useEffect, useState } from "react";
import ListComponent from "./ListComponent";
import instance from "../../../axios/instance";
import { toast } from "react-toastify";
import formatDate from "../../Home/components/datetime/formatDate";
import { useNavigate } from "react-router-dom";

const RevokedWork = () => {
  const [loading, setLoading] = useState(false);
  const [revokedWork, setRevokedWork] = useState(false);
  const navigate = useNavigate();

  const getRevokedWork = async () => {
    setLoading(true);
    try {
      const response = await instance.get(`/work/revoked/`);
      setRevokedWork(response.data);
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
    // getRevokedWork();
  }, []);
  return (
    <div className="flex flex-col pt-[1rem] bg-gray-100 dark:bg-darkMode-bars  px-[1rem] md:px-[2rem] pb-[1rem]">
      <h1 className=" font-semibold mb-4">Revoked work</h1>
      <ul className="text-[15px] ">
        <p
          className={` ${
            revokedWork && revokedWork.length == 0 ? "" : "hidden"
          } text-gray-600 dark:text-gray-200`}
        >
          No work found.
        </p>
        {revokedWork &&
          revokedWork.map((item, index) => {
            return (
              <ListComponent
                key={index}
                index={index}
                content={
                  <p>
                    Work{" "}
                    <strong
                      className="cursor-pointer hover:underline"
                      onClick={() => navigate(`/work/${item.work.id}`)}
                    >
                      {item.work.work_code}
                    </strong>{" "}
                    revoked on <i> {formatDate(item.created_at)}.</i>
                  </p>
                }
              />
            );
          })}
      </ul>
    </div>
  );
};

export default RevokedWork;
