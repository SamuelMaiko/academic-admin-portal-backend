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
import { LayoutDashboard } from "lucide-react";

const ButtonLinks = () => {
  const { setShowMobileSideBar } = useStateShareContext();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { notificationsCount } = useNotificationContext();

  return (
    <div className={` w-full h-full mt-8 px-4`}>
      {/* home  button */}
      <div>
        <Button
          onClick={() => {
            setShowMobileSideBar(false);
            navigate("/home");
          }}
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
          onClick={() => {
            setShowMobileSideBar(false);
            navigate("/analytics");
          }}
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
      <p className={` text-left pl-3 text-sm my-5 hidden`}>Pages</p>
      {/* assigned work button */}
      <div className="relative">
        <Button
          onClick={() => {
            setShowMobileSideBar(false);
            navigate("/assigned-work");
          }}
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
          onClick={() => {
            setShowMobileSideBar(false);
            navigate("/uptaken-work");
          }}
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
          onClick={() => {
            setShowMobileSideBar(false);
            navigate("/revisions");
          }}
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
          onClick={() => {
            setShowMobileSideBar(false);
            navigate("/bookmarks");
          }}
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
          onClick={() => {
            setShowMobileSideBar(false);
            navigate("/submissions");
          }}
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

export default ButtonLinks;
