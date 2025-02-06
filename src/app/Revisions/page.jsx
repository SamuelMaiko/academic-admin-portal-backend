import React, { useEffect } from "react";
import PageHeader from "../../SharedComponents/PageHeader";
import TableRevisions from "./components/TableRevisions";
import { useAdminContext } from "../../Context/AdminContext";

const Revisions = () => {
  const { setShowNavBar } = useAdminContext();

  useEffect(() => {
    setShowNavBar(true);
  }, []);

  return (
    <div className="w-full px-[1rem] md:px-[2rem] pb-[5rem] dark:bg-darkMode-body min-h-screen bg-gray-100">
      <PageHeader
        title={"Revisions"}
        subTitle={"Create, edit and delete revisions of work here."}
      />

      <div className="relative mt-4">
        <TableRevisions />
      </div>
    </div>
  );
};

export default Revisions;
