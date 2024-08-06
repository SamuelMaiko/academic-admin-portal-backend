import React, { useEffect, useRef } from "react";
import { useStateShareContext } from "../../Context/StateContext";
import Button from "../../app/Home/components/ui/Button";
import {
  Binoculars,
  BookmarkSimple,
  Briefcase,
  House,
  Pen,
  X,
} from "phosphor-react";
import LogoDark from "../../assets/LogoDark.png";
import LogoLight from "../../assets/LogoLight.png";
import { useLocation, useNavigate } from "react-router-dom";
import ProfilePreview from "./ProfilePreview";
import ButtonLinks from "./ButtonLinks";

const MobileSideBar = () => {
  const { showMobileSideBar, setShowMobileSideBar, darkMode } =
    useStateShareContext();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const sideBarRef = useRef(null);

  const handleClickOutside = (event) => {
    if (sideBarRef.current && !sideBarRef.current.contains(event.target)) {
      setShowMobileSideBar(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={sideBarRef}
      className={`${
        showMobileSideBar ? "delay-75 translate-x-[27rem]" : ""
      } absolute left-[5%]  bg-white dark:bg-darkMode-bars w-[60%] h-[96%]
       top-1/2 -translate-y-1/2 rounded-3xl transition-transform duration-500  z-[50] md:hidden `}
    >
      {/* close button */}
      <Button
        onClick={() => setShowMobileSideBar((current) => !current)}
        buttonType="roundedIconBtn"
        className={`dark:text-white dark:hover:text-white dark:hover:bg-gray-600 absolute right-4 top-2`}
      >
        <X size={24} />
      </Button>
      {/* logo */}
      <div className="h-[2.5rem] ml-2 mt-[3.7rem] ">
        <img
          className="w-[10rem] h-full object-cover object-center"
          src={darkMode ? LogoDark : LogoLight}
          alt=""
        />
      </div>
      {/* profile preview */}
      <ProfilePreview />
      {/* button links */}
      <ButtonLinks />
    </div>
  );
};

export default MobileSideBar;
