import React from "react";
import PageHeader from "../../SharedComponents/PageHeader";
import CreateRegCodeForm from "./components/CreateRegCodeForm";

const CreateRegistrationCode = () => {
  return (
    <div
      className={`w-full px-[1rem] md:px-[2rem] dark:bg-darkMode-body min-h-screen `}
    >
      <PageHeader
        title="Create registration code"
        subTitle={
          "Create a registration code to enable new writers self register to the writer's portal."
        }
      />

      <CreateRegCodeForm />
    </div>
  );
};

export default CreateRegistrationCode;
