import React from "react";
import { useStateShareContext } from "./Context/StateContext";
import DeleteWorkModal from "./pages/admin/ChangeWork/components/DeleteWorkModal";
import Settings from "./pages/admin/Settings/page";
import EditPFPModal from "./pages/admin/Profile/components/EditPFPModal";
import DeleteProfilePhotoModal from "./pages/admin/Profile/components/DeleteProfilePhotoModal";
import SideBarModal from "./MobileView/SideBar/SideBarModal";
import TransparentModal from "./MobileView/SideBar/TransparentModal";
import DeleteAccountModal from "./pages/admin/Settings/components/DeleteAccountModal";
import DeactivateAccountModal from "./pages/admin/Settings/components/DeactivateAccountModal";
import ChooseWriterModal from "./pages/admin/CreateWork/components/ChooseWriterModal";
import ChooseWorkModal from "./pages/admin/CreateRevision/components/ChooseWorkModal";
import DeleteUserModal from "./pages/admin/ChangeUser/components/DeleteUserModal";
import DeactivateUserModal from "./pages/admin/ChangeUser/components/DeactivateUserModal";
import EditImagesModal from "./pages/admin/ChangeWork/components/EditImagesModal";
import EditFilesModal from "./pages/admin/ChangeWork/components/EditFilesModal";

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
