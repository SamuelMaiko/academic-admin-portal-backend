import React from "react";
import { useStateShareContext } from "../../Context/StateContext";
import { useLocation, useNavigate } from "react-router-dom";
import { useNotificationContext } from "../../Context/NotificationContext";
import {
  FileEdit,
  FileText,
  Inbox,
  LayoutDashboard,
  Newspaper,
  UserCircle,
} from "lucide-react";
import Button from "../../SharedComponents/Button";
import { Binoculars, BookmarkSimple, Briefcase, Pen } from "phosphor-react";

const WriterButtonLinks = () => {
  const { setShowMobileSideBar } = useStateShareContext();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { notificationsCount } = useNotificationContext();

  return (
    <div className={` w-full h-full mt-8 px-4`}>
      {/* writer dashboard  button */}
      <div>
        <Button
          onClick={() => {
            navigate("/my-dashboard");
            setShowMobileSideBar(false);
          }}
          icon={
            /^\/my-dashboard(\/|$)/.test(pathname) ? (
              <LayoutDashboard
                size={18}
                weight="fill"
                // style={{ fill: "currentColor", stroke: "none" }}
              />
            ) : (
              <LayoutDashboard size={18} weight="fill" />
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
          onClick={() => {
            navigate("/work-feed");
            setShowMobileSideBar(false);
          }}
          icon={
            /^\/work-feed(\/|$)/.test(pathname) ? (
              <Newspaper
                size={18}
                weight="fill"
                // style={{ fill: "currentColor", stroke: "none" }}
              />
            ) : (
              <Newspaper size={18} weight="fill" />
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
          onClick={() => {
            navigate("/assigned-work");
            setShowMobileSideBar(false);
          }}
          icon={
            /^\/assigned-work(\/|$)/.test(pathname) ? (
              <Pen size={18} />
            ) : (
              <Pen size={18} />
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
          onClick={() => {
            navigate("/uptaken-work");
            setShowMobileSideBar(false);
          }}
          icon={
            /^\/uptaken-work(\/|$)/.test(pathname) ? (
              <Briefcase
                size={18}
                // weight="fill"
                // style={{ fill: "currentColor", stroke: "none" }}
              />
            ) : (
              <Briefcase
                size={18}
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
          onClick={() => {
            navigate("/work-revisions");
            setShowMobileSideBar(false);
          }}
          icon={
            /^\/work-revisions(\/|$)/.test(pathname) ? (
              <Binoculars size={18} />
            ) : (
              <Binoculars size={18} />
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
          onClick={() => {
            navigate("/my-submissions");
            setShowMobileSideBar(false);
          }}
          icon={
            /^\/my-submissions(\/|$)/.test(pathname) ? (
              <FileEdit size={18} weight="fill" />
            ) : (
              <FileEdit size={18} weight="fill" />
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
          onClick={() => {
            navigate("/bookmarks");
            setShowMobileSideBar(false);
          }}
          icon={
            /^\/bookmarks(\/|$)/.test(pathname) ? (
              <BookmarkSimple size={18} />
            ) : (
              <BookmarkSimple size={18} />
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

export default WriterButtonLinks;
