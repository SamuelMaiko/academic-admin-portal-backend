import React, { useEffect } from "react";
import PageHeader from "../../../SharedComponents/PageHeader";
import TableUptakenWork from "./components/TableUptakenWork";
import { useAdminContext } from "../../../Context/AdminContext";

const UptakenWork = () => {
  const { setShowNavBar } = useAdminContext();

  useEffect(() => {
    setShowNavBar(true);
  }, []);

  return (
    <div className="w-full px-[1rem] md:px-[2rem] dark:bg-darkMode-body min-h-screen bg-gray-100">
      <PageHeader
        title={"Uptaken work"}
        subTitle={"Browse work you chose from the work feed."}
      />
      <div>
        <TableUptakenWork />
      </div>
    </div>
  );
};

export default UptakenWork;
