import { X } from "phosphor-react";
import React, { useEffect, useRef } from "react";
import { useStateShareContext } from "../../Context/StateContext";
import ProfileInformation from "./components/ProfileInformation";
import AccountManagement from "./components/AccountManagement";
import DarkModeSetting from "./components/DarkModeSetting";

const Settings = () => {
  const { settingsOpen, setSettingsOpen } = useStateShareContext();

  const settingsRef = useRef(null);

  const handleClickOutside = (event) => {
    if (settingsRef.current && !settingsRef.current.contains(event.target)) {
      setSettingsOpen(false);
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
      ref={settingsRef}
      className={`${
        settingsOpen ? "" : "translate-x-[22rem] "
      }  transition-transform duration-500 bg-white w-[20rem] shadow-[-2px_-2px_11px_rgba(0,0,0,0.3)]
     dark:shadow-gray-500 pt-[5rem] p-2 h-screen fixed right-0 top-0 bottom-0 z-40
     dark:bg-darkMode-bars
     `}
    >
      {/* toggle button */}
      <button
        onClick={() => setSettingsOpen(false)}
        className="absolute top-3 right-3 p-2 border-blue-500 border-[2px] hover:bg-gray-100
         dark:hover:bg-gray-600 dark:text-darkMode-text rounded-lg transition-colors duration-300"
      >
        <X size={22} />
      </button>
      <ProfileInformation />
      <DarkModeSetting />
      <AccountManagement />
    </div>
  );
};

export default Settings;
