import React from "react";
import { useStateShareContext } from "../../Context/StateContext";
import { useLocation, useNavigate } from "react-router-dom";
import { useNotificationContext } from "../../Context/NotificationContext";
import {
  FileEdit,
  FileText,
  Inbox,
  LayoutDashboard,
  UserCircle,
} from "lucide-react";
import Button from "../../SharedComponents/Button";

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
                size={18}
                weight="fill"
                // style={{ fill: "currentColor", stroke: "none" }}
              />
            ) : (
              <LayoutDashboard size={18} weight="fill" />
            )
          }
          title={"Dashboard"}
          className={`${
            /^\/dashboard(\/|$)/.test(pathname)
              ? " dark:text-white text-black"
              : "dark:text-neutral-400 text-neutral-400"
          } w-full text-[12px] `}
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
                size={18}
                weight="fill"
                // style={{ fill: "currentColor", stroke: "none" }}
              />
            ) : (
              <UserCircle size={18} weight="fill" />
            )
          }
          title={"Users"}
          className={`${
            /^\/manage-users(\/|$)/.test(pathname)
              ? " dark:text-white text-black"
              : "dark:text-neutral-400 text-neutral-400"
          } w-full text-[12px]`}
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
              <FileText size={18} />
            ) : (
              <FileText size={18} weight="fill" />
            )
          }
          title={"Work"}
          className={`${
            /^\/manage-work(\/|$)/.test(pathname)
              ? " dark:text-white text-black"
              : "dark:text-neutral-400 text-neutral-400"
          } w-full text-[12px]`}
        />
      </div>

      {/* revisions section button */}
      <div className="relative">
        <Button
          onClick={() => {
            navigate("/revisions");
            setShowMobileSideBar(false);
          }}
          icon={
            /^\/revisions(\/|$)/.test(pathname) ? (
              <FileEdit size={18} weight="fill" />
            ) : (
              <FileEdit size={18} weight="fill" />
            )
          }
          title={"Revisions"}
          className={`${
            /^\/revisions(\/|$)/.test(pathname)
              ? " dark:text-white text-black"
              : "dark:text-neutral-400 text-neutral-400"
          } w-full text-[12px]`}
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
              <Inbox size={18} weight="fill" />
            ) : (
              <Inbox size={18} weight="fill" />
            )
          }
          title={"Submissions"}
          className={`${
            /^\/submissions(\/|$)/.test(pathname)
              ? " dark:text-white text-black"
              : "dark:text-neutral-400 text-neutral-400"
          } w-full text-[12px]`}
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
