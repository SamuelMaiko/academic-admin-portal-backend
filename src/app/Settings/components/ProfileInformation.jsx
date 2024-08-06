import React from "react";
import SettingsBlock from "./SettingsBlock";
import { useStateShareContext } from "../../../Context/StateContext";

const ProfileInformation = () => {
  const { setShowEditInfoModal, setSettingsOpen } = useStateShareContext();
  return (
    <div className=" bg-neutral-100 rounded-lg dark:bg-darkMode-body dark:text-darkMode-text">
      <h1 className="p-2 pb-0 text-lg mb-2 font-semibold ">
        Profile information
      </h1>
      <SettingsBlock
        onClick={() => {
          setShowEditInfoModal(true);
          setSettingsOpen(false);
        }}
        title="Name, location"
      />
    </div>
  );
};

export default ProfileInformation;
