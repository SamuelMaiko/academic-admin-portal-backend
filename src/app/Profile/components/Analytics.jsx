import React from "react";
import {
  Eye,
  MicrosoftWordLogo,
  Note,
  Tag,
  RocketLaunch,
  XCircle,
} from "phosphor-react";
import AnalyticsBlock from "./AnalyticsBlock";
import { useNavigate } from "react-router-dom";

const Analytics = () => {
  const navigate = useNavigate();
  return (
    <div
      className="mt-3 mx-auto flex flex-col justify-center p-5 
      md:shadow-[2px_2px_13px_rgba(0,0,0,0.1)] shadow-[2px_2px_13px_rgba(0,0,0,0.07)]
     dark:shadow-gray-600 bg-white md:w-[95%] md:rounded-[1rem] dark:bg-darkMode-body
      dark:text-darkMode-text  px-6 md:px-5"
    >
      <h1 className="text-lg font-semibold mb-1">Performance preview</h1>
      <p
        onClick={() => navigate("/analytics")}
        className="mb-3 flex text-sm gap-2 items-center text-gray-600 underline w-fit
       dark:text-darkMode-gray cursor-pointer hover:text-blue-700 transition-colors duration-300"
      >
        <span>
          <Eye size={20} weight="fill" />
        </span>
        Click here to view
      </p>
      {/* <p className="mb-3 flex text-sm gap-2 items-center text-neutral-500 dark:text-darkMode-gray">
        <span>
          <Eye size={20} weight="fill" />
        </span>
        Private to you
      </p>
      <div className="grid md:grid-cols-3 gap-2 md:gap-5">
        <AnalyticsBlock
          icon={<MicrosoftWordLogo size={32} weight="fill" />}
          title="2 submitted work"
          detail="Work that has been completed and sent for review."
        />
        <AnalyticsBlock
          icon={<Note size={32} weight="fill" />}
          title="3500 words written"
          detail="The total number of words written by the user."
        />
        <AnalyticsBlock
          icon={<Tag size={32} weight="fill" />}
          title="2 assigned work"
          detail="Tasks or projects allocated to the user."
        />
        <AnalyticsBlock
          icon={<RocketLaunch size={32} weight="fill" />}
          title="0 uptaken work"
          detail="Tasks that the user has taken from feed and started working on."
        />
        <AnalyticsBlock
          icon={<XCircle size={32} weight="fill" />}
          title="0 revoked work"
          detail="Tasks that were accepted but later declined or returned by the user due to difficulty or change of mind."
        />
      </div> */}
    </div>
  );
};

export default Analytics;
