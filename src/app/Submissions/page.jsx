import React from "react";
import PageHeader from "../../SharedComponents/PageHeader";
import { useStateShareContext } from "../../Context/StateContext";
import TableSubmissions from "./components/TableSubmissions";

const Submissions = () => {
  const { darkMode } = useStateShareContext();

  return (
    <div
      className={`w-full px-[1rem] md:px-[2rem] ${
        darkMode ? "dark" : ""
      } dark:bg-darkMode-body min-h-screen `}
    >
      <PageHeader
        title="Submissions"
        subTitle={"Review and manage submitted work from writers"}
      />
      <div className="relative">
        <TableSubmissions />
      </div>
    </div>
  );
};

export default Submissions;
