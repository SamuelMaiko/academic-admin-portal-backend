import { Button, Divider } from "keep-react";
import React, { useState } from "react";
import { GraduationCap, BookmarkSimple } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { useStateShareContext } from "../../../Context/StateContext";
import BookmarkToggle from "./BookmarkToggle";
import { toast } from "react-toastify";
import Countdown from "react-countdown";
import CountdownToDate from "./CountdownToDate";
import formatDate from "./datetime/formatDate";
import relativeTime from "./datetime/RelativeTime";
import TakeUpWorkButton from "./TakeUpWorkButton";

const WorkCard = ({
  id,
  is_bookmarked,
  deadline,
  type,
  words,
  work_code,
  created_at,
}) => {
  const navigate = useNavigate();
  const { darkMode } = useStateShareContext();
  const [isBookmarked, setisBookmarked] = useState(is_bookmarked);

  return (
    <>
      <div
        onClick={() => navigate(`/work/${id}`)}
        className={`relative work-card pl-3 font-opensans py-4 ${
          darkMode ? "dark" : ""
        } hover:bg-[#f1f1f1] transition-colors duration-300 dark:bg-darkMode-cardBg dark:hover:bg-darkMode-cardHover`}
      >
        <p className="text-[11px] text-[#676767] dark:text-darkMode-cardText">
          Posted {relativeTime(created_at)}
        </p>
        <p className="category text-[20px] text-[#181818] dark:text-darkMode-cardText font-semibold">
          {type}
        </p>
        <p className="text-[15px] my-2 text-[#676767] dark:text-darkMode-cardText">
          {words} words
        </p>
        <p className=" mt-2 text-[#181818] text-sm font-medium dark:text-darkMode-cardText">
          Due on {formatDate(deadline)}
        </p>
        <p>
          <CountdownToDate deadline={deadline} />
        </p>
        {/* <p className="text-xs font-bold my-2 text-[#181818] dark:text-darkMode-cardText">
          01:23:03 to deadline
        </p> */}
        <div
          className="px-2 py-1 mt-1 w-fit rounded-2xl bg-[#E9E9E9] dark:bg-neutral-500
           text-[#676767] dark:text-darkMode-cardText"
        >
          {work_code}
        </div>
        <TakeUpWorkButton id={id && id} />

        {/* Bookmark button */}
        <BookmarkToggle
          isBookmarked={isBookmarked}
          setisBookmarked={setisBookmarked}
          id={id}
        />
      </div>
      <Divider className="dark:hidden" color="primary" />
      <Divider className="hidden dark:block" color="secondary" />
    </>
  );
};

export default WorkCard;
