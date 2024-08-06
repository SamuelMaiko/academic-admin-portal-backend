import React from "react";
import SettingsBlock from "./SettingsBlock";
import { useStateShareContext } from "../../../Context/StateContext";
import { Divider } from "keep-react";
import { Navigate, useNavigate } from "react-router-dom";
import { deleteCookie } from "../../../Cookies/Cookie";
import { toast } from "react-toastify";

const AccountManagement = () => {
  const {
    setShowEditInfoModal,
    setSettingsOpen,
    setShowDeleteAccountModal,
    setShowDeactivateAccountModal,
  } = useStateShareContext();
  const navigate = useNavigate();
  return (
    <div className=" bg-neutral-100 rounded-lg mt-3 dark:bg-darkMode-body dark:text-darkMode-text">
      <h1 className="p-2 pb-0 text-lg mb-2 font-semibold ">
        Account management
      </h1>
      <SettingsBlock
        onClick={() => {
          //   setShowEditInfoModal(true);
          setSettingsOpen(false);
          setShowDeactivateAccountModal(true);
        }}
        title="Deactivate account"
      />

      <Divider className="dark:hidden" color="primary" />
      <Divider className="hidden dark:block" color="secondary" />
      <SettingsBlock
        onClick={() => {
          //   setShowEditInfoModal(true);
          setSettingsOpen(false);
          setShowDeleteAccountModal(true);
        }}
        title="Delete account"
      />
      <Divider className="dark:hidden" color="primary" />
      <Divider className="hidden dark:block" color="secondary" />
      <SettingsBlock
        onClick={() => {
          navigate("/settings/change-password");
          setSettingsOpen(false);
        }}
        title="Change password"
      />
      <Divider className="dark:hidden" color="primary" />
      <Divider className="hidden dark:block" color="secondary" />
      <SettingsBlock
        onClick={() => {
          localStorage.clear();
          deleteCookie("access_token");
          deleteCookie("refresh_token");
          toast.success("Logged out.");
          setSettingsOpen(false);
          navigate("/");
        }}
        title="Sign Out"
      />
    </div>
  );
};

export default AccountManagement;
