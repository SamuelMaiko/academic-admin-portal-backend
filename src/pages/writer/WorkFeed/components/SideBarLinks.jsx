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
      {/* home  button */}
      <div>
        <Button
          onClick={() => navigate("/home")}
          icon={
            pathname === "/home" ? (
              <House size={20} weight="fill" />
            ) : (
              <House size={20} />
            )
          }
          title={"Home"}
          className={`${
            pathname === "/home" ? "text-sidebartext-hover" : ""
          } w-full`}
        />
      </div>
      {/* writer dashboard  button */}
      <div>
        <Button
          onClick={() => navigate("/analytics")}
          icon={
            pathname === "/analytics" ? (
              <LayoutDashboard
                size={20}
                weight="fill"
                style={{ fill: "currentColor", stroke: "none" }}
              />
            ) : (
              <LayoutDashboard size={20} weight="fill" />
            )
          }
          title={"My Dashboard"}
          className={`${
            pathname === "/analytics" ? "text-sidebartext-hover" : ""
          } w-full`}
        />
      </div>
      <p
        className={`${shrinkSideBar ? "" : "hidden"} text-center text-sm my-5`}
      >
        Pages
      </p>
      {/* assigned work button */}
      <div className="relative">
        <Button
          onClick={() => navigate("/assigned-work")}
          icon={
            pathname === "/assigned-work" ? (
              <Pen size={20} weight="fill" />
            ) : (
              <Pen size={20} />
            )
          }
          title={"Assigned Work"}
          className={`${
            pathname === "/assigned-work" ? "text-sidebartext-hover" : ""
          } w-full`}
        />
        {/* counter */}
        <div
          className="absolute top-1/2 -translate-y-1/2 right-[0.5rem] size-[0.95rem]
           grid place-items-center font-semibold bg-red-500 text-white rounded-full text-[10px]"
        >
          {notificationsCount.assigned_work}
        </div>
      </div>
      {/* uptaken work button */}
      <div className="relative">
        <Button
          onClick={() => navigate("/uptaken-work")}
          icon={
            pathname === "/uptaken-work" ? (
              <Briefcase size={20} weight="fill" />
            ) : (
              <Briefcase size={20} />
            )
          }
          title={"Uptaken Work"}
          className={`${
            pathname === "/uptaken-work" ? "text-sidebartext-hover" : ""
          }  w-full`}
        />
        {/* counter */}
        <div
          className="absolute top-1/2 -translate-y-1/2 right-[0.5rem] size-[0.95rem]
           grid place-items-center font-semibold bg-red-500 text-white rounded-full text-[10px]"
        >
          {notificationsCount.uptaken_work}
        </div>
      </div>
      {/* revisions button */}
      <div className="relative">
        <Button
          onClick={() => navigate("/revisions")}
          icon={
            pathname === "/revisions" ? (
              <Binoculars size={20} weight="fill" />
            ) : (
              <Binoculars size={20} />
            )
          }
          title={"Revisions"}
          className={`${
            pathname === "/revisions" ? "text-sidebartext-hover" : ""
          } w-full`}
        />
        {/* counter */}
        <div
          className={`absolute top-1/2 -translate-y-1/2 right-[0.5rem] size-[0.95rem]
           grid place-items-center font-semibold bg-red-500 text-white rounded-full text-[10px] `}
        >
          {notificationsCount.revisions}
        </div>
      </div>
      {/* bookmark button */}
      <div>
        <Button
          onClick={() => navigate("/bookmarks")}
          icon={
            pathname === "/bookmarks" ? (
              <BookmarkSimple size={20} weight="fill" />
            ) : (
              <BookmarkSimple size={20} />
            )
          }
          title={"Bookmarks"}
          className={`${
            pathname === "/bookmarks" ? "text-sidebartext-hover" : ""
          } w-full`}
        />
      </div>
      {/* submissions button */}
      <div>
        <Button
          onClick={() => navigate("/submissions")}
          icon={
            pathname === "/submissions" ? (
              <FileDoc size={20} weight="fill" />
            ) : (
              <FileDoc size={20} />
            )
          }
          title={"Submissions"}
          className={`${
            pathname === "/submissions" ? "text-sidebartext-hover" : ""
          } w-full`}
        />
      </div>
    </div>
  );
};

export default SideBarLinks;
