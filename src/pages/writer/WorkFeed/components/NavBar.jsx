import React, { useEffect, useState } from "react";
import Button from "./ui/Button";
import { Gear, List } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { useStateShareContext } from "../../../Context/StateContext";
import Vini from "../../../assets/Default_pfp.jpg";
import { useNotificationContext } from "../../../Context/NotificationContext";

const NavBar = () => {
  const navigate = useNavigate();
  const [greeting, setGreeting] = useState("");
  const {
    setSettingsOpen,
    setShowMobileSideBar,
    imageURL,
    firstName,
    lastName,
    getDetails,
  } = useStateShareContext();
  const { notificationsCount, getNotificationsCount } =
    useNotificationContext();

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting("Morning");
    } else if (hour < 18) {
      setGreeting("Afternoon");
    } else {
      setGreeting("Evening");
    }

    // getting latest notification count on page load
    getNotificationsCount();

    // getting details if cleared from LOCAL STORAGE
    if (firstName === "" || lastName === "") {
      getDetails();
    }
  }, []);

  return (
    <div
      className={`w-full h-[5rem] px-[1rem] md:px-[2rem] flex  items-center justify-between sticky
         top-0 z-40 bg-white dark:bg-darkMode-bars dark:text-darkMode-text`}
    >
      <p className="text-xl font-bold">
        {greeting} {firstName}!
      </p>
      <div className="flex items-center gap-2">
        {/* settings button */}
        <Button
          onClick={() => setSettingsOpen(true)}
          buttonType="roundedIconBtn"
          className="dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <Gear size={22} />
        </Button>
        {/* sidebar toggle button -- mobile view */}
        <Button
          onClick={() => setShowMobileSideBar(true)}
          buttonType="roundedIconBtn"
          className="dark:hover:bg-gray-600 dark:hover:text-white md:hidden"
        >
          <List size={22} />
        </Button>

        {/* notifications icon */}
        <div
          onClick={() => navigate("/notifications")}
          className="notification"
        >
          <div className="relative bell-container">
            <div className="bell border-[2.17px] border-black dark:border-white before:bg-black after:bg-black dark:before:bg-white dark:after:bg-white"></div>
            <div
              className="absolute -top-[0.4rem] -right-[0.4rem] size-[13px] flex items-center
              justify-center font-semibold bg-red-500 text-white rounded-full text-[10px]"
            >
              <span>{notificationsCount.notifications}</span>
            </div>
          </div>
        </div>
        {/* user profile button */}
        <Button
          onClick={() => navigate("/profile")}
          buttonType="roundedIconBtn"
          className="dark:hover:bg-gray-600 size-[2.1rem] ml-1 p-0 overflow-hidden bg-black dark:hover:text-white"
        >
          <img
            className="w-full h-full object-cover object-top"
            src={imageURL == "" ? Vini : imageURL}
            alt=""
          />
          {/* <User size={22} /> */}
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
