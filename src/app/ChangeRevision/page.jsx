import React from "react";
import PageHeader from "../../SharedComponents/PageHeader";
import ChangeRevisionForm from "./components/ChangeRevisionForm";

const ChangeRevision = () => {
  return (
    <div
      className={`w-full px-[1rem] md:px-[2rem] dark:bg-darkMode-body min-h-screen `}
    >
      <PageHeader
        title="Change revision"
        subTitle={"Edit created revisions."}
      />

      <ChangeRevisionForm />
    </div>
  );
};

export default ChangeRevision;

// tomorrow
// submission detail page
// files and images upload, view and delete for work
// work around for same state used in create and change of work and revision i.e change work, change writer
