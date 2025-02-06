import React from "react";
import { useStateShareContext } from "../../Context/StateContext";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../app/Home/components/ui/Button";
import {
  Binoculars,
  BookmarkSimple,
  Briefcase,
  FileDoc,
  House,
  Pen,
} from "phosphor-react";
import { useNotificationContext } from "../../Context/NotificationContext";
import {
  FileEdit,
  FileText,
  Inbox,
  LayoutDashboard,
  UserCircle,
} from "lucide-react";

const ButtonLinks = () => {
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
            navigate("/dashboard");
            setShowMobileSideBar(false);
          }}
          icon={
            /^\/dashboard(\/|$)/.test(pathname) ? (
              <LayoutDashboard
                size={20}
                weight="fill"
                // style={{ fill: "currentColor", stroke: "none" }}
              />
            ) : (
              <LayoutDashboard size={20} weight="fill" />
            )
          }
          title={"Dashboard"}
          className={`${
            /^\/dashboard(\/|$)/.test(pathname)
              ? " dark:text-white text-black"
              : "dark:text-neutral-400 text-neutral-400"
          } w-full`}
        />
      </div>
      {/* work management section button */}
      <div>
        <Button
          onClick={() => {
            navigate("/manage-work");
            setShowMobileSideBar(false);
          }}
          icon={
            /^\/manage-work(\/|$)/.test(pathname) ? (
              <FileText size={20} />
            ) : (
              <FileText size={20} weight="fill" />
            )
          }
          title={"Work"}
          className={`${
            /^\/manage-work(\/|$)/.test(pathname)
              ? " dark:text-white text-black"
              : "dark:text-neutral-400 text-neutral-400"
          } w-full`}
        />
      </div>
      {/* user management section button */}
      <div>
        <Button
          onClick={() => {
            navigate("/manage-users");
            setShowMobileSideBar(false);
          }}
          icon={
            /^\/manage-users(\/|$)/.test(pathname) ? (
              <UserCircle
                size={20}
                weight="fill"
                // style={{ fill: "currentColor", stroke: "none" }}
              />
            ) : (
              <UserCircle size={20} weight="fill" />
            )
          }
          title={"Users"}
          className={`${
            /^\/manage-users(\/|$)/.test(pathname)
              ? " dark:text-white text-black"
              : "dark:text-neutral-400 text-neutral-400"
          } w-full`}
        />
      </div>
      {/* registration codes section button */}
      {/* <div>
        <Button
          onClick={() => navigate("/reg-codes")}
          icon={
            /^\/reg-codes(\/|$)/.test(pathname) ? (
              <LayoutDashboard
                size={20}
                weight="fill"
                style={{ fill: "currentColor", stroke: "none" }}
              />
            ) : (
              <LayoutDashboard size={20} weight="fill" />
            )
          }
          title={"Registration Codes"}
          className={`${
            /^\/reg-codes(\/|$)/.test(pathname) ? "text-neutral-500" : ""
          } w-full whitespace-nowrap`}
        />
      </div> */}
      {/* revisions section button */}
      <div className="relative">
        <Button
          onClick={() => {
            navigate("/revisions");
            setShowMobileSideBar(false);
          }}
          icon={
            /^\/revisions(\/|$)/.test(pathname) ? (
              <FileEdit size={20} weight="fill" />
            ) : (
              <FileEdit size={20} weight="fill" />
            )
          }
          title={"Revisions"}
          className={`${
            /^\/revisions(\/|$)/.test(pathname)
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
      <div className="relative">
        <Button
          onClick={() => {
            navigate("/submissions");
            setShowMobileSideBar(false);
          }}
          icon={
            /^\/submissions(\/|$)/.test(pathname) ? (
              <Inbox size={20} weight="fill" />
            ) : (
              <Inbox size={20} weight="fill" />
            )
          }
          title={"Submissions"}
          className={`${
            /^\/submissions(\/|$)/.test(pathname)
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
    </div>
  );
};

export default ButtonLinks;
