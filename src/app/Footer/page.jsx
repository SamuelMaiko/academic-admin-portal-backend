import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Footer = ({ side = false }) => {
  const { pathname } = useLocation();

  const regex = /^\/revisions\/\d+$/;

  const FOOTER_LINKS = [
    {
      name: "Help Center",
      link: "#",
    },
    {
      name: "Privacy Policy",
      link: "#",
    },
    {
      name: "Accessibility",
      link: "#",
    },
    {
      name: "User Agreement",
      link: "#",
    },
    {
      name: "Account Management",
      link: "#",
    },
  ];
  const lastElement = pathname.split("/")[2];

  //  if footer is on side e.g home page, notification page
  if (side) {
    return (
      <div
        className={` bg-neutral-200 dark:bg-darkMode-bars text-gray-500 dark:text-darkMode-gray
           py-5 h-screen w-full px-[2rem]`}
      >
        <div className="grid grid-cols-2 px-2 gap-y-1 text-xs font-semibold pt-4">
          {FOOTER_LINKS.map((footer_link, index) => {
            return (
              <p key={index}>
                <a
                  className="hover:underline hover:text-blue-500 dark:hover:text-blue-400
                   transition-all duration-300"
                  href={footer_link.link}
                >
                  {footer_link.name}
                </a>
              </p>
            );
          })}
        </div>
        <p className=" text-[12px] mt-4 pl-2">Techwave Writers &copy; 2024</p>
      </div>
    );
  }
  // if footer is on the bottom e.g. on the profile
  else {
    return (
      <div
        className={`${
          (pathname === "/bookmarks") |
          (pathname === "/home") |
          (pathname === "/submissions") |
          (pathname === "/notifications") |
          regex.test(pathname)
            ? "hidden"
            : ""
        } bg-neutral-200 dark:bg-darkMode-bars text-gray-500 dark:text-darkMode-gray
         md:h-[5rem] w-full md:px-[2rem] pb-4 md:pb-0`}
      >
        <div className="md:flex grid grid-cols-3 justify-around px-8 text-xs font-semibold pt-4">
          {FOOTER_LINKS.map((footer_link, index) => {
            return (
              <p key={index}>
                <a
                  className="hover:underline hover:text-blue-500 dark:hover:text-blue-400
                   transition-all duration-300"
                  href={footer_link.link}
                >
                  {footer_link.name}
                </a>
              </p>
            );
          })}
        </div>
        <p className=" text-[13px] text-center md:text-left md:pl-[83px]  mt-4">
          Techwave Writers &copy; 2024
        </p>
      </div>
    );
  }
};

export default Footer;
