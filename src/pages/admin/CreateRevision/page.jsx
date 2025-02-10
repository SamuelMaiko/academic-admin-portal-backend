import React from "react";
import PageHeader from "../../../SharedComponents/PageHeader";
import CreateRevisionForm from "./components/CreateRevisionForm";

const CreateRevision = () => {
  return (
    <div
      className={`w-full px-[1rem] md:px-[2rem] dark:bg-darkMode-body min-h-screen `}
    >
      <PageHeader
        title="Create revision"
        subTitle={"Create revision for any submitted work."}
      />

      <CreateRevisionForm />
    </div>
  );
};

export default CreateRevision;
