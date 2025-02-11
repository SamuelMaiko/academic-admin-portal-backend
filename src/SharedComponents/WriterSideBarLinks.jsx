import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FileEdit,
  FileText,
  Inbox,
  LayoutDashboard,
  Newspaper,
  UserCircle,
} from "lucide-react";
import { useStateShareContext } from "../Context/StateContext";
import Button from "./Button";
import { Binoculars, BookmarkSimple, Briefcase, Pen } from "phosphor-react";

const WriterSideBarLinks = () => {
  const { shrinkSideBar } = useStateShareContext();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <div
      className={`${
        shrinkSideBar ? "flex items-center flex-col" : ""
      } w-full h-full px-[2rem] mt-8 pt-[1rem]`}
    >
      {/* writer dashboard  button */}
      <div>
        <Button
          onClick={() => navigate("/my-dashboard")}
          icon={
            /^\/my-dashboard(\/|$)/.test(pathname) ? (
              <LayoutDashboard
                size={20}
                weight="fill"
                // style={{ fill: "currentColor", stroke: "none" }}
              />
            ) : (
              <LayoutDashboard size={20} weight="fill" />
            )
          }
          title={"My Dashboard"}
          className={`${
            /^\/my-dashboard(\/|$)/.test(pathname)
              ? " dark:text-white text-black"
              : "dark:text-neutral-400 text-neutral-400"
          } w-full`}
        />
      </div>
      {/* feed button */}
      <div>
        <Button
          onClick={() => navigate("/work-feed")}
          icon={
            /^\/work-feed(\/|$)/.test(pathname) ? (
              <Newspaper
                size={20}
                weight="fill"
                // style={{ fill: "currentColor", stroke: "none" }}
              />
            ) : (
              <Newspaper size={20} weight="fill" />
            )
          }
          title={"Work Feed"}
          className={`${
            /^\/work-feed(\/|$)/.test(pathname)
              ? " dark:text-white text-black"
              : "dark:text-neutral-400 text-neutral-400"
          } w-full`}
        />
      </div>
      {/* revisions section button */}
      <div className="relative">
        <Button
          onClick={() => navigate("/assigned-work")}
          icon={
            /^\/assigned-work(\/|$)/.test(pathname) ? (
              <Pen size={20} />
            ) : (
              <Pen size={20} />
            )
          }
          title={"Assigned Work"}
          className={`${
            /^\/assigned-work(\/|$)/.test(pathname)
              ? " dark:text-white text-black"
              : "dark:text-neutral-400 text-neutral-400"
          } w-full`}
        />
        {/* counter */}
        <div
          className="absolute top-1/2 -translate-y-1/2 right-[0.5rem] size-[0.95rem]
           grid place-items-center font-semibold bg-red-500 text-white rounded-full text-[10px]"
        >
          {0}
        </div>
      </div>
      {/* uptaken work section button */}
      <div>
        <Button
          onClick={() => navigate("/uptaken-work")}
          icon={
            /^\/uptaken-work(\/|$)/.test(pathname) ? (
              <Briefcase
                size={20}
                // weight="fill"
                // style={{ fill: "currentColor", stroke: "none" }}
              />
            ) : (
              <Briefcase
                size={20}
                // weight="fill"
              />
            )
          }
          title={"Uptaken Work"}
          className={`${
            /^\/uptaken-work(\/|$)/.test(pathname)
              ? " dark:text-white text-black"
              : "dark:text-neutral-400 text-neutral-400"
          } w-full`}
        />
      </div>
      {/* revisions section button */}
      <div className="relative">
        <Button
          onClick={() => navigate("/work-revisions")}
          icon={
            /^\/work-revisions(\/|$)/.test(pathname) ? (
              <Binoculars size={20} />
            ) : (
              <Binoculars size={20} />
            )
          }
          title={"Revisions"}
          className={`${
            /^\/work-revisions(\/|$)/.test(pathname)
              ? " dark:text-white text-black"
              : "dark:text-neutral-400 text-neutral-400"
          } w-full`}
        />
        {/* counter */}
        <div
          className="absolute top-1/2 -translate-y-1/2 right-[0.5rem] size-[0.95rem]
           grid place-items-center font-semibold bg-red-500 text-white rounded-full text-[10px]"
        >
          {0}
        </div>
      </div>

      {/* submissions section button */}
      <div>
        <Button
          onClick={() => navigate("/my-submissions")}
          icon={
            /^\/my-submissions(\/|$)/.test(pathname) ? (
              <FileEdit size={20} weight="fill" />
            ) : (
              <FileEdit size={20} weight="fill" />
            )
          }
          title={"My Submissions"}
          className={`${
            /^\/my-submissions(\/|$)/.test(pathname)
              ? " dark:text-white text-black"
              : "dark:text-neutral-400 text-neutral-400"
          } w-full`}
        />
      </div>
      {/* bookmarks section button */}
      <div>
        <Button
          onClick={() => navigate("/bookmarks")}
          icon={
            /^\/bookmarks(\/|$)/.test(pathname) ? (
              <BookmarkSimple size={20} />
            ) : (
              <BookmarkSimple size={20} />
            )
          }
          title={"Bookmarks"}
          className={`${
            /^\/bookmarks(\/|$)/.test(pathname)
              ? " dark:text-white text-black"
              : "dark:text-neutral-400 text-neutral-400"
          } w-full`}
        />
      </div>
    </div>
  );
};

export default WriterSideBarLinks;
