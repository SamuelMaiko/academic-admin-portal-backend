import React, { useState } from "react";
import PageHeader from "../../SharedComponents/PageHeader";
import CreateWorkForm from "./components/CreateWorkForm";

const CreateWork = () => {
  return (
    <div
      className={`w-full px-[1rem] md:px-[2rem] dark:bg-darkMode-body min-h-screen `}
    >
      <PageHeader title="Create work" subTitle={"Create new work."} />

      <CreateWorkForm />
    </div>
  );
};

export default CreateWork;
