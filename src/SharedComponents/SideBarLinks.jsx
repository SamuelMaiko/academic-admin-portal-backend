import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FileEdit,
  FileText,
  Inbox,
  LayoutDashboard,
  UserCircle,
} from "lucide-react";
import { useStateShareContext } from "../Context/StateContext";
import Button from "./Button";

const SideBarLinks = () => {
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
          onClick={() => navigate("/dashboard")}
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
      {/* user management section button */}
      <div>
        <Button
          onClick={() => navigate("/manage-users")}
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
      {/* work management section button */}
      <div>
        <Button
          onClick={() => navigate("/manage-work")}
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

      {/* revisions section button */}
      <div className="relative">
        <Button
          onClick={() => navigate("/revisions")}
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
          onClick={() => navigate("/submissions")}
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

export default SideBarLinks;
