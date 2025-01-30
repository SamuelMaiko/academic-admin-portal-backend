import React from "react";
import ChangeUserForm from "./components/ChangeUserForm";
import PageHeader from "../../SharedComponents/PageHeader";

const ChangeUser = () => {
  return (
    <div
      className={`w-full px-[1rem] md:px-[2rem] dark:bg-darkMode-body min-h-screen `}
    >
      <PageHeader title="Change user" subTitle={"Edit user account details."} />

      <ChangeUserForm />
    </div>
  );
};

export default ChangeUser;
