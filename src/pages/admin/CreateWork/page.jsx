import React, { useEffect } from "react";
import PageHeader from "../../../SharedComponents/PageHeader";
import CreateWorkForm from "./components/CreateWorkForm";
import { useAdminContext } from "../../../Context/AdminContext";

const CreateWork = () => {
  const { setWriter, setWriterName } = useAdminContext();

  useEffect(() => {
    setWriter("");
    setWriterName("");
  }, []);
  return (
    <div
      className={`w-full px-[1rem] md:px-[2rem] dark:bg-darkMode-body min-h-screen `}
    >
      <PageHeader title="Create work" subTitle={"Create new work."} />

      <CreateWorkForm />
    </div>
  );
};

export default CreateWork;
