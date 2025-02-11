import React from "react";
import { List } from "phosphor-react";
import { useStateShareContext } from "../../../Context/StateContext";
import Button from "./ui/Button";
import LogoDark from "../../../assets/LogoDark.png";
import Logo from "../../../assets/Logo.png";
import LogoLight from "../../../assets/LogoLight.png";
import ProfilePreview from "./ProfilePreview";
import SideBarLinks from "./SideBarLinks";

const SideBar = () => {
  const { shrinkSideBar, setShrinkSideBar, darkMode } = useStateShareContext();
  

  return (
    <div
      className={`
      ${shrinkSideBar ? "w-[5rem]" : "w-[20vw]"} border-r border-[#f5f4f4] ${
        darkMode ? "sidebar" : ""
      } transition-width duration-500 pt-[2rem] dark:bg-darkMode-bars
       dark:text-darkMode-text hidden md:block pb-[2rem]`}
    >
      <div
        className={`flex ${
          shrinkSideBar ? "justify-center" : "justify-between"
        } items-center px-[2rem]`}
      >
        <div className={`${shrinkSideBar ? "hidden" : ""} text-xl flex-1`}>
          {/* Logo */}
          <div className=" flex justify-center">
            <div className="h-[2.7rem] w-[11rem] ">
              <img
                className="w-full h-[100%] object-cover object-center"
                src={darkMode ? LogoDark : LogoLight}
                alt=""
              />
            </div>
          </div>
        </div>

        {/* sidebar toggle button */}
        <Button
          onClick={() => setShrinkSideBar((current) => !current)}
          buttonType="roundedIconBtn"
          className={`dark:text-white dark:hover:text-white dark:hover:bg-gray-600 `}
        >
          <List size={24} />
        </Button>
      </div>

      {/* profile preview */}
      <ProfilePreview />

      {/* button links */}
      <SideBarLinks />
    </div>
  );
};

export default SideBar;
