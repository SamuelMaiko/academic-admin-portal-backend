import React from "react";
import { useStateShareContext } from "../../../Context/StateContext";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "./ui/Button";
import {
  Binoculars,
  BookmarkSimple,
  Briefcase,
  FileDoc,
  House,
  Pen,
} from "phosphor-react";
import { LayoutDashboard } from "lucide-react";
import { useNotificationContext } from "../../../Context/NotificationContext";
// import { FileCheck } from "lucide-react";

const SideBarLinks = () => {
  const { shrinkSideBar } = useStateShareContext();
  const { notificationsCount } = useNotificationContext();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <div
      className={`${
        shrinkSideBar ? "flex items-center flex-col" : ""
      } w-full h-full px-[2rem] mt-8 `}
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
                style={{ fill: "currentColor", stroke: "none" }}
              />
            ) : (
              <LayoutDashboard size={20} weight="fill" />
            )
          }
          title={"Dashboard"}
          className={`${
            /^\/dashboard(\/|$)/.test(pathname) ? "text-black" : ""
          } w-full`}
        />
      </div>
      {/* work management section button */}
      <div>
        <Button
          onClick={() => navigate("/manage-work")}
          icon={
            /^\/manage-work(\/|$)/.test(pathname) ? (
              <LayoutDashboard
                size={20}
                weight="fill"
                style={{ fill: "currentColor", stroke: "none" }}
              />
            ) : (
              <LayoutDashboard size={20} weight="fill" />
            )
          }
          title={"Work"}
          className={`${
            /^\/manage-work(\/|$)/.test(pathname) ? "text-black " : ""
          } w-full`}
        />
      </div>
      {/* user management section button */}
      <div>
        <Button
          onClick={() => navigate("/manage-users")}
          icon={
            /^\/manage-users(\/|$)/.test(pathname) ? (
              <LayoutDashboard
                size={20}
                weight="fill"
                style={{ fill: "currentColor", stroke: "none" }}
              />
            ) : (
              <LayoutDashboard size={20} weight="fill" />
            )
          }
          title={"Users"}
          className={`${
            /^\/manage-users(\/|$)/.test(pathname) ? "text-black" : ""
          } w-full`}
        />
      </div>
      {/* registration codes section button */}
      <div>
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
            /^\/reg-codes(\/|$)/.test(pathname) ? "text-black" : ""
          } w-full whitespace-nowrap`}
        />
      </div>
      {/* revisions section button */}
      <div className="relative">
        <Button
          onClick={() => navigate("/revisions")}
          icon={
            /^\/revisions(\/|$)/.test(pathname) ? (
              <LayoutDashboard
                size={20}
                weight="fill"
                style={{ fill: "currentColor", stroke: "none" }}
              />
            ) : (
              <LayoutDashboard size={20} weight="fill" />
            )
          }
          title={"Revisions"}
          className={`${
            /^\/revisions(\/|$)/.test(pathname) ? "text-black" : ""
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
              <LayoutDashboard
                size={20}
                weight="fill"
                style={{ fill: "currentColor", stroke: "none" }}
              />
            ) : (
              <LayoutDashboard size={20} weight="fill" />
            )
          }
          title={"Submissions"}
          className={`${
            /^\/submissions(\/|$)/.test(pathname) ? "text-black" : ""
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
