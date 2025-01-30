import React from "react";
import PageHeader from "../../SharedComponents/PageHeader";
import ChangeRegCodeForm from "./components/ChangeRegCodeForm";

const ChangeRegistrationCode = () => {
  return (
    <div
      className={`w-full px-[1rem] md:px-[2rem] dark:bg-darkMode-body min-h-screen `}
    >
      <PageHeader
        title="Change registration code"
        subTitle={
          "Edit details  the details of a registration code e.g the expiry time."
        }
      />

      <ChangeRegCodeForm />
    </div>
  );
};

export default ChangeRegistrationCode;
