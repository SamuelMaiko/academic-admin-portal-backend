import React, { useState } from "react";
import PageHeader from "../../SharedComponents/PageHeader";
import ChangeWorkForm from "./components/ChangeWorkForm";

const ChangeWork = () => {
  return (
    <div
      className={`w-full px-[1rem] md:px-[2rem] dark:bg-darkMode-body min-h-screen `}
    >
      <PageHeader title="Change work" subTitle={"Edit work details."} />

      <ChangeWorkForm />
    </div>
  );
};

export default ChangeWork;
