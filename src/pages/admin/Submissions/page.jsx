import React, { useEffect } from "react";
import PageHeader from "../../../SharedComponents/PageHeader";
import { useStateShareContext } from "../../../Context/StateContext";
import TableSubmissions from "./components/TableSubmissions";
import { useAdminContext } from "../../../Context/AdminContext";

const Submissions = () => {
  const { darkMode } = useStateShareContext();
  const { setShowNavBar } = useAdminContext();

  useEffect(() => {
    setShowNavBar(true);
  }, []);

  return (
    <div
      className={`w-full px-[1rem] md:px-[2rem] ${
        darkMode ? "dark" : ""
      } dark:bg-darkMode-body min-h-screen bg-gray-100`}
    >
      <PageHeader
        title="Submissions"
        subTitle={"Review and manage submitted work from writers"}
      />
      <div className="relative mt-4">
        <TableSubmissions />
      </div>
    </div>
  );
};

export default Submissions;
