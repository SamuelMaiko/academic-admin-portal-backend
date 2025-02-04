import React, { useState } from "react";
import PageHeader from "../../SharedComponents/PageHeader";
import ChangeRevisionForm from "./components/ChangeRevisionForm";
import Loader from "../../SharedComponents/Loader";

const ChangeRevision = () => {
  const [pageLoading, setPageLoading] = useState(false);

  return (
    <div
      className={`relative w-full px-[1rem] md:px-[2rem] dark:bg-darkMode-body min-h-screen `}
    >
      <PageHeader
        title="Change revision"
        subTitle={"Edit created revisions."}
      />

      <ChangeRevisionForm setPageLoading={setPageLoading} />

      {/* loader */}
      <div
        className={`absolute bg-[rgba(255,255,255,0.9)] inset-0 bottom-0 flex flex-col items-center pt-[13rem]
        ${pageLoading ? "" : "hidden"}
        `}
      >
        <Loader loading={pageLoading} />
        <h1 className="font-semibold">Loading ...</h1>
      </div>
    </div>
  );
};

export default ChangeRevision;
