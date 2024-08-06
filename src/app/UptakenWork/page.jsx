import React from "react";
import PageHeader from "../../SharedComponents/PageHeader";
import TableUptakenWork from "./components/TableUptakenWork";

const UptakenWork = () => {
  return (
    <div className="w-full px-[1rem] md:px-[2rem] dark:bg-darkMode-body min-h-screen">
      <PageHeader
        title={"Work you have uptaken to do"}
        subTitle={
          "Browse work you chose from the work feed at the homepage. Ordered by the latest."
        }
      />
      <div>
        <TableUptakenWork />
      </div>
    </div>
  );
};

export default UptakenWork;
