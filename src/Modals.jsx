import React from "react";
import { useStateShareContext } from "./Context/StateContext";
import DeleteWorkModal from "./app/ChangeWork/components/DeleteWorkModal";
import Settings from "./app/Settings/page";
import EditPFPModal from "./app/Profile/components/EditPFPModal";
import DeleteProfilePhotoModal from "./app/Profile/components/DeleteProfilePhotoModal";
import SideBarModal from "./MobileView/SideBar/SideBarModal";
import TransparentModal from "./MobileView/SideBar/TransparentModal";
import DeleteAccountModal from "./app/Settings/components/DeleteAccountModal";
import DeactivateAccountModal from "./app/Settings/components/DeactivateAccountModal";
import ChooseWriterModal from "./app/CreateWork/components/ChooseWriterModal";
import ChooseWorkModal from "./app/CreateRevision/components/ChooseWorkModal";
import DeleteUserModal from "./app/ChangeUser/components/DeleteUserModal";
import DeactivateUserModal from "./app/ChangeUser/components/DeactivateUserModal";
import EditImagesModal from "./app/ChangeWork/components/EditImagesModal";
import EditFilesModal from "./app/ChangeWork/components/EditFilesModal";

const Modals = () => {
  const { darkMode } = useStateShareContext();
  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <DeleteWorkModal />
      <Settings />
      <EditPFPModal />
      <DeleteProfilePhotoModal />
      <SideBarModal />
      <TransparentModal />
      <DeleteAccountModal />
      <DeactivateAccountModal />
      <ChooseWriterModal />
      <ChooseWorkModal />
      <DeleteUserModal />
      <DeactivateUserModal />
      <EditImagesModal />
      <EditFilesModal />
    </div>
  );
};

export default Modals;
