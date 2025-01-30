import React, { useState } from "react";
import PageHeader from "../../SharedComponents/PageHeader";
import CreateUserForm from "./components/CreateUserForm";

const CreateUser = () => {
  return (
    <div
      className={`w-full px-[1rem] md:px-[2rem] dark:bg-darkMode-body min-h-screen `}
    >
      <PageHeader title="Create user" subTitle={"Create a new user account."} />

      <CreateUserForm />
    </div>
  );
};

export default CreateUser;
