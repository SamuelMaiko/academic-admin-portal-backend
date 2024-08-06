import React from "react";
import PageHeader from "../../SharedComponents/PageHeader";
import TableRevisions from "./components/TableRevisions";

const Revisions = () => {
  return (
    <div className="w-full px-[1rem] md:px-[2rem] pb-[5rem] dark:bg-darkMode-body min-h-screen">
      <PageHeader
        title={"Revisions"}
        subTitle={"See the work that that needs to be corrected."}
      />

      <div>
        <TableRevisions />
      </div>
    </div>
  );
};

export default Revisions;
