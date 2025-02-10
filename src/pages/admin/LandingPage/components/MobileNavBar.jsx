import { X } from "phosphor-react";
import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useStateShareContext } from "../../../../Context/StateContext";

const MobileNavBar = () => {
  const navigate = useNavigate();
  const { showMobileNavBar, setShowMobileNavBar, AreasToHideMobileNavBar } =
    useStateShareContext();

  const NAV_LINKS = [
    {
      linkName: "Home",
      link: "/",
    },
    // {
    //   linkName: "Services",
    //   link: "#",
    // },
    // {
    //   linkName: "Contact",
    //   link: "#",
    // },
    // {
    //   linkName: "FAQs",
    //   link: "#",
    // },
  ];

  const mobNavBarRef = useRef(null);

  const handleClickOutside = (event) => {
    if (mobNavBarRef.current && !mobNavBarRef.current.contains(event.target)) {
      setShowMobileNavBar(false);
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
      ref={mobNavBarRef}
      className={`${showMobileNavBar ? "" : "translate-x-[20rem]"} ${
        AreasToHideMobileNavBar ? "hidden" : ""
      }  transition-transform duration-500 absolute lg:hidden z-20
         bg-white right-0 bottom-0 top-0 w-[18rem] px-3 pt-[4.5rem]
          `}
    >
      {/* toggle button */}
      <button
        onClick={() => setShowMobileNavBar(false)}
        className="absolute top-3 left-3 p-2 border-blue-500 border-[2px] hover:bg-gray-100
         dark:hover:bg-gray-600 dark:text-darkMode-text rounded-lg transition-colors duration-300"
      >
        <X size={18} />
      </button>
      {NAV_LINKS.map((nav, index) => {
        return (
          <button
            onClick={() => {
              setShowMobileNavBar(false);
              navigate(nav.link);
            }}
            key={index}
            className="bg-gray-100 hover:bg-[rgba(229,231,235,0.8)] w-full py-2 text-center text-[14px]
            font-semibold mb-5 transition-colors duration-300"
          >
            {nav.linkName}
          </button>
        );
      })}

      {/* <button
        onClick={() => {
          setShowMobileNavBar(false);
          navigate("/login");
        }}
        className=" bg-green-500 hover:bg-green-600 w-[90%] py-2 text-center text-white
            font-semibold mb-5 transition-colors duration-300 rounded-3xl text-[15px] absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        Login
      </button> */}
    </div>
  );
};

export default MobileNavBar;
