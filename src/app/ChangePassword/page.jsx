import React from "react";
import Button from "../Home/components/ui/Button";
import ChangePasswordForm from "./components/ChangePasswordForm";
import PageHeader from "../../SharedComponents/PageHeader";

const ChangePassword = () => {
  return (
    <div className="w-full px-[2rem] h-full dark:bg-darkMode-body pb-[4rem]">
      <PageHeader
        title={"Change Password"}
        subTitle={"Password should be atleast 8 characters long."}
      />
      <ChangePasswordForm />
    </div>
  );
};

export default ChangePassword;
